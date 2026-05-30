import { CollectionContent, LandingBlock } from "wle-core";
import { CollectionItem } from "./collection-item";

interface CollectionsProps {
    block: LandingBlock<CollectionContent>;
    fallbackEyebrow?: string;
    fromLabel?: string;
    shopLabel?: string;
    subtitleFallback?: string;
    renderItem?: (item: any, index: number) => React.ReactNode;
}

/**
 * Collections Block — Redesigned
 *
 * Editorial grid layout with refined header and animated cards.
 * Theme-agnostic, fully responsive.
 */
export function Collections({
    block,
    fallbackEyebrow = "Explore our range",
    fromLabel = "From",
    shopLabel = "Shop",
    subtitleFallback = "Featured Collection",
    renderItem,
}: CollectionsProps) {
    const items = block.content?.items ?? [];
    const eyebrow = block.content?.eyebrow ?? fallbackEyebrow;

    return (
        <section className="py-24 sm:py-32 bg-stone-50 dark:bg-zinc-950 border-t border-stone-100 dark:border-zinc-900">
            <div className="max-w-5xl mx-auto px-6">

                {/* Section header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
                    <div>
                        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-500 mb-3">
                            {eyebrow}
                        </p>
                        <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 dark:text-zinc-50 leading-tight">
                            {block.title}
                        </h2>
                    </div>
                    {block.subtitle && (
                        <p className="text-sm text-stone-500 dark:text-zinc-400 max-w-xs sm:text-right leading-relaxed">
                            {block.subtitle}
                        </p>
                    )}
                </div>

                {/* Hairline separator */}
                <div className="w-full h-px bg-stone-200 dark:bg-zinc-800 mb-10" />

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                    {items.map((item, idx) =>
                        renderItem ? (
                            renderItem(item, idx)
                        ) : (
                            <CollectionItem
                                key={item.id}
                                item={item}
                                index={idx}
                                fromLabel={fromLabel}
                                shopLabel={shopLabel}
                                subtitleFallback={subtitleFallback}
                                linkTo={`/category/${item.category_id}`}
                            />
                        )
                    )}
                </div>
            </div>
        </section>
    );
}