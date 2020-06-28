<template>
  <Layout>
    <div>
      <g-link to="/">Go back</g-link>
      <h1>{{ $page.principle.title }}</h1>
      <p>{{ $page.principle.date }}</p>
    </div>
    <div>
      <p v-html="$page.principle.content" />
    </div>
  </Layout>
</template>
<page-query>
query Principle ($path: String!) {
   principle: principle (path: $path) {
    id
    title
    content
  }
}
</page-query>