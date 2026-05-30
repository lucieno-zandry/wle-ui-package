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
 * Collections Block — Redesigned
 *
 * Editorial grid layout with refined header and animated cards.
 * Theme-agnostic, fully responsive.
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
declare function CollectionItemView({ title, subtitle, imageUrl, startingPrice, index, fromLabel, shopLabel, linkTo, }: CollectionItemViewProps): react_jsx_runtime.JSX.Element;
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
 * Featured Products View — Redesigned (Dumb Component)
 *
 * Editorial section header with children slot for product grid.
 * Theme-agnostic, fully responsive.
 */
declare function FeaturedProductsView({ eyebrow, title, subtitle, viewAllLink, viewAllProductsLabel, children, }: PropsWithChildren<FeaturedProductsViewProps>): react_jsx_runtime.JSX.Element;
interface FeaturedProductsProps {
    block: LandingBlock<FeaturedProductsContent>;
    viewAllLink?: string;
    viewAllProductsLabel?: string;
    titleLabel?: string;
    subtitleLabel?: string;
}
/**
 * Featured Products Component — Redesigned
 */
declare function FeaturedProducts({ block, viewAllLink, viewAllProductsLabel, titleLabel, subtitleLabel, children, }: PropsWithChildren<FeaturedProductsProps>): react_jsx_runtime.JSX.Element;

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
 * CTA Banner Component — Redesigned
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
 * Story View — Redesigned (Dumb Component)
 *
 * Architectural split-screen layout. Image panel left, content right.
 * Decorative amber divider between panels on desktop.
 * Theme-agnostic, fully responsive.
 */
declare function StoryView({ eyebrow, title, body, imageUrl, imageCaption, stats, defaultImageAlt, }: StoryViewProps): react_jsx_runtime.JSX.Element;
interface StoryProps {
    block: LandingBlock<StoryContent>;
    titleLabel?: string;
    defaultImageAltLabel?: string;
}
/**
 * Story Component — Redesigned
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
 * Testimonials View — Redesigned (Dumb Component)
 *
 * Refined review cards with oversized quote glyphs, verified badges,
 * and payment strip. Theme-agnostic.
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
 * Testimonials Component — Redesigned
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
 * FAQ View — Redesigned (Dumb Component)
 *
 * Minimal numbered accordion. Theme-agnostic.
 */
declare function FaqView({ eyebrow, title, items, openId, onToggle }: FaqViewProps): react_jsx_runtime.JSX.Element;
interface FaqProps {
    block: LandingBlock<FaqContent>;
    titleLabel?: string;
    openId?: string | null;
    onToggle?: (id: string) => void;
}
/**
 * FAQ Component — Redesigned
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
 * Comparison View — Redesigned (Dumb Component)
 *
 * Premium dark table with highlighted "ours" column and subtle row hover.
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
 * Comparison Component — Redesigned
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
 * Trust Bar View — Redesigned
 * Elegant dark strip with icon+text trust pillars. Theme-agnostic.
 */
declare function TrustBarView({ pillars, renderIcon }: TrustBarViewProps): react_jsx_runtime.JSX.Element | null;
interface TrustBarProps {
    block: LandingBlock;
    renderIcon?: (iconName: string) => React.ReactNode;
}
/**
 * Trust Bar Component — Redesigned
 */
declare function TrustBar({ block, renderIcon, }: TrustBarProps): react_jsx_runtime.JSX.Element;

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
 * Sticky CTA Bar Component — Redesigned
 */
declare function StickyCTABar({ isVisible, product, selectedVariantId, formatPrice, onAddToCart, onDismiss, quickAddAriaLabel, addToCartLabel, dismissAriaLabel, }: StickyCTABarProps): react_jsx_runtime.JSX.Element | null;

export { CollectionItem, CollectionItemView, Collections, Comparison, ComparisonView, CtaBanner, CtaBannerView, Faq, FaqView, FeaturedProducts, FeaturedProductsView, Hero, HeroProductView, StickyCTABar, StickyCTABarView, Story, StoryView, Testimonials, TestimonialsView, TrustBar, TrustBarView, getEffectivePrice, getOriginalPrice, getPromotionBadge, getVariantLabel };
