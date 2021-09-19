<template>
  <div class="rounded-lg border-solid border-gray-800 border-4 mb-4 p-4">
    <strong class="text-2xl">{{ data.title }}</strong>
    <span>, </span>
    <span>{{ data.period.startedAt }}</span>
    <span> ~ </span>
    <span>{{
      data.period.finishedAt ? data.period.finishedAt : "진행중"
    }}</span>
    <div class="divide-y divide-gray-800">
      <div></div>
      <div></div>
    </div>
    <div>
      <div>{{ data.goal.summary }}</div>
      <div>{{ data.goal.description }}</div>
    </div>
    <div>
      <div v-for="part in data.team.parts" :key="part.id">
        <div>{{ part.name }}</div>
        <div>{{ part.role }}</div>
        <div>{{ part.summary }}</div>
      </div>
    </div>
    <div>
      <div>{{ data.mine.summary }}</div>
      <ul v-for="part in data.mine.parts" :key="part.id">
        <div>{{ part.description }}</div>
        <li v-for="difficulty in part.difficulties" :key="difficulty.id">
          <div>{{ part.difficulty }}</div>
        </li>
      </ul>
    </div>
    <div class="text-right">
      <span>a </span>
      <span>{{ data.owner.type }}</span>
      <span> project </span>
      <span>by </span>
      <span>{{ data.owner.name }}</span>
      <span>, </span>
      <span>{{ data.team.name }}</span>
    </div>
    <div class="mt-2">
      <div class="text-xl"><strong>테크스택</strong></div>
      <div class="flex flex-start space-x-2">
        <div v-for="service in data.techStack.services" :key="service.id">
          <div>
            <strong>
              {{ service.name }}
            </strong>
          </div>
          <span v-if="service.libraries.length">
            <span v-for="library in service.libraries" :key="library.id">
              {{ library.name }}
            </span>
            <span>, </span>
          </span>
          <span v-if="service.sdks.length">
            <span v-for="sdk in service.sdks" :key="sdk.id">
              {{ sdk.name }}
            </span>
            <span>, </span>
          </span>
          <span v-if="service.runtimes.length">
            <span v-for="runtime in service.runtimes" :key="runtime.id">
              {{ runtime.name }}
            </span>
            <span>, </span>
          </span>
          <span v-if="service.languages.length">
            <span v-for="language in service.languages" :key="language.id">
              {{ language.name }}
            </span>
            <span>, </span>
          </span>
        </div>
      </div>
      <div class="mt-1">
        <span><strong>인프라</strong></span>
        <span>: </span>
        <span
          v-for="infrastructure in data.techStack.infrastructures"
          :key="infrastructure.id"
        >
          {{ infrastructure.name }}
        </span>
      </div>
      <div class="mt-1">
        <span><strong>도구</strong></span>
        <span>: </span>
        <span v-for="tool in data.techStack.tools" :key="tool.id">
          {{ tool.name }}
        </span>
      </div>
    </div>

    <div v-if="data.references.length">
      <div><strong>참고</strong></div>
      <ul v-for="reference in data.references" :key="reference.id">
        <li class="underline">
          <g-link :href="reference.link">
            {{ reference.description }}
          </g-link>
        </li>
      </ul>
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
