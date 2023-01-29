import { EN_RU, RU_EN } from "./languages/ru.js";

function getFor(...languages) {

    if (languages.includes('ru')) {
        const [currentLanguage, _] = languages;
        if (currentLanguage === 'ru') {
            return RU_EN;
        } else {
            return EN_RU;
        }
    }

}

export {
    getFor,
}