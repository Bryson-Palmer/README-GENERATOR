// function to generate markdown for README
function generateMarkdown( data ) {

  return `## <a id='back-to-top' > </a>
  # ${data.title}
  ${data.description}
  ${data.badge}
  ________________________________________

  ## Table of Contents
  [Criteria](#criteria) </br>
  [Links](#links) </br>
  [Screenshot](#screenshot) </br>
  [Future Development](#future-development) </br>
  [Installation](#installation) </br>
  [Usage](#usage) </br>
  [License](#license) </br>
  [Contributing](#contributing) </br>
  [Tests](#tests) </br>
  [Questions](#questions) </br>

  ## 💼 <a id='criteria'></a> Criteria
  \`\`\`
  ${data.criteria}
  \`\`\`
  ________________________________________

  ## 🔗 <a id='links'></a> Links
  Link to [**GitHub**](${data.projectRepo}) </br>
  Live **URL** for [**${data.title}**](${data.liveLink}) </br>
  ________________________________________

  ## 📸 <a id='screenshot'></a> Screenshot
  * ![screenshot](${data.screenshot})

  ## 🔍 <a id='future-development'></a> Future Development
  * ${data.futureDevelopment}

  ## 🔧 <a id='installation'></a> Installation Instructions
  * ${data.installation}

  ## ⚙️ <a id='usage'></a> Usage Information
  * ${data.usage}

  ## 🏆 <a id='license'></a> License
  ${data.license}
  \`\`\`
  ${data.notice}
  \`\`\`

  ## 🏛️ <a id='contributing'></a> Contribution Guidelines
  * ${data.contributing}

  ## ✅ <a id='tests'></a> Test Instructions
  * ${data.tests}

  ## 📡 <a id='questions'></a> Questions?
  If you have any questions, please contact me at: </br>
  * My GitHub: [${data.gitHub}](https://github.com/${data.gitHub}) </br>
  * My Email: [${data.email}](mailto:${data.email}) </br>

  [Back to Top](#back-to-top)
`;
}

module.exports = generateMarkdown;
