# Arctic Grey Ltd. Challenge: Shop

## Description:

Your description is clear and well-written, but I can make slight adjustments for better flow and clarity. Here's the improved version:

The project is a headless storefront for a Shopify store, developed using the Hydrogen framework. It leverages Shopify’s Storefront API to dynamically fetch product and inventory data, delivering a fast and responsive shopping experience.

The design is optimized for screens 1600px wide or larger and features interactive animations on containers and product cards/images, creating an engaging and visually appealing environment for users.

## Table of Contents

1. [Requirements](#requirements)
2. [Implementation](#implementation)
3. [Components](#components)
4. [Folder Structure](#folder-structure)
5. [Contributing](#contributing)
6. [License](#license)


## Getting started: 

### Requirements

- Node.js: 18.20+, 20.10 or higher (https://nodejs.org/en)
- A Node.js package manager: npm, Yarn 1.x, or pnpm.
- Git: 2.28.0 or higher
- Shopify CLI (Instalation guide: https://shopify.dev/docs/api/shopify-cli)

### Implementation:

First, you will need to create a Shopify partner account. Follow this guide: https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/getting-start to set a Storefront, so you you can get the required tokens to access to the Storefront API and successfully connect to your shop. 

Create an `.env` file with the following content:

```
SESSION_SECRET="foobar"
PRIVATE_STOREFRONT_API_TOKEN=shpat_****************************
PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID=shp_*************************
PUBLIC_STORE_DOMAIN=store-name.myshopify.com
PUBLIC_STOREFRONT_API_TOKEN=4bc1******************************

* optional:
PUBLIC_CUSTOMER_ACCOUNT_API_URL=https://shopify.com/724**********
PUBLIC_STOREFRONT_ID=29***
SHOP_ID=724**********
```

After this, you will be able to connect to your store. Populate your shop with products and create collections, and you will see them in the homepage!


### Instalation:

1. Clone this repository:

```bash
git clone https://github.com/VGardella/arcticgrey-assessment.git
```

2. Install needed dependencies: 

```bash
npm install
```

3. Local development:

```bash
npm run dev
```

4. Production deployment:

- Build the app:

```bash
npm run build
```

- Run the build:

```bash
npm run preview
```

### Technologies:

* React (Hydrogen): Framework used for building the UI.
* Shopify Storefront API: Permits to fetch product and cart data.
* Tailwind CSS: For styling the application.
* ESLint/Prettier: Mantains code quality and consistency.


## Usage:

This app builds a store homepage where some of the products of your shop will be shown. To completely appreciate the build, if you connect a Storefront make sure to have:
- A collections called 'Supplements' with, at least, 4 products.
- A collections called 'Bundles' with, at least, 4 products.

The shop pressents a hero section with a interactive header and animated, infinite carousel. The following section, titled 'Start with your Goals', includes mock cards that can be later linked to diferent blog entries. Our first interactive section, titled 'Supplements', takes products from the user shop from the 'Supplement' collection (refered before) and shows their corresponding pictures, prices, titles, descriptions, mock category metafield elements and mock user qualifications. Following this, there is a non-interactive, informative line-out titles 'Clean Supplements - Made For You'. The next section, called 'Real People. Real Results.' shows a still reel with interactive cards that change size on hover.

The third interactive section also uses product cards: it filters products from the collection 'Bundles'. The navegation bar has te posibility to connect to the product information to filter those with the selected tag (future implementation).

There are 3 diferent types of card components:
- Regular: show the information defined before;
- Alternative: has a form that gives the user the posibility to make a one-time purchase or to pay a reduced price if they subscribe to the store.
- Tags: instead of category metafield elements, they show tags defines when the product is created.

The next sections, titled 'Customized Protein Powder', 'Last Articles', and two without titles are non-interactive layouts.

### Future Enhancements:

- Mobile Responsiveness: Optimize for smaller screen sizes.
- Product Filtering: Add the posibility to filter bundles by tags.
- Blogs, Articles and Result videos: Add accesses to this entries in their corresponding sections.