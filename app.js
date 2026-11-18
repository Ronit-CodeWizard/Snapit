const DEFAULT_CODE = '';

const COLOR_PRESETS = [
  { name: 'GitHub Dark', hex: '#0D1117' },
  { name: 'Title Dark', hex: '#1B1F25' },
  { name: 'Dark Dimmed', hex: '#22272E' },
  { name: 'Title Slate', hex: '#2D333B' },
  { name: 'VS Code', hex: '#1E1E1E' },
  { name: 'Tokyo Night', hex: '#1A1B26' },
  { name: 'One Dark', hex: '#282C34' },
  { name: 'Obsidian', hex: '#111113' },
  { name: 'Pure Black', hex: '#000000' },
  { name: 'Light Paper', hex: '#F6F8FA' },
  { name: 'Pure White', hex: '#FFFFFF' },
];

const LANGUAGE_META = {
  css: { label: 'CSS', hljs: 'css', devicon: 'devicon-css3-plain colored', color: '#1572B6' },
  javascript: { label: 'JavaScript', hljs: 'javascript', devicon: 'devicon-javascript-plain colored', color: '#F0DB4F' },
  typescript: { label: 'TypeScript', hljs: 'typescript', devicon: 'devicon-typescript-plain colored', color: '#3178C6' },
  html: { label: 'HTML', hljs: 'xml', devicon: 'devicon-html5-plain colored', color: '#E34F26' },
  python: { label: 'Python', hljs: 'python', devicon: 'devicon-python-plain colored', color: '#3776AB' },
  java: { label: 'Java', hljs: 'java', devicon: 'devicon-java-plain colored', color: '#EA2D2E' },
  json: { label: 'JSON', hljs: 'json', devicon: 'devicon-json-plain', color: '#E5C07B' },
  bash: { label: 'Bash', hljs: 'bash', devicon: 'devicon-bash-plain', color: '#57AB5A' },
  sql: { label: 'SQL', hljs: 'sql', devicon: '', color: '#6CB6FF' },
  go: { label: 'Go', hljs: 'go', devicon: 'devicon-go-plain colored', color: '#00ACD7' },
  rust: { label: 'Rust', hljs: 'rust', devicon: 'devicon-rust-original', color: '#F47067' },
  c: { label: 'C', hljs: 'c', devicon: 'devicon-c-plain colored', color: '#659AD2' },
  cpp: { label: 'C++', hljs: 'cpp', devicon: 'devicon-cplusplus-plain colored', color: '#659AD2' },
  csharp: { label: 'C#', hljs: 'csharp', devicon: 'devicon-csharp-plain colored', color: '#B072D0' },
  php: { label: 'PHP', hljs: 'php', devicon: 'devicon-php-plain colored', color: '#8892BF' },
  ruby: { label: 'Ruby', hljs: 'ruby', devicon: 'devicon-ruby-plain colored', color: '#CC342D' },
  swift: { label: 'Swift', hljs: 'swift', devicon: 'devicon-swift-plain colored', color: '#F05138' },
  kotlin: { label: 'Kotlin', hljs: 'kotlin', devicon: 'devicon-kotlin-plain colored', color: '#7F52FF' },
  dart: { label: 'Dart', hljs: 'dart', devicon: 'devicon-dart-plain colored', color: '#00B4AB' },
  yaml: { label: 'YAML', hljs: 'yaml', devicon: 'devicon-yaml-plain', color: '#C69026' },
  markdown: { label: 'Markdown', hljs: 'markdown', devicon: 'devicon-markdown-original', color: '#9CB3C9' },
  plaintext: { label: 'Plain Text', hljs: 'plaintext', devicon: '', color: '#8B949E' },
};

const EXTENSION_MAP = {
  css: 'css',
  js: 'javascript',
  mjs: 'javascript',
  cjs: 'javascript',
  jsx: 'javascript',
  ts: 'typescript',
  mts: 'typescript',
  cts: 'typescript',
  tsx: 'typescript',
  html: 'html',
  htm: 'html',
  xhtml: 'html',
  svg: 'html',
  xml: 'html',
  py: 'python',
  pyw: 'python',
  java: 'java',
  json: 'json',
  jsonc: 'json',
  sh: 'bash',
  bash: 'bash',
  zsh: 'bash',
  sql: 'sql',
  go: 'go',
  rs: 'rust',
  c: 'c',
  h: 'c',
  cpp: 'cpp',
  cc: 'cpp',
  cxx: 'cpp',
  hpp: 'cpp',
  hxx: 'cpp',
  cs: 'csharp',
  php: 'php',
  rb: 'ruby',
  swift: 'swift',
  kt: 'kotlin',
  kts: 'kotlin',
  dart: 'dart',
  yaml: 'yaml',
  yml: 'yaml',
  md: 'markdown',
  markdown: 'markdown',
  txt: 'plaintext',
};

const els = {
  libraryNotice: document.getElementById('libraryNotice'),
  filenameInput: document.getElementById('filenameInput'),
  languageSelect: document.getElementById('languageSelect'),
  fontSizeSelect: document.getElementById('fontSizeSelect'),
  codeInput: document.getElementById('codeInput'),
  windowBgPicker: document.getElementById('windowBgPicker'),
  windowBgTrigger: document.getElementById('windowBgTrigger'),
  windowBgInput: document.getElementById('windowBgInput'),
  windowBgSwatch: document.getElementById('windowBgSwatch'),
  windowBgHex: document.getElementById('windowBgHex'),
  titleBarBgPicker: document.getElementById('titleBarBgPicker'),
  titleBarBgTrigger: document.getElementById('titleBarBgTrigger'),
  titleBarBgInput: document.getElementById('titleBarBgInput'),
  titleBarBgSwatch: document.getElementById('titleBarBgSwatch'),
  titleBarBgHex: document.getElementById('titleBarBgHex'),
  showControlsInput: document.getElementById('showControlsInput'),
  showFilenameInput: document.getElementById('showFilenameInput'),
  wrapLinesInput: document.getElementById('wrapLinesInput'),
  exportFormatSelect: document.getElementById('exportFormatSelect'),
  transparentToggleRow: document.getElementById('transparentToggleRow'),
  transparentBgInput: document.getElementById('transparentBgInput'),
  downloadBtn: document.getElementById('downloadBtn'),
  exportError: document.getElementById('exportError'),
  snapshotExportFrame: document.getElementById('snapshotExportFrame'),
  snapshotNode: document.getElementById('snapshotNode'),
  snapshotTitleBar: document.getElementById('snapshotTitleBar'),
  windowControls: document.getElementById('windowControls'),
  filenameTab: document.getElementById('filenameTab'),
  languageIconSlot: document.getElementById('languageIconSlot'),
  snapshotFilename: document.getElementById('snapshotFilename'),
  snapshotCodeWrap: document.getElementById('snapshotCodeWrap'),
  snapshotCode: document.getElementById('snapshotCode'),
  themeColorMeta: document.getElementById('themeColorMeta'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  themeToggleIcon: document.getElementById('themeToggleIcon'),
  themeToggleLabel: document.getElementById('themeToggleLabel'),
  presetKeys: Array.from(document.querySelectorAll('.preset-key')),
};

const THEME_STORAGE_KEY = 'code-snapshot-studio-theme';
const customSelectSyncMap = new WeakMap();
const closeHandlers = [];
let isExporting = false;

function createChevronSvg(className) {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 16 16');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.8');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');
  if (className) svg.setAttribute('class', className);

  const path = document.createElementNS(svgNS, 'path');
  path.setAttribute('d', 'M4 6l4 4 4-4');
  svg.appendChild(path);
  return svg;
}

function closeAllMenus(exceptCloseFn = null) {
  for (const closeFn of closeHandlers) {
    if (closeFn !== exceptCloseFn) {
      closeFn();
    }
  }
}

function enhanceCustomSelect(selectEl, isCompact = false) {
  if (!selectEl) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'custom-select';
  selectEl.parentNode.insertBefore(wrapper, selectEl);
  wrapper.appendChild(selectEl);

  selectEl.classList.add('native-select-hidden');
  selectEl.tabIndex = -1;
  selectEl.setAttribute('aria-hidden', 'true');

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = isCompact
    ? 'custom-select-trigger custom-select-trigger--compact'
    : 'custom-select-trigger';
  trigger.setAttribute('aria-haspopup', 'listbox');
  trigger.setAttribute('aria-expanded', 'false');
  const labelId = selectEl.getAttribute('aria-labelledby');
  if (labelId) {
    trigger.setAttribute('aria-labelledby', labelId);
  }

  const valueSpan = document.createElement('span');
  valueSpan.className = 'custom-select-value';
  const chevron = createChevronSvg('custom-select-chevron');
  trigger.append(valueSpan, chevron);

  const menu = document.createElement('div');
  menu.className = 'custom-select-menu';
  menu.setAttribute('role', 'listbox');
  menu.hidden = true;

  const optionButtons = Array.from(selectEl.options).map((opt) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'custom-select-option';
    btn.setAttribute('role', 'option');
    btn.dataset.value = opt.value;
    btn.textContent = opt.textContent;
    btn.addEventListener('click', () => {
      if (selectEl.value !== opt.value) {
        selectEl.value = opt.value;
        selectEl.dispatchEvent(new Event('change', { bubbles: true }));
      }
      sync();
      close();
      trigger.focus();
    });
    menu.appendChild(btn);
    return btn;
  });

  wrapper.append(trigger, menu);

  function sync() {
    const selectedOpt = selectEl.options[selectEl.selectedIndex];
    valueSpan.textContent = selectedOpt ? selectedOpt.textContent : '';
    for (const btn of optionButtons) {
      const isSelected = btn.dataset.value === selectEl.value;
      btn.classList.toggle('is-selected', isSelected);
      btn.setAttribute('aria-selected', String(isSelected));
    }
  }

  function close() {
    if (menu.hidden) return;
    menu.hidden = true;
    menu.classList.remove('is-up');
    wrapper.classList.remove('is-open');
    trigger.setAttribute('aria-expanded', 'false');
  }

  function open() {
    closeAllMenus(close);
    const rect = trigger.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    menu.classList.toggle('is-up', spaceBelow < 220 && rect.top > spaceBelow);
    menu.hidden = false;
    wrapper.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
    const selectedBtn = optionButtons.find((btn) => btn.dataset.value === selectEl.value);
    if (selectedBtn) {
      selectedBtn.scrollIntoView({ block: 'nearest' });
    }
  }

  trigger.addEventListener('click', () => {
    if (menu.hidden) {
      open();
    } else {
      close();
    }
  });

  trigger.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (menu.hidden) open();
      const target = optionButtons.find((b) => b.dataset.value === selectEl.value) || optionButtons[0];
      if (target) target.focus();
    } else if (event.key === 'Escape') {
      close();
    }
  });

  menu.addEventListener('keydown', (event) => {
    const currentIndex = optionButtons.indexOf(document.activeElement);
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const next = optionButtons[Math.min(optionButtons.length - 1, currentIndex + 1)] || optionButtons[0];
      if (next) next.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prev = optionButtons[Math.max(0, currentIndex - 1)] || optionButtons[0];
      if (prev) prev.focus();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      close();
      trigger.focus();
    }
  });

  selectEl.addEventListener('change', sync);
  closeHandlers.push(close);
  customSelectSyncMap.set(selectEl, sync);
  sync();
}

function syncCustomSelect(selectEl) {
  const syncFn = customSelectSyncMap.get(selectEl);
  if (syncFn) syncFn();
}

function normalizeHex(raw) {
  if (!raw) return null;
  let hex = raw.trim().replace(/^#/, '');
  if (/^[0-9A-Fa-f]{3}$/.test(hex)) {
    hex = hex.split('').map((c) => c + c).join('');
  }
  if (!/^[0-9A-Fa-f]{6}$/.test(hex)) return null;
  return `#${hex.toUpperCase()}`;
}

function hexToRgb(hex) {
  const clean = hex.slice(1);
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  };
}

