# Keyboard-translator

This library is for the segment of users with dual keyboard layouts who mistakenly write words without changing the keyboard layout. It automatically translates all the necessary text fragments, thus saving users a lot of time.

## Install

```
npm install keyboard-translator
```

## Basic usage

```
import keyboardTranslator from 'keyboard-translator';

const text = 'Руддщ Цщкдв!'; // Incorrect sentence
const fixedSentence = keyboardTranslator.translateSentence(text);
console.log(fixedSentence); // Correct sentence: Hello World!
```
