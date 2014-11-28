angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {

	window.serverUrl = "http://localhost:3000";

	$scope.balance = "-51.32"

	$scope.purchase = {};
	$scope.purchase.items = [{}]

	$scope.createNewItem = function(event){
		if (event.keyCode !== 13) return;
		if (!_.isEqual($scope.purchase.items[$scope.purchase.items.length - 1], {})) $scope.purchase.items.push({});
	}

	$scope.$watch('purchase.items', function(){
		var arrayOfPrices = _.map($scope.purchase.items, function(item){
		 if (!item.cost) return 0;
		 return item.cost;
		})
		$scope.total = _.inject(arrayOfPrices, function(sum, price){
			return sum + price;
		});
	}, true);

	$scope.submitPurchase = function(){
		$http.post(window.serverUrl + '/purchases', $scope.purchase).success(function(data){

		});
	};


})

.filter('negativeCurrency', ["$filter", function ($filter) {       
  return function(amount, currencySymbol){
     var currency = $filter('currency');         

     if(amount.charAt(0) === "-"){
        return currency(amount, currencySymbol).replace("(", "-").replace(")", ""); 
     }

     return currency(amount, currencySymbol);
  };

}]).controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
