const winMatch = [
    ['1','2','3'],
    ['4','5','6'],
    ['7','8','9'],
    ['1','4','7'],
    ['2','5','8'],
    ['3','6','9'],
    ['1','5','9'],
    ['3','5','7'],
]

let XorO = 'X'
let over = false
let statusArea = document.getElementById('status')
let X_WON = 'X Won, <a onclick="location.reload()">Retry</a>'
let O_WON = 'O Won, <a onclick="location.reload()">Retry</a>'
let NO_WINNER = 'Nobody Won, <a onclick="location.reload()">Retry</a>'

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
    document.getElementById(num).innerHTML = '<h1>' + XorO + '</h1>'
    document.getElementById(num).style.pointerEvents = 'none'
    XorO == 'X' ? XorO = 'O' : XorO = 'X'
    winMatch.forEach((match)=>{
        if(IT(match[0]) == 'X' && IT(match[1]) == 'X' && IT(match[2]) == 'X'){
            statusArea.innerHTML = X_WON
            disableBoxes()
            over = true
        }else if(IT(match[0]) == 'O' && IT(match[1]) == 'O' && IT(match[2]) == 'O'){
            statusArea.innerHTML = O_WON
            disableBoxes()
            over = true
        }else{
            console.log(draw)
            if(draw == 9 && !over){
                statusArea.innerHTML = NO_WINNER
            }
        }
    })
}
