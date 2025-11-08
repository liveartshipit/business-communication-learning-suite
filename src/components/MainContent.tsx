import React from 'react';
import { useAppStore } from '../stores/appStore';
import { toolsData, categories } from '../data/tools';
import { ToolCard } from './ToolCard';
import { FavoritesSection } from './FavoritesSection';

export const MainContent: React.FC = () => {
  const { searchQuery, selectedFilters } = useAppStore();

  const filteredTools = React.useMemo(() => {
    return toolsData.filter((tool) => {
      // Search filter
      const matchesSearch =
        searchQuery === '' ||
        tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.platform.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Selected filters
      const matchesFilters =
        selectedFilters.length === 0 ||
        selectedFilters.every((filter) => {
          if (filter === 'free') return tool.isFree;
          if (filter === 'ai') return tool.isAI;
          if (filter === 'writing') return tool.tags.some((tag) => tag.toLowerCase().includes('writing'));
          if (filter === 'speaking') return tool.tags.some((tag) => tag.toLowerCase().includes('speaking'));
          return true;
        });

      return matchesSearch && matchesFilters;
    });
  }, [searchQuery, selectedFilters]);

  const toolsByCategory = React.useMemo(() => {
    return categories.reduce((acc, category) => {
      acc[category] = filteredTools.filter((tool) => tool.category === category);
      return acc;
    }, {} as Record<string, typeof filteredTools>);
  }, [filteredTools]);

  return (
    <div className="container mx-auto px-6 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="relative mb-12 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-1 opacity-10" />
        <img
          src="https://c.animaapp.com/mhqg1oolXf4Wej/img/ai_1.png"
          alt="communication abstract pattern"
          className="absolute inset-0 w-full h-full object-cover opacity-5"
          loading="lazy"
        />
        <div className="relative px-8 py-16 text-center">
          <h1 className="text-h1 font-heading mb-4 text-foreground">
            Ultimate Business Communication Tools & Learning Directory
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore curated learning tools, AI assistants, and simulations to master professional communication in 2025.
          </p>
        </div>
      </div>

      {/* Favorites Section */}
      <FavoritesSection />

      {/* Categories */}
      {categories.map((category) => {
        const tools = toolsByCategory[category];
        if (tools.length === 0) return null;

        return (
          <section
            key={category}
            id={`category-${category.replace(/\s+/g, '-').toLowerCase()}`}
            className="mb-16"
          >
            <h2 className="text-h2 font-heading mb-6 text-foreground">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>
        );
      })}

      {/* No Results */}
      {filteredTools.length === 0 && (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground">
            No tools found matching your search and filters.
          </p>
        </div>
      )}
    </div>
  );
};
