module.exports = function (eleventyConfig) {
  global.filters = eleventyConfig.javascriptFunctions;
  eleventyConfig.setPugOptions({
      globals: ['filters']
  });

  eleventyConfig.addWatchTarget('./tailwind.config.js')
  eleventyConfig.addWatchTarget('./css/style.css')

  eleventyConfig.addPassthroughCopy('assets')
  return {
    passthroughFileCopy: true
  }
};