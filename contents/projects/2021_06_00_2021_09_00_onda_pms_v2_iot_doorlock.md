---
createdAt: 2021-01-01
updatedAt: 2020-01-23
title: "PMS 2.0 IoT 도어락 서비스"
goal:
  summary: "PMS 2.0(숙박관리 솔루션)에 IoT 도어락 서비스 개발 및 연동"
  description: ""
period:
  startedAt: "2021-06"
  finishedAt: "2021-09"
techStack:
  services:
    - name: "PMS Connectivity API"
      libraries:
        - name: "GraphQL request"
          slug: "graphql-request"
        - name: "dayjs"
          slug: "dayjs"
      frameworks:
        - name: "NestJS Microservice Kafka"
          slug: "nejtjs_microservice_kafka"
      runtimes:
        - name: "NodeJS"
          slug: "nodejs"
      languages:
        - name: "TypeScript"
          slug: "typescript"
      others: ~
    - name: "PMS Core"
      libraries:
        - name: "KafkaJS"
          slug: "kafkajs"
        - name: "TypeORM"
          slug: "typeorm"
        - name: "dayjs"
          slug: "dayjs"
      sdks: ~
      frameworks:
        - name: "NestJS"
          slug: "nestjs"
        - name: "NestJS GraphQL (Apollo GraphQL Server)"
          slug: "nestjs_graphql"
      runtime:
        - name: "NodeJS"
          slug: "nodejs"
      languages:
        - name: "TypeScript"
          slug: "typescript"
      others: ~
    - name: "PMS Web"
      libraries:
        - name: "dayjs"
          slug: "dayjs"
        - name: "Apollo GraphQL Client"
          slug: "apollo_graphql_client"
      sdks: ~
      frameworks:
        - name: "VueJS"
          slug: "vuejs"
        - name: "Vuex"
          slug: "vuex"
        - name: "Vue Router"
          slug: "vue_router"
        - name: "Vuetify"
          slug: "vuetify"
      runtime:
        - name: "NodeJS"
          slug: "nodejs"
      languages:
        - name: "TypeScript"
          slug: "typescript"
      others: ""
  infrastructures:
    - name: "Kafka (AWS MSK)"
      slug: "aws_msk"
      role: "Topic based message event queue"
    - name: "AWS Elastic Beanstalk"
      slug: "aws_elastic_beanstalk"
      role: ""
    - name: "MySQL (AWS RDS)"
      slug: "aws_rds_mysql"
      role: ""
  tools:
    - name: "Visual Studio Code"
      slug: "visual_studio_code"
    - name: "Tableplus"
      slug: "tableplus"
    - name: "Git"
      slug: "git"
    - name: "Fork"
      slug: "fork"
    - name: "Chrome Dev Tool"
      slug: "chrome_dev_tool"
owner:
  name: "Onda"
  type: "company"
team:
  name: "PMS Platform Team"
  parts:
    - name: "Product & Design"
      role: "프로덕트 기획과 디자인"
      summary: ""
    - name: "Development"
      role: "프로덕트 기획에 따른 개발기획 및 개발"
      summary: ""
mine:
  summary: "팀 리딩, 개발기획(데이터 모델링, 아키텍쳐, 소프트웨어 디자인) 및 개발 리딩"
  part:
    - description: ""
      difficulties:
        - description: ""
references: ~
---
