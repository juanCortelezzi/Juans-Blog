// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { CollectionEntry } from "astro:content";

export const SITE_TITLE = "Juan's Blog";
export const SITE_DESCRIPTION = "Welcome to my website!";

export type PublishedPost = CollectionEntry<"blog"> & { data: { pubDate: Date } };
export function isPostPublished(post: CollectionEntry<"blog">): post is PublishedPost {
  return post.data.pubDate !== undefined;
}
