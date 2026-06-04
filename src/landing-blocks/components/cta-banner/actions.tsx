import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";
import { JSX } from "react/jsx-runtime";
import { Category, LandingAble, Product } from "wle-core";
import { Button } from "~/components/ui/button";

type ActionsViewProps = {
    appPathname: (pathname: string) => string
    related?: LandingAble
    isProduct: (able: LandingAble) => able is Product
    isCategory: (able: LandingAble) => able is Category
    addToCart: (data: {
        variant_id: number;
        count: number;
    }) => void;
    shopNowLabel: string;
    browseAllProductsLabel: string;
    addToCartLabel: string;
    shopCategoryLabel: string;
}

export const ActionsView = ({
    appPathname,
    related,
    addToCart,
    isCategory,
    isProduct,
    shopNowLabel,
    browseAllProductsLabel,
    addToCartLabel,
    shopCategoryLabel
}: ActionsViewProps) => {
    let primary: JSX.Element | null = <Button asChild size="lg" className="cta-banner__btn-primary">
        <Link to={appPathname('/search/*')}>
            <ShoppingCart className="w-4 h-4 mr-2" />
            {shopNowLabel}
        </Link>
    </Button>

    let secondary = <Button asChild variant="ghost" size="lg" className="cta-banner__btn-ghost">
        <Link to={appPathname("/products")}>
            {browseAllProductsLabel}
        </Link>
    </Button>

    if (related) {
        if (isProduct(related)) {
            const variantId = related.variants?.at(0)?.id;
            if (variantId) {
                const handleAddToCart = () => { addToCart({ variant_id: variantId, count: 1 }); }

                primary = <Button
                    className="cta-banner__btn-primary"
                    onClick={handleAddToCart}>
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {addToCartLabel}
                </Button>
            }
        } else if (isCategory(related)) {
            primary = <Button asChild size="lg" className="cta-banner__btn-primary">
                <Link to={appPathname(`/search/${related.title.toLocaleLowerCase()}`)}>
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {shopCategoryLabel}
                </Link>
            </Button>
        }
    }

    return <div className="cta-banner__actions">
        {primary}
        {secondary}
    </div>
}