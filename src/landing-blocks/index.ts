/**
 * WLE UI Library - Landing Blocks Components and Types
 *
 * A reusable UI library for landing page blocks that doesn't depend on
 * internal app-specific logic, translations, or other external factors.
 */


// ============================================================================
// Export all components
// ============================================================================

// Collections
export { Collections } from "./components/collections/collections";
export { CollectionItem, CollectionItemView } from "./components/collections/collection-item";

// Hero
export * from "./components/hero";

export {
    getPromotionBadge,
    getEffectivePrice,
    getOriginalPrice,
    getVariantLabel,
} from "./components/hero/hero";

// Featured Products
export { FeaturedProducts, FeaturedProductsView } from "./components/featured-product/featured-product";

// CTA Banner
export { CtaBanner, CtaBannerView } from "./components/cta-banner/cta-banner";

// Story
export { Story, StoryView } from "./components/story/story";

// Testimonials
export { Testimonials, TestimonialsView } from "./components/testimonials/testimonials";

// FAQ
export { Faq, FaqView } from "./components/faq/faq";

// Comparison
export { Comparison, ComparisonView } from "./components/comparison/comparison";

// Trust Bar
export { TrustBar, TrustBarView } from "./components/trust-bar/trust-bar";

// Sticky CTA Bar
export { StickyCTABar, StickyCTABarView } from "./components/sticky-cta-bar/sticky-cta-bar";
