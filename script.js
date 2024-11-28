const btnAdd = document.getElementById("add")
const bonTouch =document.querySelector(".bontouch")
const forma =document.querySelector(".stadium1")
const formaselect = document.getElementById("formaselect")
const card11 = document.querySelector(".card11")
const card10 = document.querySelector(".card10")
const card9 = document.querySelector(".card9")
const card8 = document.querySelector(".card8")
const card7 = document.querySelector(".card7")
const card6 = document.querySelector(".card6")

let players = JSON.parse(localStorage.getItem("players")) || [];

let plyr=1

 // geting data from localstorage---------------------------------------------------------------------------

getTask_count(players);

function getTask_count(players) {  
  if (!(players.length === 0)) {
    players.forEach((player) => {
      
    const cardplayer =document.querySelector(`.chgm${plyr}`)
    cardplayer.classList.remove("hidden")
      addHtml(player);
      plyr++
    });
  }
 
}

   // add player to localstorage---------------------------------------------------------------------------

 function addPlayer(){
 
     const player =
    {
      "name": document.getElementById("name").value,
      "photo": document.getElementById("playerPhotoSelect").value,
      "position": document.getElementById("Position").value,
      "flag": document.getElementById("flagSelect").value,
      "logo": document.getElementById("clubSelect").value,
      "rating": document.getElementById("rating").value,
      "pace": document.getElementById("pace").value,
      "shooting": document.getElementById("shooting").value,
      "passing": document.getElementById("passing").value,
      "dribbling": document.getElementById("dribbling").value,
      "defending": document.getElementById("defending").value,
      "physical": document.getElementById("physical").value
    }
    players.push(player);
    localStorage.setItem("players", JSON.stringify(players));
    return player;
  
   
 }
   // add player to html---------------------------------------------------------------------------
   
function addHtml(player){
  let id
  switch(player.position) {
    case "RW":
    id= "RW"
      break;
    case "ST":
      id= "ST"
      break;
      case "LW":
      id= "LW"
      break;
      case "CM1":
      id= "CM1"
      break;
      case "CM2":
      id= "CM2"
      break;
      case "CM3":
      id= "CM3"
      break;
      case "LB":
      id= "LB"
      break;
      case "CB1":
      id= "CB1"
      break;
      case "CB2":
      id= "CB2"
      break;
      case "RB":
      id= "RB"
      break;
      case "GK":
      id= "GK"
      break;
  }
  const cardplayer =document.querySelector(id)

}

   // add Bon touch player to html---------------------------------------------------------------------------

 function addBonTouchHtml(player){

    const cardplayer =document.querySelector(`.chgm${plyr}`)
    cardplayer.classList.remove("hidden")
    cardplayer.querySelector(".rating").textContent=player.rating
    cardplayer.querySelector(".position").textContent=player.position
    cardplayer.querySelector(".photo").src=player.photo
    cardplayer.querySelector(".name").textContent=player.name
    cardplayer.querySelector(".pace").textContent=player.pace
    cardplayer.querySelector(".shooting").textContent=player.shooting
    cardplayer.querySelector(".passing").textContent=player.passing
    cardplayer.querySelector(".dribbling").textContent=player.dribbling
    cardplayer.querySelector(".defending").textContent=player.defending
    cardplayer.querySelector(".physical").textContent=player.physical
    cardplayer.querySelector(".logo").src=player.logo
    cardplayer.querySelector(".flag").src=player.flag

 }


      
   // statistique validation---------------------------------------------------------------------------

function statistiquesValidation(valid , inputId, megId){
  const statistique = document.getElementById(`${inputId}`).value;
  const statistiquesRegex = /^\d{2}$/;
  if (!statistiquesRegex.test(statistique) || statistique === "") {
      
      document.getElementById(`${megId}`).classList.remove("hidden");
      return valid = false;
  } else {
      document.getElementById(`${megId}`).classList.add("hidden");
      return valid=true
  }

}
     // validation ----------------------------------------------------------------------------

function validation(){

  
  let valid = true;
 
  const name = document.getElementById("name").value;
  const nameRegex = /^[a-zA-Z\s'-]{1,20}$/;
  if (!nameRegex.test(name) || name === "") {
      valid = false;
      document.getElementById("nameError").classList.remove("hidden");
  } else {
      document.getElementById("nameError").classList.add("hidden");
      valid=true
  }

   
  statistiquesValidation(valid , "rating" , "ratingError")
  statistiquesValidation(valid , "pace" ,"paceError")
  statistiquesValidation(valid , "shooting" , "shootingError")
  statistiquesValidation(valid , "passing" , "passingError")
  statistiquesValidation(valid , "dribbling" , "dribblingError")
  statistiquesValidation(valid , "defending" , "defendingError")
  statistiquesValidation(valid , "physical" , "physicalError")

if(!statistiquesValidation(valid , "rating" , "ratingError") ||  !statistiquesValidation(valid , "pace" ,"paceError")|| !statistiquesValidation(valid , "shooting" , "shootingError")||!statistiquesValidation(valid , "passing" , "passingError") ||!statistiquesValidation(valid , "dribbling" , "dribblingError") ||!statistiquesValidation(valid , "defending" , "defendingError") ||!statistiquesValidation(valid , "physical" , "physicalError") ){
  valid = false
}


 return valid;
     
}

   //  button add---------------------------------------------------------------------------

btnAdd.addEventListener("click",()=>{
   
  if(plyr>12){
    alert("the dakka is full");
    return
  }else{
    validation()
    if(validation()){
     
   addHtml(addPlayer())
   plyr++;

    }
}
}) 

// forma choosing ---------------------------------------------------------------------------

formaselect.addEventListener("click",()=>{

  if(formaselect.value==="4-3-3"){

    forma.classList="grid stadium1 grid-cols-9 grid-rows-4 items-center place-items-center bg-cover h-[1100px] "
    card11.classList= "card card11 RW"
    card10.classList= "card card10 ST"
    card9.classList= "card card9 LW"
    card6.classList=" card card6 CM3"
 
  }else if(formaselect.value==="4-4-2"){
    
    forma.classList ="grid stadium2 grid-cols-9 grid-rows-4 items-center place-items-center bg-cover h-[1100px]  "
    card11.classList= "card card11 ST1"
    card10.classList= "card card10 ST2"
    card9.classList= "card card9 LM"
    card6.classList=" card card6 RM"
  }
  
})

