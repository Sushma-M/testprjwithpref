Application.$controller("Prefab2023Controller", ["$scope", function ($scope) {
	"use strict";

	/* 
	 * This function will be invoked when any of this prefab's property is changed
	 * @key: property name
	 * @newVal: new value of the property
	 * @oldVal: old value of the property
	 */
	function propertyChangeHandler(key, newVal, oldVal) {
		/*
		switch (key) {
			case "prop1":
				// do something with newVal for property 'prop1'
				break;
			case "prop2":
				// do something with newVal for property 'prop2'
				break;
		}
		*/
	}
	/* register the property change handler */
	$scope.propertyManager.add($scope.propertyManager.ACTIONS.CHANGE, propertyChangeHandler);

	$scope.onInitPrefab = function() {
		// this method will be triggered post initialization of the prefab.
	}
}]);

Application.$controller("grid1Controller", ["$scope",
	function($scope) {
		"use strict";
		$scope.ctrlScope = $scope;
	}
]);

Application.$controller("grid2Controller", ["$scope",
	function($scope) {
		"use strict";
		$scope.ctrlScope = $scope;
	}
]);

Application.$controller("grid3Controller", ["$scope",
	function($scope) {
		"use strict";
		$scope.ctrlScope = $scope;
	}
]);

Application.$controller("grid4Controller", ["$scope",
	function($scope) {
		"use strict";
		$scope.ctrlScope = $scope;
	}
]);

Application.$controller("grid5Controller", ["$scope",
	function($scope) {
		"use strict";
		$scope.ctrlScope = $scope;
	}
]);



Application.$controller("grid7Controller", ["$scope",
	function($scope) {
		"use strict";
		$scope.ctrlScope = $scope;
	}
]);

Application.$controller("grid7_1Controller", ["$scope",
	function($scope) {
		"use strict";
		$scope.ctrlScope = $scope;
	}
]);

Application.$controller("grid8Controller", ["$scope",
	function($scope) {
		"use strict";
		$scope.ctrlScope = $scope;
	}
]);

Application.$controller("grid9Controller", ["$scope",
	function($scope) {
		"use strict";
		$scope.ctrlScope = $scope;
	}
]);

Application.$controller("grid10Controller", ["$scope",
	function($scope) {
		"use strict";
		$scope.ctrlScope = $scope;
	}
]);

Application.$controller("grid11Controller", ["$scope",
	function($scope) {
		"use strict";
		$scope.ctrlScope = $scope;
	}
]);



Application.$controller("grid13Controller", ["$scope",
	function($scope) {
		"use strict";
		$scope.ctrlScope = $scope;
	}
]);

Application.$controller("grid13_1Controller", ["$scope",
	function($scope) {
		"use strict";
		$scope.ctrlScope = $scope;
	}
]);

Application.$controller("liveform1Controller", ["$scope",
	function($scope) {
		"use strict";
		$scope.ctrlScope = $scope;
	}
]);



Application.$controller("grid15Controller", ["$scope",
	function($scope) {
		"use strict";
		$scope.ctrlScope = $scope;
	}
]);