

import angular from "angular";
import rmAppSwitcherDirective from './rm-app-switcher.directive.js';  

export default angular.module('relaymark.app-switcher', [ ])
  .directive('rmAppSwitcher', rmAppSwitcherDirective.createInstance)
  .name;