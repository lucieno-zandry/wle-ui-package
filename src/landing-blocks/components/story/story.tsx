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
 * Story View — Redesigned (Dumb Component)
 *
 * Architectural split-screen layout. Image panel left, content right.
 * Decorative amber divider between panels on desktop.
 * Theme-agnostic, fully responsive.
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
    <section
      id="story"
      className="grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-zinc-900 border-t border-stone-100 dark:border-zinc-800"
    >
      {/* ── Image Panel ── */}
      <div className="relative overflow-hidden min-h-72 sm:min-h-96 lg:min-h-[640px]">
        {/* Image */}
        <img
          src={imageUrl ?? "/images/placeholder-story.jpg"}
          alt={imageCaption || defaultImageAlt}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />

        {/* Overlay: ensures any caption or edge content is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-stone-950/10 dark:to-zinc-950/20" />

        {/* Caption */}
        {imageCaption && (
          <p className="absolute bottom-4 left-4 right-4 text-[11px] font-medium tracking-widest uppercase text-white/50 text-center">
            {imageCaption}
          </p>
        )}

        {/* Decorative vertical divider — visible only lg+ */}
        <div
          className="hidden lg:block absolute top-[15%] bottom-[15%] right-0 w-px bg-gradient-to-b from-transparent via-amber-400/40 to-transparent"
          aria-hidden
        />
      </div>

      {/* ── Content Panel ── */}
      <div className="flex flex-col justify-center gap-8 py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-14">

        {/* Eyebrow */}
        {eyebrow && (
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-500">
            {eyebrow}
          </p>
        )}

        {/* Headline — supports multi-line with italic accent on second line */}
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 dark:text-zinc-50 leading-tight">
          {headlineLines.map((line, i) => (
            <span key={i} className={i === 1 ? "block italic font-medium text-emerald-800 dark:text-emerald-400 mt-1" : "block"}>
              {line}
            </span>
          ))}
        </h2>

        {/* Body */}
        <p className="text-base sm:text-lg text-stone-500 dark:text-zinc-400 leading-relaxed max-w-lg">
          {body}
        </p>

        {/* Stats row */}
        {stats.length > 0 && (
          <div className="flex flex-wrap gap-6 pt-4 border-t border-stone-100 dark:border-zinc-800">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-1 pl-4 border-l-2 border-amber-400"
              >
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-zinc-50 leading-none tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 dark:text-zinc-500">
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

// ── Smart Component ──────────────────────────────────────────────────────────

interface StoryProps {
  block: LandingBlock<StoryContent>;
  titleLabel?: string;
  defaultImageAltLabel?: string;
}

/**
 * Story Component — Redesigned
 */
export function Story({
  block,
  titleLabel = "Our Story",
  defaultImageAltLabel = "Brand story image",
}: StoryProps) {
  const content = block.content ?? ({} as StoryContent);

  return (
    <StoryView
      eyebrow={content.eyebrow}
      title={block.title ?? titleLabel}
      body={content.body ?? ""}
      imageUrl={block.image?.url ?? null}
      imageCaption={content.imageCaption}
      stats={content.stats ?? []}
      defaultImageAlt={defaultImageAltLabel}
    />
  );
}