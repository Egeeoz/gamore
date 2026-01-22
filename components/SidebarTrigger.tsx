'use client';
import { Menu, X } from 'lucide-react';
import { useSidebar } from './ui/sidebar';

export const SidebarX = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <>
      <X onClick={toggleSidebar} className="md:hidden" size={25} />
    </>
  );
};

export const SidebarTrigger = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <>
      <Menu onClick={toggleSidebar} className="md:hidden" size={25} />
    </>
  );
};
