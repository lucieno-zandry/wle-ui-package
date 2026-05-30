import { ArrowRight } from "lucide-react";
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
 * CTA Banner View — Redesigned (Dumb Component)
 *
 * Cinematic full-bleed section with multi-layer overlay guaranteeing
 * text legibility over any image. Theme-agnostic.
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
        <section
            id="cta"
            className="relative overflow-hidden min-h-[540px] sm:min-h-[600px] flex items-center bg-stone-900 dark:bg-zinc-950"
        >
            {/* ── Background layer ── */}
            <div className="absolute inset-0 z-0" aria-hidden>
                {backgroundImageUrl ? (
                    <img
                        src={backgroundImageUrl}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-900 dark:from-zinc-950 dark:via-emerald-950 dark:to-zinc-950" />
                )}

                {/* Multi-layer overlay — works over any image brightness */}
                {/* Strong diagonal: top-left anchor covers the text zone */}
                <div className="absolute inset-0 bg-gradient-to-br from-stone-950/90 via-stone-950/60 to-stone-950/20 dark:from-zinc-950/95 dark:via-zinc-950/65 dark:to-zinc-950/25" />
                {/* Vertical safety net */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-stone-950/35 dark:from-zinc-950/60 dark:to-zinc-950/45" />
            </div>

            {/* ── Decorative accent line ── */}
            <div
                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-400/50 to-transparent z-10"
                aria-hidden
            />

            {/* ── Content ── */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 py-24 sm:py-32 flex flex-col gap-8">

                {eyebrow && (
                    <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-amber-400/80">
                        {eyebrow}
                    </p>
                )}

                {/* Headline — large typographic treatment */}
                <h2 className="font-display font-extrabold text-white leading-[0.95] tracking-tight max-w-2xl text-[clamp(2.5rem,6vw,4.5rem)]">
                    {headline}
                </h2>

                {subline && (
                    <p className="text-base sm:text-lg text-white/50 leading-relaxed max-w-lg">
                        {subline}
                    </p>
                )}

                {/* Actions */}
                <div className="flex flex-wrap gap-3 mt-2">
                    {renderActions ? (
                        renderActions()
                    ) : (
                        <>
                            {primaryButtonLabel && (
                                <button
                                    onClick={onPrimaryAction}
                                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-amber-400 text-stone-950 font-bold text-sm tracking-wide shadow-2xl shadow-amber-400/25 transition-all duration-300 hover:bg-amber-300 hover:-translate-y-0.5 hover:shadow-amber-400/40 active:translate-y-0 active:scale-[0.98]"
                                >
                                    {primaryButtonLabel}
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            )}
                            {secondaryButtonLabel && (
                                <button
                                    onClick={onSecondaryAction}
                                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white/70 font-semibold text-sm tracking-wide backdrop-blur-sm transition-all duration-300 hover:border-white/45 hover:text-white hover:bg-white/5"
                                >
                                    {secondaryButtonLabel}
                                </button>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

// ── Smart Component ──────────────────────────────────────────────────────────

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
 * CTA Banner Component — Redesigned
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

    return (
        <CtaBannerView
            eyebrow={content.eyebrow}
            headline={block.title ?? fallbackHeadline}
            subline={block.subtitle ?? fallbackSubline}
            backgroundImageUrl={block.image?.url ?? null}
            primaryButtonLabel={primaryButtonLabel}
            secondaryButtonLabel={secondaryButtonLabel}
            onPrimaryAction={onPrimaryAction}
            onSecondaryAction={onSecondaryAction}
            renderActions={renderActions}
        />
    );
}