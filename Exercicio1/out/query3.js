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
exports.query3 = void 0;
const index_1 = require("./index");
const query3 = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield index_1.dao.select({
        columns: [
            { numero: "id" },
            { __expression: { "empresa": `concat_ws(" ", razaoSocial, cnpj)` } },
            { contato: "representanteLegal" },
            { email: "emailrepresentantelegal" },
            { telefone: "cc.telefone" },
            { __expression: { responsavel: `group_concat(au.nome separator ", ")` } }
        ],
        from: "cliente c",
        join: [
            {
                table: "clientecontato cc",
                on: { __col_relation: { "clienteId": "id" } },
                type: "left"
            },
            {
                table: "responsavel re",
                on: {
                    module: "cliente",
                    __col_relation: { "moduleId": "id" },
                },
                type: "left"
            },
            {
                table: "auth_usuario au",
                on: {
                    __col_relation: { "id": "re.responsavelId" }
                },
                type: "left"
            }
        ],
        group: "id"
    });
});
exports.query3 = query3;
