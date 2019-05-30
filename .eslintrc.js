module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true,
    "jquery": true
  },
  "parser": "babel-eslint",
  "rules": {
    "semi": [2, "never"],
    "linebreak-style": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "comma-dangle": ["error", "never"],
    "jsx-a11y/label-has-for": [ 2, {
      "required": {
        "every": [ "id" ]
      }
    }],
    "no-console": "off",
    "no-nested-ternary": "off",
    "strict": 0,
    "sort-comp": 0,
    "max-len": ["error", {
      "code": 300
    }],
    "react/jsx-no-bind": "off",
    "no-underscore-dangle": "off",
    "new-cap": "off",
    "import/no-useless-path-segments": "off"
  }
}