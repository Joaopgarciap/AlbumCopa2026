const STICKER_STORAGE_KEY = "album-copa-2026-figurinha-state";
const PRICING_STORAGE_KEY = "album-copa-2026-pricing-state";

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

const selectionPages = pages.filter((page) => page.id.startsWith("grupo-"));
const allStickerIds = new Set(
  pages.flatMap((page) => page.stickers.map((sticker) => sticker.id))
);
const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const defaultPricingState = {
  categoryBase: {
    br: 10,
    fwc: 8,
    coca: 10,
    outros: 1.5,
  },
  selectionDefault: {},
  stickerIndividual: {},
  selectedSelectionId: selectionPages[0] ? selectionPages[0].id : pages[0].id,
  individualPanelOpen: false,
};

const state = {
  currentPageIndex: 0,
  obtained: new Set(loadSavedStickers()),
  pricing: loadPricingState(),
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
  priceBrInput: document.getElementById("priceBrInput"),
  priceFwcInput: document.getElementById("priceFwcInput"),
  priceCocaInput: document.getElementById("priceCocaInput"),
  priceOthersInput: document.getElementById("priceOthersInput"),
  openIndividualPricingButton: document.getElementById(
    "openIndividualPricingButton"
  ),
  sellerSelectionSelect: document.getElementById("sellerSelectionSelect"),
  selectionDefaultPriceInput: document.getElementById(
    "selectionDefaultPriceInput"
  ),
  saveSelectionDefaultButton: document.getElementById("saveSelectionDefaultButton"),
  individualPricingPanel: document.getElementById("individualPricingPanel"),
  individualPricingTitle: document.getElementById("individualPricingTitle"),
  individualPricingDescription: document.getElementById(
    "individualPricingDescription"
  ),
  individualStickerList: document.getElementById("individualStickerList"),
};

initialize();

function initialize() {
  fillPageSelect();
  fillSellerSelectionSelect();
  bindEvents();
  renderSellerCenter();
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

function fillSellerSelectionSelect() {
  elements.sellerSelectionSelect.innerHTML = "";

  selectionPages.forEach((page) => {
    const option = document.createElement("option");
    option.value = page.id;
    option.textContent = page.title;
    elements.sellerSelectionSelect.appendChild(option);
  });

  const validSelection = selectionPages.some(
    (page) => page.id === state.pricing.selectedSelectionId
  );

  if (!validSelection) {
    state.pricing.selectedSelectionId =
      selectionPages[0] ? selectionPages[0].id : pages[0].id;
  }

  elements.sellerSelectionSelect.value = state.pricing.selectedSelectionId;
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
    persistStickerState();
    renderPage();
    renderGlobalProgress();
  });

  elements.unmarkAllPageButton.addEventListener("click", () => {
    const page = pages[state.currentPageIndex];
    page.stickers.forEach((sticker) => state.obtained.delete(sticker.id));
    persistStickerState();
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
    persistStickerState();
    renderPage();
    renderGlobalProgress();
  });

  bindCategoryInput(elements.priceBrInput, "br");
  bindCategoryInput(elements.priceFwcInput, "fwc");
  bindCategoryInput(elements.priceCocaInput, "coca");
  bindCategoryInput(elements.priceOthersInput, "outros");

  elements.openIndividualPricingButton.addEventListener("click", () => {
    state.pricing.individualPanelOpen = !state.pricing.individualPanelOpen;
    persistPricingState();
    renderIndividualPanelVisibility();
    if (state.pricing.individualPanelOpen) {
      renderIndividualPricingList();
    }
  });

  elements.sellerSelectionSelect.addEventListener("change", (event) => {
    state.pricing.selectedSelectionId = event.target.value;
    updateSelectionDefaultInput();
    if (state.pricing.individualPanelOpen) {
      renderIndividualPricingList();
    }
    persistPricingState();
  });

  elements.saveSelectionDefaultButton.addEventListener("click", () => {
    const selectionId = state.pricing.selectedSelectionId;
    if (!selectionId) {
      return;
    }

    const rawValue = elements.selectionDefaultPriceInput.value.trim();
    if (rawValue === "") {
      delete state.pricing.selectionDefault[selectionId];
      persistPricingState();
      updateSelectionDefaultInput();
      if (state.pricing.individualPanelOpen) {
        renderIndividualPricingList();
      }
      renderPage();
      return;
    }

    const parsedValue = parseMoneyValue(rawValue);
    if (parsedValue === null) {
      window.alert("Informe um preço válido maior ou igual a zero.");
      updateSelectionDefaultInput();
      return;
    }

    state.pricing.selectionDefault[selectionId] = parsedValue;
    persistPricingState();
    updateSelectionDefaultInput();
    if (state.pricing.individualPanelOpen) {
      renderIndividualPricingList();
    }
    renderPage();
  });
}

