'use client';
import { Loader2 } from 'lucide-react';
import { ListNoteGroupedByDate, NoteOverview } from '../../types/note-overview';
import { groupNotesByDate } from './utils';
import { NoteItemContainer } from './list-note-container';
import { useEffect, useState } from 'react';

interface NoteListProps {
  notes: NoteOverview[];
  isLoading: boolean;
}

export const NoteList: React.FC<NoteListProps> = ({ notes, isLoading }) => {
  const [groupedNotes, setGroupedNotes] = useState<ListNoteGroupedByDate[]>([]);

  useEffect(() => {
    const grouped = groupNotesByDate(notes);
    setGroupedNotes(grouped);
  }, [notes]);
  if (isLoading) {
    // Loading spinner (hoặc có thể dùng Skeleton)
    return (
      <div className="flex justify-center py-8">
        <Loader2 className="animate-spin w-8 h-8 text-primary" />
        {/* Hoặc: <Spinner size="medium" /> nếu bạn dùng component Spinner riêng */}
      </div>
    );
  }

  if (notes.length === 0) {
    return <div className="text-center text-muted-foreground py-8">Không có ghi chú nào.</div>;
  }
  return (
    <div className="relative">
      <h1 className="text-2xl font-bold sticky top-0  bg-cyan-50 sm:text-center lg:text-left z-100">
        Danh sách ghi chú
      </h1>
      {groupedNotes.map((group) => {
        return <NoteItemContainer key={group.date.toLocaleString()} date={group.date} notes={group.notes} />;
      })}
    </div>
  );
};
