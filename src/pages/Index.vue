<template>
  <Layout>
    <div class="min-w-md">
      <div class="h-64"></div>
      <div>
        <img width="100%" src="../../assets/jang_woong_geun.svg" />
      </div>
      <div class="menu-items flex justify-between">
        <g-link to="/wisdom">
          <span class="menu-items-item mr-1">WISDOM</span>
        </g-link>
        <g-link to="/expertise/knowledges">
          <span class="menu-items-item mx-1">EXPERTISE</span>
        </g-link>
        <g-link to="/thoughts">
          <span class="menu-items-item mx-1">THOUGHTs</span>
        </g-link>
        <g-link to="/projects">
          <span class="menu-items-item ml-1">PROJECTs</span>
        </g-link>
      </div>
      <div class="search-box">
        <input
          class="search focus:outline-none"
          type="search"
          name="search"
          id="search"
          placeholder="search..."
        />
      </div>
      <br />
      <div class="board p-10 max-w-md">
        <article
          v-for="knowledge in $page.allKnowledge.edges"
          :key="knowledge.id"
        >
          <h2 class="font-2xl font-bold">{{ knowledge.node.title }}</h2>
          <p v-html="knowledge.node.content"></p>
          <g-link :to="knowledge.node.path">more</g-link>
        </article>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap");

.title-prefix {
  @apply font-body font-normal select-none;
  font-size: 32px;
  color: #404040;
}

.title {
  @apply font-body font-bold antialiased select-none;
  font-size: 72px;
  color: #404040;
}

.menu-items {
}

.menu-items-item {
  @apply font-body antialiased underline;
  font-size: 35px;
  color: #404040;
}

.menu-items-item:hover {
  @apply cursor-pointer rounded-md;
  background-color: #404040;
  color: #fff;
}

.search-box {
  @apply rounded-full border-4 font-body px-3 py-1;
  border-color: #404040;
}

.search {
  @apply bg-transparent border-4 min-w-full border-none;
  font-size: 20px;
}

.search:active {
  @apply bg-transparent rounded-full border-4 min-w-full;
}

.board {
  @apply rounded-lg border-4;
  border-color: #404040;
}

.tag {
  @apply rounded-full border-4 p-1 m-1;
  border-color: #404040;
}
</style>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
};
</script>
<style>
</style>
<page-query>
query {
  allKnowledge {
    edges {
      node {
        id
        path
        title
        created_at
        content
      }
    }
  }
}
</page-query>