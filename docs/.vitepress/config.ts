import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'TechForge',
  description: 'site de desnvolvimento de sistema.',

  themeConfig: {
    nav: [
      { text: 'Login', link: '/login' },
      { text: 'Introdução', link: '/intro' },
      { text: 'Canvas', link: '/canvas' },
      { text: 'Desenvolvimento', link: '/desenvolvimento' },
      { text: 'Diagramas', link: '/pagina' },
      { text: 'Tela', link: '/tela' },      
      { text: 'Teste', link: '/teste' },
      

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          
          { text: 'Login', link: '/login' },
         
          { text: 'Introdução', link: '/intro' },
               
          { text: 'Canvas', link: '/canvas' },

          { text: 'desenvolvimento', link: '/desenvolvimento' },
         
          
          
          { text: 'tela', link: '/tela' },

          
          { text: 'coisas', link: '/teste' },



          { text: 'Diagarmas', link: '/pagina' },

         
          
        ],
      },
    ],
  },
});
