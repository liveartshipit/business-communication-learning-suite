import React from 'react';
import { useAppStore } from '../stores/appStore';
import { categories } from '../data/tools';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { BookOpenIcon, LightbulbIcon, PenToolIcon, PresentationIcon, UsersIcon, BotIcon, HeartIcon, Gamepad2Icon, LibraryIcon, MenuIcon, XIcon, StarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categoryIcons: Record<string, React.ReactNode> = {
  'Core Learning': <BookOpenIcon className="w-5 h-5" strokeWidth={1.5} />,
  'Concept Builders': <LightbulbIcon className="w-5 h-5" strokeWidth={1.5} />,
  'Writing Tools': <PenToolIcon className="w-5 h-5" strokeWidth={1.5} />,
  'PresentationIcon & Speech': <PresentationIcon className="w-5 h-5" strokeWidth={1.5} />,
  'Team Communication': <UsersIcon className="w-5 h-5" strokeWidth={1.5} />,
  'AI Communication Tools': <BotIcon className="w-5 h-5" strokeWidth={1.5} />,
  'Soft Skills': <HeartIcon className="w-5 h-5" strokeWidth={1.5} />,
  'Simulations': <Gamepad2Icon className="w-5 h-5" strokeWidth={1.5} />,
  'Reading Hub': <LibraryIcon className="w-5 h-5" strokeWidth={1.5} />,
};

export const SidebarNav: React.FC = () => {
  const { sidebarOpen, setSidebarOpen } = useAppStore();
  const [activeCategory, setActiveCategory] = React.useState<string>('Core Learning');

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    const element = document.getElementById(`category-${category.replace(/\s+/g, '-').toLowerCase()}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-900/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-card border-r border-border transform transition-transform duration-250 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Logo Header */}
          <div className="flex h-16 items-center justify-between px-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-1 flex items-center justify-center">
                <BookOpenIcon className="w-5 h-5 text-primary-foreground" strokeWidth={2} />
              </div>
              <h1 className="text-lg font-heading font-semibold text-foreground">MBA Suite</h1>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden bg-transparent text-foreground hover:bg-muted hover:text-foreground"
              onClick={() => setSidebarOpen(false)}
            >
              <XIcon className="w-5 h-5" strokeWidth={1.5} />
            </Button>
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1 px-4 py-6">
            <nav className="space-y-2">
              <div className="mb-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 bg-transparent text-foreground hover:bg-primary/10 hover:text-primary font-normal"
                  onClick={() => {
                    const element = document.getElementById('favorites-section');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  <StarIcon className="w-5 h-5" strokeWidth={1.5} />
                  <span className="text-sm">My Favorites</span>
                </Button>
              </div>

              <Separator className="my-4" />

              <div className="space-y-1">
                <p className="px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  Categories
                </p>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-normal transition-colors ${
                      activeCategory === category
                        ? 'bg-primary/10 text-primary border-l-4 border-primary'
                        : 'text-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    {categoryIcons[category]}
                    <span>{category}</span>
                  </button>
                ))}
              </div>
            </nav>
          </ScrollArea>

          {/* Footer */}
          <div className="border-t border-border px-6 py-4">
            <p className="text-xs text-muted-foreground">
              © 2025 MBA Suite v1.0
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
