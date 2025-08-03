'use client';

import { useEffect, useState } from 'react';
import { ListNoteGroupedByDate, NoteOverview } from '../types/noteType';
import { groupNotesByDate } from '../utils/noteUtils';
import { Loader2 } from 'lucide-react';
import { ListNoteGroupByDate } from './listNoteGrouped';

export const NoteList: React.FC<{ notes: NoteOverview[]; isLoading: boolean }> = ({ notes, isLoading }) => {

  const [groupedNotes, setGroupedNotes] = useState<ListNoteGroupedByDate[]>([]);
  // const [notes, setNotes] = useState<NoteOverview[]>([]);

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
  // ...phần groupNotesByDate giữ nguyên...

  return (
    <div>
      <h2>Danh sách ghi chú</h2>
      {/* <JobListingComponent notes={notes} /> */}
      {/* <h3>Kết quả HTML:</h3>
        <QuillEditor value={content} onChange={setContent} />
        <div dangerouslySetInnerHTML={{ __html: content }} /> */}

       {groupedNotes.map((group) => {
         return <ListNoteGroupByDate key={group.date.toLocaleString()} date={group.date} notes={group.notes} />;
       })}
    </div>
  );
};
