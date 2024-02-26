import fs from 'fs';
// let fs: any; // Define the fs variable

// if (typeof window === 'undefined') {
//     // Code executed on the server-side
//     const fsModule = await import('fs').catch(err => {
//         console.error('Error importing fs module:', err);
//     });
//     fs = fsModule.default;
// } else {
//     // Code executed on the client-side
//     fs = null; // or handle client-side behavior
// }

export default class FileHelper {
    static readFIle(filePath: string): Promise<string> {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if(err){
                    reject(err);
                }else {
                    resolve(data);
                }
            });
        });
    }

    static writeFile(filePath: string, data: string): Promise<void> {
        return new Promise((resolve, reject) => {
            fs.writeFile(filePath, data, 'utf8', err => {
                if(err){
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    static appendFile(filePath: string, data: string): Promise<void> {
        return new Promise((resolve, reject) => {
            fs.appendFile(filePath, data, 'utf8', err => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    static deleteFile(filePath: string): Promise<void> {
        return new Promise((resolve, reject)=>{
            fs.unlink(filePath, err => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }


}