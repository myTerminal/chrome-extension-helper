/* global chrome */

const showSimpleNotification = (id, { iconUrl, title, message }, onDone) => {
    chrome.notifications.create(
        id,
        {
            type: 'basic',
            iconUrl,
            title,
            message
        },
        onDone
    );
};

export default {
    showSimpleNotification
};
