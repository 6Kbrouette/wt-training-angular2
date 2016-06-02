/**
 *
 * (c) 2013-2016 Wishtack
 *
 * $Id: $
 */

let context;

/* Loading dependencies. */
// import _ from 'lodash';
// import angular from 'angular';
// import 'angular-animate/angular-animate';
// import 'angular-aria/angular-aria';
// import 'angular-material/angular-material';
// import 'angular-ui-router/release/angular-ui-router';

/* Loading some plain es5 libraries. */
// import {NamedParameters} from './lib/named-parameters';
 
// window._ = _;
// window.angular = angular;

/* Loading angular 1 modules. */
context = require.context('.', true, /ng-module-.*\.js$/);
context.keys().forEach(context);
/* Loading angular 1 stuff. */
context = require.context('.', true, /ng-(config|controller|directive|filter|model|run|service)-.*\.js$/);
context.keys().forEach(context);