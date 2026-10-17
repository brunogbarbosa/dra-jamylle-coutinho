# Dra. Jamylle Coutinho

Um único projeto Next.js, React e TypeScript, adaptado diretamente do código do template Premium Vendas V4. Hero cinematográfico, composição editorial, animações de entrada, arcos, retratos, experiência e seis registros reais com ampliação e comparação.

## Executar

Requer Node.js 20.9 ou superior e npm.

```sh
npm ci
npm run dev
```

Abra http://127.0.0.1:3000.

## Validar e compilar

```sh
npm run typecheck
npm run build
npm run start
```

## Importar na Vercel

1. Importe este repositório como um único projeto.
2. Use o framework **Next.js** e raiz **./**.
3. Instalação: `npm ci`. Build: `npm run build`. Mantenha o diretório de saída padrão do Next.js.
4. Não há variáveis de ambiente obrigatórias ou serviços externos de dados. A Vercel fornece automaticamente o domínio de produção usado nos metadados.

## Conteúdo e identidade

`data/site.ts` centraliza dados, contatos, resultados e todas as cores. Os tokens compartilhados são aplicados por `app/layout.tsx`; as folhas de estilo e módulos usam esses tokens, inclusive detalhes SVG.

| Cor | Hex |
| --- | --- |
| Grafite profundo | #10171B |
| Grafite dos textos | #20282B |
| Dourado suave | #CDB887 |
| Ouro envelhecido | #8B7956 |
| Marfim | #F5F2EA |
| Areia | #E8E2D6 |
| Branco quente | #FFFDF7 |
| Cinza de apoio | #686C68 |

A identidade foi interpretada a partir do perfil fornecido no anexo 11 e das fotografias reais: grafite, neutros claros e dourado discreto. O monograma editorial JC foi criado para este projeto.

WhatsApp: +55 85 99222-5327. Instagram: @dra.jamyllecoutinho. Foram utilizados somente o nome, harmonização facial, Método JC FULL e a proposta presentes nos materiais enviados. Não foram incluídos qualificações, depoimentos ou endereço.

## Fotografias e galeria

Os dez arquivos fotográficos fornecidos foram copiados sem retoque, alteração de rosto, pele ou resultados. Os registros de resultados usam os próprios originais também na ampliação. Os seis registros recebidos são comparativos horizontais, apresentados lado a lado. O controle de comparação mostra recortes do mesmo original; não gera ou altera resultados. O código preserva também o comportamento de registros verticais e imagens únicas.

Use os botões de ampliação, anterior/próximo, comparação e fechamento. O teclado permite Escape e setas; o controle de comparação é acessível por teclado. Os menus e a galeria usam diálogos nativos com gerenciamento de foco. A preferência por movimento reduzido é respeitada.

O favicon personalizado está em `app/icon.svg`. Nenhuma imagem OG, social card ou imagem de compartilhamento foi criada. O projeto não usa Sites.

## Conferência

Consulte `VALIDACAO.md` para as verificações feitas no navegador e em produção local.
