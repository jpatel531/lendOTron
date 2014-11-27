angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

	$scope.balance = 51.32

	$scope.testing = "Hello"

	$scope.items = [{}]

	$scope.createNewItem = function(event){
		if (event.keyCode !== 13) return;
		if (!_.isEqual($scope.items[$scope.items.length - 1], {})) $scope.items.push({});
	}

	$scope.$watch('items', function(){
		var arrayOfPrices = _.map($scope.items, function(item){
		 if (!item.cost) return 0;
		 return item.cost;
		})
		$scope.total = _.inject(arrayOfPrices, function(sum, price){
			return sum + price;
		});
	}, true);

})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
