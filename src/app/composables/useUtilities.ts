/**
 * @description Handle the query params to be sent to the API
 */
export const cleanRequestQueryParams = (queryParams: unknown): Record<string, unknown> => {
  return Object.keys(queryParams as {}).reduce(
    (accumulator: Record<string, unknown>, key: string) => {
      accumulator[key] = (queryParams as Record<string, unknown>)[key];

      return accumulator;
    },
    {} as Record<string, unknown>,
  );
};

/**
 * @description Handle default query params to be sent to the API
 */
export const defaultRequestQueryParams = (): Record<string, unknown> => ({
  limit: 4,
});
