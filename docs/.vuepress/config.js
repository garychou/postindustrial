module.exports = {
    title: 'Design School',
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
        '/entrepreneurial-design/': [],
         '/': [
              '/',
          ],
      },
      nav: [
        { text: 'Home', link: '/'},
        { text: 'Teach the 1K', link: '/teach-the-1k/'},
        { text: 'Entrepreneurial Design', link: '/entrepreneurial-design/'},
      ]
    },
    markdown: {

    }
}
