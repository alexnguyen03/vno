import { injectable } from 'inversify';
import { INoteService } from './note.service.interface';
import { NoteOverview } from '../types/noteType';
import { ApiError, ApiResponse } from '@/src/common/types/api';
import BaseApiClient from '@/src/common/services/service.api';

@injectable()
export class NoteService implements INoteService {
  async getAllNotes(): Promise<ApiResponse<NoteOverview[]>> {
    try {
      const response = await BaseApiClient.get('/notes');
      return {
        errors: [],
        errorCount: 0,
        isSuccessful: true,
        result: response.data,
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // Tạo lỗi mặc định
      const errors: ApiError[] = [];

      if (error.response) {
        // Nếu API trả lỗi chi tiết, có thể map lỗi vào đây
        errors.push({
          propertyName: '',
          errorMessage: error.response.data?.message || 'Lỗi từ server',
          errorCode: error.response.status.toString(),
        });
      } else {
        errors.push({
          propertyName: '',
          errorMessage: error.message || 'Lỗi không xác định',
        });
      }

      return {
        errors,
        errorCount: errors.length,
        isSuccessful: false,
        result: [] as NoteOverview[], // trả về mảng rỗng khi lỗi
      };
    }
  }

  async getNoteById(id: number): Promise<NoteOverview> {
    const response = await BaseApiClient.get(`/notes/${id}`);
    return response.data;
  }

  async createNote(note: Partial<NoteOverview>): Promise<NoteOverview> {
    const response = await BaseApiClient.post('/notes', note);
    return response.data;
  }

  async updateNote(id: number, note: Partial<NoteOverview>): Promise<NoteOverview> {
    const response = await BaseApiClient.put(`/notes/${id}`, note);
    return response.data;
  }

  async deleteNote(id: number): Promise<void> {
    await BaseApiClient.delete(`/notes/${id}`);
  }
}
