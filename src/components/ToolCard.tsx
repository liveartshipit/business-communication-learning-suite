import React from 'react';
import { Tool, useAppStore } from '../stores/appStore';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLinkIcon, StarIcon, InfoIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const { favorites, toggleFavorite, setSelectedTool, setDrawerOpen } = useAppStore();
  const { toast } = useToast();
  const isFavorite = favorites.includes(tool.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(tool.id);
    toast({
      title: isFavorite ? 'Removed from favorites' : 'Added to favorites',
      description: isFavorite ? `${tool.title} removed from your favorites.` : `${tool.title} added to your favorites.`,
    });
  };

  const handleDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedTool(tool);
    setDrawerOpen(true);
  };

  return (
    <Card className="group relative flex flex-col h-full transition-all duration-200 hover:shadow-lg border-border bg-card">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle className="text-base font-heading font-medium text-foreground line-clamp-2">
            {tool.title}
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            className={`shrink-0 bg-transparent hover:bg-muted ${
              isFavorite ? 'text-tertiary hover:text-tertiary' : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={handleFavoriteClick}
          >
            <StarIcon className="w-4 h-4" strokeWidth={1.5} fill={isFavorite ? 'currentColor' : 'none'} />
          </Button>
        </div>
        <CardDescription className="text-xs text-muted-foreground font-medium">
          {tool.platform}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-3">
        <p className="text-sm text-foreground line-clamp-3 mb-4">{tool.description}</p>
        <div className="flex flex-wrap gap-2">
          {tool.isFree && (
            <Badge variant="secondary" className="text-xs bg-success/10 text-success border-success/20 hover:bg-success/20">
              Free
            </Badge>
          )}
          {tool.isAI && (
            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              AI
            </Badge>
          )}
          {tool.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs bg-transparent text-muted-foreground border-border hover:bg-muted">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-3 gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 bg-transparent text-foreground border-border hover:bg-muted hover:text-foreground font-normal"
          onClick={handleDetailsClick}
        >
          <InfoIcon className="w-4 h-4 mr-2" strokeWidth={1.5} />
          Details
        </Button>
        <Button
          size="sm"
          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-normal"
          onClick={() => window.open(tool.url, '_blank')}
        >
          <ExternalLinkIcon className="w-4 h-4 mr-2" strokeWidth={1.5} />
          Visit
        </Button>
      </CardFooter>
    </Card>
  );
};
