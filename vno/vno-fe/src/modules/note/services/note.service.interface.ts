import { ApiResponse } from '@/src/common/types/api';
import { NoteOverview } from '../types/noteType';

export interface INoteService {
  getAllNotes(): Promise<ApiResponse<NoteOverview[]>>; // ví dụ trả về danh sách note
}
