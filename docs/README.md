# keyboard-translator.js

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
![npm](https://img.shields.io/npm/dw/keyboard-translator) 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

## Install

```
npm install keyboard-translator
```

or

```
yarn add keyboard-translator
```

## 🤔 What is this?

This library is for the segment of users with dual keyboard layouts who mistakenly write words without changing the keyboard layout. It automatically translates all the necessary text fragments, thus saving users a lot of time.

## Basic usage

```
import keyboardTranslator from 'keyboard-translator';

const text = 'Руддщ Цщкдв!'; // Incorrect sentence
const fixedSentence = keyboardTranslator.translateSentence(text);
console.log(fixedSentence); // Correct sentence: Hello World!
```

## 📖 Full Documentation

Full documentation see [here](https://jdlkjdk.com).

## 💁 Contributing

As an open source project in a rapidly developing field, we are extremely open to contributions, whether it be in the form of a new feature, improved infra, or better documentation.

Check out our [contributing guidelines](https://jdlkjdk.com) for instructions on how to contribute.