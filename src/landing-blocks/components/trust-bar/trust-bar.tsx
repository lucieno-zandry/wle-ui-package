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
 * Trust Bar View (Dumb Component)
 */
export function TrustBarView({
  pillars,
  renderIcon,
}: TrustBarViewProps) {
  if (!pillars.length) return null;

  return (
    <section className="bg-emerald-900 py-4 sm:py-6 border-b border-white/6" id="trust-bar">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-3">
        {pillars.map((pillar, i) => (
          <div
            key={pillar.id}
            className="flex items-start gap-3 animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}>
            <span className="w-9 h-9 rounded-md bg-white/8 flex items-center justify-center flex-shrink-0">
              {renderIcon
                ? renderIcon(pillar.icon)
                : <span className="text-base">📌</span>}
            </span>
            <div>
              <p className="text-xs sm:text-sm font-medium text-white">
                {pillar.title}
              </p>
              <p className="text-xs text-white/55 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

interface TrustBarProps {
  block: LandingBlock;
  renderIcon?: (iconName: string) => React.ReactNode;
}

/**
 * Trust Bar Component
 *
 * Displays trust pillars with optional custom icon rendering.
 * All content is fully externalized.
 */
export function TrustBar({ block, renderIcon = (name) => <LucideIcon name={name} /> }: TrustBarProps) {
  const pillars: TrustPillar[] = block.content?.pillars ?? [];

  return <TrustBarView
    pillars={pillars}
    renderIcon={renderIcon} />;
}