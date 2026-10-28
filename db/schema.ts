// Intentionally empty by default.
// Add Drizzle tables here when the site actually needs a database.
// See examples/d1/db/schema.ts for an opt-in example.
import { sqliteTable, text, real } from 'drizzle-orm/sqlite-core';
export const products = sqliteTable('products', { id: text('id').primaryKey(), name: text('name').notNull(), sku: text('sku').notNull().unique(), category: text('category').notNull(), unit: text('unit').notNull(), quantity: real('quantity').notNull(), minimum: real('minimum').notNull(), cost: real('cost').notNull(), price: real('price').notNull(), expiry: text('expiry'), supplier: text('supplier').notNull() });
export const movements = sqliteTable('movements', { id: text('id').primaryKey(), productId: text('product_id').notNull(), productName: text('product_name').notNull(), type: text('type').notNull(), quantity: real('quantity').notNull(), note: text('note').notNull(), createdAt: text('created_at').notNull() });
