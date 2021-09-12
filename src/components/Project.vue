<template>
  <div>
    <div>{{ project.title }}</div>
    <div>{{ project.goal.summary }}</div>
    <div>{{ project.goal.description }}</div>
    <div>{{ project.period.startedAt }}</div>
    <div>{{ project.period.finishedAt ? project.period.finishedAt : "" }}</div>
    <div>{{ project.owner.name }}</div>
    <div>{{ project.owner.type }}</div>
    <div>
      <div>{{ project.team.name }}</div>
      <div v-for="part in project.team.parts" :key="part.id">
        <div>{{ part.name }}</div>
        <div>{{ part.role }}</div>
        <div>{{ part.summary }}</div>
      </div>
    </div>
    <div>
      <div v-for="part in project.mine.parts" :key="part.id">
        <div>{{ part.description }}</div>
        <div v-for="difficulty in part.difficulties" :key="difficulty.id">
          <div>{{ part.difficulty }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => {
        return {
          title: "PMS 2.0 IoT 개발",
          goal: {
            summary: "IoT 도어락 서비스 개발 및 연동",
            description: "IoT 도어락 서비스 개발 및 연동",
          },
          period: {
            startedAt: "2021-02",
            finishedAt: null,
          },
          techStack: {
            services: [
              {
                name: "",
                libraries: [],
                sdks: [],
                frameworks: [
                  {
                    name: "NestJS",
                    slug: "nestjs",
                  },
                ],
                runtime: [
                  {
                    name: "NodeJS",
                    slug: "nodejs",
                  },
                ],
                languages: [
                  {
                    name: "TypeScript",
                    slug: "typescript",
                  },
                ],
                others: [],
              },
            ],
            infrastructure: [
              {
                name: "Kafka (AWS MSK)",
                slug: "msk",
                role: "topic_based_message_queue",
              },
            ],
            productivity: [],
          },
          owner: {
            name: "온다",
            type: "company",
          },
          team: {
            name: "",
            parts: [
              {
                name: "",
                role: "",
                summary: "",
              },
            ],
          },
          mine: {
            summary: "",
            part: {
              description: "내 파트 디스크립션",
              difficulties: [
                {
                  description: "어려웠다",
                },
              ],
            },
          },
        };
      },
    },
  },
};
</script>
