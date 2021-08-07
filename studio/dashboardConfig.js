export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '610e6b2efef152e9eab6412b',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-w4mjfrip',
                  apiId: '836312fc-7e8f-4ab9-9107-4b4b98752709'
                },
                {
                  buildHookId: '610e6b2e4e6ed7dbb72d789f',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-aa9wzs4d',
                  apiId: '2d99d82e-a4ca-4515-9e1e-a016f0f81d7c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Audrey-hello/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-aa9wzs4d.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
