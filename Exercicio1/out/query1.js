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
exports.query1 = void 0;
const index_1 = require("./index");
const query1 = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.dao.select({
        columns: ["id", "numero"],
        from: "licenca",
        join: {
            table: "condicionante co",
            columns: [{ __expression: { "quantidade_condicionantes": "COUNT(co.licencaId)" } }],
            on: {
                __col_relation: { "licencaId": "id" }
            },
            type: "left",
        },
        group: "id"
    });
});
exports.query1 = query1;
