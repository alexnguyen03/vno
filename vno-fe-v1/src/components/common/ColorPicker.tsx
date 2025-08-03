'use client';
import * as React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/src/components/ui/popover';
import { Check } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

// Mặc định, nhưng có thể truyền qua prop
const DEFAULT_COLORS = [
  { label: 'White', value: '#f9fafb' },
  { label: 'Red', value: '#f87171' },
  { label: 'Orange', value: '#fb923c' },
  { label: 'Yellow', value: '#fde68a' },
  { label: 'Green', value: '#4ade80' },
  { label: 'Teal', value: '#2dd4bf' },
  { label: 'Sky', value: '#38bdf8' },
  { label: 'Indigo', value: '#818cf8' },
  { label: 'Purple', value: '#a78bfa' },
  { label: 'Pink', value: '#f472b6' },
  { label: 'Gray', value: '#d1d5db' },
  { label: 'Slate', value: '#64748b' },
  { label: 'Black', value: '#18181b' },
  { label: 'Lime', value: '#a3e635' },
  { label: 'Gold', value: '#facc15' },
  { label: 'Rose', value: '#f43f5e' },
];
interface ColorOption {
  label: React.ReactNode;
  value: string;
  render?: React.ReactNode;
}

interface ColorSelectProps {
  value: string;
  onChange: (color: string) => void;
  colors?: ColorOption[];
  showAllOption?: boolean;
  allLabel?: string | React.ReactNode;
  className?: string;
}

export function ColorSelect({
  value,
  onChange,
  colors = DEFAULT_COLORS,
  showAllOption = false,
  allLabel = 'All',
  className,
}: ColorSelectProps) {
  const [openPopover, setOpenPopover] = React.useState(false);
  const [openTooltip, setOpenTooltip] = React.useState(false);

  const colorOptions: ColorOption[] = showAllOption ? [{ label: allLabel, value: '' }, ...colors] : colors;

  return (
    <Popover open={openPopover} onOpenChange={setOpenPopover}>
      <Tooltip open={openTooltip}>
        <TooltipTrigger asChild>
          <PopoverTrigger onMouseOver={() => setOpenTooltip(true)} asChild>
            <button
              onMouseOver={() => setOpenTooltip(true)}
              onMouseLeave={() => setOpenTooltip(false)}
              type="button"
              className={cn(
                'w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all shadow hover:shadow-md',
                className
              )}
              style={{
                backgroundColor: value && colorOptions.find((c) => c.value === value)?.value,
              }}
              aria-label="Chọn màu"
            >
              {!value && showAllOption && (
                <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">{allLabel}</span>
              )}
            </button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Select color</p>
        </TooltipContent>
      </Tooltip>
      <PopoverContent className="w-auto p-2 bg-white dark:bg-neutral-900 border rounded shadow">
        <div className="grid grid-cols-4 gap-2">
          {colorOptions.map((color) => (
            <button
              key={color.value}
              type="button"
              className={cn(
                'w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all',
                value === color.value
                  ? 'border-black dark:border-white ring-2 ring-offset-2 ring-black dark:ring-white'
                  : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
              )}
              style={color.value ? { backgroundColor: color.value } : {}}
              aria-label={typeof color.label === 'string' ? color.label : undefined}
              onClick={() => {
                onChange(color.value);
                setOpenPopover(false);
              }}
            >
              {color.value === ''
                ? color.render ?? (
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">{color.label}</span>
                  )
                : value === color.value && <Check className="w-4 h-4 text-white dark:text-black drop-shadow" />}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
