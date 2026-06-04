import * as react from 'react';
import { RefObject } from 'react';
import { JSX } from 'react/jsx-runtime';
import { LandingAble, Product, Category, Variant } from 'wle-core';

type CollectionItemViewProps = {
    id: number;
    slug: string;
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
declare function CollectionItemView({ slug, title, subtitle, imageUrl, startingPrice, index, formatMoney, linkTo, fromLabel, shopLabel }: CollectionItemViewProps): react.JSX.Element;

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
declare function ComparisonView({ eyebrow, title, subtitle, ourLabel, theirLabel, rows, criteriaLabel }: ComparisonViewProps): react.JSX.Element;

type ActionsViewProps = {
    appPathname: (pathname: string) => string;
    related?: LandingAble;
    isProduct: (able: LandingAble) => able is Product;
    isCategory: (able: LandingAble) => able is Category;
    addToCart: (data: {
        variant_id: number;
        count: number;
    }) => void;
    shopNowLabel: string;
    browseAllProductsLabel: string;
    addToCartLabel: string;
    shopCategoryLabel: string;
};
declare const ActionsView: ({ appPathname, related, addToCart, isCategory, isProduct, shopNowLabel, browseAllProductsLabel, addToCartLabel, shopCategoryLabel }: ActionsViewProps) => JSX.Element;

interface CtaBannerViewProps {
    eyebrow?: string;
    headline: string;
    subline: string;
    backgroundImageUrl: string | null;
    actions: React.ReactNode;
}
declare function CtaBannerView({ eyebrow, headline, subline, backgroundImageUrl, actions }: CtaBannerViewProps): react.JSX.Element;

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

interface FeaturedProductsViewProps {
    eyebrow?: string;
    title: string;
    subtitle?: string | null;
    viewAllProductsLabel: string;
    children: React.ReactNode;
    viewAllProductsLink: string;
}
declare function FeaturedProductsView({ eyebrow, title, subtitle, viewAllProductsLabel, children, viewAllProductsLink }: FeaturedProductsViewProps): react.JSX.Element;

interface HeroViewProps {
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
}
declare function HeroView({ backgroundImageUrl, headline, subline, variants, selectedVariantId, onSelectVariant, onAddToCart, onScrollDown, sentinelRef, eyebrow, formatMoney, headlineSuffix, trustLine, addToCartLabel, scrollDownAriaLabel }: HeroViewProps): react.JSX.Element;

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
declare function StoryView({ eyebrow, title, body, imageUrl, imageCaption, stats, defaultImageAlt }: StoryViewProps): react.JSX.Element;

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
declare function TestimonialsView({ eyebrow, title, testimonials, verifiedPurchaseLabel, securePaymentViaLabel, ratingLabel }: TestimonialsViewProps): react.JSX.Element;

interface LucideIconProps {
    name: string;
    className?: string;
    strokeWidth?: number;
}
declare const LucideIcon: ({ name, className, strokeWidth }: LucideIconProps) => react.JSX.Element;

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

export { ActionsView, type ActionsViewProps, CollectionItemView, ComparisonView, CtaBannerView, FaqView, FeaturedProductsView, HeroView, LucideIcon, StickyCTABarView, StoryView, TestimonialsView, TrustBarView, type TrustBarViewProps, type TrustPillar };
