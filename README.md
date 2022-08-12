# chrome-extension-helper

[![npm version](https://badge.fury.io/js/chrome-extension-helper.svg)](https://badge.fury.io/js/chrome-extension-helper)
[![npm downloads](https://img.shields.io/npm/dt/chrome-extension-helper.svg)](https://www.npmjs.com/package/chrome-extension-helper)
[![License](https://img.shields.io/github/license/myTerminal/chrome-extension-helper.svg)](https://opensource.org/licenses/MIT)  
[![Build Status](https://travis-ci.org/myTerminal/chrome-extension-helper.svg?branch=master)](https://travis-ci.org/myTerminal/chrome-extension-helper)
[![Code Climate](https://codeclimate.com/github/myTerminal/chrome-extension-helper.png)](https://codeclimate.com/github/myTerminal/chrome-extension-helper)
[![js-myterminal-style](https://img.shields.io/badge/code%20style-myterminal-blue.svg)](https://www.npmjs.com/package/eslint-config/myterminal)
[![Coverage Status](https://img.shields.io/coveralls/myTerminal/chrome-extension-helper.svg)](https://coveralls.io/r/myTerminal/chrome-extension-helper?branch=master)  
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y5E5GL7)  
[![NPM](https://nodei.co/npm/chrome-extension-helper.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/chrome-extension-helper/)

A library of constructs for Google Chrome extensions

## Wrappers

* Storage: `chrome.storage.local` & `chrome.storage.sync`
* Notifications: `chrome.notifications`

## How to Use

### Directly from a web page

One can use *chrome-extension-helper* directly from a web-page by attaching script file to the DOM.

    <!-- Attaching the chrome-extension-helper script -->
    <script type="text/javascript" src="path/to/library/chrome-extension-helper.js"></script>
    
    <!-- Usage -->
    <script type="text/javascript">
        chromeExtensionHelper.storage.initializeStorage();
    </script>

### With [Webpack](https://webpack.js.org), [Browserify](http://browserify.org) or [RequireJS](http://requirejs.org)

Install *chrome-extension-helper* from NPM

    npm install chrome-extension-helper --save-dev

Consume as an ES6 module

    import * as helpers from 'chrome-extension-helper';

or

    import helpers from 'chrome-extension-helper';

or

    import { storage } from 'chrome-extension-helper';

Consume as a CommonJS module

    var helpers = require('chrome-extension-helper');

Consume as an AMD

    require(['chrome-extension-helper'], function (helpers) {
        // Consume helpers
    }

### Included wrappers

> **Note:** The API is tentative and is very likely to change by a great degree in upcoming versions.

#### Storage

This wrapper around `chrome.storage` includes a couple of methods to make working with Chrome extension storage a little convenient.

    import { storage } from 'chrome-extension-helper';

The first step should be initialization.

    storage.initializeStorage(onError);

When there is an error accessing storage, the function `onError` is called with a string specifying a reason for the error.

Once the initialization is done, local or synced properties can be instantiated. Whether you create a local property or a synced property, the constructor is exactly the same but the difference lies in behavior, which is exactly the difference between `chrome.storage.local` and `chrome.storage.sync` respectively.

Below is an example of how a synced property can be created.

    const colorMode = storage.createSyncedProperty(
        'color-mode', // Key used in store
        colorModes, // A set of possible values for the property
        value => {
            const bodyDom = document.body;

            bodyDom.className = bodyDom.className
                .replace(/ (light|dark)/, '')
                + ` ${value}`;

            document.querySelector('#color-mode').innerText = value;
        } // A handler to reflect a change on the UI
    );

The above snippet creates a synced property with the supplied name in store, that can have the specified possible values and a change to the property (locally or from a different extension instance, as this is a synced property) will be automatically reflected on the UI according to the passed handler. The returned property has the following properties/methods attached:

- `name` - The name of the property
- `values` - An array of possible values for the property
- `set` - A function that takes in a new value and a callback that is passed with the value when the update is complete
- `get` - A function that is called with the current value once it is retrieved from storage
- `load` (optional) - A handler that accepts a value and can handle change to the value. Currently, it is used internally to reflect changes on the UI and is not supposed to be used from external code.
- `read` - A function that reads the current value of the property and loads it using the loader. Internally, it's as simple as calling a `get` and using the value in a `load`.

#### Notifications

This wrapper around `chrome.notifications` currently only includes a single method for being able to create a basic notification with a title, message and an icon.

    import { notifications } from 'chrome-extension-helper';

    const showError = message => {
        notifications.showSimpleNotification(
            'error',
            {
                iconUrl: 'icons/error.png',
                title: 'There was an error!',
                message
            }
        );
    }

Below are the required parameters:

- `id` - This is required to create a notification, could be any unique string
- An object containing `iconUrl`, `title` and `message`. Due to a limitation, the icon being used needs to be defined in the manifest file as you can see [here](https://github.com/myTerminal/chrome-text-stash/blob/master/src/manifest.json).

## To-do

* Implement more wrappers
* Write unit-tests
