var defferedPrompt;

if ("serviceWorker" in navigator) {
  //register has 2nd argument ie. {scope: "/help"} which is scope to which service worker is applied.
  //this could be to the scope inside the scope og sw.js but not above it.
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("Service Worker Registered");
  });
}

window.addEventListener("beforeinstallprompt", event => {
  console.log("beforInstallPrompt");
  event.preventDefault();
  defferedPrompt = event;
  return false;
});
