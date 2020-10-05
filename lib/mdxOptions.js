const readingTime = require('reading-time');

const extractFrontMatter = (mdxContent) => {
  return ({
    headings: mdxContent.match(/#+\s+.*/gi) && mdxContent.match(/#+\s+.*/gi).reduce((accumulator, heading) => {
      let acc = accumulator.slugTree || [];
      let slugTree = [];
      let duplicates = accumulator.duplicates || {};
      let slug = heading.replace(/^#+\s+/, '').replace(/[\/]/gi, '').trim().replace(/\s/gi, '-').toLowerCase();

      if (duplicates[slug] === 0 || duplicates[slug] > 0) {
        duplicates[slug] = duplicates[slug] + 1;
        slug = slug + '-' + duplicates[slug];
      } else {
        duplicates[slug] = 0;
      }

      const inputObj = {
        level: heading.split(' ')[0].length,
        heading: heading.replace(/^#+\s+/, '').trim(),
        slug: slug,
        subheading: []
      };

      if (acc && acc[acc.length - 1] && acc[acc.length - 1].level < heading.split(' ')[0].length) {
        if (acc[acc.length - 1].subheading[acc[acc.length - 1].subheading.length - 1] && acc[acc.length - 1].subheading[acc[acc.length - 1].subheading.length - 1].level < heading.split(' ')[0].length) {
          acc[acc.length - 1].subheading[acc[acc.length - 1].subheading.length - 1].subheading.push(inputObj);
        } else {
          acc[acc.length - 1].subheading.push(inputObj);
        }
        slugTree = [...acc];
      } else {
        slugTree = [...acc];
        slugTree.push(inputObj);
      }

      return { slugTree, duplicates };
    }, {}).slugTree,
    wordCount: mdxContent.split(/\s+/gu).length,
    readingTime: readingTime(mdxContent)
  });
};

const mdxOptions = {
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  usesSrc: false,
  remarkPlugins: [
    require('remark-slug'),
    [require('remark-autolink-headings'), { behavior: 'wrap', linkProperties: { ariaHidden: true, tabIndex: -1, className: ['autolink-heading'] } }],
    [require('remark-code-screenshot')],
    require('remark-code-titles')
  ],
  rehypePlugins: [
    require('mdx-prism')
  ],
  extendFrontMatter: {
    process: extractFrontMatter
  }
};


module.exports = mdxOptions;
module.exports['mdxOptions'] = mdxOptions;
module.exports['extractFrontMatter'] = extractFrontMatter;
