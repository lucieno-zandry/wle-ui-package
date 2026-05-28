import * as react_jsx_runtime from 'react/jsx-runtime';
import { LandingBlock, CollectionContent, CollectionContentItem, Variant, HeroContent, FeaturedProductsContent, Product, CtaBannerContent, StoryContent, TestimonialsContent, Testimonial, FaqContent, ComparisonContent } from 'wle-core';
import { RefObject, PropsWithChildren } from 'react';

interface CollectionsProps {
    block: LandingBlock<CollectionContent>;
    fallbackEyebrow?: string;
    fromLabel?: string;
    shopLabel?: string;
    subtitleFallback?: string;
    renderItem?: (item: any, index: number) => React.ReactNode;
}
/**
 * Collections Block Component
 *
 * Displays a grid of collection items from a LandingBlock.
 * All text labels are props-based, making it fully reusable without translation dependencies.
 *
 * @param block - The landing block containing collection items
 * @param fallbackEyebrow - Top label (default: "Explore our range")
 * @param fromLabel - Price label prefix (default: "From")
 * @param shopLabel - Call-to-action label (default: "Shop")
 * @param subtitleFallback - Default subtitle for items without one (default: "Featured Collection")
 * @param renderItem - Custom item renderer (optional)
 */
declare function Collections({ block, fallbackEyebrow, fromLabel, shopLabel, subtitleFallback, renderItem, }: CollectionsProps): react_jsx_runtime.JSX.Element;

type CollectionItemViewProps = {
    id: number;
    slug: string;
    title: string;
    subtitle: string | null;
    imageUrl: string | null;
    startingPrice: number | string;
    index: number;
    fromLabel: string;
    shopLabel: string;
    linkTo: string;
};
declare function CollectionItemView({ slug, title, subtitle, imageUrl, startingPrice, index, fromLabel, shopLabel, linkTo, }: CollectionItemViewProps): react_jsx_runtime.JSX.Element;
type CollectionItemProps = {
    item: CollectionContentItem;
    index: number;
    linkTo: string;
    fromLabel: string;
    shopLabel: string;
    subtitleFallback: string;
};
declare function CollectionItem({ item, index, subtitleFallback, ...props }: CollectionItemProps): react_jsx_runtime.JSX.Element | null;

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
declare function HeroProductView({ backgroundImageUrl, headline, subline, variants, selectedVariantId, onSelectVariant, onAddToCart, onScrollDown, sentinelRef, formatPrice, eyebrow, headlineSuffix, trustLine, addToCartLabel, scrollDownAriaLabel, actionDisabled, }: HeroProductViewProps): react_jsx_runtime.JSX.Element;

declare function getPromotionBadge(variant: Variant): string | null;
declare function getEffectivePrice(variant: Variant): number;
declare function getOriginalPrice(variant: Variant): number | undefined;
declare function getVariantLabel(variant: Variant): string;
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
declare function Hero({ block, selectedVariantId, onSelectVariant, onAddToCart, onScrollDown, sentinelRef, formatPrice, fallbackEyebrow, fallbackHeadlineSuffix, fallbackTrustline, addToCartLabel, scrollDownAriaLabel, actionDisabled, }: HeroProps): react_jsx_runtime.JSX.Element | null | undefined;

interface FeaturedProductsViewProps {
    eyebrow?: string;
    title: string;
    subtitle?: string | null;
    products: Product[];
    viewAllLink: string;
    viewAllProductsLabel: string;
    renderProduct?: (product: Product, index: number) => React.ReactNode;
}
/**
 * Featured Products View (Dumb Component)
 * Pure presentation, all customization via props
 */
declare function FeaturedProductsView({ eyebrow, title, subtitle, viewAllLink, viewAllProductsLabel, children }: PropsWithChildren<FeaturedProductsViewProps>): react_jsx_runtime.JSX.Element;
interface FeaturedProductsProps {
    block: LandingBlock<FeaturedProductsContent>;
    viewAllLink?: string;
    viewAllProductsLabel?: string;
    titleLabel?: string;
    subtitleLabel?: string;
}
/**
 * Featured Products Component
 *
 * Displays featured products from a landing block.
 * All text and routing are fully externalized.
 *
 * @param block - The landing block
 * @param viewAllLink - Link for "View All Products" button (default: "/products")
 * @param viewAllProductsLabel - Label for view all button (default: "View All Products")
 * @param titleLabel - Fallback title if block.title is empty (default: "Featured Products")
 * @param subtitleLabel - Fallback subtitle if block.subtitle is empty
 * @param renderProduct - Custom renderer for product items (optional)
 */
declare function FeaturedProducts({ block, viewAllLink, viewAllProductsLabel, titleLabel, subtitleLabel, children }: PropsWithChildren<FeaturedProductsProps>): react_jsx_runtime.JSX.Element;

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
declare function CtaBannerView({ eyebrow, headline, subline, backgroundImageUrl, primaryButtonLabel, secondaryButtonLabel, onPrimaryAction, onSecondaryAction, renderActions, }: CtaBannerViewProps): react_jsx_runtime.JSX.Element;
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
declare function CtaBanner({ block, fallbackHeadline, fallbackSubline, primaryButtonLabel, secondaryButtonLabel, onPrimaryAction, onSecondaryAction, renderActions, }: CtaBannerProps): react_jsx_runtime.JSX.Element;

