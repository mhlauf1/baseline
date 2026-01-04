import fs from "fs";
import path from "path";
import Link from "next/link";
import { categoryFolders } from "@/lib/types";

interface Section {
  category: string;
  id: string;
}

function getSections(): Section[] {
  const sections: Section[] = [];
  const sectionsDir = path.join(process.cwd(), "sections");

  for (const category of categoryFolders) {
    const categoryPath = path.join(sectionsDir, category);

    if (!fs.existsSync(categoryPath)) continue;

    const entries = fs.readdirSync(categoryPath, { withFileTypes: true });

    for (const entry of entries) {
      // Skip .gitkeep and non-directories
      if (!entry.isDirectory()) continue;

      // Check if it has a component file
      const sectionPath = path.join(categoryPath, entry.name);
      const files = fs.readdirSync(sectionPath);
      const hasComponent = files.some((f) => f.endsWith(".tsx"));

      if (hasComponent) {
        sections.push({
          category,
          id: entry.name,
        });
      }
    }
  }

  return sections;
}

export default function Home() {
  const sections = getSections();

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white">
            Baseline
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Personal library for design references and coded sections
          </p>
        </header>

        {sections.length === 0 ? (
          <div className="border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg p-12 text-center">
            <p className="text-zinc-500 dark:text-zinc-400 mb-4">
              No sections yet
            </p>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              Add references to{" "}
              <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
                /references/
              </code>{" "}
              and build sections in{" "}
              <code className="bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
                /sections/
              </code>
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {categoryFolders.map((category) => {
              const categorySections = sections.filter(
                (s) => s.category === category
              );
              if (categorySections.length === 0) return null;

              return (
                <div key={category}>
                  <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">
                    {category}
                  </h2>
                  <div className="grid gap-2">
                    {categorySections.map((section) => (
                      <Link
                        key={section.id}
                        href={`/preview/${section.category}/${section.id}`}
                        className="block p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                      >
                        <span className="font-mono text-sm">{section.id}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
