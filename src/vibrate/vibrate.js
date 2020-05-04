// Vibrate API Sample
window.onload = function() {
  var button1 = document.getElementById('example1');
  var button2 = document.getElementById('example2');
  var button3 = document.getElementById('example3');
  var button4 = document.getElementById('example4');
  var button5 = document.getElementById('example5');
  var button6 = document.getElementById('example6');

  button1.addEventListener('click', event => {
    // Vibrate for 500ms
    console.log('1');
    navigator.vibrate([500]);
  });

  button2.addEventListener('click', event => {
    // For a single value you can pass in a Number rather than an Array
    console.log('2');
    navigator.vibrate(500);
  });

  button3.addEventListener('click', event => {
    console.log('3');
    // Values at even indices (0, 2, 4, ...) specify vibrations, while the odd
    // indices specify pauses.
    // Vibrate for 500ms 6 times, pausing for 250ms in between each one.
    navigator.vibrate([500, 250, 500, 250, 500, 250, 500, 250, 500, 250, 500]);
  });

  button4.addEventListener('click', event => {
    console.log('4');
    // You can also stop an ongoing vibration pattern by specifying a vibration
    // length of zero.
    navigator.vibrate(0);
  });

  button5.addEventListener('click', event => {
    // NotificationOptions.vibrate Sample
    /*
      When displaying a system notification your device may vibrate to alert the user.
      You can specify the vibration pattern that should be used in the same way as for the
      <a href="../vibration/index.html">Vibration API</a>.

      When creating the notification, just set the 'vibrate' property of the notification options
      to be a Vibration API pattern.

      Chrome for Android only supports showing persistant notifications, which are associated with
      a service worker to handle the click event. We must first register a worker, and create the
      notification using the showNotification method of the registration object.
    */
    navigator.serviceWorker.register('sw.js');

    Notification.requestPermission(function(result) {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
          registration.showNotification('Vibration Sample', {
            body: 'Buzz! Buzz!',
            icon: '../../192x192.png',
            vibrate: [200, 100, 200, 100, 200, 100, 200],
            tag: 'vibration-sample'
          });
        });
      }
    });
  });

  button6.addEventListener('click', event => {
    // NotificationOptions.requireInteraction
    /*
    On Chrome desktop, prior to Chrome 47, a notification toast would stay on screen
    until the user interacted with it. As of Chrome 47 notifications will minimize to the
    notification center after approximately 8 seconds unless the 'requireInteraction' property
    of the notification options is set to true.

    Chrome for Android is not affected as all notifications are minimized to the
    notification tray.</p>
    */
    navigator.serviceWorker.register('sw.js');

    Notification.requestPermission(function(result) {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
          registration.showNotification('requireInteraction: true', {
            body: 'Requires interaction',
            icon: '../../192x192.png',
            requireInteraction: true,
            tag: 'require-interaction'
          });

          registration.showNotification('requireInteraction: false', {
            body: 'Does not require interaction',
            icon: '../../192x192.png',
            requireInteraction: false,
            tag: 'no-require-interaction'
          });
        });
      }
    });
  });
}







