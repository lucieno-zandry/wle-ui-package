import { ChevronDown } from "lucide-react";
import { FaqContent, LandingBlock } from "wle-core";

interface FaqViewProps {
  eyebrow?: string;
  title: string;
  items: Array<{ id: string; question: string; answer: string }>;
  openId: string | null;
  onToggle: (id: string) => void;
}

/**
 * FAQ View (Dumb Component)
 */
export function FaqView({
  eyebrow,
  title,
  items,
  openId,
  onToggle,
}: FaqViewProps) {
  return (
    <section className="py-20 bg-white border-t border-amber-200" id="faq">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-8">
          {eyebrow && <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-amber-900/60 mb-2">{eyebrow}</p>}
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-amber-950">{title}</h2>
        </div>
        <div className="flex flex-col divide-y divide-amber-200 border-y border-amber-200" role="list">
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} role="listitem">
                <button
                  className="w-full py-5 px-1 flex items-center justify-between gap-4 text-left cursor-pointer hover:text-emerald-900 transition-colors"
                  onClick={() => onToggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="font-display text-lg font-medium text-amber-950 transition-colors">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4.5 h-4.5 text-amber-900/50 flex-shrink-0 transition-all duration-300 ${isOpen ? "rotate-180 text-emerald-900" : ""
                      }`}
                    strokeWidth={1.5}
                  />
                </button>
                <div
                  id={`faq-answer-${item.id}`}
                  className="overflow-hidden"
                  aria-hidden={!isOpen}
                  style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                >
                  <p className="pb-5 text-base text-amber-900/70 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface FaqProps {
  block: LandingBlock<FaqContent>;
  titleLabel?: string;
  openId?: string | null;
  onToggle?: (id: string) => void;
}

/**
 * FAQ Component
 *
 * Displays FAQ items with expandable answers.
 * All text and state management are fully externalized.
 *
 * @param block - The landing block
 * @param titleLabel - Fallback title (default: "Frequently Asked Questions")
 * @param openId - ID of currently open item
 * @param onToggle - Callback when item is toggled
 */
export function Faq({
  block,
  titleLabel = "Frequently Asked Questions",
  openId = null,
  onToggle = () => { },
}: FaqProps) {
  const content = block.content ?? ({} as FaqContent);
  const items = content.items ?? [];

  return (
    <FaqView
      eyebrow={content.eyebrow}
      title={block.title ?? titleLabel}
      items={items}
      openId={openId}
      onToggle={onToggle}
    />
  );
}