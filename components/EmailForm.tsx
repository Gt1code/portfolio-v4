"use client";

import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function EmailForm() {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const sanitize = (value: string) => value.trim().replace(/[<>]/g, "");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const warnAndStopLoading = (message: string) => {
    toast.warn(message);
    setLoading(false);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing");
      setLoading(false);
      return;
    }

    const formData = new FormData(form.current);
    let name = sanitize(formData.get("name") as string);
    let email = sanitize(formData.get("email") as string);
    let message = sanitize(formData.get("message") as string);

    if (!name || !email || !message) {
      warnAndStopLoading("All fields are required");
      return;
    }

    if (!emailRegex.test(email)) {
      warnAndStopLoading("Please enter a valid email address");
      return;
    }

    try {
      const confirmSend = window.confirm(
        "Are you sure you want to send this message?",
      );
      if (!confirmSend) {
        setLoading(false);
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        { name, email, message },
        publicKey,
      );
      toast.success("Message sent successfully!");
      name = "";
      email = "";
      message = "";
      form.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong 😢");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--input-bg)] px-4 py-3 text-sm font-light text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none transition-all duration-200 focus:border-[var(--border-accent)] focus:ring-2 focus:ring-[var(--amber)]/10";

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
          required
          autoComplete="name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          rows={5}
          className={inputClass}
        />
      </div>

      <button
        disabled={loading}
        type="submit"
        className="from-primary mt-1 w-full cursor-pointer rounded-lg bg-linear-to-r to-(--primary-hover) px-6 py-3 text-sm font-medium tracking-wide text-(--bg) transition-all duration-200 hover:-translate-y-0.5 hover:shadow-(--amber-shadow) active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
