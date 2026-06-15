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
      { text: 'Requisitos ', link: '/requisitos' },
      { text: 'Diagramas', link: '/pagina' },
      
      
    
         
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          
          { text: 'Login', link: '/login' },
         
          { text: 'Introdução', link: '/intro' },
               
          { text: 'Canvas', link: '/canvas' },

          { text: 'desenvolvimento', link: '/desenvolvimento' },

          { text: 'Requisitos ', link: '/requisitos' },
                          
          { text: 'Diagramas', link: '/pagina' },

          
         
        ],
      },
    ],
  },
});
