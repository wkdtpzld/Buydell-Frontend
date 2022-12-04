module.exports = {
  client: {
    include: ['.src/**/*.tsx'],
    tagName: 'gql',
    service: {
      name: 'buyDell-backend',
      url: 'http://localhost:3000/graphql'
    }
  }
}