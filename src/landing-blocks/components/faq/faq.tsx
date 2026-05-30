import { Plus, Minus } from "lucide-react";
import { FaqContent, LandingBlock } from "wle-core";

interface FaqViewProps {
    eyebrow?: string;
    title: string;
    items: Array<{ id: string; question: string; answer: string }>;
    openId: string | null;
    onToggle: (id: string) => void;
}

/**
 * FAQ View — Redesigned (Dumb Component)
 *
 * Minimal numbered accordion. Theme-agnostic.
 */
export function FaqView({ eyebrow, title, items, openId, onToggle }: FaqViewProps) {
    return (
        <section
            id="faq"
            className="py-24 sm:py-32 bg-stone-50 dark:bg-zinc-950 border-t border-stone-100 dark:border-zinc-900"
        >
            <div className="max-w-3xl mx-auto px-6">

                {/* Header */}
                <div className="mb-14">
                    {eyebrow && (
                        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-500 mb-3">
                            {eyebrow}
                        </p>
                    )}
                    <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 dark:text-zinc-50 leading-tight">
                        {title}
                    </h2>
                </div>

                {/* Accordion */}
                <div role="list" className="flex flex-col">
                    {items.map((item, i) => {
                        const isOpen = openId === item.id;
                        const num = String(i + 1).padStart(2, "0");

                        return (
                            <div
                                key={item.id}
                                role="listitem"
                                className="border-t border-stone-200 dark:border-zinc-800 last:border-b"
                            >
                                <button
                                    className="w-full flex items-start gap-5 py-6 text-left group"
                                    onClick={() => onToggle(item.id)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${item.id}`}
                                >
                                    {/* Number */}
                                    <span className="text-[11px] font-bold tracking-widest text-stone-300 dark:text-zinc-600 mt-1 flex-shrink-0 w-6 tabular-nums group-hover:text-amber-500 dark:group-hover:text-amber-500 transition-colors duration-300">
                                        {num}
                                    </span>

                                    {/* Question */}
                                    <span className="flex-1 font-display text-lg sm:text-xl font-semibold text-stone-800 dark:text-zinc-100 leading-snug group-hover:text-stone-950 dark:group-hover:text-white transition-colors duration-200">
                                        {item.question}
                                    </span>

                                    {/* Toggle icon */}
                                    <span className="flex-shrink-0 mt-1 w-6 h-6 rounded-full border border-stone-200 dark:border-zinc-700 flex items-center justify-center transition-all duration-300 group-hover:border-amber-400/60 group-hover:bg-amber-400/8">
                                        {isOpen ? (
                                            <Minus className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" strokeWidth={2.5} />
                                        ) : (
                                            <Plus className="w-3.5 h-3.5 text-stone-400 dark:text-zinc-500 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-200" strokeWidth={2.5} />
                                        )}
                                    </span>
                                </button>

                                {/* Answer — animated expand */}
                                <div
                                    id={`faq-answer-${item.id}`}
                                    aria-hidden={!isOpen}
                                    style={{
                                        maxHeight: isOpen ? "480px" : "0px",
                                        overflow: "hidden",
                                        transition: "max-height 0.38s cubic-bezier(0.4, 0, 0.2, 1)",
                                    }}
                                >
                                    <p className="pl-11 pb-7 text-base text-stone-500 dark:text-zinc-400 leading-relaxed">
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

// ── Smart Component ──────────────────────────────────────────────────────────

interface FaqProps {
    block: LandingBlock<FaqContent>;
    titleLabel?: string;
    openId?: string | null;
    onToggle?: (id: string) => void;
}

/**
 * FAQ Component — Redesigned
 */
export function Faq({
    block,
    titleLabel = "Frequently Asked Questions",
    openId = null,
    onToggle = () => {},
}: FaqProps) {
    const content = block.content ?? ({} as FaqContent);

    return (
        <FaqView
            eyebrow={content.eyebrow}
            title={block.title ?? titleLabel}
            items={content.items ?? []}
            openId={openId}
            onToggle={onToggle}
        />
    );
}