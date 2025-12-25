// Optional: Add Google Analytics or other analytics
// This file can be used to add analytics tracking

export function initializeAnalytics() {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    // Google Analytics 4
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
  }
}

export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

// Type definitions
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

