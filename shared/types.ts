export interface BookingFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    retreatId: string;
    preferredDate: string;
    numberOfGuests: string;
    dietaryRestrictions?: string;
    medicalConditions?: string;
    emergencyContact: string;
    emergencyPhone: string;
    specialRequests?: string;
    hearAboutUs?: string;
}
