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
exports.main = void 0;
const mysql_all_in_one_1 = require("mysql-all-in-one");
const dao = new mysql_all_in_one_1.DataAccessObject({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "ambisistest"
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield dao.select({
        from: "licenca",
        join: {
            table: { clientecontatoultimo: {} },
            on: { __col_relation: { 'licencaId': 'id' } },
            type: 'left',
            columns: { condicionanteId: 'id', condicionanteNome: 'nome', condicionanteDescricao: 'descricao' }
        }
    }, {
        groupData: {
            by: 'id',
            columnGroups: {
                condicionantes: {
                    id: 'condicionanteId',
                    nome: 'condicionanteNome',
                    descricao: 'condicionanteDescricao',
                }
            }
        }
    });
});
exports.main = main;
