
### Descrição do Projeto
O **TechForge** é um sistema web de e-commerce e montagem assistida de computadores de alta performance, projetado para operar sob o modelo B2C (Business-to-Consumer). O sistema visa resolver o principal gargalo do mercado de hardware atual: a complexidade na escolha de componentes compatíveis por parte de usuários leigos ou entusiastas intermediários. 

Desenvolvido com uma arquitetura baseada em componentização no ecossistema TypeScript, o software separa rigidamente a camada de apresentação (Front-end responsivo) da camada de dados (Back-end/Banco de dados). A plataforma não funciona apenas como um catálogo estático, mas sim como um sistema especialista dinâmico, onde algoritmos de validação em tempo real analisam as restrições físicas, elétricas e lógicas de cada peça inserida no ecossistema do cliente. O deploy contínuo integrado via GitHub e Vercel garante resiliência e alta disponibilidade para o usuário final.

## Algoritmos de Validação em Tempo Real (O Motor Especialista)
O grande diferencial do sistema reside na sua capacidade de validar a compatibilidade de hardware em três níveis críticos a cada componente adicionado pelo usuário:

**Restrições Lógicas**: Validação estrita de compatibilidade eletrônica entre o processador (CPU) e a placa-mãe (verificação de soquete e suporte de chipset), além da tipagem e geração da memória RAM (DDR4 vs DDR5) e slots de expansão (M.2 NVMe vs SATA).

**Restrições Elétricas**: Cálculo dinâmico de consumo energético. O sistema soma o consumo estimado de todos os componentes selecionados (GPU, CPU, fans, armazenamento) e aplica uma margem de segurança de 20% para recomendar automaticamente a potência mínima e a certificação necessária para a fonte de alimentação (PSU).

**Restrições Físicas**: Validação dimensional básica de engenharia espacial interna, como o comprimento máximo da placa de vídeo (GPU) suportado pelo gabinete escolhido e a altura máxima do cooler do processador em relação à largura do chassi.

