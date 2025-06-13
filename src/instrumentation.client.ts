import { type BrowserOptions, init } from "@sentry/nextjs";

const options: BrowserOptions = {
	dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
	tracesSampleRate: 0.1,
	debug: false,
	environment: process.env.NEXT_PUBLIC_CI_COMMIT_BRANCH,
	release: process.env.NEXT_PUBLIC_CI_COMMIT_SHORT_SHA,
	replaysOnErrorSampleRate: 1.0,
	replaysSessionSampleRate: 0,
	enabled: process.env.NODE_ENV === "production"
};

export function initSentryClient() {
	if (process.env.NODE_ENV === "production") {
		init(options);
	}
}
