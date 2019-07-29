# @progital/gatsby-theme-wp-source-one

## Description

The idea behind this theme is making a one-stop solution for a WordPress blog owner who wants to switch to Gatsby powered frontend. Simple to configure that works out of the box. For a common use scenario - standard WordPress installation, basic posts and pages content - only a source url is needed.

```javascript
{
    resolve: '@progital/gatsby-theme-wp-source-one',
    options: {
        wordPressUrl: 'https://your.wordpress.site/',
    },
}
```

### Dependencies

This theme uses GraphQL API to source WordPress content. Therefore the source WordPress site must use the [WPGraphQL](https://www.wpgraphql.com/) plugin.

## How to install

```bash
yarn add @progital/gatsby-theme-wp-source-one
```

```javascript
{
  resolve: '@progital/gatsby-theme-wp-source-one',
  options: {
    wordPressUrl: 'https://your.wordpress.site/',
    menuLocation: 'MENU_1',
  },
},
```

## Available options

`wordPressUrl` - source site.

`uploadsUrl` - _(optional)_ WordPress uploads folder. Uses default if this option not set.

`processPostTypes` - _(optional)_ post types to process. You can include [custom post types](https://docs.wpgraphql.com/getting-started/custom-post-types) as defined in WPGraphQL.

`menuLocation` - WordPress [menu location](https://codex.wordpress.org/Function_Reference/register_nav_menus) slug. [Sanitized](https://github.com/wp-graphql/wp-graphql/blob/f92e9f4dc11db987f74ff458ab05f42a3e76b866/src/Type/WPEnumType.php#L32).

### menuLocation

A build would break if `menuLocation` was not cofigured right. The location slug comes from `register_nav_menus` function call in `functions.php` ([example](https://github.com/WordPress/twentynineteen/blob/5385371bb8a78ead93543ed2796517918b1a63bd/functions.php#L59)) of your WordPress theme.

### siteMetadata

```javascript
siteMetadata: {
    title: 'Site title',
    author: 'Author name',
    description: 'Site description',
    social: [
        {
            name: 'twitter',
            url: 'https://twitter.com/your_twitter',
        },
    ],
},
```

## Features

- Uses WordPress menu from a defined location. Only first level menu items are displayed. "Home" menu item is automatically added if there is no menu item linking to the site homepage.
- Supports post categories.
- Downloads images embedded in posts/pages/CPTs and hosted on the WordPress site. Converts `<img>` tags to Gatbsy `<Img>` component.
- Downloads featured images (post thumbnails) and makes them available as Gatsby `<Img>` component.
- Downloads all other files linked in posts/pages/CPTs and hosted on the WordPress site. Serves them from the Gatsby static folder.
- Links embedded in posts that lead to other pages are converted to `<Link>` component.

This theme utilizes the [gatsby-wpgraphql-inline-images](https://github.com/progital/gatsby-wpgraphql-inline-images) plugin for most of the content processing.

## Examples of usage

I have a WordPress site serving demo content at [https://noh.progital.dev](https://noh.progital.dev/). It uses the default twentynineteen theme so there is no need to configure menu location. For demoing CPTs the "Event" custom post type was added.

```javascript
{
    resolve: '@progital/gatsby-theme-wp-source-one',
    options: {
        wordPressUrl: 'https://noh.progital.dev/',
        processPostTypes: ['Page', 'Post', 'Event'],
    },
},
```

The demo site repo is at https://github.com/progital/gatsby-theme-wp-source-one-demo-site and a live demo is available at [https://gatsby-wp-theme.progital.dev](https://gatsby-wp-theme.progital.dev/).

## Shout Outs

Special thanks for inspiration and some borrowed code go to:

https://github.com/jlengstorf  
https://github.com/jasonbahl  
https://wordpress.org/themes/juliet/  

Demo site uses images by [Unsplash](https://unsplash.com/) and text content from [Wikipedia](https://www.wikipedia.org/).

## How to contribute

This is a WIP and any contribution, feedback and PRs are very welcome. Issues is a preferred way of submitting feedback, but you can also email to [andrey@progital.io](mailto:andrey@progital.io).
