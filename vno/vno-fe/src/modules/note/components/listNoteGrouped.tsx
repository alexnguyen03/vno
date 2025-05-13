import { ListNoteGroupedByDate, NoteOverview } from '@/src/modules/note/types/noteType';
import NoteItem from './noteItem';
import { getTimeAgo } from '../utils/noteUtils';

export const ListNoteGroupByDate: React.FC<ListNoteGroupedByDate> = ({ date, notes }) => {
  const title = getTimeAgo(date);
  return (
    <div className="bg-amber-50 mb-3">
      <div className="flex justify-start sticky top-8 bg-amber-50 mb-3">
        <p className="ms-2 text-lg font-semibold">{notes.length}</p>
        <p className="ms-2 text-lg font-semibold text-gray-500">{title}</p>
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
