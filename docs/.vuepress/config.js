module.exports = {
    title: 'Post-Industrial Design School',
    description: 'Hello!',
    themeConfig: {
      search: false,
      navbar: true,
      sidebar:
       {
         '/teach-the-1k/': [
            {
              title: 'Teach the 1K',
              collapsable: false,
              children: [
                ['/teach-the-1k/','Background'],
                '/teach-the-1k/introduction/',
                '/teach-the-1k/core-concepts/',
                '/teach-the-1k/how-we-teach/',
                '/teach-the-1k/how-we-manage/',
              ]
            },
          ],
          '/entrepreneurial-design/': [
             {
               title: 'Entrepreneurial Design',
               collapsable: false,
               children: [
                 ['/entrepreneurial-design/', 'Overview'],
                 '/entrepreneurial-design/lessons/',
                 '/entrepreneurial-design/course-materials/',
                 '/entrepreneurial-design/students/',
                 '/entrepreneurial-design/reflections/',
                 '/entrepreneurial-design/acknowledgments/',
               ]
             },
          ],
       '/': [
            '/',
        ],
      },
      lastUpdated: 'Last Updated', // string | boolean
      nav: [
        { text: 'Home', link: '/'},
        { text: 'Teach the 1K', link: '/teach-the-1k/'},
        { text: 'Entrepreneurial Design', link: '/entrepreneurial-design/'},
      ]
    },
    markdown: {

    }
}
