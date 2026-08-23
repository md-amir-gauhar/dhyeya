import { BRAND } from '@/lib/brand';

export function Footer() {
  return (
    <footer className="border-t border-ivory-100/10 px-6 py-16 sm:px-10">
      <div className="mx-auto grid w-full max-w-6xl gap-12 sm:grid-cols-[1.4fr_1fr]">
        <div>
          <span className="font-display text-2xl tracking-[0.24em] text-ivory-100">
            {BRAND.name}
          </span>
          <span className="mt-2 block font-deva text-lg text-dawn-400/70">{BRAND.devanagari}</span>
          <p className="mt-6 max-w-sm font-sans text-sm leading-relaxed text-ivory-400">
            An AI preparation companion for serious government-exam aspirants. Built around your
            journey, not a fixed course.
          </p>
        </div>

        <div className="sm:justify-self-end sm:text-right">
          <p className="font-sans text-xs tracking-[0.24em] text-ivory-400/70 uppercase">
            {BRAND.tagline}
          </p>
          <p className="mt-8 font-sans text-xs leading-relaxed text-ivory-400/60">
            DHYEYA does not guarantee selection in any examination.
            <br />
            Preparation outcomes depend on the aspirant.
          </p>
          <p className="mt-6 font-sans text-xs text-ivory-400/40">
            &copy; {new Date().getFullYear()} DHYEYA
          </p>
        </div>
      </div>
    </footer>
  );
}
