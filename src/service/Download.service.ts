import { resolve } from 'path';
import { readFileSync, mkdirSync, writeFileSync, existsSync } from 'fs';
import * as fetch from 'node-fetch';

export class DownloadService{

  private folder: string = 'temp';  

  public async downloadFile(link: string, filename): Promise<void> {
    
    if (!existsSync(this.folder)) {
      mkdirSync(this.folder);
    }

    const file = fetch(link).then((response: any) => response.buffer());

    writeFileSync(resolve(this.folder, filename), file);
  }
  
  public readFileFromTemp(filename: string): Buffer {
    return readFileSync(resolve(this.folder, filename));
  }
}

