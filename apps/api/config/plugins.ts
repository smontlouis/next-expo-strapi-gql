export default ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
        jwtSecret: env('JWT_SECRET'),
      },
    },
  },
})
