# Strapi plugin page builder

Based on the Strapi 3.0 Plugin [Webpage Builder](https://github.com/uwizy/strapi-plugin-webpage-builder), this plugin is a wrapper for the awesome [GrapesJS](https://grapesjs.com/) Web Builder Framework for Strapi 4.3 or later.

You can find the official GrapesJS Demo [here!](https://grapesjs.com/demo.html) You want to contribute to [GrapesJS](https://grapesjs.com/)? [Here](https://github.com/artf/grapesjs) is the official repository.

> :warning: **This plugin does not work yet.** See issues tab for more information. If you want to try it nonetheless, follow install instructions below or visit this page later again.

<img alt="Image of the GrapesJS web builder" src="https://grapesjs.com/img/sc-grapesjs-newsletter-demo.jpg">

## ⏳ Installation
Option 1:
1. Clone this repository
2. Run
   - `npm install`
   - `npm build`
   - `npm link`
3. Inside your strapi application: Run `npm link strapi-plugin-page-builder`

Option 2:
1. Clone this repository directly into your Strapi App under `src/plugins/page-builder`
2. Run `npm install` inside the plugins subfolder

Add the plugin to your `config/plugins.ts` file like this:
```typescript
export default ({ env }) => ({
   // ...
  // enable page-builder plugin
  "page-builder": {
    // my-plugin is going to be the internal name used for this plugin
    enabled: true,
    // Set Path for resolve depending on plugin location
    // resolve: "./node_modules/strapi-plugin-page-builder",
    resolve: "./src/plugins/page-builder/", // Recommended
  },
   // ...
});
```

To force your strapi admin panel to rebuild, please run `npm run build -- --clean`.

## 🖐 Requirements

The requireemnts to install the Page Builder Strapi plugin is the same as those to install Strapi.

Please refer to the official Strapi installation requirement doc here: [Installation Requirements](https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html).

**Minimum environment requirements**

- Node.js `>=14.x.x`
- NPM `>=6.x.x`
- Typescript `>=4.6.x`

**Supported Strapi versions**:

- Strapi v4.3.0 (recently tested)
- Strapi v4.3.x

> The Page Builder Strapi plugin is designed for **Strapi v4.3**. It won't work with Strapi v3.x.

## 📝 License

Copyright &copy; 2022 - [Jens Uwe Becker](https://root-itsolutions.de/)

[MIT License](LICENSE.md)

Special Thanks to [GrapesJS](https://grapesjs.com/) for their awesome framework!
And Thanks to [Uwizy](https://github.com/uwizy) for the original plugin idea [Webpage Builder](https://github.com/uwizy/strapi-plugin-webpage-builder).
