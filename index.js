const fs = require("fs");

const twiimg = async () => {
    
    console.log(`get data...`);
    // get url from user
    let url = process.argv[2];
    let imagename = process.argv[3] == undefined ? "default": process.argv[3];
    try {
        // target twitter img url
        const res = await fetch(`${url}`);

        const arrayBuffer = await res.arrayBuffer();

        const buffer = Buffer.from(arrayBuffer);
        const getimgdate = Date();
        fs.writeFileSync(`./images/${imagename}.png`, buffer);
    } catch (e) {
        console.log("fail image download");
    }
}
console.log(`end `);
twiimg();