function rgbToHsv(r, g, b) {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const d = max - min;

  let h = 0;
  if (d !== 0) {
    if (max === rn) h = ((gn - bn) / d) % 6;
    else if (max === gn) h = (bn - rn) / d + 2;
    else h = (rn - gn) / d + 4;
    h = Math.round(h * 60);
    if (h < 0) h += 360;
  }

  const s = max === 0 ? 0 : d / max;
  const v = max;
  return { h, s, v };
}

function hsvToHex(h, s, v) {
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  let rn = 0;
  let gn = 0;
  let bn = 0;

  if (h >= 0 && h < 60) {
    rn = c; gn = x; bn = 0;
  } else if (h >= 60 && h < 120) {
    rn = x; gn = c; bn = 0;
  } else if (h >= 120 && h < 180) {
    rn = 0; gn = c; bn = x;
  } else if (h >= 180 && h < 240) {
    rn = 0; gn = x; bn = c;
  } else if (h >= 240 && h < 300) {
    rn = x; gn = 0; bn = c;
  } else {
    rn = c; gn = 0; bn = x;
  }

  const toHex = (n) => Math.round((n + m) * 255).toString(16).padStart(2, '0');
  return `#${toHex(rn)}${toHex(gn)}${toHex(bn)}`.toUpperCase();
}

function enhanceColorPicker({ controlEl, triggerEl, inputEl, hexLabelEl, swatchEl, defaultHex, onChange }) {
  if (!controlEl || !triggerEl || !inputEl) return;

  const fallbackDefault = normalizeHex(defaultHex || inputEl.value) || '#0D1117';
  let currentHex = normalizeHex(inputEl.value) || fallbackDefault;
  let hsv = (() => {
    const { r, g, b } = hexToRgb(currentHex);
    return rgbToHsv(r, g, b);
  })();

  const popover = document.createElement('div');
  popover.className = 'color-popover';
  popover.setAttribute('role', 'dialog');
  popover.setAttribute('aria-label', 'Color picker');
  popover.hidden = true;

  const svArea = document.createElement('div');
  svArea.className = 'cp-sv-area';
  const svThumb = document.createElement('div');
  svThumb.className = 'cp-sv-thumb';
  svArea.appendChild(svThumb);

  const hueBar = document.createElement('div');
  hueBar.className = 'cp-hue-bar';
  const hueThumb = document.createElement('div');
  hueThumb.className = 'cp-hue-thumb';
  hueBar.appendChild(hueThumb);

  const hexRow = document.createElement('div');
  hexRow.className = 'cp-hex-row';
  const previewSwatch = document.createElement('span');
  previewSwatch.className = 'cp-preview-swatch';
  const hexInput = document.createElement('input');
  hexInput.type = 'text';
  hexInput.className = 'cp-hex-input';
  hexInput.maxLength = 7;
  hexInput.setAttribute('aria-label', 'Hex color code');
  hexInput.autocomplete = 'off';
  hexInput.spellcheck = false;
  hexRow.append(previewSwatch, hexInput);

  const dropSelect = document.createElement('div');
  dropSelect.className = 'cp-drop-select';
  const dropTrigger = document.createElement('button');
  dropTrigger.type = 'button';
  dropTrigger.className = 'cp-drop-trigger';
  dropTrigger.setAttribute('aria-haspopup', 'listbox');
  dropTrigger.setAttribute('aria-expanded', 'false');

  const dropLabelWrap = document.createElement('span');
  dropLabelWrap.className = 'cp-drop-label-wrap';
  const dropSwatch = document.createElement('span');
  dropSwatch.className = 'cp-drop-swatch';
  const dropName = document.createElement('span');
  dropName.className = 'cp-drop-name';
  dropLabelWrap.append(dropSwatch, dropName);
  const dropChevron = createChevronSvg('custom-select-chevron');
  dropTrigger.append(dropLabelWrap, dropChevron);

  const dropMenu = document.createElement('div');
  dropMenu.className = 'cp-drop-menu';
  dropMenu.setAttribute('role', 'listbox');
  dropMenu.hidden = true;

  const resetBtn = document.createElement('button');
  resetBtn.type = 'button';
  resetBtn.className = 'cp-drop-option cp-drop-option--reset';
  resetBtn.setAttribute('role', 'option');

  const resetLeft = document.createElement('span');
  resetLeft.className = 'cp-drop-label-wrap';
  const resetSwatch = document.createElement('span');
  resetSwatch.className = 'cp-drop-swatch';
  resetSwatch.style.backgroundColor = fallbackDefault;
  const resetName = document.createElement('span');
  resetName.className = 'cp-drop-name';
  resetName.textContent = 'Reset to default';
  resetLeft.append(resetSwatch, resetName);

  const resetHex = document.createElement('span');
  resetHex.className = 'cp-drop-hex';
  resetHex.textContent = fallbackDefault;

  resetBtn.append(resetLeft, resetHex);
  resetBtn.addEventListener('click', () => {
    setHex(fallbackDefault, true);
    dropMenu.hidden = true;
    dropTrigger.setAttribute('aria-expanded', 'false');
  });
  dropMenu.appendChild(resetBtn);

  const presetButtons = COLOR_PRESETS.map((preset) => {
    const opt = document.createElement('button');
    opt.type = 'button';
    opt.className = 'cp-drop-option';
    opt.setAttribute('role', 'option');

    const left = document.createElement('span');
    left.className = 'cp-drop-label-wrap';
    const sw = document.createElement('span');
    sw.className = 'cp-drop-swatch';
    sw.style.backgroundColor = preset.hex;
    const nm = document.createElement('span');
    nm.className = 'cp-drop-name';
    nm.textContent = preset.name;
    left.append(sw, nm);

    const hx = document.createElement('span');
    hx.className = 'cp-drop-hex';
    hx.textContent = preset.hex;

    opt.append(left, hx);
    opt.addEventListener('click', () => {
      setHex(preset.hex, true);
      dropMenu.hidden = true;
      dropTrigger.setAttribute('aria-expanded', 'false');
    });
    dropMenu.appendChild(opt);
    return { preset, opt };
  });

  dropSelect.append(dropTrigger, dropMenu);
  popover.append(svArea, hueBar, hexRow, dropSelect);
  controlEl.appendChild(popover);

  function renderUI(updateHexInputValue = true) {
    inputEl.value = currentHex;
    hexLabelEl.textContent = currentHex;
    if (swatchEl) swatchEl.style.backgroundColor = currentHex;
    previewSwatch.style.backgroundColor = currentHex;
    dropSwatch.style.backgroundColor = currentHex;
    if (updateHexInputValue) hexInput.value = currentHex;

    svArea.style.backgroundColor = `hsl(${hsv.h}, 100%, 50%)`;
    svThumb.style.left = `${hsv.s * 100}%`;
    svThumb.style.top = `${(1 - hsv.v) * 100}%`;
    hueThumb.style.left = `${(hsv.h / 360) * 100}%`;

    const matched = COLOR_PRESETS.find((p) => p.hex === currentHex);
    dropName.textContent = matched ? matched.name : `Custom (${currentHex})`;
    for (const item of presetButtons) {
      const isSelected = item.preset.hex === currentHex;
      item.opt.classList.toggle('is-selected', isSelected);
      item.opt.setAttribute('aria-selected', String(isSelected));
    }
  }

  function setHex(rawHex, syncHsv = true) {
    const normalized = normalizeHex(rawHex);
    if (!normalized) return;
    currentHex = normalized;
    if (syncHsv) {
      const { r, g, b } = hexToRgb(currentHex);
      const nextHsv = rgbToHsv(r, g, b);
      if (nextHsv.s === 0) nextHsv.h = hsv.h;
      hsv = nextHsv;
    }
    renderUI(true);
    onChange();
  }

  function updateFromSvPointer(clientX, clientY) {
    const rect = svArea.getBoundingClientRect();
    const s = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const v = Math.max(0, Math.min(1, 1 - (clientY - rect.top) / rect.height));
    hsv = { ...hsv, s, v };
    currentHex = hsvToHex(hsv.h, hsv.s, hsv.v);
    renderUI(true);
    onChange();
  }

  function updateFromHuePointer(clientX) {
    const rect = hueBar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    hsv = { ...hsv, h: Math.round(ratio * 360) };
    currentHex = hsvToHex(hsv.h, hsv.s, hsv.v);
    renderUI(true);
    onChange();
  }

  svArea.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    svArea.setPointerCapture(event.pointerId);
    updateFromSvPointer(event.clientX, event.clientY);
  });

  svArea.addEventListener('pointermove', (event) => {
    if (event.buttons === 0 && event.pointerType === 'mouse') return;
    if (svArea.hasPointerCapture(event.pointerId)) {
      updateFromSvPointer(event.clientX, event.clientY);
    }
  });

  hueBar.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    hueBar.setPointerCapture(event.pointerId);
    updateFromHuePointer(event.clientX);
  });

  hueBar.addEventListener('pointermove', (event) => {
    if (event.buttons === 0 && event.pointerType === 'mouse') return;
    if (hueBar.hasPointerCapture(event.pointerId)) {
      updateFromHuePointer(event.clientX);
    }
  });

  hexInput.addEventListener('input', () => {
    const normalized = normalizeHex(hexInput.value);
    if (normalized) {
      currentHex = normalized;
      const { r, g, b } = hexToRgb(currentHex);
      hsv = rgbToHsv(r, g, b);
      renderUI(false);
      onChange();
    }
  });

  hexInput.addEventListener('blur', () => {
    renderUI(true);
  });

  dropTrigger.addEventListener('click', (event) => {
    event.stopPropagation();
    const nextHidden = !dropMenu.hidden;
    dropMenu.hidden = nextHidden;
    dropTrigger.setAttribute('aria-expanded', String(!nextHidden));
  });

  function close() {
    if (popover.hidden) return;
    popover.hidden = true;
    popover.classList.remove('is-up');
    dropMenu.hidden = true;
    dropTrigger.setAttribute('aria-expanded', 'false');
    controlEl.classList.remove('is-open');
    triggerEl.setAttribute('aria-expanded', 'false');
  }

  function open() {
    closeAllMenus(close);
    const rect = triggerEl.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    popover.classList.toggle('is-up', spaceBelow < 275 && rect.top > spaceBelow);
    popover.hidden = false;
    controlEl.classList.add('is-open');
    triggerEl.setAttribute('aria-expanded', 'true');
  }

  triggerEl.addEventListener('click', () => {
    if (popover.hidden) {
      open();
    } else {
      close();
    }
  });

  popover.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
      triggerEl.focus();
    }
  });

  closeHandlers.push(close);
  renderUI(true);
}

function detectLanguageFromFilename(rawFilename) {
  const trimmed = (rawFilename || '').trim();
  if (!trimmed) {
    return { lang: 'plaintext', reason: 'none' };
  }

  const baseName = trimmed.split('/').pop().split('\\').pop();
  const dotIndex = baseName.lastIndexOf('.');

  if (dotIndex <= 0 || dotIndex === baseName.length - 1) {
    return { lang: 'plaintext', reason: 'no-ext' };
  }

  const ext = baseName.slice(dotIndex + 1).toLowerCase();
  if (EXTENSION_MAP[ext]) {
    return { lang: EXTENSION_MAP[ext], reason: 'ext', ext };
  }

  return { lang: 'plaintext', reason: 'unknown-ext', ext };
}

function getResolvedLanguage() {
  const selected = els.languageSelect.value;
  if (selected !== 'auto') {
    return { lang: selected, isAuto: false, reason: 'manual' };
  }

  const detected = detectLanguageFromFilename(els.filenameInput.value);
  return { ...detected, isAuto: true };
}

