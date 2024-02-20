// function to generate markdown for README
function generateMarkdown(data) {
  // License badge URLs
  const licenseBadges = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'GNU GPLv3': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'ISC': 'https://img.shields.io/badge/License-ISC-blue.svg',
    'None': ''
  };

  // Get the badge URL for the chosen license
  const licenseBadge = licenseBadges[data.license];

  // Construct the markdown
  let markdown = `# ${data.title}\n\n`;

  // Add the license badge
  if (licenseBadge) {
    markdown += `![License](${licenseBadge})\n\n`;
  }

  markdown += `## Description\n${data.description}\n\n`;
  markdown += `## Table of Contents\n`;
  markdown += `- [Installation](#installation)\n`;
  markdown += `- [Usage](#usage)\n`;
  markdown += `- [License](#license)\n`;
  markdown += `- [Contributing](#contributing)\n`;
  markdown += `- [Tests](#tests)\n`;
  markdown += `- [Questions](#questions)\n\n`;

  markdown += `## Installation\n${data.installation}\n\n`;
  markdown += `## Usage\n${data.usage}\n\n`;
  markdown += `## License\nThis project is licensed under the ${data.license} license.\n\n`;

  if (data.contributing) {
    markdown += `## Contributing\n${data.contributing}\n\n`;
  }

  if (data.tests) {
    markdown += `## Tests\n${data.tests}\n\n`;
  }

  markdown += `## Questions\nFor questions about this project, please contact [${data.github}](https://github.com/${data.github}) at ${data.email}.\n`;

  return markdown;
}

module.exports = generateMarkdown;