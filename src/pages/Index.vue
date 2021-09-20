<template>
  <div>
    <ul>
      <li
        class="board w-full lg:w-1/2 xl:w-1/2 2xl:w-1/3 mb-4 p-2 space-y-2"
        v-for="post in posts"
        :key="post.id"
      >
        <div class="flex h-3">
          <div
            class="h-3 w-3 border-black-olive border-solid rounded-full border-2"
          ></div>
          <div class="flex-grow">&nbsp;</div>
          <div
            class="h-3 w-3 border-black-olive border-solid rounded-full border-2"
          ></div>
        </div>
        <div class="mx-3">
          <div>
            <strong class="text-xl">
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
              {{
                post.publishements[post.publishements.length - 1].publishedAt
              }}
            </span>
          </div>
          <div>{{ post.content }}</div>
        </div>
        <div class="flex h-3 ">
          <div
            class="h-3 w-3 border-black-olive border-solid rounded-full border-2"
          ></div>
          <div class="flex-grow">&nbsp;</div>
          <div
            class="h-3 w-3 border-black-olive border-solid rounded-full border-2"
          ></div>
        </div>
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
