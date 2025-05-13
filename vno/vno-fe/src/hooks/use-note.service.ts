import { container } from '../common/services/service.inversify';
import { INoteService } from '../modules/note/services';

export function useNoteService(): INoteService {
  return container.get<INoteService>('INoteService');
}
