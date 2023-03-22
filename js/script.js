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
    // var finalSelection = workoutOptions;
    $.get({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/exercises?type=' + workoutOptions.exerciseType + '&muscle=' + workoutOptions.muscleGroup + '&difficulty=' + workoutOptions.exerciseLevel,
        headers: { 'X-Api-Key': 'ZoZlBMSehdv8K6lUg3Pvmg==o8eYcP8CIamhm8po' },
        contentType: 'application/json',

        success: function (result) {
            console.log(result);

            // console.log(result[0].instructions)
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });


}
function activeButton() {
    $(this).addClass('active').siblings().removeClass('active')
}
activeButton()
difficultyButtons.click(setExperienceLevel, function () {
    $(this).addClass('active').siblings().removeClass('active')
})

exerciseButtons.click(setExerciseType, function () {
    $(this).addClass('active').siblings().removeClass('active')
})


muscleInputs.change(setMuscleGroup)

createWorkout.click(createCustomWorkout)
