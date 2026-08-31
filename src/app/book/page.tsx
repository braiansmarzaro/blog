import { CalendarDays, Clock, CreditCard, Mail, Video } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a consultation | Deivid Smarzaro",
  description: "Schedule a paid 60-minute consultation with Deivid Smarzaro.",
};

const bookingUrl = process.env.NEXT_PUBLIC_CAL_BOOKING_URL;

function getEmbedUrl(url: string) {
  const embedUrl = new URL(url);
  embedUrl.searchParams.set("embed", "true");
  embedUrl.searchParams.set("theme", "auto");
  return embedUrl.toString();
}

export default function BookPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1 className="mt-4 text-5xl max-sm:text-4xl">Book a consultation</h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300">
          Bring an AI, data, or software problem. Leave with concrete next
          steps.
        </p>
      </div>

      <div className="grid grid-cols-3 divide-x divide-zinc-300 border-y border-zinc-300 py-4 text-sm dark:divide-zinc-600 dark:border-zinc-600 max-sm:grid-cols-1 max-sm:divide-x-0 max-sm:divide-y">
        <div className="flex items-center justify-center gap-2 px-3 max-sm:py-3">
          <Clock aria-hidden="true" className="size-4 text-sky-600" />
          60 minutes
        </div>
        <div className="flex items-center justify-center gap-2 px-3 max-sm:py-3">
          <CreditCard aria-hidden="true" className="size-4 text-emerald-600" />
          R$200 prepaid
        </div>
        <div className="flex items-center justify-center gap-2 px-3 max-sm:py-3">
          <Video aria-hidden="true" className="size-4 text-rose-600" />
          Video call
        </div>
      </div>

      {bookingUrl ? (
        <div className="overflow-hidden rounded ring-1 ring-zinc-300 dark:ring-zinc-600">
          <iframe
            src={getEmbedUrl(bookingUrl)}
            title="Schedule and pay for a consultation"
            className="h-[760px] w-full bg-white"
            allow="payment"
          />
        </div>
      ) : (
        <div className="flex min-h-80 flex-col items-center justify-center gap-5 rounded border border-dashed border-zinc-400 px-6 text-center dark:border-zinc-600">
          <CalendarDays
            aria-hidden="true"
            className="size-9 text-sky-600 dark:text-sky-500"
            strokeWidth={1.4}
          />
          <div>
            <h2 className="text-xl">Online booking is coming soon</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              In the meantime, email me to arrange a consultation.
            </p>
          </div>
          <a
            href="mailto:contact@smarzaro.com?subject=60-minute consultation"
            className="inline-flex items-center gap-2 rounded bg-sky-300 px-4 py-2 text-sky-900 ring-1 ring-sky-500 transition-colors hover:bg-sky-400 dark:bg-transparent dark:text-sky-400 dark:ring-sky-500 dark:hover:bg-zinc-800"
          >
            <Mail aria-hidden="true" className="size-4" />
            contact@smarzaro.com
          </a>
        </div>
      )}

      <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
        Your time is reserved after payment is completed. Reschedule or cancel
        using the link in your confirmation email.
      </p>
    </div>
  );
}