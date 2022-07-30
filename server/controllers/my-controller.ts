import '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = (strapi as any)
      .plugin('content-builder')
      .service('myService')
      .getWelcomeMessage();
  },
});
