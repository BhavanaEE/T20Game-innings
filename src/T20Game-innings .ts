import {RandomNumberGenBetween,probabilityRandomNumber} from "./strategy"

let playersName:string[]=["Kirat","Nodhi","Rumrah","shashi"];
let playerProperties:{
    [playerName:string]:{
        score:number,
        noOfBallsPlayed:number,
        out:boolean
    }

}={};
let batsMan:string=playersName[0];
let runner:string=playersName[1];

function batsmanIndexGenerator(batsMan:string){
    for(let i=0;i<4;i++){
        if(batsMan==playersName[i])
        return i;
    }
}

function scoreBoard(playerProperties:{
    [playerName:string]:{
        score:number,
        noOfBallsPlayed:number,
        out:boolean,
    }
},playersName:string[])
{
    for(let i=0;i<4;i++)
    {
        let nameOfPlayer:string=playersName[i];
        let score:number=playerProperties[nameOfPlayer].score;
        let balls:number=playerProperties[nameOfPlayer].noOfBallsPlayed;
        if(playerProperties[nameOfPlayer].out==false){
            if(balls===0)
            console.log(`${nameOfPlayer} - ${score} (${balls} balls)`)
            else
            console.log(`${nameOfPlayer} - ${score}* (${balls} balls)`)
        }
        else        
        console.log(`${nameOfPlayer} - ${score} (${balls} balls)`)
    }
}

export function startGame(){
    let over:number,ballsInEachOver:number,targetScore:number=40,teamScore:number=0,wickets:number=0,scoreOutcome:number;
    let hasWon:boolean=false;
    for(let i=0;i<4;i++){
        playerProperties[playersName[i]]={
            score:0,
            noOfBallsPlayed:0,
            out:false,
        };
    }
    for(over=0;over<4;over++){
        console.log(4-over+" overs left. "+(targetScore-teamScore)+" runs to win-----------------------")
        for(ballsInEachOver=1;ballsInEachOver<=6;ballsInEachOver++){
            //scoreOutcome=RandomNumberBetween(0,7); 
            let indexOfPlayersName:number=batsmanIndexGenerator(batsMan) as number;
            scoreOutcome=probabilityRandomNumber(indexOfPlayersName) as number;
            if(scoreOutcome === 7){
                playerProperties[batsMan].out=true;
                playerProperties[batsMan].noOfBallsPlayed++;
                console.log(`${over} . ${ballsInEachOver} ${batsMan} has lost wicket`);
                wickets++;
                batsMan=playersName[wickets+1]; 
            }
            else{
                playerProperties[batsMan].score+=scoreOutcome;
                if(scoreOutcome===1 || scoreOutcome===0)
                console.log(`${over} . ${ballsInEachOver} ${batsMan} scores ${scoreOutcome} run`);
                else
                console.log(`${over} . ${ballsInEachOver} ${batsMan} scores ${scoreOutcome} runs`);
                playerProperties[batsMan].noOfBallsPlayed++;
                teamScore+=scoreOutcome;
            }
            if(wickets===3){
                break;
            }
            if(targetScore<teamScore){
                hasWon=true;
                break;
            }
            if(scoreOutcome !== 7 && scoreOutcome%2 === 1){
                [batsMan,runner]=[runner,batsMan]
            }
        }
        [batsMan,runner]=[runner,batsMan]
        if(hasWon)
        {
            let ballsRemaining:number=24-((over*6)+ballsInEachOver)
            if(ballsRemaining<=1)
            console.log(`Bengaluru won by ${4-wickets} wickets and ${ballsRemaining} ball remaining`)
            else
            console.log(`Bengaluru won by ${4-wickets} wickets and ${ballsRemaining} balls remaining`)
            scoreBoard(playerProperties,playersName);
            return;
        }
        if(wickets===3 && !hasWon){
            if((targetScore-teamScore)===0){
                console.log("Draw Match");
                scoreBoard(playerProperties,playersName);
                return;
            }
            console.log(`Chennai has won by ${(targetScore-teamScore)} runs`);
            scoreBoard(playerProperties,playersName);
            return;
        }
    }
    if((targetScore-teamScore)===0){
        console.log("Draw Match");
    }
    else
    console.log(`Chennai has won by ${(targetScore-teamScore)} runs`);
    scoreBoard(playerProperties,playersName);
}