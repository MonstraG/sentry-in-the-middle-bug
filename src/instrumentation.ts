import { init, captureRequestError, type EdgeOptions, type NodeOptions } from "@sentry/nextjs";

const options: EdgeOptions | NodeOptions = {
	dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
	tracesSampleRate: 0.1,
	debug: false,
	environment: process.env.NEXT_PUBLIC_CI_COMMIT_BRANCH,
	release: process.env.NEXT_PUBLIC_CI_COMMIT_SHORT_SHA,
	enabled: process.env.NODE_ENV === "production"
};

export async function register(): Promise<void> {
	if (process.env.NODE_ENV === "production") {
		if (process.env.NEXT_RUNTIME === "nodejs" || process.env.NEXT_RUNTIME === "edge") {
			init(options);
		}
	}
}

export const onRequestError = async (
	error: unknown, request: any, errorContext: any
): Promise<void> => {
	if (process.env.NODE_ENV === "production") {
		captureRequestError(error, request, errorContext);
	}
};
