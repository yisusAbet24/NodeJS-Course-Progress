import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileName: string;
  fileDestination: string;
}

export class ServerApp {
  static run({
    base,
    limit,
    showTable,
    fileName,
    fileDestination,
  }: RunOptions) {
    console.log("ServerApp running...");
    const fileContent = new CreateTable().execute({ base, limit });

    const wasCreated = new SaveFile().execute({
      base,
      fileContent,
      fileName,
      fileDestination,
    });

    wasCreated
      ? console.log("File created successfully")
      : console.log("Error creating file");
    showTable ? console.log(fileContent) : console.log("table not shown");
  }
}
