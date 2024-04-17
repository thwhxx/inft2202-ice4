"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionSecret = exports.URI = exports.HostName = void 0;
let LOCAL = false;
let HostName, URI;
if (LOCAL) {
    let URI = "mongodb://localhost/contacts";
    exports.URI = URI;
    exports.HostName = HostName = "localhost";
}
else {
    exports.HostName = HostName = "Mongo DB Atlas";
    exports.URI = URI = "mongodb+srv://inft2202_admin:<password>@inft2202.kxtkviv.mongodb.net/";
}
exports.SessionSecret = "INFT2202SessionSecret";
//# sourceMappingURL=db.js.map