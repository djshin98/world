var { isValid } = require('../src/js/core/block');
var { dirByExts } = require('../src/js/watch/image');
describe('images', function() {
    describe('#dirByExts(' + __dirname + '/../src/models/3DModels)', function() {
        it('should return list for files', function() {
            dirByExts(__dirname + "/../src/models/3DModels", ["glb", "glbf"], (array) => {
                function displayFiles(i, array) {
                    if (isValid(array)) {
                        array.forEach(f => {
                            console.log("\t".repeat(i) + f.name);
                            if (isValid(f.children)) {
                                displayFiles(i + 1, f.children);
                            }
                        });
                    }
                }
                displayFiles(1, array);
            });
        });
    });
});