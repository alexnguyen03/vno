import { Loader2 } from "lucide-react";
import NoteItem from "./note-item";
import NoteOverview from "../../types/note-overview";

interface NoteListProps {
  notes: NoteOverview[];
  isLoading: boolean;
}

export const NoteList: React.FC<NoteListProps> = ({ notes, isLoading }) => {
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
    return (
      <div className="text-center text-muted-foreground py-8">
        Không có ghi chú nào.
      </div>
    );
  }

  return (
    <div className="grid gap-4 relative">
      <h1 className="text-2xl font-bold sticky top-0 bg-cyan-50">
        Danh sách ghi chú
      </h1>

      {notes.map((note) => (
        // <div className="" key={note.id}>
        //   key={note.id}
        // </div>
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};
