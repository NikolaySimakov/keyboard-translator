let EN_RU = new Map();
let RU_EN = new Map();

EN_RU
    .set("q", "й")
    .set("w", "ц")
    .set("e", "у")
    .set("r", "к")
    .set("t", "е")
    .set("y", "н")
    .set("u", "г")
    .set("i", "ш")
    .set("o", "щ")
    .set("p", "з")
    .set("[", "х")
    .set("]", "ъ")
    .set("a", "ф")
    .set("s", "ы")
    .set("d", "в")
    .set("f", "а")
    .set("g", "п")
    .set("h", "р")
    .set("j", "о")
    .set("k", "л")
    .set("l", "д")
    .set(";", "ж")
    .set("'", "э")
    .set("z", "я")
    .set("x", "ч")
    .set("c", "с")
    .set("v", "м")
    .set("b", "и")
    .set("n", "т")
    .set("m", "ь")
    .set(",", "б")
    .set(".", "ю")
    .set(" ", " ");


for (let key of EN_RU.keys()) {
    RU_EN.set(EN_RU.get(key), key);
}


export { EN_RU, RU_EN };