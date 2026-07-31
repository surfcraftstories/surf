import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://surfcraftstories.pl"),
  title: { default:"Surfcraftstories — ręcznie wyplatane akcesoria z paracordu", template:"%s | Surfcraftstories" },
  description:"Ręcznie wyplatane breloki, phone strapy, smycze i indywidualne projekty z paracordu — z zajawki do surfskate’u i potrzeby tworzenia.",
  keywords:["ręcznie robione akcesoria z paracordu","breloki z paracordu","phone strapy","personalizowane akcesoria","Surfcraftstories"],
  alternates:{canonical:"/"},
  openGraph:{type:"website",url:"https://surfcraftstories.pl/",locale:"pl_PL",siteName:"Surfcraftstories",title:"Surfcraftstories — ręcznie wyplatane. Po Twojemu.",description:"Kolor, splot i własny charakter. Poznaj autorskie akcesoria z paracordu.",images:[{url:"https://surfcraftstories.pl/og.png",secureUrl:"https://surfcraftstories.pl/og.png",width:1200,height:630,type:"image/png",alt:"Surfcraftstories — ręcznie wyplatane. Po Twojemu."}]},
  twitter:{card:"summary_large_image",title:"Surfcraftstories",description:"Ręcznie wyplatane akcesoria z paracordu.",images:["/og.png"]},
  icons:{icon:"/surfcraftstories-logo.png",apple:"/surfcraftstories-logo.png"},
};
const structuredData={"@context":"https://schema.org","@type":"Brand","name":"Surfcraftstories","description":"Autorska marka ręcznie wyplatanych akcesoriów z paracordu, inspirowana surfskatem, kolorem i indywidualnym stylem.","logo":"https://surfcraftstories.pl/surfcraftstories-logo.png","url":"https://surfcraftstories.pl/","makesOffer":[{"@type":"Offer","itemOffered":{"@type":"Product","name":"Ręcznie wyplatane breloki z paracordu"}},{"@type":"Offer","itemOffered":{"@type":"Product","name":"Ręcznie wyplatane phone strapy"}},{"@type":"Offer","itemOffered":{"@type":"Product","name":"Indywidualne projekty z paracordu"}}]};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pl"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/></body></html>}
