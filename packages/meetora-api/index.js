function normalizeTimeSlot(slot) {
  const hour = Number(slot.hour ?? slot.slot_hour ?? slot.slot ?? 0);
  const labels = Array.isArray(slot.labels)
    ? slot.labels.filter(Boolean)
    : slot.label
      ? [slot.label]
      : [];

  return {
    ...slot,
    id: slot.id ?? `${hour}-${labels.join("-")}`,
    label: labels[0] ?? "",
    labels,
    hour: Number.isFinite(hour) ? hour : 0,
    slot: slot.slot ?? `${hour}:00`,
    slot_hour: slot.slot_hour ?? `${hour}:00`,
    start: slot.start ?? null,
    isActive: slot.isActive ?? true,
  };
}

export async function listTimeSlots() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_MEETORA_API_URL ?? "http://localhost:8082";
  const endpoint = `${apiBaseUrl.replace(/\/$/, "")}/v1/time-options`;

  const response = await fetch(endpoint, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Failed to load time options: ${response.status}`);
  }

  const payload = await response.json();
  const items = Array.isArray(payload) ? payload : [];

  return items.map(normalizeTimeSlot);
}

export async function scheduleDate(request) {
  const apiBaseUrl = process.env.NEXT_PUBLIC_MEETORA_API_URL ?? "http://localhost:8082";
  const endpoint = `${apiBaseUrl.replace(/\/$/, "")}/v1/invitations`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to submit invitation: ${response.status}`);
  }

  const rawBody = await response.text();
  let payload = null;

  if (rawBody) {
    try {
      payload = JSON.parse(rawBody);
    } catch {
      payload = null;
    }
  }

  return {
    status: response.status,
    accepted: true,
    createdAt: new Date().toISOString(),
    request: payload?.request ?? request,
    ...payload,
  };
}
