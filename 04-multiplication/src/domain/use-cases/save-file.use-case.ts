import fs from "fs";
export interface SaveFileUseCase {
  execute(options: Options): boolean;
}
export interface Options {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
  base: number;
}

export class SaveFile {
  constructor() {
    /* dependency injection */
    /*Repository: StorageRepository */
  }

  execute({
    fileContent,
    fileDestination = "outputs",
    fileName = "table",
    base,
  }: Options): boolean {
    try {
      fs.mkdirSync(fileDestination, { recursive: true });
      fs.writeFileSync(
        `${fileDestination}/${fileName}-${base}.txt`,
        fileContent
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
