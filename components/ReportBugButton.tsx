"use client";
import * as Sentry from "@sentry/nextjs";

export default function ReportBugButton() {
  return (
    <button
      type="button"
      className="bg-red-500 text-white px-4 py-2 rounded mb-4"
      onClick={() => Sentry.showReportDialog()}
    >
      Report a bug
    </button>
  );
}
