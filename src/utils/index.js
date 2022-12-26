/**
 * 获取url中参数
 * @param {string} url
 * @param {string} queryKey
 * @returns {string}
 */
export function getQueryString (url, queryKey) {
  const reg = new RegExp(`&{1}${queryKey}\\=[a-zA-Z0-9_-]+`, 'g')
  if (url.indexOf('?') !== -1) {
    const matchResult = url.replace(/\?/g, '&').match(reg)[0]
    return matchResult.substr(matchResult.indexOf('=') + 1)
  }
}
