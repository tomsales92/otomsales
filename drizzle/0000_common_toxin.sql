CREATE TABLE `articles` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`excerpt` text NOT NULL,
	`category` text NOT NULL,
	`blocks` text NOT NULL,
	`image` text,
	`published` integer DEFAULT 0 NOT NULL,
	`updated` text NOT NULL
);
