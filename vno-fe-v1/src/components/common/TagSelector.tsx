'use client';
import * as React from 'react';
import { cn } from '@/src/lib/utils';
import { Toggle } from '../ui/toggle';

interface TagOption {
  label: string;
  value: string;
  color: string;
}

interface TagSelectorProps {
  tags: TagOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
  showCount?: number;
}

export function TagSelector({ tags, selected, onChange, showCount = 5 }: TagSelectorProps) {
  const [visibleCount, setVisibleCount] = React.useState(showCount);

  const handleTagClick = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 items-center">
        <div className="m text-sm font-semibold">Tags:</div>
        {tags.slice(0, visibleCount).map((tag) => {
          const isSelected = selected.includes(tag.value);

          return (
            <Toggle
              key={tag.value}
              pressed={isSelected}
              onPressedChange={() => handleTagClick(tag.value)} // toggle selection
              className={cn(
                'px-4 py-1 rounded-full border text-sm font-medium transition',
                isSelected
                  ? 'border-[#b4baff] bg-[#f6f8ff] text-[#4f5ad3]'
                  : 'border-gray-200 bg-white text-gray-800 hover:bg-gray-50'
              )}
              style={{
                borderColor: isSelected ? tag.color : undefined,
                color: isSelected ? tag.color : undefined,
              }}
            >
              {tag.label}
            </Toggle>
          );
        })}
        {visibleCount < tags.length && (
          <button
            type="button"
            onClick={() => setVisibleCount((c) => c + showCount)}
            className="px-4 py-1 rounded-full border border-gray-300 bg-white text-gray-600 text-sm font-medium hover:bg-gray-50"
          >
            more
          </button>
        )}
      </div>
    </>
  );
}
