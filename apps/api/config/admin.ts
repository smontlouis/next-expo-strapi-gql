export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1475e8364ef41b092dfc315738db3774'),
  },
});
