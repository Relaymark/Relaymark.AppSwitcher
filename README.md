# Relaymark.AppSwitcher

This project is a small directive which is a dropdown (no depedencies, only angular+css) with icons and url which redirect to ours projects.
But you can override the default list of app by using rm-app-list attribute.

Installation : 
```javascript
import angular from 'angular';
import rmAppSwitcher from 'relaymark.appswitcher/dist/rm-app-switcher.js'; 
import rmAppSwitcherCSS from 'relaymark.appswitcher/dist/rm-app-switcher.css'; 

export default angular.module('your-awesome-project', [rmAppSwitcher]);
```

Overriding app list
```javascript
[{
    icon: 'icon-directory',
    name: 'Directory',
    url: 'http://beta.relaymark.com/'
}]
```