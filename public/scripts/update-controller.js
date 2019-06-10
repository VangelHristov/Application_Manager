"use strict";

angular
  .module("applicationManager")
  .controller("UpdateController",
    ["$scope", "application", "$stateParams", "$state", "toastr", "constants", "dbContext", "ngDialog",
        function ($scope, application, $stateParams, $state, toastr, constants, dbContext, ngDialog) {
            $scope.showDelete = true;
            $scope.application = application;
            $scope.application.availableToStart = new Date(application.availableToStart);
            $scope.phonePattern = constants.phonePattern;
            $scope.emailPattern = constants.emailPattern;

            $scope.save = () => {
                dbContext
                  .updateApplication($stateParams.id, $scope.application)
                  .then(() => {
                      toastr.success("Application was updated");
                      $state.go("allApplications");
                  })
                  .catch(err => toastr.error(err));

            };

            $scope.cancel = () => $state.go("allApplications");

            $scope.delete = () => {
                dbContext
                  .deleteApplication($stateParams.id)
                  .then(() => {
                      toastr.success("Applications was deleted");
                      $state.go("allApplications");
                  })
                  .catch(err => toastr.error(err));
            };

            $scope.openConfirmDialog = () =>
              ngDialog
                .openConfirm({template: "/views/dialog.html"})
                .then(() => $scope.delete(), () => console.log("Canceled delete"));
        }]);