Parcel bundler comes with Post-css out of the box.
Post-css - specify plugin - autoprefixer - automatically will install npm
in .postcssrc -->
```
{
  "plugins": {
    "autoprefixer": {
      "overrideBrowserslist": [
          "> 1%",
          "last 4 versions",
          "ie >= 9"
        ]
    }
  }
}
```
or it can in package.json after dependency
```
  "postcss": {
    "plugins": {
      "autoprefixer": {
        "overrideBrowserslist": [
          "> 1%",
          "last 4 versions",
          "ie >= 9"
        ]
      }
    }
  },
  ```