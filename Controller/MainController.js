var App = angular.module("App",['ngMaterial', 'ngRoute']);

App.controller("MainController",['$scope',function($scope) {
   $scope.title = "My Landing Page"; 
   $scope.menu = [
       {menuitem: 'Inicio', icon: 'dashboard', path: 'index'},
       {menuitem: 'Biografía', icon: 'account_balance', path: 'biography'},
       {menuitem: 'Clientes' ,icon: 'contacts', path:'clients'},
       {menuitem: 'Contacto' ,icon: 'perm_phone_msg', path:'contact'},
       {menuitem: 'Artículos', icon: 'class', path: 'articles'}
      ];
}]);

App.config(function($routeProvider){
   $routeProvider
   .when("/index",{
     templateUrl : "/Views/index.html"  
   })
   .when("/biography",{
     templateUrl : "/Views/biography.html"  
   })
   .when("/clients",{
     templateUrl : "/Views/clients.html"  
   })
   .when("/contact",{
     templateUrl : "/Views/contact.html"  
   })
   .when("/articles",{
     templateUrl : "/Views/articles.html"  
   });
});