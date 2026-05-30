// ============================================================================
// Hero View — Redesigned (Dumb Presentational Component)
// ============================================================================

import { RefObject } from "react";
import { getEffectivePrice, getOriginalPrice, getPromotionBadge, getVariantLabel } from "../hero";
import { ChevronDown, ShoppingCart } from "lucide-react";
import { Variant } from "wle-core";
import { cn } from "~/lib/utils";

interface HeroProductViewProps {
    backgroundImageUrl: string | null;
    headline: string;
    subline: string;
    variants: Variant[];
    selectedVariantId: string | null;
    onSelectVariant: (id: string) => void;
    onAddToCart: () => void;
    onScrollDown: () => void;
    sentinelRef: RefObject<HTMLDivElement | null>;
    formatPrice: (price: number) => string;
    eyebrow: string;
    headlineSuffix: string;
    trustLine: string;
    addToCartLabel: string;
    scrollDownAriaLabel: string;
    actionDisabled: boolean;
}

export function HeroProductView({
    backgroundImageUrl,
    headline,
    subline,
    variants,
    selectedVariantId,
    onSelectVariant,
    onAddToCart,
    onScrollDown,
    sentinelRef,
    formatPrice,
    eyebrow,
    headlineSuffix,
    trustLine,
    addToCartLabel,
    scrollDownAriaLabel,
    actionDisabled,
}: HeroProductViewProps) {
    const selected =
        variants.find((v) => String(v.id) === String(selectedVariantId)) ??
        variants[0];

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center overflow-hidden bg-stone-100 dark:bg-zinc-950">

            {/* ── Background Image ── */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none" aria-hidden>
                {backgroundImageUrl ? (
                    <img
                        src={backgroundImageUrl}
                        alt=""
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "center 30%" }}
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-stone-300 via-amber-100 to-stone-200 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900" />
                )}

                {/* Multi-layer overlay system — guarantees text legibility over ANY image */}
                {/* Layer 1: Heavy left-to-right — the content reading zone */}
                <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/70 to-stone-950/10 dark:from-zinc-950/98 dark:via-zinc-950/75 dark:to-zinc-950/15" />
                {/* Layer 2: Bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent dark:from-zinc-950/80" />
                {/* Layer 3: Subtle top edge */}
                <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-transparent to-transparent dark:from-zinc-950/50" />
            </div>

            {/* ── Main Content ── */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32 sm:py-40">
                <div className="max-w-xl flex flex-col gap-8">

                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-3 w-fit">
                        <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-400" />
                        </span>
                        <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-400/85">
                            {eyebrow}
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="flex flex-col gap-2">
                        <h1 className="font-display text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold text-white leading-[0.95] tracking-tight">
                            {headline}
                        </h1>
                        {headlineSuffix && (
                            <p className="font-display text-2xl sm:text-3xl font-normal italic text-amber-300/70 mt-2 leading-snug">
                                {headlineSuffix}
                            </p>
                        )}
                    </div>

                    {/* Subline */}
                    <p className="text-base sm:text-lg text-white/55 leading-relaxed max-w-md">
                        {subline}
                    </p>

                    {/* Variant Selector */}
                    {variants.length > 1 && (
                        <div className="flex flex-col gap-3">
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/35">
                                Select option
                            </span>
                            <div className="flex flex-wrap gap-2.5">
                                {variants.map((v) => {
                                    const isActive = String(selectedVariantId ?? variants[0]?.id) === String(v.id);
                                    const badge = getPromotionBadge(v);
                                    return (
                                        <button
                                            key={v.id}
                                            onClick={() => onSelectVariant(String(v.id))}
                                            className={cn(
                                                "relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border backdrop-blur-sm",
                                                isActive
                                                    ? "bg-amber-400 text-stone-950 border-amber-400 shadow-lg shadow-amber-400/30"
                                                    : "bg-white/8 text-white/70 border-white/15 hover:bg-white/15 hover:border-white/30 hover:text-white"
                                            )}
                                        >
                                            {getVariantLabel(v)}
                                            {badge && (
                                                <span className="absolute -top-2.5 -right-2 px-1.5 py-0.5 rounded-md text-[9px] font-extrabold bg-emerald-500 text-white border border-emerald-600 shadow-sm">
                                                    {badge}
                                                </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Price + CTA */}
                    <div className="flex flex-wrap items-center gap-5 pt-5 border-t border-white/10">
                        {selected && (() => {
                            const original = getOriginalPrice(selected);
                            const current = getEffectivePrice(selected);
                            return (
                                <div className="flex flex-col leading-none">
                                    {original && (
                                        <span className="text-sm text-white/30 line-through mb-1 tracking-wide">
                                            {formatPrice(original)}
                                        </span>
                                    )}
                                    <span className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
                                        {formatPrice(current)}
                                    </span>
                                </div>
                            );
                        })()}

                        <button
                            onClick={onAddToCart}
                            disabled={actionDisabled}
                            className={cn(
                                "flex items-center gap-3 px-7 py-4 rounded-2xl font-bold text-base tracking-wide",
                                "bg-amber-400 text-stone-950",
                                "shadow-2xl shadow-amber-400/25",
                                "transition-all duration-300",
                                "hover:bg-amber-300 hover:-translate-y-0.5 hover:shadow-amber-400/40",
                                "active:translate-y-0 active:scale-[0.97]",
                                "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none"
                            )}
                        >
                            <ShoppingCart className="w-5 h-5 flex-shrink-0" />
                            {addToCartLabel}
                        </button>
                    </div>

                    {/* Trust line */}
                    {trustLine && (
                        <p className="flex items-center gap-3 text-xs text-white/30 font-medium tracking-widest uppercase pt-2">
                            <span className="w-5 h-px bg-white/15 flex-shrink-0" />
                            {trustLine}
                        </p>
                    )}
                </div>
            </div>

            {/* ── Scroll Sentinel ── */}
            <div ref={sentinelRef} className="absolute bottom-0 left-0 w-px h-px pointer-events-none" aria-hidden />

            {/* ── Scroll Down Button — Bottom Right ── */}
            <button
                onClick={onScrollDown}
                aria-label={scrollDownAriaLabel}
                className="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-2.5 group"
            >
                <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md transition-all duration-300 group-hover:border-amber-400/60 group-hover:bg-amber-400/10">
                    <ChevronDown
                        className="w-4.5 h-4.5 text-white/50 transition-all duration-300 group-hover:text-amber-400 group-hover:translate-y-0.5"
                        strokeWidth={1.5}
                    />
                </div>
                <span className="text-[9px] font-bold tracking-[0.22em] uppercase text-white/25 group-hover:text-white/50 transition-colors duration-300">
                    Scroll
                </span>
            </button>
        </section>
    );
}