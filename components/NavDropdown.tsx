'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { NavDropdownProps } from '@/types/types';

interface NavDropdownPropsExtended extends NavDropdownProps {
  isActive?: boolean;
  pathname?: string;
}

export default function NavDropdown({
  title,
  items,
  rel = '',
  target = '',
  isActive = false,
  pathname = '',
}: NavDropdownPropsExtended) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenuTrigger
        className={`flex items-center gap-1 hover:text-amber-dark ease-in-out transition cursor-pointer outline-none focus:outline-none ${
          isActive ? 'border-b-2 border-amber-dark' : ''
        }`}
        onMouseEnter={() => setOpen(true)}
      >
        {title}
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent onMouseLeave={() => setOpen(false)}>
        {items.map((item, index) => {
          const isItemActive =
            pathname === `/${item.href}` ||
            pathname.startsWith(`/${item.href}/`);

          return (
            <DropdownMenuItem
              key={`${item.href}-${index}`}
              asChild
              className="cursor-pointer"
            >
              <Link
                href={item.href}
                className={`w-full ${
                  isItemActive ? 'text-amber-dark font-semibold' : ''
                }`}
                rel={rel}
                target={target}
              >
                {item.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
