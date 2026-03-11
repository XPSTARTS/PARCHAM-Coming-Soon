import Link from "next/link";
import Countdown from "../app/components/Countdown";
import { SiInstagram, SiFacebook, SiTiktok } from "react-icons/si";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/parcham.pk_?igsh=bGxiaDRvNWJhMWZz",
    Icon: SiInstagram,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@parcham87?_r=1&_t=ZS-94ZnaAPXmtk",
    Icon: SiTiktok,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1FqyPZySCM/",
    Icon: SiFacebook,
  },
];

export default function Page() {
  return (
    <main className="grain relative min-h-screen overflow-hidden bg-[#FAF7F2] text-[#0F0F10]">
      {/* subtle grid */}

      <div className="pointer-events-none absolute left-1/2 top-[9vh] -z-20 -translate-x-1/2 select-none text-center font-[family-name:var(--font-space)] font-bold tracking-tight text-black/5 leading-none whitespace-nowrap">
        <span className="block text-[clamp(72px,11vw,190px)]">PARCHAM</span>
      </div>

      {/* gold glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-[18%] top-[20%] h-[520px] w-[520px] rounded-full opacity-80 blur-2xl animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(200,162,77,0.22) 0%, rgba(241,227,191,0.10) 35%, rgba(250,247,242,0) 70%)",
          }}
        />
        <div
          className="absolute right-[10%] bottom-[10%] h-[420px] w-[420px] rounded-full opacity-70 blur-2xl animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(200,162,77,0.16) 0%, rgba(241,227,191,0.08) 35%, rgba(250,247,242,0) 70%)",
            animationDelay: "1.2s",
          }}
        />
      </div>

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6">
        {/* Navbar */}
        <header className="flex items-center justify-between py-8">
          <div className="font-[family-name:var(--font-space)] text-lg font-bold tracking-[0.22em]">
            PARCHAM
          </div>

          <nav className="flex items-center gap-3">
            {socials.map(({ name, href, Icon }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-full border border-[#E6E0D6] bg-white/60 p-2 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-[#C8A24D]"
                aria-label={name}
                title={name}
              >
                <Icon className="h-[18px] w-[18px] text-[#0F0F10] transition group-hover:text-[#C8A24D]" />
              </Link>
            ))}
          </nav>
        </header>

        {/* Content */}
        <section className="flex flex-1 items-center pb-10">
          <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">
            {/* Left */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E6E0D6] bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#5B5B5B] backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#C8A24D]" />
                Coming soon
              </div>

              <h1 className="mt-6 font-[family-name:var(--font-space)] text-6xl font-bold tracking-tight sm:text-7xl">
                PARCHAM
              </h1>

              <div className="mt-5 h-px bg-[#C8A24D] animate-line" />

              <p className="mt-7 font-[family-name:var(--font-space)] text-2xl font-semibold tracking-tight sm:text-3xl">
                Street. Formal. PARCHAM.
              </p>

              <p className="mt-3 text-3xl font-semibold [font-family:var(--font-urdu)]">
                یہ ہمارا ہے
              </p>

              <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#5B5B5B]">
                Premium menswear designed in Pakistan — sharp formals and modern streetwear,
                built for daily wear and standout fits.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Streetwear", "Formals", "Made in Pakistan"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#E6E0D6] bg-white/60 px-4 py-2 text-xs font-semibold tracking-wide backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={socials[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center rounded-2xl bg-[#0F0F10] px-6 py-3 font-[family-name:var(--font-space)] font-semibold text-[#FAF7F2] shadow-[0_12px_30px_rgba(15,15,16,0.18)] transition hover:-translate-y-0.5"
                >
                  Follow on Instagram
                  <span className="ml-2 inline-block transition group-hover:translate-x-0.5">→</span>
                </Link>

                <Link
                  href={socials[1].href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-[#E6E0D6] bg-white/60 px-6 py-3 font-[family-name:var(--font-space)] font-semibold text-[#0F0F10] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#C8A24D]"
                >
                  Watch on TikTok
                </Link>
              </div>
            </div>

            {/* Right (Countdown card) */}
            <div
              className="animate-fade-up"
              style={{ animationDelay: "140ms" }}
            >
              <div className="rounded-3xl border border-[#E6E0D6] bg-white/55 p-8 shadow-[0_16px_50px_rgba(15,15,16,0.10)] backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em] text-[#5B5B5B]">
                      Launching
                    </div>
                    <div className="mt-2 font-[family-name:var(--font-space)] text-2xl font-bold tracking-tight">
                      25 March 2026 <span className="text-[#5B5B5B]">(PKT)</span>
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-2xl border border-[#E6E0D6] bg-white/60" />
                </div>

                <div className="mt-8">
                  <Countdown />
                </div>

                <div className="mt-8 border-t border-[#E6E0D6] pt-6 text-sm text-[#5B5B5B]">
                  Until then, follow our socials for previews, fits, and updates.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee / ticker */}
        <div className="mb-6 overflow-hidden rounded-2xl border border-[#E6E0D6] bg-white/50 backdrop-blur">
          <div className="flex w-[200%] animate-marquee gap-10 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#5B5B5B]">
            <div className="flex w-1/2 justify-around">
              <span>PARCHAM</span><span>STREET</span><span>FORMAL</span><span>COMING SOON</span><span>یہ ہمارا ہے</span>
            </div>
            <div className="flex w-1/2 justify-around">
              <span>PARCHAM</span><span>STREET</span><span>FORMAL</span><span>COMING SOON</span><span>یہ ہمارا ہے</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#E6E0D6] py-6 text-center text-sm text-[#5B5B5B]">
          © 2026 PARCHAM — Made in Pakistan
        </footer>
      </div>
    </main>
  );
}