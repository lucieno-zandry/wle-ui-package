import { LandingBlock } from "wle-core";
import { LucideIcon } from "./lucide-icon";

interface TrustPillar {
    id: string;
    title: string;
    description: string;
    icon: string;
}

interface TrustBarViewProps {
    pillars: TrustPillar[];
    renderIcon?: (iconName: string) => React.ReactNode;
}

/**
 * Trust Bar View — Redesigned
 * Elegant dark strip with icon+text trust pillars. Theme-agnostic.
 */
export function TrustBarView({ pillars, renderIcon }: TrustBarViewProps) {
    if (!pillars.length) return null;

    return (
        <section
            id="trust-bar"
            className="bg-emerald-950 dark:bg-zinc-950 border-b border-white/5"
        >
            <div className="max-w-5xl mx-auto px-6">
                <ul className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/6">
                    {pillars.map((pillar, i) => (
                        <li
                            key={pillar.id}
                            className="flex items-start gap-3 py-4 sm:py-5 px-4 sm:px-6 first:pl-0 last:pr-0"
                            style={{ animationDelay: `${i * 80}ms` }}
                        >
                            {/* Icon badge */}
                            <span className="mt-0.5 w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0 text-amber-400">
                                {renderIcon ? renderIcon(pillar.icon) : <span className="text-sm">📌</span>}
                            </span>

                            <div className="min-w-0">
                                <p className="text-xs sm:text-sm font-semibold text-white/90 leading-snug">
                                    {pillar.title}
                                </p>
                                <p className="text-[11px] text-white/40 leading-relaxed mt-0.5 line-clamp-2">
                                    {pillar.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

interface TrustBarProps {
    block: LandingBlock;
    renderIcon?: (iconName: string) => React.ReactNode;
}

/**
 * Trust Bar Component — Redesigned
 */
export function TrustBar({
    block,
    renderIcon = (name) => <LucideIcon name={name} />,
}: TrustBarProps) {
    const pillars: TrustPillar[] = block.content?.pillars ?? [];
    return <TrustBarView pillars={pillars} renderIcon={renderIcon} />;
}