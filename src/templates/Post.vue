<template>
  <Layout>
    <div>
      <h1>{{ $page.post.title }}</h1>
      <p>{{ $page.post.date }} | {{ $page.post.timeToRead }} min read</p>
    </div>
    <div>
      <p v-html="$page.post.content" />
    </div>
  </Layout>
</template>
<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>