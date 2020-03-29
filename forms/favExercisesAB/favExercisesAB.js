var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercisesAB.onshow=function(){

}

selExercises.onfocusout=function(){

}



Btnexercise.onclick=function(){
  if (selExercises.text[0] == "situps" && selExercises.text[1] == "plank") {
    NSB.MsgBox("You chose situps and plank")
} else { 
    NSB.MsgBox("You did not choose two core exercises")
}
}

BtnChangeMobNav.onclick=function(){
ChangeForm(mobileNav)
}