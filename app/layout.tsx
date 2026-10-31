import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Elton Sales — Ideias em movimento",description:"Reflexões, caminhos e ideias. O espaço pessoal de Elton Sales."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
