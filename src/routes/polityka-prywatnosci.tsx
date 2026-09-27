import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/polityka-prywatnosci")({
  head: () => ({
    meta: [
      { title: "Polityka prywatności — Hello 24/7" },
      {
        name: "description",
        content:
          "Polityka prywatności Hello 24/7 — jakie dane zbieramy, w jakim celu je przetwarzamy i jakie przysługują Ci prawa.",
      },
      { property: "og:title", content: "Polityka prywatności — Hello 24/7" },
      {
        property: "og:description",
        content:
          "Polityka prywatności Hello 24/7 — jakie dane zbieramy, w jakim celu je przetwarzamy i jakie przysługują Ci prawa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Polityka prywatności — Hello 24/7" },
      {
        name: "twitter:description",
        content:
          "Polityka prywatności Hello 24/7 — jakie dane zbieramy, w jakim celu je przetwarzamy i jakie przysługują Ci prawa.",
      },
    ],
  }),
  component: PrivacyPage,
});

function H2({ children }: { children: string }) {
  return (
    <h2 className="mt-10 text-xl sm:text-2xl font-display font-bold tracking-tight text-ink">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 leading-relaxed text-muted-foreground">{children}</p>;
}

function Li({ children }: { children: React.ReactNode }) {
  return <li className="leading-relaxed text-muted-foreground">{children}</li>;
}

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <Link
          to="/"
          className="text-sm font-semibold text-medical-600 hover:text-medical-700"
        >
          ← Powrót na stronę główną
        </Link>
        <h1 className="mt-6 text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-ink">
          Polityka prywatności
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ostatnia aktualizacja: 27.09.2026
        </p>

        <div className="mt-8">
          <H2>1. Administrator danych</H2>
          <P>
            Administratorem Twoich danych osobowych jest Antoni Róg, prowadzący
            działalność pod nazwą Hello 24/7 (dalej: „Administrator”).
          </P>
          <P>Kontakt w sprawach danych osobowych:</P>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <Li>
              e-mail:{" "}
              <a
                href="mailto:kontakt@gethello247.com"
                className="text-medical-600 hover:text-medical-700"
              >
                kontakt@gethello247.com
              </a>
            </Li>
            <Li>telefon: +48 882 145 145</Li>
          </ul>

          <H2>2. Jakie dane zbieramy</H2>
          <P>Zbieramy wyłącznie dane, które sam nam przekazujesz:</P>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <Li>
              <strong className="text-ink">Przy rezerwacji spotkania przez Calendly:</strong>{" "}
              imię i nazwisko, adres e-mail, nazwa kliniki, numer telefonu, liczba
              lekarzy w klinice.
            </Li>
            <Li>
              <strong className="text-ink">Podczas pokazu na żywo:</strong> numer
              telefonu, na który dzwoni asystentka AI, oraz treść rozmowy testowej z
              asystentką (np. imię i termin podany podczas testu).
            </Li>
            <Li>
              <strong className="text-ink">Przy kontakcie e-mailowym lub telefonicznym:</strong>{" "}
              dane, które podasz w wiadomości lub rozmowie.
            </Li>
          </ul>

          <H2>3. Cele i podstawy przetwarzania</H2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-2 pr-4 font-semibold text-ink">Cel</th>
                  <th className="py-2 font-semibold text-ink">
                    Podstawa prawna (RODO)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 pr-4 text-muted-foreground">
                    Umówienie i przeprowadzenie spotkania, pokaz działania asystentki
                  </td>
                  <td className="py-3 text-muted-foreground">
                    art. 6 ust. 1 lit. b — działania na Twoje żądanie przed zawarciem
                    umowy
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-muted-foreground">
                    Odpowiedź na wiadomości i kontakt w sprawie oferty
                  </td>
                  <td className="py-3 text-muted-foreground">
                    art. 6 ust. 1 lit. f — prawnie uzasadniony interes (komunikacja z
                    osobą, która się z nami skontaktowała)
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-muted-foreground">
                    Zawarcie i wykonanie umowy
                  </td>
                  <td className="py-3 text-muted-foreground">art. 6 ust. 1 lit. b</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-muted-foreground">
                    Ustalenie, dochodzenie lub obrona roszczeń
                  </td>
                  <td className="py-3 text-muted-foreground">art. 6 ust. 1 lit. f</td>
                </tr>
              </tbody>
            </table>
          </div>
          <P>
            Podanie danych jest dobrowolne, ale bez nich nie umówimy spotkania ani
            nie przeprowadzimy pokazu.
          </P>

          <H2>4. Komu przekazujemy dane</H2>
          <P>
            Korzystamy z zewnętrznych dostawców usług, którzy przetwarzają dane w
            naszym imieniu:
          </P>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <Li>
              <strong className="text-ink">Calendly</strong> — rezerwacja spotkań
            </Li>
            <Li>
              <strong className="text-ink">Google</strong> (Google Meet, Google
              Calendar, Gmail) — spotkania online, kalendarz, poczta
            </Li>
            <Li>
              <strong className="text-ink">Voiceflow</strong> — obsługa asystentki AI
              podczas pokazu na żywo
            </Li>
            <Li>
              <strong className="text-ink">Make.com</strong> — przekazanie danych z
              rozmowy testowej do kalendarza
            </Li>
            <Li>
              <strong className="text-ink">Lovable</strong> — hosting strony
              internetowej
            </Li>
          </ul>
          <P>
            Nie sprzedajemy danych i nie przekazujemy ich innym podmiotom w celach
            marketingowych.
          </P>

          <H2>5. Przekazywanie danych poza EOG</H2>
          <P>
            Część dostawców (m.in. Calendly, Google, Voiceflow) może przetwarzać
            dane poza Europejskim Obszarem Gospodarczym, w szczególności w USA.
            Odbywa się to na podstawie standardowych klauzul umownych zatwierdzonych
            przez Komisję Europejską lub decyzji o adekwatności (EU-U.S. Data
            Privacy Framework) — w zależności od dostawcy.
          </P>

          <H2>6. Jak długo przechowujemy dane</H2>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <Li>
              Dane z rezerwacji i kontaktu — do 12 miesięcy od ostatniego kontaktu,
              chyba że zawrzemy umowę.
            </Li>
            <Li>
              Dane związane z umową — przez czas jej trwania oraz okres przedawnienia
              roszczeń i okres wymagany przepisami podatkowymi.
            </Li>
            <Li>
              Dane z rozmowy testowej podczas pokazu — usuwamy w ciągu 30 dni od
              pokazu.
            </Li>
          </ul>

          <H2>7. Twoje prawa</H2>
          <P>Masz prawo do:</P>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <Li>dostępu do swoich danych i otrzymania ich kopii,</Li>
            <Li>sprostowania danych,</Li>
            <Li>usunięcia danych,</Li>
            <Li>ograniczenia przetwarzania,</Li>
            <Li>przenoszenia danych,</Li>
            <Li>
              sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym
              interesie.
            </Li>
          </ul>
          <P>
            Aby skorzystać z tych praw, napisz na{" "}
            <a
              href="mailto:kontakt@gethello247.com"
              className="text-medical-600 hover:text-medical-700"
            >
              kontakt@gethello247.com
            </a>
            .
          </P>
          <P>
            Masz też prawo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych
            (ul. Stawki 2, 00-193 Warszawa, uodo.gov.pl).
          </P>

          <H2>8. Pliki cookies</H2>
          <P>
            Strona korzysta z plików cookies niezbędnych do jej działania. Osadzony
            kalendarz Calendly może zapisywać własne pliki cookies zgodnie z
            polityką prywatności Calendly. Możesz zarządzać cookies w ustawieniach
            przeglądarki.
          </P>

          <H2>9. Zautomatyzowane decyzje</H2>
          <P>
            Nie podejmujemy wobec Ciebie decyzji opartych wyłącznie na
            zautomatyzowanym przetwarzaniu, w tym profilowaniu.
          </P>

          <H2>10. Zmiany polityki</H2>
          <P>
            Możemy aktualizować tę politykę. Aktualna wersja jest zawsze dostępna na
            tej stronie.
          </P>
        </div>
      </div>
    </div>
  );
}
