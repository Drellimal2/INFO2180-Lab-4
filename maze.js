/*Author: Dane Miller
ID: 620070179
Date: 03/10/2014*/

"use strict";
var canwin = true;

window.onload = function(){
    $("boundary1").onmouseover = setSingleLose;
    var boundaries = $$('div.boundary');
    for(var counter = 0; counter< boundaries.length; counter++){
        boundaries[counter].onmouseover = setLose;
    }
    $('end').onmouseover = endgame;
    $('start').onclick = resetgame;
    $$('div#maze')[0].onmouseleave = outercheat;
};

var setSingleLose = function(){
    $('boundary1').addClassName("youlose");
};

var setLose = function(){
    var boundaries = $$('div.boundary');
    var counter;
    canwin = false;
    for(counter = 0; counter< boundaries.length; counter++){
        boundaries[counter].addClassName("youlose");
    }
};

var endgame = function(){
    if (canwin){
        //alert("You won! Good Job");
        $$("h2#status")[0].innerText ="You Win";
    } else {
        //alert("You Lost :'( Try again.");
        $$("h2#status")[0].innerText ="You Lose";

    }
};

var resetgame = function(){
    canwin = true;
    var boundaries = $$('div.boundary');
    for(var counter = 0; counter< boundaries.length; counter++){
        boundaries[counter].removeClassName("youlose");
    }
    $$("h2#status")[0].innerText ="Get from S to E without touching the maze.";

};

var outercheat = function(){
    $$("h2#status")[0].innerText ="Please stay within the maze.\nClick S to reset";
    canwin = false;
}
