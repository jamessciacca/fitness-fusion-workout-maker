var beginner = $('#beginner');
var intermediate = $('#intermediate');
var expert = $('#expert');
var powerlifting = $("#powerlifting");
var plyometrics = $('#plyometrics');
var strengthTraining = $('#strength-training');
var difficultyButtons = $('#question-one button');
var exerciseButtons = $('#question-two button');
var muscleButtons = $('#question-three button');
var chest = $('#chest');
var lats = $('#lats');
var quadriceps = $('#quadriceps');
var hamstring = $('#hamstring');
var bicep = $('#bicep');
var tricep = $('#tricep');
var getStarted = $('#get-started');
var createWorkout = $('#create-workout');
var displayWorkout = $('#display-workout');
var displayQuote = $('#display-quote');
var logoBtn = $('#logo-btn');
var workoutOptions = {
    exerciseLevel: '',
    exerciseType: '',
    muscleGroup: '',
}

function showFinalPage(){
    $('#questions-page').hide();
    $('#final-page').removeClass('hide');
}

function showQuestionPage() {
    $('#welcome-screen').hide();
    $('#questions-page').show();
    $('#logo').show();
}

function showWelcomePage(){
    $('#welcome-screen').show();
    $('#questions-page').hide();
    $('#final-page').hide();
    $('#logo').hide();
}
// we created a jQuery function to hide the welcome page and display the questions page
getStarted.click(showQuestionPage);
createWorkout.click(showFinalPage);
logoBtn.click(showWelcomePage);

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
    var btn = $(this)
    workoutOptions.muscleGroup = btn.text()
    console.log(workoutOptions)
}

function createQuote(){

    var category = 'inspirational'
    
    $.get({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': 'LYC7Sv/C6QGfB6EJhceMfw==m5c9bJZNY9gDM22Z'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        for (let i = 0; i < result.length; i++){
            var html = `
                <div class='inspo-quote  p-5'>
                    <h3 class='font-bold'>Quote of the Day - ${result[i].quote} By - ${result[i].author}</h3>
                </div>
            `;
            displayQuote.append(html)
        }
        
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
}

function createCustomWorkout() {
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
            for (let i = 0; i < result.length; i++){
                var html = `
                    <div class='workout p-5'>
                        <hr>
                        <h1 class='font-bold text-fuchsia-900'>${result[i].name}</h1>
                        <p>${result[i].instructions}</p>
                    </div>
                `;
                displayWorkout.append(html)
            }
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}


difficultyButtons.click(function () {
    $(this).addClass('active').siblings().removeClass('active')
    workoutOptions.exerciseLevel = $(this).text()
    console.log(workoutOptions.exerciseLevel)
})

exerciseButtons.click(function () {
    $(this).addClass('active').siblings().removeClass('active')
    workoutOptions.exerciseType = $(this).text()
    console.log(workoutOptions.exerciseType)

})
muscleButtons.click(function () {
    $(this).addClass('active').siblings().removeClass('active')
    workoutOptions.muscleGroup = $(this).text()
    console.log(workoutOptions.muscleGroup)

})

createWorkout.click(createCustomWorkout)
createWorkout.click(createQuote)