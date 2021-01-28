const puppeteer = require('puppeteer');
const readline = require('readline');
let url = '';

console.log('Input Search Term: ');
let st = readline();
//FIX READLINE DOESNT WORK
console.log(st);


(async () => {
    try{
        var browser = await puppeteer.launch({headless: false});
        var page = await browser.newPage();
        await page.goto('https://www.google.com');
        await page.screenshot({path: "imagestock.png"});
        //await browser.close();
        console.log('success!')
    } catch(err) {
        console.log(err);
        await browser.close();
        console.log('closed browser');
    }
})();