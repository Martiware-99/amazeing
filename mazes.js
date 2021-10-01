const LEVEL_1 = [
    ["*","*","*","*","*","*","*","*","*","*","*",".","*"],
    ["*",".",".",".",".",".",".","*","*",".","*",".","T"],
    ["*","*","*","*","*",".",".",".",".",".","*",".","*"],
    ["*","*","*","*","*",".","*","*","*",".","*",".","*"],
    ["*","*","*","*","*",".","*","*","*","*","*",".","*"],
    ["*","*","*","*","*",".","*","*","*","*","*",".","*"],
    ["*","*","*","*","*",".",".",".",".",".",".",".","*"],
    ["*","*","*","*","*",".","*","*","*","*","*","*","*"],
    ["*",".",".",".",".",".",".",".",".",".","*","*","*"],
    ["*",".","*","*","*","*","*","*",".",".",".","*","*"],
    ["*",".",".",".",".","*","*","*","*","*","*","*","*"],
    ["*","*","*","*","*","*","*","*","*","*","*","*","*"]
  ]

for (let lign of LEVEL_1){
    let lignElement = document.createElement("div")
    lignElement.className = "ligne"
    document.querySelector("main").appendChild(lignElement)
   for (let elem of lign){
      let square = document.createElement("div")
      if (elem === "*"){
          square.className = "tile wall"
      } 
      else if (elem === "S"){
          square.className = "tile start"
      }
      else if (elem === "T"){
          square.className = "tile treasure"
      }
      else {
          square.className = "tile path"
        }      
        lignElement.appendChild(square)
    }
}


window.alert("move with z,q,s,d")


let link = document.createElement("div")
link.className = "link"
document.querySelector("body").appendChild(link)



function findPosition(obj) {
    var curleft = curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return [curleft,curtop];
    }
}

let path = document.querySelectorAll(".path")
let pathArr = Array.from(path)

let pathArrPosition = []

for (let elem of pathArr) {
    pathArrPosition.push(findPosition(elem))
}

console.log(pathArrPosition)

let positionX = 65
let positionY = 65
link.style.left = positionX + "px"
link.style.top = positionY + "px"




document.addEventListener("keydown", e=>{
    if(e.key === "d"){
        
        positionX += 60
        link.style.left = positionX + "px"
    }
    else if(e.key === "q"){
        positionX -= 60
        link.style.left = positionX + "px"
    }
    else if(e.key === "z"){
        positionY -= 60
        link.style.top = positionY + "px"
    }
    else if(e.key === "s"){
        positionY += 60
        link.style.top = positionY + "px"
    }
    else {}
    let arrPositionX = (positionX - 5) / 60
    let arrPositionY = (positionY - 5) / 60
    console.log(arrPositionX,arrPositionY)
    console.log(LEVEL_1[arrPositionY][arrPositionX])
})



