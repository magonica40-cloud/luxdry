import type { BlogBlock } from '@/data/blog';

export default function BlogBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="text-slate-700 leading-[1.85] text-lg">
      {blocks.map((block, i) => {
        if (block.type === 'heading') {
          return (
            <h2
              key={i}
              className="text-2xl md:text-3xl font-black text-slate-900 mt-12 mb-5 leading-tight"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === 'list') {
          return (
            <ul key={i} className="space-y-3 my-6">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-brand-cyan font-bold shrink-0 mt-0.5" aria-hidden="true">
                    &#8594;
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === 'quote') {
          return (
            <blockquote
              key={i}
              className="my-10 pl-6 border-l-4 border-brand-cyan text-xl md:text-2xl font-bold text-slate-800 italic"
            >
              {block.text}
            </blockquote>
          );
        }

        return (
          <p key={i} className="my-6">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
