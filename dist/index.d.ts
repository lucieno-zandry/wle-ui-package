import * as react from 'react';
import react__default, { RefObject } from 'react';
import { JSX } from 'react/jsx-runtime';
import { LandingAble, Product, Category, Variant } from 'wle-core';
import { VariantProps } from 'class-variance-authority';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { z, ZodType } from 'zod';
import { $ZodTypeInternals } from 'zod/v4/core';

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

declare const index$1_ActionsView: typeof ActionsView;
type index$1_ActionsViewProps = ActionsViewProps;
declare const index$1_CollectionItemView: typeof CollectionItemView;
declare const index$1_ComparisonView: typeof ComparisonView;
declare const index$1_CtaBannerView: typeof CtaBannerView;
declare const index$1_FaqView: typeof FaqView;
declare const index$1_FeaturedProductsView: typeof FeaturedProductsView;
declare const index$1_HeroView: typeof HeroView;
declare const index$1_LucideIcon: typeof LucideIcon;
declare const index$1_StickyCTABarView: typeof StickyCTABarView;
declare const index$1_StoryView: typeof StoryView;
declare const index$1_TestimonialsView: typeof TestimonialsView;
declare const index$1_TrustBarView: typeof TrustBarView;
type index$1_TrustBarViewProps = TrustBarViewProps;
type index$1_TrustPillar = TrustPillar;
declare namespace index$1 {
  export { index$1_ActionsView as ActionsView, type index$1_ActionsViewProps as ActionsViewProps, index$1_CollectionItemView as CollectionItemView, index$1_ComparisonView as ComparisonView, index$1_CtaBannerView as CtaBannerView, index$1_FaqView as FaqView, index$1_FeaturedProductsView as FeaturedProductsView, index$1_HeroView as HeroView, index$1_LucideIcon as LucideIcon, index$1_StickyCTABarView as StickyCTABarView, index$1_StoryView as StoryView, index$1_TestimonialsView as TestimonialsView, index$1_TrustBarView as TrustBarView, type index$1_TrustBarViewProps as TrustBarViewProps, type index$1_TrustPillar as TrustPillar };
}

type BackButtonProps = {
    path?: string;
    label?: string;
};
declare function BackButton({ path, label }: BackButtonProps): react.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type ButtonProps = {
    isLoading?: boolean;
} & react__default.ComponentProps<"button">;
declare function Button({ isLoading, children, ...buttonProps }: ButtonProps & VariantProps<typeof buttonVariants>): react__default.JSX.Element;

interface CountrySelectorProps {
    name: string;
    label: string;
    defaultValue?: string;
    required?: boolean;
    onValidationErrorsChange: (errors: string[] | null, fieldName: string) => void;
    validationErrors?: string[];
    dataFormat?: z.ZodTypeAny;
    t?: (key: string) => string;
}
declare function CountrySelector({ name, label, defaultValue, required, onValidationErrorsChange, validationErrors, dataFormat, t, }: CountrySelectorProps): react.JSX.Element;

type AppFieldInputProps = {
    validationErrors?: string[] | null;
    label?: react__default.ReactNode;
    dataFormat?: ZodType<unknown, unknown, $ZodTypeInternals<unknown, unknown>>;
    children?: react__default.ReactNode;
    onValidationErrorsChange?: (validationErrors: string[] | null, e: any) => void;
    validateOnBlur?: boolean;
    validateOnChange?: boolean;
} & react__default.DetailedHTMLProps<react__default.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
declare function Field({ validationErrors, label, dataFormat, children, onValidationErrorsChange, onBlur, onChange, validateOnBlur, validateOnChange, ...inputProps }: AppFieldInputProps): react__default.JSX.Element;

declare function FormField({ name, label, defaultValue, required, }: {
    name: string;
    label: string;
    defaultValue?: string;
    required?: boolean;
}): react.JSX.Element;

type Props = {
    loading: boolean;
    onClick: () => void;
};
declare function LoadMoreButton({ loading, onClick }: Props): react.JSX.Element;

declare function StepWrapper({ number, title, children, isActive, isCompleted, onEdit }: {
    number: number;
    title: string;
    children: React.ReactNode;
    isActive: boolean;
    isCompleted: boolean;
    onEdit?: () => void;
}): react.JSX.Element;

type SelectProps = {
    label?: string;
    validationErrors?: string[] | null;
    children: react__default.ReactNode;
} & react__default.SelectHTMLAttributes<HTMLSelectElement>;
declare function Select({ label, validationErrors, children, ...props }: SelectProps): react__default.JSX.Element;

type index_AppFieldInputProps = AppFieldInputProps;
declare const index_BackButton: typeof BackButton;
declare const index_Button: typeof Button;
type index_ButtonProps = ButtonProps;
declare const index_CountrySelector: typeof CountrySelector;
declare const index_Field: typeof Field;
declare const index_FormField: typeof FormField;
declare const index_LoadMoreButton: typeof LoadMoreButton;
declare const index_Select: typeof Select;
declare const index_StepWrapper: typeof StepWrapper;
declare namespace index {
  export { type index_AppFieldInputProps as AppFieldInputProps, index_BackButton as BackButton, index_Button as Button, type index_ButtonProps as ButtonProps, index_CountrySelector as CountrySelector, index_Field as Field, index_FormField as FormField, index_LoadMoreButton as LoadMoreButton, index_Select as Select, index_StepWrapper as StepWrapper };
}

export { ActionsView, type ActionsViewProps, type AppFieldInputProps, index as AppUI, BackButton, Button, type ButtonProps, CollectionItemView, ComparisonView, CountrySelector, CtaBannerView, FaqView, FeaturedProductsView, Field, FormField, HeroView, index$1 as LandingBlocks, LoadMoreButton, LucideIcon, Select, StepWrapper, StickyCTABarView, StoryView, TestimonialsView, TrustBarView, type TrustBarViewProps, type TrustPillar };
