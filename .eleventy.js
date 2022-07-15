const { DateTime } = require("luxon")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/css")
  eleventyConfig.addPassthroughCopy("src/assets/images")
  eleventyConfig.addPassthroughCopy("src/assets/js")
  eleventyConfig.addPassthroughCopy("src/admin")

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
  })

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`)

  // Import prior to `module.exports` within `.eleventy.js`
  const slugify = require("slugify")

  eleventyConfig.addFilter("slug", (str) => {
    if (!str) {
      return
    }

    return slugify(str, {
      lower: true,
      strict: true,
      remove: /["]/g,
    })
  })

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  }
}

//  eleventyConfig.addFilter(
//    "relative",
//    (page, root = "/") => `${require("path").relative(page.filePathStem, root)}/`
//  )
