// vi gjorde Routing 
var app = angular.module("app",["ngRoute"])
app.config(["$routeProvider",function($routeProvider){
$routeProvider
.when("/politics",{
    templateUrl:"/Routing/Politics.html",
    controller:"contol1"
})
.when("/sport",{
    templateUrl:"/Routing/Sport.html",
    controller:"contol2"
})
.when("/economi",{
    templateUrl:"/Routing/Economie.html",
    controller:"contol3"
})
.when("/Svensk-Nyheter",{
    templateUrl:"/Routing/Svensk-Nyheter.html",
    controller:"contol3"
})

.otherwise({
    // våra hemsidan börjar direct politics
    redirectTo:"/politics"
})
}])