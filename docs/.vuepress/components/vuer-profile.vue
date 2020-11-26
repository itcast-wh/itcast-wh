<template>
  <div>
    <div class="team" v-for="team in teams">
      <h2 id="community-partners">{{team.title}}</h2>
      <p>{{team.describe}}</p>
      <template v-if="team.members.length > 0">
        <users v-for="profile in team.members" :key="profile.name" :profile="profile"></users>
      </template>
      <template v-else>
        <p>等待你的加入...</p>
      </template>
    </div>
  </div>
</template>

<script>
let orgs = [
  {
    name: "传智播客武汉前端研究中心",
    title: "Benevolent Dictator For Life",
    city: "Wuhan, China",
    languages: ["zh", "en"],
    github: "itcast-wh",
    twitter: "",
    work: {
      role: "组织",
      org: ""
    },
    reposOfficial: ["itcast-wh/*"],
    links: ["https://itcast-wh.github.io/"]
  }
];

let coreMembers = [
  {
    name: "李天成",
    title: "项目负责人",
    city: "Wuhan, China",
    languages: ["zh", "en"],
    github: "TianchengLee",
    work: {
      role: "项目负责人",
      org: "武汉校区研究中心"
    },
    reposOfficial: ["itcast-wh/*"],
    links: ["https://itcast-wh.github.io/"]
  },
  {
    name: "李威",
    title: "课程研究员",
    city: "Wuhan, China",
    languages: ["zh", "en"],
    github: "liweiwh",
    reposOfficial: ["itcast-wh/itcast-wh"],
    work: {
      role: "课程研究员",
      org: "武汉校区研究中心"
    }
  },
  {
    name: "任彬",
    title: "前端研究员",
    city: "武汉, 湖北, 中国",
    languages: ["zh", "en"],
    github: "luckyrobin",
    twitter: "",
    work: {
      role: "前端研究员",
      org: "武汉校区研究中心"
    },
    describe:
      "笔者擅长各种前端技能，喜欢互联网文化，喜欢各种电子产品。平日里爱好捣鼓树莓派、Arduino 等，尝试自己搭建智能家居。工作中常使用 React 全家桶搭建前端应用，比较喜欢 React 开发的生态体系，主要以 toB 应用为主，更加擅长搭建企业级应用平台。"
  },
  {
    name: "钱堃",
    title: "课程研究员",
    city: "Wuhan, China",
    languages: ["zh", "en"],
    github: "qk44077907",
    work: {
      role: "课程研究员",
      org: "武汉校区研究中心"
    }
  }
];

import Users from "./users";
export default {
  components: {
    users: Users
  },
  data() {
    return {
      teams: [
        {
          title: "团队&组织",
          describe:
            "这里有 传智播客 最优秀的研发团队&组织。为莘莘学子改变命运而讲课，为千万学生少走弯路而著书！",
          members: orgs
        },
        {
          title: "核心团队",
          describe:
            "传智前端 的研发及其生态建设出自一个国际化的团队，这里会展示其中部分团队成员的信息。",
          members: coreMembers
        },
        {
          title: "核心团队荣誉成员",
          describe: "我们在此致敬过去曾做出过突出贡献的不再活跃的团队成员。",
          members: []
        },
        {
          title: "社区伙伴",
          describe:
            "一些 传智前端 的老师们让这里变得更加丰富多彩，有必要在此特别提及。我们与这些主要合作伙伴建立了更加亲密的关系，经常与他们就即将到来的功能和新闻展开协作",
          members: []
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>