function bindCategoryInput(input, category) {
  input.addEventListener("change", () => {
    const parsedValue = parseMoneyValue(input.value);
    if (parsedValue === null) {
      input.value = toInputValue(state.pricing.categoryBase[category]);
      return;
    }

    state.pricing.categoryBase[category] = parsedValue;
    persistPricingState();
    renderPage();
    if (state.pricing.individualPanelOpen) {
      renderIndividualPricingList();
    }
  });
}

function renderSellerCenter() {
  elements.priceBrInput.value = toInputValue(state.pricing.categoryBase.br);
  elements.priceFwcInput.value = toInputValue(state.pricing.categoryBase.fwc);
  elements.priceCocaInput.value = toInputValue(state.pricing.categoryBase.coca);
  elements.priceOthersInput.value = toInputValue(state.pricing.categoryBase.outros);
  elements.sellerSelectionSelect.value = state.pricing.selectedSelectionId;
  updateSelectionDefaultInput();
  renderIndividualPanelVisibility();

  if (state.pricing.individualPanelOpen) {
    renderIndividualPricingList();
  }
}

function renderIndividualPanelVisibility() {
  const isOpen = state.pricing.individualPanelOpen;
  elements.individualPricingPanel.classList.toggle("open", isOpen);
  elements.openIndividualPricingButton.setAttribute("aria-expanded", String(isOpen));

  const actionLabel = elements.openIndividualPricingButton.querySelector("span");
  if (actionLabel) {
    actionLabel.textContent = isOpen ? "Ocultar lista ↑" : "Configurar agora →";
  }
}

function updateSelectionDefaultInput() {
  const selectionId = state.pricing.selectedSelectionId;
  const hasCustomValue =
    typeof state.pricing.selectionDefault[selectionId] === "number";
  const value = hasCustomValue
    ? state.pricing.selectionDefault[selectionId]
    : getSelectionDefaultPrice(selectionId);

  elements.selectionDefaultPriceInput.value = toInputValue(value);
}

