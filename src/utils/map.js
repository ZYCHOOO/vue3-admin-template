import { BAIDU_MAP_KEY } from '@/constant/enums'

export function initBdMapScript () {
  const bdMapUrl = `https://api.map.baidu.com/api?v=2.0&ak=${BAIDU_MAP_KEY}&s=1&callback=onBMapCallback`
  return new Promise((resolve, reject) => {
    // 如果已加载直接返回
    if (typeof BMap !== 'undefined') {
      resolve(BMap)
      return true
    }
    // 百度地图异步加载回调处理
    window.onBMapCallback = function () {
      console.log('百度地图脚本初始化成功...')
      resolve(BMap)
    }

    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', bdMapUrl)
    document.body.appendChild(script)
  })
}
