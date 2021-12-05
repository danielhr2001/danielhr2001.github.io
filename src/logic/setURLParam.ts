/**
 * Sets url query parameters
 * @param pushState - whether to update the url history or not
 */
export function setURLParam(
  paramName: string,
  value: string,
  pushState = false
): void {
  const url = new URL(location.href)
  url.searchParams.set(paramName, value)

  pushState
    ? history.pushState(null, '', url)
    : history.replaceState(history.state, '', url)
}
