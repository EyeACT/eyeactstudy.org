import rehypeDocument from 'rehype-document';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeFormat from 'rehype-format';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

/**
 * Custom plugin to wrap sections in cards
 */
function rehypeWrapInCards() {
  return (tree: any) => {
    const children = tree.children;
    const wrappedChildren: any[] = [];
    let currentCard: any = null;

    for (let i = 0; i < children.length; i++) {
      const node = children[i];

      if (node.type === 'element' && node.tagName === 'h2') {
        // Close the current card if it exists
        if (currentCard) {
          wrappedChildren.push(currentCard);
        }

        // Start a new card
        currentCard = {
          type: 'element',
          tagName: 'div',
          properties: {
            className: [
              'bg-white',
              'rounded-lg',
              'shadow-lg',
              'px-6',
              'mb-6',
              'pb-4',
              'pt-1',
              'border-gray-200',
              'border-[1px]',
            ],
          },
          children: [node], // Add the current <h2> as the first child
        };
      } else if (currentCard) {
        // Add content to the current card
        currentCard.children.push(node);
      } else {
        // Push content outside cards (e.g., <h1>)
        wrappedChildren.push(node);
      }
    }

    // Push the last card if it exists
    if (currentCard) {
      wrappedChildren.push(currentCard);
    }

    // Replace the original children with the wrapped ones
    tree.children = wrappedChildren;
  };
}

/**
 * Converts markdown to HTML with Tailwind cards
 */
export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHighlight)
    .use(rehypeWrapInCards) // Apply card wrapping
    .use(rehypeDocument, {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Markdown Converter' },
      ],
    })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeExternalLinks, {
      target: `_blank`,
      rel: [`noopener`, `noreferrer`, `nofollow`],
    })
    .process(markdown);

  return result.toString();
}
