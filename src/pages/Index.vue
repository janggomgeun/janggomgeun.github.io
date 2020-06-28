<template>
  <Layout>
    <div class="ml-6">
      <h1>Jang Gom Geun</h1>
      <button class="btn btn-blue">yahoo</button>
      <ul>
        <li v-for="edge in $page.principles.edges" :key="edge.node.id">
          <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="sm:flex sm:items-center px-6 py-4">
              <g-link :to="edge.node.path">
                <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                  <p class="text-xl leading-tight">{{ edge.node.title }}</p>
                </div>
              </g-link>
            </div>
          </div>
          <br>
        </li>
        <li v-for="edge in $page.quotes.edges" :key="edge.node.id">
          <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="sm:flex sm:items-center px-6 py-4">
              <g-link :to="edge.node.path">
                <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                  <p class="text-xl leading-tight">{{ edge.node.quote }}</p>
                </div>
              </g-link>
            </div>
          </div>
          <br>
        </li>
      </ul>
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
.home-links a {
  margin-right: 1rem;
}
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