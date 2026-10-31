import Home from "./home";
import { getDb } from "../db";
import { articles } from "../db/schema";
import { eq, desc } from "drizzle-orm";
export const dynamic="force-dynamic";
export default async function Page(){const rows=await getDb().select().from(articles).where(eq(articles.published,1)).orderBy(desc(articles.updated));return <Home articles={rows.map(r=>({...r,blocks:JSON.parse(r.blocks)}))}/>}
