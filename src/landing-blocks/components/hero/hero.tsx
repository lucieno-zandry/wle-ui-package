import { useRef } from "react";
import type { RefObject } from "react";
import { HeroContent, isProduct, LandingBlock, Variant } from "wle-core";
import { HeroProductView } from "./views/hero-product-view";

// ============================================================================
// Helper Functions (Library-Scoped)
// ============================================================================
export function getPromotionBadge(variant: Variant): string | null {
  const promotions = variant.applied_promotions;
  if (!promotions?.length) return null;

  const best = promotions.reduce((prev, curr) => {
    const prevValue = prev.discount;
    const currValue = curr.discount;
    return currValue > prevValue ? curr : prev;
  });

  if (best.type === "PERCENTAGE") {
    return `-${best.discount}%`;
  }
  return best.badge ?? `-${best.discount}€`;
}

export function getEffectivePrice(variant: Variant): number {
  return variant.effective_price ?? variant.price;
}

export function getOriginalPrice(variant: Variant): number | undefined {
  const effective = getEffectivePrice(variant);
  return effective < variant.price ? variant.price : undefined;
}

export function getVariantLabel(variant: Variant): string {
  if (!variant.variant_options?.length) {
    return variant.sku;
  }
  return variant.variant_options.map((opt) => opt.value).join(" / ");
}

// ============================================================================
// Hero Smart Component (Container Wrapper)
// ============================================================================
interface HeroProps {
  block: LandingBlock<HeroContent>;
  selectedVariantId?: string | null;
  onSelectVariant?: (id: string) => void;
  onAddToCart?: () => void;
  onScrollDown?: () => void;
  sentinelRef?: RefObject<HTMLDivElement | null>;
  formatPrice?: (price: number) => string;
  fallbackEyebrow?: string;
  fallbackHeadlineSuffix?: string;
  fallbackTrustline?: string;
  addToCartLabel?: string;
  scrollDownAriaLabel?: string;
  actionDisabled?: boolean;
}

export function Hero({
  block,
  selectedVariantId = null,
  onSelectVariant = () => { },
  onAddToCart = () => { },
  onScrollDown = () => { },
  sentinelRef,
  formatPrice = (price: number) => `${price}`,
  fallbackEyebrow = "",
  fallbackHeadlineSuffix = "",
  fallbackTrustline = "",
  addToCartLabel = "Add to Cart",
  scrollDownAriaLabel = "Scroll down",
  actionDisabled = false,
}: HeroProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  if (!block.landing_able) return null;

  if (isProduct(block.landing_able)) {
    const product = block.landing_able;
    const variants = product.variants ?? [];
    const content = block.content ?? {};
    const eyebrow = content.eyebrow ?? fallbackEyebrow;
    const headlineSuffix = content.headlineSuffix ?? fallbackHeadlineSuffix;
    const trustLine = content.trustLine ?? fallbackTrustline;

    return (
      <HeroProductView
        backgroundImageUrl={block.image?.url ?? null}
        headline={block.title ?? ""}
        subline={block.subtitle ?? ""}
        variants={variants}
        selectedVariantId={selectedVariantId}
        onSelectVariant={onSelectVariant}
        onAddToCart={onAddToCart}
        onScrollDown={onScrollDown}
        sentinelRef={sentinelRef ?? ref}
        formatPrice={formatPrice}
        eyebrow={eyebrow}
        headlineSuffix={headlineSuffix}
        trustLine={trustLine}
        addToCartLabel={addToCartLabel}
        scrollDownAriaLabel={scrollDownAriaLabel}
        actionDisabled={actionDisabled}
      />
    );
  }
}