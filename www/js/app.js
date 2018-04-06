// Defining Module
angular.module('starter', ['ionic','ngStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// Defing controller
.controller('appController',function($scope,$localStorage,$ionicPopup){
     $scope.shouldShowDelete = false;
 $scope.shouldShowReorder = false;
 $scope.listCanSwipe = true
    
// LocalStorage  
    var temp2 = $localStorage.temp1;    
    if(typeof(temp2) == 'undefined'){
        var stack = ['ionic','anything','phonegap'];
        $localStorage.temp1  = stack;
        console.log("NOT set")
    }   
    
    $scope.lists = $localStorage.temp1;
    $scope.lists.sort();
 // Add Item --    
    $scope.addItem  = function(){
        
        if($scope.lists.indexOf($scope.newItem) !== -1){
            console.log("present");
            var alert = $ionicPopup.show({
                title: 'Already in list',
                buttons: [
                    { text: 'Okay',
                      type: 'button-calm'
                    },
                ]
            });
            
        }else{
            $scope.lists.push($scope.newItem);
        }
        
    }
    $scope.remove = function(x){
        $scope.lists.splice(x,1);
    }
        
    $scope.showPopup = function(index) {
    console.info(index);
      $scope.data = {};

      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: '<input type="text" ng-model="data.updateList">',
        title: 'Edit list',
        scope: $scope,
        buttons: [
          { text: 'Cancel' },
          {
            text: '<b>Save</b>',
            type: 'button-positive',
            onTap: function(e) {
                console.log(index);
                console.log($scope.updateList);
                console.log($scope.data.updateList);
               $scope.lists[index] = $scope.data.updateList;
            }
          }
        ]
      });
     };
    
    
    $scope.key = "outline";
    $scope.shapes =  "ion-ios-heart-outline";
    $scope.changeColor = function(index){
        
        console.log(index);
        if($scope.key == "outline"){
            $scope.key = "soild";            
    //        var tempx = "icon-"+index;
    //        console.log(tempx);
    //        angular.element(document.querySelector(tempx)).style.background = "red";             
    //        angular.element('#icon-'+index).css('color', 'red');
                $scope.shapes =  "ion-ios-heart";
                console.log($scope.key);
            }else{
                $scope.key = "outline";
                $scope.shapes =  "ion-ios-heart-outline";
                console.log($scope.key);
            }
    }
    
    $scope.singup = function(){
        console.log($scope.up_username);
        console.log($scope.up_name);
        console.log($scope.up_password);
        
        $scope.singups = 
            {
                Username : $scope.up_username,
                Name: $scope.up_name,
                password: $scope.up_password,
            };
        console.log($scope.singups);
    }  
    
    $scope.login = function(){
        console.log($scope.ln_username);
        console.log($scope.ln_password);
            $scope.logins = 
            {
                Username : $scope.ln_username,
                password: $scope.ln_password,
            };
        console.log($scope.logins);
        
    }  

})