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

let statusArea = document.querySelector('.status')

function IT(id){
    return document.getElementById(id).textContent.toString()
}

function disableBoxes(){
    for (let box = 1; box < 10; box++) {
        document.getElementById(box).style.pointerEvents = 'none'
    }
}

function itemClicked(num){
    document.getElementById(num).innerHTML = '<h1>' + XorO + '</h1>'
    document.getElementById(num).style.pointerEvents = 'none'
    XorO == 'X' ? XorO = 'O' : XorO = 'X'
    winMatch.forEach((match)=>{
        if(IT(match[0]) == 'X' && IT(match[1]) == 'X' && IT(match[2]) == 'X'){
            statusArea.innerHTML = 'X Won, <a onclick="location.reload()">Retry</a>'
            disableBoxes()
        }else if(IT(match[0]) == 'O' && IT(match[1]) == 'O' && IT(match[2]) == 'O'){
            statusArea.innerHTML = 'O Won, <a onclick="location.reload()">Retry</a>'
            disableBoxes()
        }else{}
    })
}
