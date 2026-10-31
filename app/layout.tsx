import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Tom Sales — Ideias em movimento",description:"Reflexões, caminhos e ideias. O espaço pessoal de Tom Sales.",icons:{icon:{url:"/favicon.svg?v=tom-logo",type:"image/svg+xml"},shortcut:"/favicon.svg?v=tom-logo"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
