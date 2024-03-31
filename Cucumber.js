module.exports = {
    default: {
        formatOptions: {
            snippetInterface: "async-await"
        },
        publishQuiet: true,
        dryRun: false,
        requireModule: [
            "ts-node/register"
        ],
        paths: [
            "src/test/**/features/"
        ],
        require: [
            "src/test/**/steps/*.ts"
        ]
    }
}