module.exports = {
    "presets": [
        "@babel/react",
        [
            "@babel/env",
            {
                "useBuiltIns": "entry"
            }
        ]
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-export-default-from",
        "@babel/plugin-proposal-export-namespace-from",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-syntax-dynamic-import",
    ]
}