function createFallbackSvgIcon(langKey) {
  const meta = LANGUAGE_META[langKey] || LANGUAGE_META.plaintext;
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 16 16');
  svg.setAttribute('width', '12');
  svg.setAttribute('height', '12');
  svg.setAttribute('aria-hidden', 'true');

  if (langKey === 'sql') {
    const top = document.createElementNS(svgNS, 'ellipse');
    top.setAttribute('cx', '8');
    top.setAttribute('cy', '4');
    top.setAttribute('rx', '5.2');
    top.setAttribute('ry', '2');
    top.setAttribute('fill', 'none');
    top.setAttribute('stroke', meta.color);
    top.setAttribute('stroke-width', '1.4');

    const body = document.createElementNS(svgNS, 'path');
    body.setAttribute('d', 'M2.8 4v8c0 1.1 2.33 2 5.2 2s5.2-.9 5.2-2V4M2.8 8c0 1.1 2.33 2 5.2 2s5.2-.9 5.2-2');
    body.setAttribute('fill', 'none');
    body.setAttribute('stroke', meta.color);
    body.setAttribute('stroke-width', '1.4');

    svg.append(top, body);
    return svg;
  }

  const doc = document.createElementNS(svgNS, 'path');
  doc.setAttribute('d', 'M3.5 1.75h6l3 3v9.5a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-11.5a1 1 0 0 1 1-1z');
  doc.setAttribute('fill', 'none');
  doc.setAttribute('stroke', meta.color);
  doc.setAttribute('stroke-width', '1.35');
  doc.setAttribute('stroke-linejoin', 'round');

  const lines = document.createElementNS(svgNS, 'path');
  lines.setAttribute('d', 'M5 7.5h6M5 10.2h4.2');
  lines.setAttribute('fill', 'none');
  lines.setAttribute('stroke', meta.color);
  lines.setAttribute('stroke-width', '1.35');
  lines.setAttribute('stroke-linecap', 'round');

  svg.append(doc, lines);
  return svg;
}

function hasDeviconGlyph(iconEl) {
  try {
    const pseudo = window.getComputedStyle(iconEl, '::before');
    const content = pseudo.getPropertyValue('content');
    return Boolean(content && content !== 'none' && content !== 'normal' && content !== '""' && content !== "''");
  } catch {
    return false;
  }
}

function renderLanguageIcon(langKey, forceSvgFallback = false) {
  const meta = LANGUAGE_META[langKey] || LANGUAGE_META.plaintext;
  const slot = els.languageIconSlot;
  slot.replaceChildren();

  if (!forceSvgFallback && meta.devicon) {
    const icon = document.createElement('i');
    icon.className = meta.devicon;
    if (!meta.devicon.includes('colored')) {
      icon.style.color = meta.color;
    }
    slot.appendChild(icon);

    if (!hasDeviconGlyph(icon)) {
      slot.replaceChildren(createFallbackSvgIcon(langKey));
    }
    return;
  }

  slot.appendChild(createFallbackSvgIcon(langKey));
}

function enhanceCssTokens(container) {
  let depth = 0;
  let inValue = false;
  const children = Array.from(container.childNodes);

  for (const node of children) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node;
      if (el.classList.contains('hljs-attribute') || el.classList.contains('hljs-attr')) {
        if (el.textContent && el.textContent.trim().startsWith('--')) {
          el.classList.add('hljs-css-var');
        }
      } else if (el.classList.contains('hljs-number')) {
        if (el.textContent && el.textContent.trim().startsWith('#')) {
          el.classList.remove('hljs-number');
          el.classList.add('hljs-css-value');
        }
      } else if (el.classList.contains('hljs-selector-attr')) {
        el.querySelectorAll('.hljs-string').forEach((strEl) => {
          strEl.style.color = '#CE9178';
        });
      }
      continue;
    }

    if (node.nodeType !== Node.TEXT_NODE) continue;
    const text = node.textContent || '';
    if (!text) continue;

    const fragment = document.createDocumentFragment();
    const tokenPattern = /(--[A-Za-z0-9_-]+)|([{}():;,.>+~*[\]/=])|(#[0-9A-Fa-f]{3,8}\b)|([A-Za-z_!-][A-Za-z0-9_-]*)/g;
    let lastIndex = 0;
    let match;

    while ((match = tokenPattern.exec(text)) !== null) {
      if (match.index > lastIndex) {
        fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
      }

      const [full, cssVar, punct, hexColor, word] = match;
      const span = document.createElement('span');
      span.textContent = full;

      if (cssVar) {
        span.className = 'hljs-css-var';
      } else if (punct) {
        span.className = 'hljs-punctuation';
        if (punct === ':') inValue = true;
        else if (punct === ';' || punct === ')') inValue = false;
        else if (punct === '{') {
          depth += 1;
          inValue = false;
        } else if (punct === '}') {
          depth = Math.max(0, depth - 1);
          inValue = false;
        }
      } else if (hexColor) {
        span.className = 'hljs-css-value';
      } else if (word) {
        span.className = inValue || depth > 0 ? 'hljs-css-value' : 'hljs-selector-fallback';
      }

      fragment.appendChild(span);
      lastIndex = tokenPattern.lastIndex;
    }

    if (lastIndex < text.length) {
      fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
    }

    node.replaceWith(fragment);
  }
}

function enhanceJsTokens(container) {
  const BUILTIN_OBJECTS = new Set([
    'Math', 'JSON', 'Promise', 'Object', 'Array', 'String', 'Number', 'Boolean',
    'Date', 'RegExp', 'Map', 'Set', 'WeakMap', 'WeakSet', 'Error', 'TypeError',
    'RangeError', 'SyntaxError', 'Symbol', 'BigInt', 'Intl', 'Reflect', 'Proxy',
    'console', 'window', 'document', 'globalThis', 'URL', 'URLSearchParams',
    'FormData', 'Headers', 'Request', 'Response', 'Blob', 'File', 'Event',
    'CustomEvent', 'AbortController', 'TextEncoder', 'TextDecoder', 'Uint8Array',
  ]);
  const LITERALS = new Set(['true', 'false', 'null', 'undefined']);

  const children = Array.from(container.childNodes);
  for (const node of children) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node;
      if (el.classList.contains('hljs-built_in')) {
        const text = (el.textContent || '').trim();
        if (LITERALS.has(text)) {
          el.classList.remove('hljs-built_in');
          el.classList.add('hljs-literal');
        }
      } else if (el.classList.contains('hljs-variable')) {
        const text = (el.textContent || '').trim();
        if (LITERALS.has(text)) el.classList.add('hljs-literal');
        else if (BUILTIN_OBJECTS.has(text)) el.classList.add('hljs-built_in');
      } else if (el.classList.contains('hljs-params') || el.classList.contains('hljs-subst')) {
        enhanceJsTokens(el);
      }
      continue;
    }

    if (node.nodeType !== Node.TEXT_NODE) continue;
    const text = node.textContent || '';
    if (!text) continue;

    const fragment = document.createDocumentFragment();
    const tokenPattern = /([A-Za-z_$][A-Za-z0-9_$]*)|([{}()[\];,.:?]|===|!==|==|!=|<=|>=|=>|\?\?|\?\.|\.\.\.|\+\+|--|\*\*|[+\-*/%=<>!&|^~]+)/g;
    let lastIndex = 0;
    let match;

    while ((match = tokenPattern.exec(text)) !== null) {
      if (match.index > lastIndex) {
        fragment.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
      }

      const [full, ident, symbol] = match;
      const span = document.createElement('span');
      span.textContent = full;

      if (ident) {
        const after = text.slice(tokenPattern.lastIndex);
        if (LITERALS.has(ident)) span.className = 'hljs-literal';
        else if (BUILTIN_OBJECTS.has(ident)) span.className = 'hljs-built_in';
        else if (/^\s*\(/.test(after)) span.className = 'hljs-title function_';
        else span.className = 'hljs-variable';
      } else if (symbol) {
        span.className = 'hljs-punctuation';
      }

      fragment.appendChild(span);
      lastIndex = tokenPattern.lastIndex;
    }

    if (lastIndex < text.length) {
      fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
    }

    node.replaceWith(fragment);
  }
}

function renderCodePreview(code, langKey) {
  const codeEl = els.snapshotCode;
  const meta = LANGUAGE_META[langKey] || LANGUAGE_META.plaintext;
  const displayCode = code.endsWith('\n') ? `${code} ` : code;

  codeEl.removeAttribute('data-highlighted');
  codeEl.textContent = displayCode;

  if (langKey === 'plaintext' || !code) {
    codeEl.className = 'hljs language-plaintext';
    return;
  }

  const hljsLang = meta.hljs || 'plaintext';
  codeEl.className = `hljs language-${hljsLang}`;

  if (window.hljs && typeof window.hljs.highlightElement === 'function') {
    const registered = typeof window.hljs.getLanguage === 'function'
      ? Boolean(window.hljs.getLanguage(hljsLang))
      : true;

    if (registered) {
      try {
        window.hljs.highlightElement(codeEl);
        if (hljsLang === 'css') {
          enhanceCssTokens(codeEl);
        } else if (hljsLang === 'javascript') {
          enhanceJsTokens(codeEl);
        } else if (hljsLang === 'xml') {
          codeEl.querySelectorAll('.language-css').forEach((styleBlock) => {
            enhanceCssTokens(styleBlock);
          });
          codeEl.querySelectorAll('.language-javascript').forEach((scriptBlock) => {
            enhanceJsTokens(scriptBlock);
          });
        }
      } catch {
        codeEl.textContent = displayCode;
      }
    }
  }
}

function applyAppearance() {
  const windowBg = els.windowBgInput.value.toUpperCase();
  const titleBarBg = els.titleBarBgInput.value.toUpperCase();

  document.documentElement.style.setProperty('--snap-bg', windowBg);
  document.documentElement.style.setProperty('--snap-title-bg', titleBarBg);

  els.windowBgHex.textContent = windowBg;
  els.titleBarBgHex.textContent = titleBarBg;

  const fontSize = Number(els.fontSizeSelect.value) || 12;
  const lineHeight = Math.round(fontSize * 1.57);
  document.documentElement.style.setProperty('--code-font-size', `${fontSize}px`);
  document.documentElement.style.setProperty('--code-line-height', `${lineHeight}px`);

  const showControls = els.showControlsInput.checked;
  const showFilename = els.showFilenameInput.checked;
  const wrapLines = els.wrapLinesInput.checked;

  els.windowControls.hidden = !showControls;
  els.filenameTab.hidden = !showFilename;

  els.snapshotTitleBar.classList.toggle('snapshot-title-bar--no-tab', !showFilename);
  els.snapshotTitleBar.classList.toggle('snapshot-title-bar--empty', !showControls && !showFilename);

  els.snapshotNode.classList.toggle('is-wrapped', wrapLines);
  if (els.snapshotExportFrame) {
    els.snapshotExportFrame.classList.toggle('is-wrapped', wrapLines);
  }
}

function syncPresetKeysState() {
  const currentName = els.filenameInput.value.trim();
  for (const btn of els.presetKeys) {
    const isMatch = btn.dataset.preset === currentName;
    btn.classList.toggle('is-active', isMatch);
    btn.setAttribute('aria-pressed', String(isMatch));
  }
}

function applyPreset(presetKey) {
  if (!presetKey) return;
  els.filenameInput.value = presetKey;
  els.languageSelect.value = 'auto';
  syncCustomSelect(els.languageSelect);
  updateSnapshotContent();
}

function updateSnapshotContent() {
  const rawFilename = els.filenameInput.value.trim();
  els.snapshotFilename.textContent = rawFilename || 'untitled';
  syncPresetKeysState();

  const resolved = getResolvedLanguage();
  renderLanguageIcon(resolved.lang);

  renderCodePreview(els.codeInput.value, resolved.lang);
}

function updateExportControls() {
  const isPng = els.exportFormatSelect.value === 'png';
  els.transparentBgInput.disabled = !isPng;
  els.transparentToggleRow.classList.toggle('is-disabled', !isPng);
}

