import style from './rm-app-switcher.scss';
import template from './rm-app-switcher.html'; 

export default class rmAppSwitcher {
  constructor($document) {
    this.restrict = 'E';
    this.templateUrl = template;
    this.transclude = true;
    this.replace = true;
    this.scope = true; 
    this.controllerAs = 'ctrl';
    this.bindToController = {
      rmAppList: '='
    };

    /* @ngInject */
    this.controller = function ($scope, $filter) {
      var self = this;
      self.showDropdown = false;
    };

    this.link = function(scope, element, attrs) {
      scope.rmAppList = [
        {
          icon: 'icon-directory',
          name: 'Directory',
          url: 'http://beta.relaymark.com/'
        },
        {
          icon: 'icon-community',
          name: 'Community',
          url: 'http://beta.community.relaymark.com/'
        },
        {
          icon: 'icon-analytics',
          name: 'Analytics',
          url: 'http://go.relaymark.com/'
        }
      ];

        $document.bind('click', function(event){
          var isClickedElementChildOfPopup = element
            .find(event.target)
            .length > 0;
            
          if (isClickedElementChildOfPopup)
            return;
            
          scope.showDropdown = false;
          scope.$apply();
        });
    };
  }

  static createInstance($document) {
    rmAppSwitcher.instance = new rmAppSwitcher($document);
    return rmAppSwitcher.instance;
  }
}
rmAppSwitcher.createInstance.$inject = ['$document'];
