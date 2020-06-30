module.exports = {
  siteMetadata: {
    title: `Turq`,
    description: `Make direct democracy viable by enabling citizens to draft and submit their own legislation.`,
    author: `@michaelbconlon`,
    competitionRules: `This challenge is open to all citizens of the United States of America.\n\nSee the terms and conditions [here](/terms/Terms_Conditions.pdf).\n\n Teams that do not comply with the rules, terms and conditions may be disqualified.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
