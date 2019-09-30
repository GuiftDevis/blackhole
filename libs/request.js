const http = require("http");

const request = (data, callback) => {
    if (!data.url) {
        return callback(new error("Insert image url in data.url"))
    }
    console.log("Start :", data.url)

    http.get(data.url, (response) => {
        let body = ''
        response.on('data', (d) => {
            body += d
        })
        response.on('end', () => {
            console.log("Finish", data.url, "size : " + body.length)
            return callback(null, body)
        })
    }).on('error', (e) => {
        console.log("Got error : " + e.message)
    })
}

module.exports = request;