import { useEffect, useRef, useState } from "react";
import { Check, MicOff, Phone, PhoneOff, Volume2 } from "lucide-react";

type Message = {
  sender: "ai" | "patient";
  text: string;
  at: number;
};

const MESSAGES: readonly Message[] = [
  {
    sender: "ai",
    text: "Dzień dobry, tu wirtualna asystentka kliniki. W czym mogę pomóc?",
    at: 2.6,
  },
  { sender: "patient", text: "Ile kosztuje higienizacja?", at: 4.2 },
  {
    sender: "ai",
    text: "Higienizacja kosztuje 350 zł. Mam wolny termin we wtorek o 15:00.",
    at: 5.8,
  },
  { sender: "patient", text: "Pasuje. Tomasz Nowak.", at: 7.4 },
  { sender: "ai", text: "Zapisane. Do zobaczenia we wtorek!", at: 9.0 },
];

const TYPING_WINDOWS: readonly [number, number][] = [
  [2.0, 2.6],
  [5.2, 5.8],
  [8.4, 9.0],
];

const HOURS = ["13:00", "14:00", "15:00", "16:00", "17:00"] as const;
const LOOP_TICKS = 160; // 16.0 s at 100 ms per tick

function formatTimer(seconds: number) {
  const s = Math.max(0, Math.min(59, seconds));
  return `00:${String(s).padStart(2, "0")}`;
}

