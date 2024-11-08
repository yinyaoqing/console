/* eslint-disable */

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string
    ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined
    ROUTER_BASE: string | undefined
  }
}
