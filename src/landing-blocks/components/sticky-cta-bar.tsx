import { ShoppingCart, X } from "lucide-react";
import { Button } from "~/components/ui/button";

interface StickyCTABarViewProps {
  isVisible: boolean;
  productName: string;
  price: string;        // formatted price
  thumbnailUrl: string | null;
  onAddToCart: () => void;
  onDismiss: () => void;
  quickAddAriaLabel: string;
  addToCartLabel: string;
  dismissAriaLabel: string;
}

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
      className={`sticky-cta ${isVisible ? "sticky-cta--visible" : ""}`}
      aria-hidden={!isVisible}
      role="complementary"
      aria-label={quickAddAriaLabel}
    >
      <div className="sticky-cta__inner">
        <div className="sticky-cta__product">
          {thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              alt={productName}
              className="sticky-cta__thumb"
            />
          ) : (
            <div className="sticky-cta__thumb sticky-cta__thumb--placeholder" />
          )}
          {/* Add a class here to constrain the flex child */}
          <div className="sticky-cta__info">
            <p className="sticky-cta__name">{productName}</p>
            <p className="sticky-cta__price">{price}</p>
          </div>
        </div>

        <Button onClick={onAddToCart} size="sm" className="sticky-cta__btn">
          <ShoppingCart className="w-4 h-4 mr-1.5" />
          <span className="sticky-cta__btn-text">{addToCartLabel}</span>
        </Button>

        <button onClick={onDismiss} className="sticky-cta__dismiss" aria-label={dismissAriaLabel}>
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
