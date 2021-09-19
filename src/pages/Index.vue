<template>
  <div>
    <ul>
      <li
        class="rounded-2xl border-solid border-gray-800 border-4 mb-4 p-4 space-y-2"
        v-for="post in posts"
        :key="post.id"
      >
        <div>
          <strong class="text-2xl">
            <g-link :to="post.id">{{ post.title }}</g-link>
          </strong>
        </div>
        <div>
          <span class="rounded-full ring-1 p-0.5 ring-gray-700">
            {{ post.category }}
          </span>
          <span>&nbsp;</span>
          <span class="rounded-full ring-1 p-0.5 ring-gray-700">
            v{{ post.publishements[post.publishements.length - 1].version }}
          </span>
        </div>
        <div>
          <span>
            pulished at
            {{ post.publishements[post.publishements.length - 1].publishedAt }}
          </span>
        </div>
        <div>{{ post.content }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },

  computed: {
    posts() {
      return this.$page.projects.edges
        .map((edge) => edge.node)
        .filter((node) => node.publishements && node.publishements.length)
        .sort(
          (a, b) =>
            new Date(b.publishements[b.publishements.length - 1].publishedAt) -
            new Date(a.publishements[a.publishements.length - 1].publishedAt)
        );
    },
  },
};
</script>

<page-query>
query {
    projects: allProject {
    edges {
      node {
        id
        path
        title
        category
        createdAt
        updatedAt
        publishements {
          version
          publishedAt
        }
        content
        headings {
          depth
          value
          anchor
        }
        timeToRead
        belongsTo {
          totalCount
        }
      }
    }
  }
}
</page-query>
