import Image from "next/image";
import { profile } from "@/lib/data";

/**
 * ─────────────────────────────────────────────────────────────
 *  PROFILE PHOTO  —  ➤ THIS IS THE ONLY FILE YOU EDIT
 *                     WHEN YOU'RE READY TO ADD YOUR PHOTO
 * ─────────────────────────────────────────────────────────────
 *
 *  1. Put your photo in  /public/  (e.g. /public/manya.jpg)
 *  2. Change the line below to:   const PHOTO_SRC = "/manya.jpg";
 *
 *  That's it. The frame, sizing, rounding and decorations stay identical —
 *  the placeholder monogram is simply replaced by your image.
 *
 *  Recommended: a portrait-orientation photo, roughly 900×1200 (3:4),
 *  subject centred. Use `object-position` below to nudge the crop.
 */
const PHOTO_SRC: string | null = null;

/** Alt text used once a real photo is set. */
const PHOTO_ALT = `${profile.name} — ${profile.roles.join(", ")}`;

export default function ProfilePhoto() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none">
      {/* Soft lavender wash behind the frame */}
      <div
        aria-hidden="true"
        className="aura -left-10 -top-10 h-48 w-48 bg-lavender/45 md:h-64 md:w-64"
      />
      <div
        aria-hidden="true"
        className="aura -bottom-12 -right-8 h-44 w-44 bg-blush/45 md:h-56 md:w-56"
      />

      {/* Offset outline for a layered, editorial feel */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2.25rem] border border-border-strong sm:translate-x-4 sm:translate-y-4"
      />

      <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-border bg-gradient-to-br from-lavender-tint via-white to-blush-tint shadow-soft">
        {PHOTO_SRC ? (
          <Image
            src={PHOTO_SRC}
            alt={PHOTO_ALT}
            fill
            priority
            sizes="(max-width: 1024px) 340px, 420px"
            className="object-cover object-center"
          />
        ) : (
          /* Placeholder — no stock photo, no invented face. */
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center"
            role="img"
            aria-label={`Placeholder for a photo of ${profile.name}`}
          >
            <span
              aria-hidden="true"
              className="flex h-20 w-20 items-center justify-center rounded-full border border-border-strong bg-white/80 font-display text-2xl font-semibold text-accent shadow-soft"
            >
              MP
            </span>
            <p className="font-display text-lg text-ink">{profile.name}</p>
            <p className="max-w-[15rem] text-xs leading-relaxed text-secondary">
              Photo coming soon
            </p>
          </div>
        )}
      </div>

      {/* Small floating chip — anchors the frame visually.
          Edit the text here if you want to add e.g. availability. */}
      <div className="absolute -bottom-5 left-1/2 w-max -translate-x-1/2 rounded-full border border-border bg-white/85 px-5 py-2.5 text-xs font-medium text-body shadow-soft backdrop-blur-sm">
        Based in {profile.location}
      </div>
    </div>
  );
}
