import Reveal from "@/components/Reveal";

export type TimelineItem = {
  date: string;
  title: string;
  place: string;
  description?: string;
};

// CV-style list: date in a narrow left column, title + place (and an
// optional line of detail) on the right. Used for Education and Experience.
export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="flex flex-col">
      {items.map((item, i) => (
        <li key={`${item.date}-${item.title}`} className="border-b border-border last:border-b-0">
          <Reveal delay={i * 0.06} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr] sm:gap-8">
            <p className="text-sm text-muted">{item.date}</p>
            <div>
              <h3 className="font-display text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="text-sm text-muted">{item.place}</p>
              {item.description && (
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              )}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
