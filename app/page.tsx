"use client";

import { ViewFour } from "@/app/components/views/ViewFour";
import { ViewOne } from "@/app/components/views/ViewOne";
import { ViewThree } from "@/app/components/views/ViewThree";
import { ViewTwo } from "@/app/components/views/ViewTwo";
import { useMeetoraFlow } from "@/app/hooks/useMeetoraFlow";

export default function HomePage() {
  const {
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
  } = useMeetoraFlow();

  switch (currentView) {
    case 1:
      return (
        <ViewOne
          onAccept={() => setCurrentView(2)}
          onRejectMouseEnter={moveNoButton}
          isEscaping={isEscaping}
          noButtonPosition={noButtonPosition}
        />
      );
    case 2:
      return <ViewTwo onContinue={() => setCurrentView(3)} />;
    case 3:
      return (
        <ViewThree
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          label={label}
          setLabel={setLabel}
          recipientEmail={recipientEmail}
          setRecipientEmail={setRecipientEmail}
          timeSlots={timeSlots}
          isLoadingSlots={isLoadingSlots}
          isSubmitting={isSubmitting}
          onSubmit={submitDate}
        />
      );
    case 4:
      return <ViewFour submittedInvitation={submittedInvitation} onRestart={resetFlow} />;
    default:
      return null;
  }
}
