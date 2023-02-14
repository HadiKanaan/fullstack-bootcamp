
let opponenthealth;
let myhealth;
let attackDamage;
window.onload = function() { // removed the name to avoid some IE leaks
    opponenthealth = document.getElementById("mhealth").style;
    opponenthealth.width = "100%";

    myhealth = document.getElementById("yhealth").style;
    myhealth.width = "100%";
}

function attack() {
    min = Math.ceil(10);
    max = Math.floor(20);
    attackDamage = Math.floor(Math.random() * (20 - 10 + 1) + 10); 
    return attackDamage;
  }
function specattack(){
    return attackDamage*2;
}
function heal(){
    return attackDamage*1.5;
}

function attackFunction() {   
var containerdiv=  document.getElementById('battle-log-container');
var attackDamage = attack();
var innerDiv = document.createElement('div');
innerDiv.className = 'battle-log-event';
innerDiv.innerHTML=`Player attacks and deals ${attackDamage}`
containerdiv.appendChild(innerDiv);
var currentpercentage = Number(opponenthealth.width.slice(0,  -1));
var newPercentage = currentpercentage- attackDamage;
opponenthealth.width = `${newPercentage}%`;
if (newPercentage < 0) alert("the fight has ended");
  }

function specFunction() {   
    if(opponenthealth.width.slice(0,-1)*0.8> myhealth.width) {
var containerdiv=  document.getElementById('battle-log-container');
var attackDamage = attack();
var innerDiv = document.createElement('div');
innerDiv.className = 'battle-log-event';
innerDiv.innerHTML=`Player attacks and deals ${specattack()}`
containerdiv.appendChild(innerDiv);
var currentpercentage = Number(opponenthealth.width.slice(0,  -1));
var newPercentage = currentpercentage- attackDamage;
opponenthealth.width = `${newPercentage}%`;
if (newPercentage < 0) alert("the fight has ended");
  }
  else alert("inelligible move");
}

function counter() {   
var containerdiv=  document.getElementById('battle-log-container');
var attackDamage = attack();
var innerDiv = document.createElement('div');
innerDiv.className = 'battle-log-event';
innerDiv.innerHTML=`Monster attacks and deals ${attackDamage}`
containerdiv.appendChild(innerDiv);
var currentpercentage = Number(myhealth.width.slice(0,  -1));
var newPercentage = currentpercentage- attackDamage;
myhealth.width = `${newPercentage}%`;
if (newPercentage < 0) alert("the fight has ended");
  }

function healFunction() {   
var containerdiv=  document.getElementById('battle-log-container');
var attackDamage = attack();
var innerDiv = document.createElement('div');
innerDiv.className = 'battle-log-event';
innerDiv.innerHTML=`Player heals ${heal()}`
containerdiv.appendChild(innerDiv);
myhealth.width += heal();
myhealth.width = `${newPercentage}%`;
if (newPercentage < 0) alert("the fight has ended");
  }

function giveup(){
    alert("the fight has ended");
}