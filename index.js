const { createCanvas, loadImage } = require("canvas")
const fs = require("fs")

async function makeImage() {
    const template = await loadImage('template.png');
    const skin = await loadImage('skin.png');


    const canvas = createCanvas(template.width, template.height);
    const ctx = canvas.getContext("2d")
    ctx.drawImage(template, 0, 0);
    // TORSO
    // Top
    ctx.drawImage(skin, 20, 16, 8, 4, 231, 8, 128, 64)
    ctx.drawImage(skin, 20, 32, 8, 4, 231, 8, 128, 64)

    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync('finished.png', buffer);
}
makeImage()