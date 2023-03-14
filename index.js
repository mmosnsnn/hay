const axios = require("axios")

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function Viper(){
let i = 0;
while(true){
    i++;
    try {
    let response = await axios.get('https://WHATS-KRIZ-TEST.mmosnsnn.repl.co')
    console.log(response.status + "... ✓", i);
    } catch {
        console.log('Retrying...')
    }
    await sleep(50000);//10000ms
}}
Viper()