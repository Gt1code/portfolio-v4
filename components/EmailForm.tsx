"use client";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function EmailForm() {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  // Simple sanitization to prevent basic XSS attacks
  const sanitize = (value: string) => value.trim().replace(/[<>]/g, "");

  // Basic email format validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const warnAndStopLoading = (message: string) => {
    toast.warn(message);
    // alert(message);
    setLoading(false);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    // Environment Variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check for missing environment variables
    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing");
      setLoading(false);
      return;
    }

    const formData = new FormData(form.current);

    // Sanitize inputs
    const name = sanitize(formData.get("name") as string);
    const email = sanitize(formData.get("email") as string);
    const message = sanitize(formData.get("message") as string);

    // Validation
    if (!name || !email || !message) {
      warnAndStopLoading("All fields are required");
      return;
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      warnAndStopLoading("Please enter a valid email address");
      return;
    }

    try {
      const confirmSend = window.confirm(
        "Are you sure you want to send this message?",
      );
      if (!confirmSend) {
        e.preventDefault();
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        { name, email, message },
        publicKey,
      );

      toast.success("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
      <div className="flex flex-col">
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
          className="rounded-2xl border border-(--form-border) p-4"
        />
      </div>

      <div className="flex flex-col">
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
          className="rounded-2xl border border-(--form-border) p-4"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          rows={5}
          className="rounded-2xl border border-(--form-border) p-4"
        />
      </div>

      <button
        disabled={loading}
        type="submit"
        className="btn-primary rounded-2xl px-4 py-2 text-xl sm:px-6 sm:py-3"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        stacked
      />
    </form>
  );
}
