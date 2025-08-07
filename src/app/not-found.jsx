import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1>🔍 404 - Página não encontrada</h1>
            <p>A página que você procura não existe.</p>
            
            <div>
                <Link href="/">🏠 Voltar para Home</Link>
                <Link href="/contato">💬 Fale Conosco</Link>
            </div>
        </div>
    )
}
