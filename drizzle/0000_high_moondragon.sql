CREATE TABLE `movements` (
	`id` text PRIMARY KEY NOT NULL,
	`product_id` text NOT NULL,
	`product_name` text NOT NULL,
	`type` text NOT NULL,
	`quantity` real NOT NULL,
	`note` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`sku` text NOT NULL,
	`category` text NOT NULL,
	`unit` text NOT NULL,
	`quantity` real NOT NULL,
	`minimum` real NOT NULL,
	`cost` real NOT NULL,
	`price` real NOT NULL,
	`expiry` text,
	`supplier` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `products_sku_unique` ON `products` (`sku`);