function getExportFilename(extension) {
  const raw = (els.filenameInput.value || '').trim();
  const baseName = (raw || 'untitled').split('/').pop().split('\\').pop();
  const dotIndex = baseName.lastIndexOf('.');
  const stem = dotIndex > 0 ? baseName.slice(0, dotIndex) : baseName;
  const safeStem = stem.replace(/[<>:"/\\|?*\x00-\x1F]/g, '_').trim() || 'untitled';
  return `${safeStem}.${extension}`;
}

function triggerDownload(urlOrBlob, filename) {
  const isBlob = urlOrBlob instanceof Blob;
  const href = isBlob ? URL.createObjectURL(urlOrBlob) : urlOrBlob;

  const link = document.createElement('a');
  link.href = href;
  link.download = filename;
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  link.remove();

  if (isBlob) {
    setTimeout(() => URL.revokeObjectURL(href), 15000);
  }
}

function dataUriToSvgString(dataUri) {
  if (dataUri.startsWith('data:image/svg+xml;base64,')) {
    const base64 = dataUri.slice('data:image/svg+xml;base64,'.length);
    const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
    return new TextDecoder('utf-8').decode(bytes);
  }
  const commaIndex = dataUri.indexOf(',');
  if (commaIndex === -1) {
    throw new Error('Unexpected SVG output format.');
  }
  return decodeURIComponent(dataUri.slice(commaIndex + 1));
}

function getMaxPixelRatio(targetEl) {
  const rect = targetEl.getBoundingClientRect();
  const maxDim = Math.max(1, rect.width, rect.height);
  const desired = Math.max(4, Math.ceil(window.devicePixelRatio || 4));
  const safeMax = Math.max(2, Math.floor(15000 / maxDim));
  return Math.min(desired, safeMax);
}

async function captureSnapshot(targetEl, methodName, options = {}) {
  if (!window.htmlToImage || typeof window.htmlToImage[methodName] !== 'function') {
    throw new Error('The image export library (html-to-image) did not load. Please check your connection and reload.');
  }

  const resolved = getResolvedLanguage();
  const forceInlineIcon = Boolean(options.skipFonts);
  els.snapshotNode.classList.add('is-exporting');
  const prevScrollLeft = els.snapshotCodeWrap.scrollLeft;
  els.snapshotCodeWrap.scrollLeft = 0;

  if (forceInlineIcon) {
    renderLanguageIcon(resolved.lang, true);
  }

  try {
    return await window.htmlToImage[methodName](targetEl, options);
  } catch {
    renderLanguageIcon(resolved.lang, true);
    return await window.htmlToImage[methodName](targetEl, {
      ...options,
      skipFonts: true,
    });
  } finally {
    renderLanguageIcon(resolved.lang, false);
    els.snapshotCodeWrap.scrollLeft = prevScrollLeft;
    els.snapshotNode.classList.remove('is-exporting');
  }
}

function canvasToPngBlob(canvas) {
  return new Promise((resolve, reject) => {
    if (typeof canvas.toBlob === 'function') {
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Could not encode transparent PNG image.'));
        }
      }, 'image/png');
      return;
    }

    const dataUrl = canvas.toDataURL('image/png');
    const parts = dataUrl.split(',');
    const binary = atob(parts[1] || '');
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    resolve(new Blob([bytes], { type: 'image/png' }));
  });
}

function normalizeColorSchemeOnElement(el) {
  if (!el) return;
  if (el.style && typeof el.style.setProperty === 'function') {
    el.style.setProperty('color-scheme', 'normal');
  } else if (typeof el.hasAttribute === 'function' && el.hasAttribute('style')) {
    const updatedStyle = (el.getAttribute('style') || '').replace(/color-scheme\s*:[^;]+;?/gi, 'color-scheme: normal;');
    el.setAttribute('style', updatedStyle);
  }
}

function sanitizeSvgForTransparentExport(svgXml) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgXml, 'image/svg+xml');
  const svgEl = doc.documentElement;
  if (!svgEl || svgEl.nodeName.toLowerCase() !== 'svg' || doc.querySelector('parsererror')) {
    return svgXml;
  }

  svgEl.style.setProperty('background', 'transparent');
  svgEl.style.setProperty('background-color', 'transparent');
  svgEl.style.setProperty('background-image', 'none');
  normalizeColorSchemeOnElement(svgEl);

  for (const styleEl of Array.from(svgEl.querySelectorAll('style'))) {
    if (styleEl.textContent && /color-scheme\s*:/i.test(styleEl.textContent)) {
      styleEl.textContent = styleEl.textContent.replace(/color-scheme\s*:[^;{}]+;?/gi, 'color-scheme: normal;');
    }
  }

  // Remove any top-level background rect directly under <svg>
  for (const child of Array.from(svgEl.children)) {
    const tagName = child.nodeName.toLowerCase();
    if (tagName === 'rect') {
      child.remove();
    } else if (tagName === 'foreignobject') {
      child.style.setProperty('background', 'transparent');
      child.style.setProperty('background-color', 'transparent');
      child.style.setProperty('background-image', 'none');
      normalizeColorSchemeOnElement(child);

      const frameEl = child.firstElementChild;
      if (frameEl && frameEl.id === 'snapshotExportFrame') {
        frameEl.style.setProperty('background', 'transparent');
        frameEl.style.setProperty('background-color', 'transparent');
        frameEl.style.setProperty('background-image', 'none');
        normalizeColorSchemeOnElement(frameEl);
      }

      for (const descendant of Array.from(child.querySelectorAll('*'))) {
        normalizeColorSchemeOnElement(descendant);
      }
    }
  }

  return new XMLSerializer().serializeToString(svgEl);
}

function loadSvgAsImage(svgXml) {
  return new Promise((resolve, reject) => {
    const svgBlob = new Blob([svgXml], { type: 'image/svg+xml;charset=utf-8' });
    const reader = new FileReader();

    reader.onerror = () => {
      reject(new Error('Could not read snapshot SVG for rasterization.'));
    };

    reader.onload = () => {
      const dataUrl = typeof reader.result === 'string' ? reader.result : '';
      if (!dataUrl) {
        reject(new Error('Could not rasterize snapshot SVG.'));
        return;
      }

      const img = new Image();
      img.decoding = 'async';
      img.onload = () => {
        img.onload = null;
        img.onerror = null;
        resolve(img);
      };
      img.onerror = () => {
        img.onload = null;
        img.onerror = null;
        reject(new Error('Could not rasterize snapshot SVG.'));
      };
      img.src = dataUrl;
    };

    reader.readAsDataURL(svgBlob);
  });
}

function verifyCanvasTransparency(ctx, targetRect, windowRect, canvasWidth, canvasHeight) {
  const clampX = (x) => Math.max(0, Math.min(canvasWidth - 1, Math.round(x)));
  const clampY = (y) => Math.max(0, Math.min(canvasHeight - 1, Math.round(y)));
  const readPixel = (x, y) => ctx.getImageData(clampX(x), clampY(y), 1, 1).data;

  // 1. Verify all 4 outer corners have alpha === 0
  const outerCorners = [
    [0, 0],
    [canvasWidth - 1, 0],
    [0, canvasHeight - 1],
    [canvasWidth - 1, canvasHeight - 1],
  ];
  for (const [x, y] of outerCorners) {
    const px = readPixel(x, y);
    if (px[3] !== 0) {
      throw new Error('Transparent PNG verification failed: outer background is not transparent.');
    }
  }

  const scaleX = canvasWidth / Math.max(1, targetRect.width);
  const scaleY = canvasHeight / Math.max(1, targetRect.height);
  const winLeft = (windowRect.left - targetRect.left) * scaleX;
  const winTop = (windowRect.top - targetRect.top) * scaleY;
  const winRight = (windowRect.right - targetRect.left) * scaleX - 1;
  const winBottom = (windowRect.bottom - targetRect.top) * scaleY - 1;

  // 2. Verify rounded corner outer tips remain transparent (never opaque / never white)
  const roundedCornerTips = [
    [winLeft, winTop],
    [winRight, winTop],
    [winLeft, winBottom],
    [winRight, winBottom],
  ];
  for (const [x, y] of roundedCornerTips) {
    const px = readPixel(x, y);
    const isOpaqueWhite = px[0] >= 250 && px[1] >= 250 && px[2] >= 250 && px[3] === 255;
    if (px[3] === 255 || isOpaqueWhite) {
      throw new Error('Transparent PNG verification failed: rounded corners lost transparency.');
    }
  }

  // 3. Verify the code window interior is solid opaque (alpha === 255)
  const interiorX = (winLeft + winRight) / 2;
  const interiorY = (winTop + winBottom) / 2;
  const interiorPx = readPixel(interiorX, interiorY);
  if (interiorPx[3] !== 255) {
    throw new Error('Transparent PNG verification failed: code window interior is not opaque.');
  }
}

async function verifyPngBlobHeader(blob) {
  const headerBuf = await blob.slice(0, 33).arrayBuffer();
  const bytes = new Uint8Array(headerBuf);
  const pngSig = [137, 80, 78, 71, 13, 10, 26, 10];
  for (let i = 0; i < pngSig.length; i += 1) {
    if (bytes[i] !== pngSig[i]) {
      throw new Error('Exported file failed PNG signature verification.');
    }
  }
  // IHDR colorType is at byte offset 25; 6 = RGBA (truecolor with alpha)
  const colorType = bytes[25];
  if (colorType !== 6) {
    throw new Error('Exported PNG does not contain an RGBA alpha channel.');
  }
}

async function exportPng() {
  const transparentBg = els.transparentBgInput.checked;
  const target = els.snapshotExportFrame || els.snapshotNode;
  const rect = target.getBoundingClientRect();
  const windowRect = els.snapshotNode.getBoundingClientRect();
  const pixelRatio = getMaxPixelRatio(target);

  const svgDataUrl = await captureSnapshot(target, 'toSvg', {
    cacheBust: true,
    skipFonts: true,
    backgroundColor: undefined,
    style: transparentBg
      ? {
          background: 'transparent',
          backgroundColor: 'transparent',
          backgroundImage: 'none',
          colorScheme: 'normal',
        }
      : undefined,
  });

  const rawSvgXml = dataUriToSvgString(svgDataUrl);
  const cleanSvgXml = transparentBg ? sanitizeSvgForTransparentExport(rawSvgXml) : rawSvgXml;
  const img = await loadSvgAsImage(cleanSvgXml);

  const baseWidth = Math.max(1, img.naturalWidth || Math.ceil(rect.width));
  const baseHeight = Math.max(1, img.naturalHeight || Math.ceil(rect.height));
  const maxCanvasDim = 16384;
  let canvasWidth = Math.round(baseWidth * pixelRatio);
  let canvasHeight = Math.round(baseHeight * pixelRatio);
  if (canvasWidth > maxCanvasDim || canvasHeight > maxCanvasDim) {
    const scaleDown = Math.min(maxCanvasDim / canvasWidth, maxCanvasDim / canvasHeight);
    canvasWidth = Math.max(1, Math.floor(canvasWidth * scaleDown));
    canvasHeight = Math.max(1, Math.floor(canvasHeight * scaleDown));
  }

  const outputCanvas = document.createElement('canvas');
  outputCanvas.width = canvasWidth;
  outputCanvas.height = canvasHeight;
  const ctx = outputCanvas.getContext('2d', { alpha: true });

  if (!ctx) {
    throw new Error('Could not initialize 2D canvas context for PNG export.');
  }

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  if (!transparentBg) {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  }
  ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);

  if (transparentBg) {
    verifyCanvasTransparency(ctx, rect, windowRect, canvasWidth, canvasHeight);
  }

  const pngBlob = await canvasToPngBlob(outputCanvas);
  if (transparentBg) {
    await verifyPngBlobHeader(pngBlob);
  }
  triggerDownload(pngBlob, getExportFilename('png'));
}

async function exportJpg() {
  const target = els.snapshotExportFrame || els.snapshotNode;
  const pixelRatio = getMaxPixelRatio(target);

  const dataUrl = await captureSnapshot(target, 'toJpeg', {
    pixelRatio,
    quality: 1.0,
    cacheBust: true,
    backgroundColor: '#FFFFFF',
  });
  triggerDownload(dataUrl, getExportFilename('jpg'));
}

async function exportSvg() {
  const dataUrl = await captureSnapshot(els.snapshotNode, 'toSvg', {
    cacheBust: true,
    style: { boxShadow: 'none' },
  });
  const svgXml = dataUriToSvgString(dataUrl);
  const blob = new Blob([svgXml], { type: 'image/svg+xml;charset=utf-8' });
  triggerDownload(blob, getExportFilename('svg'));
}

