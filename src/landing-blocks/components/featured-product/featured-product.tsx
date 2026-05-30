import { ArrowRight } from "lucide-react";
import { PropsWithChildren } from "react";
import { Link } from "react-router";
import { FeaturedProductsContent, LandingBlock, Product } from "wle-core";

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
export function FeaturedProductsView({
    eyebrow,
    title,
    subtitle,
    viewAllLink,
    viewAllProductsLabel,
    children,
}: PropsWithChildren<FeaturedProductsViewProps>) {
    return (
        <section
            id="featured"
            className="py-24 sm:py-32 bg-white dark:bg-zinc-900 border-t border-stone-100 dark:border-zinc-800"
        >
            <div className="max-w-5xl mx-auto px-6">

                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-14">
                    <div>
                        {eyebrow && (
                            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-500 mb-3">
                                {eyebrow}
                            </p>
                        )}
                        <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 dark:text-zinc-50 leading-tight">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="mt-3 text-sm text-stone-500 dark:text-zinc-400 leading-relaxed max-w-sm">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    {/* View all — desktop, sits beside title */}
                    <Link
                        to={viewAllLink}
                        className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-200 dark:border-zinc-700 text-stone-600 dark:text-zinc-300 font-semibold text-sm tracking-wide transition-all duration-300 hover:border-emerald-800 hover:text-emerald-800 dark:hover:border-emerald-500 dark:hover:text-emerald-400 hover:bg-emerald-800/4 dark:hover:bg-emerald-500/8 flex-shrink-0"
                    >
                        {viewAllProductsLabel}
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>

                {/* Product grid slot */}
                <div className="mb-12">
                    {children}
                </div>

                {/* View all — mobile, centered below grid */}
                <div className="flex justify-center sm:hidden">
                    <Link
                        to={viewAllLink}
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-stone-200 dark:border-zinc-700 text-stone-600 dark:text-zinc-300 font-semibold text-sm tracking-wide transition-all duration-300 hover:border-emerald-800 hover:text-emerald-800 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
                    >
                        {viewAllProductsLabel}
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

// ── Smart Component ──────────────────────────────────────────────────────────

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
export function FeaturedProducts({
    block,
    viewAllLink = "/products",
    viewAllProductsLabel = "View All Products",
    titleLabel = "Featured Products",
    subtitleLabel,
    children,
}: PropsWithChildren<FeaturedProductsProps>) {
    const content = block.content ?? ({} as FeaturedProductsContent);
    const products = content.products ?? [];

    return (
        <FeaturedProductsView
            eyebrow={content.eyebrow}
            title={block.title ?? titleLabel}
            subtitle={block.subtitle ?? subtitleLabel}
            products={products}
            viewAllLink={viewAllLink}
            viewAllProductsLabel={viewAllProductsLabel}
        >
            {children}
        </FeaturedProductsView>
    );
}