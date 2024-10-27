const {
    spacing: twSpacing,
    borderRadius: twRadius,
} = require("tailwindcss/defaultTheme");

function convertLumaUnit(value) {
    const remNumber = parseFloat(value);
    const pxValue = remNumber * 1.6;
    return pxValue + "rem";
}

function convertLumaSpacing(object) {
    let objectPx = {};

    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const value = object[key];
            const isRemValue = value.includes("rem");
            objectPx[key] = isRemValue ? convertLumaUnit(value) : value;
        }
    }

    return objectPx;
}

const spacing = convertLumaSpacing(twSpacing);
const borderRadius = convertLumaSpacing(twRadius);
const fontSize = {
    xs: [convertLumaUnit("0.75rem"), { lineHeight: convertLumaUnit("1rem") }],
    sm: [
        convertLumaUnit("0.875rem"),
        { lineHeight: convertLumaUnit("1.25rem") },
    ],
    base: [convertLumaUnit("1rem"), { lineHeight: convertLumaUnit("1.5rem") }],
    lg: [
        convertLumaUnit("1.125rem"),
        { lineHeight: convertLumaUnit("1.75rem") },
    ],
    xl: [
        convertLumaUnit("1.25rem"),
        { lineHeight: convertLumaUnit("1.75rem") },
    ],
    "2xl": [convertLumaUnit("1.5rem"), { lineHeight: convertLumaUnit("2rem") }],
    "3xl": [
        convertLumaUnit("1.875rem"),
        { lineHeight: convertLumaUnit("2.25rem") },
    ],
    "4xl": [
        convertLumaUnit("2.25rem"),
        { lineHeight: convertLumaUnit("2.5rem") },
    ],
    "5xl": [convertLumaUnit("3rem"), { lineHeight: "1" }],
    "6xl": [convertLumaUnit("3.75rem"), { lineHeight: "1" }],
    "7xl": [convertLumaUnit("4.5rem"), { lineHeight: "1" }],
    "8xl": [convertLumaUnit("6rem"), { lineHeight: "1" }],
    "9xl": [convertLumaUnit("8rem"), { lineHeight: "1" }],
};

module.exports = { spacing, fontSize, borderRadius };
