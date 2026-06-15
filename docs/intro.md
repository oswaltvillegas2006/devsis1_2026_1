# MINIMUNDO

## 1. Objetivo e Escopo: 

O sistema TechForge visa gerenciar as operações cotidianas de uma loja física de informática. O foco central é o controle de estoque de hardware, a frente de caixa (PDV) para vendas presenciais e a gestão de Ordens de Serviço (OS) para manutenção de equipamentos deixados por clientes no estabelecimento. 

## 2. Perfis de Usuário e Acessos: 

O sistema possui quatro perfis principais com ferramentas distintas:Vendedor: Realiza vendas, consulta estoque e cadastra clientes.Técnico: Gerencia as Ordens de Serviço, realiza diagnósticos e solicita peças ao estoque.Cliente: Pode consultar o status de sua manutenção e histórico de compras via terminal de consulta ou QR Code no comprovante.Gerente (Administrador): Responsável pela auditoria, gestão estratégica e cadastro de funcionários. 

## 3. Processo de Cadastro e Endereços: 

Para qualquer transação, o cliente deve possuir um cadastro contendo: nome completo (ou razão social), CPF ou CNPJ, e-mail, telefone e data de nascimento.Multi-Endereço: O sistema permite vincular vários endereços ao perfil (ex: cobrança e entrega domiciliar), compostos por rua, número, bairro, CEP e cidade.Colaboradores: O cadastro de técnicos exige comprovação de maioridade (16+ anos) e anexo de documento de identidade para auditoria interna.

 ## 4. Vendas e Gestão de Estoque: (N:N) 

O catálogo de produtos é híbrido, contendo itens novos e componentes de reposição.Venda Direta: Um Pedido pode conter vários Produtos, e um Produto pode estar em diferentes Pedidos, caracteriza funcionalidade que estende o processo de fechamento de venda, sendo opcional ao cliente. 

 ## 5. Assistência Técnica e Ordens de Serviço (1:1 e 1:N) 

Ao deixar um equipamento para conserto, o sistema gera uma Ordem de Serviço (OS).Cada OS é vinculada a um único Equipamento por vez (1:1), identificado por número de série.Um Cliente pode possuir várias Ordens de Serviço abertas (1:N).Processo Técnico: O técnico preenche um diagnóstico detalhado. A "Aprovação de Orçamento" pelo cliente dispara uma notificação automática para o técnico iniciar o reparo.A precificação de serviços pode ser por hora técnica ou por valor fixo de mão de obra. 

##  6. Logística e Controle Financeiro: 
Para vendas que exigem entrega (como gabinetes pesados), o sistema aciona parceiros de frete logístico. Toda movimentação financeira é monitorada pelo Gerente, que gera relatórios de depreciação de estoque e produtividade da equipe técnica para manter a eficiência operacional da loja

