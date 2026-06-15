
### 1. Descrição do Projeto
O **TechForge** é um sistema web de e-commerce e montagem assistida de computadores de alta performance, projetado para operar sob o modelo B2C (Business-to-Consumer). O sistema visa resolver o principal gargalo do mercado de hardware atual: a complexidade na escolha de componentes compatíveis por parte de usuários leigos ou entusiastas intermediários. 

Desenvolvido com uma arquitetura baseada em componentização no ecossistema TypeScript, o software separa rigidamente a camada de apresentação (Front-end responsivo) da camada de dados (Back-end/Banco de dados). A plataforma não funciona apenas como um catálogo estático, mas sim como um sistema especialista dinâmico, onde algoritmos de validação em tempo real analisam as restrições físicas, elétricas e lógicas de cada peça inserida no ecossistema do cliente. O deploy contínuo integrado via GitHub e Vercel garante resiliência e alta disponibilidade para o usuário final.

---
## Requisitos Funcionais (RF)

**RF001** - Consultar Catálogo: O sistema deve permitir que vendedores e clientes consultem o catálogo completo de peças com filtros por categoria, marca, faixa de preço e disponibilidade.

**RF002** - Montar PC Personalizado: O sistema deve fornecer uma ferramenta interativa para a escolha de componentes individuais com exibição de compatibilidade em tempo real.
**RF003** - Realizar Compra: O sistema deve permitir o processamento de vendas presenciais, adicionando produtos ao carrinho e finalizando a transação.

**RF004** - Efetuar Pagamento: O sistema deve integrar-se com gateway de pagamento para processar transações via PIX, cartão de crédito ou débito.

**RF005** - Gerar Comprovante de Venda: O sistema deve gerar automaticamente um comprovante de venda com os itens, valores, forma de pagamento e código QR.

**RF006** - Cadastrar Novo Produto: O sistema deve permitir o cadastro de novos produtos com código, nome, categoria, preço, quantidade inicial, marca e fornecedor.

**RF007** - Alertar Estoque Baixo: O sistema deve emitir um alerta quando a quantidade de um produto cair abaixo de um limite pré-configurado.

**RF008** - Abrir Ordem de Serviço: O sistema deve gerar automaticamente uma Ordem de Serviço única vinculada ao cliente e ao equipamento deixado para conserto.

**RF009** - Gerar Orçamento de Reparo: O sistema deve permitir ao técnico estimar o custo do reparo e gerar o orçamento para aprovação do cliente.

**RF010** - Cadastrar Cliente: O sistema deve permitir o cadastro de clientes contendo nome/razão social, CPF/CNPJ, e-mail, telefone e múltiplos endereços.

**RF011** - Gerar Relatório de Vendas: O gerente deve poder gerar relatórios de vendas por período, exibindo faturamento total e produtos mais vendidos.

**RF012** - Cadastrar Funcionário: O sistema deve permitir o cadastro de colaboradores com nome, e-mail, data de admissão e perfil de usuário.
