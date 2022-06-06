// document.getElementById('btn').addEventListener("click", userInformation);



var buttonEl = document.querySelector("#btn")
var userSearchEl = document.querySelector("#userSearch");

// var redirect = function(e){    
//     console.log("Here");
//     var redirectPage = buttonEl.value;
//     window.open = redirectPage;
//     if(window.location === redirectPage)
//     {
//         displayYoutube(); 
//     }
// }

// var userInformation = function(e) {
//     var userChoice = userSearchEl.value.trim();
//     // e = e || window.event;

//     if(userChoice != "") {
//         document.getElementById('btn').addEventListener('click', userInformation);
//         event.preventDefault(e);
//         document.getElementById('btn').click();
//         return false;
//     }

//       return true;
// }

var redirect = function(){
    console.log("redirect", redirectPage)

    var redirectPage = buttonEl.value;
    window.location = redirectPage
    displayYoutube();
}

var userInformation = function(event){
    event.preventDefault();
    var userChoice = userSearchEl.value.trim();

    if(userChoice != "") {
        // displayYoutube();
        redirect();
    }
}

var displayYoutube = function(userChoice) {
    var youtubeApi = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCJVNary6yBhD7_VSyVCxAaleA0ZeyW-Vw&type=video&q=" + userChoice
    // "https://www.googleapis.com/youtube/v3/search=" + userSearchEl + "part=snippet.thumbnails.default&chart=mostPopular&videoCategoryId=snippet&key=AIzaSyCJVNary6yBhD7_VSyVCxAaleA0ZeyW-Vw"

    fetch(youtubeApi)
    .then(function(response) {
        return response.json();
    }) 
    .then(function(displayYoutube){
        var youtubeUrl = displayYoutube.items[0].snippet.thumbnails.default.url;
        console.log(displayYoutube);
        // var youtubeEl = document.querySelector("#youtube");
        // userChoice.innerHTML = displayYoutube();
        // userChoice.innerHtml = displayYoutube.items 
        
        // console.log("displayYoutube", displayYoutube.items[0].snippet.thumbnails.default.url);
    //     var youtubeEl = document.querySelector("#youtube");
    //    console.log("did I render", youtubeEl.append( "<div><video src='"+youtubeUrl+"'></div>" ))
    //     youtubeEl.append( "<div><video src='"+youtubeUrl+"'></div>" );
 
        // youtubeEl.vid.play() = youtubeApi + displayYoutube.items 
        // youtubeEl = displayYoutube.items
        // youtubeEl.vid.play();
        


    }) 
    
}

buttonEl.addEventListener("click", userInformation);

// var displayMatch = function (userChoice) {
//     var musicMatchApi =  "https://api.musixmatch.com/ws/1.1/q=" + userChoice + "artist.search?q_artist=prodigy&page_size=5&apikey=70f48e3a238075767ef29e2921e77a8b"

//     fetch(musicMatchApi)
//     .then(function(getMusic) {
//         return getMusic.json();
//     })
//     .then(function(displayMatch) {
//         console.log(displayMatch)
//     })
// }


