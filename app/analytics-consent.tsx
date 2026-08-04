"use client";

import { useEffect, useState } from "react";

const MEASUREMENT_ID = "G-3QR14YJRHJ";
const CONSENT_KEY = "surfcraftstories-analytics-consent";
type Consent = "granted" | "denied" | null;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    surfcraftAnalyticsConfigured?: boolean;
  }
}

function setupAnalytics(consent: Exclude<Consent, null>) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) { window.dataLayer.push(args); };

  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  if (consent === "granted") {
    window.gtag("consent", "update", { analytics_storage: "granted" });
  }

  if (!document.querySelector(`script[data-ga4="${MEASUREMENT_ID}"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    script.dataset.ga4 = MEASUREMENT_ID;
    document.head.appendChild(script);
  }

  if (!window.surfcraftAnalyticsConfigured) {
    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID, { anonymize_ip: true });
    window.surfcraftAnalyticsConfigured = true;
  }
}

function enableAnalytics(sendPageView = false) {
  setupAnalytics("granted");
  window.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  if (sendPageView) {
    window.gtag("event", "page_view", {
      page_location: window.location.href,
      page_title: document.title,
    });
  }
}

function disableAnalytics() {
  window.gtag?.("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0]?.trim();
    if (name === "_ga" || name?.startsWith("_ga_")) {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.surfcraftstories.pl; SameSite=Lax`;
    }
  });
}

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(CONSENT_KEY) as Consent;
    const valid = saved === "granted" || saved === "denied" ? saved : null;
    setConsent(valid);
    setupAnalytics(valid === "granted" ? "granted" : "denied");
    setReady(true);
  }, []);

  function choose(next: Exclude<Consent, null>) {
    window.localStorage.setItem(CONSENT_KEY, next);
    setConsent(next);
    setSettingsOpen(false);
    if (next === "granted") enableAnalytics(true); else disableAnalytics();
  }

  if (!ready) return null;
  const showPanel = consent === null || settingsOpen;

  return <>
    {showPanel && <section className="cookie-panel" role="dialog" aria-label="Ustawienia analityki" aria-live="polite">
      <div><strong>Analityka strony</strong><p>Za Twoją zgodą używamy Google Analytics, aby sprawdzać, które treści są najbardziej pomocne. Nie używamy danych do reklam.</p></div>
      <div className="cookie-actions">
        <button type="button" className="cookie-reject" onClick={() => choose("denied")}>Tylko niezbędne</button>
        <button type="button" className="cookie-accept" onClick={() => choose("granted")}>Zgadzam się</button>
      </div>
    </section>}
    {!showPanel && <button type="button" className="cookie-settings" onClick={() => setSettingsOpen(true)} aria-label="Zmień ustawienia analityki">Ustawienia cookies</button>}
  </>;
}
