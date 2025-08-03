import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card';
import { NoteOverview } from '../types/noteType';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/src/components/ui/dialog';
import QuillEditor from './QuillEditor';
import DeltaPreview from './quill/DeltaPreview';

interface Dimension {
  height: Number;
  width: Number;
}
const NoteItem: React.FC<{ note: NoteOverview }> = ({ note }) => {
  const [currentDimension, setCurrentDimension] = useState<Dimension>();
  const [deltaJson, setDeltaJson] = useState<string>('');
  const [jsonData, setJsonData] = useState("");

  const OnItemClicked = () => {
    setCurrentDimension({ height: 100, width: 100 });
  };
  return (
    <div
      className={`h-${currentDimension?.height} w-${currentDimension?.width}   bg-amber-100`}
      onClick={OnItemClicked}
    >
      <Dialog>
        <DialogTrigger onClick={() => setDeltaJson(JSON.stringify(note.mainContent))}>
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
              <DeltaPreview delta={note.mainContent} />
{/*
              <div className={`${note.color}`}>
                <div className="line-clamp-2 text-sm text-muted-foreground">
                  {note.mainContent.ops[0].insert.toString()}
                </div>
                {note.color}
              </div> */}
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="min-w-5/12 min-h-9/12">
          <DialogHeader>
            <DialogTitle className="grow-0">Edit - {note.id}</DialogTitle>
            <DialogDescription>{note.createdAt.toString()}</DialogDescription>
            <div className="grow-7 max-h-4/5 ">
              <QuillEditor value={deltaJson} onChange={setDeltaJson} />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NoteItem;
// NoteOverview interface
