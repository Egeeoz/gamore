'use client';
import { Menu } from 'lucide-react';
import { useSidebar } from './ui/sidebar';

export const SidebarTrigger = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <>
      <Menu onClick={toggleSidebar} className="md:hidden" />
    </>
  );
};
