//import FileHelper from './FileHelper';

import FileHelper from "../../../FileHelper";

async function exampleUsage() {
    try {
      //  const fileContent = await FileHelper.readFIle('example.txt')
       // console.log(`File content: ${fileContent}`);

        await FileHelper.writeFile('example2.txt', 'Hello World!');
        //Dlete file
    //    await FileHelper.deleteFile('example.txt')

        FileHelper.appendFile('example.txt', 'New content to append.\n')
            .then(() => {
                console.log('Data has been appended successfully.');
            })
            .catch(error => {
                console.error('Error appending data:', error);
            });
    } catch (error) {
        console.error(`An Error occured: ${error}`)
        
    }
}

