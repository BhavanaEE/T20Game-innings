export function RandomNumberGenBetween(min:number,max:number){    
    return Math.floor(Math.random()*(max-min+1)+min);
}
export function probabilityRandomNumber(indexOfPlayersName:number)
{
    let probOfEachPlayer:number[][]=[[5,30,25,10,15,1,9,5],[10,40,20,5,10,1,4,10],[20,30,15,5,5,1,4,20],[30,25,5,0,5,1,4,30]];
    let ran:number=RandomNumberGenBetween(0,100),i:number,j:number,sumOfEachPlayer:number=0;
    for(j=0;j<8;j++){
        sumOfEachPlayer+=probOfEachPlayer[indexOfPlayersName][j]
        if(sumOfEachPlayer>=ran)
        return j;
    }  
}
