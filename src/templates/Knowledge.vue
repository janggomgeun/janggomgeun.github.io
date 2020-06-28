<template>
  <Layout>
    <div>
      <g-link to="/">Go back</g-link>
      <h1>{{ $page.knowledge.title }}</h1>
      <p>{{ $page.knowledge.date }}</p>
    </div>
    <div>
      <p v-html="$page.knowledge.content" />
    </div>
  </Layout>
</template>
<page-query>
query Principle ($path: String!) {
   knowledge: knowledge (path: $path) {
    id
    title
    content
  }
}
</page-query>