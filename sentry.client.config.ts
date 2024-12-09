import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://02a7e6cf417cb9943f10a60f47ba19a9@o4508437018443776.ingest.us.sentry.io/4508437024407552",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
      isNameRequired: true,
      isEmailRequired: true,
    }),
  ],
});