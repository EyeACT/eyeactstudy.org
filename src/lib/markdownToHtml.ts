/* eslint-disable @typescript-eslint/no-explicit-any */
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
 * Helper function to escape RegExp special characters.
 */
const escapeRegExp = (str: string) => {
  return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
};

/**
 * Custom plugin to wrap sections in Tailwind cards.
 * (Currently not used but can be enabled by setting the card parameter to true.)
 * Wraps every section starting with an <h2> into a card container
 * with classes:
 * "bg-white rounded-lg shadow-lg px-6 mb-6 pb-4 pt-1 border-gray-200 border-[1px]"
 */
const rehypeWrapInCardsPlugin = (params: { card: boolean }) => {
  return (tree: any) => {
    const { children } = tree;
    const wrappedChildren: any[] = [];
    let currentCard: any = null;

    for (let i = 0; i < children.length; i++) {
      const node = children[i];
      if (node.type === 'element' && node.tagName === 'h2') {
        // Close the current card if it exists
        if (currentCard) {
          wrappedChildren.push(currentCard);
        }
        // Create a new card with the current section
        currentCard = {
          type: 'element',
          tagName: 'div',
          properties: {
            className: params.card
              ? [
                  'bg-white',
                  'rounded-lg',
                  'shadow-lg',
                  'px-6',
                  'mb-6',
                  'pb-4',
                  'pt-1',
                  'border-gray-200',
                  'border-[1px]',
                ]
              : [],
          },
          children: [node], // Add the current <h2> as the first child
        };
      } else if (currentCard) {
        // Add content to the current card
        currentCard.children.push(node);
      } else {
        // Push content outside card (e.g., <h1>)
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
};

/**
 * Custom plugin to add Tailwind link classes.
 *
 * Adds classes "text-[#025988] hover:text-[#0e8cd0]" to every <a> tag.
 */
const rehypeAddLinkClasses = () => {
  return (tree: any) => {
    const visit = (node: any) => {
      if (node.type === 'element' && node.tagName === 'a') {
        if (!node.properties) {
          node.properties = {};
        }
        const existing = node.properties.className || [];
        let classes: string[] = [];
        if (typeof existing === 'string') {
          classes = existing.split(' ');
        } else if (Array.isArray(existing)) {
          classes = existing;
        }
        node.properties.className = [
          ...classes,
          'text-sky-500',
          'hover:text-sky-700',
        ];
      }
      if (node.children && Array.isArray(node.children)) {
        node.children.forEach(visit);
      }
    };
    visit(tree);
  };
};

/**
 * Custom plugin to highlight text nodes matching a search term.
 *
 * Traverses the tree and replaces text nodes that contain the search term
 * with fragments that wrap matching parts in a <span> with class "bg-yellow-200".
 */
const rehypeHighlightText = (options: { highlight: string }) => {
  return (tree: any) => {
    const { highlight } = options;
    if (!highlight || highlight.trim() === '') {
      return;
    }
    // Create a regular expression to match the search term
    const regex = new RegExp(`(${escapeRegExp(highlight.trim())})`, 'gi');

    /**
     * Recursively traverses an HTML node and its children to highlight text.
     *
     * @param {any} node - A node from the HTML to process.
     * @returns {any} The modified node with highlighted text fragments, or an array of nodes if the text node was split.
     */
    // sourcery skip: avoid-function-declarations-in-blocks
    function visit(node: any): any {
      if (node.type === 'text') {
        const value: string = node.value;
        // Check if the text node contains a match to the search term
        if (regex.test(value)) {
          // Split the text node into fragments based on the search term
          const fragments: any[] = [];
          let lastIndex = 0;
          value.replace(regex, (match, _p1, offset) => {
            if (offset > lastIndex) {
              fragments.push({
                type: 'text',
                value: value.slice(lastIndex, offset),
              });
            }
            // Highlight the matched text with a span element
            fragments.push({
              type: 'element',
              tagName: 'span',
              properties: { className: ['bg-yellow-200'] },
              children: [{ type: 'text', value: match }],
            });
            lastIndex = offset + match.length;
            return match;
          });
          // Add the remaining text after the last match
          if (lastIndex < value.length) {
            fragments.push({
              type: 'text',
              value: value.slice(lastIndex),
            });
          }
          return fragments;
        }
      }
      // Recursively process children
      if (node.children && Array.isArray(node.children)) {
        const newChildren = [];
        for (const child of node.children) {
          const replaced = visit(child);
          if (Array.isArray(replaced)) {
            // If the text node was split, add the fragments to the new children
            newChildren.push(...replaced);
          } else if (replaced) {
            // Otherwise, add the modified child
            newChildren.push(replaced);
          } else {
            // If the child was not modified, add it as is
            newChildren.push(child);
          }
        }
        // Update the children with the modified nodes
        node.children = newChildren;
      }
      return node;
    }
    visit(tree);
  };
};

/**
 * Converts markdown to HTML with:
 * - Tailwind card wrapping (optional)
 * - Custom link styling (text-[#025988] hover:text-[#0e8cd0])
 * - Highlighting text nodes based on a search term (optional)
 *
 * @param markdown The markdown string to convert.
 * @param card Whether to wrap sections in cards. (Default: false)
 * @param highlight (Optional) The search term to highlight.
 */
export default async function markdownToHtml(
  markdown: string,
  card = false,
  highlight = '',
) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHighlight)
    .use(rehypeWrapInCardsPlugin, { card })
    .use(rehypeAddLinkClasses)
    .use(rehypeHighlightText, { highlight })
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
