var muscle = 'biceps'
var type = 'strength'
var difficulty = 'beginner'
$.get({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/exercises?type=' + type + '&muscle' + muscle + '&difficulty=' + difficulty,
    headers: { 'X-Api-Key': 'ZoZlBMSehdv8K6lUg3Pvmg==o8eYcP8CIamhm8po'},
    contentType: 'application/json',
    success: function (result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

