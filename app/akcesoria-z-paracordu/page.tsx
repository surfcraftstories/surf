import type { Metadata } from "next";
import { categories, CategoryPage } from "../category-page";

const content = categories.find((category) => category.slug === "akcesoria-z-paracordu")!;
export const metadata: Metadata = { title: "Akcesoria z paracordu — projekty na zamówienie", description: content.intro, alternates: { canonical: `/${content.slug}` }, openGraph: { title: "Akcesoria z paracordu | Surfcraftstories", description: content.intro, url: `https://surfcraftstories.pl/${content.slug}`, images: [content.images[0].src] } };
export default function Page() { return <CategoryPage content={content} />; }
