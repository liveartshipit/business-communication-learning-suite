import { create } from 'zustand';

export interface Tool {
  id: string;
  title: string;
  platform: string;
  description: string;
  category: string;
  tags: string[];
  url: string;
  isFree: boolean;
  isAI: boolean;
}

interface AppState {
  sidebarOpen: boolean;
  searchQuery: string;
  selectedFilters: string[];
  favorites: string[];
  selectedTool: Tool | null;
  drawerOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  setSearchQuery: (query: string) => void;
  toggleFilter: (filter: string) => void;
  toggleFavorite: (toolId: string) => void;
  setSelectedTool: (tool: Tool | null) => void;
  setDrawerOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  sidebarOpen: true,
  searchQuery: '',
  selectedFilters: [],
  favorites: [],
  selectedTool: null,
  drawerOpen: false,
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  toggleFilter: (filter) =>
    set((state) => ({
      selectedFilters: state.selectedFilters.includes(filter)
        ? state.selectedFilters.filter((f) => f !== filter)
        : [...state.selectedFilters, filter],
    })),
  toggleFavorite: (toolId) =>
    set((state) => ({
      favorites: state.favorites.includes(toolId)
        ? state.favorites.filter((id) => id !== toolId)
        : [...state.favorites, toolId],
    })),
  setSelectedTool: (tool) => set({ selectedTool: tool }),
  setDrawerOpen: (open) => set({ drawerOpen: open }),
}));
