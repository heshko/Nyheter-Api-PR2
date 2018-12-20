var app = angular.module("app")
// de är 5 api som använda vi i PoliticsHemsida
app.controller("contol1", function ($scope, $http) {
    $http.get("https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=51388baf88464fc4867c4103e8692f62")
        .then(function (nyheter1) {
            $scope.news = nyheter1.data.articles
        })
    $http.get("https://newsapi.org/v2/top-headlines?sources=breitbart-news&apiKey=51388baf88464fc4867c4103e8692f62")
        .then(function (nyheter2) {
            $scope.news2 = nyheter2.data.articles
            console.log( $scope.news2)
        })
    $http.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=51388baf88464fc4867c4103e8692f62")
        .then(function (nyheter3) {
            $scope.news3 = nyheter3.data.articles
            console.log( $scope.news3)
        })
    $http.get("https://newsapi.org/v2/top-headlines?sources=ansa&apiKey=51388baf88464fc4867c4103e8692f62")
        .then(function (nyheter4) {
            $scope.news4 = nyheter4.data.articles
            console.log( $scope.news3)
        })
})
// de är 2 api som använda vi i PoliticsHemsida
app.controller("contol2", function ($scope, $http) {
    $http.get("https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=51388baf88464fc4867c4103e8692f62")
        .then(function (myData1) {
            $scope.sports = myData1.data.articles
        })
    $http.get("https://newsapi.org/v2/top-headlines?sources=fox-sports&apiKey=51388baf88464fc4867c4103e8692f62")
        .then(function (myData2) {
            $scope.sports2 = myData2.data.articles
        })
})
// det är en api för economie
app.controller("contol3", function ($scope, $http) {
    $http.get("https://newsapi.org/v2/top-headlines?sources=australian-financial-review&apiKey=51388baf88464fc4867c4103e8692f62")
        .then(function (myData3) {
            $scope.economi = myData3.data.articles
        })
})

