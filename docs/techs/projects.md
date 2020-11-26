---
title: "前端工程化"
sidebarDepth: 2
---

## Webpack

### webpack 基础

**知识点**

1. webpack 的安装
2. webpack 基本配置
3. 开发时自动编译工具
4. 处理 css 打包
5. 处理 less/sass 打包
6. 处理图片和字体打包
7. 处理 ES6/ES7+转译
8. source map 的使用
9. 插件的基本使用

**知识目标**

1. 掌握 webpack 安装
2. 熟悉 webpack 基本配置
3. 掌握 webpack 的 loader 基本使用
4. 掌握 webpack 的 plugin 基本使用
5. 了解 source map 的基本使用

### webpack 高级配置

**知识点**

1. HMR 的高级用法
2. HTML 中的 img 标签资源的处理
3. 多页应用打包
4. 第三方库的多种引用方式
5. 不同配置文件打包
6. 定义环境变量
7. devServer 解决跨域问题

**知识目标**

1. 掌握 HMR 的应用
2. 掌握多页打包场景
3. 掌握不同配置文件打包
4. 了解第三方库的多种引入方式
5. 了解使用 proxy 解决跨域问题

### webpack 优化配置

**知识点**

1. tree shaking/scope hoisting/code compress
2. css 单独提取
3. css 前缀添加
4. css 压缩
5. js 代码分离
6. 抽取公共代码
7. 动态导入(懒加载)
8. SplitChunksPlugin
9. noParse
10. IgnorePlugin
11. DllPlugin
12. Happypack
13. 浏览器缓存优化
14. 打包分析
15. Prefetching 和 Preloading

**知识目标**

1. 了解 webpack 自带的打包优化
2. 掌握对 css 打包的优化
3. 掌握 CodeSpliting 的优化
4. 掌握打包分析工具的使用
5. 熟悉浏览器缓存机制
6. 能根据实际业务需求对项目进行优化

### webpack 原理

**知识点**

1. 分析 webpack 打包好的 bundle 文件
2. 自定义 loader
3. 自定义 plugin
4. 手写一个简单的 webpack

**知识目标**

1. 了解 webpack 打包原理
2. 了解 webpack 的 loader 原理
3. 了解 webpack 的 plugin 原理
4. 了解 ast 抽象语法树的应用
5. 了解 tapable 的原理
6. 能够完成手写一个简单的 webpack

## CLI 及脚手架工具

### Vue cli

**知识点**

1. vue-cli 功能、使用方式、原理

**知识目标**

1. 会使用 Vue cli 及相关配置
2. 会使用 Vue cli 初始化单页及多页项目.

### create react app

**知识点**

1. create-react-app 功能、使用方式、原理

**知识目标**

1. 能够使用 create react app 搭建项目
2. 了解 create react app 的原理.

### angular cli

**知识点**

1. angular-cli 功能、使用方式、原理

**知识目标**

1. 能够使用 angular cli 搭建项目
2. 了解 angular cli 的原理.

### Cli 原理

**知识点**

1. cli 的基本组成
2. 实现一个简单的 cli
3. 实现 cli 常用的工具/库

**知识目标**

1. 能够实现一个简单的 cli.

## 持续集成

### 自动化测试

**知识点**

1. 单元测试
2. e2e 测试
3. 项目质量监测

**知识目标**

1. 学习常见的单元测试库的使用：Mocha+chai/Jest/Ava/Codecov
2. 掌握 headless chrome/Nightmare/Nightwatch/Cypress/Testcafe
3. 掌握 ESLint/JSLint 常见配置

### 容器化

**知识点**

1. Docker
2. Dockerfile
3. 核心概念
4. 运维与测试环境搭建

**知识目标**

1. 学习 Docker 环境的搭建
2. 理解 Docker 的基本概念、常见命令的使用方法
3. 掌握 Dockerfile 语法，并且会阅读官方文档，解决 Docker 常见的问题
4. 掌握 Docker 集成化的管理命令 Docker-compose
5. 熟练使用 Docker 命令快速创建测试环境，查看 Docker 的日志，了解服务的运维状态
6. 了解 Docker 私有仓库 Harbor 的搭建与使用简介
7. 了解容器化管理平台 Rancher 及 Kubernets 技术介绍，了解服务高可用及配置方法

### CI/CD 持续集成

**知识点**

1. Jenkins
2. Circle CI
3. Travis CI

**知识目标**

1. 理解自动化流程，学习常见的自动化流程工具
2. 学会使用 Docker 快速搭建 Jenkins 平台
3. 掌握 Jenkins 的任务配置方法、熟悉权限控制、并且了解如何与其他平台如 Gitlab 进行集成
4. 熟悉几种 CI/CD 工具的使用场景，与优缺点

## 项目管理

### 文档管理

**知识点**

1. 需求文档
2. 项目文档
3. Markdown 进阶

**知识目标**

1. 原型图,流程图介绍
2. 需求文档格式
3. 需求文档工具及使用
4. 学习描述文档的格式
5. 了解描述文档书写注意事项
6. 掌握功能说明、开发文档的书写方法
7. 流程图，甘特图，时序图
8. Markdown 语法
9. Markdown 常见工具 Typora 使用及常见配置（主题）

### 接口测试

**知识点**

1. 接口测试类工具
2. mock 数据
3. 接口代理及调试

**知识目标**

1. 学习常见的接口测试工具使用方法 Easymock/Yapi/APIDoc/Swagger-UI/Postman
2. 掌握常见的 Mock 工具 Mockjs/json-server/Faker.js 使用方法
3. Mock 数据的场景及优缺点
4. 学习 fiddler/charles 代理工具的使用

### 版本控制

**知识点**

1. 进阶 git 命令
2. git flow 及团队协作

**知识目标**

1. 提交相关：git rebase/git commit/git reflog/git log
2. 子模块: submodule/subtree
3. 分支管理：git fetch/git checkout/git merge
4. 重置及回退：git reset/git checkout/git rm
5. 多人协同 git 工作流
6. git 常见的分支管理命令
