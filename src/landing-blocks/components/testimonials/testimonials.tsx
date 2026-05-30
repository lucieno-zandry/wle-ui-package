import { Star } from "lucide-react";
import { LandingBlock, Testimonial, TestimonialsContent } from "wle-core";

// ── Star Rating ──────────────────────────────────────────────────────────────

function StarRating({ rating, ariaLabel }: { rating: number; ariaLabel: string }) {
    return (
        <div className="flex gap-0.5" aria-label={ariaLabel}>
            {Array.from({ length: 5 }, (_, i) => (
                <Star
                    key={i}
                    size={13}
                    strokeWidth={0}
                    fill={i < rating ? "currentColor" : "currentColor"}
                    className={i < rating ? "text-amber-500" : "text-stone-200 dark:text-zinc-700"}
                />
            ))}
        </div>
    );
}

// ── View Component ───────────────────────────────────────────────────────────

interface TestimonialsViewProps {
    eyebrow?: string;
    title: string;
    testimonials: Testimonial[];
    verifiedPurchaseLabel: string;
    securePaymentViaLabel: string;
    ratingLabel: (rating: number) => string;
}

/**
 * Testimonials View — Redesigned (Dumb Component)
 *
 * Refined review cards with oversized quote glyphs, verified badges,
 * and payment strip. Theme-agnostic.
 */
export function TestimonialsView({
    eyebrow,
    title,
    testimonials,
    verifiedPurchaseLabel,
    securePaymentViaLabel,
    ratingLabel,
}: TestimonialsViewProps) {
    return (
        <section
            id="reviews"
            className="py-24 sm:py-32 bg-stone-50 dark:bg-zinc-950 border-t border-stone-100 dark:border-zinc-900"
        >
            <div className="max-w-5xl mx-auto px-6">

                {/* Header */}
                <div className="mb-14">
                    {eyebrow && (
                        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-500 mb-3">
                            {eyebrow}
                        </p>
                    )}
                    <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 dark:text-zinc-50 leading-tight">
                        {title}
                    </h2>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
                    {testimonials.map((t, i) => (
                        <article
                            key={t.id}
                            className="relative flex flex-col gap-4 bg-white dark:bg-zinc-900 border border-stone-100 dark:border-zinc-800 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-stone-900/6 dark:hover:shadow-black/25 hover:-translate-y-1"
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            {/* Decorative quote — top right */}
                            <span
                                className="absolute top-4 right-6 text-7xl leading-none font-serif text-stone-100 dark:text-zinc-800 select-none pointer-events-none"
                                aria-hidden
                            >
                                "
                            </span>

                            <StarRating rating={t.rating} ariaLabel={ratingLabel(t.rating)} />

                            <p className="text-sm text-stone-600 dark:text-zinc-300 leading-relaxed flex-1 relative z-10">
                                {t.text}
                            </p>

                            {/* Author row */}
                            <div className="flex items-center gap-3 pt-4 border-t border-stone-100 dark:border-zinc-800 mt-auto">
                                {/* Avatar */}
                                <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                                    {t.avatar ? (
                                        <img
                                            src={t.avatar}
                                            alt={t.author}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="w-full h-full bg-emerald-900 dark:bg-emerald-800 text-white flex items-center justify-center text-sm font-bold">
                                            {t.author.charAt(0)}
                                        </span>
                                    )}
                                </div>

                                <div>
                                    <p className="flex items-center gap-1.5 text-xs font-semibold text-stone-800 dark:text-zinc-100">
                                        {t.author}
                                        {t.verified && (
                                            <span
                                                className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-[9px] font-bold"
                                                title={verifiedPurchaseLabel}
                                            >
                                                ✓
                                            </span>
                                        )}
                                    </p>
                                    {t.location && (
                                        <p className="text-[11px] text-stone-400 dark:text-zinc-500 mt-0.5">
                                            {t.location}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Payment strip */}
                <div className="pt-8 border-t border-stone-200 dark:border-zinc-800 flex flex-wrap items-center gap-4">
                    <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-stone-400 dark:text-zinc-500">
                        {securePaymentViaLabel}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["VISA", "Mastercard", "PayPal"].map((method) => (
                            <span
                                key={method}
                                className="px-3 py-1.5 border border-stone-200 dark:border-zinc-800 rounded-lg text-[11px] font-semibold text-stone-500 dark:text-zinc-400 bg-white dark:bg-zinc-900"
                            >
                                {method}
                            </span>
                        ))}
                        <span className="px-3 py-1.5 border border-emerald-200 dark:border-emerald-900/50 rounded-lg text-[11px] font-semibold text-emerald-800 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20">
                            🔒 SSL
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}

// ── Smart Component ──────────────────────────────────────────────────────────

interface TestimonialsProps {
    block: LandingBlock<TestimonialsContent>;
    titleLabel?: string;
    verifiedPurchaseLabel?: string;
    securePaymentViaLabel?: string;
    ratingLabel?: (rating: number) => string;
}

/**
 * Testimonials Component — Redesigned
 */
export function Testimonials({
    block,
    titleLabel = "What Our Customers Say",
    verifiedPurchaseLabel = "Verified Purchase",
    securePaymentViaLabel = "Secure Payment Via",
    ratingLabel = (r) => `${r} out of 5 stars`,
}: TestimonialsProps) {
    const content = block.content ?? ({} as TestimonialsContent);

    return (
        <TestimonialsView
            eyebrow={content.eyebrow}
            title={block.title ?? titleLabel}
            testimonials={content.testimonials ?? []}
            verifiedPurchaseLabel={verifiedPurchaseLabel}
            securePaymentViaLabel={securePaymentViaLabel}
            ratingLabel={ratingLabel}
        />
    );
}