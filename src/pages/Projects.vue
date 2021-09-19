<template>
  <div>
    <div v-for="project in projects" :key="project.id">
      <ProjectHeader :data="project"></ProjectHeader>
    </div>
  </div>
</template>

<script>
import ProjectHeader from "~/components/ProjectHeader.vue";

export default {
  components: {
    ProjectHeader,
  },
  computed: {
    projects() {
      const projects = this.$page.projects.edges
        .map((edge) => edge.node)
        .filter((node) => node.publishements && node.publishements.length)
        .sort(
          (a, b) =>
            new Date(b.period.startedAt).getTime() -
            new Date(a.period.startedAt).getTime()
        );
      return projects;
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
        publishements {
          version
          publishedAt
        }
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
