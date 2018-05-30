var scores,round_score,active_player,dice,game_status;
initial();

document.querySelector('.btn-roll').addEventListener('click',function(){
    if (game_status){
        //randome number
        var dice=Math.floor(Math.random()*6)+1;

        // display the related dice
        var dice_dome=document.querySelector('.dice');
        dice_dome.style.display = 'block';
        dice_dome.src = 'dice-'+dice+'.png';

        // update the scores
        if(dice!==1){
            //round_score=dice+round_score; or
            document.querySelector('#current-'+active_player).textContent='0';
            round_score+=dice;
            document.querySelector('#current-'+active_player).textContent=round_score;
        }
        else {
            next_turn();
        }
    }

});

// hold it!
document.querySelector('.btn-hold').addEventListener('click',function(){
    if (game_status){
        scores[active_player]+=round_score;
        document.querySelector('#score-'+active_player).textContent=scores[active_player];

        //update UI
        if (scores[active_player]>=100){
            document.querySelector('#name-'+active_player).textContent='YOU WIN';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+active_player+'-panel').classList.add('winner');
            document.querySelector('.player-'+active_player+'-panel').classList.remove('active');
            game_status=false;
            } else{
                next_turn();
                    }
    }

});

//renew it!
document.querySelector('.btn-new').addEventListener('click',initial);

function next_turn(){
    active_player===0 ? active_player=1:active_player=0;
    round_score=0;
    document.querySelector('#current-0').textContent='0';
    document.querySelector('#current-1').textContent='0';
    document.querySelector('.dice').style.display='none';
    //you can use both add and remove or toggle instead
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
};

function initial(){
    scores=[0,0];
    round_score=0;
    active_player=0;
    game_status=true;

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.dice').style.display='none';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';


};
