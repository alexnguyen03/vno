import { Container } from "inversify";
import { INoteService } from "./note.service.interface";
import { NoteService } from "./note.service.implement";


const container = new Container();

container.bind<INoteService>("INoteService").to(NoteService).inSingletonScope();

export { container };