// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js");

firebase.initializeApp({

    apiKey: "AIzaSyBiPyvQwqwRKtJNjQ_LE5zXbo8PVzKTaVw",
    projectId: "joechentestfcm0421",
    messagingSenderId: "26421742760",
    appId: "1:26421742760:web:5162945a0532cc1433869d",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: '/icon.png',
    });
});
