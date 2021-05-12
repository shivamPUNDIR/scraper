
const puppeteer = require('puppeteer');
const fs = require('fs');
(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.covidindiaresources.com/search');
    //   await page.focus('.MuiSelect-nativeInput-58')
    await page.addScriptTag({ url: 'https://code.jquery.com/jquery-3.2.1.min.js' })
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')
    let name = []

    console.log('fetching data');
    await page.waitForTimeout(4000)
    console.log('data fetched');
    // const elements = await page.$$('jss536 col-12 col-md-6 col-lg-4 px-sm-4');
    data=await page.evaluate(() => {
        
        var phone = []
        let elements = $('a[href*=tel]').toArray();
        for (i = 0; i < elements.length; i++) {
            phone.push(elements[i].innerText)
            //   console.log(elements[i])
        }
        console.log(phone)
        // var csv = phone.map(function(d){
        //     return d.join();
        // }).join('\n');
        var lineArray = ['Phone Numbers'];
        phone.forEach(function (infoArray, index) {
            var line = infoArray+","
            line=line.trim();
            lineArray.push(line);
        });
        var csvContent = lineArray.join("\n");
        console.log(csvContent)
        return csvContent
    }).catch((e) => {
        console.log(e)
    })
    await fs.writeFile("./data.csv", data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
    //   await browser.close();
})();
//div[class*=MuiCard-root]