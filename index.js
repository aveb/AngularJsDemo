angular.module('shoppingList', [])
  .component('app', {
    template: `
      <h1>Shopping List</h1>
      <item ng-repeat="item in $ctrl.list" cow="item"></item>
    `,
    controller: function() {
      this.list = [
        'steak',
        'eggs',
        'mangos'
      ];
    }
  })
  .component('item', {
    template: `
      <h6>{{$ctrl.cow}}</h6>
    `,
    bindings: {
      cow: '<'
    }
  });
