
### 1. Descrição do Projeto
O **TechForge** é um sistema web de e-commerce e montagem assistida de computadores de alta performance, projetado para operar sob o modelo B2C (Business-to-Consumer). O sistema visa resolver o principal gargalo do mercado de hardware atual: a complexidade na escolha de componentes compatíveis por parte de usuários leigos ou entusiastas intermediários. 

Desenvolvido com uma arquitetura baseada em componentização no ecossistema JavaScript/TypeScript, o software separa rigidamente a camada de apresentação (Front-end responsivo) da camada de dados (Back-end/Banco de dados). A plataforma não funciona apenas como um catálogo estático, mas sim como um sistema especialista dinâmico, onde algoritmos de validação em tempo real analisam as restrições físicas, elétricas e lógicas de cada peça inserida no ecossistema do cliente. O deploy contínuo integrado via GitHub e Vercel garante resiliência e alta disponibilidade para o usuário final.

---

### 2. Principais Recursos e Funcionalidades
Para atender tanto as necessidades de negócio quanto a facilidade de uso, a TechForge conta com as seguintes funcionalidades essenciais:

* **Módulo Custom Forge (Validador de Compatibilidade):** Mecanismo que impede erros de montagem bloqueando a seleção de peças incompatíveis em tempo real. O sistema analisa parâmetros cruzados como: soquete da CPU vs. slot da Placa-mãe, tipo de memória (DDR4/DDR5) vs. suporte da Placa-mãe, e consumo total estimado (TDP) vs. potência da Fonte de Alimentação.
* **Filtros Avançados de Hardware:** Mecanismo de busca facetada que permite filtrar componentes por especificações técnicas granulares (frequência de clock, tamanho de formato ATX/Micro-ATX, conexões PCIe, etc.), além dos tradicionais filtros de preço e marca.
* **Persistência de Carrinho Dinâmico:** Permite ao cliente salvar configurações de computadores completos montados no simulador, gerando um link compartilhável ou enviando a lista diretamente para o checkout unificado.
* **Painel de Controle do Técnico (Backoffice):** Interface administrativa para os montadores da loja física visualizarem a fila de ordens de montagem, com a lista exata de componentes selecionados pelo cliente e a checagem de estoque físico associada.
* **Rastreamento de Processo Logístico Interno:** Atualização do status do pedido em microetapas transparentes para o cliente: "Separação de estoque", "Bancada de montagem", "Fase de testes/Benchmarks" e "Despachado para entrega".

