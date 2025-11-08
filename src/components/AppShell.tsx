import React from 'react';
import { useAppStore } from '../stores/appStore';
import { SidebarNav } from './SidebarNav';
import { HeaderBar } from './HeaderBar';
import { MainContent } from './MainContent';
import { DrawerDetail } from './DrawerDetail';

export const AppShell: React.FC = () => {
  const sidebarOpen = useAppStore((state) => state.sidebarOpen);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <SidebarNav />
      <div className="flex flex-1 flex-col overflow-hidden">
        <HeaderBar />
        <main className="flex-1 overflow-y-auto">
          <MainContent />
        </main>
      </div>
      <DrawerDetail />
    </div>
  );
};
