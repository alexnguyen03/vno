"use client";
import { NoteList } from "@/components/note/list-note";
import NoteOverview from "@/types/note-overview";
import { useNoteService } from "@/hooks/use-note.service";
import { useEffect, useState } from "react";
import { ErrorList } from "@/components/common/list-error";
import { ApiError } from "@/types/api-response";

export default function Page() {
  const noteService = useNoteService();
  const [notes, setNotes] = useState<NoteOverview[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [errors, setErrors] = useState<ApiError[]>([]);
  const [errorCount, setErrorCount] = useState(0);

  const fetchNotes = async () => {
    try {
      const { result, errors, errorCount, isSuccessful } =
        await noteService.getAllNotes();
      if (isSuccessful) {
        setNotes(result);
        setErrors([]);
        setErrorCount(0);
      } else {
        setErrors(errors);
        setErrorCount(errorCount);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <div className="" style={{ top: "300px", backgroundColor: "#f1f1f1" }}>
        {errorCount > 0 && (
          <ErrorList errorCount={errorCount} errors={errors} />
        )}
        <NoteList notes={notes} isLoading={isLoading} />
      </div>
    </>
  );
}
