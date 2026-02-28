import { memo } from 'react';
import Link from 'next/link';
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
  url?: string;
  rel?: string;
  target?: string;
}

interface NavItem {
  title: string;
  url?: string;
  rel?: string;
  target?: string;
  subItems?: NavSubItem[];
}

const NAV_ITEMS: NavItem[] = [
  { title: 'HEM', url: '/' },
  { title: 'MENY', url: 'meny' },
  { title: 'PIZZA', url: 'pizza' },
  {
    title: 'BESTÄLL ONLINE',
    url: '#',
    subItems: [
      {
        title: 'Beställ avhämtning',
        url: 'https://order.foodtec.se/gamore/bestall-mat?delivery_option=self_pickup',
        rel: 'noopener noreferrer',
        target: '_blank',
      },
      {
        title: 'Beställ med Foodora',
        url: 'https://www.foodora.se/restaurant/wen3/pizzeria-amore-wen3',
        rel: 'noopener noreferrer',
        target: '_blank',
      },
      {
        title: 'Beställ med Ubereats',
        url: 'https://www.ubereats.com/se/store/pizzeria-amore/ZVxnn1WoXI6-8CnyRtaBKw?srsltid=AfmBOorD0OZYEB9t2N2MSS26zbPmKLLv9u5roElQ6mV64No06ZmwVrwu',
        rel: 'noopener noreferrer',
        target: '_blank',
      },
      {
        title: 'Beställ med Wolt',
        url: 'https://wolt.com/sv/swe/stockholm/restaurant/pizzeria-amore-langholmsgatan',
        rel: 'noopener noreferrer',
        target: '_blank',
      },
    ],
  },
  {
    title: 'GELATATERIA',
    subItems: [
      { title: 'Gelato', url: 'gelato' },
      { title: 'Glassprovning', url: 'glassprovning' },
      { title: 'Vegansk gelato', url: 'vegansk-gelato' },
    ],
  },
  {
    title: 'OM OSS',
    subItems: [
      { title: 'Historia', url: 'historia' },
      { title: 'Vanliga frågor', url: 'faq' },
      { title: 'Integritetspolicy', url: 'integritetspolicy' },
    ],
  },
];

const SubMenu = memo(({ items }: { items: NavSubItem[] }) => (
  <SidebarMenuSub className="ml-2 border-l-2 border-background/20 py-1 transition-all duration-300">
    {items.map((sub: NavSubItem) => (
      <SidebarMenuSubItem key={sub.title}>
        <SidebarMenuSubButton asChild>
          <Link
            href={sub.url ?? ''}
            rel={sub.rel ?? ''}
            target={sub.target ?? ''}
            className="text-sm py-2 block text-white/60 hover:text-white hover:bg-transparent active:bg-transparent active:text-white transition-colors"
          >
            {sub.title}
          </Link>
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
                      <Link
                        href={item.url ?? ''}
                        rel={item.rel ?? ''}
                        target={item.target ?? ''}
                      >
                        {item.title}
                      </Link>
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
