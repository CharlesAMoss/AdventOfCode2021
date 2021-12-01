import fs from 'fs';

export const dayone = () => { 
    const thistext = fs.readFileSync('./data/day1/dayoneInput.txt', 'utf-8')
    const arr = thistext.toString().replace(/\r\n/g,'\n').split('\n');
    const list: Array<number> = arr.map( i => +i)
    const start: number = list[0];
    let count: number = 0; 
    for(let i = 1; i < list.length; i++) {
        if (i === 1 && list[i] > start) {
            count++
        } 

        if (i > 1 && list[i] > list[i-1]) {
            count++
        }
    }
    
    console.log(count)
    return "result"
}
