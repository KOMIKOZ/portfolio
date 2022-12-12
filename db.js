const academic = require("./data/academic");
const languages = require("./data/languages");
const personalInfo = require("./data/personalInfo");
const certifications = require("./data/certifications");
const projects = require("./data/projects");
const companies = require("./data/companies");
const blogs = require("./data/blogs")
const experience = require("./data/experience")
const playlist = require("./data/playlist")
const contributions = require("./data/contributions.json")
const comments = require("./data/comments.json")

module.exports = {
  academic,
  languages,
  personalInfo,
  certifications,
  projects,
  companies,
  blogs,
  experience,
  playlist,
  contributions,
  comments
}


// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

 

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };
