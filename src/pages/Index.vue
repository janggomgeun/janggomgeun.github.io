<template>
  <Layout>
    <div class="m-6 text-right">
      <h1 class="antialiased text-6xl my-1">
        <span class="text-2xl">interface</span> JangGomGeun
      </h1>
      <div>
        <div>
          <h2 class="underline">wisdom</h2>
          <ul>
            <li class="flex flex-row-reverse">
              <h3 class="flex-initial">quotes</h3>
              <ul class="flex-initial">
                <li v-for="edge in $page.quotes.edges" :key="edge.node.id">
                  <div class="p-2">
                    <div class="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
                      <span class="inline-flex bg-indigo-600 text-white rounded-full h-6 px-3 justify-center items-center">new</span>
                      <g-link :to="edge.node.path">
                        <span class="inline-flex px-2">{{ edge.node.quote }}</span>
                      </g-link>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li class="flex flex-row-reverse">
              <h3 class="flex-initial">principles</h3>
              <ul class="flex-initial">
                <li v-for="edge in $page.principles.edges" :key="edge.node.id">
                  <div class="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
                    <span class="inline-flex bg-blue-500 text-white rounded-full h-6 px-3 justify-center items-center">new</span>
                    <g-link :to="edge.node.path">
                      <span class="inline-flex px-2">{{ edge.node.title }}</span>
                    </g-link>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <h3>words</h3>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="underline">expertise</h2>
          <ul>
          </ul>
        </div>
        <div>
          <h2 class="underline">thoughts</h2>
        </div>
        <div>
          <h2 class="underline">projects</h2>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>
<style>
</style>
<page-query>
query {
  principles: allPrinciple {
    edges {
      node {
        id
        path
        title
      }
    }
  }
  quotes: allQuote {
    edges {
      node {
        id
        quote
        who_said_this
      }
    }
  }
}
</page-query>