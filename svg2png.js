const sharp = require("sharp")
const glob = require("glob")
const path = require("path")
const fs = require("fs")

glob("dist/icons/*.svg", (err, matches) => {
    if(err) {
        throw err
    }

    fs.mkdirSync("dist/png", { recursive: true })

    matches.forEach((file) => {
        sharp(file)
            .resize(512, 512)
            .png()
            .toFile('dist/png/' + path.basename(file, '.svg') + '.png')
            .catch(function (err) {
                throw err
            })
    })
})