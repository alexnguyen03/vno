import React from 'react';
import { Dialog, Portal, Button, CloseButton } from '@chakra-ui/react';
import { useDialogContext } from '@/src/app/dialog-provider';

export const GlobalDialog = () => {
  const { dialog, dialogType, dialogContent, closeDialog } = useDialogContext();

  if (!dialogType) return null;

  // Bạn có thể customize title theo dialogType
  const getTitle = (type: string) => {
    switch (type) {
      case 'note':
        return 'Note Details';
      case 'journal':
        return 'Journal Entry';
      case 'plan':
        return 'Plan Details';
      default:
        return 'Dialog';
    }
  };

  return (
    <Portal>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>{getTitle(dialogType)}</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>{dialogContent}</Dialog.Body>
          <Dialog.Footer>
            <Dialog.ActionTrigger asChild>
              <Button variant="outline" onClick={closeDialog}>
                Cancel
              </Button>
            </Dialog.ActionTrigger>
            <Button onClick={closeDialog}>Close</Button>
          </Dialog.Footer>
          <Dialog.CloseTrigger asChild>
            <CloseButton size="sm" onClick={closeDialog} />
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  );
};
