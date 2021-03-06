# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v2.2)](https://blog.tailwindcss.com/tailwindcss-2-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`Just-in-Time Mode`](https://tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment))

<!-- 1.Create Next App

1. npx create-next-app
2. add header, main, and footer

2.Fix SSR iSSUE on MaterialUI

1. add \_documents.js
2. add code to fix styling issues

3.Project

1.  add data.js
2.  add images
3.  render products

4.Add header links

1.  add cart and login links
2.  use next/links and mui.links
3.  add css for header links

5.Route Product Detail Page

1. make product card linkeable
2. creat/product/[slug] route
3. find product based on slug

6.Creat Product Detail Page

1. create 3 columns
2. show image in first column
3. show product info in the second column
4. show add to cart action in the second column
5. add styles

7.Add MaterialUI Theme
    1. create theme
    2.  use theme provider
    3.  add h1 and h2 styles
    4.  set theme colors
11. Create Application Context
    1.  define context and reducer
    2.  set darkMode flag
    3.  create store provider
    4.  use it on layout

12. Connect To MongoDB
    1.  install mongodb
    2.  install mongoose
    3.  define connect and disconnect
    4.  use it in the api
13. Create Products API
    1.  create product model
    2.  seed sample data
    3.  create /api/products/index.js
    4.  create product api
-->
