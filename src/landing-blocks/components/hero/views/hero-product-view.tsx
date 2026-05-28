// ============================================================================
// Hero View (Dumb Presentational Component)

import { RefObject } from "react";
import { getEffectivePrice, getOriginalPrice, getPromotionBadge, getVariantLabel } from "../hero";
import { Button } from "~/components/ui/button";
import { ChevronDown, ShoppingCart } from "lucide-react";
import { Variant } from "wle-core";

// ============================================================================
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
        <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden py-20 sm:py-32 bg-black">
            {/* Background Image with strong darkening overlay */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none" aria-hidden>
                {backgroundImageUrl ? (
                    <>
                        <img
                            src={backgroundImageUrl}
                            alt=""
                            className="w-full h-full object-cover"
                            style={{ objectPosition: "center 35%" }}
                        />
                        {/* Strong gradient overlay to handle very bright images */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60" />
                    </>
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black" />
                )}
                {/* Extra solid overlay for guaranteed contrast */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Main container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 relative max-w-2xl">
                    {/* Content panel - fully opaque dark background with blur */}
                    <div className="relative flex flex-col gap-6 text-left bg-[rgba(0,0,0,0.85)] p-6 sm:p-10 rounded-3xl border border-white/20 backdrop-blur-lg shadow-2xl shadow-black/50">

                        {/* Eyebrow - unchanged, works on dark */}
                        <p className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-amber-400">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                            {eyebrow}
                        </p>

                        {/* Heading */}
                        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                            {headline}{" "}
                            {headlineSuffix && (
                                <span className="block mt-1 italic font-light text-amber-200">
                                    {headlineSuffix}
                                </span>
                            )}
                        </h1>

                        {/* Subline - now 100% white with shadow for extreme cases */}
                        <p className="text-base sm:text-lg text-white max-w-xl leading-relaxed font-normal [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                            {subline}
                        </p>

                        {/* Variant selector */}
                        {variants.length > 1 && (
                            <div className="flex flex-col gap-2 mt-2">
                                <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                                    Select Option
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {variants.map((v) => {
                                        const isActive =
                                            String(selectedVariantId ?? variants[0]?.id) === String(v.id);
                                        const badge = getPromotionBadge(v);
                                        return (
                                            <button
                                                key={v.id}
                                                onClick={() => onSelectVariant(String(v.id))}
                                                className={`relative px-4 py-2 rounded-xl text-sm transition-all duration-300 transform active:scale-95 ${isActive
                                                    ? "bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20 border border-amber-400"
                                                    : "border border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/40 backdrop-blur-md"
                                                    }`}
                                            >
                                                {getVariantLabel(v)}
                                                {badge && (
                                                    <span
                                                        className={`absolute -top-2.5 -right-2 px-1.5 py-0.5 rounded-md text-[10px] font-bold tracking-wide shadow-md ${isActive
                                                            ? "bg-black text-amber-400 border border-amber-400/40"
                                                            : "bg-emerald-600 text-white"
                                                            }`}
                                                    >
                                                        {badge}
                                                    </span>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Price + CTA - using hardcoded colors to resist theme changes */}
                        <div className="flex flex-wrap items-center gap-6 mt-2 pt-5 border-t border-white/20 sm:flex-nowrap">
                            <div className="flex flex-col min-w-[120px]">
                                {selected && (() => {
                                    const original = getOriginalPrice(selected);
                                    const current = getEffectivePrice(selected);
                                    return (
                                        <>
                                            {original && (
                                                <span className="text-sm font-semibold text-white/50 line-through tracking-wide mb-0.5">
                                                    {formatPrice(original)}
                                                </span>
                                            )}
                                            <span className="font-display text-3xl font-bold text-white tracking-tight">
                                                {formatPrice(current)}
                                            </span>
                                        </>
                                    );
                                })()}
                            </div>

                            <Button
                                onClick={onAddToCart}
                                disabled={actionDisabled}
                                className="w-full sm:w-auto h-12 px-8 text-base font-bold tracking-wide rounded-xl shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                style={{
                                    backgroundColor: "#ffffff",
                                    color: "#000000",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "#f5f5f5";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "#ffffff";
                                }}
                            >
                                <ShoppingCart className="w-5 h-5 stroke-[2.5]" style={{ stroke: "#000000" }} />
                                {addToCartLabel}
                            </Button>
                        </div>

                        {/* Trust line */}
                        {trustLine && (
                            <p className="text-xs text-white/70 font-medium tracking-wide mt-1 flex items-center gap-1.5">
                                {trustLine}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Scroll anchor & button - theme-proof */}
            <div ref={sentinelRef} className="absolute bottom-0 left-0 w-px h-px pointer-events-none" aria-hidden />

            {onScrollDown && <button
                onClick={onScrollDown}
                className="absolute bottom-8 right-8 lg:right-12 z-20 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 group shadow-lg"
                style={{
                    backgroundColor: "rgba(0,0,0,0.5)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#ffffff",
                    animation: "bounce 2.5s infinite",
                }}
                aria-label={scrollDownAriaLabel}
            >

                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>}

            <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); animation-timing-function: cubic-bezier(0.8,0,1,1); }
          50% { transform: translateY(-6px); animation-timing-function: cubic-bezier(0,0,0.2,1); }
        }
      `}</style>
        </section>
    );
}