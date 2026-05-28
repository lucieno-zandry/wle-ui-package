import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { CollectionContentItem } from "wle-core";

// View Component (dumb)
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

export function CollectionItemView({
    slug,
    title,
    subtitle,
    imageUrl,
    startingPrice,
    index,
    fromLabel,
    shopLabel,
    linkTo,
}: CollectionItemViewProps) {
    return (
        <Link
            to={linkTo}
            className="relative rounded-lg overflow-hidden flex flex-col text-decoration-none cursor-pointer bg-white animate-fade-up transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ animationDelay: `${index * 120}ms` }}
        >
            {/* Image */}
            <div className="relative aspect-3/4 overflow-hidden">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-104"
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-50% to-amber-950/50" />
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
                <div>
                    {subtitle && (
                        <p className="text-xs tracking-widest uppercase text-amber-600 font-medium mb-0.5">
                            {subtitle}
                        </p>
                    )}
                    <h3 className="font-display text-2xl font-medium text-amber-950 leading-tight">
                        {title}
                    </h3>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-sm text-amber-900/70">
                        {fromLabel} {startingPrice}
                    </span>

                    <span className="text-xs sm:text-sm font-medium text-emerald-900 flex items-center gap-0.5 transition-all hover:gap-2">
                        {shopLabel}
                        <ArrowRight className="w-3.5 h-3.5 inline" />
                    </span>
                </div>
            </div>
        </Link>
    );
}

// ----------------------------------------------------------------------------
// Smart Component – connects to the actual LandingBlock
// Accepts externalized props instead of managing state internally
// ============================================================================
type CollectionItemProps = {
    item: CollectionContentItem
    index: number;
    linkTo: string;
    fromLabel: string;
    shopLabel: string;
    subtitleFallback: string;
};

export function CollectionItem({ item, index, subtitleFallback, ...props }: CollectionItemProps) {
    const category = item.category;

    if (!category) return null;

    const cheapestVariant = category.cheapest_variant;

    let startingPrice = 0;

    if (cheapestVariant) {
        startingPrice = cheapestVariant.effective_price ?? cheapestVariant.price;
    }

    // Subtitle: use item.subtitle, otherwise fallback to a generic text
    const subtitle = item.subtitle ?? subtitleFallback;

    return (
        <CollectionItemView
            id={category.id}
            slug={String(category.id)} // if no slug, use id as fallback
            title={category.title}
            subtitle={subtitle}
            imageUrl={item.image?.url ?? null}
            startingPrice={startingPrice}
            index={index}
            {...props}
        />
    );
}