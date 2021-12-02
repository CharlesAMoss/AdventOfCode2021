import fs from 'fs';

const input: string = fs.readFileSync('./data/day2/daytwoInput.txt', 'utf-8')
const list: Array<string> = input.toString().replace(/\r\n/g,'\n').split('\n')

export const partone = () => { 
    let x: number = 0, y: number = 0;
   
    list.map(l => { 
        let [command, value] = l.split(' ');
      
        switch(command) {
            case 'forward':
                x += +value
                break;
            case 'up':
                y -= +value
                break;
            case 'down':
                y += +value
                break;
        }
    })

    return x * y;
}

export const parttwo = () => {
    let x: number = 0, y: number = 0, aim: number = 0;
   
    list.map(l => { 
        let [command, value] = l.split(' ');
      
        switch(command) {
            case 'forward':
                x += +value
                y += aim * +value 
                break;
            case 'up':
                aim -= +value
                break;
            case 'down':
                aim += +value
                break;
        }
    })

    return x * y;
}