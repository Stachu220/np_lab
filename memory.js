var cards = ["cat.png", "duck.png", "cheems.png", "cheems.png", 
            "buff_doge.png", "pikachu.png", "duck.png", "villager.png", 
            "cat.png", "pikachu.png", "villager.png", "buff_doge.png"];


var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');

var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');


c0.addEventListener("click", function()  { revealCard(0); });
c1.addEventListener("click", function()  { revealCard(1); });
c2.addEventListener("click", function()  { revealCard(2); });
c3.addEventListener("click", function()  { revealCard(3); });

c4.addEventListener("click", function()  { revealCard(4); });
c5.addEventListener("click", function()  { revealCard(5); });
c6.addEventListener("click", function()  { revealCard(6); });
c7.addEventListener("click", function()  { revealCard(7); });

c8.addEventListener("click", function()  { revealCard(8); });
c9.addEventListener("click", function()  { revealCard(9); });
c10.addEventListener("click", function()  { revealCard(10); });
c11.addEventListener("click", function()  { revealCard(11); });

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 6;

function revealCard(nr)
{

    var opacityValue=$('#c'+nr).css('opacity');
    
    if(!opacityValue==0 && lock==false)
    {
        //alert(nr);
        lock=true;
        var obraz='url(img/'+cards[nr]+")";
        $('#c'+nr).css('background-image', obraz);
        $('#c'+nr).addClass('cardA');



        function hide(){
            //alert("brak pary");
            var obraz='url("img/karta.png")';
            $('#c'+nr).css('background-image', obraz);
            $('#c'+visible_nr).css('background-image', obraz);
            $('#c'+nr).removeClass('cardA');
            $('#c'+visible_nr).removeClass('cardA'); 
            lock=false;
        }
        if(oneVisible==false) //jeśli jedna nie jest widoczna
        { 
            //first card
            oneVisible = true; //jedna jest widoczna
            visible_nr = nr; //przypisz do zmiennej numer widocznej pierwszej karty
            lock=false;
        }
        else //jedna karta jest już widoczna
        { 
            //second card

            if(cards[visible_nr]==cards[nr]){ //jeżeli pierwsza karta jest równa numerowi drugiej, jest para
               setTimeout(function() {hide2cards(nr, visible_nr)}, 750);
                
            }
            else //jeśli karty nie są takie same
            {
                setTimeout(hide, 1000);
            }

            turnCounter++;
            $('.score').html('Turn counter: ' +turnCounter);
            oneVisible=false;
        }
    }
}
function hide2cards(nr1, nr2){
    $('#c'+nr1).css('opacity','0');
    $('#c'+nr2).css('opacity','0');
    pairsLeft--;
    if(pairsLeft==0){
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    }
    lock=false;
    
}

