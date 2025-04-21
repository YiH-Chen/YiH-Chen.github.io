// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "你的 API Key",
    projectId: "xxx",
    messagingSenderId: "xxx",
    appId: "xxx"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: '/icon.png',
    });
});
