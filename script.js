const copyButton = document.querySelector("[data-copy]");
const statusMessage = document.querySelector(".copy-status");
const languageButtons = document.querySelectorAll("[data-lang]");

const translations = {
  fr: {
    metaDescription:
      "Campagne de financement pour soutenir Kassandra, membre de La troupe HOPE de Studio Rythmix, au championnat 2Move à Niagara Falls en octobre.",
    title: "Kassandra | Campagne 2Move",
    htmlLang: "fr",
    aria: {
      siteHeader: "En-tête du site",
      backTop: "Retour en haut",
      mainNav: "Navigation principale",
      language: "Choisir la langue",
      donationActions: "Actions de don",
      highlights: "Points forts de la campagne",
      transferInfo: "Information pour le virement",
    },
    alt: {
      logo: "Logo Studio Rythmix",
      logoBars: "Logo Studio Rythmix avec barres colorées",
      kassandra: "Kassandra, danseuse de Studio Rythmix, souriante",
    },
    nav: {
      mission: "Mission",
      donate: "Faire un don",
      details: "Détails",
    },
    hero: {
      eyebrow: "Campagne de financement",
      copy:
        "Aidez Kassandra à représenter Studio Rythmix avec <strong>La troupe HOPE</strong> au championnat <strong>2Move</strong> en octobre, à <strong>Niagara Falls</strong>.",
      primary: "Contribuer",
      secondary: "Questions",
    },
    mission: {
      eyebrow: "Objectif",
      title: "Soutenir son prochain grand pas",
      copy:
        "Chaque contribution aide Kassandra à vivre une expérience de compétition mémorable avec La troupe HOPE, à couvrir les frais liés au déplacement, et à monter sur scène avec confiance, énergie et fierté.",
    },
    stats: {
      kassandra: "Danseuse de La troupe HOPE",
      event: "Championnat en octobre",
      destination: "Destination",
    },
    donation: {
      eyebrow: "Faire un don",
      title: "Virement Interac",
      copy:
        "Les dons peuvent être envoyés par virement Interac à l’adresse ci-dessous. Merci d’encourager Kassandra dans son aventure avec La troupe HOPE et la communauté Studio Rythmix.",
      emailLabel: "Adresse courriel",
      copyButton: "Copier le courriel",
      copiedButton: "Copié",
      copied: "Adresse copiée.",
      copyError: "Copie impossible. Sélectionnez l’adresse ci-dessus.",
    },
    details: {
      title: "Une troupe portée par la passion",
      copy:
        "Kassandra danse avec HOPE, une troupe qui travaille fort, rêve grand et avance ensemble. Votre appui la rapproche de la scène du championnat 2Move et donne de l’élan à son parcours.",
      link: "Voir les informations de don",
    },
    footer: {
      copy: "Campagne de financement pour Kassandra, danseuse de La troupe HOPE.",
    },
  },
  en: {
    metaDescription:
      "Fundraising campaign to support Kassandra, a member of Studio Rythmix's La troupe HOPE, at the 2Move championship in Niagara Falls this October.",
    title: "Kassandra | 2Move Fundraiser",
    htmlLang: "en",
    aria: {
      siteHeader: "Site header",
      backTop: "Back to top",
      mainNav: "Main navigation",
      language: "Choose language",
      donationActions: "Donation actions",
      highlights: "Campaign highlights",
      transferInfo: "Transfer information",
    },
    alt: {
      logo: "Studio Rythmix logo",
      logoBars: "Studio Rythmix logo with colorful bars",
      kassandra: "Kassandra, a smiling Studio Rythmix dancer",
    },
    nav: {
      mission: "Mission",
      donate: "Donate",
      details: "Details",
    },
    hero: {
      eyebrow: "Fundraising campaign",
      copy:
        "Help Kassandra represent Studio Rythmix with <strong>La troupe HOPE</strong> at the <strong>2Move</strong> championship this October in <strong>Niagara Falls</strong>.",
      primary: "Contribute",
      secondary: "Questions",
    },
    mission: {
      eyebrow: "Goal",
      title: "Support her next big step",
      copy:
        "Every contribution helps Kassandra enjoy a memorable competition experience with La troupe HOPE, cover travel-related costs, and step on stage with confidence, energy, and pride.",
    },
    stats: {
      kassandra: "Dancer in La troupe HOPE",
      event: "October championship",
      destination: "Destination",
    },
    donation: {
      eyebrow: "Donate",
      title: "Interac e-Transfer",
      copy:
        "Donations can be sent by Interac e-Transfer to the address below. Thank you for encouraging Kassandra on her journey with La troupe HOPE and the Studio Rythmix community.",
      emailLabel: "Email address",
      copyButton: "Copy email",
      copiedButton: "Copied",
      copied: "Email copied.",
      copyError: "Could not copy. Select the address above.",
    },
    details: {
      title: "A troupe powered by passion",
      copy:
        "Kassandra dances with HOPE, a troupe that works hard, dreams big, and moves forward together. Your support brings her closer to the 2Move championship stage and gives momentum to her journey.",
      link: "View donation details",
    },
    footer: {
      copy: "Fundraising campaign for Kassandra, dancer in La troupe HOPE.",
    },
  },
  "pt-BR": {
    metaDescription:
      "Campanha de arrecadação para apoiar Kassandra, integrante da La troupe HOPE do Studio Rythmix, no campeonato 2Move em Niagara Falls em outubro.",
    title: "Kassandra | Campanha 2Move",
    htmlLang: "pt-BR",
    aria: {
      siteHeader: "Cabeçalho do site",
      backTop: "Voltar ao topo",
      mainNav: "Navegação principal",
      language: "Escolher idioma",
      donationActions: "Ações de doação",
      highlights: "Destaques da campanha",
      transferInfo: "Informações para a transferência",
    },
    alt: {
      logo: "Logo do Studio Rythmix",
      logoBars: "Logo do Studio Rythmix com barras coloridas",
      kassandra: "Kassandra, dançarina sorridente do Studio Rythmix",
    },
    nav: {
      mission: "Missão",
      donate: "Doar",
      details: "Detalhes",
    },
    hero: {
      eyebrow: "Campanha de arrecadação",
      copy:
        "Ajude Kassandra a representar o Studio Rythmix com <strong>La troupe HOPE</strong> no campeonato <strong>2Move</strong> em outubro, em <strong>Niagara Falls</strong>.",
      primary: "Contribuir",
      secondary: "Perguntas",
    },
    mission: {
      eyebrow: "Objetivo",
      title: "Apoiar seu próximo grande passo",
      copy:
        "Cada contribuição ajuda Kassandra a viver uma experiência de competição memorável com La troupe HOPE, cobrir custos relacionados à viagem e subir ao palco com confiança, energia e orgulho.",
    },
    stats: {
      kassandra: "Dançarina da La troupe HOPE",
      event: "Campeonato em outubro",
      destination: "Destino",
    },
    donation: {
      eyebrow: "Doar",
      title: "Transferência Interac",
      copy:
        "As doações podem ser enviadas por transferência Interac para o endereço abaixo. Obrigado por incentivar Kassandra em sua jornada com La troupe HOPE e a comunidade Studio Rythmix.",
      emailLabel: "E-mail",
      copyButton: "Copiar e-mail",
      copiedButton: "Copiado",
      copied: "E-mail copiado.",
      copyError: "Não foi possível copiar. Selecione o endereço acima.",
    },
    details: {
      title: "Uma equipe movida pela paixão",
      copy:
        "Kassandra dança com a La troupe HOPE, um grupo que trabalha duro, sonha alto e segue em frente junto. Seu apoio a aproxima do palco do campeonato 2Move e dá impulso à sua trajetória.",
      link: "Ver informações de doação",
    },
    footer: {
      copy: "Campanha de arrecadação para Kassandra, dançarina da La troupe HOPE.",
    },
  },
};

