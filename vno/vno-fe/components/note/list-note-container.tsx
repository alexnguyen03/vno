import { ListNoteGroupedByDate, NoteOverview } from '@/types/note-overview';
import { Badge } from 'lucide-react';
import { getTimeAgo } from './utils';
import NoteItem from './note-item';

export const NoteItemContainer: React.FC<ListNoteGroupedByDate> = ({ date, notes }) => {
  let title = getTimeAgo(date);
  return (
    <div className="bg-amber-50 mb-3">
      <div className="flex justify-start sticky top-8 bg-amber-50 mb-3">
        <p className="ms-2 text-lg font-semibold">
          <Badge>5</Badge>
        </p>
        <p className="ms-2 text-lg font-semibold text-amber-500">{title}</p>
        <p className="ms-2 text-lg italic">{date.toLocaleString()}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
        {notes.slice(0, 5).map((note: NoteOverview) => (
          // <div className="" key={note.id}>
          //   key={note.id}
          // </div>
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};
