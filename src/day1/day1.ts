import fs from 'fs';

const input: string = fs.readFileSync('./data/day1/dayoneInput.txt', 'utf-8')
const list: Array<number> = input.toString().replace(/\r\n/g,'\n').split('\n').map( i => +i);

export const partone = () => { 

    let count: number = 0; 
    for(let i = 1; i < list.length; i++) {
        if (list[i] > list[i-1]) {
            count++
        } 
    }
    
    return count
}

export const parttwo = () => {
    
    let count: number = 0;
    for(let i = 2; i < list.length ; i++) {
        if (list[i] + list[i-1] + list[i-2] < list[i+1] + list[i] + list[i-1]) {
            count++
        }  
    }
    
    return count
}

