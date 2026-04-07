"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { LoaderCircle } from "lucide-react";
import { Logo } from "./Logo";

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const initialFormData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function FinalCTA() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof ContactFormData, value: string) {
    setFormData((current) => ({ ...current, [field]: value }));
    if (error) {
      setError("");
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setError("Please enter your first and last name.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!emailPattern.test(formData.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;

        throw new Error(
          body?.error ||
            "Something went wrong. Please try again or email us directly.",
        );
      }

      setFormData(initialFormData);
      setSubmitted(true);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Something went wrong. Please try again or email us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="bg-card p-12 md:p-24 text-center border border-agency-border relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-agency-accent" />

          <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight tracking-tighter">
            Ready to <span className="text-agency-accent">get started?</span>
          </h2>

          <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto">
            One call is all it takes. We'll walk you through exactly what we'd build, what it costs, and how fast we can
            move. No obligation.
          </p>

          <div className="mx-auto max-w-4xl text-left">
            {submitted ? (
              <div className="border border-agency-accent/30 bg-agency-accent/10 px-8 py-10 text-center">
                <p className="text-2xl font-bold text-foreground">
                  Thanks! We&apos;ll be in touch within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-xs font-bold tracking-[0.22em] text-foreground/70 uppercase"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(event) =>
                        updateField("firstName", event.target.value)
                      }
                      className="w-full border border-agency-border bg-background px-4 py-4 text-sm text-foreground outline-none transition-colors focus:border-agency-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-xs font-bold tracking-[0.22em] text-foreground/70 uppercase"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(event) =>
                        updateField("lastName", event.target.value)
                      }
                      className="w-full border border-agency-border bg-background px-4 py-4 text-sm text-foreground outline-none transition-colors focus:border-agency-accent"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold tracking-[0.22em] text-foreground/70 uppercase"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                      className="w-full border border-agency-border bg-background px-4 py-4 text-sm text-foreground outline-none transition-colors focus:border-agency-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-xs font-bold tracking-[0.22em] text-foreground/70 uppercase"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(event) =>
                        updateField("phone", event.target.value)
                      }
                      className="w-full border border-agency-border bg-background px-4 py-4 text-sm text-foreground outline-none transition-colors focus:border-agency-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold tracking-[0.22em] text-foreground/70 uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                    className="w-full resize-none border border-agency-border bg-background px-4 py-4 text-sm text-foreground outline-none transition-colors focus:border-agency-accent"
                  />
                </div>

                {error ? (
                  <p className="text-sm font-medium text-red-400">
                    {error}
                  </p>
                ) : null}

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex min-w-[280px] items-center justify-center gap-3 bg-agency-accent px-12 py-6 text-lg font-bold tracking-[0.2em] text-background uppercase transition-transform duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <LoaderCircle className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Book Your Free Call"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="mt-16">
            <span className="text-agency-accent font-display text-xs tracking-[0.8em] uppercase">
              Blackstride Digital - Built to Move.
            </span>
          </div>

          <div className="absolute bottom-[-50px] right-[-50px] opacity-[0.05] pointer-events-none">
            <Logo className="w-96 h-auto opacity-10" color="white" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
