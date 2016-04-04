angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.travelO', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/travelO.html',
        controller: 'travelOCtrl'
      }
    }
  })

  .state('tripOptions', {
    url: '/page3',
    templateUrl: 'templates/tripOptions.html',
    controller: 'tripOptionsCtrl'
  })

  .state('tabsController.savedSearch', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/savedSearch.html',
        controller: 'savedSearchCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.searchResult', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/searchResult.html',
        controller: 'searchResultCtrl'
      }
    }
  })

  .state('recentSearches', {
    url: '/page6',
    templateUrl: 'templates/recentSearches.html',
    controller: 'recentSearchesCtrl'
  })

  .state('account', {
    url: '/page7',
    templateUrl: 'templates/account.html',
    controller: 'accountCtrl'
  })

  .state('payments', {
    url: '/page8',
    templateUrl: 'templates/payments.html',
    controller: 'paymentsCtrl'
  })

  .state('login', {
    url: '/page9',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.reviewTrip', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/reviewTrip.html',
        controller: 'reviewTripCtrl'
      }
    }
  })

  .state('payAndBook', {
    url: '/page11',
    templateUrl: 'templates/payAndBook.html',
    controller: 'payAndBookCtrl'
  })

  .state('myTrips', {
    url: '/page12',
    templateUrl: 'templates/myTrips.html',
    controller: 'myTripsCtrl'
  })

  .state('tabsController.similarTrips', {
    url: '/page13',
    views: {
      'tab2': {
        templateUrl: 'templates/similarTrips.html',
        controller: 'similarTripsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});