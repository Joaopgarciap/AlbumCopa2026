const STORAGE_KEY = "album-copa-2026-figurinha-state";

const pages = [
  {
    id: "abertura",
    title: "Abertura e História",
    description: "Momentos de abertura, mascote e história da Copa do Mundo.",
    stickers: createStickers("AB", "Abertura", 20),
  },
  {
    id: "sedes",
    title: "Países-Sede e Estádios",
    description: "Estados Unidos, México e Canadá, com seus estádios oficiais.",
    stickers: createStickers("SD", "Estádio", 24),
  },
  {
    id: "grupo-a",
    title: "Grupo A",
    description: "Seleções e principais jogadores do Grupo A.",
    stickers: createStickers("A", "Grupo A", 16),
  },
  {
    id: "grupo-b",
    title: "Grupo B",
    description: "Seleções e principais jogadores do Grupo B.",
    stickers: createStickers("B", "Grupo B", 16),
  },
  {
    id: "grupo-c",
    title: "Grupo C",
    description: "Seleções e principais jogadores do Grupo C.",
    stickers: createStickers("C", "Grupo C", 16),
  },
  {
    id: "grupo-d",
    title: "Grupo D",
    description: "Seleções e principais jogadores do Grupo D.",
    stickers: createStickers("D", "Grupo D", 16),
  },
  {
    id: "grupo-e",
    title: "Grupo E",
    description: "Seleções e principais jogadores do Grupo E.",
    stickers: createStickers("E", "Grupo E", 16),
  },
  {
    id: "grupo-f",
    title: "Grupo F",
    description: "Seleções e principais jogadores do Grupo F.",
    stickers: createStickers("F", "Grupo F", 16),
  },
  {
    id: "grupo-g",
    title: "Grupo G",
    description: "Seleções e principais jogadores do Grupo G.",
    stickers: createStickers("G", "Grupo G", 16),
  },
  {
    id: "grupo-h",
    title: "Grupo H",
    description: "Seleções e principais jogadores do Grupo H.",
    stickers: createStickers("H", "Grupo H", 16),
  },
  {
    id: "grupo-i",
    title: "Grupo I",
    description: "Seleções e principais jogadores do Grupo I.",
    stickers: createStickers("I", "Grupo I", 16),
  },
  {
    id: "grupo-j",
    title: "Grupo J",
    description: "Seleções e principais jogadores do Grupo J.",
    stickers: createStickers("J", "Grupo J", 16),
  },
  {
    id: "grupo-k",
    title: "Grupo K",
    description: "Seleções e principais jogadores do Grupo K.",
    stickers: createStickers("K", "Grupo K", 16),
  },
  {
    id: "grupo-l",
    title: "Grupo L",
    description: "Seleções e principais jogadores do Grupo L.",
    stickers: createStickers("L", "Grupo L", 16),
  },
  {
    id: "mata-mata",
    title: "Fase Final",
    description: "Oitavas, quartas, semifinais e grande final.",
    stickers: createStickers("MM", "Mata-mata", 20),
  },
];

const state = {
  currentPageIndex: 0,
  obtained: new Set(loadSavedStickers()),
};

const elements = {
  pageSelect: document.getElementById("pageSelect"),
  previousPageButton: document.getElementById("previousPageButton"),
  nextPageButton: document.getElementById("nextPageButton"),
  pageCounter: document.getElementById("pageCounter"),
  pageTitle: document.getElementById("pageTitle"),
  pageDescription: document.getElementById("pageDescription"),
  pageProgressLabel: document.getElementById("pageProgressLabel"),
  stickersGrid: document.getElementById("stickersGrid"),
  globalProgressLabel: document.getElementById("globalProgressLabel"),
  globalProgressPercent: document.getElementById("globalProgressPercent"),
  globalProgressFill: document.getElementById("globalProgressFill"),
  markAllPageButton: document.getElementById("markAllPageButton"),
  unmarkAllPageButton: document.getElementById("unmarkAllPageButton"),
  resetAlbumButton: document.getElementById("resetAlbumButton"),
};

initialize();

function initialize() {
  fillPageSelect();
  bindEvents();
  renderPage();
  renderGlobalProgress();
}

