import styles from "../../styles/table/Table.module.css"

interface TableProps {
    data: object[]
}

export default function Table(props: TableProps) {
    const getHeaders = () => {
        const keys = Object.keys(props.data[0])
        return keys.map(k => (
            <th>{k}</th>
        ))
    }

    const getRows = () => {
        return props.data.map((data, i) => (
            <tr key={i}>
                {Object.values(data).map(v => (
                    <td>{typeof(v) != "object" ? v : "Object (placeholder)"}</td>
                ))}
            </tr>
        ))
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {getHeaders()}
                </tr>
            </thead>
            <tbody>
                {getRows()}
            </tbody>
        </table>
    )
}