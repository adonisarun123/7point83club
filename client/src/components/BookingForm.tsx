import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { X, Check, Loader2 } from "lucide-react";
import { retreats } from "@/data/retreats";

interface BookingFormProps {
    isOpen: boolean;
    onClose: () => void;
    preselectedRetreatId?: string;
}

export default function BookingForm({ isOpen, onClose, preselectedRetreatId }: BookingFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        retreatId: preselectedRetreatId || "",
        preferredDate: "",
        numberOfGuests: "1",
        dietaryRestrictions: "",
        medicalConditions: "",
        emergencyContact: "",
        emergencyPhone: "",
        specialRequests: "",
        hearAboutUs: "",
    });

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                if (response.status === 429) {
                    alert(data.error || 'You can only submit once per minute. Please try again later.');
                } else {
                    alert(data.error || 'Submission failed. Please try again.');
                }
                setIsSubmitting(false);
                return;
            }

            setIsSubmitting(false);
            setIsSuccess(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    retreatId: preselectedRetreatId || "",
                    preferredDate: "",
                    numberOfGuests: "1",
                    dietaryRestrictions: "",
                    medicalConditions: "",
                    emergencyContact: "",
                    emergencyPhone: "",
                    specialRequests: "",
                    hearAboutUs: "",
                });
            }, 3000);
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to submit application. Please try again.');
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    if (isSuccess) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-hidden">
                <div className="bg-background p-12 rounded-sm max-w-md w-full mx-4 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-serif text-3xl mb-4">Application Received!</h2>
                    <p className="text-muted-foreground mb-6">
                        Thank you for your interest. We'll review your application and get back to you within 24-48 hours.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Check your email for confirmation details.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                <div className="bg-background rounded-sm max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                    {/* Header */}
                    <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
                        <div>
                            <h2 className="font-serif text-3xl">Retreat Application</h2>
                            <p className="text-sm text-muted-foreground mt-1">
                                Fill out the form below to apply for your retreat experience
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-muted rounded-sm transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6 space-y-8">
                        {/* Personal Information */}
                        <div className="space-y-6">
                            <h3 className="font-serif text-xl border-b border-border pb-2">
                                Personal Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name *</Label>
                                    <Input
                                        id="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={(e) => handleChange("firstName", e.target.value)}
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name *</Label>
                                    <Input
                                        id="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={(e) => handleChange("lastName", e.target.value)}
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address *</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => handleChange("email", e.target.value)}
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number *</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => handleChange("phone", e.target.value)}
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Retreat Details */}
                        <div className="space-y-6">
                            <h3 className="font-serif text-xl border-b border-border pb-2">
                                Retreat Details
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="retreat">Select Retreat *</Label>
                                    <Select
                                        value={formData.retreatId}
                                        onValueChange={(value) => handleChange("retreatId", value)}
                                        required
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Choose a retreat" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {retreats.map((retreat) => (
                                                <SelectItem key={retreat.id} value={retreat.id}>
                                                    {retreat.title} - {retreat.duration}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="preferredDate">Preferred Start Date *</Label>
                                    <Input
                                        id="preferredDate"
                                        type="date"
                                        required
                                        value={formData.preferredDate}
                                        onChange={(e) => handleChange("preferredDate", e.target.value)}
                                        min={new Date().toISOString().split("T")[0]}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="numberOfGuests">Number of Guests *</Label>
                                <Select
                                    value={formData.numberOfGuests}
                                    onValueChange={(value) => handleChange("numberOfGuests", value)}
                                    required
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {[1, 2, 3, 4].map((num) => (
                                            <SelectItem key={num} value={num.toString()}>
                                                {num} {num === 1 ? "Guest" : "Guests"}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Health & Dietary */}
                        <div className="space-y-6">
                            <h3 className="font-serif text-xl border-b border-border pb-2">
                                Health & Dietary Information
                            </h3>
                            <div className="space-y-2">
                                <Label htmlFor="dietaryRestrictions">Dietary Restrictions</Label>
                                <Textarea
                                    id="dietaryRestrictions"
                                    value={formData.dietaryRestrictions}
                                    onChange={(e) => handleChange("dietaryRestrictions", e.target.value)}
                                    placeholder="Any allergies, vegetarian, vegan, gluten-free, etc."
                                    rows={3}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="medicalConditions">Medical Conditions</Label>
                                <Textarea
                                    id="medicalConditions"
                                    value={formData.medicalConditions}
                                    onChange={(e) => handleChange("medicalConditions", e.target.value)}
                                    placeholder="Any medical conditions, injuries, or medications we should know about"
                                    rows={3}
                                />
                            </div>
                        </div>

                        {/* Emergency Contact */}
                        <div className="space-y-6">
                            <h3 className="font-serif text-xl border-b border-border pb-2">
                                Emergency Contact
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="emergencyContact">Contact Name *</Label>
                                    <Input
                                        id="emergencyContact"
                                        required
                                        value={formData.emergencyContact}
                                        onChange={(e) => handleChange("emergencyContact", e.target.value)}
                                        placeholder="Full name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="emergencyPhone">Contact Phone *</Label>
                                    <Input
                                        id="emergencyPhone"
                                        type="tel"
                                        required
                                        value={formData.emergencyPhone}
                                        onChange={(e) => handleChange("emergencyPhone", e.target.value)}
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Additional Information */}
                        <div className="space-y-6">
                            <h3 className="font-serif text-xl border-b border-border pb-2">
                                Additional Information
                            </h3>
                            <div className="space-y-2">
                                <Label htmlFor="specialRequests">Special Requests or Questions</Label>
                                <Textarea
                                    id="specialRequests"
                                    value={formData.specialRequests}
                                    onChange={(e) => handleChange("specialRequests", e.target.value)}
                                    placeholder="Any special accommodations, questions, or requests"
                                    rows={4}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
                                <Select
                                    value={formData.hearAboutUs}
                                    onValueChange={(value) => handleChange("hearAboutUs", value)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select an option" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="google">Google Search</SelectItem>
                                        <SelectItem value="social">Social Media</SelectItem>
                                        <SelectItem value="friend">Friend/Family Referral</SelectItem>
                                        <SelectItem value="blog">Blog/Article</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="pt-6 border-t border-border space-y-4">
                            <div className="bg-muted/30 p-4 rounded-sm text-sm text-muted-foreground">
                                <p className="mb-2">
                                    <strong>Next Steps:</strong>
                                </p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>We'll review your application within 24-48 hours</li>
                                    <li>You'll receive a confirmation email with next steps</li>
                                    <li>A ₹10,000 deposit will be required to secure your booking</li>
                                </ul>
                            </div>

                            <div className="flex gap-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={onClose}
                                    className="flex-1"
                                    disabled={isSubmitting}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="flex-1 bg-primary hover:bg-primary/90"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        "Submit Application"
                                    )}
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
