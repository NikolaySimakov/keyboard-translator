import * as keyboardLayouts from "./resources/keyboardLayouts.js";
import { wordExists } from "./services/wiktionaryParser.js";


function getCurrentLanguage(word) {

    const languageRegExes = {
        "en": (s) => !!s.match(/[aA-zZ]/gm),
        "ru": (s) => !!s.match(/[аА-яЯ]/gm),
    }

    for (let [language, regex] of Object.entries(languageRegExes)) {
        if (regex(word)) {
            return language
        }
    }

}


function replaceChars(word, currentLanguage, languageToTranslate) {
    const chars = word.toLowerCase().split('');
    const keyboardLayout = keyboardLayouts.getFor(currentLanguage, languageToTranslate);
    return chars.map(char => keyboardLayout.get(char)).join('');
}


/**
 * Returns the "translation" of the word, if required.
 *
 * @param {string} word What needs to be "translated".
 * @param {array} languages Allowed languages: current language and language for "translation". Should be two.
 * @return {Promise.<string>} "translated" (if needed) word.
 */
async function translateWord(word, ...languages) {

    if (languages.length !== 2) {
        throw new RangeError('The number of languages should be 2');
    }

    const currentLanguage = getCurrentLanguage(word);

    if (!languages.includes(currentLanguage)) {
        throw new Error('Language not found');
    }

    const languageToTranslate = languages.filter(lang => lang !== currentLanguage)[0];

    const translation = replaceChars(word, currentLanguage, languageToTranslate);

    const currentWordExists = await wordExists(word);
    const translationExists = await wordExists(translation);

    if (currentWordExists) {
        return word;
    }

    if (!currentWordExists && translationExists) {
        return translation;
    }

    return word;
}


/**
 * Returns the "translation" of the sentence, if required.
 *
 * @param {string} sentence What needs to be "translated".
 * @param {array} languages Allowed languages: current language and language for "translation". Should be two.
 * @return {Promise.<string>} "translated" (if needed) sentence.
 */
async function translateSentence(sentence, ...languages) {
    const words = sentence.split(' ');
    const translatedWords = await Promise.all(words.map(async (word) => {
        return await translateWord(word, ...languages);
    }));

    return translatedWords.join(' ');
}


export {
    translateWord, 
    translateSentence,
}