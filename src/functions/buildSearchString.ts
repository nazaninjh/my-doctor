/* eslint-disable @typescript-eslint/no-explicit-any */
export function buildSearchString(
  searchParams: Record<string, any>,
  name: string,
  param: string | number,
) {
  const stringParam = param.toString();
  const params = new URLSearchParams(searchParams as any);
  params.set(name, stringParam);
  return `?${params}`;
}
