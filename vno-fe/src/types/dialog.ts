export type DialogContextType = {
  openDialog: (content: string, title?: string) => void;
  closeDialog: () => void;
};
