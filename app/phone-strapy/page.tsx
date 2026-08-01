import type { Metadata } from "next";
import { categories, CategoryPage } from "../category-page";

const content = categories.find((category) => category.slug === "phone-strapy")!;
export const metadata: Metadata = { title: "Phone strapy z paracordu — ręcznie wyplatane", description: content.intro, alternates: { canonical: `/${content.slug}` }, openGraph: { title: "Phone strapy z paracordu | Surfcraftstories", description: content.intro, url: `https://surfcraftstories.pl/${content.slug}`, images: [content.images[0].src] } };
export default function Page() { return <CategoryPage content={content} />; }
