// code your solution here


function saturdayFun(activity = "roller-skate") {

    return (`This Saturday, I want to ${activity}!`);
}
activity();
activity("swim");


 
const mondayWork = function(activity = "go to the office") {
    console.log `This Monday, I will ${activity}.`;
 };
 
 mondayWork(); 
 mondayWork("bathe my dog"); 

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}


