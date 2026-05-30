import { ShoppingCart, X } from "lucide-react";
import { Product } from "wle-core";

interface StickyCTABarViewProps {
    isVisible: boolean;
    productName: string;
    price: string;
    thumbnailUrl: string | null;
    onAddToCart: () => void;
    onDismiss: () => void;
    quickAddAriaLabel: string;
    addToCartLabel: string;
    dismissAriaLabel: string;
}

/**
 * Sticky CTA Bar View — Redesigned (Dumb Component)
 *
 * Frosted glass bar. Theme-agnostic via light/dark Tailwind variants.
 */
export function StickyCTABarView({
    isVisible,
    productName,
    price,
    thumbnailUrl,
    onAddToCart,
    onDismiss,
    quickAddAriaLabel,
    addToCartLabel,
    dismissAriaLabel,
}: StickyCTABarViewProps) {
    return (
        <div
            className={[
                "fixed bottom-0 left-0 right-0 z-50",
                "bg-white/80 dark:bg-zinc-900/85 backdrop-blur-xl",
                "border-t border-stone-200/80 dark:border-zinc-700/50",
                "shadow-[0_-8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_-8px_32px_rgba(0,0,0,0.35)]",
                "transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                isVisible ? "translate-y-0" : "translate-y-full",
            ].join(" ")}
            role="complementary"
            aria-label={quickAddAriaLabel}
            aria-hidden={!isVisible}
        >
            {/* Thin accent line at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" aria-hidden />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-3.5 flex items-center gap-3 sm:gap-5">

                {/* Product info */}
                <div className="flex items-center gap-3 flex-1 min-w-0">
                    {/* Thumbnail */}
                    <div className="flex-shrink-0">
                        {thumbnailUrl ? (
                            <img
                                src={thumbnailUrl}
                                alt={productName}
                                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover"
                            />
                        ) : (
                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-stone-100 dark:bg-zinc-800 flex-shrink-0" />
                        )}
                    </div>

                    {/* Name + price */}
                    <div className="min-w-0 flex flex-col leading-tight">
                        <p className="text-sm font-semibold text-stone-900 dark:text-zinc-50 truncate">
                            {productName}
                        </p>
                        <p className="text-xs font-bold text-amber-600 dark:text-amber-400 mt-0.5">
                            {price}
                        </p>
                    </div>
                </div>

                {/* Add to cart button */}
                <button
                    onClick={onAddToCart}
                    className="flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl bg-amber-400 text-stone-950 font-bold text-sm tracking-wide transition-all duration-200 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/25 active:scale-[0.97] flex-shrink-0"
                >
                    <ShoppingCart className="w-4 h-4" />
                    <span className="hidden sm:inline">{addToCartLabel}</span>
                    <span className="sm:hidden">Add</span>
                </button>

                {/* Dismiss */}
                <button
                    onClick={onDismiss}
                    aria-label={dismissAriaLabel}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-stone-400 dark:text-zinc-500 hover:text-stone-700 dark:hover:text-zinc-200 hover:bg-stone-100 dark:hover:bg-zinc-800 transition-all duration-200 flex-shrink-0"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

// ── Smart Component ──────────────────────────────────────────────────────────

interface StickyCTABarProps {
    isVisible?: boolean;
    product?: Product;
    selectedVariantId?: number | null;
    formatPrice?: (price: number) => string;
    onAddToCart?: () => void;
    onDismiss?: () => void;
    quickAddAriaLabel?: string;
    addToCartLabel?: string;
    dismissAriaLabel?: string;
}

/**
 * Sticky CTA Bar Component — Redesigned
 */
export function StickyCTABar({
    isVisible = false,
    product,
    selectedVariantId,
    formatPrice = (price: number) => `${price}`,
    onAddToCart = () => {},
    onDismiss = () => {},
    quickAddAriaLabel = "Quick add to cart",
    addToCartLabel = "Add to Cart",
    dismissAriaLabel = "Dismiss",
}: StickyCTABarProps) {
    if (!product) return null;

    const selectedVariant =
        product.variants?.find((v) => v.id === Number(selectedVariantId)) ??
        product.variants?.[0];

    if (!selectedVariant) return null;

    const effectivePrice = selectedVariant.effective_price ?? selectedVariant.price;
    const thumbnailUrl =
        selectedVariant.image?.url ?? product.images?.[0]?.url ?? null;

    return (
        <StickyCTABarView
            isVisible={isVisible}
            productName={product.title}
            price={formatPrice(effectivePrice)}
            thumbnailUrl={thumbnailUrl}
            onAddToCart={onAddToCart}
            onDismiss={onDismiss}
            quickAddAriaLabel={quickAddAriaLabel}
            addToCartLabel={addToCartLabel}
            dismissAriaLabel={dismissAriaLabel}
        />
    );
}