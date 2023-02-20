# Quick order

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)]

Quick order component, takes you to the checkout automatically, you have to insert the SKU of the product and the quantity.

![image](https://user-images.githubusercontent.com/94373834/220158850-8679cb92-fe70-49e0-8b1b-26d1c825dcfc.png)


## Configuration 

1. Import the  Quick order's app to your theme's dependencies in the manifest.json, for example:
```json
  "dependencies": {
    "vendor.quick-order": "0.x"
  }
 ```
 
 2. Add the Quick order block to the store-theme. For example:
```json
  "flex-layout.row": {
    "children": [
      "quick-order"
    ]
  }
   ```
|  Block name     | Description                                     |
| -------------- | ----------------------------------------------- |
| `quick-order` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)  Top level block that must be declared in the store theme block to render a quick order block.   |

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

|CSS HANDLES |
| ----------- | 
|`containerPrincipal`|
|`form`|
|`containerTwo`|
|`containerQuantity`|



## Contributors

1. [Danilo Ibañez](https://www.linkedin.com/in/danilo-ib%C3%A1%C3%B1ez-519a4023a/)

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
