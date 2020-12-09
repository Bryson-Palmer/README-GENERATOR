// function to generate markdown for README
function generateMarkdown( data ) {

  return `## <a id='back-to-top' > </a>
  # ${data.title}   ${licnseBadge( data.license )}
  ${data.description}
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
  ![screenshot](${data.screenshot})

  ## 🔍 <a id='future-development'></a> Future Development
  ${data.futureDevelopment}

  ## 🔧 <a id='installation'></a> Installation Instructions
  ${data.installation}

  ## ⚙️ <a id='usage'></a> Usage Information
  ${data.usage}

  ## 🏆 <a id='license'></a> License
  ${data.license}\n
  Copyright ${data.year}   ${data.name}

  \`\`\`
  ${licenseText(data.license)}
  \`\`\`

  ## 🏛️ <a id='contributing'></a> Contribution Guidelines
  ${data.contributing}

  ## ✅ <a id='tests'></a> Test Instructions
  ${data.tests}

  ## 📡 <a id='questions'></a> Questions?
  If you have any questions or would like to follow my development, please contact me at: </br>
  * My GitHub: [${data.gitHub}](https://github.com/${data.gitHub}) </br>
  * My Email: [${data.email}](mailto:${data.email}) </br>

  [Back to Top](#back-to-top)
`;
}

function licenseText( data ) {
  if (data == 'Apache License 2.0') {
    return `Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`;

  } else if (data == 'GNU General Public License v3.0') {
    return `This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.`;

  } else if (data == 'MIT License') {
    return `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;

  } else
    return `An OSS license allows the licensor/author (original owner) to grant the licensee (collaborators) the right to copy, modify, and possibly redistribute the source code or content of the software project. This also sets in place the original copyright of the work which typically means that the original author retains the ownership of the copyrights, and is allowing the licensee to simply use those rights as granted in the license as long as they maintain the conditions of the license. \n`
}

function licnseBadge( data ) {
  if (data == 'Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  
  } else if (data == 'GNU General Public License v3.0') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  
  } else if (data == 'MIT License') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  
  } else
    return `[![noBadge: IDK](https://img.shields.io/badge/noBadge-IDK-blue)](http://shields.io/category/license)`
}

module.exports = generateMarkdown;
