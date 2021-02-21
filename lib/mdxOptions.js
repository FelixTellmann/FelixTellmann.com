const readingTime = require('reading-time');

const extractFrontMatter = (mdxContent) => {
  const makeSubheading = ({ level, title, slug }) => {
    return {
      subLevel: level,
      subTitle: title,
      subSlug: slug,
    };
  };

  return {
    headings: process.env.NODE_ENV === 'production' /*|| process.env.NODE_ENV === 'development'*/ &&
        mdxContent.match(/#+\s+.*/gi) &&
        mdxContent.match(/#+\s+.*/gi).reduce((accumulator, heading) => {
          const acc = accumulator.slugTree || [];
          let slugTree;
          const duplicates = accumulator.duplicates || {};

          let slug = heading
              .replace(/(^#+\s+)?[;\\/:*?"<>|&'()]?/gi, '')
              .replace(/[/]/gi, '')
              .trim()
              .replace(/\s/gi, '-')
              .toLowerCase();

          if (duplicates[slug] === 0 || duplicates[slug] > 0) {
            duplicates[slug] += 1;
            slug = `${slug}-${duplicates[slug]}`;
          } else {
            duplicates[slug] = 0;
          }

          const inputObj = {
            level: heading.split(' ')[0].length,
            title: heading.replace(/^#+\s+/, '').trim(),
            slug,
            subheading: [],
          };

          if (acc && acc[acc.length - 1] && acc[acc.length - 1].level < heading.split(' ')[0].length) {
            if (
                acc[acc.length - 1].subheading[acc[acc.length - 1].subheading.length - 1] &&
                acc[acc.length - 1].subheading[acc[acc.length - 1].subheading.length - 1].subLevel < heading.split(' ')[0].length
            ) {
              if (acc[acc.length - 1].subheading[acc[acc.length - 1].subheading.length - 1].subheading) {
                acc[acc.length - 1].subheading[acc[acc.length - 1].subheading.length - 1].subheading.push(makeSubheading(inputObj));
              }
            } else {
              acc[acc.length - 1].subheading.push(makeSubheading(inputObj));
            }
            slugTree = [...acc];
          } else {
            slugTree = [...acc];
            slugTree.push(inputObj);
          }

          return { slugTree, duplicates };
        }, {}).slugTree,
    wordCount: mdxContent.split(/\s+/gu).length,
    readingTime: readingTime(mdxContent),
  };
};

const mdxOptions = {
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  usesSrc: false,
  remarkPlugins: [
    [require('remark-slug')],
    [require('remark-autolink-headings'), { behavior: 'wrap', linkProperties: { ariaHidden: true, tabIndex: 0, className: ['autolink-heading'] } }],
    [require('remark-code-titles')],
  ],
  rehypePlugins: [process.env.NODE_ENV === 'production' /*|| process.env.NODE_ENV === 'development'*/ ? [require('rehype-prism-enhanced'), { showLineNumbers: true }] : [require('rehype-prism')]],
  extendFrontMatter: {
    process: extractFrontMatter,
  },
};

module.exports = mdxOptions;
module.exports.mdxOptions = mdxOptions;
module.exports.extractFrontMatter = extractFrontMatter;
