module.exports = {
  siteMetadata: {
    title: `Turq`,
    description: `Make direct democracy viable by enabling citizens to draft and submit their own legislation.`,
    author: `@michaelbconlon`,
    competitionRules: `This challenge is open to all citizens of the United States of America.\n\nSee the terms and conditions [here](/terms/Terms_Conditions.pdf).\n\n Teams that do not comply with the rules, terms and conditions may be disqualified.`,
    legislationSubtext: `Be it enacted by the Senate and House of Representatives in General Court assembled, and by the authority of the same, as follows:`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
