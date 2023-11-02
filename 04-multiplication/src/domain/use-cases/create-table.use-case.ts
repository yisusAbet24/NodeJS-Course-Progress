export interface CreateTableUseCase {
  execute(options: Options): string;
}
export interface Options {
  base: number;
  limit?: number;
}

export class CreateTable {
  constructor() {
    /* dependency injection */
  }

  execute({ base, limit = 10 }: Options) {
    let outputMessage: string = "";
    for (let i = 1; i <= limit; i++) {
      outputMessage += `${base} x ${i} = ${base * i}\n`;
    }
    return outputMessage;
  }
}
