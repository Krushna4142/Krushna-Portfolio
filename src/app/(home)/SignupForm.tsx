"use client";
import React, { useState } from "react";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "@/lib/utils";
import { LoadingScreen } from "./LoadingScreen";
import emailjs from '@emailjs/browser';

export function SignupForm() {
    // State for modal visibility and message
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [modalType, setModalType] = useState<"success" | "error">("success");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // EmailJS configuration
    const EMAILJS_SERVICE_ID = 'service_vnz4k4u';
    const EMAILJS_TEMPLATE_ID = 'template_xtfkooi';
    const EMAILJS_PUBLIC_KEY = 'G7f7mvB8LxGy8373Z';

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Prepare EmailJS template parameters
        const templateParams = {
            first_name: (e.currentTarget.elements.namedItem("firstname") as HTMLInputElement).value,
            last_name: (e.currentTarget.elements.namedItem("lastname") as HTMLInputElement).value,
            email: (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value,
            subject: (e.currentTarget.elements.namedItem("subject") as HTMLInputElement).value,
            message: (e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement).value,
        };

        try {
            // Send email using EmailJS
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            // Success - show success modal
            setModalMessage("Message sent successfully!");
            setModalType("success");
            setIsSubmitting(false);
            setShowModal(true);

            // Reset form
            (e.target as HTMLFormElement).reset();
        } catch (error) {
            // Error - show error modal
            console.error('EmailJS Error:', error);
            setModalMessage("Oops! Message failed to send. Please try again.");
            setModalType("error");
            setIsSubmitting(false);
            setShowModal(true);
        }
    };

    return (
        <>
            {/* Blur background when modal is open */}
            <div className={cn("transition-filter duration-300", (showModal || isSubmitting) && "filter blur-sm")}>
                <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black" id="contact">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-200">
                        Have a Project, Idea or <br className="hidden sm:block" /> Just Want to Say Hi?
                    </h2>
                    <p className="mt-2 max-w-sm text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                        I&apos;m always open to discussing product design work, development partnerships, or side projects.<br className="hidden sm:block" />Drop a message and I&apos;ll get back to you as soon as I can.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-4 sm:mt-6">
                        <div className="mb-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                            <LabelInputContainer className="w-full sm:w-1/2">
                                <Label htmlFor="firstname">First name</Label>
                                <Input id="firstname" name="firstname" placeholder="e.g., Sarah" type="text" required />
                            </LabelInputContainer>
                            <LabelInputContainer className="w-full sm:w-1/2">
                                <Label htmlFor="lastname">Last name</Label>
                                <Input id="lastname" name="lastname" placeholder="e.g., Johnson" type="text" required />
                            </LabelInputContainer>
                        </div>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" name="email" placeholder="e.g., sarah.johnson@company.com" type="email" required />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="subject">Subject</Label>
                            <Input id="subject" name="subject" placeholder="e.g., Job opportunity for Frontend Developer" type="text" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-6 sm:mb-8">
                            <Label htmlFor="message">Message</Label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="e.g., Please provide details about the role or project..."
                                className="w-full rounded-md border p-2 text-sm sm:text-base dark:bg-gray-800 dark:text-white"
                                rows={5}
                                required
                            />
                        </LabelInputContainer>

                        <button
                            className="cursor-pointer group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Let\'s Talk →"}
                            <BottomGradient />
                        </button>
                    </form>
                </div>
            </div>

            {/* Loading Overlay */}
            {isSubmitting && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="max-w-sm mx-auto">
                        <LoadingScreen />
                    </div>
                </div>
            )}

            {/* Success/Error Modal - Matching Screenshot Design */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowModal(false)} />
                    <div
                        role="dialog"
                        aria-modal="true"
                        className="relative mx-4 w-full max-w-md transform overflow-hidden rounded-2xl shadow-2xl transition-all"
                        style={{
                            background: modalType === "success" 
                                ? "linear-gradient(135deg, #065f46 0%, #047857 50%, #059669 100%)"
                                : "linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%)"
                        }}
                    >
                        <div className="relative z-10 p-8 text-center">
                            {/* Icon */}
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                                {modalType === "success" ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="h-8 w-8">
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="h-8 w-8">
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                )}
                            </div>
                            
                            {/* Title */}
                            <h2 className="text-xl font-semibold text-white mb-2">
                                Connect with KIT
                            </h2>
                            
                            {/* Subtitle */}
                            <p className="text-white/80 text-sm mb-4">
                                Let&apos;s collaborate and create innovative solutions together
                            </p>
                            
                            {/* Status Message */}
                            <h3 className="text-lg font-bold text-white mb-1">
                                {modalType === "success" ? "Message Sent" : "Something Went Wrong"}
                            </h3>
                            
                            {/* Details */}
                            <p className="text-white/70 text-sm mb-6">
                                {modalMessage}
                            </p>
                            
                            {/* Buttons */}
                            <div className="flex items-center justify-center gap-3">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="px-6 py-2 rounded-lg bg-black/30 text-white text-sm font-medium hover:bg-black/40 transition-colors border border-white/20"
                                >
                                    Close
                                </button>
                                {modalType === "success" && (
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
                                    >
                                        Send Another
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

interface LabelInputContainerProps {
    children: React.ReactNode;
    className?: string;
}

const LabelInputContainer: React.FC<LabelInputContainerProps> = ({
    children,
    className,
}) => <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};
