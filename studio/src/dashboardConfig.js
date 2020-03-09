export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e65fa0f7a9ac87f53595818',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-n4f5h9da',
                  apiId: 'd6e7590e-497c-4c75-9bc1-6e4f7d06cb50'
                },
                {
                  buildHookId: '5e65fa0f00040365c10236ba',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9bfsnvho',
                  apiId: '94e7fcd2-b903-4d0d-b39e-b19906c27374'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simpja/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9bfsnvho.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
