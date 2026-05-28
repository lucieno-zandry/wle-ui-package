import { Star } from "lucide-react";
import { LandingBlock, Testimonial, TestimonialsContent } from "wle-core";

function StarRating({
  rating,
  ariaLabel,
}: {
  rating: number;
  ariaLabel: string;
}) {
  return (
    <div className="flex gap-0.5" aria-label={ariaLabel}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={i < rating ? "text-amber-500" : "text-amber-100"}
          fill={i < rating ? "currentColor" : "none"}
          strokeWidth={1.5}
          size={14}
        />
      ))}
    </div>
  );
}

interface TestimonialsViewProps {
  eyebrow?: string;
  title: string;
  testimonials: Testimonial[];
  verifiedPurchaseLabel: string;
  securePaymentViaLabel: string;
  ratingLabel: (rating: number) => string;
}

/**
 * Testimonials View (Dumb Component)
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
    <section className="py-20 bg-amber-50 border-t border-amber-200" id="reviews">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12">
          {eyebrow && <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-amber-900/60 mb-2">{eyebrow}</p>}
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-amber-950">{title}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="bg-white border border-amber-200 rounded-lg p-7 flex flex-col gap-4 relative animate-fade-up transition-shadow duration-300 hover:shadow-lg"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="text-6xl leading-3 text-amber-200 absolute top-5 right-6 select-none" aria-hidden>
                "
              </span>
              <StarRating
                rating={t.rating}
                ariaLabel={ratingLabel(t.rating)}
              />
              <p className="text-sm text-amber-900/70 leading-relaxed flex-1">{t.text}</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="relative w-10 h-10 flex-shrink-0">
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <span className="absolute inset-0 bg-emerald-900 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      {t.author.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-amber-950 flex items-center gap-1">
                    {t.author}
                    {t.verified && (
                      <span
                        className="text-xs text-emerald-900 bg-emerald-900/10 rounded-full px-1.5 py-0.5 tracking-tight"
                        title={verifiedPurchaseLabel}
                      >
                        ✓
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-amber-900/50">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-amber-200 flex items-center gap-4 flex-wrap">
          <p className="text-xs tracking-widest uppercase text-amber-900/50">
            {securePaymentViaLabel}
          </p>
          <div className="flex gap-2 flex-wrap">
            {["VISA", "Mastercard", "PayPal"].map((method) => (
              <span key={method} className="px-2.5 py-1 border border-amber-200 rounded-md text-xs font-medium text-amber-900/70 bg-white">
                {method}
              </span>
            ))}
            <span className="px-2.5 py-1 border border-emerald-900/30 rounded-md text-xs font-medium text-emerald-900 bg-emerald-900/5">
              🔒 SSL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialsProps {
  block: LandingBlock<TestimonialsContent>;
  titleLabel?: string;
  verifiedPurchaseLabel?: string;
  securePaymentViaLabel?: string;
  ratingLabel?: (rating: number) => string;
}

/**
 * Testimonials Component
 *
 * Displays customer testimonials with ratings.
 * All text is fully externalized.
 */
export function Testimonials({
  block,
  titleLabel = "What Our Customers Say",
  verifiedPurchaseLabel = "Verified Purchase",
  securePaymentViaLabel = "Secure Payment Via",
  ratingLabel = (rating: number) => `${rating} out of 5 stars`,
}: TestimonialsProps) {
  const content = block.content ?? ({} as TestimonialsContent);
  const testimonials = content.testimonials ?? [];

  return (
    <TestimonialsView
      eyebrow={content.eyebrow}
      title={block.title ?? titleLabel}
      testimonials={testimonials}
      verifiedPurchaseLabel={verifiedPurchaseLabel}
      securePaymentViaLabel={securePaymentViaLabel}
      ratingLabel={ratingLabel}
    />
  );
}