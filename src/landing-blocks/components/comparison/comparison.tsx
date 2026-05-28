import { Check, X } from "lucide-react";
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
 * Comparison View (Dumb Component)
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
    <section className="py-20 bg-amber-950" id="comparison">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-amber-300 mb-2">{eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-slate-50 mb-2">{title}</h2>
          <p className="text-base text-slate-100/55">{subtitle}</p>
        </div>
        <div className="rounded-lg border border-white/10 overflow-x-auto">
          <table className="w-full border-collapse min-w-full">
            <thead>
              <tr>
                <th className="px-5 py-3.5 text-xs font-medium tracking-widest uppercase text-left border-b border-white/10 text-slate-100/45 w-2/5">
                  {criteriaLabel}
                </th>
                <th className="px-5 py-3.5 text-xs font-medium tracking-widest uppercase text-left border-b border-white/10 text-amber-300 bg-amber-500/8">
                  <span className="flex items-center gap-1">{ourLabel}</span>
                </th>
                <th className="px-5 py-3.5 text-xs font-medium tracking-widest uppercase text-left border-b border-white/10 text-slate-100/35">
                  {theirLabel}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.id}
                  className={`border-b border-white/5 transition-colors hover:bg-white/2 ${i % 2 === 0 ? "bg-white/2.5" : ""
                    }`}
                >
                  <td className="px-5 py-3.5 text-sm text-slate-100/70">
                    {row.criteria}
                  </td>
                  <td className="px-5 py-3.5 text-sm bg-amber-500/6">
                    {typeof row.ours === "boolean" ? (
                      row.ours ? (
                        <Check
                          className="w-4.5 h-4.5 text-green-400"
                          strokeWidth={2.5}
                        />
                      ) : (
                        <X
                          className="w-4.5 h-4.5 text-white/25"
                          strokeWidth={2.5}
                        />
                      )
                    ) : (
                      <span className="text-slate-50">{row.ours}</span>
                    )}
                  </td>
                  <td className="px-5 py-3.5 text-sm text-slate-100/35">
                    {typeof row.theirs === "boolean" ? (
                      row.theirs ? (
                        <Check
                          className="w-4.5 h-4.5 text-green-400"
                          strokeWidth={2.5}
                        />
                      ) : (
                        <X
                          className="w-4.5 h-4.5 text-white/25"
                          strokeWidth={2.5}
                        />
                      )
                    ) : (
                      <span>{row.theirs}</span>
                    )}
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
 * Comparison Component
 *
 * Displays a comparison table with customizable labels.
 * All text is fully externalized.
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