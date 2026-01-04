import { notFound } from "next/navigation";
import { categoryFolders } from "@/lib/types";
import type { CategoryFolder } from "@/lib/types";

interface PreviewPageProps {
  params: Promise<{
    category: string;
    section: string;
  }>;
}

export default async function PreviewPage({ params }: PreviewPageProps) {
  const { category, section } = await params;

  // Validate category
  if (!categoryFolders.includes(category as CategoryFolder)) {
    notFound();
  }

  // Try to dynamically import the section component
  try {
    // Convert section ID to component name (e.g., "hero-001" -> "Hero001")
    const componentName = section
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");

    const SectionComponent = (
      await import(`@/sections/${category}/${section}/${componentName}`)
    ).default;

    return (
      <main className="min-h-screen">
        <SectionComponent />
      </main>
    );
  } catch {
    // Section doesn't exist yet
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Section Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400">
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              {category}/{section}
            </code>{" "}
            does not exist yet.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Create it at{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">
              /sections/{category}/{section}/
            </code>
          </p>
        </div>
      </main>
    );
  }
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; section: string }>;
}) {
  return params.then(({ category, section }) => ({
    title: `${section} | ${category} | Baseline`,
  }));
}
