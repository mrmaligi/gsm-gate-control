// Register service worker for PWA
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then(
      (registration) => {
        console.log("ServiceWorker registration successful with scope: ", registration.scope);
      },
      (err) => {
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

// PWA install prompt
let deferredPrompt;
const installButton = document.getElementById("install-button");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (installButton) {
    installButton.style.display = "block";
  }
});

// Installation function for the install button
window.installPWA = () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      deferredPrompt = null;
      if (installButton) {
        installButton.style.display = "none";
      }
    });
  }
};
