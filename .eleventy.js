const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function(eleventyConfig) {
    
    // File Passthrough
    eleventyConfig.addPassthroughCopy("reset.css");
    eleventyConfig.addPassthroughCopy("style.css");

    // Plugins
	// Add target=blank custom code
    const mdOptions = {
        html: true,
        breaks: true,
        linkify: true,
    };

    const markdownLib = markdownIt(mdOptions)
        .use(markdownItAttrs)
        .disable("code");
    
    eleventyConfig.setLibrary("md", markdownLib);
};