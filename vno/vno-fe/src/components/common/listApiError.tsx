import { AlertTriangle } from "lucide-react";

import { cn } from "@/src/lib/utils";
import { ApiError } from "@/src/common/types/api";

interface ErrorListProps {
  errors: ApiError[];
  errorCount: number;
}
export function ListApiError({ errors, errorCount }: ErrorListProps) {
  if (errorCount === 0) return null;

  return (
    <div
      className={cn(
        "rounded-md border border-red-500 bg-red-50 p-4 text-red-900",
        "space-y-2"
      )}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="flex items-center space-x-2">
        <AlertTriangle className="h-5 w-5 flex-shrink-0" />
        <h4 className="text-sm font-semibold">{errorCount} lỗi đã xảy ra:</h4>
      </div>
      <ul className="list-disc list-inside text-sm">
        {errors.map((error, idx) => (
          <li key={idx}>
            {error.propertyName && (
              <span className="font-semibold">{error.propertyName}: </span>
            )}
            {error.errorMessage}
            {error.errorCode && (
              <span className="ml-1 text-xs text-red-700">
                (Code: {error.errorCode})
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
