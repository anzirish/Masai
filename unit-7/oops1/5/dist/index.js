"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Documents {
    print() {
        console.log("Printing documents");
    }
}
class Photo {
    print() {
        console.log("Ptinitng photo");
    }
}
const result = [];
const res1 = new Documents();
const res2 = new Photo();
result.push(res1, res2);
result.forEach((item) => item.print());
//# sourceMappingURL=index.js.map