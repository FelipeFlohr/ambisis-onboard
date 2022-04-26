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
exports.query2 = void 0;
const index_1 = require("./index");
const QueryBuilder_1 = require("mysql-all-in-one/QueryBuilder");
const query2 = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.dao.select({
        columns: [{ __expression: { "vencimento": `STR_TO_DATE(validade, "%d /%m /%Y")` } }],
        from: "licenca",
        where: (0, QueryBuilder_1.sqlExpression) `DATE_FORMAT(STR_TO_DATE(validade, "%d/ %m/ %Y"), "%m-%y") = DATE_FORMAT(sysdate(), "%m-%y")`
    });
});
exports.query2 = query2;
