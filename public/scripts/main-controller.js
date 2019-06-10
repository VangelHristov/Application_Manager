"use strict";

angular
  .module("applicationManager")
  .controller("MainController",
    ["$scope", "applications", "$state",
        function ($scope, applications, $state) {
            $scope.applications = applications;
            $scope.create = () => $state.go("createApplication");
        }
    ]);