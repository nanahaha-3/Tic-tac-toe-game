let valuesContainer = [['','',''],['','',''],['','','']]

let move = 'X'

const buttons = document.getElementsByClassName('box');
for(i=0; i < buttons.length; i++){
  const box = buttons[i]
  const listener = function(){start(box)}
  box.addEventListener('click', listener, {once : true})
}

function start(box){
  box.innerHTML = `<p>${move}</p>`
  storing(move, box)

  check(move)

  if(move === 'X'){
    move = 'O'
  }else{
    move = 'X'
  }
}

function storing(move, box){
  if(box.classList.contains('box1')){
    valuesContainer[0][0] = move
  }else if(box.classList.contains('box2')){
    valuesContainer[0][1] = move
  }else if(box.classList.contains('box3')){
    valuesContainer[0][2] = move
  }else if(box.classList.contains('box4')){
    valuesContainer[1][0] = move
  }else if(box.classList.contains('box5')){
    valuesContainer[1][1] = move
  }else if(box.classList.contains('box6')){
    valuesContainer[1][2] = move
  }else if(box.classList.contains('box7')){
    valuesContainer[2][0] = move
  }else if(box.classList.contains('box8')){
    valuesContainer[2][1] = move
  }else if(box.classList.contains('box9')){
    valuesContainer[2][2] = move
  }
}

function check(move){
  const v1 = valuesContainer[0][0]
  const v2 = valuesContainer[0][1]
  const v3 = valuesContainer[0][2]
  const v4 = valuesContainer[1][0]
  const v5 = valuesContainer[1][1]
  const v6 = valuesContainer[1][2]
  const v7 = valuesContainer[2][0]
  const v8 = valuesContainer[2][1]
  const v9 = valuesContainer[2][2]

  const outcomes = [[v1,v2,v3],[v4,v5,v6],[v7,v8,v9],[v1,v4,v7],[v2,v5,v8],[v3,v6,v9],[v1,v5,v9],[v3,v5,v7]]

  let counter = 0
  outcomes.forEach(find => {
    counter = 0
    find.forEach(v => {
      if(move === v){
        counter++
        if(counter===3){
          display(counter)
        }
      }else{
        counter = 0
      }
    })
  })
  
}

function display(counter){
  if(counter === 3){
    text.innerHTML = `<p class="status"> ${move} WINNER!`
  }
}

const text = document.getElementById('text')
// text.innerHTML = `<p class="status">X vs O</p>`
const refresh = document.getElementById('refresh-btn')
refresh.addEventListener('click', ()=>{window.location.reload()})