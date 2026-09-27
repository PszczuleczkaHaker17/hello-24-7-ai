import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const CTA_HREF = "#kalendarz";
const CTA_LABEL = "Sprawdź na żywo w 15 minut";
const PHONE_HREF = "tel:+48882145145";
const PHONE_LABEL = "+48 882 145 145";
const EMAIL = "kontakt@gethello247.com";
const CALENDLY_URL = "https://calendly.com/hello24/spotkanie?hide_gdpr_banner=1";
const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

const CTA_CLASS =
  "inline-flex items-center justify-center text-center bg-medical-600 text-white px-7 py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-medical-700 shadow-xl shadow-medical-600/20 transition-all";

function LandingPage() {
  return (
    <div className="font-sans text-ink bg-white selection:bg-medical-600/20">
      <Nav />
      <main>
        <Hero />
        <Demo />
        <Problem />
        <HowItWorks />
        <Scope />
        <Implementation />
        <PatientData />
        <About />
        <Pricing />
        <Faq />
        <FinalCta />
        <CalendarSection />
      </main>
      <Footer />
    </div>
  );
}

function CheckIcon({ small = false }: { small?: boolean }) {
  return (
    <span
      className={`${small ? "size-5 text-[10px]" : "size-6 text-xs"} mt-0.5 shrink-0 rounded-full bg-medical-600 text-white grid place-items-center font-bold`}
    >
      ✓
    </span>
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
          <a
            href={PHONE_HREF}
            className="hidden sm:inline font-semibold text-sm text-ink hover:text-medical-700 whitespace-nowrap"
          >
            {PHONE_LABEL}
          </a>
          <a
            href={CTA_HREF}
            className="inline-flex items-center bg-ink text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-sm hover:bg-medical-700 transition-colors whitespace-nowrap"
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

          <a href={CTA_HREF} className={CTA_CLASS}>
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
            <video
              controls
              playsInline
              preload="metadata"
              poster="/demo-telefon-poster.jpg"
              className="w-full aspect-[9/16] object-contain bg-black"
            >
              <source src="/demo-telefon.mp4" type="video/mp4" />
              Twoja przeglądarka nie obsługuje odtwarzania wideo.
            </video>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------------- DEMO ---------------- */
function Demo() {
  const points = [
    "Recepcja zamknięta, telefon odbiera asystentka",
    "Pacjent umawia się na konkretny termin",
    "Wizyta od razu pojawia się w kalendarzu kliniki",
  ];

  return (
    <section aria-labelledby="demo" className="py-16 lg:py-24 bg-surface border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 id="demo" className="font-display text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Posłuchaj prawdziwej rozmowy
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Pacjent dzwoni po godzinach. Asystentka odbiera, odpowiada na pytanie o cenę i zapisuje go
            na wizytę. Nagranie bez montażu.
          </p>
        </div>

        <ol className="grid md:grid-cols-3 gap-5">
          {points.map((p, i) => (
            <li
              key={p}
              className="flex gap-4 p-6 rounded-2xl border border-slate-100 bg-white"
            >
              <span className="size-8 shrink-0 rounded-full bg-medical-600 text-white grid place-items-center text-sm font-bold">
                {i + 1}
              </span>
              <span className="text-ink-soft leading-relaxed">{p}</span>
            </li>
          ))}
        </ol>

        <details className="group mt-8 rounded-2xl border border-slate-200 bg-white">
          <summary className="list-none flex justify-between items-start gap-6 cursor-pointer p-6 font-semibold text-ink">
            Ta sama asystentka może odpowiadać na czacie na Twojej stronie — zobacz nagranie
            <span className="text-medical-600 text-2xl leading-none group-open:rotate-45 transition-transform shrink-0">
              +
            </span>
          </summary>
          <div className="px-6 pb-6 flex justify-center">
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
          </div>
        </details>

        <div className="mt-14 text-center">
          <a href={CTA_HREF} className={CTA_CLASS}>
            {CTA_LABEL}
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto">
            Nagranie to jedno. Najlepiej przekonasz się, gdy asystentka zadzwoni do Ciebie.
          </p>
        </div>
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
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-12 max-w-4xl leading-tight text-balance"
        >
          Nieodebrany telefon nie pojawia się w żadnym raporcie. Pojawia się w kalendarzu
          konkurencji.
        </h2>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            Pacjent dzwoni, gdy recepcja rejestruje kogoś przy ladzie, jest na przerwie albo klinika
            jest już zamknięta. Nikt nie odbiera. Pacjent rzadko dzwoni drugi raz — wybiera następną
            klinikę z wyników Google.
          </p>
          <div className="bg-medical-600/10 p-8 sm:p-10 rounded-3xl border border-medical-600/30 flex flex-col justify-center">
            <p className="text-base sm:text-lg text-slate-100 leading-relaxed">
              <span className="font-bold text-white">Policz to na swoich liczbach:</span> jeśli
              średnia wizyta w Twojej klinice to 400 zł, abonament zwraca się przy 3 dodatkowych
              wizytach w miesiącu. Wszystko ponad to jest Twoim zyskiem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    { title: "Pacjent dzwoni na Twój numer.", body: "Recepcja odbiera jak zawsze." },
    {
      title: "Gdy recepcja nie odbiera",
      body: "Jest zajęta, na przerwie albo po godzinach — połączenie automatycznie przechodzi do asystentki.",
    },
    {
      title: "Asystentka odpowiada i zapisuje wizytę",
      body: "W godzinach, które wcześniej jej udostępnisz.",
    },
    {
      title: "Rano recepcja widzi nowe wizyty w kalendarzu",
      body: "Z imieniem, numerem telefonu i notatką.",
    },
  ];

  return (
    <section aria-labelledby="how-it-works" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          id="how-it-works"
          className="font-display text-3xl lg:text-4xl font-bold mb-14 lg:mb-16 tracking-tight text-center"
        >
          Jak to działa w Twojej klinice
        </h2>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="p-8 rounded-3xl border border-slate-100 bg-surface">
              <span className="size-12 bg-medical-600/10 text-medical-600 rounded-xl flex items-center justify-center mb-6 font-display font-bold text-xl">
                {i + 1}
              </span>
              <h3 className="text-lg font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-12 text-center text-ink-soft font-medium max-w-2xl mx-auto leading-relaxed">
          Nie instalujesz programu. Nie zmieniasz numeru ani operatora. Przekierowanie ustawiamy razem
          w 10 minut.
        </p>
      </div>
    </section>
  );
}

/* ---------------- SCOPE ---------------- */
function Scope() {
  const does = [
    "Odbiera połączenia, których nie odbierze recepcja — 24/7, także w weekendy i święta",
    "Odpowiada na pytania o ceny, godziny otwarcia, adres i dojazd",
    "Zapisuje pacjenta na wizytę w udostępnionych godzinach",
    "Na początku rozmowy mówi, że jest asystentką AI",
  ];
  const doesNot = [
    "Nie udziela porad medycznych i nie ocenia objawów",
    "Nie podaje informacji, których nie zatwierdziłeś — jeśli nie zna odpowiedzi, mówi to wprost",
    "Nie przyjmuje płatności",
  ];

  return (
    <section aria-labelledby="scope" className="py-24 lg:py-28 bg-surface border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          id="scope"
          className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-14 text-center text-balance"
        >
          Co asystentka robi — i czego celowo nie robi
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl border border-slate-100 bg-white">
            <h3 className="text-xl font-bold mb-6">Robi</h3>
            <ul className="space-y-4">
              {does.map((t) => (
                <li key={t} className="flex gap-3">
                  <CheckIcon />
                  <span className="text-ink-soft leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-3xl border border-slate-100 bg-white">
            <h3 className="text-xl font-bold mb-6">Nie robi</h3>
            <ul className="space-y-4">
              {doesNot.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-0.5 size-6 shrink-0 rounded-full bg-slate-200 text-ink grid place-items-center text-xs font-bold">
                    ✕
                  </span>
                  <span className="text-ink-soft leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center text-ink-soft font-medium max-w-2xl mx-auto leading-relaxed">
          Gdy pytanie wykracza poza jej zakres, zapisuje imię, numer i sprawę, a recepcja oddzwania.
        </p>
      </div>
    </section>
  );
}

/* ---------------- IMPLEMENTATION ---------------- */
function Implementation() {
  const steps = [
    {
      n: "1",
      title: "Rozmowa (30 min)",
      body: "Zbieramy cennik, godziny, najczęstsze pytania pacjentów i godziny, w których asystentka może zapisywać wizyty.",
    },
    {
      n: "2",
      title: "Konfiguracja (3–5 dni)",
      body: "Przygotowujemy asystentkę i numer. Przed startem dostajesz numer testowy — dzwonisz i sprawdzasz, czy wszystko się zgadza.",
    },
    {
      n: "3",
      title: "Start",
      body: "Ustawiamy przekierowanie. Pierwszy tydzień monitorujemy każdą rozmowę i poprawiamy odpowiedzi.",
    },
  ];

  return (
    <section aria-labelledby="implementation" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          id="implementation"
          className="font-display text-3xl lg:text-4xl font-bold mb-16 lg:mb-20 tracking-tight max-w-3xl text-balance"
        >
          Od rozmowy do pierwszego odebranego telefonu: 5 dni roboczych
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((s) => (
            <div key={s.n} className="relative pt-8">
              <span className="text-8xl font-black text-slate-200 absolute -top-4 -left-2 leading-none select-none">
                {s.n}
              </span>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-200 w-fit">
          <span className="text-medical-600 font-bold text-sm">
            Z Twojej strony: ok. 1 godzina łącznie.
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PATIENT DATA ---------------- */
function PatientData() {
  const items = [
    "Podpisujemy umowę powierzenia przetwarzania danych (RODO).",
    "Asystentka zbiera tylko to, co potrzebne do zapisu: imię, numer telefonu, termin i krótką notatkę. Nie pyta o stan zdrowia.",
    "Pacjent od pierwszego zdania wie, że rozmawia z asystentką AI.",
  ];

  return (
    <section aria-labelledby="patient-data" className="py-24 bg-surface border-y border-slate-100">
      <div className="max-w-3xl mx-auto px-6">
        <h2
          id="patient-data"
          className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-10 text-center"
        >
          Dane pacjentów
        </h2>
        <ul className="space-y-4">
          {items.map((t) => (
            <li key={t} className="flex gap-4 p-6 rounded-2xl border border-slate-100 bg-white">
              <CheckIcon />
              <span className="text-ink-soft leading-relaxed">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section aria-labelledby="about" className="py-24 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <h2
          id="about"
          className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-6 text-balance"
        >
          Rozmawiasz z osobą, która wdraża — nie z infolinią
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          <span className="font-semibold text-ink">Antoni Róg, Hello 24/7.</span> Wdrożenie i wsparcie
          prowadzę osobiście. Jeśli coś nie działa, dzwonisz bezpośrednio do mnie.
        </p>
        <p className="font-semibold text-ink break-words">
          <a href={PHONE_HREF} className="hover:text-medical-700 transition-colors whitespace-nowrap">
            {PHONE_LABEL}
          </a>
          <span className="text-muted-foreground"> · </span>
          <a href={`mailto:${EMAIL}`} className="hover:text-medical-700 transition-colors">
            {EMAIL}
          </a>
        </p>

        <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-slate-200 bg-surface">
          <p className="text-ink-soft leading-relaxed">
            <span className="font-semibold text-ink">Program startowy:</span> szukamy 3 pierwszych
            klinik. Pierwsze wdrożenia opiszemy tu z nazwą kliniki i wynikami — za zgodą właściciela.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
function Pricing() {
  const included = [
    "Odbieranie połączeń 24/7, 7 dni w tygodniu",
    "Odpowiedzi na pytania o ceny i godziny",
    "Zapisywanie wizyt w kalendarzu kliniki",
    "Przekazywanie spraw do recepcji",
    "Wsparcie i poprawki odpowiedzi — bez dodatkowych opłat",
  ];

  return (
    <section id="kontakt" aria-labelledby="pricing" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
          <h2 id="pricing" className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-balance">
            Jedna cena. Bez pakietów i dopłat za funkcje.
          </h2>
        </div>

        <div className="bg-ink rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-12 lg:p-16 text-white">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-medical-600/15 text-medical-100 border border-medical-600/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                Program startowy · wolne miejsca: 3
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Dla pierwszych 3 klinik, w zamian za opinię i opis wdrożenia:
              </p>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-5xl sm:text-6xl font-extrabold">990 zł</span>
                <span className="text-xl text-slate-300">/ mies.</span>
              </div>
              <p className="mt-2 text-medical-100 font-medium">ta cena zostaje z Tobą na stałe</p>
              <p className="mt-6 text-xl font-bold">
                1490 zł <span className="font-normal text-slate-300">— wdrożenie, jednorazowo</span>
              </p>
              <p className="mt-2 text-xs text-slate-400">ceny netto</p>
            </div>

            <div className="bg-white text-ink rounded-3xl p-6 sm:p-10">
              <span className="text-muted-foreground text-xs uppercase font-bold tracking-widest">
                W cenie
              </span>
              <ul className="mt-4 mb-8 space-y-3">
                {included.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckIcon small />
                    <span className="text-ink-soft">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mb-6 p-4 rounded-2xl bg-medical-50 border border-medical-100">
                <p className="text-medical-700 text-sm leading-relaxed">
                  <span className="font-bold">Gwarancja pierwszego miesiąca:</span> jeśli w ciągu 30
                  dni od startu asystentka nie zapisze co najmniej 3 wizyt, zwracamy abonament za ten
                  miesiąc.
                </p>
              </div>
              <p className="mb-6 text-sm text-muted-foreground">
                Bez umowy długoterminowej. Wypowiedzenie z miesięcznym wyprzedzeniem, mailowo.
              </p>
              <a href={CTA_HREF} className={`${CTA_CLASS} w-full px-4`}>
                {CTA_LABEL}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground space-y-1">
          <p>Po zakończeniu programu: 1990 zł/mies. + 3990 zł wdrożenie.</p>
          <p>Sieć placówek? Napisz — przygotujemy wycenę.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function Faq() {
  const items = [
    {
      q: "Czy muszę zmieniać numer telefonu?",
      a: "Nie. Pacjenci dzwonią na Twój obecny numer. U operatora ustawiamy przekierowanie: gdy recepcja nie odbiera, linia jest zajęta albo klinika jest zamknięta. Pomagamy to skonfigurować.",
    },
    {
      q: "Czy pacjenci nie zniechęcą się, że rozmawiają z AI?",
      a: "Posłuchaj nagrania wyżej — albo sprawdź sam podczas pokazu. Dla pacjenta alternatywą nie jest rozmowa z recepcją, tylko sygnał „nikt nie odbiera”.",
    },
    {
      q: "Co jeśli pacjent chce rozmawiać z człowiekiem?",
      a: "Asystentka zapisuje imię, numer i sprawę, a recepcja oddzwania.",
    },
    {
      q: "Co jeśli asystentka nie zna odpowiedzi?",
      a: "Mówi wprost, że przekaże pytanie recepcji. Nie zgaduje — korzysta tylko z informacji, które zatwierdziłeś.",
    },
    {
      q: "Co jeśli wybrany termin jest zajęty?",
      a: "Asystentka zapisuje wizyty tylko w godzinach, które jej udostępnisz — np. w wydzielonych okienkach w grafiku. Dzięki temu nie nakłada się na wizyty umówione przez recepcję.",
    },
    {
      q: "Pracujemy w innym systemie niż Google Calendar. Czy to zadziała?",
      a: "Tak. Wizyty od asystentki trafiają do osobnego kalendarza Google, który recepcja ma otwarty obok swojego systemu. Integrację z Twoim systemem gabinetowym omawiamy indywidualnie.",
    },
    {
      q: "Co z RODO?",
      a: "Podpisujemy umowę powierzenia przetwarzania danych. Asystentka zbiera tylko dane potrzebne do zapisu i nie pyta o stan zdrowia.",
    },
    {
      q: "Ile czasu muszę na to poświęcić?",
      a: "Około godziny: rozmowa na starcie i test przed uruchomieniem. Resztę robimy my.",
    },
    {
      q: "Jak zrezygnować?",
      a: "Mailem, z miesięcznym wyprzedzeniem. Bez kar i bez umowy na 12 miesięcy.",
    },
    {
      q: "Czy są jakieś dodatkowe koszty?",
      a: "Nie. Abonament obejmuje rozmowy, wsparcie i poprawki.",
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
    <section aria-labelledby="final-cta" className="pt-24 lg:pt-28 pb-12 bg-surface border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          id="final-cta"
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-balance"
        >
          Sprawdź, jak Twoja klinika brzmiałaby przez telefon o 21:00
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          15 minut. Pokażę, jak działa asystentka, a potem zadzwoni ona na Twój telefon — spróbujesz
          umówić się jak pacjent. Jeśli to nie dla Twojej kliniki, powiem to wprost.
        </p>
      </div>
    </section>
  );
}

/* ---------------- CALENDAR ---------------- */
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

function CalendlyInline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const init = () => {
      if (!window.Calendly) return;
      container.innerHTML = "";
      window.Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: container });
    };

    if (window.Calendly) {
      init();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_SCRIPT_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = CALENDLY_SCRIPT_SRC;
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", init);
    return () => script?.removeEventListener("load", init);
  }, []);

  return <div ref={containerRef} className="w-full min-w-0 h-[700px]" />;
}

function CalendarSection() {
  return (
    <section
      id="kalendarz"
      aria-label="Umów pokaz na żywo"
      className="scroll-mt-16 sm:scroll-mt-20 pb-24 lg:pb-28 bg-surface"
    >
      <div className="max-w-4xl mx-auto px-2 sm:px-6">
        <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden">
          <CalendlyInline />
        </div>
        <p className="mt-8 text-center text-ink-soft">
          Wolisz zadzwonić?{" "}
          <a href={PHONE_HREF} className="font-semibold text-ink hover:text-medical-700 whitespace-nowrap">
            {PHONE_LABEL}
          </a>
        </p>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-4 justify-between items-center text-center md:text-left text-sm text-muted-foreground">
        <div className="space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="size-2 rounded-full bg-medical-600" />
            <span className="font-display font-bold tracking-tight text-ink">
              Hello&nbsp;24/7 · Antoni Róg
            </span>
          </div>
          <p>
            <a href={`mailto:${EMAIL}`} className="hover:text-ink transition-colors">
              {EMAIL}
            </a>
            {" · "}
            <a href={PHONE_HREF} className="hover:text-ink transition-colors whitespace-nowrap">
              {PHONE_LABEL}
            </a>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <Link to="/polityka-prywatnosci" className="hover:text-ink transition-colors">
            Polityka prywatności
          </Link>
          <span>© 2026 Hello 24/7</span>
        </div>
      </div>
    </footer>
  );
}
