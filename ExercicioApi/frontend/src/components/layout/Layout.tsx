import Link from "next/link"
import styles from "../../styles/layout/Layout.module.css"

interface LayoutProps {
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
        <>
            <nav className={styles.navbar}>
                <Link href="/">
                    <span>
                        Home
                    </span>
                </Link>
                <Link href="/licencas">
                    <span>
                        Licenças
                    </span>
                </Link>
                <Link href="/licencas/condicionantesqnt">
                    <span>
                        Licenças - Quantidade condicionantes
                    </span>
                </Link>
                <Link href="/licencas/condicionantes">
                    <span>
                        Licenças - Condicionantes
                    </span>
                </Link>
                <Link href="/licencas/vencimentos">
                    <span>
                        Licenças - Vencimentos
                    </span>
                </Link>
                <Link href="/empresas">
                    <span>
                        Empresas
                    </span>
                </Link>
            </nav>
            <div>
                {props.children}
            </div>
        </>
    )
}