async function handleDownload() {
  if (isExporting) return;

  const format = els.exportFormatSelect.value;
  isExporting = true;
  els.downloadBtn.disabled = true;
  els.downloadBtn.textContent = 'Preparing...';
  els.exportError.hidden = true;
  els.exportError.textContent = '';

  try {
    if (format === 'png') {
      await exportPng();
    } else if (format === 'jpg') {
      await exportJpg();
    } else if (format === 'svg') {
      await exportSvg();
    } else {
      throw new Error(`Unsupported export format: ${format}`);
    }
  } catch (err) {
    const message = err instanceof Error && err.message
      ? err.message
      : 'Could not generate snapshot. Please try again.';
    els.exportError.textContent = message;
    els.exportError.hidden = false;
  } finally {
    isExporting = false;
    els.downloadBtn.disabled = false;
    els.downloadBtn.textContent = 'Download snapshot';
  }
}

function checkExternalLibraries() {
  const missing = [];

  if (!window.hljs) {
    missing.push('Highlight.js (syntax colors disabled)');
  }
  if (!window.htmlToImage) {
    missing.push('html-to-image (PNG/JPG/SVG export unavailable)');
  }

  if (missing.length > 0) {
    els.libraryNotice.textContent = `Some external libraries failed to load: ${missing.join('; ')}. Check your internet connection or reload the page.`;
    els.libraryNotice.hidden = false;
  } else {
    els.libraryNotice.hidden = true;
  }
}

function createThemeIcon(isDark) {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');

  if (isDark) {
    const circle = document.createElementNS(svgNS, 'circle');
    circle.setAttribute('cx', '12');
    circle.setAttribute('cy', '12');
    circle.setAttribute('r', '4');

    const rays = document.createElementNS(svgNS, 'path');
    rays.setAttribute('d', 'M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41');
    svg.append(circle, rays);
  } else {
    const moon = document.createElementNS(svgNS, 'path');
    moon.setAttribute('d', 'M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z');
    svg.appendChild(moon);
  }

  return svg;
}

function applySiteTheme(theme) {
  const isDark = theme === 'dark';

  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }

  if (els.themeColorMeta) {
    els.themeColorMeta.setAttribute('content', isDark ? '#08080A' : '#F2F2F4');
  }

  if (els.themeToggleBtn) {
    els.themeToggleBtn.setAttribute('aria-pressed', String(isDark));
    els.themeToggleBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  if (els.themeToggleIcon) {
    els.themeToggleIcon.replaceChildren(createThemeIcon(isDark));
  }

  if (els.themeToggleLabel) {
    els.themeToggleLabel.textContent = isDark ? 'Light' : 'Dark';
  }
}

function getSavedSiteTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

function toggleSiteTheme() {
  const currentlyDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const nextTheme = currentlyDark ? 'light' : 'dark';
  applySiteTheme(nextTheme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  } catch {
  }
}

const INDENT_UNIT = '    ';
const HTML_VOID_TAGS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link',
  'meta', 'param', 'source', 'track', 'wbr', 'command', 'keygen', 'menuitem',
]);
const BRACE_LANGUAGES = new Set([
  'css', 'javascript', 'typescript', 'json', 'java', 'c', 'cpp',
  'csharp', 'go', 'rust', 'php', 'swift', 'kotlin', 'dart',
]);
const COLON_LANGUAGES = new Set(['python', 'yaml']);

function getLineLeadingIndent(line) {
  const match = line.match(/^[ \t]*/);
  return match ? match[0] : '';
}

function getCurrentLineBounds(text, cursorPos) {
  const lineStart = cursorPos <= 0 ? 0 : text.lastIndexOf('\n', cursorPos - 1) + 1;
  const nextNewline = text.indexOf('\n', cursorPos);
  const lineEnd = nextNewline === -1 ? text.length : nextNewline;
  return { lineStart, lineEnd };
}

function getNearestNonEmptyLineIndent(text) {
  const lines = text.split('\n');
  for (let i = lines.length - 1; i >= 0; i -= 1) {
    if (lines[i].trim() !== '') {
      return getLineLeadingIndent(lines[i]);
    }
  }
  return '';
}

function getBraceScannerOptions(lang) {
  if (lang === 'css') {
    return { allowLineComments: false, allowRegex: false, allowBackticks: false };
  }
  if (lang === 'javascript' || lang === 'typescript') {
    return { allowLineComments: true, allowRegex: true, allowBackticks: true };
  }
  if (lang === 'json') {
    return { allowLineComments: false, allowRegex: false, allowBackticks: false };
  }
  return { allowLineComments: true, allowRegex: false, allowBackticks: false };
}

function scanHtmlContext(text) {
  const stack = [];
  let i = 0;
  const len = text.length;
  let lineStart = 0;
  let lineHasOpeningTag = false;
  let inComment = false;

  function getLineIndentAt(pos) {
    const ls = pos <= 0 ? 0 : text.lastIndexOf('\n', pos - 1) + 1;
    let end = ls;
    while (end < len && (text[end] === ' ' || text[end] === '\t')) {
      end += 1;
    }
    return text.slice(ls, end);
  }

  while (i < len) {
    const ch = text[i];
    if (ch === '\n') {
      lineStart = i + 1;
      lineHasOpeningTag = false;
      i += 1;
      continue;
    }

    if (ch !== '<') {
      i += 1;
      continue;
    }

    if (text.startsWith('<!--', i)) {
      const closeComment = text.indexOf('-->', i + 4);
      if (closeComment === -1) {
        inComment = true;
        break;
      }
      i = closeComment + 3;
      continue;
    }

    if (text[i + 1] === '!' || text[i + 1] === '?') {
      const closeDecl = text.indexOf('>', i + 2);
      if (closeDecl === -1) break;
      i = closeDecl + 1;
      continue;
    }

    const topTag = stack.length > 0 ? stack[stack.length - 1].tag : '';
    if (topTag === 'script' || topTag === 'style') {
      const closeRawMatch = text.slice(i).match(new RegExp(`^<\\/${topTag}\\s*>`, 'i'));
      if (!closeRawMatch) {
        i += 1;
        continue;
      }
      stack.pop();
      i += closeRawMatch[0].length;
      continue;
    }

    const tagHeaderMatch = text.slice(i).match(/^<(\/?)([A-Za-z][A-Za-z0-9:-]*)(?=[\s/>]|$)/);
    if (!tagHeaderMatch) {
      i += 1;
      continue;
    }

    const isClosing = tagHeaderMatch[1] === '/';
    const tagName = tagHeaderMatch[2].toLowerCase();
    let j = i + tagHeaderMatch[0].length;
    let quote = '';
    let foundGt = false;

    while (j < len) {
      const c = text[j];
      if (quote) {
        if (c === '\\' && j + 1 < len) {
          j += 2;
          continue;
        }
        if (c === quote) quote = '';
      } else {
        if (c === '"' || c === "'") {
          quote = c;
        } else if (c === '>') {
          foundGt = true;
          break;
        }
      }
      j += 1;
    }

    if (!foundGt) break;

    const isSelfClosing = !isClosing && j > i && text[j - 1] === '/';

    if (isClosing) {
      for (let k = stack.length - 1; k >= 0; k -= 1) {
        if (stack[k].tag === tagName) {
          stack.length = k;
          break;
        }
      }
    } else if (!isSelfClosing && !HTML_VOID_TAGS.has(tagName)) {
      const rawLineIndent = getLineIndentAt(i);
      const baseIndent = !lineHasOpeningTag
        ? rawLineIndent
        : (stack.length > 0 ? stack[stack.length - 1].indent + INDENT_UNIT : rawLineIndent);
      stack.push({
        tag: tagName,
        level: stack.length,
        indent: baseIndent,
        isSelfClosing: false,
        contentStart: j + 1,
        lineStart,
      });
      lineHasOpeningTag = true;
    }

    i = j + 1;
  }

  return { stack, inComment };
}

