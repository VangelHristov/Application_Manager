"use strict";

angular
  .module("applicationManager")
  .factory("dbContext",
    ['$resource', function ($resource) {
        const applications = $resource(
          "api/applications/:id",
          {id: "@id"},
          {
              update: {method: "PUT"}
          }
        );

        return {
            getAllApplications: () => applications.query().$promise,
            getApplication    : (id) => applications.get({id: id}).$promise,
            updateApplication : (id,application) => applications.update({id: id}, application).$promise,
            postApplication   : (application) => applications.save(application).$promise,
            deleteApplication : (id) => applications.delete({id: id}).$promise
        };
    }
    ]);