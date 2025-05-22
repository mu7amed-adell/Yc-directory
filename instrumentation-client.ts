// instrumentation-client.ts
// Initializes Sentry on the client with replay and feedback integrations.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://dd2ce6bb06fb2061d4e06977614e17ca@o4509363695124480.ingest.de.sentry.io/4509363697549392",

  // Integrations for replay and feedback pop-out widget
  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      // Customize feedback widget options here
      colorScheme: "system",
    }),
  ],

  // Trace sampling for performance monitoring (adjust for prod)
  tracesSampleRate: 1,

  // Replay session sampling rate
  replaysSessionSampleRate: 0.1,

  // Replay sampling on errors
  replaysOnErrorSampleRate: 1.0,

  // Debug mode prints helpful info to console
  debug: true,
});

// Optional: export helper functions if you use them elsewhere
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;

export default Sentry;
