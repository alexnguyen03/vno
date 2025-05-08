import { container } from "@/services/inversify.config";
import { INoteService } from "@/services/note.service.interface";


export function useNoteService(): INoteService {
    return container.get<INoteService>("INoteService");
}