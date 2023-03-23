// var muscle = 'biceps'
// var type = 'strength'
// var difficulty = 'beginner'
// $.get({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/exercises?type=' + type + '&muscle' + muscle + '&difficulty=' + difficulty,
//     headers: { 'X-Api-Key': 'ZoZlBMSehdv8K6lUg3Pvmg==o8eYcP8CIamhm8po'},
//     contentType: 'application/json',
//     success: function (result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });


var beginner = $('#beginner');
var intermediate = $('#intermediate');
var expert = $('#expert');
var cardio = $("#cardio");
var stretching = $('#stretching');
var strengthTraining = $('#strengthTraining');
var difficultyButtons = $('#question-one button')
var exerciseButtons = $('#question-two button')
var getStarted = $('#get-started');
var createWorkout = $('#create-workout')
var muscleInputs = $('#question-three input')
var workoutOptions = {
    exerciseLevel: '',
    exerciseType: '',
    muscleGroup: '',
}



function showQuestionPage() {
    $('#welcome-screen').hide();
    $('#questions-page').removeClass('hide');
}
// we created a jQuery function to hide the welcome page and display the questions page
getStarted.click(showQuestionPage);

// muscle group 
function setExperienceLevel() {
    var btn = $(this)
    workoutOptions.exerciseLevel = btn.text()
    console.log(workoutOptions)

}

function setExerciseType() {
    var btn = $(this)
    workoutOptions.exerciseType = btn.text()
    console.log(workoutOptions)
}

function setMuscleGroup() {
    var input = $(this)
    workoutOptions.muscleGroup = input.val()
    console.log(workoutOptions)
}

function createCustomWorkout() {
    // this is where we hide question elements page and show workout page
    var url = `https://api.api-ninjas.com/v1/exercises?type=${workoutOptions.exerciseType.toLocaleLowerCase()}&muscle=${workoutOptions.muscleGroup.toLocaleLowerCase()}&difficulty=${workoutOptions.exerciseLevel.toLocaleLowerCase()}`;
    console.log(url)
    // var finalSelection = workoutOptions;
    $.get({
        method: 'GET',
        url: url,
        headers: { 'X-Api-Key': 'LYC7Sv/C6QGfB6EJhceMfw==m5c9bJZNY9gDM22Z' },
        contentType: 'application/json',
        success: function (result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

functionCreateQuote(){

    var category = 'happiness'
    
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': 'LYC7Sv/C6QGfB6EJhceMfw==m5c9bJZNY9gDM22Z'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
    }

difficultyButtons.click(setExperienceLevel)

exerciseButtons.click(setExerciseType)

muscleInputs.change(setMuscleGroup)

createWorkout.click(createCustomWorkout)
