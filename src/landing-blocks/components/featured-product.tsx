import { Button } from "~/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

interface FeaturedProductsViewProps {
  eyebrow?: string;
  title: string;
  subtitle?: string | null;
  viewAllProductsLabel: string;
  children: React.ReactNode;
  viewAllProductsLink: string;
}

export function FeaturedProductsView({ eyebrow, title, subtitle, viewAllProductsLabel, children, viewAllProductsLink }: FeaturedProductsViewProps) {
  return (
    <section className="featured-products" id="featured">
      <div className="featured-products__header">
        {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>

      {children}

      <div className="featured-products__footer">
        <Button asChild variant="outline" className="featured-products__view-all">
          <Link to={viewAllProductsLink}>
            {viewAllProductsLabel}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}