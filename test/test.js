var { Q } = require('../src/js/core/e');
var { dirByExts } = require('../src/js/watch/image');

describe('images', function() {
    describe('#dirByExts(' + __dirname + '/../src/models/3DModels)', function() {
        it('should return list for files', function() {
            dirByExts(__dirname + "/../src/models/3DModels", ["glb", "glbf"], (array) => {
                function displayFiles(i, array) {
                    if (Q.isValid(array)) {
                        array.forEach(f => {
                            console.log("\t".repeat(i) + f.name);
                            if (Q.isValid(f.children)) {
                                displayFiles(i + 1, f.children);
                            }
                        });
                    }
                }
                displayFiles(1, array);
            });
        });
    });

    describe('#test', function() {
        it('test', function() {
            console.log("ok");
        });
    });
});