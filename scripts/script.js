var app = new Vue({
    el: '#app',
    data:{
        start: 'block',

        cardNumber: 0,
        border: '#4eb8ac',
        selected: 0,

        borderColorP1: '#ffffff',
        borderWidthP1: '3px',
        borderColorP2: '#ffffff',
        borderWidthP2: '3px',

        boardDisplay: 'none',
        secrertCardP1: 'none',
        secrertCardP2: 'none',
        sharedCardDisplay: 'none',

        resultsDisplay: 'none',

        winner: '',
        scorePlayerOne: '',
        scorePlayerTwo: '',

        cards:  [
            //ttop = terrain top / stop = symbol top
            {id:1, img:'images/riverCards/1.png', ttop:'gray',tbottom:'yellow', stop:'star',sbottom:'tributary',rotation:0,height:70,reflect:1},
            {id:2, img:'images/riverCards/2.png', ttop:'green',tbottom:'gray', stop:'star',sbottom:'tributary',rotation:0,height:70,reflect:1},
            {id:3, img:'images/riverCards/3.png', ttop:'yellow',tbottom:'green', stop:'star',sbottom:'tributary',rotation:0,height:70,reflect:1},
            {id:4, img:'images/riverCards/4.png', ttop:'gray',tbottom:'green', stop:'star',sbottom:'tributary',rotation:0,height:70,reflect:1},
            {id:5, img:'images/riverCards/5.png', ttop:'green',tbottom:'yellow', stop:'star',sbottom:'tributary',rotation:0,height:70,reflect:1},
            {id:6, img:'images/riverCards/6.png', ttop:'yellow',tbottom:'gray', stop:'star',sbottom:'tributary',rotation:0,height:70,reflect:1},
            {id:7, img:'images/riverCards/7.png', ttop:'yellow',tbottom:'gray', stop:'mountain',sbottom:'wildlife',rotation:0,height:70,reflect:1},
            {id:8, img:'images/riverCards/8.png', ttop:'green',tbottom:'yellow', stop:'campsite',sbottom:'mountain',rotation:0,height:70,reflect:1},
            {id:9, img:'images/riverCards/9.png', ttop:'gray',tbottom:'green', stop:'forest',sbottom:'campsite',rotation:0,height:70,reflect:1},
            {id:10, img:'images/riverCards/10.png', ttop:'yellow',tbottom:'gray', stop:'campsite',sbottom:'mountain',rotation:0,height:70,reflect:1},
            {id:11, img:'images/riverCards/11.png', ttop:'gray',tbottom:'green', stop:'campsite',sbottom:'mountain',rotation:0,height:70,reflect:1},
            {id:12, img:'images/riverCards/12.png', ttop:'yellow',tbottom:'gray', stop:'forest',sbottom:'campsite',rotation:0,height:70,reflect:1},
            {id:13, img:'images/riverCards/13.png', ttop:'green',tbottom:'yellow', stop:'forest',sbottom:'campsite',rotation:0,height:70,reflect:1},
            {id:14, img:'images/riverCards/14.png', ttop:'green',tbottom:'yellow', stop:'mountain',sbottom:'wildlife',rotation:0,height:70,reflect:1},
            {id:15, img:'images/riverCards/15.png', ttop:'gray',tbottom:'green', stop:'mountain',sbottom:'wildlife',rotation:0,height:70,reflect:1},
            {id:16, img:'images/riverCards/16.png', ttop:'yellow',tbottom:'gray', stop:'campsite',sbottom:'wildlife',rotation:0,height:70,reflect:1},
            {id:17, img:'images/riverCards/17.png', ttop:'green',tbottom:'yellow', stop:'campsite',sbottom:'wildlife',rotation:0,height:70,reflect:1},
            {id:18, img:'images/riverCards/18.png', ttop:'gray',tbottom:'green', stop:'campsite',sbottom:'wildlife',rotation:0,height:70,reflect:1},
            {id:19, img:'images/riverCards/19.png', ttop:'yellow',tbottom:'gray', stop:'forest',sbottom:'mountain',rotation:0,height:70,reflect:1},
            {id:20, img:'images/riverCards/20.png', ttop:'green',tbottom:'yellow', stop:'forest',sbottom:'mountain',rotation:0,height:70,reflect:1},
            {id:21, img:'images/riverCards/21.png', ttop:'gray',tbottom:'green', stop:'forest',sbottom:'mountain',rotation:0,height:70,reflect:1},
            {id:22, img:'images/riverCards/22.png', ttop:'yellow',tbottom:'gray', stop:'wildlife',sbottom:'forest',rotation:0,height:70,reflect:1},
            {id:23, img:'images/riverCards/23.png', ttop:'green',tbottom:'yellow', stop:'wildlife',sbottom:'forest',rotation:0,height:70,reflect:1},
            {id:24, img:'images/riverCards/24.png', ttop:'gray',tbottom:'green', stop:'wildlife',sbottom:'forest',rotation:0,height:70,reflect:1},
            {id:25, img:'images/riverCards/25.png', ttop:'',tbottom:'', stop:'',sbottom:'',rotation:0,height:70,reflect:1}
        ],
        shuffledCards: [
            {id:0, img:'', ttop:'',tbottom:'', stop:'',sbottom:'',rotation:0,height:0,reflect:0}
        ],
        playedCards: [

        ],
        riverSourceCards: [
            {id:1, img:'images/riverSourceCards/1.png'},
            {id:2, img:'images/riverSourceCards/2.png'},
        ],
        selectedRiverSourceCard: [
            {id:1, img:''},
        ],
        featureObjectiveCards: [
            {id:1, img:'images/featureObjectiveCards/1.png', type:'campsite'},
            {id:2, img:'images/featureObjectiveCards/2.png', type:'campsite'},
            {id:3, img:'images/featureObjectiveCards/3.png', type:'campsite'},

            {id:4, img:'images/featureObjectiveCards/4.png', type:'wildlife'},
            {id:5, img:'images/featureObjectiveCards/5.png', type:'wildlife'},
            {id:6, img:'images/featureObjectiveCards/6.png', type:'wildlife'},

            {id:7, img:'images/featureObjectiveCards/7.png', type:'forest'},
            {id:8, img:'images/featureObjectiveCards/8.png', type:'forest'},
            {id:9, img:'images/featureObjectiveCards/9.png', type:'forest'},

            {id:10, img:'images/featureObjectiveCards/10.png', type:'mountain'},
            {id:11, img:'images/featureObjectiveCards/11.png', type:'mountain'},
            {id:12, img:'images/featureObjectiveCards/12.png', type:'mountain'},
        ],
        selectedFeatureCards: [
            {id:1, img:''},
            {id:2, img:''},
            {id:3, img:''},
            {id:4, img:''},
        ],
        secretCards: [
            {id:1, img:'images/secretObjectiveCards/1.png', type:'mountain'},
            {id:2, img:'images/secretObjectiveCards/2.png', type:'forest'},
            {id:3, img:'images/secretObjectiveCards/3.png', type:'campsite'},
            {id:4, img:'images/secretObjectiveCards/4.png', type:'wildlife'},
        ],
        selectedSecretCards: [
            {id:1, img:'', type:''},
            {id:2, img:'', type:''},
        ],
    },
    mounted:function(){
        //Run default function when page loads
        this.onStart()
    },
    methods:{
        //Start this function when the page loads
        onStart:function(){

            function random(min, max){
                var numbers = [];
                var output = [];
                //create array of numbers within range
                for (var i = min; i <= max; i++) {
                    numbers.push(i);
                }
                //create random range between those numbers
                for (var a = numbers, i = max; i--; ) {
                    var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
                    output.push(random);
                }
                return output[1];
            }

            function randomArray(min, max){
                var numbers = [];
                var output = [];
                //create array of numbers within range
                for (var i = min; i <= max; i++) {
                    numbers.push(i);
                }
                //create random range between those numbers
                for (var a = numbers, i = max; i--; ) {
                    var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
                    output.push(random);
                }
                return output;
            }

            //Select four random Feature cards when the page loads.
            this.selectedFeatureCards[0].img = this.featureObjectiveCards[random(0, 2)  ].img;
            this.selectedFeatureCards[1].img = this.featureObjectiveCards[random(0, 2)+3].img;
            this.selectedFeatureCards[2].img = this.featureObjectiveCards[random(0, 2)+6].img;
            this.selectedFeatureCards[3].img = this.featureObjectiveCards[random(0, 2)+9].img;

            //Select a random river source card when the page loads.
            var riverSource = random(0, 2);
            var heightOffset;
            //Offest card position based on river source card.
            if(riverSource == 1){
                heightOffset = 70;
            } else {
                heightOffset = 28;
            }

            //Save river source card.
            this.selectedRiverSourceCard[0].img = this.riverSourceCards[riverSource].img;
            this.selectedRiverSourceCard[0].id = this.riverSourceCards[riverSource].id;

            if(this.selectedRiverSourceCard[0].id == 1){
                this.borderColorP1 = '#4eb8ac';
            } else {
                this.borderColorP2 = '#4eb8ac';
            }

            //Selecet a random secret card for each player when the page loeads.
            var secretCard = randomArray(0, 4);
            this.selectedSecretCards[0].img = this.secretCards[secretCard[0]].img;
            this.selectedSecretCards[1].img = this.secretCards[secretCard[1]].img;

            this.selectedSecretCards[0].type = this.secretCards[secretCard[0]].type;
            this.selectedSecretCards[1].type = this.secretCards[secretCard[1]].type;

            //Shuffle the deck and save a random order for the river cards.
            var deckOrder = randomArray(0, 24);
            for (var i = 0; i < deckOrder.length; i++) {
                this.shuffledCards[i] = this.cards[deckOrder[i]];
                this.shuffledCards[i].height = heightOffset;
                //console.log(this.shuffledCards[i]);
            }
            this.shuffledCards[24] = this.cards[24];

            //Test to automatically show the ned of the game
            // for (var i = 0; i <= 22; i++) {
            //     this.selected = 1;
            //     this.playCard();
            // }

        },
        select:function() {
            if( this.selected == 0 ) {
                this.selected = 1;
            } else {
                this.selected = 0;
            }
        },
        flip:function() {

            if( this.rotation == 0 ) {
                this.rotation = 180;
                this.shuffledCards[this.cardNumber].rotation = 180;
            } else {
                this.rotation = 0;
                this.shuffledCards[this.cardNumber].rotation = 0;
            }

        },
        playCard:function(){

            if(this.cardNumber >= 23){
                this.finishGame();
            }

            //Change color of player card borders to indicate turns
            if(this.borderColorP1 == '#4eb8ac'){
                this.borderColorP1 = '#ffffff';
                this.borderColorP2 = '#ef9720';
                this.border = '#ef9720';
            } else {
                this.borderColorP1 = '#4eb8ac';
                this.borderColorP2 = '#ffffff';
                this.border = '#4eb8ac';
            }

            this.playedCards[this.cardNumber] = this.shuffledCards[this.cardNumber];
            this.cardNumber += 1;
            this.selected = 0;

            //Change height if the card has a tributary
            if(this.playedCards[this.cardNumber-1].sbottom == 'tributary') {
                this.playedCards[this.cardNumber-1].height += 20;
            }

            //Check if more that one card has been played
            if(this.cardNumber > 1){
                //Check if the previous card was a tributary
                if(this.playedCards[this.cardNumber-2].sbottom == 'tributary') {
                    //Raise tributary card to match other tributary cards when raised
                    if(this.playedCards[this.cardNumber-1].sbottom == 'tributary') {
                        this.playedCards[this.cardNumber-1].height = this.playedCards[this.cardNumber-2].height;
                    }
                    //Lower river if it was raised before a tributary
                    if(this.playedCards[this.cardNumber-2].height < 70 ){
                        this.playedCards[this.cardNumber-1].reflect = 1;
                    }
                }
                //Check if previous card was not a tributary
                if(this.playedCards[this.cardNumber-2].sbottom != 'tributary') {
                    //Adjust height of tributary if previous card raises river
                    if(this.playedCards[this.cardNumber-1].sbottom == 'tributary' && this.playedCards[this.cardNumber-2].reflect == 1){
                        this.playedCards[this.cardNumber-1].height -= 40;
                    }
                    //Reflect image if previous card was not reflected
                    if(this.playedCards[this.cardNumber-2].reflect == 1 ) {
                        this.playedCards[this.cardNumber-1].reflect = -1;
                    }
                }

                //If pervious card was a tributary
                if(this.playedCards[this.cardNumber-2].sbottom == 'tributary'){

                    for(i = this.cardNumber-2; i > -1; i--){
                        if(this.playedCards[i].sbottom != 'tributary'){
                            if(this.playedCards[i].reflect == 1){
                                this.playedCards[this.cardNumber-1].reflect = -1;
                            }
                            //console.log(i);
                            break;
                        }
                    }
                    //console.log("Loop is over");
                }

            }
        },
        finishGame:function(){

            this.boardDisplay = 'none';
            this.resultsDisplay = 'block';

            var playerOneScore = 0;
            var playerTwoScore = 0;

            var tributariesPlayerOne = 0;
            var tributariesPlayerTwo = 0;

            var tributaryGapPlayerOne = 0;
            var tributaryGapPlayerTwo = 0;

            var secretCardPlayerOne = 0;
            var secretCardPlayerTwo = 0;

            for (var i = 0; i < this.shuffledCards.length; i++) {
                //Find which side of the rover has the most tributaries
                //Change score if card is flipped
                if(this.shuffledCards[i].rotation == 180){
                    if(this.shuffledCards[i].stop == 'tributary'){
                        tributariesPlayerTwo += 1;
                    }
                    if(this.shuffledCards[i].sbottom == 'tributary'){
                        tributariesPlayerOne += 1;
                    }
                } else {
                    if(this.shuffledCards[i].stop == 'tributary'){
                        tributariesPlayerOne += 1;
                    }
                    if(this.shuffledCards[i].sbottom == 'tributary'){
                        tributariesPlayerTwo += 1;
                    }
                }
                //Find which player has the longest stretch without tributaries.
                if(this.shuffledCards[i].rotation == 180){
                    //Find if there is no tributary for player one with rotation
                    if(this.shuffledCards[i].stop == 'tributary'){
                        tributaryGapPlayerTwo = 0;
                    } else {
                        tributaryGapPlayerTwo += 1;
                    }
                    //Find if there is no tributary for player two with rotation
                    if(this.shuffledCards[i].sbottom == 'tributary'){
                        tributaryGapPlayerOne = 0;
                    } else {
                        tributaryGapPlayerOne += 1;
                    }
                } else {
                    //Find if there is no tributary for player one
                    if(this.shuffledCards[i].stop == 'tributary'){
                        tributaryGapPlayerOne = 0;
                    } else {
                        tributaryGapPlayerOne += 1;
                    }
                    //Find if there is no tributary for player two
                    if(this.shuffledCards[i].sbottom == 'tributary'){
                        tributaryGapPlayerTwo = 0;
                    } else {
                        tributaryGapPlayerTwo += 1;
                    }
                }

                if(this.selectedSecretCards[0].type == this.shuffledCards[i].stop){
                    secretCardPlayerOne += 1;
                }
                if(this.selectedSecretCards[1].type == this.shuffledCards[i].sbottom){
                    secretCardPlayerTwo += 1;
                }
                if(this.shuffledCards[i].rotation == 180){
                    if(this.selectedSecretCards[0].type == this.shuffledCards[i].sbottom){
                        secretCardPlayerOne += 1;
                    }
                    if(this.selectedSecretCards[1].type == this.shuffledCards[i].stop){
                        secretCardPlayerTwo += 1;
                    }
                }

            }

            //Adjust score for most tributaries
            if(tributariesPlayerOne > tributariesPlayerTwo){
                playerOneScore += 4;
            } else if(tributariesPlayerOne == tributariesPlayerTwo){
                playerOneScore += 0;
            } else {
                playerTwoScore += 4;
            }
            //Adjust score for longest stretch without tributaries.
            if(tributaryGapPlayerOne > tributaryGapPlayerTwo){
                playerOneScore += 4;
            } else if(tributaryGapPlayerOne == tributaryGapPlayerTwo){
                playerOneScore += 0;
            } else {
                playerTwoScore += 4;
            }

            //Adjust score for secret card values
            playerOneScore += secretCardPlayerOne;
            playerTwoScore += secretCardPlayerTwo;

            if(playerOneScore > playerTwoScore) {
                this.winner = "Player One Wins!";
            } else if(playerOneScore == playerTwoScore){
                this.winner = "Its a Tie!";
            } else {
                this.winner = "Player Two Wins!";
            }

            this.scorePlayerOne = "Player one's score is " + playerOneScore;
            this.scorePlayerTwo = "Player two's score is " + playerTwoScore;


            //console.log(  'p1: ' + playerOneScore + ' p2: ' + playerTwoScore  );


        },
        displayP1:function() {

            this.boardDisplay = 'none';
            this.secrertCardP1 = 'block';

        },
        displayP2:function() {

            this.boardDisplay = 'none';
            this.secrertCardP2 = 'block';

        },
        displayShared:function(){
            this.boardDisplay = 'none';
            this.sharedCardDisplay = 'block';
        },
        hide:function() {

            this.boardDisplay = 'block';
            this.secrertCardP1 = 'none';
            this.secrertCardP2 = 'none';

            this.sharedCardDisplay = 'none';

        },
        restart:function() {
            location.reload();
        },
        startDisplay:function(){
            this.boardDisplay = 'block';
            this.start = 'none';

            this.selectedRiverSourceCard[0].id
        }
    }
});