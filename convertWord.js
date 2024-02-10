const fs = require('node:fs');

fs.readFile('./words_dictionary.json', 'utf-8', (err, data) => {
    if (err) {
        console.error("ERROR")
        return;
    }
    var parsedData = data.substring(4, data.length - 2);
    var arrayData = parsedData.split('"');
    arrayData = arrayData.filter((item, index) => {
        if (index % 2 != 0)
            return true
    })

    let allWordsArray = [];
    let newWordArray = [];

    let quantSection = 0;

    arrayData.forEach((item) => {
        
        newWordArray.push(item);
        quantSection++;
        if (quantSection == 50) {
            allWordsArray.push(newWordArray);
            newWordArray = [];
            quantSection = 0;
        }
    })

    var finalObject = {
        allWords: allWordsArray
    }

    fs.writeFile('./words_dictionary_parsed.json', JSON.stringify(finalObject), (err) => {
        if (err) {
            console.error("ERROR")
            return;
        }
        console.log("Success")
    })
})