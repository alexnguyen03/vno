interface DeltaOp {
  insert: string | object;
  attributes?: { [key: string]: any };
}

export interface Delta {
  ops: DeltaOp[];
}

export interface NoteOverview {
  id: number;
  title: string;
  mainContent: Delta; // Lưu trực tiếp object Delta
  createdAt: Date; // Nếu bạn parse từ string thành Date object
  modifiedAt: Date;
  isPinned: boolean;
  color: string;
}

export interface ListNoteGroupedByDate {
  date: Date; // YYYY-MM-DD
  notes: NoteOverview[];
}
