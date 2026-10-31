import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
export const articles = sqliteTable("articles", {id:text("id").primaryKey(), title:text("title").notNull(), excerpt:text("excerpt").notNull(), category:text("category").notNull(), blocks:text("blocks").notNull(), image:text("image"), published:integer("published").notNull().default(0), updated:text("updated").notNull()});
