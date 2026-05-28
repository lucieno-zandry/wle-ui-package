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
 * Sticky CTA Bar View (Dumb Component)
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
      className={`fixed bottom-0 left-0 right-0 z-50 bg-amber-950 border-t border-slate-100/10 transition-transform duration-500 ${isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      style={{
        boxShadow: "0 -8px 30px rgba(0, 0, 0, 0.2)"
      }}
      aria-hidden={!isVisible}
      role="complementary"
      aria-label={quickAddAriaLabel}
    >
      <div className="max-w-5xl mx-auto px-4 py-3 sm:py-4 flex items-center gap-3 sm:gap-4">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              alt={productName}
              className="w-10 h-10 sm:w-10 sm:h-10 rounded-md object-cover flex-shrink-0"
            />
          ) : (
            <div className="w-10 h-10 rounded-md bg-slate-100/10 flex-shrink-0" />
          )}
          <div className="min-w-0 flex flex-col">
            <p className="text-sm sm:text-base font-medium text-slate-50 truncate">
              {productName}
            </p>
            <p className="text-xs sm:text-sm text-amber-300">{price}</p>
          </div>
        </div>

        <button
          onClick={onAddToCart}
          className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-amber-500 text-amber-900 font-medium text-sm transition-colors hover:bg-amber-400 flex-shrink-0"
        >
          <ShoppingCart className="w-4 h-4" />
          <span className="hidden sm:inline">{addToCartLabel}</span>
        </button>

        <button
          onClick={onDismiss}
          className="text-slate-100/40 hover:text-slate-100 transition-colors flex-shrink-0"
          aria-label={dismissAriaLabel}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

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
 * Sticky CTA Bar Component
 *
 * A sticky bar that appears with product and quick add-to-cart button.
 * All text, visibility, and callbacks are fully externalized.
 *
 * @param isVisible - Whether the bar is visible (default: false)
 * @param product - Product to display
 * @param selectedVariantId - Currently selected variant ID
 * @param formatPrice - Function to format prices (default: toString)
 * @param onAddToCart - Callback when add to cart is clicked
 * @param onDismiss - Callback when dismiss is clicked
 * @param quickAddAriaLabel - Aria label (default: "Quick add to cart")
 * @param addToCartLabel - Button label (default: "Add to Cart")
 * @param dismissAriaLabel - Dismiss button aria label (default: "Dismiss")
 */
export function StickyCTABar({
  isVisible = false,
  product,
  selectedVariantId,
  formatPrice = (price: number) => `${price}`,
  onAddToCart = () => { },
  onDismiss = () => { },
  quickAddAriaLabel = "Quick add to cart",
  addToCartLabel = "Add to Cart",
  dismissAriaLabel = "Dismiss",
}: StickyCTABarProps) {
  if (!product) return null;

  const selectedVariant = product.variants?.find(
    (v) => v.id === Number(selectedVariantId)
  ) ?? product.variants?.[0];

  if (!selectedVariant) return null;

  const effectivePrice = selectedVariant.effective_price ?? selectedVariant.price;
  const formattedPrice = formatPrice(effectivePrice);
  const thumbnailUrl =
    selectedVariant.image?.url ?? product.images?.[0]?.url ?? null;
  const productName = product.title;

  return (
    <StickyCTABarView
      isVisible={isVisible}
      productName={productName}
      price={formattedPrice}
      thumbnailUrl={thumbnailUrl}
      onAddToCart={onAddToCart}
      onDismiss={onDismiss}
      quickAddAriaLabel={quickAddAriaLabel}
      addToCartLabel={addToCartLabel}
      dismissAriaLabel={dismissAriaLabel}
    />
  );
}