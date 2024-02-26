import * as fs from 'fs';
export default interface Data {
    // Define the structure of your data
    txn: string;
    asset_Id: string;
    asset_Name: string;
    asset_Amount: number;
}
export default class JsonHelper {
    static parseJson<T>(jsonString:string): T {
        try{
            return JSON.parse(jsonString) as T;
        } catch(error:any) {
            throw new Error(`Error parsing JSON: ${error.message}`);
        }
    }
    static stringifyJson(data: any, space?:number): string{
        try {
            return JSON.stringify(data,null,space);
        } catch (error:any) {
            throw new Error(`Error stringify JSON: ${error.message}`);
        }
    }

    static writeJsonToFile(filePath: string, data: any, space?:number): Promise<void>{
        return new Promise((resolve, reject)=> {
            const jsonString = this.stringifyJson(data, space);
            fs.writeFile(filePath, jsonString, 'utf8',err => {
                if(err){
                    reject(err);
                }else{
                    resolve();
                }
            });
        });
    }

    static appendJsonToFile(filePath: string, data: any, space?:number): Promise<void>{
        return new Promise((resolve, reject)=> {
            const jsonString = this.stringifyJson(data, space);
            fs.appendFile(filePath, jsonString, 'utf8',err => {
                if(err){
                    reject(err);
                }else{
                    resolve();
                }
            });
        });
    }

    static appendToJsonArrayFile(filePath: string, newData: Data): Promise<void> {
        return new Promise((resolve, reject) => {
            // Read the existing JSON array from the file
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    if (err.code === 'ENOENT') {
                        // If the file doesn't exist, create an empty array
                        data = '[]';
                    } else {
                        // If there is any other error, reject the promise
                        return reject(err);
                    }
                }

                // Parse the existing JSON array
                let jsonArray: Data[] = [];
                try {
                    jsonArray = JSON.parse(data);
                } catch (parseError) {
                    // If parsing fails, reject the promise
                    return reject(parseError);
                }

                // Add the new data to the array
                jsonArray.push(newData);

                // Convert the updated array back to JSON string
                const updatedData = JSON.stringify(jsonArray, null, 2);

                // Write the updated JSON string back to the file
                fs.writeFile(filePath, updatedData, 'utf8', writeErr => {
                    if (writeErr) {
                        reject(writeErr);
                    } else {
                        resolve();
                    }
                });
            });
        });
    }


}