function scanBraceContext(text, baseIndent = '', options = {}) {
  const {
    allowLineComments = true,
    allowRegex = false,
    allowBackticks = false,
  } = options;

  const stack = [];
  let i = 0;
  const len = text.length;
  let quote = '';
  let inLineComment = false;
  let inBlockComment = false;
  let inRegex = false;
  let inRegexClass = false;
  let currentLineIndent = baseIndent;
  let atLineStart = true;
  let lastNonWsToken = '';
  const templateBraceDepths = [];

  function canStartRegexAfter(prevToken) {
    if (!prevToken) return true;
    return /^(?:[({\[:,;=!?&|^~+\-*%<>]|return|case|throw|typeof|void|delete|in|instanceof|new|await|yield|else)$/.test(prevToken);
  }

  while (i < len) {
    const ch = text[i];

    if (ch === '\n') {
      inLineComment = false;
      if (inRegex) {
        inRegex = false;
        inRegexClass = false;
      }
      atLineStart = true;
      currentLineIndent = '';
      i += 1;
      continue;
    }

    if (atLineStart) {
      if (ch === ' ' || ch === '\t') {
        currentLineIndent += ch;
        i += 1;
        continue;
      }
      atLineStart = false;
    }

    if (inLineComment) {
      i += 1;
      continue;
    }

    if (inBlockComment) {
      if (ch === '*' && text[i + 1] === '/') {
        inBlockComment = false;
        i += 2;
        continue;
      }
      i += 1;
      continue;
    }

    if (inRegex) {
      if (ch === '\\' && i + 1 < len) {
        i += 2;
        continue;
      }
      if (ch === '[') {
        inRegexClass = true;
      } else if (ch === ']') {
        inRegexClass = false;
      } else if (ch === '/' && !inRegexClass) {
        inRegex = false;
        lastNonWsToken = '/';
      }
      i += 1;
      continue;
    }

    if (quote) {
      if (ch === '\\' && i + 1 < len) {
        i += 2;
        continue;
      }
      if (quote === '`' && ch === '$' && text[i + 1] === '{') {
        quote = '';
        templateBraceDepths.push(stack.length);
        stack.push({ ch: '{', indent: currentLineIndent, isTemplateExpr: true });
        lastNonWsToken = '{';
        i += 2;
        continue;
      }
      if (ch === quote) {
        quote = '';
        lastNonWsToken = '"';
      }
      i += 1;
      continue;
    }

    if (allowLineComments && ch === '/' && text[i + 1] === '/') {
      inLineComment = true;
      i += 2;
      continue;
    }

    if (ch === '/' && text[i + 1] === '*') {
      inBlockComment = true;
      i += 2;
      continue;
    }

    if (allowRegex && ch === '/' && canStartRegexAfter(lastNonWsToken)) {
      inRegex = true;
      inRegexClass = false;
      i += 1;
      continue;
    }

    if (ch === '"' || ch === "'" || (allowBackticks && ch === '`')) {
      quote = ch;
      i += 1;
      continue;
    }

    if (ch === '{' || ch === '[' || ch === '(') {
      stack.push({ ch, indent: currentLineIndent });
      lastNonWsToken = ch;
      i += 1;
      continue;
    }

    if (ch === '}' || ch === ']' || ch === ')') {
      const target = ch === '}' ? '{' : ch === ']' ? '[' : '(';
      for (let k = stack.length - 1; k >= 0; k -= 1) {
        if (stack[k].ch === target) {
          const popped = stack[k];
          stack.length = k;
          if (ch === '}' && popped.isTemplateExpr && templateBraceDepths.length > 0) {
            templateBraceDepths.pop();
            quote = '`';
          }
          break;
        }
      }
      lastNonWsToken = ch;
      i += 1;
      continue;
    }

    if (/[A-Za-z0-9_$]/.test(ch)) {
      let j = i + 1;
      while (j < len && /[A-Za-z0-9_$]/.test(text[j])) {
        j += 1;
      }
      lastNonWsToken = text.slice(i, j);
      i = j;
      continue;
    }

    if (!/\s/.test(ch)) {
      lastNonWsToken = ch;
    }

    i += 1;
  }

  return {
    stack,
    inBlockComment,
    inLineComment,
    inString: Boolean(quote),
  };
}

function getCurrentHtmlBlockIndent(textBefore) {
  const htmlCtx = scanHtmlContext(textBefore);
  const { stack, inComment } = htmlCtx;
  if (inComment) {
    return { indent: getNearestNonEmptyLineIndent(textBefore), inRawTag: false, inComment: true, stack };
  }
  if (stack.length === 0) {
    return { indent: '', inRawTag: false, inComment: false, stack };
  }

  const top = stack[stack.length - 1];
  if (top.tag === 'script' || top.tag === 'style') {
    const innerText = textBefore.slice(top.contentStart);
    const braceBase = top.indent + INDENT_UNIT;
    const rawLang = top.tag === 'style' ? 'css' : 'javascript';
    const braceCtx = scanBraceContext(innerText, braceBase, getBraceScannerOptions(rawLang));
    if (braceCtx.stack.length > 0) {
      const topBrace = braceCtx.stack[braceCtx.stack.length - 1];
      return { indent: topBrace.indent + INDENT_UNIT, inRawTag: true, inComment: false, braceBase, braceCtx, stack };
    }
    return { indent: braceBase, inRawTag: true, inComment: false, braceBase, braceCtx, stack };
  }

  return { indent: top.indent + INDENT_UNIT, inRawTag: false, inComment: false, stack };
}

function getStructuralIndentAtPosition(beforeLineText, lang) {
  if (!beforeLineText) return '';

  if (lang === 'html') {
    return getCurrentHtmlBlockIndent(beforeLineText).indent;
  }

  if (BRACE_LANGUAGES.has(lang)) {
    const braceCtx = scanBraceContext(beforeLineText, '', getBraceScannerOptions(lang));
    if (braceCtx.stack.length > 0) {
      return braceCtx.stack[braceCtx.stack.length - 1].indent + INDENT_UNIT;
    }
    const htmlCtx = scanHtmlContext(beforeLineText);
    if (htmlCtx.stack.length > 0) {
      return htmlCtx.stack[htmlCtx.stack.length - 1].indent + INDENT_UNIT;
    }
    return '';
  }

  if (COLON_LANGUAGES.has(lang)) {
    const lines = beforeLineText.split('\n');
    for (let i = lines.length - 1; i >= 0; i -= 1) {
      const line = lines[i];
      if (line.trim() === '') continue;
      const base = getLineLeadingIndent(line);
      const stripped = line.replace(/\s+#.*$/, '').trimEnd();
      return stripped.endsWith(':') ? base + INDENT_UNIT : base;
    }
    return '';
  }

  const fallbackHtml = scanHtmlContext(beforeLineText);
  if (fallbackHtml.stack.length > 0) {
    return fallbackHtml.stack[fallbackHtml.stack.length - 1].indent + INDENT_UNIT;
  }

  const fallbackBrace = scanBraceContext(beforeLineText, '', getBraceScannerOptions(lang));
  if (fallbackBrace.stack.length > 0) {
    return fallbackBrace.stack[fallbackBrace.stack.length - 1].indent + INDENT_UNIT;
  }

  return '';
}

function countTagOccurrences(text, targetTag) {
  let opens = 0;
  let closes = 0;
  let i = 0;
  const len = text.length;
  let inRawTag = '';

  while (i < len) {
    if (text[i] !== '<') {
      i += 1;
      continue;
    }
    if (text.startsWith('<!--', i)) {
      const endCmt = text.indexOf('-->', i + 4);
      if (endCmt === -1) break;
      i = endCmt + 3;
      continue;
    }
    if (text[i + 1] === '!' || text[i + 1] === '?') {
      const endDecl = text.indexOf('>', i + 2);
      if (endDecl === -1) break;
      i = endDecl + 1;
      continue;
    }
    if (inRawTag) {
      const closeRaw = text.slice(i).match(new RegExp(`^<\\/${inRawTag}\\s*>`, 'i'));
      if (!closeRaw) {
        i += 1;
        continue;
      }
      inRawTag = '';
      i += closeRaw[0].length;
      continue;
    }
    const tagMatch = text.slice(i).match(/^<(\/?)([A-Za-z][A-Za-z0-9:-]*)(?=[\s/>]|$)/);
    if (!tagMatch) {
      i += 1;
      continue;
    }
    const isClosing = tagMatch[1] === '/';
    const name = tagMatch[2].toLowerCase();
    let j = i + tagMatch[0].length;
    let quote = '';
    let foundGt = false;
    while (j < len) {
      const c = text[j];
      if (quote) {
        if (c === '\\' && j + 1 < len) {
          j += 2;
          continue;
        }
        if (c === quote) quote = '';
      } else if (c === '"' || c === "'") {
        quote = c;
      } else if (c === '>') {
        foundGt = true;
        break;
      }
      j += 1;
    }
    if (!foundGt) break;
    const isSelfClosing = !isClosing && text[j - 1] === '/';
    if (!isClosing && !isSelfClosing && (name === 'script' || name === 'style')) {
      inRawTag = name;
    }
    if (name === targetTag) {
      if (isClosing) closes += 1;
      else if (!isSelfClosing && !HTML_VOID_TAGS.has(name)) opens += 1;
    }
    i = j + 1;
  }

  return { opens, closes };
}

function shouldAutoCloseHtmlTagOnEnter(beforeCursor, afterCursor, openTagRawName, stackTopIndent) {
  const tagName = openTagRawName.toLowerCase();
  if (HTML_VOID_TAGS.has(tagName) || tagName === 'script' || tagName === 'style') {
    return null;
  }

  // Only auto-insert </tag> when nothing non-closing follows and tagName has more opens than closes.
  let i = 0;
  const len = afterCursor.length;
  while (i < len) {
    const ch = afterCursor[i];
    if (/\s/.test(ch)) {
      i += 1;
      continue;
    }
    if (!afterCursor.startsWith('</', i)) {
      return null;
    }
    const closeMatch = afterCursor.slice(i).match(/^<\/([A-Za-z][A-Za-z0-9:-]*)\s*>/);
    if (!closeMatch) {
      return null;
    }
    i += closeMatch[0].length;
  }

  const counts = countTagOccurrences(beforeCursor + afterCursor, tagName);
  if (counts.opens <= counts.closes) {
    return null;
  }

  return {
    innerIndent: stackTopIndent + INDENT_UNIT,
    closingIndent: stackTopIndent,
    closeTagName: openTagRawName,
  };
}

function computeNextLineIndent(beforeCursor, afterCursor, lang) {
  const lastNewline = beforeCursor.lastIndexOf('\n');
  const currentLine = beforeCursor.slice(lastNewline + 1);
  const currentIndent = getLineLeadingIndent(currentLine);
  const isCurrentLineBlank = currentLine.trim() === '';

  const afterLineEnd = afterCursor.indexOf('\n');
  const afterOnSameLine = afterLineEnd === -1 ? afterCursor : afterCursor.slice(0, afterLineEnd);

  if (!isCurrentLineBlank) {
    const openMatch = currentLine.match(/<([A-Za-z][A-Za-z0-9:-]*)(?:\s+(?:"[^"]*"|'[^']*'|[^>"'/])*)?>\s*$/);
    const closeMatch = afterOnSameLine.match(/^\s*<\/([A-Za-z][A-Za-z0-9:-]*)\s*>/);
    if (openMatch && closeMatch && !openMatch[0].trimEnd().endsWith('/>')) {
      const openName = openMatch[1].toLowerCase();
      const closeName = closeMatch[1].toLowerCase();
      if (openName === closeName && !HTML_VOID_TAGS.has(openName)) {
        const htmlCtx = scanHtmlContext(beforeCursor);
        const topIndent = htmlCtx.stack.length > 0
          ? htmlCtx.stack[htmlCtx.stack.length - 1].indent
          : currentIndent;
        return {
          innerIndent: topIndent + INDENT_UNIT,
          closingIndent: topIndent,
          splitPair: true,
        };
      }
    }

    const openBraceTrimmed = currentLine.trimEnd();
    const lastChar = openBraceTrimmed.slice(-1);
    const nextTrimmed = afterOnSameLine.trimStart();
    const nextChar = nextTrimmed[0];
    if (
      (lastChar === '{' && nextChar === '}') ||
      (lastChar === '[' && nextChar === ']') ||
      (lastChar === '(' && nextChar === ')')
    ) {
      const braceCtx = scanBraceContext(beforeCursor, '', getBraceScannerOptions(lang));
      if (!braceCtx.inBlockComment && !braceCtx.inLineComment && !braceCtx.inString) {
        const topIndent = braceCtx.stack.length > 0
          ? braceCtx.stack[braceCtx.stack.length - 1].indent
          : currentIndent;
        return {
          innerIndent: topIndent + INDENT_UNIT,
          closingIndent: topIndent,
          splitPair: true,
        };
      }
    }
  }

  if (lang === 'html') {
    const htmlInfo = getCurrentHtmlBlockIndent(beforeCursor);
    if (!isCurrentLineBlank && !htmlInfo.inComment && !htmlInfo.inRawTag && afterOnSameLine.trim() === '') {
      const justOpenedMatch = currentLine.match(/<([A-Za-z][A-Za-z0-9:-]*)(?:\s+(?:"[^"]*"|'[^']*'|[^>"'/])*)?>\s*$/);
      if (justOpenedMatch && !justOpenedMatch[0].trimEnd().endsWith('/>')) {
        const top = htmlInfo.stack[htmlInfo.stack.length - 1];
        if (top && top.tag === justOpenedMatch[1].toLowerCase()) {
          const autoClosePlan = shouldAutoCloseHtmlTagOnEnter(
            beforeCursor,
            afterCursor,
            justOpenedMatch[1],
            top.indent
          );
          if (autoClosePlan) {
            return autoClosePlan;
          }
        }
      }
    }
    return {
      innerIndent: htmlInfo.indent || (isCurrentLineBlank ? '' : currentIndent),
      splitPair: false,
    };
  }

  if (COLON_LANGUAGES.has(lang)) {
    if (isCurrentLineBlank) {
      return {
        innerIndent: getStructuralIndentAtPosition(beforeCursor, lang),
        splitPair: false,
      };
    }
    const stripped = currentLine.replace(/\s+#.*$/, '').trimEnd();
    if (stripped.endsWith(':')) {
      return { innerIndent: currentIndent + INDENT_UNIT, splitPair: false };
    }
    return { innerIndent: currentIndent, splitPair: false };
  }

  if (BRACE_LANGUAGES.has(lang)) {
    const braceCtx = scanBraceContext(beforeCursor, '', getBraceScannerOptions(lang));
    if (braceCtx.stack.length > 0) {
      const top = braceCtx.stack[braceCtx.stack.length - 1];
      return { innerIndent: top.indent + INDENT_UNIT, splitPair: false };
    }

    const htmlCtx = scanHtmlContext(beforeCursor);
    if (htmlCtx.stack.length > 0) {
      const topHtml = htmlCtx.stack[htmlCtx.stack.length - 1];
      return { innerIndent: topHtml.indent + INDENT_UNIT, splitPair: false };
    }

    if (!isCurrentLineBlank && currentLine.trimEnd().endsWith('=>')) {
      return { innerIndent: currentIndent + INDENT_UNIT, splitPair: false };
    }

    return {
      innerIndent: isCurrentLineBlank ? '' : currentIndent,
      splitPair: false,
    };
  }

  const fallbackIndent = getStructuralIndentAtPosition(beforeCursor, lang);
  if (fallbackIndent) {
    return { innerIndent: fallbackIndent, splitPair: false };
  }

  return {
    innerIndent: isCurrentLineBlank ? getNearestNonEmptyLineIndent(beforeCursor) : currentIndent,
    splitPair: false,
  };
}

function getAlignedHtmlCloseIndent(beforeLineText, closingTagName) {
  const { stack } = scanHtmlContext(beforeLineText);
  if (stack.length === 0) return null;

  if (closingTagName) {
    const lower = closingTagName.toLowerCase();
    for (let k = stack.length - 1; k >= 0; k -= 1) {
      if (stack[k].tag === lower) {
        return stack[k].indent;
      }
    }
    return null;
  }

  return stack[stack.length - 1].indent;
}

function getAlignedBraceCloseIndent(beforeLineText, closeChar, lang) {
  const targetOpen = closeChar === '}' ? '{' : closeChar === ']' ? '[' : '(';

  if (lang === 'html') {
    const htmlCtx = scanHtmlContext(beforeLineText);
    const { stack } = htmlCtx;
    if (stack.length > 0) {
      const top = stack[stack.length - 1];
      if (top.tag === 'script' || top.tag === 'style') {
        const innerText = beforeLineText.slice(top.contentStart);
        const rawLang = top.tag === 'style' ? 'css' : 'javascript';
        const braceCtx = scanBraceContext(
          innerText,
          top.indent + INDENT_UNIT,
          getBraceScannerOptions(rawLang)
        );
        for (let k = braceCtx.stack.length - 1; k >= 0; k -= 1) {
          if (braceCtx.stack[k].ch === targetOpen) {
            return braceCtx.stack[k].indent;
          }
        }
      }
    }
    return null;
  }

  const braceCtx = scanBraceContext(beforeLineText, '', getBraceScannerOptions(lang));
  for (let k = braceCtx.stack.length - 1; k >= 0; k -= 1) {
    if (braceCtx.stack[k].ch === targetOpen) {
      return braceCtx.stack[k].indent;
    }
  }
  return null;
}

function reindentHtmlLines(lines, baseIndent) {
  const stack = [];
  let inComment = false;
  let inRawTag = '';
  const result = [];

  function popMatching(tagName) {
    for (let k = stack.length - 1; k >= 0; k -= 1) {
      if (stack[k].tag === tagName) {
        const matched = stack[k];
        stack.length = k;
        return matched;
      }
    }
    return null;
  }

  for (const rawLine of lines) {
    const trimmed = rawLine.trim();
    if (!trimmed) {
      result.push('');
      continue;
    }

    if (inComment) {
      const commentIndent = baseIndent + INDENT_UNIT.repeat(stack.length);
      result.push(`${commentIndent}${trimmed}`);
      if (trimmed.includes('-->')) {
        inComment = false;
      }
      continue;
    }

    if (inRawTag) {
      const closeRawRe = new RegExp(`^<\\/${inRawTag}\\s*>`, 'i');
      if (closeRawRe.test(trimmed)) {
        const matched = popMatching(inRawTag);
        inRawTag = '';
        const closeIndent = matched ? matched.indent : `${baseIndent}${INDENT_UNIT.repeat(stack.length)}`;
        result.push(`${closeIndent}${trimmed}`);
        continue;
      }
      result.push(`${baseIndent}${INDENT_UNIT.repeat(stack.length)}${trimmed}`);
      continue;
    }

    let leadingCloseConsumed = false;
    let matchedCloseEntry = null;
    const leadingCloseMatch = trimmed.match(/^<\/([A-Za-z][A-Za-z0-9:-]*)\s*>/);
    if (leadingCloseMatch) {
      matchedCloseEntry = popMatching(leadingCloseMatch[1].toLowerCase());
      leadingCloseConsumed = true;
    }

    const lineIndent = matchedCloseEntry
      ? matchedCloseEntry.indent
      : `${baseIndent}${INDENT_UNIT.repeat(stack.length)}`;
    result.push(`${lineIndent}${trimmed}`);

    let i = leadingCloseConsumed ? leadingCloseMatch[0].length : 0;
    const len = trimmed.length;
    let lineHasOpening = false;
    while (i < len) {
      if (trimmed[i] !== '<') {
        i += 1;
        continue;
      }
      if (trimmed.startsWith('<!--', i)) {
        const endCmt = trimmed.indexOf('-->', i + 4);
        if (endCmt === -1) {
          inComment = true;
          break;
        }
        i = endCmt + 3;
        continue;
      }
      if (trimmed[i + 1] === '!' || trimmed[i + 1] === '?') {
        const endDecl = trimmed.indexOf('>', i + 2);
        if (endDecl === -1) break;
        i = endDecl + 1;
        continue;
      }
      const tagMatch = trimmed.slice(i).match(/^<(\/?)([A-Za-z][A-Za-z0-9:-]*)(?=[\s/>]|$)/);
      if (!tagMatch) {
        i += 1;
        continue;
      }
      const isClosing = tagMatch[1] === '/';
      const tagName = tagMatch[2].toLowerCase();
      let j = i + tagMatch[0].length;
      let quote = '';
      let foundGt = false;
      while (j < len) {
        const c = trimmed[j];
        if (quote) {
          if (c === '\\' && j + 1 < len) {
            j += 2;
            continue;
          }
          if (c === quote) quote = '';
        } else if (c === '"' || c === "'") {
          quote = c;
        } else if (c === '>') {
          foundGt = true;
          break;
        }
        j += 1;
      }
      if (!foundGt) break;
      const isSelfClosing = !isClosing && trimmed[j - 1] === '/';
      if (isClosing) {
        popMatching(tagName);
        if (inRawTag === tagName) inRawTag = '';
      } else if (!isSelfClosing && !HTML_VOID_TAGS.has(tagName)) {
        const openIndent = !lineHasOpening
          ? lineIndent
          : (stack.length > 0 ? stack[stack.length - 1].indent + INDENT_UNIT : lineIndent);
        stack.push({
          tag: tagName,
          level: stack.length,
          indent: openIndent,
          isSelfClosing: false,
        });
        lineHasOpening = true;
        if (tagName === 'script' || tagName === 'style') {
          inRawTag = tagName;
        }
      }
      i = j + 1;
    }
  }

  return result;
}

function reindentBraceLines(lines, baseIndent, lang) {
  const options = getBraceScannerOptions(lang);
  let depth = 0;
  let inBlockComment = false;
  const result = [];

  for (const rawLine of lines) {
    const trimmed = rawLine.trim();
    if (!trimmed) {
      result.push('');
      continue;
    }

    let leadingClosers = 0;
    if (!inBlockComment) {
      while (leadingClosers < trimmed.length && /[}\])]/.test(trimmed[leadingClosers])) {
        leadingClosers += 1;
      }
    }

    const effectiveDepth = Math.max(0, depth - leadingClosers);
    const lineIndent = `${baseIndent}${INDENT_UNIT.repeat(effectiveDepth)}`;
    result.push(`${lineIndent}${trimmed}`);

    const lineCtx = scanBraceContext(
      `${inBlockComment ? '/* ' : ''}${trimmed}`,
      '',
      options
    );
    inBlockComment = lineCtx.inBlockComment;

    let openCount = 0;
    let closeCount = 0;
    let i = 0;
    let quote = '';
    let blockCmt = false;
    while (i < trimmed.length) {
      const ch = trimmed[i];
      if (blockCmt) {
        if (ch === '*' && trimmed[i + 1] === '/') {
          blockCmt = false;
          i += 2;
          continue;
        }
        i += 1;
        continue;
      }
      if (quote) {
        if (ch === '\\' && i + 1 < trimmed.length) {
          i += 2;
          continue;
        }
        if (ch === quote) quote = '';
        i += 1;
        continue;
      }
      if (options.allowLineComments && ch === '/' && trimmed[i + 1] === '/') break;
      if (ch === '/' && trimmed[i + 1] === '*') {
        blockCmt = true;
        i += 2;
        continue;
      }
      if (ch === '"' || ch === "'" || (options.allowBackticks && ch === '`')) {
        quote = ch;
        i += 1;
        continue;
      }
      if (ch === '{' || ch === '[' || ch === '(') openCount += 1;
      else if (ch === '}' || ch === ']' || ch === ')') closeCount += 1;
      i += 1;
    }
    depth = Math.max(0, depth + openCount - closeCount);
  }

  return result;
}

function formatPastedCode(rawPaste, value, start, end, lang) {
  const normalized = rawPaste.replace(/\r\n?/g, '\n');
  const lines = normalized.split('\n').map((line) => {
    if (line.trim() === '') return '';
    return line.replace(/^[ \t]+/, (ws) => ws.replace(/\t/g, INDENT_UNIT));
  });

  const { lineStart } = getCurrentLineBounds(value, start);
  const lineBeforeCursor = value.slice(lineStart, start);
  const isLineBeforeBlank = /^[ \t]*$/.test(lineBeforeCursor);
  const beforeLineText = lineStart > 0 ? value.slice(0, lineStart - 1) : '';

  let baseIndent;
  let replaceStart;
  if (isLineBeforeBlank) {
    baseIndent = lineBeforeCursor.length > 0
      ? lineBeforeCursor
      : getStructuralIndentAtPosition(beforeLineText, lang);
    replaceStart = lineStart;
  } else {
    baseIndent = getLineLeadingIndent(lineBeforeCursor);
    replaceStart = start;
  }

  const startCheckIdx = isLineBeforeBlank ? 0 : 1;
  let minIndentLen = Infinity;
  for (let i = startCheckIdx; i < lines.length; i += 1) {
    if (lines[i] === '') continue;
    const indentLen = getLineLeadingIndent(lines[i]).length;
    if (indentLen < minIndentLen) minIndentLen = indentLen;
  }
  if (!Number.isFinite(minIndentLen)) minIndentLen = 0;

  const strippedLines = lines.map((line, idx) => {
    if (line === '') return '';
    if (idx < startCheckIdx) return line;
    return line.slice(minIndentLen);
  });

  const nonEmptyCheckLines = strippedLines.slice(startCheckIdx).filter((l) => l !== '');
  const allFlatAtColZero = nonEmptyCheckLines.length >= 2
    && nonEmptyCheckLines.every((l) => getLineLeadingIndent(l).length === 0);

  let formattedLines;
  if (allFlatAtColZero && lang === 'html' && /<[A-Za-z][A-Za-z0-9:-]*[\s/>]/.test(normalized)) {
    formattedLines = reindentHtmlLines(strippedLines, baseIndent);
  } else if (allFlatAtColZero && BRACE_LANGUAGES.has(lang) && /\{[\s\S]*\}/.test(normalized)) {
    formattedLines = reindentBraceLines(strippedLines, baseIndent, lang);
  } else {
    formattedLines = strippedLines.map((line, idx) => {
      if (line === '') return '';
      if (idx < startCheckIdx) return line;
      return `${baseIndent}${line}`;
    });
  }

  return {
    text: formattedLines.join('\n'),
    replaceStart,
    replaceEnd: end,
  };
}

function setupSmartEditor(textarea) {
  if (!textarea) return;

  let prevValue = textarea.value;
  let handledByKeydown = false;

  function syncSnapshotState() {
    prevValue = textarea.value;
  }

  function insertSmartEnter(start, end) {
    const value = textarea.value;
    const { lineStart, lineEnd } = getCurrentLineBounds(value, start);
    const currentLineText = value.slice(lineStart, lineEnd);

    // Blank-line discipline: strip any whitespace on an abandoned blank line
    // and compute the next line's indentation purely from surrounding syntax structure.
    if (start === end && /^[ \t]*$/.test(currentLineText)) {
      const beforeBlankLine = lineStart > 0 ? value.slice(0, lineStart - 1) : '';
      const afterBlankLine = value.slice(lineEnd);
      const lang = getResolvedLanguage().lang;
      const structuralIndent = getStructuralIndentAtPosition(beforeBlankLine, lang);
      const prevLineBefore = lineStart > 0 ? `${beforeBlankLine}\n` : '';
      const plan = beforeBlankLine
        ? computeNextLineIndent(prevLineBefore, afterBlankLine, lang)
        : { innerIndent: '', splitPair: false };
      const nextIndent = plan.innerIndent || structuralIndent;
      textarea.setRangeText(`\n${nextIndent}`, lineStart, lineEnd, 'end');
      syncSnapshotState();
      updateSnapshotContent();
      return;
    }

    const before = value.slice(0, start);
    const after = value.slice(end);
    const lang = getResolvedLanguage().lang;
    const plan = computeNextLineIndent(before, after, lang);

    if (plan.splitPair) {
      const insertText = `\n${plan.innerIndent}\n${plan.closingIndent}`;
      textarea.setRangeText(insertText, start, end, 'end');
      const caretPos = start + 1 + plan.innerIndent.length;
      textarea.setSelectionRange(caretPos, caretPos);
    } else if (plan.closeTagName) {
      const insertText = `\n${plan.innerIndent}\n${plan.closingIndent}</${plan.closeTagName}>`;
      textarea.setRangeText(insertText, start, end, 'end');
      const caretPos = start + 1 + plan.innerIndent.length;
      textarea.setSelectionRange(caretPos, caretPos);
    } else {
      const insertText = `\n${plan.innerIndent}`;
      textarea.setRangeText(insertText, start, end, 'end');
    }

    syncSnapshotState();
    updateSnapshotContent();
  }

  function handleSmartBackspace() {
    const value = textarea.value;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    if (start !== end || start === 0) return false;

    const { lineStart, lineEnd } = getCurrentLineBounds(value, start);
    const lineBeforeCursor = value.slice(lineStart, start);
    const lineAfterCursor = value.slice(start, lineEnd);

    if (/^[ \t]+$/.test(lineBeforeCursor) && lineAfterCursor === '') {
      let removeCount;
      if (lineBeforeCursor.endsWith('\t')) {
        removeCount = 1;
      } else {
        const trailingSpaces = lineBeforeCursor.match(/ +$/)[0].length;
        removeCount = trailingSpaces % INDENT_UNIT.length || INDENT_UNIT.length;
        removeCount = Math.min(removeCount, lineBeforeCursor.length);
      }
      textarea.setRangeText('', start - removeCount, start, 'end');
      syncSnapshotState();
      updateSnapshotContent();
      return true;
    }

    return false;
  }

  function handleIndentLines(isOutdent) {
    const value = textarea.value;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (!isOutdent && start === end) {
      textarea.setRangeText(INDENT_UNIT, start, end, 'end');
      syncSnapshotState();
      updateSnapshotContent();
      return;
    }

    const blockStart = start <= 0 ? 0 : value.lastIndexOf('\n', start - 1) + 1;
    const endNewlineSearchPos = end > start && value[end - 1] === '\n' ? end - 1 : end;
    const nextNewline = value.indexOf('\n', endNewlineSearchPos);
    const blockEnd = nextNewline === -1 ? value.length : nextNewline;

    const block = value.slice(blockStart, blockEnd);
    const lines = block.split('\n');
    let firstDelta = 0;
    let totalDelta = 0;

    const nextLines = lines.map((line, idx) => {
      if (!isOutdent) {
        if (idx === 0) firstDelta = INDENT_UNIT.length;
        totalDelta += INDENT_UNIT.length;
        return `${INDENT_UNIT}${line}`;
      }

      let removeCount = 0;
      if (line.startsWith('\t')) {
        removeCount = 1;
      } else {
        while (removeCount < INDENT_UNIT.length && line[removeCount] === ' ') {
          removeCount += 1;
        }
      }
      if (idx === 0) firstDelta = -removeCount;
      totalDelta -= removeCount;
      return line.slice(removeCount);
    });

    textarea.setRangeText(nextLines.join('\n'), blockStart, blockEnd, 'preserve');
    const newStart = Math.max(blockStart, start + firstDelta);
    const newEnd = Math.max(newStart, end + totalDelta);
    textarea.setSelectionRange(newStart, newEnd);
    syncSnapshotState();
    updateSnapshotContent();
  }

  function alignCurrentLineIndent(targetIndent) {
    if (targetIndent === null || targetIndent === undefined) return false;
    const value = textarea.value;
    const cursor = textarea.selectionStart;
    const { lineStart } = getCurrentLineBounds(value, cursor);
    const lineBeforeCursor = value.slice(lineStart, cursor);
    const currentIndent = getLineLeadingIndent(lineBeforeCursor);

    if (currentIndent === targetIndent) return false;

    const delta = targetIndent.length - currentIndent.length;
    textarea.setRangeText(targetIndent, lineStart, lineStart + currentIndent.length, 'preserve');
    const nextCursor = Math.max(lineStart, cursor + delta);
    textarea.setSelectionRange(nextCursor, nextCursor);
    syncSnapshotState();
    return true;
  }

  function alignClosingOrBlankLineAfterInput(allowBlankLineIndent = true) {
    const value = textarea.value;
    const cursor = textarea.selectionStart;
    if (cursor !== textarea.selectionEnd || cursor === 0) return;

    const typedChar = value[cursor - 1];
    const { lineStart, lineEnd } = getCurrentLineBounds(value, cursor);
    const lineBeforeCursor = value.slice(lineStart, cursor);
    const lineAfterCursor = value.slice(cursor, lineEnd);

    if (lineAfterCursor.trim() !== '') return;

    const beforeLineText = lineStart > 0 ? value.slice(0, lineStart - 1) : '';
    const lang = getResolvedLanguage().lang;

    if (/^[ \t]*<\/$/.test(lineBeforeCursor)) {
      const targetIndent = getAlignedHtmlCloseIndent(beforeLineText, '');
      alignCurrentLineIndent(targetIndent);
      return;
    }

    const partialOrFullCloseMatch = lineBeforeCursor.match(/^[ \t]*<\/([A-Za-z][A-Za-z0-9:-]*)\s*>?$/);
    if (partialOrFullCloseMatch) {
      const targetIndent = getAlignedHtmlCloseIndent(beforeLineText, partialOrFullCloseMatch[1]);
      alignCurrentLineIndent(targetIndent);
      return;
    }

    if (typedChar === '}' || typedChar === ']' || typedChar === ')') {
      const closeBracePattern = new RegExp(`^[ \\t]*\\${typedChar}$`);
      if (closeBracePattern.test(lineBeforeCursor)) {
        const targetIndent = getAlignedBraceCloseIndent(beforeLineText, typedChar, lang);
        alignCurrentLineIndent(targetIndent);
        return;
      }
    }

    // When a genuinely empty line is converted into a code line by typing the first non-whitespace character,
    // apply the structural indentation for its nesting level.
    if (
      allowBlankLineIndent &&
      lineBeforeCursor.length === 1 &&
      !/[ \t\n]/.test(typedChar) &&
      lineStart > 0 &&
      prevValue.length + 1 === value.length
    ) {
      const structuralIndent = getStructuralIndentAtPosition(beforeLineText, lang);
      if (structuralIndent) {
        alignCurrentLineIndent(structuralIndent);
      }
    }
  }

  function clearKeydownGuardSoon() {
    Promise.resolve().then(() => {
      handledByKeydown = false;
    });
    setTimeout(() => {
      handledByKeydown = false;
    }, 0);
  }

  textarea.addEventListener('focus', syncSnapshotState);
  textarea.addEventListener('beforeinput', () => {
    prevValue = textarea.value;
  });

  textarea.addEventListener('paste', (event) => {
    const pastedText = event.clipboardData ? event.clipboardData.getData('text/plain') : '';
    if (!pastedText || !/\r|\n/.test(pastedText)) return;

    event.preventDefault();
    const lang = getResolvedLanguage().lang;
    const plan = formatPastedCode(
      pastedText,
      textarea.value,
      textarea.selectionStart,
      textarea.selectionEnd,
      lang
    );
    textarea.setRangeText(plan.text, plan.replaceStart, plan.replaceEnd, 'end');
    syncSnapshotState();
    updateSnapshotContent();
  });

  textarea.addEventListener('keydown', (event) => {
    handledByKeydown = false;
    if (event.isComposing || event.keyCode === 229) return;

    if (event.key === 'Tab') {
      event.preventDefault();
      handledByKeydown = true;
      clearKeydownGuardSoon();
      handleIndentLines(event.shiftKey);
      return;
    }

    if (event.key === 'Backspace' && !event.ctrlKey && !event.metaKey && !event.altKey) {
      if (handleSmartBackspace()) {
        event.preventDefault();
        handledByKeydown = true;
        clearKeydownGuardSoon();
      }
      return;
    }

    if (event.key === 'Enter' && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      handledByKeydown = true;
      clearKeydownGuardSoon();
      insertSmartEnter(textarea.selectionStart, textarea.selectionEnd);
    }
  });

  textarea.addEventListener('compositionend', () => {
    alignClosingOrBlankLineAfterInput(false);
    syncSnapshotState();
    updateSnapshotContent();
  });

  textarea.addEventListener('input', (event) => {
    if (handledByKeydown) {
      handledByKeydown = false;
      syncSnapshotState();
      return;
    }

    if (event.isComposing) {
      updateSnapshotContent();
      return;
    }

    const value = textarea.value;
    const cursor = textarea.selectionStart;
    const inputType = event.inputType || '';

    const isHistory = inputType === 'historyUndo' || inputType === 'historyRedo';
    if (!isHistory && cursor === textarea.selectionEnd && cursor > 0) {
      const addedOneChar = value.length === prevValue.length + 1;
      if ((inputType === 'insertLineBreak' || addedOneChar) && value[cursor - 1] === '\n') {
        const rawNewlineStart = cursor - 1;
        textarea.setRangeText('', rawNewlineStart, cursor, 'end');
        insertSmartEnter(rawNewlineStart, rawNewlineStart);
        return;
      }

      if (
        addedOneChar ||
        inputType === 'insertText' ||
        inputType === 'insertCompositionText' ||
        inputType === 'insertFromPaste' ||
        inputType === 'deleteContentBackward'
      ) {
        alignClosingOrBlankLineAfterInput(inputType !== 'insertFromPaste' && inputType !== 'deleteContentBackward');
      }
    }

    syncSnapshotState();
    updateSnapshotContent();
  });
}

function init() {
  applySiteTheme(getSavedSiteTheme());
  els.codeInput.value = DEFAULT_CODE;

  enhanceCustomSelect(els.languageSelect, true);
  enhanceCustomSelect(els.fontSizeSelect, true);
  enhanceCustomSelect(els.exportFormatSelect, false);

  enhanceColorPicker({
    controlEl: els.windowBgPicker,
    triggerEl: els.windowBgTrigger,
    inputEl: els.windowBgInput,
    hexLabelEl: els.windowBgHex,
    swatchEl: els.windowBgSwatch,
    defaultHex: '#0D1117',
    onChange: applyAppearance,
  });

  enhanceColorPicker({
    controlEl: els.titleBarBgPicker,
    triggerEl: els.titleBarBgTrigger,
    inputEl: els.titleBarBgInput,
    hexLabelEl: els.titleBarBgHex,
    swatchEl: els.titleBarBgSwatch,
    defaultHex: '#1B1F25',
    onChange: applyAppearance,
  });

  document.addEventListener('pointerdown', (event) => {
    const target = event.target;
    if (target instanceof Node) {
      if (!target.closest('.custom-select') && !target.closest('.color-control')) {
        closeAllMenus();
      }
    }
  });

  applyAppearance();
  updateSnapshotContent();
  updateExportControls();

  if (els.themeToggleBtn) {
    els.themeToggleBtn.addEventListener('click', toggleSiteTheme);
  }

  for (const btn of els.presetKeys) {
    btn.addEventListener('click', () => {
      applyPreset(btn.dataset.preset);
    });
  }

  els.filenameInput.addEventListener('input', updateSnapshotContent);
  els.filenameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      els.filenameInput.blur();
    }
  });

  if (els.filenameTab) {
    els.filenameTab.addEventListener('click', (event) => {
      if (event.target !== els.filenameInput) {
        els.filenameInput.focus();
      }
    });
  }

  els.languageSelect.addEventListener('change', updateSnapshotContent);
  setupSmartEditor(els.codeInput);

  if (els.snapshotCodeWrap) {
    els.snapshotCodeWrap.addEventListener('click', (event) => {
      if (event.target !== els.codeInput) {
        els.codeInput.focus();
      }
    });
  }

  els.fontSizeSelect.addEventListener('change', applyAppearance);
  els.showControlsInput.addEventListener('change', applyAppearance);
  els.showFilenameInput.addEventListener('change', applyAppearance);
  els.wrapLinesInput.addEventListener('change', applyAppearance);

  els.exportFormatSelect.addEventListener('change', updateExportControls);
  els.downloadBtn.addEventListener('click', handleDownload);

  window.addEventListener('load', () => {
    checkExternalLibraries();
    const resolved = getResolvedLanguage();
    renderLanguageIcon(resolved.lang);
  });

  checkExternalLibraries();
}

init();
