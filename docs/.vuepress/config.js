const glob = require('glob');

let markdownFiles = glob.sync('docs/teach-the-1k/**/*.md').map(f => '/teach-the-1k/' + f);

module.exports = {
    title: 'Design School',
    description: 'Hello!',
    themeConfig: {
      search: false,
      navbar: true,
      activeHeaderLinks: true,
      displayAllHeaders: false,
      smoothScroll: true,
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
                ['/teach-the-1k/introduction/','The Workshop'],
                {
                  title: 'The Workshop',
                  collapsable: false,
                  children: [
                    '/teach-the-1k/core-concepts/',
                    '/teach-the-1k/how-we-teach/',
                    '/teach-the-1k/how-we-manage/',
                  ]
                },
/*              ]
            },
            {
              title: 'The Workshop',
              collapsable: false,
              children: [
  */
                '/teach-the-1k/conclusions/',
              ]
            }
          ]
        }
    },
    markdown: {

    }
}
