export interface NoteOverview {
  id: number;
  title: string;
  mainContent: string;
  createdAt: Date;
  modifiedAt: Date;
}

export interface ListNoteGroupedByDate {
  date: Date; // YYYY-MM-DD
  notes: NoteOverview[];
}
