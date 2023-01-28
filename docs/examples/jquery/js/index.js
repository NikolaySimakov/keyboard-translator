import { translateWord, translateSentence } from '../../../../index.js'

let textArea = document.getElementById('area')
let translateBtn = document.getElementById('translateBtn')

textArea.addEventListener('input', function (event) {
    
})

translateBtn.addEventListener('click', function () {
    const trSentence = translateSentence(textArea.value)
    textArea.value = trSentence
})