interface StoryViewProps {
    eyebrow?: string;
    title: string;
    body: string;
    imageUrl: string | null;
    imageCaption?: string;
    stats: Array<{
        value: string;
        label: string;
    }>;
    defaultImageAlt: string;
}
/**
 * Story View (Dumb Component)
 */
declare function StoryView({ eyebrow, title, body, imageUrl, imageCaption, stats, defaultImageAlt, }: StoryViewProps): react_jsx_runtime.JSX.Element;
interface StoryProps {
    block: LandingBlock<StoryContent>;
    titleLabel?: string;
    defaultImageAltLabel?: string;
}
/**
 * Story Component
 *
 * Displays a story section with image and statistics.
 * All text is fully externalized.
 */
declare function Story({ block, titleLabel, defaultImageAltLabel, }: StoryProps): react_jsx_runtime.JSX.Element;

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
declare function TestimonialsView({ eyebrow, title, testimonials, verifiedPurchaseLabel, securePaymentViaLabel, ratingLabel, }: TestimonialsViewProps): react_jsx_runtime.JSX.Element;
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
declare function Testimonials({ block, titleLabel, verifiedPurchaseLabel, securePaymentViaLabel, ratingLabel, }: TestimonialsProps): react_jsx_runtime.JSX.Element;

interface FaqViewProps {
    eyebrow?: string;
    title: string;
    items: Array<{
        id: string;
        question: string;
        answer: string;
    }>;
    openId: string | null;
    onToggle: (id: string) => void;
}
/**
 * FAQ View (Dumb Component)
 */
declare function FaqView({ eyebrow, title, items, openId, onToggle, }: FaqViewProps): react_jsx_runtime.JSX.Element;
interface FaqProps {
    block: LandingBlock<FaqContent>;
    titleLabel?: string;
    openId?: string | null;
    onToggle?: (id: string) => void;
}
/**
 * FAQ Component
 *
 * Displays FAQ items with expandable answers.
 * All text and state management are fully externalized.
 *
 * @param block - The landing block
 * @param titleLabel - Fallback title (default: "Frequently Asked Questions")
 * @param openId - ID of currently open item
 * @param onToggle - Callback when item is toggled
 */
declare function Faq({ block, titleLabel, openId, onToggle, }: FaqProps): react_jsx_runtime.JSX.Element;

interface ComparisonViewProps {
    eyebrow: string;
    title: string;
    subtitle: string;
    ourLabel: string;
    theirLabel: string;
    rows: Array<{
        id: string;
        criteria: string;
        ours: string | boolean;
        theirs: string | boolean;
    }>;
    criteriaLabel: string;
}
/**
 * Comparison View (Dumb Component)
 */
declare function ComparisonView({ eyebrow, title, subtitle, ourLabel, theirLabel, rows, criteriaLabel, }: ComparisonViewProps): react_jsx_runtime.JSX.Element;
interface ComparisonProps {
    block: LandingBlock<ComparisonContent>;
    eyebrowLabel?: string;
    titleLabel?: string;
    subtitleLabel?: string;
    ourLabelText?: string;
    theirLabelText?: string;
    criteriaLabelText?: string;
}
/**
 * Comparison Component
 *
 * Displays a comparison table with customizable labels.
 * All text is fully externalized.
 */
declare function Comparison({ block, eyebrowLabel, titleLabel, subtitleLabel, ourLabelText, theirLabelText, criteriaLabelText, }: ComparisonProps): react_jsx_runtime.JSX.Element;

interface TrustPillar {
    id: string;
    title: string;
    description: string;
    icon: string;
}
interface TrustBarViewProps {
    pillars: TrustPillar[];
    renderIcon?: (iconName: string) => React.ReactNode;
}
/**
 * Trust Bar View (Dumb Component)
 */
declare function TrustBarView({ pillars, renderIcon, }: TrustBarViewProps): react_jsx_runtime.JSX.Element | null;
interface TrustBarProps {
    block: LandingBlock;
    renderIcon?: (iconName: string) => React.ReactNode;
}
/**
 * Trust Bar Component
 *
 * Displays trust pillars with optional custom icon rendering.
 * All content is fully externalized.
 */
declare function TrustBar({ block, renderIcon }: TrustBarProps): react_jsx_runtime.JSX.Element;

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
declare function StickyCTABarView({ isVisible, productName, price, thumbnailUrl, onAddToCart, onDismiss, quickAddAriaLabel, addToCartLabel, dismissAriaLabel, }: StickyCTABarViewProps): react_jsx_runtime.JSX.Element;
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
declare function StickyCTABar({ isVisible, product, selectedVariantId, formatPrice, onAddToCart, onDismiss, quickAddAriaLabel, addToCartLabel, dismissAriaLabel, }: StickyCTABarProps): react_jsx_runtime.JSX.Element | null;

export { CollectionItem, CollectionItemView, Collections, Comparison, ComparisonView, CtaBanner, CtaBannerView, Faq, FaqView, FeaturedProducts, FeaturedProductsView, Hero, HeroProductView, StickyCTABar, StickyCTABarView, Story, StoryView, Testimonials, TestimonialsView, TrustBar, TrustBarView, getEffectivePrice, getOriginalPrice, getPromotionBadge, getVariantLabel };
