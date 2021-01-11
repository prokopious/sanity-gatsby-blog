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
                  buildHookId: '5ffcdf91147b07157184df37',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-kp85cv81',
                  apiId: '59a2838f-a296-4261-b32f-de1b176e34e0'
                },
                {
                  buildHookId: '5ffcdf91495938188af21a2e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ayh22o4u',
                  apiId: 'deda4b66-057b-4e8a-9f9a-32df3eb09c7f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prokopious/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ayh22o4u.netlify.app', category: 'apps' }
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
