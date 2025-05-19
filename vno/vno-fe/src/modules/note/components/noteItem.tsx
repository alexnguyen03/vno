import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card';
import { NoteOverview } from '../types/noteType';

const NoteItem: React.FC<{ note: NoteOverview }> = ({ note }) => (
  <Card className={`${note.color}`}>
    <CardHeader>
      <CardTitle>
        {/* {note.isPinned && <Pin size={18} className="text-amber-600" />} */}
        {note.title}
      </CardTitle>
      <CardDescription>
        Tạo: {note.createdAt.toLocaleString()} | Sửa: {note.modifiedAt.toLocaleString()}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className={`${note.color}`}>
        <div className="line-clamp-2 text-sm text-muted-foreground">{note.mainContent}</div>
        {note.color}
      </div>
    </CardContent>
  </Card>
);

export default NoteItem;
// NoteOverview interface
