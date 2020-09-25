const withPlugins = require('next-compose-plugins');
const SCSS = require('@zeit/next-sass');
const MdxEnhanced = require('next-mdx-enhanced');
const fs = require('fs');
const path = require('path');
const optimizedImages = require('next-optimized-images');
const mdxOptions = require('./lib/mdxOptions')

module.exports = withPlugins(
  [
    [optimizedImages, { optimizeImagesInDev: true }],
    [SCSS],
    process.env.NODE_ENV === 'development' ? [MdxEnhanced(mdxOptions)] : [MdxEnhanced]
  ],
  {
    webpack(config, { isServer }) {
      config.module.rules.push(
        {
          test: /\.(png|eot|otf|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader'
          }
        },
        {
          loader: 'sass-loader',
          test: /.scss$/,
          options: {
            sassOptions: {
              outputStyle: 'expanded',
              sourceMap: true
            }
          }
        },
        fs.readdirSync(path.join(process.cwd(), 'styles')).filter((file) => file.match(/^_.*\.scss$/)).length > 0 ? {
          enforce: 'pre',
          test: /.scss$/,
          loader: 'sass-resources-loader',
          options: {
            resources:
              fs
                .readdirSync(path.join(process.cwd(), 'styles'))
                .filter((file) => file.match(/^_.*\.scss$/))
                .map((file) => './styles/' + file)

          }
        } : {}
      );
      config.resolve.extensions = ['.ts', '.js', '.jsx', '.tsx', '.svg', '.scss'];
      return config;
    }
  }
);
