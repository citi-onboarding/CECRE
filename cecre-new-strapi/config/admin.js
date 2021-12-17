module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '337f1e8defa9ff2c0ad239876c1e6846'),
  },
});
