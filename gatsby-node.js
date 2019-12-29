exports.createPages = ({ actions }) => {
  actions.createRedirect({
    fromPath: `https://filipez.netlify.com/`,
    toPath: `https://filipez.tech/`,
    isPermanent: `true`,
  })
}
