# --------------- Web 部分 ---------------
# 使用 Node.js 作為基礎鏡像進行構建
FROM node:18-alpine AS web-build

# 定義一個可選的構建參數
ARG ENVIRONMENT=development

# 設定環境變數
ENV NODE_ENV=$ENVIRONMENT

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 yarn.lock 以安裝依賴
COPY package.json yarn.lock ./

# 安裝項目依賴
RUN yarn install

# 複製 Quasar 專案文件
COPY . .

# 根據環境執行不同的構建指令，生成 SPA 和 SSR 文件
RUN if [ "$NODE_ENV" = "dev" ]; then \
      echo "environment: $NODE_ENV"; \
      yarn build dev; \
    elif [ "$NODE_ENV" = "stg" ]; then \
      echo "environment: $NODE_ENV"; \
      yarn build stg; \
    elif [ "$NODE_ENV" = "prod" ]; then \
      echo "environment: $NODE_ENV"; \
      yarn build prod; \
    else \
      echo "Unknown environment: $NODE_ENV"; \
      exit 1; \
    fi

# 使用 nginx 作為 SPA 靜態資源伺服器
FROM nginx:alpine AS web
RUN rm /etc/nginx/conf.d/default.conf
# 複製構建好的 SPA 文件到 nginx 的默認靜態資源目錄
COPY --from=web-build /app/dist/spa /usr/share/nginx/html

# 複製自定義的 Nginx 配置文件
COPY nginx.conf /etc/nginx/nginx.conf

# 暴露 Nginx 默認端口
EXPOSE 3002

# 啟動 Nginx 服務
CMD ["nginx", "-g", "daemon off;"]
