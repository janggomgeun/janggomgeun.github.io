<template>
  <div>
    <div v-for="{ node } in $page.projects.edges" :key="node.id">
      <ProjectHeader :data="node"></ProjectHeader>
    </div>
  </div>
</template>

<script>
import ProjectHeader from "~/components/ProjectHeader.vue";

export default {
  components: {
    ProjectHeader,
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
        fileInfo {
          extension
          directory
          path
          name
        }
        content
        excerpt
        createdAt
        updatedAt
        title
        goal {
          summary
          description
        }
        period {
          startedAt
          finishedAt
        }
        techStack {
          services {
            name
            libraries {
              name
              slug
            }
            sdks {
              name
              slug
            }
            runtimes {
              name
              slug
            }
            languages {
              name
              slug
            }
            others {
              name
              slug
            }
          }
          infrastructures {
            name
            slug
            role
          }
          tools {
            name
            slug
          }
        }
        owner {
          name
          type
        }
        team {
          name
        }
        mine {
          summary
          part {
            description
            difficulties {
              description
            }
          }
        }
        references {
          description
          link
        }
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
