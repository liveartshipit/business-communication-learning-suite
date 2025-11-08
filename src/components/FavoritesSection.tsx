import React from 'react';
import { useAppStore } from '../stores/appStore';
import { toolsData } from '../data/tools';
import { ToolCard } from './ToolCard';
import { StarIcon } from 'lucide-react';

export const FavoritesSection: React.FC = () => {
  const favorites = useAppStore((state) => state.favorites);

  const favoriteTools = React.useMemo(() => {
    return toolsData.filter((tool) => favorites.includes(tool.id));
  }, [favorites]);

  if (favoriteTools.length === 0) {
    return null;
  }

  return (
    <section id="favorites-section" className="mb-16 scroll-mt-8">
      <div className="flex items-center gap-3 mb-6">
        <StarIcon className="w-6 h-6 text-tertiary" strokeWidth={1.5} fill="currentColor" />
        <h2 className="text-h2 font-heading text-foreground">My Favorites</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favoriteTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
};
