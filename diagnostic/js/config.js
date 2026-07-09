// Shared backend config — used by index.html (student exam) and dashboard.html (teacher view).
// Deploy google-apps-script/Code.gs as a Web App (see SETUP.md) and paste the /exec URL below.
// Both pages read from this single source, so you only ever update it in one place.
const APP_CONFIG = {
  SHEET_URL: "https://script.google.com/macros/s/AKfycbxZPwwCn6BMWfYOI8NPvMH1cf5hfIMnxpUSxX85st69uddNz_lrBEXfpNXpHCi7Bxk/exec"};
