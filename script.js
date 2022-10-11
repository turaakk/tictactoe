// Possible winner matches
let WIN_MATCH = [
    ['1','2','3'],
    ['4','5','6'],
    ['7','8','9'],
    ['1','4','7'],
    ['2','5','8'],
    ['3','6','9'],
    ['1','5','9'],
    ['3','5','7'],
]

// Weather it O's or X's turn
X_O = 'X'

// If the game is over
over = false

// 
statusArea = document.getElementById('status')
X_WON = 'X Won, <a onclick="location.reload()">Retry</a>'
O_WON = 'O Won, <a onclick="location.reload()">Retry</a>'
NO_WINNER = 'Nobody Won, <a onclick="location.reload()">Retry</a>'

// get element by Id
function IT(id){
    return document.getElementById(id).textContent.toString()
}

function disableBoxes(){
    for (let box = 1; box < 10; box++) {
        document.getElementById(box).style.pointerEvents = 'none'
    }
}

let draw = 0
function itemClicked(num){
    draw++
    document.getElementById(num).innerHTML = '<h1>' + X_O + '</h1>'
    document.getElementById(num).style.pointerEvents = 'none'
    X_O == 'X' ? X_O = 'O' : X_O = 'X'
    WIN_MATCH.forEach((match)=>{
        if(IT(match[0]) == 'X' && IT(match[1]) == 'X' && IT(match[2]) == 'X'){
            statusArea.innerHTML = X_WON
            disableBoxes()
            over = true
        }else if(IT(match[0]) == 'O' && IT(match[1]) == 'O' && IT(match[2]) == 'O'){
            statusArea.innerHTML = O_WON
            disableBoxes()
            over = true
        }else{
            if(draw == 9 && !over){
                statusArea.innerHTML = NO_WINNER
            }
        }
    })
}
