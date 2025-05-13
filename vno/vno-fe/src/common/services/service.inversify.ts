import { Container } from 'inversify';
import { NoteService } from '../../modules/note/services/note.service.impl';
import { INoteService } from '../../modules/note/services';
// DI all services here
const container = new Container();

container.bind<INoteService>('INoteService').to(NoteService).inSingletonScope();

export { container };
