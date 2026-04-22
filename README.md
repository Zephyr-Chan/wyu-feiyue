# 邑大飞跃手册

> 根植侨乡 · 飞跃世界

五邑大学升学留学经验分享平台，帮助邑大学子打破信息壁垒，实现升学梦想。

## 快速开始

### 环境要求

- Node.js >= 18
- npm >= 9

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 http://localhost:5173 查看网站。

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 项目结构

```
wyu-feiyue/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts              # 站点配置（导航、侧边栏、搜索等）
│   │   └── theme/
│   │       ├── index.ts           # 主题入口（组件注册、布局扩展）
│   │       ├── custom.css         # 自定义样式（品牌色系、深色模式）
│   │       └── components/        # 全局Vue组件
│   │           ├── StatCard.vue   # 统计数据卡片
│   │           ├── TagList.vue    # 标签列表
│   │           ├── AuthorCard.vue # 作者信息卡片
│   │           ├── Timeline.vue   # 时间线
│   │           ├── TimelineItem.vue # 时间线子项
│   │           ├── ResultTable.vue# 申请结果表格
│   │           ├── FAQ.vue        # 常见问题
│   │           ├── SchoolCard.vue # 院校卡片
│   │           ├── BackToTop.vue  # 回到顶部
│   │           └── ReadingProgress.vue # 阅读进度条
│   ├── public/                    # 静态资源
│   ├── index.md                   # 首页
│   ├── study-abroad/              # 留学深造板块
│   ├── domestic/                  # 国内升学板块
│   ├── career/                    # 就业指导板块
│   ├── civil-service/             # 考公考编板块
│   ├── life/                      # 生活指南板块
│   ├── tools/                     # 实用工具板块
│   ├── statistics/                # 数据统计板块
│   └── about/                     # 关于板块
├── .github/workflows/
│   └── deploy.yml                 # GitHub Actions 自动部署
├── package.json
└── README.md
```

## 自定义组件

在 Markdown 文件中可以直接使用以下全局组件：

### StatCard - 统计数据卡片

```vue
<StatCard icon="🌍" value="90+" label="合作院校" />
```

### TagList - 标签列表

```vue
<TagList :tags="['英国', '通信工程', 'UCL', '留学']" />
```

### AuthorCard - 作者信息卡片

```vue
<AuthorCard name="匿名校友A" year="2025" college="电子与信息工程学院" major="通信工程" destination="UCL MSc Communications" />
```

### Timeline - 时间线

```vue
<Timeline>
  <TimelineItem time="2024.03" title="开始准备TOEFL">开始背单词，每天坚持练习听力和阅读。</TimelineItem>
  <TimelineItem time="2024.09" title="联系推荐人">提前联系两位推荐人，沟通推荐信事宜。</TimelineItem>
  <TimelineItem time="2024.11" title="提交申请">完成所有学校的网申提交。</TimelineItem>
  <TimelineItem time="2025.02" title="收到Offer">收到UCL的录取通知。</TimelineItem>
</Timeline>
```

### ResultTable - 申请结果表格

```vue
<ResultTable>
  <table>
    <thead>
      <tr>
        <th>学校</th>
        <th>项目</th>
        <th>学位</th>
        <th>结果</th>
        <th>备注</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>UCL</td>
        <td>MSc Communications</td>
        <td>Master</td>
        <td>AD</td>
        <td>接受</td>
      </tr>
      <tr>
        <td>KCL</td>
        <td>MSc Electronic Engineering</td>
        <td>Master</td>
        <td>AD</td>
        <td></td>
      </tr>
      <tr>
        <td>Edinburgh</td>
        <td>MSc Signal Processing</td>
        <td>Master</td>
        <td>Rej</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</ResultTable>
```

### FAQ - 常见问题

```vue
<FAQ :items="[
  { question: '留学需要准备哪些材料？', answer: '一般需要成绩单、推荐信、个人陈述、语言成绩等。' },
  { question: '什么时候开始准备比较好？', answer: '建议提前一年到一年半开始准备。' }
]" />
```

### SchoolCard - 院校卡片

```vue
<SchoolCard name="UCL" country="英国" rank="QS 9" description="伦敦大学学院" link="https://www.ucl.ac.uk" />
```

## 投稿指南

我们欢迎所有邑大校友和在校生投稿！支持以下四种投稿方式：

1. **GitHub PR**（推荐）：Fork 仓库 → 修改/新增 Markdown 文件 → 提交 PR
2. **在线表单**：填写腾讯文档投稿表单（零技术门槛）
3. **邮件投稿**：下载模板 → 填写 → 发送至 wyu-feiyue@outlook.com
4. **微信/QQ**：添加管理员微信或加入 QQ 群提交

详见 [投稿指南](https://wyu-feiyue.com/about/contribute)

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 发起 Pull Request

## 许可证

- 内容：[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- 代码：[MIT](https://opensource.org/licenses/MIT)
