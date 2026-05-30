import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { CollectionContentItem } from "wle-core";

// ── View Component ───────────────────────────────────────────────────────────

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
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-stone-100 dark:bg-zinc-900 cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-stone-900/20 dark:hover:shadow-black/40"
            style={{ animationDelay: `${index * 120}ms` }}
        >
            {/* Image area */}
            <div className="relative aspect-[3/4] overflow-hidden bg-stone-200 dark:bg-zinc-800">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-stone-200 to-amber-100 dark:from-zinc-800 dark:to-zinc-700" />
                )}

                {/* Permanent bottom gradient — always readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />

                {/* Hover overlay — shop CTA */}
                <div className="absolute inset-0 bg-emerald-950/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 backdrop-blur-[1px]">
                    <span className="flex items-center gap-2 text-sm font-bold tracking-[0.12em] uppercase text-white/90 border border-white/30 rounded-full px-5 py-2.5 transition-all duration-300 group-hover:border-amber-400/60 group-hover:text-amber-300">
                        {shopLabel}
                        <ArrowUpRight className="w-4 h-4" />
                    </span>
                </div>

                {/* Index number — top left */}
                <span className="absolute top-4 left-4 text-[11px] font-bold tracking-[0.18em] text-white/40">
                    {String(index + 1).padStart(2, "0")}
                </span>
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col gap-2">
                {subtitle && (
                    <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-amber-600 dark:text-amber-500">
                        {subtitle}
                    </p>
                )}
                <div className="flex items-end justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-stone-900 dark:text-zinc-50 leading-tight group-hover:text-emerald-800 dark:group-hover:text-amber-300 transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-zinc-400 whitespace-nowrap flex-shrink-0 pb-0.5">
                        {fromLabel} <strong className="text-stone-700 dark:text-zinc-300 font-semibold">{startingPrice}</strong>
                    </p>
                </div>
            </div>
        </Link>
    );
}

// ── Smart Component ──────────────────────────────────────────────────────────

type CollectionItemProps = {
    item: CollectionContentItem;
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
    let startingPrice: number | string = 0;
    if (cheapestVariant) {
        startingPrice = cheapestVariant.effective_price ?? cheapestVariant.price;
    }

    const subtitle = item.subtitle ?? subtitleFallback;

    return (
        <CollectionItemView
            id={category.id}
            slug={String(category.id)}
            title={category.title}
            subtitle={subtitle}
            imageUrl={item.image?.url ?? null}
            startingPrice={startingPrice}
            index={index}
            {...props}
        />
    );
}