import type { Metadata } from "next";
import { categories, CategoryPage } from "../category-page";

const content = categories.find((category) => category.slug === "breloki-z-paracordu")!;
export const metadata: Metadata = { title: "Breloki z paracordu — ręcznie wyplatane", description: content.intro, alternates: { canonical: `/${content.slug}` }, openGraph: { title: "Breloki z paracordu | Surfcraftstories", description: content.intro, url: `https://surfcraftstories.pl/${content.slug}`, images: [content.images[0].src] } };
export default function Page() { return <CategoryPage content={content} />; }
