import { Heart, PawPrint } from "lucide-react";
import garden from "@/assets/love-garden.jpg";

export function AeroLoveScene() {
  return (
    <div className="love-scene" aria-hidden="true">
      <div className="garden-layer" data-parallax="-65">
        <img src={garden} width={1536} height={1024} alt="" fetchPriority="high" />
      </div>
      <div className="garden-wash" />
      <div className="vine-layer vine-left" data-parallax="-140"><Vine /></div>
      <div className="vine-layer vine-right" data-parallax="95"><Vine /></div>
      <div className="leaves-layer" data-parallax="-210">
        {Array.from({ length: 8 }, (_, index) => <span key={index} className={`floating-leaf leaf-${index}`}><Leaf /></span>)}
      </div>
      {Array.from({ length: 7 }, (_, index) => <Heart key={index} className={`scroll-heart heart-${index}`} data-scroll-heart="" />)}
      <div className="scene-paws" data-parallax="-110"><PawPrint /><PawPrint /><PawPrint /></div>
    </div>
  );
}

function Leaf() {
  return <svg viewBox="0 0 64 100" fill="none"><path d="M32 3C-8 35 2 77 30 92C64 77 77 37 32 3Z" fill="currentColor" /><path d="M32 13 30 97M31 40 14 27M31 58 48 40M30 75 15 61" stroke="var(--aero-glass-strong)" strokeWidth="2" /></svg>;
}

function Vine() {
  return <svg viewBox="0 0 140 700" fill="none"><path d="M65-10C140 85-10 180 67 290S140 460 62 575 75 720 75 720" stroke="currentColor" strokeWidth="2" />{[60, 155, 250, 350, 440, 540, 630].map((y, index) => <g key={y} transform={`translate(${index % 2 ? 45 : 78} ${y}) rotate(${index % 2 ? -65 : 65})`}><path d="M0 0C-24-5-29-34-18-48C4-37 14-16 0 0Z" fill="currentColor" /><path d="M-17-40 0 0" stroke="var(--aero-glass)" /></g>)}</svg>;
}

export function LoveAnimals() {
  return <div className="love-animals" aria-hidden="true">
    <svg className="peeking-cat" viewBox="0 0 160 130" fill="none"><path d="M35 95 31 31 65 53Q82 43 103 53L137 28 130 100Q82 140 35 95Z" fill="currentColor" /><path d="m41 45 18 13-17 7m81-19-17 14 17 5" fill="var(--aero-blush)" /><path d="M60 79q7-8 14 0m23 0q7-8 14 0m-31 8 5 5 5-5m-5 6q-7 11-15 2m15-2q7 11 15 2M50 89l-21-4m21 12-23 4m89-12 22-4m-22 12 23 4" stroke="var(--aero-glass-strong)" strokeWidth="3" strokeLinecap="round" /></svg>
    <Heart className="animal-love-heart" />
    <svg className="peeking-dog" viewBox="0 0 150 130" fill="none"><path d="M39 48Q75 25 111 48l7 50q-40 39-86 0Z" fill="currentColor" /><path d="M39 44Q8 36 15 93q7 18 23-2m73-47q31-8 24 49-7 18-23-2" fill="var(--aero-sky-deep)" /><path d="M50 76q7-8 14 0m22 0q7-8 14 0" stroke="var(--aero-glass-strong)" strokeWidth="3" strokeLinecap="round" /><path d="M64 88q11-7 23 0l-11 11Z" fill="var(--aero-ink)" /><path d="M69 103q7 23 15 0" fill="var(--aero-blush)" /></svg>
  </div>;
}