export function CallAnimation() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [tick, setTick] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion || !isVisible) return;
    const id = window.setInterval(() => {
      setTick((prev) => (prev + 1) % LOOP_TICKS);
    }, 100);
    return () => window.clearInterval(id);
  }, [reducedMotion, isVisible]);

  const t = tick / 10;
  const phase = t < 2 ? "ringing" : t < 12.6 ? "call" : "calendar";
  const callSeconds = Math.floor(Math.max(0, t - 2));
  const isTyping = TYPING_WINDOWS.some(([start, end]) => t >= start && t < end);
  const endPulse = t >= 12.0 && t < 12.6;
  const eventIn = t >= 12.9;

  if (reducedMotion) {
    return (
      <div
        ref={rootRef}
        role="img"
        aria-label="Animacja: asystentka AI odbiera telefon po godzinach i zapisuje pacjenta na wizytę"
        className="w-full aspect-[9/16] bg-ink text-white flex flex-col justify-between p-3.5 select-none overflow-hidden"
      >
        <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium">
          <span>21:04</span>
          <span>Klinika · Recepcja</span>
        </div>

        <div className="flex flex-col gap-1.5 my-2">
          {MESSAGES.map((m) => (
            <div
              key={m.text}
              className={`flex flex-col ${m.sender === "ai" ? "items-start" : "items-end"}`}
            >
              <span className="text-[9px] text-slate-400 mb-0.5 px-1">
                {m.sender === "ai" ? "Asystentka AI" : "Pacjent"}
              </span>
              <div
                className={`max-w-[88%] rounded-xl px-2.5 py-1.5 text-[10px] leading-snug ${
                  m.sender === "ai"
                    ? "bg-medical-600/30 border border-medical-600/40 text-white"
                    : "bg-white/10 text-slate-100"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-white text-ink p-2.5 shadow-sm">
          <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 mb-1">
            <span>Kalendarz kliniki · Wt. 15:00</span>
            <span className="inline-flex items-center gap-0.5 text-emerald-700">
              <Check className="size-3" />
              Dodano
            </span>
          </div>
          <p className="text-[10px] font-semibold leading-snug">
            Wizyta: Tomasz Nowak · higienizacja · tel. zapisany
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      role="img"
      aria-label="Animacja: asystentka AI odbiera telefon po godzinach i zapisuje pacjenta na wizytę"
      className={`relative w-full aspect-[9/16] select-none overflow-hidden transition-colors duration-500 ${
        phase === "calendar" ? "bg-white text-ink" : "bg-ink text-white"
      }`}
    >
      {/* Status bar */}
      <div
        className={`flex items-center justify-between px-5 pt-3 pb-1 text-[11px] font-semibold transition-colors duration-500 ${
          phase === "calendar" ? "text-ink" : "text-white/80"
        }`}
      >
        <span>21:04</span>
        <div className="flex items-center gap-1" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
          <span className="h-1.5 w-3.5 rounded-full bg-current opacity-80" />
        </div>
      </div>

      {/* Step 1: Ringing / answering after hours */}
      <div
        aria-hidden={phase !== "ringing"}
        className={`absolute inset-x-0 top-10 bottom-0 flex flex-col items-center justify-center px-6 text-center transition-all duration-500 ${
          phase === "ringing"
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="relative mb-7 flex items-center justify-center">
          <span className="absolute size-24 rounded-full bg-emerald-500/20 animate-ping" />
          <span className="absolute size-20 rounded-full border-2 border-emerald-400/50" />
          <span className="relative size-16 rounded-full bg-emerald-500 text-white grid place-items-center shadow-lg shadow-emerald-500/30">
            <Phone className="size-7" />
          </span>
        </div>
        <p className="font-display text-lg font-bold tracking-tight">Klinika · Recepcja</p>
        <p className="mt-2 text-xs text-emerald-300 font-medium leading-relaxed">
          Po godzinach — odbiera asystentka AI
        </p>
      </div>

      {/* Step 2: Active call with chat transcript */}
      <div
        aria-hidden={phase !== "call"}
        className={`absolute inset-x-0 top-9 bottom-0 flex flex-col justify-between px-3.5 pb-4 pt-1 transition-all duration-500 ${
          phase === "call"
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="text-center pb-2 border-b border-white/10">
          <p className="font-display text-sm font-bold leading-tight">Klinika · Recepcja</p>
          <p className="mt-0.5 text-[11px] font-mono text-emerald-300 tabular-nums">
            {formatTimer(callSeconds)}
          </p>
        </div>

        <div className="flex-1 overflow-hidden flex flex-col justify-end gap-2 py-2.5">
          {MESSAGES.filter((m) => m.at <= t).map((m) => (
            <div
              key={m.text}
              className={`flex flex-col animate-in fade-in slide-in-from-bottom-2 duration-300 ${
                m.sender === "ai" ? "items-start" : "items-end"
              }`}
            >
              <span className="text-[9px] text-slate-400 mb-0.5 px-1">
                {m.sender === "ai" ? "Asystentka AI" : "Pacjent"}
              </span>
              <div
                className={`max-w-[88%] rounded-2xl px-2.5 py-1.5 text-[11px] leading-snug ${
                  m.sender === "ai"
                    ? "bg-medical-600/30 border border-medical-600/40 text-white rounded-tl-sm"
                    : "bg-white/10 text-slate-100 rounded-tr-sm"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex flex-col items-start animate-in fade-in duration-200">
              <span className="text-[9px] text-slate-400 mb-0.5 px-1">Asystentka AI</span>
              <div className="inline-flex items-center gap-1 rounded-2xl rounded-tl-sm bg-medical-600/30 border border-medical-600/40 px-3 py-2">
                <span className="size-1.5 rounded-full bg-white/80 animate-bounce [animation-delay:0ms]" />
                <span className="size-1.5 rounded-full bg-white/80 animate-bounce [animation-delay:150ms]" />
                <span className="size-1.5 rounded-full bg-white/80 animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-5 pt-2 border-t border-white/10">
          <span className="size-10 rounded-full bg-white/10 text-white/80 grid place-items-center">
            <Volume2 className="size-4" />
          </span>
          <span className="size-10 rounded-full bg-white/10 text-white/80 grid place-items-center">
            <MicOff className="size-4" />
          </span>
          <span
            className={`relative size-11 rounded-full bg-red-500 text-white grid place-items-center transition-transform duration-300 ${
              endPulse ? "scale-110 ring-4 ring-red-400/50" : "scale-100"
            }`}
          >
            <PhoneOff className="size-4" />
          </span>
        </div>
      </div>

      {/* Step 3: Clinic calendar view */}
      <div
        aria-hidden={phase !== "calendar"}
        className={`absolute inset-x-0 top-9 bottom-0 flex flex-col px-4 pt-2 pb-4 transition-all duration-500 ${
          phase === "calendar"
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <p className="font-display text-sm font-bold text-ink">Kalendarz kliniki</p>
          <span className="rounded-full bg-medical-50 text-medical-700 border border-medical-100 px-2.5 py-0.5 text-[11px] font-bold">
            Wt.
          </span>
        </div>

        <div className="relative flex-1 mt-3 flex flex-col justify-between">
          {HOURS.map((hour) => (
            <div key={hour} className="relative flex items-start gap-2.5 flex-1">
              <span className="text-[10px] font-mono text-slate-400 w-9 shrink-0 -mt-1.5">
                {hour}
              </span>
              <div className="flex-1 border-t border-slate-200 h-full relative">
                {hour === "15:00" && (
                  <div
                    className={`mt-1 rounded-xl bg-medical-50 border border-medical-600/30 border-l-4 border-l-medical-600 p-2.5 shadow-sm transition-all duration-500 ease-out ${
                      eventIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <p className="text-[11px] font-bold text-ink leading-snug">
                      Wizyta: Tomasz Nowak · higienizacja · tel. zapisany
                    </p>
                    <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] font-semibold">
                      <Check className="size-3" />
                      Dodano do kalendarza
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}