const submissionTracker = new Map<string, number>();

export function checkRateLimit(email: string): boolean {
    const now = Date.now();
    const lastSubmission = submissionTracker.get(email.toLowerCase());

    if (lastSubmission && now - lastSubmission < 60000) {
        return false; // Too soon - already submitted within last minute
    }

    submissionTracker.set(email.toLowerCase(), now);

    // Cleanup old entries after 1 minute
    setTimeout(() => submissionTracker.delete(email.toLowerCase()), 60000);

    return true;
}
