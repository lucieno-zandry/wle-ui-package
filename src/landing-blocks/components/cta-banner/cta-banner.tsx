import { CtaBannerContent, LandingBlock } from "wle-core";

interface CtaBannerViewProps {
  eyebrow?: string;
  headline: string;
  subline: string;
  backgroundImageUrl: string | null;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  renderActions?: () => React.ReactNode;
}

/**
 * CTA Banner View (Dumb Component)
 */
export function CtaBannerView({
  eyebrow,
  headline,
  subline,
  backgroundImageUrl,
  primaryButtonLabel,
  secondaryButtonLabel,
  onPrimaryAction,
  onSecondaryAction,
  renderActions,
}: CtaBannerViewProps) {
  return (
    <section className="relative py-32 overflow-hidden flex items-center min-h-96" id="cta">
      <div className="absolute inset-0 z-0" aria-hidden>
        <img
          src={backgroundImageUrl ?? "/images/cta-banner-bg.jpg"}
          alt=""
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(20, 12, 4, 0.88) 0%, rgba(30, 61, 47, 0.75) 100%)"
          }}
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-start gap-5 sm:gap-6">
        {eyebrow && (
          <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-amber-300">
            {eyebrow}
          </p>
        )}
        <h2
          className="font-display font-medium leading-tight text-slate-50 w-full lg:w-1/2"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)"
          }}
        >
          {headline}
        </h2>
        {subline && (
          <p className="text-base text-slate-100/55">{subline}</p>
        )}

        {renderActions ? (
          renderActions()
        ) : (
          <div className="flex gap-4 flex-wrap mt-2 sm:flex-nowrap">
            {primaryButtonLabel && (
              <button
                onClick={onPrimaryAction}
                className="px-7 py-3 rounded-md bg-amber-500 text-amber-900 font-medium text-sm transition-all duration-200 hover:bg-amber-400 hover:-translate-y-0.5"
                style={{
                  boxShadow: "0 4px 20px rgba(200, 133, 26, 0.4)"
                }}
              >
                {primaryButtonLabel}
              </button>
            )}
            {secondaryButtonLabel && (
              <button
                onClick={onSecondaryAction}
                className="px-7 py-3 rounded-md border border-slate-100/25 text-slate-100/70 font-medium text-sm transition-all duration-200 hover:border-slate-100/60 hover:text-slate-50"
              >
                {secondaryButtonLabel}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

interface CtaBannerProps {
  block: LandingBlock<CtaBannerContent>;
  fallbackHeadline?: string;
  fallbackSubline?: string;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  renderActions?: () => React.ReactNode;
}

/**
 * CTA Banner Component
 *
 * Displays a call-to-action banner with background image and customizable actions.
 * All text and callbacks are fully externalized.
 *
 * @param block - The landing block
 * @param fallbackHeadline - Fallback headline (default: "")
 * @param fallbackSubline - Fallback subline (default: "")
 * @param primaryButtonLabel - Primary button text
 * @param secondaryButtonLabel - Secondary button text
 * @param onPrimaryAction - Callback for primary button
 * @param onSecondaryAction - Callback for secondary button
 * @param renderActions - Custom actions renderer (optional)
 */
export function CtaBanner({
  block,
  fallbackHeadline = "",
  fallbackSubline = "",
  primaryButtonLabel = "Shop Now",
  secondaryButtonLabel = "Learn More",
  onPrimaryAction,
  onSecondaryAction,
  renderActions,
}: CtaBannerProps) {
  const content = block.content ?? {};
  const eyebrow = content.eyebrow;
  const headline = block.title ?? fallbackHeadline;
  const subline = block.subtitle ?? fallbackSubline;
  const backgroundImageUrl = block.image?.url ?? null;

  return (
    <CtaBannerView
      eyebrow={eyebrow}
      headline={headline}
      subline={subline}
      backgroundImageUrl={backgroundImageUrl}
      primaryButtonLabel={primaryButtonLabel}
      secondaryButtonLabel={secondaryButtonLabel}
      onPrimaryAction={onPrimaryAction}
      onSecondaryAction={onSecondaryAction}
      renderActions={renderActions}
    />
  );
}