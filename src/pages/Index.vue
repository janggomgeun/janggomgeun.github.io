<template>
  <Layout>
    <div class="w-5/6 sm:w-4/6 md:w-3/6">
      <div class="h-64"></div>
      <transition name="fade" appear>
        <div>
          <div class="mb-2">
            <img width="100%" src="../../assets/jang_woong_geun.svg" />
          </div>
          <div class="menu-items flex justify-between mb-2">
            <g-link class="menu-items-item mr-1" to="/wisdom">
              <img src="../../assets/wisdom.svg" />
            </g-link>
            <g-link class="menu-items-item mr-1" to="/expertise">
              <img src="../../assets/expertise.svg" />
            </g-link>
            <g-link class="menu-items-item mr-1" to="/thoughts">
              <img src="../../assets/thoughts.svg" />
            </g-link>
            <g-link class="menu-items-item" to="/projects">
              <img src="../../assets/projects.svg" />
            </g-link>
          </div>
          <div class="search-box mb-2">
            <input
              class="search focus:outline-none"
              type="search"
              name="search"
              id="search"
              placeholder="search..."
            />
          </div>
          <div class="board p-10 w-full">
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
      </transition>
    </div>
  </Layout>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap");

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}

.title {
  @apply font-body font-bold antialiased select-none mb-2;
  font-size: 72px;
  color: #404040;
}

.menu-items-item::after :hover {
  width: 100%;
  height: 100%;
  background-color: #404040;
  @apply cursor-pointer;
  filter: invert(100%);
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