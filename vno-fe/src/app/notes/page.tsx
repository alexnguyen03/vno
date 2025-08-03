'use client';
import { Box, Button } from '@chakra-ui/react';
import { useDialogContext } from '../dialog-provider';

export default function NotePage() {
  const { openDialog } = useDialogContext();

  const openNoteDialog = () => {
    openDialog('note', <p>This is a note content</p>);
  };
  return (
    <Box textAlign="center" fontSize="xl" pt="30vh">
      <Button onClick={openNoteDialog}>Open Note Dialog</Button>
    </Box>
  );
}
