## Cel

Zbudować single-page landing "AI Recepcja 24/7" w wybranym kierunku **Clinical Precision** (granat + turkus, biała przestrzeń, medyczny SaaS) z copy dostosowanym pod właścicieli prywatnych klinik i konwersją na jeden CTA: **"Zarezerwuj 15 minut rozmowy"**.

Ton: profesjonalna usługa B2B dla klinik premium. Bez słów "rewolucyjna AI", "przyszłość medycyny", "inteligentny system". Nacisk na: więcej obsłużonych pacjentów, mniej utraconych zapytań, odciążona recepcja, automatyczne umawianie wizyt.

## Struktura strony (kolejność sekcji)

1. **Nav** — logo + jeden przycisk "Zarezerwuj 15 minut rozmowy"
2. **Hero** — nowy nagłówek "Nie trać pacjentów przez nieodebrane telefony." + podtytuł B2B + CTA + microcopy "3 pierwsze kliniki otrzymują wdrożenie w specjalnej cenie." + badge "Oferta wdrożeniowa dla pierwszych 3 klinik" (zamiast starego "ostatnie 3 miejsca"). Zdjęcie recepcji kliniki po prawej.
3. **Nowa sekcja pod-hero** — "Każdy nieodebrany telefon może oznaczać utraconego pacjenta." + krótki tekst o dzwoniących po godzinach.
4. **Problem** — statystyka 15–30% utraconych połączeń, koszt w zł, "dzwoni do następnej kliniki".
5. **Rozwiązanie** — 3 karty: 24/7, umawianie w Google Calendar, przekazywanie trudnych spraw. Copy skierowane do właściciela ("więcej obsłużonych pacjentów", "mniej pracy recepcji").
6. **Wdrożenie w 5 dni** — 3 kroki (Rozmowa 15 min → Konfiguracja 3–5 dni → Start).
7. **Korzyści dla kliniki** — 5 punktów (więcej wizyt, odciążona recepcja, obsługa poza godzinami, brak kosztu etatu, spójna obsługa).
8. **Demo video** — placeholder z obrazem podglądowym i przyciskiem play.
9. **Pricing** — jedna karta z boxem "Program wdrożeniowy": 1490 zł wdrożenie + 990 zł/mies., przekreślone ceny standardowe, lista funkcji, CTA "Zarezerwuj 15 minut rozmowy", info o miesięcznym wypowiedzeniu.
10. **FAQ** — 5 pytań z brief.
11. **Finalny CTA** — "Każdy dzień zwłoki to nieodebrane telefony i utracone wizyty." + CTA.
12. **Footer** — logo + copyright.

**Każdy przycisk CTA na stronie** prowadzi do tego samego kotwicowego celu (`#kontakt` scroll do sekcji pricing lub finalnego CTA). Zero alternatywnych ścieżek ("zobacz cennik" itp.).

## Design tokens (Clinical Precision)

Dodane do `src/styles.css` jako semantyczne tokeny (oklch):
- `--medical-600` turkus (~#0D9488), `--medical-700` ciemniejszy turkus
- `--ink` granat #0F172A, `--ink-soft`, `--surface` slate-50
- `--alert` koralowy do akcentów problemu
- Fonty: **Plus Jakarta Sans** (display, 700/800) + **Inter** (body, 400/500/600), ładowane przez `<link>` w `__root.tsx` (Tailwind v4 nie może `@import` remote URL).
- Border-radius: 2xl/3xl, hojna biała przestrzeń, subtelne cienie turkusowe.

## Pliki do zmiany / utworzenia

- `src/styles.css` — dodać tokeny brand (medical, ink, alert) w `@theme inline` + `:root`, ustawić font-sans/font-display.
- `src/routes/__root.tsx` — polski `<title>`, `description`, OG meta po polsku, `<link>` do Google Fonts (Inter + Plus Jakarta Sans).
- `src/routes/index.tsx` — pełna implementacja landingu (jako pojedynczy plik z wewnętrznymi komponentami sekcji).
- `src/assets/hero-reception.jpg` — już wygenerowane, import ES6.
- `src/assets/demo-preview.jpg` — już wygenerowane, import ES6.

## Detale techniczne

- Semantyczny HTML: pojedynczy `<h1>`, sekcje z `<section aria-labelledby>`, FAQ jako `<details>/<summary>` (dostępne, SEO-friendly).
- Responsywność mobile: hero układa się w jedną kolumnę <lg, zdjęcie chowa się <lg, grid `md:grid-cols-2/3` degraduje do 1 kolumny, padding kontenerów `px-6`, przyciski na całą szerokość na sm.
- Placeholder `[X]` w pricingu zostawiony dosłownie jako `[X]` (zgodnie z instrukcją brief — bez fałszywego scarcity).
- Bez sekcji opinii / testimoniali (celowo pominięte w brief).
- Smooth-scroll do `#kontakt` z każdego CTA; sekcja pricing i finalny CTA dostają `id="kontakt"` / `id="pricing"`.
- Meta OG bez `og:image` na root — niech hosting wstrzyknie screenshot; na leaf index też nie ustawiamy og:image (brak własnego brand shot).

## Weryfikacja

Po buildzie:
1. Sprawdzić że strona renderuje w kierunku Clinical Precision (granat + turkus).
2. Otworzyć preview w widoku mobile i przewinąć całą stronę — potwierdzić że hero, karty i pricing układają się w kolumnę.
3. Potwierdzić że każdy przycisk CTA prowadzi do `#kontakt` (jednego celu).

Gotowe do implementacji.