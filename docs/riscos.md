## 1. Riscos Técnicos (Desenvolvimento do Motor)
Risco T1: Divergência ou desatualização na base de dados de hardware

Descrição: A indústria de hardware lança novos componentes (CPUs, GPUs, Placas-mãe) constantemente. Se a base de dados relacional contiver metadados errados ou defasados, o algoritmo do Forge Builder falhará, permitindo que o usuário monte e compre um computador com peças incompatíveis.

Impacto: Alto (Inviabiliza a proposta de valor do sistema).

Probabilidade: Média.

**Mitigação**: Criação de um formulário de cadastro estrito no Painel Administrativo. O sistema impede a inserção de qualquer peça sem que todos os campos técnicos obrigatórios (Socket, TDP, dimensões, tipo de barramento) estejam preenchidos. Além disso, adota-se a validação cruzada baseada nos manuais oficiais dos fabricantes (Intel, AMD, ASUS) antes da homologação do item no banco de dados.

Risco T2: Gargalo de performance na validação em tempo real

Descrição: Executar dezenas de checagens matemáticas e lógicas (elétrica, física e de soquetes) a cada clique do usuário na tela de montagem pode sobrecarregar a aplicação, causando lentidão (lag) e prejudicando a experiência do usuário.

Impacto: Médio.

Probabilidade: Média.

**Mitigação**: Utilização das vantagens de componentização e reatividade do ecossistema TypeScript. As validações mais simples e críticas (como a compatibilidade de socket entre CPU e placa-mãe) são processadas instantaneamente no Front-end através do gerenciamento de estado local. As checagens mais pesadas e consultas completas de inventário são deixadas para o Back-end, operando de forma assíncrona para não travar a interface do cliente.

## 2. Riscos de Escopo e Prazo (Foco Acadêmico)
Risco P1: Complexidade excessiva no desenvolvimento do algoritmo (Estouro de Prazo)

Descrição: Tentar mapear todas as variáveis possíveis de hardware do mercado (como a velocidade em MHz das memórias, quantidade de pinos de coolers, fluxo de ar de ventoinhas) pode tornar o escopo gigantesco, impedindo a entrega do projeto no prazo estipulado pela disciplina.

Impacto: Alto (Prejudica a nota acadêmica).

Probabilidade: Alta.

**Mitigação**: Aplicação do conceito de MVP (Minimum Viable Product - Produto Mínimo Viável). O escopo do algoritmo foi restrito para validar rigorosamente apenas os três fatores mais críticos e que geram prejuízos reais em uma montagem: compatibilidade de Socket (processador e placa-mãe), dimensionamento físico (tamanho da GPU dentro do gabinete) e limite elétrico (potência da fonte versus o TDP total).

## 3. Riscos de Infraestrutura e Nuvem
Risco I1: Instabilidade ou "adormecimento" dos servidores no plano gratuito

Descrição: Como o projeto utilizará a infraestrutura gratuita de plataformas de nuvem (como Vercel, Supabase ou similares) para hospedagem de testes, essas ferramentas costumam colocar a aplicação ou o banco de dados em "modo de suspensão" após longos períodos de inatividade. Isso pode fazer com que o site demore muito para carregar no momento exato em que o professor for avaliar ou durante a banca de apresentação.

Impacto: Médio.

Probabilidade: Alta.

**Mitigação**: A equipe adotará uma rotina de Warm-up (aquecimento). Trinta minutos antes da apresentação prática da banca ou da entrega final, os integrantes realizarão múltiplos acessos simulados no site e na API para "acordar" os contêineres e os servidores de banco de dados na nuvem, garantindo que o sistema responda instantaneamente quando o professor abrir o link da Vercel.

## 4. Riscos de Segurança Operacional
Risco S1: Manipulação fraudulenta de dados no Carrinho de Compras

Descrição: Usuários maliciosos podem tentar alterar os preços dos componentes diretamente no navegador (através do console de desenvolvedor ou ferramentas de inspeção de código) para tentar finalizar uma compra fraudulenta com valores abaixo do mercado.

Impacto: Alto.

Probabilidade: Baixa.

**Mitigação**: Arquitetura desacoplada com validação cega no servidor. O Front-end serve apenas para enviar as intenções de compra do cliente. No momento em que o checkout é acionado, o Back-end ignora os preços vindos da tela do usuário, busca os valores reais diretamente na tabela protegida do banco de dados PostgreSQL e refaz todo o cálculo financeiro de forma isolada e segura antes de gerar o pedido final.