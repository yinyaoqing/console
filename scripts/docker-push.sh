#!/bin/bash

CI_PIPELINE_ID=$1
IMAGE_NAME=$2
DOCKER_REGISTRY=$3

# 標記映像檔
docker tag ${IMAGE_NAME} ${DOCKER_REGISTRY}/${IMAGE_NAME}:${CI_PIPELINE_ID}
docker tag ${IMAGE_NAME} ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest

# 推送映像檔到 Docker 倉庫
docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:${CI_PIPELINE_ID}
docker push ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest

# 清理本地映像檔
docker rmi ${DOCKER_REGISTRY}/${IMAGE_NAME}:${CI_PIPELINE_ID}
docker rmi ${DOCKER_REGISTRY}/${IMAGE_NAME}:latest
