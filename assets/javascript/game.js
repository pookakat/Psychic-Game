var letters='abcdefghijklmnopqrstuvwxyz'.split('');
        i=Math.floor(Math.random()*26);
        cchoice = letters[i];
        var w=0;
        var l=0;
        var gl=10;
        var g=[];
        document.addEventListener("keydown", function(e){
            document.getElementById("wins").innerHTML = w;
            document.getElementById("losses").innerHTML = l;
            document.getElementById("guessesLeft").innerHTML = gl;
            document.getElementById("lettersGuessed").innerHTML = g;
            if (w===5 || l===5 || gl===0){
                if (w===5){
                    alert("You win!");
                }
                else if (l===5) {
                    alert("You lose!");
                }
                else if (gl===0){
                    l++;
                    gl=10;
                    g=[];
                    alert("Nope!");
                    i=Math.floor(Math.random()*26);
                    cchoice = letters[i];
                }
            }
            else{
                let x= e.key;
                if(x===cchoice){
                    alert("You got it!");
                    i=Math.floor(Math.random()*26);
                    cchoice = letters[i];
                    w++;
                    gl=10;
                    g=[];
                }
                else{
                gl--;
                g.push(x);
                }
            }
        });