# Nuxt kit

> Nuxt Projectのスタートアップ

開発していて良さそうだなと思った構成はこちらに追加していきたい

## 対応項目

- [x] Vuetify
- [x] ダークモードを検知するplugin(./plugins/isDarkmode.js)を追加
  - Useage : `this.$browserDarkmode()`で使える.
  - 状態はLocalStorageに保存される.
  - Vuetifyのテーマを変更する場合は以下ようにすればいい
  ```js
    mounted() {
      this.$vuetify.theme.dark = this.$browserDarkmode()
    },
    methods: {
      switchDarkmode() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        localStorage.setItem('_darkmode', this.$vuetify.theme.dark)
      }
    }
  ``` 

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
