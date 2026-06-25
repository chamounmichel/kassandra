const copyButton = document.querySelector("[data-copy]");
const statusMessage = document.querySelector(".copy-status");

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Some embedded browsers expose the API but deny writes. Fall back below.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();

  if (!copied) {
    throw new Error("Clipboard copy failed");
  }
}

copyButton?.addEventListener("click", async () => {
  const email = copyButton.dataset.copy;

  try {
    await copyText(email);
    statusMessage.textContent = "Adresse copiée.";
    copyButton.textContent = "Copié";
  } catch {
    statusMessage.textContent = "Copie impossible. Sélectionnez l’adresse ci-dessus.";
  }

  window.setTimeout(() => {
    copyButton.textContent = "Copier le courriel";
  }, 2200);
});
