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
    title: 'Design School',
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
          '/teach-the-1k/': [
            {
              title: 'Teach the 1K',
              children: [
                '/teach-the-1k/',
                ['/teach-the-1k/the-workshop.md','The Workshop'],
                {
                  title: 'The Workshop',
                  collapsable: false,
                  children: [
                    '/teach-the-1k/core-concepts.md',
                    '/teach-the-1k/how-we-teach/',
                    {
                      title: 'How We Teach',
                      collapsable: true,
                      children: [
                        '/teach-the-1k/how-we-teach/train.md',
                        '/teach-the-1k/how-we-teach/prepare.md',
                        '/teach-the-1k/how-we-teach/launch.md',
                        '/teach-the-1k/how-we-teach/review.md',
                      ]
                    },
                    '/teach-the-1k/how-we-manage.md',
                  ]
                },
                '/teach-the-1k/conclusions.md',
              ]
            }
          ],

          '/teach-the-1k/how-we-teach/': [
            {
              title: 'Teach the 1K: How We Teach',
              collapsable: false,
              children: [
                '/teach-the-1k/how-we-teach/train.md',
                '/teach-the-1k/how-we-teach/prepare.md',
                '/teach-the-1k/how-we-teach/launch.md',
                '/teach-the-1k/how-we-teach/review.md',
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
    markdown: {

    }
}
