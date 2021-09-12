<template>
  <div>
    <div>{{ data.title }}</div>
    <div>
      <div>{{ data.goal.summary }}</div>
      <div>{{ data.goal.description }}</div>
    </div>
    <div>
      <div>{{ data.period.startedAt }}</div>
      <div>{{ data.period.finishedAt ? data.period.finishedAt : "" }}</div>
    </div>
    <div>
      <div v-for="service in data.techStack.services" :key="service.id">
        <div>{{ service.name }}</div>
        <div v-for="library in service.libraries" :key="library.id">
          {{ library.name }}
        </div>
        <div v-for="sdk in service.sdks" :key="sdk.id">
          {{ sdk.name }}
        </div>
        <div v-for="runtime in service.runtimes" :key="runtime.id">
          {{ runtime.name }}
        </div>
        <div v-for="language in service.languages" :key="language.id">
          {{ language.name }}
        </div>
      </div>
      <div
        v-for="infrastructure in data.techStack.infrastructures"
        :key="infrastructure.id"
      >
        {{ infrastructure.name }}
      </div>
      <div v-for="tool in data.techStack.tools" :key="tool.id">
        {{ tool.name }}
      </div>
    </div>

    <div>
      <div>{{ data.owner.name }}</div>
      <div>{{ data.owner.type }}</div>
    </div>
    <div>
      <div>{{ data.team.name }}</div>
      <div v-for="part in data.team.parts" :key="part.id">
        <div>{{ part.name }}</div>
        <div>{{ part.role }}</div>
        <div>{{ part.summary }}</div>
      </div>
    </div>
    <div>
      <div>{{ data.mine.summary }}</div>
      <div v-for="part in data.mine.parts" :key="part.id">
        <div>{{ part.description }}</div>
        <div v-for="difficulty in part.difficulties" :key="difficulty.id">
          <div>{{ part.difficulty }}</div>
        </div>
      </div>
    </div>
    <div>
      <div v-for="reference in data.references" :key="reference.id">
        {{ reference }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
};
</script>
