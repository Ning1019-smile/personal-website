/* =========================================================
 *  个人展示平台 · 内容数据
 *  你只需要修改这个文件就能更新整个网站的内容。
 *  - profile : 你的基本信息
 *  - skills  : 技能分类
 *  - projects: 你的项目（可随意增删）
 *  - contact : 联系方式
 * ========================================================= */
window.PORTFOLIO = {
  profile: {
    name: "宁子墨",              // 你的名字 / 昵称
    initials: "宁",             // 头像上显示的字母
    school: "上海杉达学院",
    major: "软件工程",
    grade: "大二在读",
    tagline: "乐于接触新技术，把想法变成能跑的东西。",
    bio: "我是上海杉达学院软件工程专业的一名大二学生，对新技术始终保持好奇心，喜欢在课业之外折腾各种框架、工具和有趣的小项目。除了写代码，我也喜欢唱歌和弹钢琴——它们让我在调试 bug 之余保持节奏感。",
    hobbies: ["🎤 唱歌", "🎹 钢琴", "💻 折腾新技术"],
    facts: [
      { k: "学校", v: "上海杉达学院" },
      { k: "专业", v: "软件工程" },
      { k: "年级", v: "大二" },
      { k: "状态", v: "求职 / 接项目ing" }
    ]
  },

  stats: [
    { num: "2", label: "完成项目" },
    { num: "4+", label: "掌握技术" },
    { num: "2", label: "兴趣爱好" }
  ],

  skills: [
    { title: "💡 编程语言", tags: ["C", "Python"] },
    { title: "📱 鸿蒙开发", tags: ["HarmonyOS", "ArkTS"] },
    { title: "🛠 工具 & 其他", tags: ["Git", "VS Code", "AI 工具"] }
  ],

  /* 把下面的示例替换成你真实做过的项目即可。
     字段说明：
       title    项目名称
       period   时间区间，如 "2024.09 - 2024.12"
       role     你在项目里的角色
       desc     一句话简介
       highlights 项目亮点（可选，数组）
       tags     技术标签（用于筛选，建议用单个词）
       links    链接：github / demo / doc / store（不需要的删掉整行）
  */
  projects: [
    {
      title: "宿舍白板（HarmonyOS App）",
      period: "2025 - 2026",
      role: "独立开发",
      desc: "一款面向宿舍场景的白板协作工具，已正式上架华为应用市场。",
      highlights: [
        "基于 HarmonyOS 原生开发",
        "已上架华为应用市场，可供真实用户下载使用",
        "支持宿舍内的轻量协作与随手记录"
      ],
      tags: ["HarmonyOS", "ArkTS", "鸿蒙"],
      links: { store: "https://appgallery.huawei.com/" }
    },
    {
      title: "个人展示平台（本网站）",
      period: "2026.10",
      role: "设计 + 前端",
      desc: "用纯静态页面搭的个人主页，结构清晰、方便随时更新项目和技能。",
      highlights: ["响应式布局，手机/电脑都好看", "支持深色模式", "项目数据抽成数组，改内容不用动结构"],
      tags: ["HTML", "CSS", "JavaScript"],
      links: { github: "https://github.com/Ning1019-smile/Personal-web" }
    },
    {
      title: "校园二手书交易平台",
      period: "2025.03 - 2025.06",
      role: "全栈",
      desc: "面向校内同学的二手教材交易小程序，支持发布、搜索、私聊。",
      highlights: ["微信小程序前端", "Spring Boot + MySQL 后端", "完成 200+ 条真实交易"],
      tags: ["小程序", "Spring Boot", "MySQL"],
      links: { github: "#", demo: "#" }
    },
    {
      title: "课程作业管理助手",
      period: "2025.09 - 2025.12",
      role: "前端 + 设计",
      desc: "帮同学整理 DDL 的网页小工具，拖拽排序 + 到期提醒。",
      highlights: ["Vue 3 实现", "本地存储，无需登录", "日历视图"],
      tags: ["Vue", "JavaScript"],
      links: { github: "#", demo: "#" }
    }
  ],

  contact: [
    { label: "✉️ 邮箱", href: "mailto:ning20071019@qq.com" },
    { label: "💻 GitHub", href: "https://github.com/Ning1019-smile/Personal-web" },
    { label: "🐱 CSDN / 博客", href: "#" },
    { label: "📱 微信", href: "#" }
  ]
};
