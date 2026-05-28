import { LandingBlock, StoryContent } from "wle-core";

interface StoryViewProps {
  eyebrow?: string;
  title: string;
  body: string;
  imageUrl: string | null;
  imageCaption?: string;
  stats: Array<{ value: string; label: string }>;
  defaultImageAlt: string;
}

/**
 * Story View (Dumb Component)
 */
export function StoryView({
  eyebrow,
  title,
  body,
  imageUrl,
  imageCaption,
  stats,
  defaultImageAlt,
}: StoryViewProps) {
  const headlineLines = title.split("\n");

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-96 lg:min-h-screen bg-amber-50 border-t border-amber-200" id="story">
      <div className="relative overflow-hidden min-h-80 lg:min-h-full">
        <div className="absolute inset-0">
          <img
            src={imageUrl ?? "/images/placeholder-story.jpg"}
            alt={imageCaption || defaultImageAlt}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          {imageCaption && (
            <p className="absolute bottom-3 left-3 right-3 text-xs text-white/60 text-center tracking-widest">
              {imageCaption}
            </p>
          )}
        </div>
        <div
          className="absolute hidden lg:block top-1/4 bottom-1/4 right-0 w-1 rounded-full pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--clr-amber), transparent)",
            backgroundImage: "linear-gradient(to bottom, transparent, rgb(217, 119, 6), transparent)"
          }}
          aria-hidden
        />
      </div>

      <div className="py-20 lg:py-24 px-4 lg:px-8 flex flex-col justify-center gap-5">
        {eyebrow && <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-amber-900/60">{eyebrow}</p>}

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-amber-950">
          {headlineLines.map((line, i) => (
            <span
              key={i}
              className={i === 1 ? "text-emerald-900 italic" : ""}
            >
              {line}
              {i < headlineLines.length - 1 && <br />}
            </span>
          ))}
        </h2>

        <p className="text-base text-amber-900/70 leading-relaxed max-w-xl">
          {body}
        </p>

        {stats.length > 0 && (
          <div className="flex gap-6 flex-wrap mt-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-0.5 border-l-2 border-amber-500 pl-3">
                <span className="font-display text-2xl font-medium text-amber-950">
                  {stat.value}
                </span>
                <span className="text-xs tracking-widest uppercase text-amber-900/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

interface StoryProps {
  block: LandingBlock<StoryContent>;
  titleLabel?: string;
  defaultImageAltLabel?: string;
}

/**
 * Story Component
 *
 * Displays a story section with image and statistics.
 * All text is fully externalized.
 */
export function Story({
  block,
  titleLabel = "Our Story",
  defaultImageAltLabel = "Brand story image",
}: StoryProps) {
  const content = block.content ?? ({} as StoryContent);
  const stats = content.stats ?? [];

  return (
    <StoryView
      eyebrow={content.eyebrow}
      title={block.title ?? titleLabel}
      body={content.body ?? ""}
      imageUrl={block.image?.url ?? null}
      imageCaption={content.imageCaption}
      stats={stats}
      defaultImageAlt={defaultImageAltLabel}
    />
  );
}