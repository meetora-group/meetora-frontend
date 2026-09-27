"use client";

import { useCallback, useEffect, useState } from "react";
import {
  listTimeSlots,
  scheduleDate,
  type ScheduleDateRequest,
  type TimeSlotResponse,
} from "meetora-api";

export type FlowView = 1 | 2 | 3 | 4;

export type SubmittedInvitation = {
  scheduledTime: string;
  label: string;
  recipientEmail: string;
};

const getInitialDate = () => {
  if (typeof window === "undefined") {
    return "";
  }

  const today = new Date();
  return new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
};

const getInitialNoButtonPosition = () => ({ x: 0, y: 0 });

export function useMeetoraFlow() {
  const [currentView, setCurrentView] = useState<FlowView>(1);
  const [timeSlots, setTimeSlots] = useState<TimeSlotResponse[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(() => getInitialDate());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [label, setLabel] = useState<string>("");
  const [recipientEmail, setRecipientEmail] = useState<string>("you@example.com");
  const [isLoadingSlots, setIsLoadingSlots] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedInvitation, setSubmittedInvitation] =
    useState<SubmittedInvitation | null>(null);
  const [isEscaping, setIsEscaping] = useState<boolean>(false);
  const [noButtonPosition, setNoButtonPosition] = useState(() =>
    getInitialNoButtonPosition(),
  );

  const loadTimeSlots = useCallback(async () => {
    setIsLoadingSlots(true);

    try {
      const slots = await listTimeSlots();
      setTimeSlots(slots);

      if (slots.length > 0) {
        const firstHour = slots[0].hour ?? Number.parseInt(slots[0].slot_hour ?? slots[0].slot ?? "0", 10);
        const firstLabel = slots[0].label ?? "";

        if (!Number.isNaN(firstHour)) {
          setSelectedTime(String(firstHour));
        }

        if (firstLabel) {
          setLabel(firstLabel);
        }
      }
    } catch {
      setTimeSlots([]);
      setSelectedTime("");
      setLabel("");
    } finally {
      setIsLoadingSlots(false);
    }
  }, []);

  useEffect(() => {
    if (currentView !== 3) {
      return;
    }

    const timer = window.setTimeout(() => {
      void loadTimeSlots();
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, [currentView, loadTimeSlots]);

  function moveNoButton() {
    if (typeof window === "undefined") {
      return;
    }

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Safety padding so the button doesn't clip off-screen
    const padding = 24;
    const buttonWidth = 120;
    const buttonHeight = 42;

    const maxX = viewportWidth - buttonWidth - padding;
    const maxY = viewportHeight - buttonHeight - padding;

    // Generate random coordinates within the safe bounding box
    const left = Math.max(padding, Math.random() * maxX);
    const top = Math.max(padding, Math.random() * maxY);

    setIsEscaping(true);
    setNoButtonPosition({ x: Math.round(left), y: Math.round(top) });
  }

  const submitDate = useCallback(async () => {
    if (!selectedDate || !selectedTime || !label || !recipientEmail) {
      return;
    }

    const normalizedTime = selectedTime.includes(":")
      ? selectedTime
      : `${selectedTime}:00`;

    const scheduledTime = new Date(
      `${selectedDate}T${normalizedTime}:00Z`,
    ).toISOString();

    const request: ScheduleDateRequest = {
      scheduledTime,
      label,
      recipientEmail,
    };

    setIsSubmitting(true);

    try {
      const response = await scheduleDate(request);

      if (response.status === 202) {
        setSubmittedInvitation({
          scheduledTime: request.scheduledTime,
          label: request.label,
          recipientEmail: request.recipientEmail,
        });
        setCurrentView(4);
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [label, recipientEmail, selectedDate, selectedTime]);

  const resetFlow = useCallback(() => {
    setCurrentView(1);
    setSelectedDate(getInitialDate());
    setSelectedTime("");
    setLabel("");
    setRecipientEmail("you@example.com");
    setTimeSlots([]);
    setSubmittedInvitation(null);
    setIsEscaping(false);
    setNoButtonPosition(getInitialNoButtonPosition());
  }, []);

  return {
    currentView,
    timeSlots,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    label,
    setLabel,
    recipientEmail,
    setRecipientEmail,
    isLoadingSlots,
    isSubmitting,
    submittedInvitation,
    isEscaping,
    noButtonPosition,
    setCurrentView,
    moveNoButton,
    submitDate,
    resetFlow,
  };
}
