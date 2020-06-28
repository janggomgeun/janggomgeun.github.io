<template>
  <Layout>
    <div>
      <g-link to="/">Go back</g-link>
      <h1>{{ $page.quote.title }}</h1>
      <p>{{ $page.quote.date }} | {{ $page.quote.timeToRead }} min read</p>
    </div>
    <div>
      <p v-html="$page.quote.content" />
    </div>
  </Layout>
</template>
<page-query>
query Quote ($path: String!) {
   quote: quote (path: $path) {
    id
    quote
    who_said_this
  }
}
</page-query>