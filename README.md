# Dropdown Menu by Jimmy108

This is a simple dropdown menu package with functionality for implementing both dropdown menu on hover and on click. Necessary CSS for dropdown to function 'out of the box' is included in the package.

NPM package:
https://www.npmjs.com/package/dropdown-menu-jimmy108

## Usage

1. Install the package provided in the 'Install' section and then import it:

```js
import { dropdownOnHover, dropdownOnClick } from 'dropdown-menu-jimmy108';
```

2. There are 2 functions in this package, dropdown on hover and dropdown on click. They both take 2 required parameters and one optional:

```js
dropdownOnHover(para1, para2, optional);
```

- para1 is for the trigger element, e.g. a button or a navbar element which activates the dropdown menu;

- para2 is the dropdown menu element itself;

- optional parameter has its default set as true. That means CSS's 'position: relative;' will be applied to the first parameter(para1). If, however, you'd like to specify a different container as your relative position you can add 'false' as your optional parameter and set it directly in CSS.

As mentioned above this package includes two javascript functions and necessary CSS for them to work but it does not include HTML. User is expected to write their own HTML structure how it suits them.
