const URL = 'https://dreambig.herokuapp.com';
$(document).ready(function (){
    const id = parseQueryString();
    function parseQueryString() {
        url = window.location.href;
        let id = url.split('?')[1].split('&')[0].split('=')[1];
        return id;

    }
getUserData(id).then(getUserInfo).then(getDreams).then(displayDreams);

});
function getUserData (id){
    data =  $.get(`${URL}/user/${id}`);
    console.log(data);
    return data;
}
function getUserInfo (data){
    console.log(data.email);
    $('.user-info').append(`<h1>${data.email}</h1>`);
    return data.id;
}
function getDreams (id){
    console.log(id);
    dreams = $.get(`${URL}/user/${id}/dream`);
    return dreams;
}
function displayDreams(dreams){
    dreams.forEach(function(element){
        $('.display-dreams').append(`<h2>Category: ${element.category}</h2><h5>Description: ${element.description}</h5><img src="${element.image_url}"/>`);
    });

}
function getHostUrl (){
    if (window.location.host.indexOf('localhost') != -1){
        return 'http://localhost:3000';

    } else {
        return 'https.dreambig.herokuapp.com';
    }
}
