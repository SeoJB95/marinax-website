// Add the GA4 web stream measurement ID here after creating the stream.
const GA4_MEASUREMENT_ID = "";

if (
  /^G-[A-Z0-9]+$/.test(GA4_MEASUREMENT_ID) &&
  ["marinax.co.kr", "www.marinax.co.kr"].includes(window.location.hostname)
) {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }

  gtag("js", new Date());
  gtag("config", GA4_MEASUREMENT_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}
