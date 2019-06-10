"use strict";

angular
  .module(
    "applicationManager",
    ["ui.router", "ngResource", "ngAnimate", "toastr", "ngDialog", "ngMessages"]
  )
  .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state("allApplications", {
            url        : "/",
            templateUrl: "/views/all-applications.html",
            controller : "MainController",
            resolve    : {
                applications: ["dbContext", function (dbContext) {
                    return dbContext.getAllApplications();
                }]
            }

        })
        .state("createApplication", {
            url        : "/create",
            templateUrl: "/views/create-application.html",
            controller : "CreateController"
        })
        .state("applicationDetails", {
            url        : "/applications/:id",
            templateUrl: "/views/update-application.html",
            controller : "UpdateController",
            resolve    : {
                application: ["dbContext", "$stateParams", function (dbContext, $stateParams) {
                    return dbContext.getApplication($stateParams.id);
                }]
            }
        });

      $urlRouterProvider.otherwise("/");
  });