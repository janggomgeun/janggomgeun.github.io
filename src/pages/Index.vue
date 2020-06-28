<template>
  <Layout>
    <div class="ml-6">
      <h1>
        <span>interface</span> JangGomGeun
      </h1>
      <div>
        <h2>wisdom</h2>
        <ul>
          <li>
            <h3>quotes</h3>
            <ul>
              <li v-for="edge in $page.quotes.edges" :key="edge.node.id">
                <g-link :to="edge.node.path">
                  <div>
                    <p>{{ edge.node.quote }}</p>
                  </div>
                </g-link>
                <br>
              </li>
            </ul>
          </li>
          <li>
            <h3>principles</h3>
            <ul>
              <li v-for="edge in $page.principles.edges" :key="edge.node.id">
                <g-link :to="edge.node.path">
                  <div>
                    <p>{{ edge.node.title }}</p>
                  </div>
                </g-link>
                <br>
              </li>
            </ul>
          </li>
          <li>
            <h3>words</h3>
          </li>
        </ul>
      </div>
      <div>
        <h2>expertise</h2>
        <ul>
        </ul>
      </div>
      <div>
        <h2>thoughts</h2>
      </div>
      <div>
        <h2>projects</h2>
      </div>
      <ul>
        
        
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
/* @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
* {
  font-family: 'Ubuntu Mono', monospace;
  font-size: 40px;
} */
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