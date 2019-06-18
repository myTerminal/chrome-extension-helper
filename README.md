# chrome-extension-helper

[![npm version](https://badge.fury.io/js/chrome-extension-helper.svg)](https://badge.fury.io/js/chrome-extension-helper)
[![npm downloads](https://img.shields.io/npm/dt/chrome-extension-helper.svg)](https://www.npmjs.com/package/chrome-extension-helper)  
[![Build Status](https://travis-ci.org/myTerminal/chrome-extension-helper.svg?branch=master)](https://travis-ci.org/myTerminal/chrome-extension-helper)
[![Code Climate](https://codeclimate.com/github/myTerminal/chrome-extension-helper.png)](https://codeclimate.com/github/myTerminal/chrome-extension-helper)
[![Coverage Status](https://img.shields.io/coveralls/myTerminal/chrome-extension-helper.svg)](https://coveralls.io/r/myTerminal/chrome-extension-helper?branch=master)  
[![Dependency Status](https://david-dm.org/myTerminal/chrome-extension-helper.svg)](https://david-dm.org/myTerminal/chrome-extension-helper)
[![devDependency Status](https://david-dm.org/myTerminal/chrome-extension-helper/dev-status.svg)](https://david-dm.org/myTerminal/chrome-extension-helper#info=devDependencies)
[![peer Dependency Status](https://david-dm.org/myTerminal/chrome-extension-helper/peer-status.svg)](https://david-dm.org/myTerminal/chrome-extension-helper#info=peerDependencies)  
[![License](https://img.shields.io/github/license/myTerminal/chrome-extension-helper.svg)](https://opensource.org/licenses/MIT)  
[![NPM](https://nodei.co/npm/chrome-extension-helper.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/chrome-extension-helper/)

A library of constructs for Google Chrome extensions [in-progress]

## Wrappers

* `chrome.storage.local` & `chrome.storage.sync`

## How to Use

### Directly from a web page

One can use *chrome-extension-helper* directly from a web-page by a attaching script file to the DOM.

    <!-- Attaching the chrome-extension-helper script -->
    <script type="text/javascript" src="path/to/library/chrome-extension-helper.js"></script>
    
    <!-- Usage -->
    <script type="text/javascript">
        chromeExtensionHelper.initializeStorage();
    </script>

### With [Webpack](https://webpack.js.org), [Browserify](http://browserify.org) or [RequireJS](http://requirejs.org)

Install *chrome-extension-helper* from NPM

    npm install chrome-extension-helper --save-dev

Consume as an ES6 module

    import * as helpers from 'chrome-extension-helper';

or

    import helpers from 'chrome-extension-helper';

or

    import { initializeStorage, createLocalProperty, createSyncedProperty } from 'chrome-extension-helper';

Consume as a CommonJS module

    var helpers = require('chrome-extension-helper');

Consume as an AMD

    require(['chrome-extension-helper'], function (helpers) {
        // Consume helpers
    }

### Included wrappers

#### Storage

[Coming soon]

## To-do

* Implement more wrappers
* Write unit-tests