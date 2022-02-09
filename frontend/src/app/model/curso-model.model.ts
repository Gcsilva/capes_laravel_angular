import { CursoInterface } from "./interface/curso-interface.interface";

export class CursoModel implements CursoInterface {
    id!: number;
    nome!: string;
    descricao!: string;
    dt_inicio!: string;
    dt_fim!: string;
}
