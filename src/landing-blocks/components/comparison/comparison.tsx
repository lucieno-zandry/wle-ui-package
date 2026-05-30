import { Check, Minus } from "lucide-react";
import { ComparisonContent, LandingBlock } from "wle-core";

interface ComparisonViewProps {
    eyebrow: string;
    title: string;
    subtitle: string;
    ourLabel: string;
    theirLabel: string;
    rows: Array<{
        id: string;
        criteria: string;
        ours: string | boolean;
        theirs: string | boolean;
    }>;
    criteriaLabel: string;
}

/**
 * Comparison View — Redesigned (Dumb Component)
 *
 * Premium dark table with highlighted "ours" column and subtle row hover.
 */
export function ComparisonView({
    eyebrow,
    title,
    subtitle,
    ourLabel,
    theirLabel,
    rows,
    criteriaLabel,
}: ComparisonViewProps) {
    return (
        <section
            id="comparison"
            className="py-24 sm:py-32 bg-stone-900 dark:bg-zinc-950 border-t border-white/5"
        >
            <div className="max-w-5xl mx-auto px-6">

                {/* Header */}
                <div className="mb-12 max-w-xl">
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-400/70 mb-3">
                        {eyebrow}
                    </p>
                    <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
                        {title}
                    </h2>
                    <p className="text-sm text-white/45 leading-relaxed">{subtitle}</p>
                </div>

                {/* Table wrapper */}
                <div className="rounded-2xl border border-white/8 overflow-hidden overflow-x-auto">
                    <table className="w-full border-collapse min-w-[480px]">
                        <thead>
                            <tr className="border-b border-white/8">
                                {/* Criteria column header */}
                                <th className="w-[44%] px-6 py-4 text-left">
                                    <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/30">
                                        {criteriaLabel}
                                    </span>
                                </th>

                                {/* Our column — highlighted */}
                                <th className="w-[28%] px-6 py-4 text-left bg-amber-400/6 border-x border-amber-400/12">
                                    <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-amber-400">
                                        {ourLabel}
                                    </span>
                                </th>

                                {/* Their column */}
                                <th className="w-[28%] px-6 py-4 text-left">
                                    <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/25">
                                        {theirLabel}
                                    </span>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {rows.map((row, i) => (
                                <tr
                                    key={row.id}
                                    className="border-b border-white/5 last:border-0 transition-colors duration-200 hover:bg-white/2"
                                >
                                    {/* Criteria */}
                                    <td className="px-6 py-4">
                                        <span className="text-sm font-medium text-white/65">
                                            {row.criteria}
                                        </span>
                                    </td>

                                    {/* Ours */}
                                    <td className="px-6 py-4 bg-amber-400/4 border-x border-amber-400/8">
                                        <CellValue value={row.ours} isOurs />
                                    </td>

                                    {/* Theirs */}
                                    <td className="px-6 py-4">
                                        <CellValue value={row.theirs} isOurs={false} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

// ── Cell renderer ────────────────────────────────────────────────────────────

function CellValue({
    value,
    isOurs,
}: {
    value: string | boolean;
    isOurs: boolean;
}) {
    if (typeof value === "boolean") {
        return value ? (
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/15">
                <Check
                    className={`w-3.5 h-3.5 ${isOurs ? "text-emerald-400" : "text-emerald-500/60"}`}
                    strokeWidth={2.5}
                />
            </span>
        ) : (
            <Minus className="w-3.5 h-3.5 text-white/18" strokeWidth={2} />
        );
    }
    return (
        <span
            className={`text-sm font-medium ${isOurs ? "text-white/90" : "text-white/30"}`}
        >
            {value}
        </span>
    );
}

// ── Smart Component ──────────────────────────────────────────────────────────

interface ComparisonProps {
    block: LandingBlock<ComparisonContent>;
    eyebrowLabel?: string;
    titleLabel?: string;
    subtitleLabel?: string;
    ourLabelText?: string;
    theirLabelText?: string;
    criteriaLabelText?: string;
}

/**
 * Comparison Component — Redesigned
 */
export function Comparison({
    block,
    eyebrowLabel = "Why It Matters",
    titleLabel = "Compare",
    subtitleLabel = "See the difference",
    ourLabelText = "Our Solution",
    theirLabelText = "Competitor",
    criteriaLabelText = "Criteria",
}: ComparisonProps) {
    const content = block.content ?? ({} as ComparisonContent);

    return (
        <ComparisonView
            eyebrow={content.eyebrow ?? eyebrowLabel}
            title={block.title ?? titleLabel}
            subtitle={block.subtitle ?? subtitleLabel}
            ourLabel={content.ourLabel ?? ourLabelText}
            theirLabel={content.theirLabel ?? theirLabelText}
            rows={content.rows ?? []}
            criteriaLabel={criteriaLabelText}
        />
    );
}