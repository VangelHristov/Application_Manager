"use strict";

angular
  .module("applicationManager")
  .controller("CreateController", ["$scope", "$state", "toastr", "constants", "dbContext",
      function ($scope, $state, toastr, constants, dbContext) {
          $scope.application = {};
          $scope.application.preferredWayOfCommunication = "";
          $scope.showDelete = false;
          $scope.phonePattern = constants.phonePattern;
          $scope.emailPattern = constants.emailPattern;
          $scope.filterName = "";

          $scope.save = () => {
              dbContext
                .postApplication($scope.application)
                .then(() => {
                    toastr.success("Application was saved.");
                    $state.go("allApplications");
                })
                .catch(err => toastr.error(err));
          };

          $scope.cancel = () => $state.go("allApplications");
      }]);