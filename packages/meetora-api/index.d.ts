export interface TimeSlotResponse {
    id?: string;
    label?: string;
    labels?: string[];
    hour: number;
    slot?: string;
    slot_hour?: string;
    start?: string;
    isActive?: boolean;
}

export interface ScheduleDateRequest {
    scheduledTime: string;
    label: string;
    recipientEmail: string;
}

export interface ScheduleDateResponse {
    status: number;
    accepted: boolean;
    createdAt: string;
    request: ScheduleDateRequest;
}

export function listTimeSlots(): Promise<TimeSlotResponse[]>;
export function scheduleDate(request: ScheduleDateRequest): Promise<ScheduleDateResponse>;
