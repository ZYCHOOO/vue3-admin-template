const ENV_CONFIGS = {
  // APP_ID is an example
  APP_ID: {
    development: { value: 'aaa', label: '示例-开发环境-appid' },
    test: { value: 'bbb', label: '示例-测试环境-appid' },
    stage: { value: 'ccc', label: '示例-预发布环境-appid' },
    production: { value: 'ddd', label: '示例-发布环境-appid' }
  }
}

export const getEnvVariables = (variableName) => {
  const env = process.env.NODE_ENV
  return ENV_CONFIGS[variableName][env].value
}

export const getEnvValue = (envKey) => {
  return process.env[envKey] || null
}
