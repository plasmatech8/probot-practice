// Probot App

const { serverless } = require('@probot/serverless-gcf')

const appFn = app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  app.on('issues.opened', async context => {
    const issueComment = context.issue({ body: 'Thanks for opening this issue!' })
    return context.github.issues.createComment(issueComment)
  })
}

module.exports.probot = serverless(appFn)