function renderIndividualPricingList() {
  const selectionId = state.pricing.selectedSelectionId;
  const selectionPage = pages.find((page) => page.id === selectionId);
  elements.individualStickerList.innerHTML = "";

  if (!selectionPage) {
    elements.individualPricingTitle.textContent = "Preço individual por figurinha";
    elements.individualPricingDescription.textContent =
      "Selecione uma seleção para configurar preços individuais.";
    return;
  }

  elements.individualPricingTitle.textContent = `Preços individuais - ${selectionPage.title}`;
  elements.individualPricingDescription.textContent =
    "Digite apenas as figurinhas que terão preço diferente do padrão da seleção.";

  const fragment = document.createDocumentFragment();

  selectionPage.stickers.forEach((sticker) => {
    const item = document.createElement("article");
    item.className = "individual-sticker-item";

    const title = document.createElement("strong");
    title.textContent = `${sticker.name}`;

    const code = document.createElement("span");
    code.textContent = `Código: #${sticker.id}`;

    const priceInput = document.createElement("input");
    priceInput.type = "number";
    priceInput.min = "0";
    priceInput.step = "0.5";
    const customPrice = state.pricing.stickerIndividual[sticker.id];
    const fallbackPrice = getSelectionDefaultPrice(selectionPage.id);
    priceInput.value =
      typeof customPrice === "number" ? toInputValue(customPrice) : "";
    priceInput.placeholder = `Padrão: ${formatCurrency(fallbackPrice)}`;

    const hint = document.createElement("span");
    hint.textContent = `Preço final: ${formatCurrency(
      getStickerPrice(sticker.id, selectionPage.id)
    )}`;

    priceInput.addEventListener("change", () => {
      const rawValue = priceInput.value.trim();
      if (rawValue === "") {
        delete state.pricing.stickerIndividual[sticker.id];
      } else {
        const parsedValue = parseMoneyValue(rawValue);
        if (parsedValue === null) {
          window.alert("Informe um preço válido maior ou igual a zero.");
          priceInput.value =
            typeof customPrice === "number" ? toInputValue(customPrice) : "";
          return;
        }

        state.pricing.stickerIndividual[sticker.id] = parsedValue;
      }

      persistPricingState();
      renderIndividualPricingList();
      renderPage();
    });

    item.appendChild(title);
    item.appendChild(code);
    item.appendChild(priceInput);
    item.appendChild(hint);
    fragment.appendChild(item);
  });

  elements.individualStickerList.appendChild(fragment);
}

function renderPage() {
  const page = pages[state.currentPageIndex];
  const pageNumber = state.currentPageIndex + 1;

  elements.pageCounter.textContent = `Página ${pageNumber} de ${pages.length}`;
  elements.pageTitle.textContent = page.title;
  elements.pageDescription.textContent = page.description;
  elements.previousPageButton.disabled = state.currentPageIndex === 0;
  elements.nextPageButton.disabled = state.currentPageIndex === pages.length - 1;

  const cards = page.stickers.map((sticker) => createStickerCard(sticker, page));
  elements.stickersGrid.innerHTML = "";
  cards.forEach((card) => elements.stickersGrid.appendChild(card));

  const obtainedInPage = page.stickers.filter((sticker) =>
    state.obtained.has(sticker.id)
  ).length;

  elements.pageProgressLabel.textContent = `${obtainedInPage} de ${page.stickers.length} nesta página`;
}

function createStickerCard(sticker, page) {
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

  const price = document.createElement("span");
  price.className = "sticker-price";
  price.textContent = `Preço sugerido: ${formatCurrency(
    getStickerPrice(sticker.id, page.id)
  )}`;

  const status = document.createElement("span");
  status.className = "sticker-status";
  status.textContent = obtained ? "Figurinha obtida" : "Toque para marcar";

  button.appendChild(id);
  button.appendChild(name);
  button.appendChild(price);
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

  persistStickerState();
  renderPage();
  renderGlobalProgress();
}

function renderGlobalProgress() {
  const totalStickers = pages.reduce((sum, page) => sum + page.stickers.length, 0);
  const obtainedCount = state.obtained.size;
  const percent =
    totalStickers === 0 ? 0 : Math.round((obtainedCount / totalStickers) * 100);

  elements.globalProgressLabel.textContent = `${obtainedCount} de ${totalStickers} figurinhas`;
  elements.globalProgressPercent.textContent = `${percent}%`;
  elements.globalProgressFill.style.width = `${percent}%`;
  elements.globalProgressFill.parentElement.setAttribute(
    "aria-valuenow",
    String(percent)
  );
}

function getStickerPrice(stickerId, pageId) {
  const stickerPrice = state.pricing.stickerIndividual[stickerId];
  if (typeof stickerPrice === "number") {
    return stickerPrice;
  }

  const selectionPrice = state.pricing.selectionDefault[pageId];
  if (typeof selectionPrice === "number") {
    return selectionPrice;
  }

  const category = getCategoryFromPage(pageId);
  return state.pricing.categoryBase[category];
}

