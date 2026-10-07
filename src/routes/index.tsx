import { createFileRoute } from "@tanstack/react-router";
import { Fish, Heart, Image, PawPrint, Sparkles } from "lucide-react";
import { useRef, useState } from "react";
import { AeroLoveScene, LoveAnimals } from "@/components/aero-love-scene";
import { useAeroScroll } from "@/hooks/use-aero-scroll";

import bunnyGrassAsset from "@/assets/bunny-grass.jpg.asset.json";
import catWindowAsset from "@/assets/cat-window.jpg.asset.json";
import dogMeadowAsset from "@/assets/dog-meadow.jpg.asset.json";
import foxSnowAsset from "@/assets/fox-snow.jpg.asset.json";
import waterShimmerAsset from "@/assets/water-shimmer.jpg.asset.json";
import { Button } from "@/components/ui/button";

const galleryItems = [
  {
    label: "Personal picture placeholder 01",
    caption: "A favorite portrait will go here",
    src: "/1.jpeg",
    alt: "Orange cat sitting by a bright window",
  },
  {
    label: "Personal picture placeholder 02",
    caption: "A sweet everyday moment will go here",
    src: dogMeadowAsset.url,
    alt: "Happy dog standing in a meadow",
  },
  {
    label: "Personal picture placeholder 03",
    caption: "A cozy memory will go here",
    src: "/5.jpeg",
    alt: "Small rabbit resting in green grass",
  },
  {
    label: "Personal picture placeholder 04",
    caption: "A bright outdoor photo will go here",
    src: "/3.jpeg",
    alt: "Fox walking through pale snow",
  },
];

const gifPlaceholders = [
  {
    label: "Looping GIF placeholder",
    src: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExamY5NXZ0dmNheHgzYzZzYmc4c3EwNjRwbHhkcnB2ZDQ2NWNiNWw5ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l3vR4Ell5crP9nYR2/giphy.webp",
  },
  {
    label: "Tiny reaction GIF placeholder",
    src: waterShimmerAsset.url,
  },
  {
    label: "Sparkly moment GIF placeholder",
    src: waterShimmerAsset.url,
  },
];

