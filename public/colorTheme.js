// Insert this script in your index.html right after the <body> tag.
// This will help to prevent a flash if dark mode is the default.

(function() {
  // Change these if you use something different in your hook.
  const storageKey = 'colorTheme';
  const classNames = ['light-theme', 'dark-theme'];

  function setClassOnDocumentBody(colorTheme) {
    let theme = 'light-theme';
    if (typeof colorTheme === 'string') {
      theme = colorTheme;
    }
    for (let i = 0; i < classNames.length; i++) {
      document.body.classList.remove(classNames[i]);
    }
    document.body.classList.add(theme);
  }

  const preferDarkQuery = '(prefers-color-scheme: dark)';
  const mql = window.matchMedia(preferDarkQuery);
  const supportsColorSchemeQuery = mql.media === preferDarkQuery;
  let localStorageTheme = null;
  try {
    localStorageTheme = localStorage.getItem(storageKey);
  } catch (err) {}
  const localStorageExists = localStorageTheme !== null;
  if (localStorageExists) {
    localStorageTheme = JSON.parse(localStorageTheme);
  }
  // Determine the source of truth
  if (localStorageExists) {
    // source of truth from localStorage
    setClassOnDocumentBody(localStorageTheme);
  } else if (supportsColorSchemeQuery) {
    // source of truth from system
    setClassOnDocumentBody(mql.matches ? classNames[1] : classNames[0]);
    localStorage.setItem(storageKey, JSON.stringify('dark-theme'));
  } else {
    // source of truth from document.body
    const iscolorTheme = document.body.classList.contains('dark-theme');
    localStorage.setItem(storageKey, iscolorTheme ? JSON.stringify('dark-theme') : JSON.stringify('light-theme'));
  }
}());
