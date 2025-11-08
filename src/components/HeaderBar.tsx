import React from 'react';
import { useAppStore } from '../stores/appStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MenuIcon, SearchIcon, FilterIcon, UserIcon, SettingsIcon, LogOutIcon } from 'lucide-react';

export const HeaderBar: React.FC = () => {
  const { sidebarOpen, setSidebarOpen, searchQuery, setSearchQuery, selectedFilters, toggleFilter } = useAppStore();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-card px-6">
      {/* Mobile MenuIcon Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden bg-transparent text-foreground hover:bg-muted hover:text-foreground"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <MenuIcon className="w-5 h-5" strokeWidth={1.5} />
      </Button>

      {/* SearchIcon */}
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
          <Input
            type="search"
            placeholder="SearchIcon tools, courses, and resources..."
            className="pl-10 bg-background text-foreground border-border focus:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* FilterIcon Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2 bg-background text-foreground border-border hover:bg-muted hover:text-foreground font-normal">
            <FilterIcon className="w-4 h-4" strokeWidth={1.5} />
            <span className="hidden sm:inline">Filters</span>
            {selectedFilters.length > 0 && (
              <span className="ml-1 rounded-full bg-primary text-primary-foreground px-2 py-0.5 text-xs font-medium">
                {selectedFilters.length}
              </span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 bg-popover text-popover-foreground border-border">
          <DropdownMenuLabel className="text-foreground">FilterIcon by</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => toggleFilter('free')}
            className={`cursor-pointer ${selectedFilters.includes('free') ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted hover:text-foreground'}`}
          >
            Free Only
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => toggleFilter('ai')}
            className={`cursor-pointer ${selectedFilters.includes('ai') ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted hover:text-foreground'}`}
          >
            AI Tools
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => toggleFilter('writing')}
            className={`cursor-pointer ${selectedFilters.includes('writing') ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted hover:text-foreground'}`}
          >
            Writing
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => toggleFilter('speaking')}
            className={`cursor-pointer ${selectedFilters.includes('speaking') ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted hover:text-foreground'}`}
          >
            Speaking
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* UserIcon MenuIcon */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full bg-transparent hover:bg-muted">
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-primary text-primary-foreground">MB</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 bg-popover text-popover-foreground border-border">
          <DropdownMenuLabel className="text-foreground">My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer text-foreground hover:bg-muted hover:text-foreground">
            <UserIcon className="mr-2 w-4 h-4" strokeWidth={1.5} />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer text-foreground hover:bg-muted hover:text-foreground">
            <SettingsIcon className="mr-2 w-4 h-4" strokeWidth={1.5} />
            SettingsIcon
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer text-foreground hover:bg-muted hover:text-foreground">
            <LogOutIcon className="mr-2 w-4 h-4" strokeWidth={1.5} />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};
