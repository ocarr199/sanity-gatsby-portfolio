export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60f480412a071fdd1cd38ffe',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-sift86gw',
                  apiId: 'b1e74195-cdd5-460c-8706-c8ec3fa5572a'
                },
                {
                  buildHookId: '60f48041f4d13b179e77f547',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-52gbt1tc',
                  apiId: '35ee00cf-3c2a-4317-a616-c8ed6c5d0e63'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ocarr199/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-52gbt1tc.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
