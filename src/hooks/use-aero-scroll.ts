import { useEffect, type RefObject } from "react";

export function useAeroScroll(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const page = root.current;
    if (!page) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let dispose = () => {};
    const setup = () => {
      dispose();
      if (preference.matches) return;
      const entrances = Array.from(page.querySelectorAll<HTMLElement>("[data-reveal]"));
      const animations = new Set<Animation>();
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          element.style.opacity = "1";
          const animation = element.animate([
            { opacity: 0, transform: "translate3d(0, 42px, 0) scale(.97) rotate(-.7deg)" },
            { opacity: 1, transform: "translate3d(0, -5px, 0) scale(1.006) rotate(.15deg)", offset: .72 },
            { opacity: 1, transform: "translate3d(0, 0, 0) scale(1) rotate(0deg)" },
          ], { duration: 950, delay: Number(element.dataset.reveal || 0), easing: "cubic-bezier(.2,.7,.2,1)" });
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
          observer.unobserve(element);
        });
      }, { threshold: .08, rootMargin: "0px 0px -24px 0px" });
      entrances.forEach((element) => {
        if (element.getBoundingClientRect().top > window.innerHeight) element.style.opacity = "0";
        observer.observe(element);
      });
      const layers = Array.from(page.querySelectorAll<HTMLElement>("[data-parallax]"));
      const hearts = Array.from(page.querySelectorAll<HTMLElement>("[data-scroll-heart]"));
      let frame = 0;
      let height = Math.max(1, page.scrollHeight - window.innerHeight);
      const paint = () => {
        frame = 0;
        const progress = Math.min(1, Math.max(0, window.scrollY / height));
        layers.forEach((layer) => {
          const speed = Number(layer.dataset.parallax || 0);
          layer.style.transform = `translate3d(0, ${progress * speed}px, 0)`;
        });
        hearts.forEach((heart, index) => {
          const phase = progress * Math.PI * 3 + index * .9;
          const visibility = Math.max(0, Math.sin(phase));
          heart.style.opacity = String(visibility * .48);
          heart.style.transform = `translate3d(${Math.sin(phase) * 12}px, ${-progress * (70 + index * 18)}px, 0) rotate(${Math.sin(phase) * 12}deg)`;
        });
      };
      const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
      const resize = () => { height = Math.max(1, page.scrollHeight - window.innerHeight); schedule(); };
      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(page);
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", resize, { passive: true });
      paint();
      dispose = () => {
        observer.disconnect(); resizeObserver.disconnect();
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", resize);
        cancelAnimationFrame(frame);
        animations.forEach((animation) => animation.cancel());
        entrances.forEach((element) => element.style.removeProperty("opacity"));
        [...layers, ...hearts].forEach((element) => { element.style.removeProperty("transform"); element.style.removeProperty("opacity"); });
      };
    };
    setup();
    preference.addEventListener("change", setup);
    return () => { dispose(); preference.removeEventListener("change", setup); };
  }, [root]);
}