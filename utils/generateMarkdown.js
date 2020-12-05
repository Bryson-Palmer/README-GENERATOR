// function to generate markdown for README
function generateMarkdown( data ) {

  return `## <a id='back-to-top' > </a>
  # ${data.title}
  ${data.description}
  ________________________________________

  ## [✔️] Table of Contents
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

  ## <a id='criteria'></a> 💼 Criteria
  ```
  ${data.criteria}
  ```
  ________________________________________

  ## <a id='links'></a> Links
  [**Repository** on **GitHub**](${data.projectRepo})
  [Live **URL** for **${data.title}**](${data.liveLink})
  </br>
  ________________________________________

  ## 📸 <a id='screenshot'></a> Screenshot
  ![screenshot](${data.screenshot})

  ## <a id='future-development'></a> 🔍 Future Development
  * ${data.futureDevelopment}

  ## <a id='installation'></a> Installation Instructions
  * ${data.installation}

  ## <a id='usage'></a> Usage Information
  * ${data.usage}

  ## <a id='license></a> License
  * ${data.license}

  ## <a id='contributing'></a> Contribution Guidelines
  * ${data.contributing}

  ## <a id='tests'></a> Test Instructions
  * ${data.tests}

  ## <a id='questions'></a> 📡 Questions? Contact me at:
  [My GitHub](${data.gitHub})
  [My Email](${data.email})

  [Back to Top](#back-to-top)
`;
}

module.exports = generateMarkdown;
