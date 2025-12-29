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

export default function NavDropdown({ title, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        className="flex items-center gap-1 hover:text-blue-600"
        onMouseEnter={() => setOpen(true)}
      >
        {title}
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent onMouseLeave={() => setOpen(false)}>
        {items.map((item, index) => (
          <DropdownMenuItem key={`${item.href}-${index}`} asChild>
            <Link href={item.href} className="w-full">
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
