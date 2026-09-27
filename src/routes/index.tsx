import { createFileRoute, Link } from "@tanstack/react-router";


export const Route = createFileRoute("/")({
  component: LandingPage,
});

const CTA_HREF = "#kalendarz";
const CTA_LABEL = "Sprawdź na żywo w 15 minut";

function LandingPage() {
  return (
    <div className="font-sans text-ink bg-white selection:bg-medical-600/20">
      <Nav />
      <main>
        <Hero />
        <Demo />
        <LostPatients />
        <Problem />
        <Solution />
        <Implementation />
        <Benefits />
        <Pricing />
        <Faq />
        <FinalCta />
        <div id="kalendarz" className="scroll-mt-24" />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <span className="relative inline-flex size-8 items-center justify-center rounded-lg bg-medical-600">
            <span className="size-3.5 rounded-full bg-white" />
            <span className="absolute inset-0 rounded-lg ring-4 ring-medical-600/20" />
          </span>
          <span className="font-display font-bold text-lg tracking-tight">Hello&nbsp;24/7</span>
        </a>
        <div className="flex items-center gap-3 sm:gap-5">
          <a href="tel:+48882145145" className="font-semibold text-sm text-ink hover:text-medical-700 whitespace-nowrap">
            +48 882 145 145
          </a>
          <a
            href={CTA_HREF}
            className="hidden sm:inline-flex items-center bg-ink text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-medical-700 transition-colors whitespace-nowrap"
          >
            Sprawdź na żywo
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <header id="top" className="relative pt-16 lg:pt-24 pb-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-[1.35fr_1fr] gap-12 items-center">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Telefon w Twojej klinice odebrany zawsze.{" "}
            <span className="text-medical-600">Także po godzinach i gdy recepcja jest zajęta.</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
            Gdy recepcja nie odbiera, połączenie przejmuje asystentka głosowa AI. Odpowiada na pytania
            o ceny i godziny, zapisuje pacjenta na wizytę i wpisuje ją do kalendarza kliniki. Działa na
            Twoim obecnym numerze.
          </p>

          <a
            href={CTA_HREF}
            className="inline-flex items-center justify-center bg-medical-600 text-white px-7 py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-medical-700 shadow-xl shadow-medical-600/20 transition-all"
          >
            {CTA_LABEL}
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Podczas rozmowy asystentka zadzwoni na Twój telefon. Spróbujesz umówić się jak pacjent.
          </p>
          <p className="mt-8 text-sm font-medium text-ink/80">
            Bez zmiany numeru · Bez umowy długoterminowej · Start w 5 dni roboczych
          </p>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-x-8 -inset-y-6 bg-medical-50 rounded-[2rem] -z-10" />
          <div className="w-full max-w-[300px] rounded-[2rem] border-[6px] border-ink bg-ink overflow-hidden shadow-2xl shadow-slate-400/40">
            <img
              src="/demo-telefon-poster.jpg"
              alt="Kadr z nagrania rozmowy z asystentką głosową AI"
              className="w-full aspect-[9/16] object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------------- LOST PATIENTS (short bridge) ---------------- */
function LostPatients() {
  return (
    <section aria-labelledby="lost-patients" className="py-16 lg:py-20 bg-surface border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          id="lost-patients"
          className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-5 text-balance"
        >
          Każdy nieodebrany telefon może oznaczać utraconego pacjenta.
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Pacjenci często dzwonią po godzinach pracy albo wtedy, gdy recepcja jest zajęta. AI
          Hello 24/7 odpowiada natychmiast i pomaga przeprowadzić ich do rezerwacji wizyty.
        </p>
      </div>
    </section>
  );
}

/* ---------------- PROBLEM ---------------- */
function Problem() {
  return (
    <section aria-labelledby="problem" className="py-24 lg:py-28 bg-ink text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          id="problem"
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-14 max-w-3xl leading-tight"
        >
          Każdy nieodebrany telefon to pacjent, który dzwoni do konkurencji.
        </h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="space-y-8">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <span className="text-alert font-bold text-4xl sm:text-5xl mb-3 block">15–30%</span>
              <p className="text-slate-300 text-base sm:text-lg">
                Przeciętna klinika traci tyle telefonów po godzinach lub w trakcie przerwy. Tych
                zapytań nie widać w żadnym raporcie.
              </p>
            </div>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
              Przy średniej wartości wizyty 300–800 zł to realnie{" "}
              <span className="text-white font-semibold">kilka tysięcy złotych miesięcznie</span>,
              które znikają bez śladu.
            </p>
          </div>
          <div className="bg-alert/10 p-8 sm:p-12 rounded-3xl border border-alert/20 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Prosta zasada:</h3>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Pacjent, który nie dodzwoni się raz, zwykle nie próbuje drugi raz. Po prostu klika
              w następną pozycję w Google i umawia się gdzie indziej.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SOLUTION ---------------- */
function Solution() {
  const cards = [
    {
      title: "Więcej obsłużonych pacjentów",
      body: "Odbieramy każde połączenie i odpowiadamy na pytania o usługi, cennik i godziny — także w nocy, w weekendy i w święta.",
      icon: <div className="size-6 border-2 border-current rounded-full" />,
    },
    {
      title: "Automatyczne umawianie wizyt",
      body: "Zapisujemy pacjentów bezpośrednio w Twoim Google Calendar. Rano widzisz gotowy grafik na dziś.",
      icon: <div className="size-6 border-2 border-current rounded-md" />,
    },
    {
      title: "Mniej pracy recepcji",
      body: "Recepcjonistka przestaje być call center i skupia się na pacjencie na miejscu. Trudniejsze sprawy trafiają do niej z notatką.",
      icon: <div className="size-6 border-2 border-current rounded-tr-xl" />,
    },
  ];

  return (
    <section aria-labelledby="solution" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 id="solution" className="font-display text-3xl lg:text-4xl font-bold mb-5 tracking-tight">
            Prosta usługa, która przejmuje najbardziej czasochłonną część recepcji
          </h2>
          <p className="text-muted-foreground text-lg">
            Więcej zapisanych wizyt, mniej utraconych zapytań, spokojniejsza recepcja.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group p-8 rounded-3xl border border-slate-100 bg-surface hover:bg-white hover:shadow-2xl hover:shadow-slate-200/60 transition-all"
            >
              <div className="size-12 bg-medical-600/10 text-medical-600 rounded-xl flex items-center justify-center mb-6">
                {c.icon}
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- IMPLEMENTATION ---------------- */
function Implementation() {
  const steps = [
    {
      n: "1",
      title: "Rozmowa (15 min)",
      body: "Poznajemy Twój cennik, godziny pracy i specyfikę kliniki.",
    },
    {
      n: "2",
      title: "Konfiguracja (3–5 dni)",
      body: "Budujemy asystenta dopasowanego do Twojej kliniki. Ty nie ruszasz palcem.",
    },
    {
      n: "3",
      title: "Start",
      body: "Asystent odbiera telefony, Ty widzisz efekty od razu w kalendarzu.",
    },
  ];

  return (
    <section aria-labelledby="implementation" className="py-24 bg-surface border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16 lg:mb-20">
          <div>
            <h2 id="implementation" className="font-display text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
              Wdrożenie w 5 dni.
            </h2>
            <p className="text-muted-foreground text-lg">
              Zero pracy technicznej po Twojej stronie.
            </p>
          </div>
          <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-200 w-fit">
            <span className="text-medical-600 font-bold text-sm">
              Wszystko dzieje się po naszej stronie.
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((s) => (
            <div key={s.n} className="relative pt-8">
              <span className="text-8xl font-black text-slate-200 absolute -top-4 -left-2 leading-none select-none">
                {s.n}
              </span>
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BENEFITS ---------------- */
function Benefits() {
  const items = [
    "Więcej zapisanych wizyt — bo żaden telefon nie zostaje bez odpowiedzi.",
    "Mniej obciążona recepcja — pracownik zajmuje się pacjentem, nie telefonem.",
    "Obsługa poza godzinami pracy — pacjent umawia się o 21:00 w niedzielę, Ty widzisz to w kalendarzu.",
    "Brak kosztu dodatkowego etatu — jeden abonament zamiast rekrutacji i szkolenia.",
    "Spójna obsługa — asystent nigdy nie ma gorszego dnia i zawsze podaje aktualny cennik.",
  ];
  return (
    <section aria-labelledby="benefits" className="py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="benefits" className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-14 text-center">
          Co realnie zyskuje Twoja klinika
        </h2>
        <ul className="grid sm:grid-cols-2 gap-5">
          {items.map((t) => (
            <li
              key={t}
              className="flex gap-4 p-6 rounded-2xl border border-slate-100 bg-surface"
            >
              <span className="mt-1 size-6 shrink-0 rounded-full bg-medical-600 text-white grid place-items-center text-xs font-bold">
                ✓
              </span>
              <span className="text-ink-soft leading-relaxed">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- DEMO ---------------- */
function Demo() {
  const phonePoints = [
    "Recepcja zamknięta — telefon odbiera asystentka AI",
    "Pacjent pyta i umawia się na konkretny termin",
    "Wizyta od razu w Google Calendar kliniki",
  ];

  const chatPoints = [
    "Odpowiada na pytania o cennik i godziny",
    "Zapisuje wizytę bez udziału recepcji",
  ];

  return (
    <section aria-labelledby="demo" className="py-16 lg:py-24 bg-surface border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 lg:mb-14">
          <h2 id="demo" className="font-display text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Zobacz, jak to działa w praktyce
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            To nie jest scenariusz reklamowy — to nagrania realnych rozmów z asystentem.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Film 1 — Telefon */}
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-wider text-medical-600 mb-3">
              📞 Telefon
            </span>
            <h3 className="text-lg lg:text-xl font-bold text-center mb-6 max-w-sm">
              Pacjent dzwoni po godzinach — AI odbiera i umawia wizytę
            </h3>
            <div className="w-full max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/40 bg-ink">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                className="w-full h-full object-contain bg-black"
              >
                <source src="/demo-telefon.mp4" type="video/mp4" />
                Twoja przeglądarka nie obsługuje odtwarzania wideo.
              </video>
            </div>
            <ul className="mt-6 space-y-3 w-full max-w-sm">
              {phonePoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-ink-soft">
                  <span className="mt-0.5 size-5 shrink-0 rounded-full bg-medical-600 text-white grid place-items-center text-[10px] font-bold">
                    ✓
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Film 2 — Czat */}
          <div className="flex flex-col items-center mt-16 lg:mt-0">
            <span className="text-xs font-bold uppercase tracking-wider text-medical-600 mb-3">
              💬 Czat na stronie
            </span>
            <h3 className="text-lg lg:text-xl font-bold text-center mb-6 max-w-sm">
              Ten sam asystent odpowiada też na czacie na Twojej stronie
            </h3>
            <div className="w-full max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/40 bg-ink">
              <video
                controls
                playsInline
                preload="none"
                className="w-full h-full object-contain bg-black"
              >
                <source src="/Ai_klinika_final.mp4" type="video/mp4" />
                Twoja przeglądarka nie obsługuje odtwarzania wideo.
              </video>
            </div>
            <ul className="mt-6 space-y-3 w-full max-w-sm">
              {chatPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-ink-soft">
                  <span className="mt-0.5 size-5 shrink-0 rounded-full bg-medical-600 text-white grid place-items-center text-[10px] font-bold">
                    ✓
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href={CTA_HREF}
            className="inline-flex items-center justify-center bg-medical-600 text-white px-7 py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-medical-700 shadow-xl shadow-medical-600/20 transition-all"
          >
            {CTA_LABEL}
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
            W trakcie rozmowy nasza asystentka AI zadzwoni do Ciebie — sprawdzisz ją sam.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
function Pricing() {
  return (
    <section id="kontakt" aria-labelledby="pricing" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
          <h2 id="pricing" className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Jedna cena. Wszystkie funkcje.
          </h2>
          <p className="text-muted-foreground">Zero dopłat za funkcje premium.</p>
        </div>

        <div className="bg-ink rounded-[2rem] lg:rounded-[3rem] p-8 sm:p-12 lg:p-16 text-white">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-medical-600/15 text-medical-100 border border-medical-600/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                Program wdrożeniowy · zostały 3 miejsca
              </div>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Oferta dla pierwszych 3 klinik.
              </h3>
              <p className="text-medical-100 mb-4 leading-relaxed">
                Cena 990 zł/mies. zostaje z Tobą na stałe — także po zakończeniu programu.
              </p>
              <p className="text-slate-300 mb-8 leading-relaxed">
                W zamian za opinię i case study po wdrożeniu przygotowaliśmy specjalne warunki.
                Bez umowy długoterminowej — miesięczny okres wypowiedzenia.
              </p>
              <ul className="space-y-4 text-slate-200">
                {[
                  "Odbieranie połączeń 24/7, 7 dni w tygodniu",
                  "Odpowiedzi na pytania o cennik i godziny otwarcia",
                  "Umawianie wizyt bezpośrednio w Google Calendar",
                  "Przekazywanie trudnych spraw do recepcji",
                  "Wsparcie techniczne i aktualizacje asystenta",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 size-5 rounded-full bg-medical-600 grid place-items-center text-[10px] shrink-0">
                      ✓
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white text-ink rounded-3xl p-8 sm:p-10">
              <div className="mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-muted-foreground text-xs uppercase font-bold tracking-widest">
                    Abonament
                  </span>
                  <span className="inline-flex items-center bg-medical-600 text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide">
                    -50%
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-5xl font-black">990 zł</span>
                  <span className="text-muted-foreground">/ mies.</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground line-through">
                  Standardowo 1990 zł / mies.
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-semibold">Wdrożenie (jednorazowo)</span>
                  <span className="text-2xl font-bold text-medical-600">1490 zł</span>
                </div>
                <div className="text-sm text-muted-foreground line-through text-right">
                  Standardowo 3990 zł
                </div>
              </div>
              <div className="mb-8 p-4 rounded-2xl bg-medical-50 border border-medical-100">
                <p className="text-medical-700 font-bold text-center">
                  Oszczędzasz 14 500 zł w pierwszym roku.
                </p>
              </div>
              <a
                href={CTA_HREF}
                className="w-full inline-flex items-center justify-center bg-medical-600 text-white py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-medical-700 transition-all"
              >
                {CTA_LABEL}
              </a>
              <p className="mt-4 text-xs text-muted-foreground text-center">
                Bez umowy długoterminowej. Rezygnujesz, kiedy chcesz.
              </p>
            </div>
          </div>

          <p className="mt-10 text-sm text-slate-400 text-center">
            Duża klinika lub sieć placówek? Napisz — przygotujemy indywidualną wycenę.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function Faq() {
  const items = [
    {
      q: "A co jeśli pacjent chce porozmawiać z człowiekiem?",
      a: "Asystent w każdej chwili może przekazać rozmowę do recepcji. To narzędzie, które ją odciąża — nie zastępuje.",
    },
    {
      q: "Czy to skomplikowane we wdrożeniu?",
      a: "Nie. Ty podajesz cennik i godziny pracy, resztą zajmujemy się my. Zero pracy technicznej po Twojej stronie.",
    },
    {
      q: "Czy muszę podpisywać długoterminową umowę?",
      a: "Nie. Miesięczny okres wypowiedzenia — bez zobowiązań na 12 miesięcy.",
    },
    {
      q: "Czy asystent poda pacjentowi błędne informacje?",
      a: "Asystent korzysta wyłącznie z cennika i danych, które nam przekażesz. Nie zgaduje i nie improwizuje — a każdą trudniejszą sprawę przekazuje recepcji.",
    },
    {
      q: "Ile kosztuje utrzymanie poza abonamentem?",
      a: "Nic. Cena, którą widzisz, to cała cena. Bez ukrytych opłat za funkcje.",
    },
  ];

  return (
    <section aria-labelledby="faq" className="py-24 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h2 id="faq" className="font-display text-3xl lg:text-4xl font-bold mb-12 text-center tracking-tight">
          Częste pytania
        </h2>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {items.map((it) => (
            <details key={it.q} className="group py-6">
              <summary className="list-none flex justify-between items-start gap-6 cursor-pointer font-semibold text-ink">
                {it.q}
                <span className="text-medical-600 text-2xl leading-none group-open:rotate-45 transition-transform shrink-0">
                  +
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCta() {
  return (
    <section aria-labelledby="final-cta" className="py-24 lg:py-28 bg-surface border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          id="final-cta"
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-balance"
        >
          Każdy dzień zwłoki to nieodebrane telefony i utracone wizyty.
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Zarezerwuj 15-minutową rozmowę i sprawdź, czy Twoja klinika kwalifikuje się do programu
          wdrożeniowego dla pierwszych 3 klinik.
        </p>
        <a
          href={CTA_HREF}
          className="inline-flex items-center justify-center bg-ink text-white px-8 sm:px-10 py-5 rounded-2xl font-bold text-lg sm:text-xl hover:bg-medical-600 transition-all shadow-xl shadow-ink/10"
        >
          {CTA_LABEL}
        </a>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row gap-4 justify-between items-center text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-medical-600" />
          <span className="font-display font-bold tracking-tight uppercase text-ink">
            Hello&nbsp;24/7
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <span>© {new Date().getFullYear()} Hello 24/7. Wszelkie prawa zastrzeżone.</span>
          <Link to="/polityka-prywatnosci" className="hover:text-ink transition-colors">
            Polityka prywatności
          </Link>
        </div>
      </div>
    </footer>
  );
}
