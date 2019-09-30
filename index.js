const async = require("../async-trafalgar/async");
const request = require("./libs/request");

const config = require("./config.json");

async.map(config.images, request, (err, results) => {
    if (err) {
        console.error(err);
    }

    let totalSize = 0;

    for (let i = 0; i < results.length; i++) {
        totalSize += results[i].length;
    }

    console.log("All Download ended, results : ", totalSize)
});