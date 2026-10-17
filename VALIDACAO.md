# Validação da entrega

Conferência em Chromium, usando o build de produção local.

| Área | Verificação | Resultado |
| --- | --- | --- |
| Build | `npm run typecheck` e `npm run build` | Aprovado |
| Desktop | 1440 × 900 e 1920 × 1080 | Aprovado |
| Mobile | 390 × 844 e 320 × 740 | Aprovado |
| Navegação | Fundo transparente, sem gradiente próprio, borda, sombra ou backdrop-filter | Aprovado |
| Camadas do hero | Fotografia começa em y=0, abaixo do nav na pilha de camadas | Aprovado |
| Hero | Transição ampla no desktop; composição mobile independente; rosto sem filtro uniforme | Conferência visual aprovada |
| Retratos | Cabeça e cabelo preservados; retratos das demais seções usam contain | Conferência visual aprovada |
| Paleta | Tokens compartilhados nos capítulos, módulos, ícones e detalhes SVG | Aprovado |
| Largura | Sem rolagem horizontal nas quatro larguras, em todas as seções | Aprovado |
| Menu mobile | Abrir, Escape, fechar, navegar a Resultados e restaurar foco | Aprovado |
| Galeria | Seis registros originais, ampliação, comparação, range e retorno ao original | Aprovado nas quatro larguras |
| Teclado da galeria | Setas anterior/próximo, Escape e retorno de foco ao botão de abertura | Aprovado |
| Contatos | Todos os links externos apontam ao WhatsApp 5585992225327 ou Instagram dra.jamyllecoutinho | Aprovado |
| Favicon | SVG JC personalizado, resposta HTTP 200 | Aprovado |
| Compartilhamento | Imagem fornecida, otimizada em JPEG a 1200 × 630 px (137.901 bytes); metadados Open Graph e Twitter e resposta HTTP 200 | Aprovado |
| Navegador | Sem exceções de JavaScript e sem respostas de erro nos recursos carregados | Aprovado |

Os dez arquivos fotográficos são cópias binárias dos anexos originais. A galeria usa os arquivos originais, sem otimização intermediária de imagem, e mantém todos os comparativos recebidos lado a lado. O texto informa que resultados são individuais. Os recortes de comparação respeitam a divisão de cada registro.

As capturas finais do hero em 1440 px, 1920 px e mobile acompanham a entrega. As fotografias não receberam retoques de pele, rosto ou resultados. Não há endereço, formação ou depoimentos inventados.

Os links de contato foram verificados no DOM; nenhuma mensagem foi enviada.
