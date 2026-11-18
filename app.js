const DEFAULT_CODE = '';

const COLOR_PRESETS = [
  { name: 'Dark Dimmed', hex: '#22272E' },
  { name: 'Title Slate', hex: '#2D333B' },
  { name: 'GitHub Dark', hex: '#0D1117' },
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

  const fallbackDefault = normalizeHex(defaultHex || inputEl.value) || '#22272E';
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
    setTimeout(() => URL.revokeObjectURL(href), 2000);
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

async function captureSnapshot(targetEl, methodName, options) {
  if (!window.htmlToImage || typeof window.htmlToImage[methodName] !== 'function') {
    throw new Error('The image export library (html-to-image) did not load. Please check your connection and reload.');
  }

  const resolved = getResolvedLanguage();
  els.snapshotNode.classList.add('is-exporting');
  const prevScrollLeft = els.snapshotCodeWrap.scrollLeft;
  els.snapshotCodeWrap.scrollLeft = 0;

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

async function exportPng() {
  const transparentBg = els.transparentBgInput.checked;
  const target = els.snapshotExportFrame || els.snapshotNode;
  const pixelRatio = getMaxPixelRatio(target);

  const dataUrl = await captureSnapshot(target, 'toPng', {
    pixelRatio,
    cacheBust: true,
    backgroundColor: transparentBg ? undefined : '#FFFFFF',
  });
  triggerDownload(dataUrl, getExportFilename('png'));
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
    defaultHex: '#22272E',
    onChange: applyAppearance,
  });

  enhanceColorPicker({
    controlEl: els.titleBarBgPicker,
    triggerEl: els.titleBarBgTrigger,
    inputEl: els.titleBarBgInput,
    hexLabelEl: els.titleBarBgHex,
    swatchEl: els.titleBarBgSwatch,
    defaultHex: '#2D333B',
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
  els.codeInput.addEventListener('input', updateSnapshotContent);

  els.codeInput.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      const start = els.codeInput.selectionStart;
      const end = els.codeInput.selectionEnd;
      els.codeInput.setRangeText('  ', start, end, 'end');
      updateSnapshotContent();
    }
  });

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
