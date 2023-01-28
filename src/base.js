import keyboardLayouts from "./resources/keyboardLayouts.js";
import { wordExists } from "./services/wiktionaryParser.js";


function getCurrentLanguage(word) {

    const methods = {
        "en": _en,
        "ru": _ru,
    }

    for (let [lang, m] of Object.entries(methods)) {
        if (m(word)) {
            return lang
        }
    }

}


function _en(word) {
    return !!word.match(/[aA-zZ]/gm)
}


function _ru(word) {
    return !!word.match(/[аА-яЯ]/gm)
}


function en2ru(word) {
    const chars = word.toLowerCase().split('');
    return chars.map(char => keyboardLayouts.en_ru[char]).join('');
}


function ru2en(word) {
    const chars = word.toLowerCase().split('');
    return chars.map(char => keyboardLayouts.ru_en[char]).join('');
}


async function translateWord(word) {

    let translation;

    switch (getCurrentLanguage(word)) {
        case 'en':
            translation = en2ru(word);
            break;
        case 'ru':
            translation = ru2en(word);
            break;
        default:
            return word;
    }

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


async function translateSentence(sentence) {
    const words = sentence.split(' ');
    const translatedWords = await Promise.all(words.map(async (word) => {
        return await translateWord(word);
    }));

    return translatedWords.join(' ');
}


export {
    translateWord, 
    translateSentence,
}