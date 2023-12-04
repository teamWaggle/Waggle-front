module.exports = {
    "env": {
      "browser": true,
      "es6": true,
      "node": true
    },
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint","import"],
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
    ],
    "rules": {
      // "import/extensions": "off",
      // "import/no-unresolved": "off",
      // "react/jsx-boolean-value": "off",
      // "react/prop-types": "off",
      // "react/react-in-jsx-scope": "off",
      // "react/jsx-no-useless-fragment": "off",
      // "react/jsx-props-no-spreading": "off",
      // "arrow-body-style": "off",
      // "no-param-reassign": "off",
      // "prettier/prettier": ["error", { "endOfLine": "auto" }],
      // "camelcase": "off",
      "import/order":[
        "error",
          {
            "groups": [
              "builtin",
              "external",
              "unknown",
              "internal",
              ["sibling", "parent"]
            ],
            "pathGroups": [
              {
                "pattern": "{react*,react*/*}",
                "group": "external",
                "position": "before"
              }
            ],
            "pathGroupsExcludedImportTypes": [],
            "alphabetize": {
              "order": "asc",
              "caseInsensitive": true
            },
            "newlines-between": "always"
          }
        ]
    },
    "settings": { 
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx", ".js"] 
      }, 
      "import/resolver": { 
        "typescript": "./tsconfig.json" 
      }
    }
  }