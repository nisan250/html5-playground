// Vibrate API Sample
var button1 = document.getElementsByClassName('example1');
var button2 = document.getElementsByClassName('example2');
var button3 = document.getElementsByClassName('example3');
var button4 = document.getElementsByClassName('example4');

button1.addEventListener('click', event => {
    // Vibrate for 500ms
    navigator.vibrate([500]);
});

button2.addEventListener('click', event => {
  // For a single value you can pass in a Number rather than an Array
  navigator.vibrate(500);
});

button3.addEventListener('click', event => {
  // Values at even indices (0, 2, 4, ...) specify vibrations, while the odd
  // indices specify pauses.
  // Vibrate for 500ms 6 times, pausing for 250ms in between each one.
  navigator.vibrate([500, 250, 500, 250, 500, 250, 500, 250, 500, 250, 500]);
});

button4.addEventListener('click', event => {
  // You can also stop an ongoing vibration pattern by specifying a vibration
  // length of zero.
  navigator.vibrate(0);
});


// NotificationOptions.vibrate Sample
navigator.serviceWorker.register('sw.js');

function showNotification() {
  Notification.requestPermission(function(result) {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification('Vibration Sample', {
          body: 'Buzz! Buzz!',
          icon: '../images/touch/chrome-touch-icon-192x192.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'vibration-sample'
        });
      });
    }
  });
}


