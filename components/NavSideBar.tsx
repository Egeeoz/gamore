import React, { memo } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { SidebarX } from './SidebarTrigger';

interface NavSubItem {
  title: string;
  url: string;
}

interface NavItem {
  title: string;
  url: string;
  subItems?: NavSubItem[];
}

const NAV_ITEMS: NavItem[] = [
  { title: 'HEM', url: '#' },
  {
    title: 'BESTÄLL ONLINE',
    url: '#',
    subItems: [
      { title: 'Beställ Avhämtning', url: '/' },
      { title: 'Beställ Online', url: '/' },
    ],
  },
  {
    title: 'GELATERIA',
    url: '#',
    subItems: [
      { title: 'Glassprovning', url: '/' },
      { title: 'Glasstårta', url: '/' },
      { title: 'Vegansk Gelato', url: '/' },
      { title: 'Tårta', url: '/' },
    ],
  },
  {
    title: 'CATERING',
    url: '#',
    subItems: [
      { title: 'Vegansk Catering', url: '/' },
      { title: 'Gelato Catering', url: '/' },
      { title: 'Wraps Catering', url: '/' },
    ],
  },
  {
    title: 'OM OSS',
    url: '#',
    subItems: [
      { title: 'Kontakta oss', url: '/' },
      { title: 'Historia', url: '/' },
      { title: 'Vanliga frågor', url: '/' },
      { title: 'Integritetspolicy', url: '/' },
    ],
  },
  { title: 'SMÖRGÅSTÅRTA', url: '#' },
  { title: 'PIZZA', url: '#' },
];

const SubMenu = memo(({ items }: { items: NavSubItem[] }) => (
  <SidebarMenuSub className="ml-2 border-l-2 border-background/20 py-1 transition-all duration-300">
    {items.map((sub: NavSubItem) => (
      <SidebarMenuSubItem key={sub.title}>
        <SidebarMenuSubButton asChild>
          <a
            href={sub.url}
            className="text-sm py-2 block text-white/60 hover:text-white hover:bg-transparent active:bg-transparent active:text-white transition-colors"
          >
            {sub.title}
          </a>
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    ))}
  </SidebarMenuSub>
));
SubMenu.displayName = 'SubMenu';

export default function NavSidebar() {
  const buttonStyles = `
    w-full justify-between py-6 uppercase tracking-wider text-[16px] font-medium
    bg-transparent text-white/80
    hover:bg-transparent hover:text-white
    active:bg-transparent active:text-white
    data-[state=open]:bg-transparent data-[state=open]:text-white
    focus:bg-transparent focus:text-white
    focus-visible:ring-0 focus-visible:ring-offset-0
    select-none transition-all
  `;

  return (
    <Sidebar variant="inset" className="border-none">
      <SidebarContent className="bg-[#252525] text-white overflow-x-hidden">
        <div className="flex items-center justify-between px-4 pt-3">
          <h2 className="font-bold tracking-widest uppercase text-white">
            GELATERIA AMORE
          </h2>
          <SidebarX />
        </div>

        <SidebarGroup className="border-b border-t border-background/20 p-2">
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_ITEMS.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subItems ? (
                    <Collapsible className="group/collapsible w-full">
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className={buttonStyles}>
                          <span>{item.title}</span>
                          <ChevronDown className="ml-auto h-4 w-4 transition-transform duration-300 group-data-[state=open]/collapsible:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>

                      <CollapsibleContent className="overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                        <SubMenu items={item.subItems} />
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild className={buttonStyles}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
