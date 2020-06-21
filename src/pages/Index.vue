<template>
  <Layout>
    <ul>
      <li v-for="edge in $page.posts.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
      </li>
    </ul>
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
  posts: allPost {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</page-query>