function fillPageSelect() {
  const options = pages.map((page, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${index + 1}. ${page.title}`;
    return option;
  });

  elements.pageSelect.innerHTML = "";
  options.forEach((option) => elements.pageSelect.appendChild(option));
  elements.pageSelect.value = String(state.currentPageIndex);
}

function bindEvents() {
  elements.pageSelect.addEventListener("change", (event) => {
    const index = Number(event.target.value);
    if (Number.isNaN(index)) {
      return;
    }

    state.currentPageIndex = index;
    renderPage();
  });

  elements.previousPageButton.addEventListener("click", () => {
    if (state.currentPageIndex <= 0) {
      return;
    }

    state.currentPageIndex -= 1;
    elements.pageSelect.value = String(state.currentPageIndex);
    renderPage();
  });

  elements.nextPageButton.addEventListener("click", () => {
    if (state.currentPageIndex >= pages.length - 1) {
      return;
    }

    state.currentPageIndex += 1;
    elements.pageSelect.value = String(state.currentPageIndex);
    renderPage();
  });

  elements.markAllPageButton.addEventListener("click", () => {
    const page = pages[state.currentPageIndex];
    page.stickers.forEach((sticker) => state.obtained.add(sticker.id));
    persistState();
    renderPage();
    renderGlobalProgress();
  });

  elements.unmarkAllPageButton.addEventListener("click", () => {
    const page = pages[state.currentPageIndex];
    page.stickers.forEach((sticker) => state.obtained.delete(sticker.id));
    persistState();
    renderPage();
    renderGlobalProgress();
  });

  elements.resetAlbumButton.addEventListener("click", () => {
    const confirmed = window.confirm(
      "Deseja realmente apagar todas as marcações do álbum?"
    );
    if (!confirmed) {
      return;
    }

    state.obtained.clear();
    persistState();
    renderPage();
    renderGlobalProgress();
  });
}

function renderPage() {
  const page = pages[state.currentPageIndex];
  const pageNumber = state.currentPageIndex + 1;

  elements.pageCounter.textContent = `Página ${pageNumber} de ${pages.length}`;
  elements.pageTitle.textContent = page.title;
  elements.pageDescription.textContent = page.description;
  elements.previousPageButton.disabled = state.currentPageIndex === 0;
  elements.nextPageButton.disabled = state.currentPageIndex === pages.length - 1;

  const cards = page.stickers.map((sticker) => createStickerCard(sticker));
  elements.stickersGrid.innerHTML = "";
  cards.forEach((card) => elements.stickersGrid.appendChild(card));

  const obtainedInPage = page.stickers.filter((sticker) =>
    state.obtained.has(sticker.id)
  ).length;

  elements.pageProgressLabel.textContent = `${obtainedInPage} de ${page.stickers.length} nesta página`;
}

function createStickerCard(sticker) {
  const obtained = state.obtained.has(sticker.id);
  const button = document.createElement("button");
  button.type = "button";
  button.className = `sticker-card${obtained ? " obtained" : ""}`;
  button.setAttribute("aria-pressed", String(obtained));
  button.dataset.stickerId = sticker.id;

  const id = document.createElement("p");
  id.className = "sticker-id";
  id.textContent = `#${sticker.id}`;

  const name = document.createElement("p");
  name.className = "sticker-name";
  name.textContent = sticker.name;

  const status = document.createElement("span");
  status.className = "sticker-status";
  status.textContent = obtained ? "Figurinha obtida" : "Toque para marcar";

  button.appendChild(id);
  button.appendChild(name);
  button.appendChild(status);

  button.addEventListener("click", () => {
    toggleSticker(sticker.id);
  });

  return button;
}

function toggleSticker(stickerId) {
  if (state.obtained.has(stickerId)) {
    state.obtained.delete(stickerId);
  } else {
    state.obtained.add(stickerId);
  }

  persistState();
  renderPage();
  renderGlobalProgress();
}

function renderGlobalProgress() {
  const totalStickers = pages.reduce((sum, page) => sum + page.stickers.length, 0);
  const obtainedCount = state.obtained.size;
  const percent = totalStickers === 0 ? 0 : Math.round((obtainedCount / totalStickers) * 100);

  elements.globalProgressLabel.textContent = `${obtainedCount} de ${totalStickers} figurinhas`;
  elements.globalProgressPercent.textContent = `${percent}%`;
  elements.globalProgressFill.style.width = `${percent}%`;
  elements.globalProgressFill.parentElement.setAttribute(
    "aria-valuenow",
    String(percent)
  );
}

function persistState() {
  const ids = Array.from(state.obtained.values());
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

function loadSavedStickers() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return [];
  }

  try {
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) {
      return [];
    }

    const allStickerIds = new Set(
      pages.flatMap((page) => page.stickers.map((sticker) => sticker.id))
    );
    return parsed.filter((id) => allStickerIds.has(id));
  } catch (error) {
    console.error("Falha ao carregar progresso salvo:", error);
    return [];
  }
}

function createStickers(prefix, label, amount) {
  return Array.from({ length: amount }, (_, index) => {
    const number = index + 1;
    const padded = String(number).padStart(2, "0");
    return {
      id: `${prefix}${padded}`,
      name: `${label} - Figurinha ${number}`,
    };
  });
}
