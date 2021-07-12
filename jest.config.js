module.exports = {
    "extensionsToTreatAsEsm": ['.ts'],
    "globals": {
        "ts-jest": {
            "tsconfig": "<rootDir>/tsconfig.spec.json",
            "stringifyContentPathRegex": '\\.html$',
            "useESM": true,
        }
    }
};
