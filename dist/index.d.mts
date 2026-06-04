import * as react from 'react';
import { PropsWithChildren, RefObject } from 'react';
import { LandingBlock, CollectionContent, Variant, HeroContent, Product } from 'wle-core';

type CollectionsProps = {
    block: LandingBlock<CollectionContent>;
    eyebrowFallback?: string;
} & PropsWithChildren;
declare function Collections({ block, eyebrowFallback, children }: CollectionsProps): react.JSX.Element;

type CollectionItemViewProps = {
    id: number;
    title: string;
    subtitle: string | null;
    imageUrl: string | null;
    startingPrice: number;
    index: number;
    formatMoney: (value: number) => string;
    linkTo: string;
    fromLabel: string;
    shopLabel: string;
};
declare function CollectionItemView({ title, subtitle, imageUrl, startingPrice, index, formatMoney, linkTo, fromLabel, shopLabel, }: CollectionItemViewProps): react.JSX.Element;

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
    formatMoney: (money: number) => string;
    eyebrow: string;
    headlineSuffix: string;
    trustLine: string;
    addToCartLabel: string;
    scrollDownAriaLabel: string;
    backgroundImageUrlFallback?: string;
    actionDisabled?: boolean;
}
declare function HeroProductView({ backgroundImageUrl, headline, subline, variants, selectedVariantId, onSelectVariant, onAddToCart, onScrollDown, sentinelRef, eyebrow, formatMoney, headlineSuffix, trustLine, addToCartLabel, scrollDownAriaLabel, backgroundImageUrlFallback, actionDisabled }: HeroProductViewProps): react.JSX.Element;

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
    backgroundImageUrlFallback?: string;
}
declare function Hero({ block, selectedVariantId, onSelectVariant, onAddToCart, onScrollDown, sentinelRef, formatPrice, fallbackEyebrow, fallbackHeadlineSuffix, fallbackTrustline, addToCartLabel, scrollDownAriaLabel, ...props }: HeroProps): react.JSX.Element | null | undefined;

interface FeaturedProductsViewProps extends PropsWithChildren {
    eyebrow?: string;
    title: string;
    subtitle?: string | null;
    products: Product[];
    viewAllProductsLabel: string;
    viewAllProductsLink: string;
}
declare function FeaturedProductsView({ eyebrow, title, subtitle, products, viewAllProductsLabel, viewAllProductsLink, children }: FeaturedProductsViewProps): react.JSX.Element;

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
declare function CtaBannerView({ eyebrow, headline, subline, backgroundImageUrl, primaryButtonLabel, secondaryButtonLabel, onPrimaryAction, onSecondaryAction, renderActions, }: CtaBannerViewProps): react.JSX.Element;

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
declare function StoryView({ eyebrow, title, body, imageUrl, imageCaption, stats, defaultImageAlt, }: StoryViewProps): react.JSX.Element;

interface TestimonialsViewProps {
    eyebrow?: string;
    title: string;
    testimonials: Array<{
        id: string;
        author: string;
        location: string;
        avatar?: string;
        rating: number;
        text: string;
        verified: boolean;
    }>;
    verifiedPurchaseLabel: string;
    securePaymentViaLabel: string;
    ratingLabel: (rating: number) => string;
}
declare function TestimonialsView({ eyebrow, title, testimonials, verifiedPurchaseLabel, securePaymentViaLabel, ratingLabel, }: TestimonialsViewProps): react.JSX.Element;

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
declare function FaqView({ eyebrow, title, items, openId, onToggle }: FaqViewProps): react.JSX.Element;

interface ComparisonViewProps {
    eyebrow: string;
    title: string;
    subtitle: string;
    ourLabel: string;
    theirLabel: string;
    rows: Array<{
        criteria: string;
        ours: string | boolean;
        theirs: string | boolean;
    }>;
    criteriaLabel: string;
}
declare function ComparisonView({ eyebrow, title, subtitle, ourLabel, theirLabel, rows, criteriaLabel, }: ComparisonViewProps): react.JSX.Element;

interface TrustPillar {
    id: string;
    title: string;
    description: string;
    icon: string;
}
interface TrustBarViewProps {
    pillars: TrustPillar[];
}
declare function TrustBarView({ pillars }: TrustBarViewProps): react.JSX.Element | null;

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
declare function StickyCTABarView({ isVisible, productName, price, thumbnailUrl, onAddToCart, onDismiss, quickAddAriaLabel, addToCartLabel, dismissAriaLabel, }: StickyCTABarViewProps): react.JSX.Element;

export { CollectionItemView, Collections, ComparisonView, CtaBannerView, FaqView, FeaturedProductsView, Hero, HeroProductView, StickyCTABarView, StoryView, TestimonialsView, TrustBarView, getEffectivePrice, getOriginalPrice, getPromotionBadge, getVariantLabel };
