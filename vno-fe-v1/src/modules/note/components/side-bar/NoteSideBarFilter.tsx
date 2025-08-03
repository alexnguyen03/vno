'ues client';

import { ColorSelect } from '@/src/components/common/ColorPicker';
import { TagSelector } from '@/src/components/common/TagSelector';
import { Button } from '@/src/components/ui/button';
import { Calendar } from '@/src/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/src/components/ui/popover';
import { Toggle } from '@/src/components/ui/toggle';
import { cn } from '@/src/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';

const TAGS = [
  { label: 'Airbnb', value: 'airbnb', color: '#f87171' },
  { label: 'Stripe', value: 'stripe', color: '#60a5fa' },
  { label: 'Uber', value: 'uber', color: '#6b7280' },
  // Thêm tag tuỳ ýconst TAGS = [
  { label: 'Men', value: 'men', color: '#4f5ad3' },
  { label: 'Home', value: 'home', color: '#a855f7' },
  { label: 'Sports & Fitness', value: 'sports', color: '#06b6d4' },
  { label: 'Health & Wellness', value: 'health', color: '#10b981' },
  { label: 'Tech', value: 'tech', color: '#f59e42' },
  { label: 'Gaming', value: 'gaming', color: '#f43f5e' },
  { label: 'Outdoors', value: 'outdoors', color: '#22d3ee' },
  { label: 'Women', value: 'women', color: '#ec4899' },
  { label: 'Pets', value: 'pets', color: '#fbbf24' },
  { label: 'Beauty', value: 'beauty', color: '#eab308' },
  { label: 'Jewelery', value: 'jewelery', color: '#a3e635' },
  { label: 'Travel & Experiences', value: 'travel', color: '#818cf8' },
  { label: 'Collectibles', value: 'collectibles', color: '#f472b6' },
  { label: 'Art', value: 'art', color: '#f87171' },
];
export const NoteSideBarFilter = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [color, setColor] = useState('#f9fafb');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  return (
    <div className="px-2">
      <div className="sticky  top-0 right-0 left-0">
        <div className="flex justify-between items-center gap-2 mb-2">
          <div className="bg-amber-50">
            <Toggle>Show pinned</Toggle>
          </div>
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(' justify-start text-left font-normal', !date && 'text-muted-foreground')}
                >
                  <CalendarIcon />
                  {date ? format(date, 'PPP') : null}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
            <ColorSelect value={color} onChange={setColor} showAllOption allLabel={'All'} />
          </div>
        </div>
        <TagSelector tags={TAGS} selected={selectedTags} onChange={setSelectedTags} showCount={5} />
      </div>
      <div className="">
        <div className="mt-4 text-sm text-gray-600">
          Đã chọn: {selectedTags.length ? selectedTags.join(', ') : 'Không có'}
        </div>
      </div>
    </div>
  );
};

export default NoteSideBarFilter;
