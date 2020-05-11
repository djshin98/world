var fs = require("fs");
const path = require('path');

const extNames = [".png", ".jpg", ".jpeg", ".gif"];
const extTypes = ["data:image/png;base64,",
    "data:image/jpeg;base64,",
    "data:image/jpeg;base64,",
    "data:image/gif;base64,"
];

function base64_encode(file) {
    if (file) {
        let lowfile = file.toLowerCase();
        let index = lowfile.lastIndexOf(".");
        if (index > 0) {
            let iext = extNames.indexOf(lowfile.substr(index));
            if (iext >= 0) {
                var bitmap = fs.readFileSync(file);
                return extTypes[iext] + Buffer.from(bitmap).toString('base64');
            }
        }
    }
};

function getFiles(dir, exts) {
    let files_ = [];
    var files = fs.readdirSync(dir);
    files.forEach(file => {
        var name = dir + '/' + file;
        if (fs.statSync(name).isDirectory()) {
            files_.push({ name: file, type: 'folder', fullname: name, children: getFiles(name, exts) });
        } else {
            let iext = file.lastIndexOf(".");
            if (iext > 0 && exts.includes(file.substr(iext + 1))) {
                files_.push({ name: file, type: 'file', fullname: name });
            }
        }
    });
    return files_;
}

function dir(directoryPath, callback) {
    fs.readdir(directoryPath, function(err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        if (callback) {
            callback(files.filter(function(file) {
                let iext = file.lastIndexOf(".");
                if (iext > 0 && extNames.includes(file.substr(iext))) {
                    return true;
                }
                return false;
            }));
        }
    });
};

function dirByExts(directoryPath, exts, callback) {
    if (callback) {
        callback(getFiles(directoryPath, exts));
    }
};

module.exports = { base64_encode: base64_encode, dir: dir, dirByExts: dirByExts };