module.exports = {
    "plugins": ["prettier"],
    "env": {
        "browser": true,
        "es6": true
    },
    "parserOptions": {
        "sourceType": "module",
    },
    "extends": [
        "eslint:recommended",
        "google",
    ],
    "rules" : {
        //additional/override rules
        'max-len': ["error", { "code": 120 }]
    }
};