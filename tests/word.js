import test from 'ava';
import keyboardTranslator from '../index.js';

// MARK: - EN <---> RU

test('English words written in Russian characters', async t => {
    // https://randomwordgenerator.com/
    t.is(await keyboardTranslator.translateWord('ызщшд', 'ru', 'en'), 'spoil');
    t.is(await keyboardTranslator.translateWord('Иудд', 'ru', 'en'), 'Bell');
});

test('Russian words written in English characters', async t => {
    t.is(await keyboardTranslator.translateWord('Pfghtn', 'ru', 'en'), 'Запрет');
    t.is(await keyboardTranslator.translateWord('Kmyenm', 'ru', 'en'), 'Льнуть');
    t.is(await keyboardTranslator.translateWord('hjlcndtyysq', 'ru', 'en'), 'родственный');
    t.is(await keyboardTranslator.translateWord('FkeWjk', 'ru', 'en'), 'FkeWjk');
    t.is(await keyboardTranslator.translateWord('QLNwef', 'ru', 'en'), 'QLNwef');
});

test('Russian words written in English characters (failed tests)', async t => {
    t.is(await keyboardTranslator.translateWord('J,pfdtltybt', 'ru', 'en'), 'Обзаведение');
    t.is(await keyboardTranslator.translateWord('Cnthrf', 'ru', 'en'), 'Стерка');
    t.is(await keyboardTranslator.translateWord('ryenbot', 'ru', 'en'), 'кнутище');
    t.is(await keyboardTranslator.translateWord('Hfcgjhjnmcz', 'ru', 'en'), 'Распороться');
});