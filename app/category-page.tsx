export type CategoryContent = {
  slug: string;
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  description: string;
  price: string;
  features: string[];
  images: { src: string; alt: string; label: string }[];
};

export const categories: CategoryContent[] = [
  {
    slug: "breloki-z-paracordu",
    eyebrow: "RĘCZNIE WYPLATANE / PERSONALIZOWANE",
    title: "Breloki z paracordu",
    accent: "Mały detal. Mocny charakter.",
    intro: "Kolorowe, ręcznie wyplatane breloki z paracordu — tworzone pojedynczo, w wybranym zestawieniu kolorów i z detalami dopasowanymi do Twojego pomysłu.",
    description: "Brelok może być prosty i graficzny, pastelowy, kontrastowy albo pełen wakacyjnego koloru. Dobieramy razem sznurki, splot, karabińczyk oraz opcjonalne zawieszki. Każdy egzemplarz powstaje ręcznie w Polsce, dlatego może być osobistym dodatkiem do kluczy, torby lub plecaka, a także niewielkim prezentem.",
    price: "Orientacyjnie 25–35 PLN",
    features: ["Wybór kolorów", "Ręczne wykonanie", "Opcjonalne zawieszki"],
    images: [
      { src: "/projects/breloki/wszystkie/2026/22.png", alt: "Turkusowo-różowy brelok z kokardą, kwiatkiem, gwiazdką i literą M", label: "Blue Pink M" },
      { src: "/projects/breloki/wszystkie/2026/23.png", alt: "Różowo-kremowy brelok z kotkiem, gwiazdką i literą M", label: "Strawberry Cream" },
      { src: "/projects/breloki/wszystkie/2026/16.png", alt: "Brelok z paracordu wykonany ręcznie w Polsce", label: "Gotowy na prezent" },
    ],
  },
  {
    slug: "phone-strapy",
    eyebrow: "DO TELEFONU / KRÓTKIE / PORĘCZNE",
    title: "Phone strapy",
    accent: "Telefon zawsze pod ręką.",
    intro: "Ręcznie wyplatane phone strapy z paracordu, które łączą wygodny uchwyt do telefonu z kolorem i osobistym detalem.",
    description: "Krótki phone strap ułatwia pewne trzymanie telefonu i pozwala nadać mu własny charakter. Długość, zestaw kolorów, rodzaj splotu i dodatki ustalamy indywidualnie. Każdy strap powstaje ręcznie, dlatego nie jest anonimowym dodatkiem z masowej produkcji.",
    price: "Orientacyjnie 35–45 PLN",
    features: ["Dopasowana długość", "Mocne mocowanie", "Kolory do wyboru"],
    images: [
      { src: "/projects/phone-straps/2026/32.png", alt: "Turkusowo-żółty phone strap z kaczką i kołem ratunkowym", label: "Sunny Splash" },
      { src: "/projects/phone-straps/2026/33.png", alt: "Różowo-zielony phone strap z kwiatową zawieszką", label: "Candy Bloom" },
      { src: "/projects/phone-straps/2026/34.png", alt: "Czarno-fioletowy phone strap z napisem Tanz Blitz", label: "Tanz Blitz" },
      { src: "/projects/phone-straps/2026/35.png", alt: "Miętowo-lawendowy phone strap z kwiatkiem i nutką", label: "Lavender Melody" },
    ],
  },
  {
    slug: "phone-strap-crossbody",
    eyebrow: "CROSSBODY / DŁUGI STRAP / WYGODA",
    title: "Phone strap crossbody",
    accent: "Wolne ręce. Własny rytm.",
    intro: "Długi, regulowany lub dopasowany phone strap crossbody z paracordu — do wygodnego noszenia telefonu na ramieniu albo przez ciało.",
    description: "Phone strap crossbody sprawdza się na spacerze, festiwalu, podczas podróży i wszędzie tam, gdzie telefon ma być blisko, ale ręce pozostają wolne. Ustalamy długość, sposób mocowania i paletę kolorów. Splot jest wykonywany ręcznie i dopasowany do charakteru konkretnego projektu.",
    price: "Orientacyjnie 55–70 PLN",
    features: ["Długość na wymiar", "Noszenie crossbody", "Indywidualna paleta"],
    images: [
      { src: "/projects/crossbody/2026/36.png", alt: "Fioletowo-różowy phone strap crossbody z turkusowym splotem i kwiatowymi detalami", label: "Purple Bloom" },
      { src: "/projects/crossbody/2026/31.png", alt: "Różowo-turkusowy phone strap crossbody noszony z telefonem z tyłu", label: "Z telefonem" },
      { src: "/projects/crossbody/2026/35.png", alt: "Różowo-turkusowy phone strap crossbody noszony z telefonem z przodu", label: "Na sylwetce" },
    ],
  },
  {
    slug: "bransoletki-z-paracordu",
    eyebrow: "NA RĘKĘ / KOLOR / RĘCZNY SPLOT",
    title: "Bransoletki z paracordu",
    accent: "Kolor, który nosisz ze sobą.",
    intro: "Ręcznie wyplatane bransoletki z paracordu, dopasowane do obwodu nadgarstka, ulubionych kolorów i wybranego charakteru.",
    description: "Bransoletka może być spokojna i minimalistyczna albo wyrazista, wielokolorowa i wakacyjna. Przed rozpoczęciem pracy ustalamy rozmiar, paletę oraz sposób wykończenia. Dzięki ręcznemu wykonaniu każdy egzemplarz ma drobne różnice, które podkreślają jego indywidualność.",
    price: "Orientacyjnie 20–25 PLN",
    features: ["Rozmiar na wymiar", "Lekka i trwała", "Unikalne zestawienia"],
    images: [
      { src: "/projects/bransoletki/2026/19.png", alt: "Trzy różowe bransoletki z paracordu z zawieszkami truskawki, arbuza i wiśni", label: "Fruity Trio" },
      { src: "/projects/bransoletki/2026/18.png", alt: "Trzy czarno-białe męskie bransoletki z paracordu z kośćmi do gry", label: "Dice Trio" },
      { src: "/projects/bransoletki/2026/15.png", alt: "Różowa bransoletka z napisem Marysia i zawieszką truskawki", label: "Marysia Strawberry" },
      { src: "/projects/bransoletki/2026/16.png", alt: "Różowa regulowana bransoletka z zawieszką truskawki", label: "Strawberry Charm" },
      { src: "/projects/bransoletki/2026/17.png", alt: "Różowo-turkusowa pleciona bransoletka z regulowanym zapięciem", label: "Pink Blue Braid" },
    ],
  },
  {
    slug: "akcesoria-z-paracordu",
    eyebrow: "INNE POMYSŁY / FUNKCJA / DETAL",
    title: "Akcesoria z paracordu",
    accent: "Nie katalog. Pole możliwości.",
    intro: "Sznurki do okularów, uchwyty do maty i torby, adresówki dla pupila, naszyjniki oraz inne akcesoria tworzone z paracordu na indywidualne zamówienie.",
    description: "Paracord daje dużo więcej możliwości niż jeden typ produktu. Jeśli potrzebujesz praktycznego uchwytu, smyczy, ozdoby albo masz pomysł, którego nie ma jeszcze w realizacjach, opowiedz o jego funkcji. Wspólnie dobierzemy długość, kolory, splot i komponenty, a przed rozpoczęciem pracy potwierdzimy możliwość wykonania oraz cenę.",
    price: "Wycena indywidualna",
    features: ["Projekt od pomysłu", "Dobór komponentów", "Funkcja i kolor"],
    images: [
      { src: "/projects/inne/uchwyt-na-mate/produkt.png", alt: "Ręcznie wykonany uchwyt na matę z paracordu", label: "Uchwyt na matę" },
      { src: "/projects/inne/naszyjnik/summer-charms.png", alt: "Kolorowy naszyjnik Summer Charms", label: "Summer Charms" },
      { src: "/projects/inne/adresowka-dla-pupila/produkt.png", alt: "Adresówka dla pupila wykonana z paracordu", label: "Dla pupila" },
    ],
  },
];