function getSelectionDefaultPrice(selectionId) {
  if (typeof state.pricing.selectionDefault[selectionId] === "number") {
    return state.pricing.selectionDefault[selectionId];
  }

  const category = getCategoryFromPage(selectionId);
  return state.pricing.categoryBase[category];
}

function getCategoryFromPage(pageId) {
  if (pageId === "abertura" || pageId === "sedes") {
    return "br";
  }

  if (pageId === "mata-mata") {
    return "fwc";
  }

  if (pageId.startsWith("grupo-")) {
    return "outros";
  }

  return "outros";
}

function persistStickerState() {
  const ids = Array.from(state.obtained.values());
  window.localStorage.setItem(STICKER_STORAGE_KEY, JSON.stringify(ids));
}

function persistPricingState() {
  window.localStorage.setItem(PRICING_STORAGE_KEY, JSON.stringify(state.pricing));
}

function loadSavedStickers() {
  const stored = window.localStorage.getItem(STICKER_STORAGE_KEY);
  if (!stored) {
    return [];
  }

  try {
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter((id) => allStickerIds.has(id));
  } catch (error) {
    console.error("Falha ao carregar progresso salvo:", error);
    return [];
  }
}

function loadPricingState() {
  const stored = window.localStorage.getItem(PRICING_STORAGE_KEY);
  if (!stored) {
    return structuredClone(defaultPricingState);
  }

  try {
    const parsed = JSON.parse(stored);
    if (!parsed || typeof parsed !== "object") {
      return structuredClone(defaultPricingState);
    }

    const categoryBase = {
      br: sanitizePriceValue(parsed.categoryBase?.br, defaultPricingState.categoryBase.br),
      fwc: sanitizePriceValue(
        parsed.categoryBase?.fwc,
        defaultPricingState.categoryBase.fwc
      ),
      coca: sanitizePriceValue(
        parsed.categoryBase?.coca,
        defaultPricingState.categoryBase.coca
      ),
      outros: sanitizePriceValue(
        parsed.categoryBase?.outros,
        defaultPricingState.categoryBase.outros
      ),
    };

    const selectionDefault = {};
    if (parsed.selectionDefault && typeof parsed.selectionDefault === "object") {
      Object.entries(parsed.selectionDefault).forEach(([selectionId, value]) => {
        if (!pages.some((page) => page.id === selectionId)) {
          return;
        }

        const sanitized = sanitizePriceValue(value, null);
        if (sanitized !== null) {
          selectionDefault[selectionId] = sanitized;
        }
      });
    }

    const stickerIndividual = {};
    if (parsed.stickerIndividual && typeof parsed.stickerIndividual === "object") {
      Object.entries(parsed.stickerIndividual).forEach(([stickerId, value]) => {
        if (!allStickerIds.has(stickerId)) {
          return;
        }

        const sanitized = sanitizePriceValue(value, null);
        if (sanitized !== null) {
          stickerIndividual[stickerId] = sanitized;
        }
      });
    }

    const selectedSelectionId = selectionPages.some(
      (page) => page.id === parsed.selectedSelectionId
    )
      ? parsed.selectedSelectionId
      : defaultPricingState.selectedSelectionId;

    return {
      categoryBase,
      selectionDefault,
      stickerIndividual,
      selectedSelectionId,
      individualPanelOpen: Boolean(parsed.individualPanelOpen),
    };
  } catch (error) {
    console.error("Falha ao carregar tabela de preços:", error);
    return structuredClone(defaultPricingState);
  }
}

function parseMoneyValue(rawValue) {
  const normalized = String(rawValue).trim().replace(",", ".");
  if (normalized === "") {
    return null;
  }

  const value = Number(normalized);
  if (!Number.isFinite(value) || value < 0) {
    return null;
  }

  return Math.round(value * 100) / 100;
}

function sanitizePriceValue(value, fallback) {
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
    return fallback;
  }

  return Math.round(value * 100) / 100;
}

function formatCurrency(value) {
  return currencyFormatter.format(value);
}

function toInputValue(value) {
  return String(value);
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
