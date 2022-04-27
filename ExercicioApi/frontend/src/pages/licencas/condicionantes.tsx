import { useState, useEffect } from "react"
import Table from "../../components/table/Table"

export default function Condicionantes() {
    const [data, setData] = useState<object[]>([{}])
    const getData = async function(): Promise<object[]> {
        const dataRaw = await fetch("http://localhost:3001/licencas/condicionantes")
        const json = await dataRaw.json()
        return json
    }

    useEffect(() => {
        getData()
            .then(data => setData(data))
    }, [])

    return (
        <Table data={data} />
    )
}