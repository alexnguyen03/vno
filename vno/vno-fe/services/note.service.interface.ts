import NoteOverview from "@/types/note-overview";
import { ApiResponse } from "@/types/api-response";

export interface INoteService {
    getAllNotes(): Promise<ApiResponse<NoteOverview[]>>; // ví dụ trả về danh sách note
}