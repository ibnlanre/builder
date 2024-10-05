import clsx from "clsx";

import { ComponentProps } from "react";
import { Warning, Information, Forbid, Lightbulb } from "@/icons";

type CalloutType = "default" | "info" | "warning" | "error";

interface CalloutProps extends ComponentProps<"div"> {
  type?: CalloutType;
}

export const Callout = ({ type = "default", children }: CalloutProps) => {
  const display = {
    default: {
      style: "nx-border-zinc-200 nx-bg-zinc-100 nx-text-zinc-900 dark:nx-border-zinc-200/30 dark:nx-bg-zinc-900/30 dark:nx-text-zinc-200",
      icon: Lightbulb,
    },
    info: {
      style:
        "nx-border-moss-200 nx-bg-moss-100 nx-text-moss-900 dark:nx-border-moss-200/30 dark:nx-bg-moss-900/30 dark:nx-text-moss-200",
      icon: Information,
    },
    warning: {
      style:
        "nx-border-pale-200 nx-bg-pale-100 nx-text-pale-900 dark:nx-border-pale-200/30 dark:nx-bg-pale-900/30 dark:nx-text-pale-200",
      icon: Warning,
    },
    error: {
      style:
        "nx-border-red-200 nx-bg-red-100 nx-text-red-900 dark:nx-border-red-200/30 dark:nx-bg-red-900/30 dark:nx-text-red-200",
      icon: Forbid,
    },
  };

  const validType = display[type];

  return (
    <div
      className={clsx(
        "nextra-callout nx-overflow-x-auto nx-mt-6 nx-flex nx-rounded-lg nx-border nx-py-2 ltr:nx-pr-4 rtl:nx-pl-4",
        "contrast-more:nx-border-current contrast-more:dark:nx-border-current",
        validType.style
      )}
    >
      <div
        className="nx-items-center nx-flex nx-select-none nx-text-xl ltr:nx-pl-3 ltr:nx-pr-2 rtl:nx-pr-3 rtl:nx-pl-2"
        style={{
          fontFamily:
            '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        }}
      >
        <validType.icon />
      </div>
      <div className="nx-w-full nx-min-w-0 nx-leading-7">{children}</div>
    </div>
  );
};
