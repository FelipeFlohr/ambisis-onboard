"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dao = void 0;
const mysql_all_in_one_1 = require("mysql-all-in-one");
const query1_1 = require("./query1");
const query2_1 = require("./query2");
const query3_1 = require("./query3");
exports.dao = new mysql_all_in_one_1.DataAccessObject({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "ambisistest"
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const q1 = yield (0, query1_1.query1)();
        const q2 = yield (0, query2_1.query2)();
        const q3 = yield (0, query3_1.query3)();
        console.log("---Query #1---");
        console.log(q1);
        console.log("---Query #2---");
        console.log(q2);
        console.log("---Query #3---");
        console.log(q3);
    });
}
main();
