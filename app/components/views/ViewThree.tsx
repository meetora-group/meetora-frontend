import type { TimeSlotResponse } from "meetora-api";

type ViewThreeProps = {
  selectedDate: string;
  setSelectedDate: (value: string) => void;
  selectedTime: string;
  setSelectedTime: (value: string) => void;
  label: string;
  setLabel: (value: string) => void;
  recipientEmail: string;
  setRecipientEmail: (value: string) => void;
  timeSlots: TimeSlotResponse[];
  isLoadingSlots: boolean;
  isSubmitting: boolean;
  onSubmit: () => void;
};

const formatHour = (hour: number) => `${String(hour).padStart(2, "0")}:00`;

const getTodayDate = () => {
  const now = new Date();
  return new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
};

export function ViewThree({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  label,
  setLabel,
  recipientEmail,
  setRecipientEmail,
  timeSlots,
  isLoadingSlots,
  isSubmitting,
  onSubmit,
}: ViewThreeProps) {
  const selectedSlot =
    timeSlots.find((slot) => String(slot.hour ?? Number.parseInt(slot.slot_hour ?? slot.slot ?? "0", 10)) === selectedTime) ?? null;

  const visiblePlanOptions = selectedSlot?.labels && selectedSlot.labels.length > 0 ? selectedSlot.labels : [];

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f7ff] px-6 py-10">
      <div className="w-full max-w-2xl rounded-[32px] border border-violet-100 bg-white p-8 shadow-xl shadow-violet-100/60">
        <div className="mb-8 space-y-2 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-500">
            Agendamento
          </p>
          <h2 className="text-3xl font-bold text-zinc-800">
            Escolhe a data e a hora certa
          </h2>
          <p className="text-base text-zinc-600">
            Escolhe um dia, uma hora, e deixa o plano em forma de etiqueta para eu me preparar.
          </p>
        </div>

        <div className="space-y-6">
          <label className="block space-y-2 text-sm font-medium text-zinc-700">
            <span>Data</span>
            <input
              type="date"
              value={selectedDate}
              min={getTodayDate()}
              onChange={(event) => setSelectedDate(event.target.value)}
              className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-base text-zinc-800 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
            />
          </label>

          <div className="space-y-3">
            <p className="text-sm font-medium text-zinc-700">Hora</p>

            {isLoadingSlots ? (
              <p className="text-sm text-zinc-500">A carregar opções de horário…</p>
            ) : (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {timeSlots.map((slot) => {
                  const slotHour = String(slot.hour ?? Number.parseInt(slot.slot_hour ?? slot.slot ?? "0", 10));
                  const isSelected = slotHour === selectedTime;

                  return (
                    <button
                      key={slot.id ?? `${slotHour}-${slot.label ?? slot.labels?.[0] ?? "slot"}`}
                      type="button"
                      onClick={() => {
                        setSelectedTime(slotHour);
                        setLabel(slot.labels?.[0] ?? slot.label ?? "");
                      }}
                      className={[
                        "rounded-2xl border px-4 py-3 text-sm font-semibold transition",
                        isSelected
                          ? "border-violet-500 bg-violet-500 text-white shadow-lg shadow-violet-200"
                          : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-violet-300 hover:bg-violet-50",
                      ].join(" ")}
                    >
                      {formatHour(Number(slotHour))}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium text-zinc-700">Plano?</p>

            <div className="grid grid-cols-1 gap-3">
              {visiblePlanOptions.length > 0 ? (
                visiblePlanOptions.map((planLabel) => {
                  const isSelected = planLabel === label;

                  return (
                    <button
                      key={`${selectedTime}-${planLabel}`}
                      type="button"
                      onClick={() => setLabel(planLabel)}
                      className={[
                        "rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition",
                        isSelected
                          ? "border-violet-500 bg-violet-500 text-white shadow-lg shadow-violet-200"
                          : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-violet-300 hover:bg-violet-50",
                      ].join(" ")}
                    >
                      {planLabel}
                    </button>
                  );
                })
              ) : (
                <p className="text-sm text-zinc-500">Seleciona uma hora para ver o plano disponível.</p>
              )}
            </div>
          </div>

          <label className="block space-y-2 text-sm font-medium text-zinc-700">
            <span>Coloca o teu email</span>
            <input
              type="email"
              value={recipientEmail}
              onChange={(event) => setRecipientEmail(event.target.value)}
              placeholder="target@example.com"
              className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-base text-zinc-800 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
            />
          </label>

          <button
            type="button"
            onClick={onSubmit}
            disabled={!selectedDate || !selectedTime || !label || !recipientEmail || isSubmitting}
            className="w-full rounded-full bg-violet-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-violet-300"
          >
            {isSubmitting ? "A confirmar…" : "Set the date"}
          </button>
        </div>
      </div>
    </div>
  );
}
