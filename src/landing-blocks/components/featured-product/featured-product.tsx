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
 * Featured Products View (Dumb Component)
 * Pure presentation, all customization via props
 */
export function FeaturedProductsView({
  eyebrow,
  title,
  subtitle,
  viewAllLink,
  viewAllProductsLabel,
  children
}: PropsWithChildren<FeaturedProductsViewProps>) {
  return (
    <section className="py-20 bg-white border-t border-amber-200" id="featured">
      <div className="max-w-5xl mx-auto px-4 mb-12">
        {eyebrow && <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-amber-900/60 mb-2">{eyebrow}</p>}
        <h2 className="text-3xl sm:text-4xl font-display font-medium text-amber-950 mb-3">{title}</h2>
        {subtitle && <p className="text-base text-amber-900/70">{subtitle}</p>}
      </div>

      {children}

      <div className="flex justify-center">
        <Link
          to={viewAllLink}
          className="px-7 py-2.5 border border-emerald-900 text-emerald-900 rounded-md font-medium text-sm transition-all duration-200 hover:bg-emerald-900 hover:text-white flex items-center gap-2"
        >
          {viewAllProductsLabel}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

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
export function FeaturedProducts({
  block,
  viewAllLink = "/products",
  viewAllProductsLabel = "View All Products",
  titleLabel = "Featured Products",
  subtitleLabel,
  children
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
      children={children}
    />
  );
}