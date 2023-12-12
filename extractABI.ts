import fs from 'fs'

const extractAbi = async () => {
    const mainFolder = "artifacts/contracts/";
    fs.readdirSync(mainFolder).forEach((folder) => {
      if (folder.includes(".sol")) {
        const absolutePath = mainFolder + folder + "/";
  
        fs.readdirSync(absolutePath).forEach((file: any) => {
          if (!file.includes(".dbg.json")) {
            const finalPath = absolutePath + file;
            const parentDirectory = __dirname.substr(
              0,
              __dirname.lastIndexOf("/")
            );
            const abiFolder = parentDirectory + "/abis";
  
            try {
              if (!fs.existsSync(abiFolder)) {
                fs.mkdirSync(abiFolder);
              }
            } catch (err) {
              console.error(err);
            }
  
            let data: any = fs.readFileSync(finalPath);
  
            fs.writeFileSync(
              `abis/${file}`,
              JSON.stringify(JSON.parse(data).abi)
            );
          }
        });
      }
    });
  };