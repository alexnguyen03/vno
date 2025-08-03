import React, { createContext, useContext, useState } from 'react';
import { Dialog, Portal, Button, CloseButton, useDialog, UseDialogReturn } from '@chakra-ui/react';

interface DialogContextType {
  dialog: UseDialogReturn;
  openDialog: (type: string, content: React.ReactNode) => void;
  closeDialog: () => void;
  dialogType: string | null;
  dialogContent: React.ReactNode | null;
}

const DialogContext = createContext<DialogContextType | null>(null);

export const DialogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dialog = useDialog();
  const [dialogType, setDialogType] = useState<string | null>(null);
  const [dialogContent, setDialogContent] = useState<React.ReactNode | null>(null);

  const openDialog = (type: string, content: React.ReactNode) => {
    setDialogType(type);
    setDialogContent(content);
    dialog.setOpen(true);
  };

  const closeDialog = () => {
    dialog.setOpen(false);
    setDialogType(null);
    setDialogContent(null);
  };

  return (
    <DialogContext.Provider value={{ dialog, openDialog, closeDialog, dialogType, dialogContent }}>
      <Dialog.RootProvider value={dialog}>{children}</Dialog.RootProvider>
    </DialogContext.Provider>
  );
};

// Hook custom
export const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialogContext must be used within a DialogProvider');
  }
  return context;
};
