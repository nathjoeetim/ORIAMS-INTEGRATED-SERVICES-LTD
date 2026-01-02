/* eslint-disable @typescript-eslint/no-explicit-any */
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    const form = e.currentTarget;

    try {
      const response = await fetch("https://formspree.io/f/xvzgzbyp", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSuccess(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-4">
              Contact Us
            </div>
            <h2 className="text-gray-900 mb-6">
              Let's Discuss Your Energy Needs
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Reach out to our team and we’ll respond shortly.
            </p>

            <div className="space-y-6">
              <Info icon={Phone} title="Phone" text="+234 555 123-4567" />
              <Info
                icon={Mail}
                title="Email"
                text="	michael.gloria65@yahoo.com"
              />
              <Info
                icon={MapPin}
                title="Office"
                text="NO. 6 NSIT STREET UYO , UYO, AKWA IBOM"
              />
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Input label="First Name" name="firstName" required />
                <Input label="Last Name" name="lastName" />
              </div>

              <Input label="Email" name="email" type="email" required />
              <Input label="Company" name="company" />

              <div>
                <label className="block text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Honeypot (Spam Protection) */}
              <input type="text" name="_gotcha" className="hidden" />

              {error && <p className="text-red-600 text-sm">{error}</p>}
              {success && (
                <p className="text-green-600 text-sm">
                  ✅ Message sent successfully!
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Helpers */
function Input({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-gray-700 mb-2">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
}

function Info({ icon: Icon, title, text }: any) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
        <Icon className="text-blue-600" size={20} />
      </div>
      <div>
        <div className="font-semibold text-gray-900">{title}</div>
        <div className="text-gray-600">{text}</div>
      </div>
    </div>
  );
}
