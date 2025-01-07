// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![License: ${license.shortName}](${license.badge})](${license.link})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[${license.name}](${license.link})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This is covered by ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## installation_Instruction
${data.Install}
## usage_Information
${data.Usage}
## contribution_Guidelines
${data.Contribution}
## testing_Instructions
${data.Testing}
## License
${renderLicenseSection(data.license)}
## Questions
See ${data.githubUsername} for more information and other projects

Contact me at ${data.Email} with other question
`;
}

export default generateMarkdown;
