import { injectable } from "inversify";
import { INoteService } from "./note.service.interface";
import NoteOverview from "@/types/note-overview";
import BaseApiClient from "./base-api-client";
import { ApiError, ApiResponse } from "@/types/api-response";
import { ApiStatus } from "@/enums/api-status.enum";

@injectable()
export class NoteService implements INoteService {
    // async getAllNotes(): Promise<NoteOverview[]> {
    //     // giả lập gọi API hoặc logic
    //     return [
    //         {
    //             id: 1,
    //             title: "Ghi chú 1",
    //             mainContent: "Nội dung chính của ghi chú 1...",
    //             createdAt: new Date("2024-05-01T10:00:00"),
    //             modifiedAt: new Date("2024-05-02T12:00:00"),
    //         },
    //         {
    //             id: 2,
    //             title: "Ghi chú 2",
    //             mainContent: "Nội dung chính của ghi chú 2...",
    //             createdAt: new Date("2024-05-03T09:30:00"),
    //             modifiedAt: new Date("2024-05-04T11:15:00"),
    //         },
    //     ]
    // }
    async getAllNotes(): Promise<ApiResponse<NoteOverview[]>> {
        try {
            console.log("Response data:", BaseApiClient.getUri());
            const response = await BaseApiClient.get("/notes");
            console.log("Response data:", response.data);
            return {
                errors: [],
                errorCount: 0,
                isSuccessful: true,
                result: response.data,
            };
        } catch (error : any) {
            // Tạo lỗi mặc định
            const errors: ApiError[] = [];

            if (error.response) {
                // Nếu API trả lỗi chi tiết, có thể map lỗi vào đây
                errors.push({
                    propertyName: "",
                    errorMessage: error.response.data?.message || "Lỗi từ server",
                    errorCode: error.response.status.toString(),
                });
            } else {
                errors.push({
                    propertyName: "",
                    errorMessage: error.message || "Lỗi không xác định",
                });
            }

            return {
                errors,
                errorCount: errors.length,
                isSuccessful: false,
                result: [] as NoteOverview[], // trả về mảng rỗng khi lỗi
            };
        }
    };

    async getNoteById(id: number): Promise<NoteOverview> {
        const response = await BaseApiClient.get(`/notes/${id}`);
        return response.data;
    };

    async createNote(note: Partial<NoteOverview>): Promise<NoteOverview> {
        const response = await BaseApiClient.post("/notes", note);
        return response.data;
    };

    async updateNote(id: number, note: Partial<NoteOverview>): Promise<NoteOverview> {
        const response = await BaseApiClient.put(`/notes/${id}`, note);
        return response.data;
    };

    async deleteNote(id: number): Promise<void> {
        await BaseApiClient.delete(`/notes/${id}`);
    };
}