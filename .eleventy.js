const { DateTime } = require("luxon")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/css")
  eleventyConfig.addPassthroughCopy("src/assets/images")
  eleventyConfig.addPassthroughCopy("src/assets/js")
  eleventyConfig.addPassthroughCopy("src/admin")

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
  })

  eleventyConfig.addFilter("filterRelated", (collection = [], related = []) => {
    const filtered = collection.filter((page) =>
      related.includes(page.fileSlug)
    )
    return filtered.sort(
      (a, b) => related.indexOf(a.fileSlug) - related.indexOf(b.fileSlug)
    )
  })

  // eleventyConfig.addFilter(
  //   "relative",
  //   (page, root = "/") =>
  //     `${require("path").relative(page.filePathStem, root)}/`
  // )

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
