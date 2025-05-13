export interface ApiError {
  propertyName: string;
  errorMessage: string;
  errorCode?: string;
}

export interface BaseApiResponse {
  errors: ApiError[];
  errorCount: number;
  isSuccessful: boolean;
}

export interface ApiResponse<T> extends BaseApiResponse {
  result: T;
}