const floatingBubbles = [
  "left-[7%] top-[19rem] size-7",
  "left-[13%] top-[33rem] size-4",
  "left-[42%] top-[18rem] size-5",
  "right-[18%] top-[8rem] size-9",
  "right-[7%] top-[31rem] size-5",
  "left-[31%] top-[53rem] size-8",
  "right-[31%] top-[50rem] size-4",
  "left-[4%] top-[72rem] size-6",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HAPPY BIRTHDAY to my beautiful lady and bestest friend" },
      {
        name: "description",
        content:
          "A soft Frutiger Aero personal gallery with glossy animal details, photo placeholders, and GIF spaces ready for future memories.",
      },
      { property: "og:title", content: "HAPPY BIRTHDAY to my beautiful lady and bestest friend" },
      {
        property: "og:description",
        content:
          "A soft Frutiger Aero personal gallery with glossy animal details, photo placeholders, and GIF spaces ready for future memories.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const pageRef = useRef<HTMLElement>(null);
  useAeroScroll(pageRef);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const noteItems = [
    {
      label: "Paw print dividers",
      src: catWindowAsset.url,
      alt: "Paw print dividers",
    },
    {
      label: "Cat-ear panel accents",
      src: bunnyGrassAsset.url,
      alt: "Cat-ear panel accents",
    },
    {
      label: "Sea bubbles and green shine",
      src: foxSnowAsset.url,
      alt: "Sea bubbles and green shine",
    },
  ];
  return (
    <main ref={pageRef} className="aero-page love-page text-aero-ink">
      <AeroLoveScene />
      <div className="floating-sparkles" aria-hidden="true" />
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmp1NWFxYWhxODBvam93cnpjaHllOWdhOHQ0Z2I5NWdndm15cXdhZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/EXHHMS9caoxAA/giphy.gif"
        alt="Added GIF"
        className="absolute top-4 left-4 h-24 w-auto rounded-lg border border-aero-glass/50 backdrop-blur-sm"
      />
      <img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmp1NWFxYWhxODBvam93cnpjaHllOWdhOHQ0Z2I5NWdndm15cXdhZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/rW6CpFhDj9lkc/200.webp"
        alt="Added GIF"
        className="absolute top-4 right-4 h-24 w-auto rounded-lg border border-aero-glass/50 backdrop-blur-sm"
      />
      <div className="pointer-events-none absolute right-[11%] top-12 size-32 sun-flare opacity-80" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-56 grass-bed opacity-30" />
      {floatingBubbles.map((bubble) => (
        <span key={bubble} className={`bubble-orb pointer-events-none absolute ${bubble}`} aria-hidden="true" />
      ))}

      <header className="sticky top-0 z-30 px-4 py-4 sm:px-6">
        <nav className="glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-black text-aero-ink">
            <span className="glossy-chip grid size-10 place-items-center rounded-full">
              <PawPrint className="size-5 text-paw" aria-hidden="true" />
            </span>
            Happy birthday to my beautiful lady and best friend (:
          </a>
          <div className="hidden items-center gap-2 text-sm font-bold text-aero-ink/75 sm:flex">
            <a className="rounded-full px-4 py-2 transition hover:bg-aero-glass-strong" href="#photos">
              US ❤️
            </a>
            <a className="rounded-full px-4 py-2 transition hover:bg-aero-glass-strong" href="#notes">
              L's
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-6xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:pt-4">
        <div className="relative z-10" data-reveal="0">
          <div className="glossy-chip mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-extrabold text-aero-ink/80">
            <Sparkles className="size-4 text-primary" aria-hidden="true" />
            A little corner of the world, just for you ♡
          </div>
          <h1 className="max-w-3xl font-display text-5xl font-black leading-[0.95] text-aero-ink sm:text-6xl lg:text-7xl">
            My favorite person. My happiest place.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-muted-foreground sm:text-xl">
            Happy birthday, beautiful. Here’s to your smile, our little moments, and all the memories we haven’t made yet.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild variant="aero" size="lg">
              <a href="#photos"><Heart className="size-4" /> Our little memories</a>
            </Button>
            <span className="glossy-chip rounded-full px-5 py-3 text-sm font-extrabold text-aero-ink/70">
              Made with so much love ♡
            </span>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-xl" data-reveal="120">
          <LoveAnimals />
          <CornerCat className="absolute -right-5 -top-8 z-20 hidden w-28 text-primary/70 sm:block" />
          <div className="cat-ear-card glass-panel relative rounded-[2rem] p-4 sm:p-5">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-aero-glass-strong bg-aero-soft">
              <img src="/1.jpeg" alt="A favorite personal memory" className="h-[28rem] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-aero-glass-strong/60 via-transparent to-aero-sky-deep/35" />
              <div className="grass-bed absolute bottom-0 left-0 right-0 h-28 opacity-45" />
              <div className="absolute left-6 top-8 flex gap-3 text-aero-sun">
                <Fish className="size-7 rotate-12 drop-shadow-md" aria-hidden="true" />
                <Fish className="mt-10 size-5 -rotate-12 text-aero-grass drop-shadow-md" aria-hidden="true" />
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] bg-aero-glass-strong/75 p-4 shadow-2xl backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-widest text-primary">Always you ♡</p>
                <p className="mt-1 text-2xl font-black text-aero-ink">Life is sweeter with you in it.</p>
              </div>
              <div className="absolute right-5 top-5 grid size-16 place-items-center rounded-full bg-aero-glass-strong/70 shadow-xl backdrop-blur-md">
                <Heart className="size-8 fill-paw text-paw" aria-hidden="true" />
              </div>
            </div>
          </div>
          <CornerBird className="absolute -bottom-10 -left-5 w-28 text-paw/70" />
        </div>
      </section>

      <PawDivider />

      <section id="photos" className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div data-reveal="0" className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="flex items-baseline gap-4">
            <p className="font-display text-sm font-black uppercase tracking-widest text-primary">Personal photos</p>
            <h2 className="mt-0 font-display text-4xl font-black text-aero-ink sm:text-5xl">where you look the prettiest</h2>
            <img
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWdvYTBvcm9lNDZ1Njd2aGJrMTE1MXVuZDFzOXk1bHdjeWxmNXdyciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/haKiarGuVmE9W1aKmc/200.webp"
              alt="Added GIF"
              className="h-36 w-auto rounded-lg border border-aero-glass/50 backdrop-blur-sm"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <article data-reveal={index * 80} key={item.label} className="group cat-ear-card glass-panel memory-card rounded-[1.8rem] p-3 transition duration-300 hover:-translate-y-1" onClick={() => { setSelectedImage(item.src); setIsModalOpen(true); }}>
              <div className="animal-frame relative aspect-[4/5] overflow-hidden bg-aero-soft shadow-xl">
                <img loading="lazy" src={item.src} alt={item.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" style={index === 1 || index === 2 ? { objectPosition: '55% 50%' } : index === 3 ? { objectPosition: '40% 50%' } : {}} />
                <div className="absolute inset-0 bg-gradient-to-b from-aero-glass-strong/45 via-transparent to-aero-leaf/45 opacity-80" />
                <span className="glossy-chip absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-black text-aero-ink/75">
                  Paw slot {index + 1}
                </span>
              </div>
              <div className="px-2 py-4">
                <h3 className="font-display text-lg font-black text-aero-ink">{item.label}</h3>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PawDivider />

      <section id="gifs" data-reveal="0" className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 sm:p-8 lg:p-10">
          <CornerBunny className="absolute right-6 top-6 hidden w-24 text-primary/55 md:block" />
          <div className="max-w-2xl">
            <p className="font-display text-sm font-black uppercase tracking-widest text-primary">GIF showcase</p>
            <h2 className="mt-2 font-display text-4xl font-black text-aero-ink sm:text-5xl">Static spots with bubbly sea shine</h2>
            <p className="mt-4 text-base font-medium leading-7 text-muted-foreground">
              These polished placeholders stay still for now and are ready for hand-picked GIFs later.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {gifPlaceholders.map((item) => (
              <div data-reveal={80} key={item.label} className="relative min-h-56 overflow-hidden rounded-[1.6rem] border border-aero-glass-strong bg-aero-soft p-4 shadow-xl">
                <img src={item.src} alt="Water shimmer GIF placeholder" className="absolute inset-0 h-full w-full object-cover opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-br from-aero-glass-strong/75 via-aero-sea/45 to-aero-grass/45" />
                <div className="grass-bed absolute bottom-0 left-0 right-0 h-20 opacity-35" />
                <div className="relative flex h-full min-h-48 flex-col justify-between">
                  <span className="glossy-chip inline-flex w-fit items-center gap-2 rounded-full px-3 py-2 text-xs font-black text-aero-ink/75">
                    <Image className="size-4 text-primary" aria-hidden="true" />
                    GIF area
                  </span>
                  <div>
                    <p className="font-display text-2xl font-black text-aero-ink">{item.label}</p>
                    <p className="mt-1 text-sm font-bold text-aero-ink/65">A personal GIF will be added here</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="notes" data-reveal="0" className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel cat-ear-card rounded-[2rem] p-7">
            <p className="font-display text-sm font-black uppercase tracking-widest text-primary">Tiny details</p>
            <h2 className="mt-2 font-display text-4xl font-black text-aero-ink"> there are many L's we should be grateful for , these are the best</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {noteItems.map((item, index) => (
              <div data-reveal={index * 80} key={item.label} className="glossy-chip rounded-[1.4rem] p-5 text-center" onClick={() => { setSelectedImage(item.src); setIsModalOpen(true); }}>
                <img src={item.src} alt={item.alt} className="h-[3rem] w-auto mx-auto mb-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer data-reveal="0" className="relative mx-auto max-w-6xl px-4 pb-8 pt-8 sm:px-6">
        <div className="glass-panel flex flex-col items-center justify-between gap-3 rounded-full px-6 py-4 text-center text-sm font-bold text-aero-ink/70 sm:flex-row">
          <span className="flex items-center gap-2"><Heart className="size-4 text-love" /> With love, always.</span>
          <span>For my beautiful lady and bestest friend ♡</span>
        </div>
      </footer>
      {isModalOpen && selectedImage && (
        <div className="photo-overlay fixed inset-0 z-50 flex items-center justify-center">
          <div className="relative">
            <Button aria-label="Close photo" variant="aero" size="icon" onClick={() => setIsModalOpen(false)} className="absolute top-2 right-2 text-xl">
              ×
            </Button>
            <img src={selectedImage} alt="Preview" className="max-h-[95vh] max-w-[95vw] rounded-lg border border-aero-glass" />
          </div>
        </div>
      )}
    </main>
  );
}

function PawDivider() {
  return (
    <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 sm:px-6" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-aero-sky-deep/40 to-aero-water/40" />
      {[0, 1, 2].map((paw) => (
        <PawPrint key={paw} className="paw-divider size-6" />
      ))}
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-aero-sky-deep/40 to-aero-water/40" />
    </div>
  );
}

function CornerCat({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <path d="M25 70C22 43 35 25 60 25s38 18 35 45c-2 20-16 34-35 34S27 90 25 70Z" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M36 33 28 13l23 14M84 33l8-20-23 14" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M48 62h.1M72 62h.1M60 72v7M47 82c7 6 19 6 26 0" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M39 73H18M41 81H22M81 73h21M79 81h19" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function CornerBird({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <path d="M24 73c26-42 58-38 74-10-23-6-38 1-49 27-8-13-15-18-25-17Z" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M74 47c6-13 16-17 29-15-5 11-13 17-25 18M46 65c11 3 21 3 31 0M29 75l-15 9" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M74 57h.1" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

function CornerBunny({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <path d="M42 49C29 19 31 7 42 5c10-2 18 18 20 40M67 46c9-30 18-42 29-37 11 6 1 27-16 48" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M31 77c0-22 15-36 35-36s35 14 35 36c0 21-15 35-35 35S31 98 31 77Z" stroke="currentColor" strokeWidth="5" />
      <path d="M54 74h.1M78 74h.1M66 84v7M55 95c7 5 16 5 22 0" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
