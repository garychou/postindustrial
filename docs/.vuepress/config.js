const autometa_options = {
  site: {
    name: 'Post-Industrial Design School',
  },
  canonical_base: 'https://postindustrialdesign.school',
  enable : true, // enables/disables everything - control per page using frontmatter
  image  : true, // regular meta image used by search engines
  twitter: true, // twitter card
  og     : true, // open graph: facebook, pinterest, google+
  schema : true, // schema.org for google
};


module.exports = {
    title: 'Post-Industrial Design School',
    description: 'An Experiential Learning Lab',
    themeConfig: {
      search: false,
      navbar: true,
      activeHeaderLinks: true,
      displayAllHeaders: false,
      smoothScroll: false,
      nav: [
        { text: 'Home', link: '/'},
        { text: 'Teach the 1K', link: '/teach-the-1k/'},
        { text: 'Entrepreneurial Design', link: '/entrepreneurial-design/'},
        { text: 'Year 5', link: '/year-5/'},
      ],
      sidebar:
        {
          '/entrepreneurial-design/': [

            ['/entrepreneurial-design/', 'Overview'],
            '/entrepreneurial-design/insights.md',
            '/entrepreneurial-design/archive.md',
          ],

          '/teach-the-1k/': [

            ['/teach-the-1k/','Overview'],
            '/teach-the-1k/insights.md',
            {
              title: 'Workshop',
              path: '/teach-the-1k/workshop/',
              sidebarDepth: 2,
              collapsable: false,
              children: [
                '/teach-the-1k/workshop/core-concepts.md',
                {
                  title: 'How We Teach',
                  path: '/teach-the-1k/workshop/how-we-teach/',
                  collapsable: false,
                  children: [
                    '/teach-the-1k/workshop/how-we-teach/train.md',
                    '/teach-the-1k/workshop/how-we-teach/prepare.md',
                    '/teach-the-1k/workshop/how-we-teach/launch.md',
                    '/teach-the-1k/workshop/how-we-teach/review.md',
                  ]
                },

              '/teach-the-1k/workshop/how-we-manage.md',
            ]
          }
        ]
      }
    },
    plugins: [
      [ 'autometa', autometa_options ],
      [ 'clean-urls', {
              normalSuffix: '/',
              indexSuffix: '/',
              notFoundPath: '/404.html'
            }]
    ],
}
