function buttonclick(val){
    //GETTING MULTIPLE VALUES TO SCREEN

   document.getElementById("screen").value= document.getElementById("screen").value+val;
}
//CLEAR THE ELEMTS IN THE SCREEN
function clearDisplay(){
    document.getElementById("screen").value=""
}
//for getting result of equal to
function equalClick(){
    var text=document.getElementById("screen").value //get value from the screen
    var result=eval(text) //use eval to perform operation
    document.getElementById('screen').value=result //return result to the screen
}