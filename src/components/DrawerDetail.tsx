import React from 'react';
import { useAppStore } from '../stores/appStore';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ExternalLinkIcon, StarIcon, XIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const DrawerDetail: React.FC = () => {
  const { selectedTool, drawerOpen, setDrawerOpen, favorites, toggleFavorite } = useAppStore();
  const { toast } = useToast();

  if (!selectedTool) return null;

  const isFavorite = favorites.includes(selectedTool.id);

  const handleFavoriteClick = () => {
    toggleFavorite(selectedTool.id);
    toast({
      title: isFavorite ? 'Removed from favorites' : 'Added to favorites',
      description: isFavorite
        ? `${selectedTool.title} removed from your favorites.`
        : `${selectedTool.title} added to your favorites.`,
    });
  };

  return (
    <Dialog open={drawerOpen} onOpenChange={setDrawerOpen}>
      <DialogContent className="max-w-2xl bg-card text-card-foreground border-border">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-h3 font-heading text-foreground mb-2">
                {selectedTool.title}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground font-medium">
                {selectedTool.platform}
              </DialogDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className={`shrink-0 bg-transparent hover:bg-muted ${
                isFavorite ? 'text-tertiary hover:text-tertiary' : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={handleFavoriteClick}
            >
              <StarIcon className="w-5 h-5" strokeWidth={1.5} fill={isFavorite ? 'currentColor' : 'none'} />
            </Button>
          </div>
        </DialogHeader>

        <Separator className="my-4" />

        <div className="space-y-6">
          {/* Description */}
          <div>
            <h4 className="text-sm font-heading font-medium text-foreground mb-2">Description</h4>
            <p className="text-sm text-foreground leading-relaxed">{selectedTool.description}</p>
          </div>

          {/* Category */}
          <div>
            <h4 className="text-sm font-heading font-medium text-foreground mb-2">Category</h4>
            <Badge variant="outline" className="bg-transparent text-foreground border-border">
              {selectedTool.category}
            </Badge>
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-sm font-heading font-medium text-foreground mb-2">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {selectedTool.isFree && (
                <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                  Free
                </Badge>
              )}
              {selectedTool.isAI && (
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  AI
                </Badge>
              )}
              {selectedTool.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="bg-transparent text-muted-foreground border-border">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-normal"
              onClick={() => window.open(selectedTool.url, '_blank')}
            >
              <ExternalLinkIcon className="w-4 h-4 mr-2" strokeWidth={1.5} />
              Visit Platform
            </Button>
            <Button
              variant="outline"
              className="bg-transparent text-foreground border-border hover:bg-muted hover:text-foreground font-normal"
              onClick={() => setDrawerOpen(false)}
            >
              <XIcon className="w-4 h-4 mr-2" strokeWidth={1.5} />
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
