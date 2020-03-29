RadDescribeYou.onchange=function(choice){
  LblRadio.value = `I agree you are a very ${$("input[name=RadDescribeYou]:checked").prop("value")} person!`
}

BtnFavExChange.onclick=function(){
ChangeForm(favExercisesAB)
  
}