let currentLanguage = "fr";

function translate(key, language = currentLanguage) {
  return key.split(".").reduce((value, part) => value?.[part], translations[language]);
}

function setLanguage(language) {
  if (!translations[language]) {
    return;
  }

  currentLanguage = language;
  const dictionary = translations[language];
  document.documentElement.lang = dictionary.htmlLang;
  document.title = dictionary.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", dictionary.metaDescription);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n, language);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = translate(element.dataset.i18nHtml, language);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", translate(element.dataset.i18nAlt, language));
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel, language));
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  statusMessage.textContent = "";
  window.localStorage.setItem("campaignLanguage", language);
}

function copyTextWithSelection(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.left = "-9999px";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);
  const copied = document.execCommand("copy");
  textarea.remove();
  return copied;
}

async function copyText(text) {
  if (copyTextWithSelection(text)) {
    return;
  }

  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  throw new Error("Clipboard copy failed");
}

copyButton?.addEventListener("click", async () => {
  const email = copyButton.dataset.copy;

  try {
    await copyText(email);
    statusMessage.textContent = translate("donation.copied");
    copyButton.textContent = translate("donation.copiedButton");
  } catch {
    statusMessage.textContent = translate("donation.copyError");
  }

  window.setTimeout(() => {
    copyButton.textContent = translate("donation.copyButton");
  }, 2200);
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

setLanguage(window.localStorage.getItem("campaignLanguage") || "fr");
