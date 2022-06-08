export default {
  graphql: {
    config: {
      depthLimit: 15,
      amountLimit: 10000,
      playgroundAlways: true,
      apolloServer: {
        tracing: true,
      },
    },
  },
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
    },
  },
}
