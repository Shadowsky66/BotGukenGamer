function randomNumber(min = 1, max = 100, random = Math.random) {
    min = Math.abs(Number(min));
    max = Math.abs(Number(max));

    if (isNaN(min) || isNaN(max)) {
        return "Нужно указать число";
    }
    if (min == Infinity || max == Infinity) {
        return "Значение слишком большое";
    }

    return Math.floor(min + random() * (max + 1 - min));
}

module.exports = randomNumber;