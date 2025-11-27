"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function SubscribeToNewsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;

    try {
      // Send email using EmailJS with blog newsletter template
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_BLOG_NEWSLETTER_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus("success");
      form.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Failed to subscribe:", error);
      setSubmitStatus("error");
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="flex flex-col items-center gap-2 pt-5 md:pt-12"
      onSubmit={handleSubmit}
    >
      <input
        name="form_email"
        type="email"
        required
        className="w-full rounded-lg bg-[#1D1D1D] p-4 outline-none transition-all duration-200 ease-in-out placeholder:text-zinc-500 focus:ring-2 focus:ring-zinc-700"
        placeholder="Enter your email id"
      />
      
      {submitStatus === "success" && (
        <div className="w-full rounded-lg bg-green-500/20 p-3 text-sm text-green-400">
          Successfully subscribed to newsletter!
        </div>
      )}

      {submitStatus === "error" && (
        <div className="w-full rounded-lg bg-red-500/20 p-3 text-sm text-red-400">
          Failed to subscribe. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-white/10 px-6 py-3 font-medium transition-all duration-200 ease-in-out hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </button>
    </form>
  );
}
