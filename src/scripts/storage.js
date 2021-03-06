/* global chrome */

// Collections of properties
const localProperties = [],
    syncedProperties = [];

// Reference to a function to report errors
let reportError;

// Initializes listener for all known properties
const initializeStorage = onError => {
    // Attach event listeners
    chrome.storage.local.onChanged
        .addListener(getChangedPropertySetLoader(localProperties));
    chrome.storage.sync.onChanged
        .addListener(getChangedPropertySetLoader(syncedProperties));

    // Store reference to the function to report errors
    reportError = onError;
};

// Creates a local property
const createLocalProperty = (
    propertyName,
    propertyValues,
    loader
) =>
    createProperty(
        chrome.storage.local,
        propertyName,
        propertyValues,
        loader,
        localProperties
    );

// Creates a synced property
const createSyncedProperty = (
    propertyName,
    propertyValues,
    loader
) =>
    createProperty(
        chrome.storage.sync,
        propertyName,
        propertyValues,
        loader,
        syncedProperties
    );

// Create a listener for a property type
const getChangedPropertySetLoader = collection =>
    values => {
        Object.keys(values)
            .forEach(
                k => {
                    // Find a property by the name
                    const property = collection.filter(p => p.name === k)[0];

                    // If a property is found, call its loader
                    if (property) {
                        property.load(values[k].newValue);
                    }
                }
            );
    };

// Creates a property with a type, name, set of possible values and a loader
const createProperty = (
    store,
    propertyName,
    propertyValues,
    loader,
    collection
) => {
    // Find a known property with the same name
    const possibleExistingProperties = collection.filter(p => p.name === propertyName);

    // If the property exists, return it
    if (possibleExistingProperties.length) {
        return possibleExistingProperties[0];
    }

    // Create a new property
    const property = {
        name: propertyName,
        values: propertyValues,
        set: createSetter(store, propertyName),
        get: createGetter(store, propertyName, propertyValues),
        load: loader || (() => {})
    };

    // Add `read` by composing `get` and `load`
    property.read = () => {
        property.get(property.load);
    };

    // Add the property to the collection
    collection.push(property);

    // Trigger first read
    property.read();

    // Return the newly created property
    return property;
};

// Function to create setter
const createSetter = (store, name) =>
    (value, onDone) => {
        store.set(
            {
                [name]: value
            },
            () => {
                if (chrome.runtime.lastError) {
                    // TODO: replace with a method that also works in background
                    reportError('The supplied text could not be added to stash, most probably because you are out of space. Try deleting a few stash items or saving a smaller item.');
                }

                if (onDone) {
                    onDone();
                }
            }
        );
    };

// Function to create getter
const createGetter = (store, name, possibleValues) =>
    onDone => {
        store.get(
            [
                name
            ],
            values => {
                if (onDone) {
                    onDone(values[name] || possibleValues[0]);
                }
            }
        );
    };

export default {
    initializeStorage,
    createLocalProperty,
    createSyncedProperty
};
