import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { SidebarX } from './SidebarTrigger';

const items = [
  {
    title: 'HEM',
    url: '#',
  },
  {
    title: 'BESTÄLL ONLINE',
    url: '#',
  },
  {
    title: 'GELATERIA',
    url: '#',
  },
  {
    title: 'SMÖRGÅSTÅRTA',
    url: '#',
  },
  {
    title: 'CATERING',
    url: '#',
  },
  {
    title: 'OM OSS',
    url: '#',
  },
];

export function NavSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarContent>
        <SidebarGroup className="flex flex-row">
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarX />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
