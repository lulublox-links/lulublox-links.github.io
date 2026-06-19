const discordButton = document.querySelector("#discordButton");
const shareButton = document.querySelector("#shareButton");
const toast = document.querySelector("#toast");
const currentYear = document.querySelector("#currentYear");

currentYear.textContent = new Date().getFullYear();

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(successMessage);
  } catch {
    const fallback = document.createElement("textarea");
    fallback.value = text;
    fallback.setAttribute("readonly", "");
    fallback.style.position = "fixed";
    fallback.style.opacity = "0";
    document.body.appendChild(fallback);
    fallback.select();
    document.execCommand("copy");
    fallback.remove();
    showToast(successMessage);
  }
}

discordButton.addEventListener("click", () => {
  copyText(discordButton.dataset.copy, "Pseudo Discord copié !");
});

shareButton.addEventListener("click", async () => {
  const shareData = {
    title: document.title,
    text: "Retrouve tous les liens de Lulublox.",
    url: window.location.href
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (error) {
      if (error.name !== "AbortError") {
        showToast("Partage annulé.");
      }
    }
  } else {
    copyText(window.location.href, "Lien du site copié !");
  }
});
