import type { NextConfig } from "next";
import { withSentryConfig, type SentryBuildOptions } from "@sentry/nextjs";

const sentryBuildOptions: SentryBuildOptions = {
	widenClientFileUpload: true,
	tunnelRoute: "/monitoring",
	disableLogger: true,
	silent: true,
	sourcemaps: {
		disable: false,
		deleteSourcemapsAfterUpload: true
	},
	release: {
		name: process.env.NEXT_PUBLIC_CI_COMMIT_SHORT_SHA ?? "Dev"
	},
	authToken: process.env.SENTRY_TOKEN,
	org: "org",
	project: "project",
	autoInstrumentServerFunctions: process.env.NODE_ENV === "production",
	autoInstrumentMiddleware: process.env.NODE_ENV === "production",
	autoInstrumentAppDirectory: process.env.NODE_ENV === "production"
};

const nextConfig: NextConfig = {
	/* config options here */
};

export default withSentryConfig(nextConfig,sentryBuildOptions);
