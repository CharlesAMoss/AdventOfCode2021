import fs from 'fs';

const input: string = fs.readFileSync('./data/day3/daythreeInput.txt', 'utf-8')
const list: Array<string> = input.toString().replace(/\r\n/g,'\n').split('\n') //.map( i => +i);

const commonBit = (count: number, total: number) => {
    const difference: number = total - count;
    return ( count > difference ) ? '1' : '0'
}

export const partone = () => { 
    const total: number = list.length;
    const poll: Array<number> = Array(list[0].length).fill(0); 
   
    for(let i=0; i < total; i++) {
        let curr = list[i].split('');        
        for(let j=0; j < curr.length; j++) {
            if ( curr[j] === '1' ) {
                poll[j]++
            }
        }
    }

   const common: string = poll.map(p => commonBit(p,total)).join('');
   const gamma: number = parseInt(common, 2);
   const uncommon: string = Array.from(common.split('')).map(c=>(c === '1')?'0':'1').join(''); 
   const epsilon: number = parseInt(uncommon, 2);
      
   console.log(gamma, epsilon)

   return gamma * epsilon;
}

export const parttwo = () => {
 
    
    return "hey";
}