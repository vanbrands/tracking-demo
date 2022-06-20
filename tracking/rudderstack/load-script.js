// Rudderstack Configuration
const dataPlaneURL = 'https://vanbrandsqvg.dataplane.rudderstack.com';
const writeKey = '2ApxFchy93CP8L2zfPXZSwDsivZ';

export const analyticsScript = `
    rudderanalytics = window.rudderanalytics = [];
    var methods = [
        'load',
        'page',
        'track',
        'identify',
        'alias',
        'group',
        'ready',
        'reset',
        'getAnonymousId',
        'setAnonymousId',
    ];
    for (var i = 0; i < methods.length; i++) {
    var method = methods[i];
    rudderanalytics[method] = (function (methodName) {
        return function () {
        rudderanalytics.push(
            [methodName].concat(Array.prototype.slice.call(arguments))
        );
        };
    })(method);
    }
    rudderanalytics.load("${writeKey}", "${dataPlaneURL}");
    rudderanalytics.page();
`