export function CategoryPage({ content }: { content: CategoryContent }) {
  const otherCategories = categories.filter((category) => category.slug !== content.slug);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: content.title,
    description: content.intro,
    url: `https://surfcraftstories.pl/${content.slug}`,
    isPartOf: { "@type": "WebSite", name: "Surfcraftstories", url: "https://surfcraftstories.pl/" },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: content.images.map((image, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: image.label,
        image: `https://surfcraftstories.pl${image.src}`,
      })),
    },
  };

  return (
    <main className="category-page">
      <header className="category-header">
        <a className="logo-link" href="/" aria-label="Surfcraftstories — strona główna">
          <img src="/surfcraftstories-logo.png" alt="Surfcraftstories" />
        </a>
        <nav aria-label="Nawigacja kategorii">
          <a href="/#realizacje">Realizacje</a>
          <a href="/#cennik">Cennik</a>
          <a className="nav-cta" href="/#zamowienie">Zapytaj o projekt</a>
        </nav>
      </header>

      <section className="category-hero">
        <div className="category-breadcrumbs"><a href="/">Strona główna</a><span>→</span><span>{content.title}</span></div>
        <div className="category-hero-grid">
          <div className="category-copy">
            <p className="kicker">{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p className="category-accent">{content.accent}</p>
            <p className="category-intro">{content.intro}</p>
            <div className="category-actions">
              <a className="btn btn-coral" href="/#zamowienie">Opowiedz o swoim pomyśle <b>↗</b></a>
              <a className="btn btn-line" href="/#kolory">Zobacz kolory</a>
            </div>
          </div>
          <figure className="category-lead-image">
            <img src={`${content.images[0].src}${content.images[0].src.includes("/2026/") ? "?v=2" : ""}`} alt={content.images[0].alt} />
            <figcaption><span>PRAWDZIWA REALIZACJA</span><b>01 / {content.images[0].label}</b></figcaption>
          </figure>
        </div>
      </section>

      <section className="category-details">
        <div className="category-feature-strip">
          {content.features.map((feature, index) => <div key={feature}><span>0{index + 1}</span><b>{feature}</b></div>)}
        </div>
        <div className="category-story">
          <div><p className="index">O KATEGORII</p><h2>Tworzone ręcznie.<br/><em>Po Twojemu.</em></h2></div>
          <div><p>{content.description}</p><strong>{content.price}</strong><small>Dokładną cenę potwierdzam po ustaleniu długości, splotu, kolorów i dodatków.</small></div>
        </div>
        <div className="category-gallery">
          {content.images.map((image, index) => (
            <figure key={image.src} className={index === 0 ? "category-gallery-wide" : ""}>
              <img src={`${image.src}${image.src.includes("/2026/") ? "?v=2" : ""}`} alt={image.alt} loading={index === 0 ? "eager" : "lazy"} />
              <figcaption><span>0{index + 1}</span>{image.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="category-more">
        <p className="index">ZOBACZ TAKŻE</p>
        <h2>Inne możliwości.</h2>
        <div className="category-links">
          {otherCategories.map((category) => <a key={category.slug} href={`/${category.slug}`}><span>{category.title}</span><b>↗</b></a>)}
        </div>
      </section>

      <section className="category-cta">
        <p className="index">INDYWIDUALNY PROJEKT</p>
        <h2>Masz własny pomysł?</h2>
        <p>Nie musisz znać nazwy splotu. Wystarczy, że opowiesz o funkcji, kolorach albo osobie, dla której ma powstać projekt.</p>
        <a className="btn btn-dark" href="/#zamowienie">Zacznijmy rozmowę <b>↗</b></a>
      </section>

      <footer className="category-footer"><a href="/">← Wróć na stronę główną</a><a href="https://www.instagram.com/surfcraftstories/" target="_blank" rel="noreferrer">Instagram @surfcraftstories ↗</a></footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </main>
  );
}
