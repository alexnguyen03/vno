'use client';
import { NoteList } from '@/src/modules/note/components/listNote';
import { ListApiError } from '@/src/components/common/listApiError';
import { useNoteService } from '@/src/hooks/use-note.service';
import { useEffect, useState } from 'react';
import { NoteOverview } from '@/src/modules/note/types/noteType';
import { ApiError } from '@/src/common/types/api';

import { useTranslations } from 'next-intl';
export default function Page() {
  const t = useTranslations('HomePage');
  const noteService = useNoteService();
  const [notes, setNotes] = useState<NoteOverview[]>([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<ApiError[]>([]);
  const [errorCount, setErrorCount] = useState(0);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const { result, errors, errorCount, isSuccessful } = await noteService.getAllNotes();
      if (isSuccessful) {
        setNotes(result);
        setErrors([]);
        setErrorCount(0);
      } else {
        setErrors(errors);
        setErrorCount(errorCount);
      }
    } catch (error) {
      console.error('Error fetching notes:', error);
    } finally {
      setLoading(false);
    }
  };
  // const showErrors =  () => {
  //   toast('Event has been createdsssssssssssssss', {
  //     position: 'bottom-right',
  //     description: 'Sunday, December 03, 2023 at 9:00 AM',
  //     actionButtonStyle: { backgroundColor: 'red' },
  //     action: {
  //       label: 'Undo',
  //       onClick: () => console.log('Undo'),
  //     },
  //   });
  // }
  // if (errorCount > 0) {
  //   showErrors();
  // }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      {t('title')}
      {errorCount > 0 && <ListApiError errorCount={errorCount} errors={errors} />}

      <NoteList notes={notes} isLoading={loading} />
    </div>
  );
}
