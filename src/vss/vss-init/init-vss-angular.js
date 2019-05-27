function initialize(explicitNotifyLoaded, usePlatformStyles, usePlatformScripts, afterSdkReadyCallback) {
    appendScript('../../lib/VSS.SDK.min.js').onload = function () {
        VSS.init({
            explicitNotifyLoaded: explicitNotifyLoaded || false,
            usePlatformStyles: usePlatformStyles || false,
            usePlatformScripts: usePlatformScripts || false
        });

        VSS.ready(function () {
            appendScript('../../angular-app/runtime.js');
            appendScript('../../angular-app/es2015-polyfills.js');
            appendScript('../../angular-app/polyfills.js');
            appendScript('../../angular-app/styles.js');
            appendScript('../../angular-app/runtime.js');
            appendScript('../../angular-app/vendor.js');
            appendScript('../../angular-app/main.js');

            if (afterSdkReadyCallback) {
                afterSdkReadyCallback();
            }
        });

    };

    function appendScript(scriptSource) {
        let scriptTag = document.createElement('script');
        scriptTag.src = scriptSource;
        document.head.appendChild(scriptTag);
        return scriptTag;
    }
};