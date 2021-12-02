import fs from 'fs';

const input: string = fs.readFileSync('./data/day2/daytwoInput.txt', 'utf-8')
const list: Array<string> = input.toString().replace(/\r\n/g,'\n').split('\n')

export const partone = () => { 
    let x: number = 0, y: number = 0;
   
    list.map(l => { 
        let [command, value] = l.split(' ');
      
        switch(command) {
            case 'forward':
                x = x + <number> +value;
                break;
            case 'up':
                y = y - <number> +value;
                break;
            case 'down':
                y = y + <number> +value;
                break;
        }

    })

    return x * y
}

export const parttwo = () => {
    
 
    
    return 'hey'
}