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
 * Collections Block Component
 *
 * Displays a grid of collection items from a LandingBlock.
 * All text labels are props-based, making it fully reusable without translation dependencies.
 *
 * @param block - The landing block containing collection items
 * @param fallbackEyebrow - Top label (default: "Explore our range")
 * @param fromLabel - Price label prefix (default: "From")
 * @param shopLabel - Call-to-action label (default: "Shop")
 * @param subtitleFallback - Default subtitle for items without one (default: "Featured Collection")
 * @param renderItem - Custom item renderer (optional)
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
    <section className="py-20 bg-amber-50">
      <div className="max-w-5xl mx-auto px-4 mb-12">
        <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-amber-900/60 mb-2">{eyebrow}</p>
        <h2 className="text-3xl sm:text-4xl font-display font-medium text-amber-950 mb-3">{block.title}</h2>
        <p className="text-base text-amber-900/70">{block.subtitle}</p>
      </div>
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-5">
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
    </section>
  );
}