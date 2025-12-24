import { pgTable, serial, varchar, text, timestamp, integer } from 'drizzle-orm/pg-core';

export const bookingSubmissions = pgTable('booking_submissions', {
    id: serial('id').primaryKey(),

    // Personal Information
    firstName: varchar('first_name', { length: 100 }).notNull(),
    lastName: varchar('last_name', { length: 100 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    phone: varchar('phone', { length: 20 }).notNull(),

    // Retreat Details
    retreatId: varchar('retreat_id', { length: 100 }).notNull(),
    preferredDate: varchar('preferred_date', { length: 50 }).notNull(),
    numberOfGuests: integer('number_of_guests').notNull(),

    // Health & Dietary
    dietaryRestrictions: text('dietary_restrictions'),
    medicalConditions: text('medical_conditions'),

    // Emergency Contact
    emergencyContact: varchar('emergency_contact', { length: 100 }).notNull(),
    emergencyPhone: varchar('emergency_phone', { length: 20 }).notNull(),

    // Additional Information
    specialRequests: text('special_requests'),
    hearAboutUs: varchar('hear_about_us', { length: 100 }),

    // Metadata
    submittedAt: timestamp('submitted_at').defaultNow().notNull(),
});
