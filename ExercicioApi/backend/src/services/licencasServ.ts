import { daoProvider } from "../providers/daoProvider";

export function getLicencasServ() {
    return daoProvider.select({
        from: "licenca"
    })
}