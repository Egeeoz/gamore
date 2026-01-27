export interface NavDropdownProps {
  title: string;
  items: NavItem[];
  rel?: string;
  target?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
