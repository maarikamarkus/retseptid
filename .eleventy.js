module.exports = function (eleventyConfig) {
  global.filters = eleventyConfig.javascriptFunctions;
  eleventyConfig.setPugOptions({
      globals: ['filters']
  });
  eleventyConfig.addPassthroughCopy('css')
  return {
    passthroughFileCopy: true
  }
};