## **Problem Context** 

It's the finals of the T20 Cup! Bengaluru and Chennai, neighbours and fierce rivals, are 
fighting it out for the title. Bengaluru's star batsman Kirat is at the crease. Can he win it for Bengaluru? 
 
It's the last 4 overs of the match. Bengaluru needs 40 runs to win and with 4 wickets left. Each 
player has a different probability for scoring runs. Here we are simulating the match, 
ball by ball. It requires a weighted random number generation based on probability of each player to determine the runs scored per ball. 

 
### **Sample Output** 
 
Bengaluru won by 1 wicket and 2 balls remaining 
 
Kirat Boli - 12 (6 balls)  
NS Nodhi - 25 (11 balls)  
R Rumrah - 2* (3 balls)  
Shashi Henra - 2* (2 balls) 

**Commentary**

4 overs left. 40 runs to win 

0.1 Kirat Boli scores 1 run  
0.2 NS Nodhi scores 4 runs  
0.3 NS Nodhi scores 1 run  
0.4 Kirat Boli scores 2 runs  
0.5 Kirat Boli scores 3 runs  
0.6 NS Nodhi scores 1 run  

3 overs left. 28 runs to win 

1.1 NS Nodhi scores 2 runs 


### **Setup**
``` 
$ npm install
```

### **To run the code**
```
$ npm run build
```
```
$ npm run test
```
```
$ npm run start
```