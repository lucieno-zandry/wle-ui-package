import { Link } from "react-router";
import { ArrowRight } from "lucide-react";


// ----------------------------------------------------------------------------
// View Component (dumb)
// ----------------------------------------------------------------------------
type CollectionItemViewProps = {
    id: number;                 // category id
    slug: string;              // category slug for the link
    title: string;             // category title
    subtitle: string | null;   // from item.subtitle
    imageUrl: string | null;   // from item.image.url
    startingPrice: number;     // cheapest variant's effective price (or price)
    index: number;             // animation delay index
    formatMoney: (value: number) => string;
    linkTo: string;
    fromLabel: string;
    shopLabel: string;
};

export function CollectionItemView({
    slug,
    title,
    subtitle,
    imageUrl,
    startingPrice,
    index,
    formatMoney,
    linkTo,
    fromLabel,
    shopLabel
}: CollectionItemViewProps) {
    return (
        <Link
            to={linkTo}
            className="collection-card"
            style={{ animationDelay: `${index * 120}ms` }}
        >
            {/* Image */}
            <div className="collection-card__img-wrap">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="collection-card__img"
                        loading="lazy"
                    />
                ) : (
                    <div className="collection-card__img collection-card__img--placeholder" />
                )}
                <div className="collection-card__img-overlay" />
            </div>

            {/* Body */}
            <div className="collection-card__body">
                <div>
                    {subtitle && (
                        <p className="collection-card__subtitle">
                            {subtitle}
                        </p>
                    )}
                    <h3 className="collection-card__title">
                        {title}
                    </h3>
                </div>

                <div className="collection-card__footer">
                    <span className="collection-card__price">
                        {fromLabel} {formatMoney(startingPrice)}
                    </span>

                    <span className="collection-card__cta">
                        {shopLabel}{" "}
                        <ArrowRight className="w-3.5 h-3.5 ml-1 inline-item" />
                    </span>
                </div>
            </div>
        </Link>
    );
}