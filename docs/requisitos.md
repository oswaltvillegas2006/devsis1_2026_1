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


## 2. Requisitos Não Funcionais (RNF)

**RNF001** - Tempo de Resposta em Consultas: O sistema deve responder a consultas de estoque e catálogo em no máximo 2 segundos.

**RNF002** - Processamento de Transações: As transações de venda e pagamento devem ser processadas em no máximo 5 segundos.

**RNF003** - Escalabilidade: O sistema deve ser capaz de suportar até 100 usuários simultâneos sem perda significativa de performance.

**RNF004** - Autenticação de Usuários: Todos os usuários devem autenticar-se com login e senha seguros, utilizando hash bcrypt para armazenamento.

**RNF005** - Controle de Acesso (RBAC): Diferentes tipos de usuário (vendedor, técnico, gerente) devem acessar apenas as funcionalidades permitidas ao seu perfil.

**RNF006** - Criptografia de Dados Sensíveis: Dados como CPF/CNPJ, e-mail e telefone devem ser armazenados de forma criptografada no banco de dados.

**RNF007** - Backup e Recuperação: O sistema deve realizar backups automáticos diários com capacidade de recuperação em caso de falhas.

**RNF008** - Limite de Tentativas de Login: A conta de usuário deve ser bloqueada por 15 minutos após 5 tentativas consecutivas de login falhadas.

**RNF009** - Interface Intuitiva: A interface deve ser intuitiva e fácil de usar, baseada em princípios consolidados de UX para reduzir o tempo de treinamento.

**RNF010** - Responsividade: O layout do sistema deve ser responsivo para funcionar corretamente em desktops e tablets.

**RNF011** - Disponibilidade: O sistema deve apresentar uma disponibilidade mínima de 99% do tempo, desconsiderando manutenções programadas.

**RNF012** - Compatibilidade de Plataforma: O software deve ser acessível via web ou compatível com os sistemas operacionais Windows, Linux e macOS.
