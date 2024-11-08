#Console (console)

Console

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

```
hype-casino-console
├─ .editorconfig
├─ .env.dev
├─ .env.mock
├─ .env.prod
├─ .env.stg
├─ .eslintignore
├─ .eslintrc.cjs
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ config
│  ├─ index
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ dev
│  │     │  └─ master
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ HEAD
│  │           └─ dev
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ d106c5619c0f5358dfd4145c373d4ed19e2395
│  │  ├─ 04
│  │  │  └─ c010a81ee74069e78d8178aa2177fe8066e794
│  │  ├─ 05
│  │  │  └─ cdb71b415476ca4b18105961bbece92358309d
│  │  ├─ 07
│  │  │  └─ 3259305cdb729bdaa012a73730bf692327caa7
│  │  ├─ 0e
│  │  │  └─ a5080c27a2703cde115c443502f0e1aeaf8dff
│  │  ├─ 14
│  │  │  └─ 23131b9c483ce50524f0387b491bc53ec870ec
│  │  ├─ 15
│  │  │  └─ 8a6497ffd2745191c0d3c74961cc33fc2ff935
│  │  ├─ 16
│  │  │  ├─ f3ba4e8d960392582597dc0e40eb408706b34f
│  │  │  └─ ff0011f1e60ce72657e90cd2b0e106607ea91e
│  │  ├─ 18
│  │  │  └─ a80bf81ec7c30ed6a0b699bd20a5e140af9dd3
│  │  ├─ 19
│  │  │  └─ 231c7fdcdbeec2833abf0d2d23c8ade446cf8f
│  │  ├─ 26
│  │  │  └─ 05a0df9848a1852aa9cc289c989506519b75de
│  │  ├─ 2a
│  │  │  └─ 6bbb628c63a1ddaf50225e456c22156bf1ea12
│  │  ├─ 2b
│  │  │  └─ 7d8ea45a4249ead047badbfb80cd27e38fe20a
│  │  ├─ 2f
│  │  │  └─ dfb5d6dfc13c5373593ca6cd132562de24f89a
│  │  ├─ 35
│  │  │  └─ b3960bed4112c5fd55422866db1f03c2206477
│  │  ├─ 36
│  │  │  └─ 059a402e59a75835bc977d60a33dcaecebb8e1
│  │  ├─ 38
│  │  │  └─ e0e3d1d7b3ef264e3d19918c7b8eb899c4bfc1
│  │  ├─ 39
│  │  │  └─ 4af537fffe6a6fd3694b635b36ef61a4babc05
│  │  ├─ 3c
│  │  │  ├─ de4f2caadaea2a35b8dcd8313762828e0e147d
│  │  │  └─ e5cd4795276dc51e26bd290446560de64b58c0
│  │  ├─ 43
│  │  │  ├─ 4faa5715f1f55824c1a236604a227bafec4958
│  │  │  └─ d0a39a46f767fbf7b3c6261409ea53d8c658ab
│  │  ├─ 45
│  │  │  └─ 5836569fc2af28b0dbdead286bc6b406800f54
│  │  ├─ 48
│  │  │  └─ a54b06b9085c72b2bb20edfc3dc5c62cad7535
│  │  ├─ 4f
│  │  │  └─ 46744f7d559dad89932c35651d605d64f90a8d
│  │  ├─ 51
│  │  │  └─ b605a293471dce819b8ce239a7d6ce989a494a
│  │  ├─ 56
│  │  │  └─ c6c887bc6546edd932c9d43db16e36e9286ce0
│  │  ├─ 58
│  │  │  ├─ 50e3ebdce8ae04917927d9918dbcf18a2563c3
│  │  │  └─ 7656d8f437e42aa4f1d73ba0701f8a06d06f66
│  │  ├─ 5f
│  │  │  └─ 5a638ef3e3ddc457f847f41e8d46be461692c9
│  │  ├─ 60
│  │  │  └─ c4cbeacac3eacfc6bba65d96d74b96abb15a72
│  │  ├─ 63
│  │  │  └─ 7d8ce6498535f1e6d1782e899b6ce49785b5a4
│  │  ├─ 69
│  │  │  └─ e28bcb61929a6ec807994bc06251d710a576eb
│  │  ├─ 6b
│  │  │  ├─ 52381ab251af91b85a69c40a1476f73455693c
│  │  │  └─ 592ec71a279d8363445b9e4bc1eea0f792aa1c
│  │  ├─ 6c
│  │  │  └─ f3dbb20af19fd179364d1c023cb7cd94d68710
│  │  ├─ 6e
│  │  │  └─ 8dd82125e2e16c0332c4d753f39759957ebcf1
│  │  ├─ 76
│  │  │  └─ 4780ed5468ccedf5e39cbfe488dcfe36346542
│  │  ├─ 7d
│  │  │  └─ 79acf28cd2b4968638cf09738a46dd7dbedfd1
│  │  ├─ 82
│  │  │  └─ a2c511755255fa11317d0373ba484f5a139d5b
│  │  ├─ 8c
│  │  │  └─ 440e6d35ba145c89b276f5441cccb568c0ca43
│  │  ├─ 8e
│  │  │  └─ 55c1940c05706b5cde60c4e6816a653f7a4e12
│  │  ├─ 90
│  │  │  └─ a2bcb1820b9189170bc8d7d83040d256bfb353
│  │  ├─ 94
│  │  │  └─ 21386559411743ac41d6a5c88a94d91534271f
│  │  ├─ 95
│  │  │  └─ be2e6209343d7b8959954a951766f89df0f0a6
│  │  ├─ 9e
│  │  │  └─ f698048410b4366e8fc6f93d9195959fb1325b
│  │  ├─ a1
│  │  │  └─ ca15827106397e63dfb7d50d2fad3f722cde49
│  │  ├─ a4
│  │  │  └─ f56b3be9df5ab5e855cfe54609a18928c314d5
│  │  ├─ ac
│  │  │  └─ 65a9e762bd98551295d8c24cee61f7f4d580e2
│  │  ├─ ad
│  │  │  └─ bfc07b7f4436882003e717dafd6404063af7ad
│  │  ├─ b2
│  │  │  └─ 141ba1f844bd6c1600a36545c30b2312e8978b
│  │  ├─ b6
│  │  │  └─ a2eb966e0d735ec21926fc19641d468c4fc3f9
│  │  ├─ b7
│  │  │  ├─ 301aa84ce78440ead718d9928314837b0f2507
│  │  │  └─ c3b8af08cc46f01a3f8ab5fdf6f6253f605a20
│  │  ├─ bd
│  │  │  └─ 98d4c87e0db195ddd2687ed0bbf86f5f2f4a14
│  │  ├─ be
│  │  │  └─ 5aad4ea1bf3953ccf6cd678496c327d11f4882
│  │  ├─ c1
│  │  │  └─ 84d781f9e914055cc415cdaf45b091e9f520e6
│  │  ├─ c4
│  │  │  └─ b59f96fc431600efb2ae16e747a78eb12b0913
│  │  ├─ c5
│  │  │  └─ 0bbc7bc23de54afec34c7c49deff397f93e27a
│  │  ├─ c6
│  │  │  └─ 5f9891f4f9a30e05a10ced4a44d8366cf3d1aa
│  │  ├─ ca
│  │  │  └─ 7c6c56dda0b8079e7384c6a8b17e1b69239685
│  │  ├─ cd
│  │  │  └─ 431512d6cda5a1025069b2dd7915ff3323e011
│  │  ├─ d2
│  │  │  └─ 8e7a6d98b7dde48d63718be7e80afa1076c86b
│  │  ├─ d4
│  │  │  └─ c2f0ec4b79cc2052cdf28e022cc997cf7a1abc
│  │  ├─ d6
│  │  │  └─ 1bcc6fb6c9420e08942e22308d5817f4d1d4f0
│  │  ├─ dc
│  │  │  └─ 17c2f96eb5f535163f6311f5c8d71159df1a9d
│  │  ├─ dd
│  │  │  └─ c8af3e0f66c1c147e39831ae1e7f55f2a8bc50
│  │  ├─ de
│  │  │  ├─ 8f1bebad13c3f84850a53f89a9f6cd871655e0
│  │  │  └─ edfd6e4e3a4fb5ee0ab019a0d92aa168babafc
│  │  ├─ e1
│  │  │  └─ cda164568b029760f899dbc88da02f8fee0f35
│  │  ├─ e2
│  │  │  └─ b549b4704e0a1f4afcc979cce942f19a72f0b1
│  │  ├─ e7
│  │  │  ├─ b11085094aef83cde4bff7735dd2aa195fa17e
│  │  │  └─ b47a5a7915784898ea7712c132adc05554340f
│  │  ├─ e8
│  │  │  └─ ae74a18cbd88508d260b790b7b405b4bac7fd1
│  │  ├─ ef
│  │  │  └─ 806b626f9b025985a934ea1fa8ef6cd17c545e
│  │  ├─ f7
│  │  │  ├─ 02abfb7857e1537a3904e9dc8543961cdeb84c
│  │  │  └─ 1606fe6033db7b8d545302d86a7ac0e8e1067f
│  │  ├─ fa
│  │  │  └─ 9e6d63a0c1084e0b3039b5135dc692a51d6dc9
│  │  ├─ fb
│  │  │  └─ 7ba0cfc045a1288839a3b9d4fa4547c204ab34
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-5b9ff881b0bd804964f59cf6248b5938b57b238f.idx
│  │     ├─ pack-5b9ff881b0bd804964f59cf6248b5938b57b238f.pack
│  │     └─ pack-5b9ff881b0bd804964f59cf6248b5938b57b238f.rev
│  ├─ packed-refs
│  ├─ refs
│  │  ├─ heads
│  │  │  ├─ dev
│  │  │  └─ master
│  │  ├─ remotes
│  │  │  └─ origin
│  │  │     ├─ HEAD
│  │  │     └─ dev
│  │  └─ tags
│  │     └─ dev-v0.0.0
│  └─ sourcetreeconfig
├─ .gitignore
├─ .gitlab-ci.yml
├─ .npmrc
├─ .prettierrc
├─ .vscode
│  ├─ extensions.json
│  └─ settings.json
├─ README.md
├─ dist
│  └─ spa
│     ├─ assets
│     │  ├─ ErrorNetwork.2505880c.js
│     │  ├─ ErrorNotFound.bf7ba4c7.js
│     │  ├─ IndexPage.12b1f917.js
│     │  ├─ KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff
│     │  ├─ KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff
│     │  ├─ KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff
│     │  ├─ KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff
│     │  ├─ KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff
│     │  ├─ KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff
│     │  ├─ MainLayout.59ab44c1.js
│     │  ├─ QBtn.7ec6af15.js
│     │  ├─ axios.65f0cb20.js
│     │  ├─ flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff
│     │  ├─ flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2
│     │  ├─ i18n.76d4d067.js
│     │  ├─ index.8ccabce6.css
│     │  ├─ index.a1be1940.js
│     │  └─ vue-i18n.runtime.5d161af4.js
│     ├─ favicon.ico
│     ├─ icons
│     │  ├─ favicon-128x128.png
│     │  ├─ favicon-16x16.png
│     │  ├─ favicon-32x32.png
│     │  └─ favicon-96x96.png
│     └─ index.html
├─ dockerfile
├─ index.html
├─ nginx.conf
├─ package.json
├─ postcss.config.cjs
├─ public
│  └─ logo.png
├─ quasar.config.js
├─ scripts
│  └─ docker-push.sh
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ font
│  │  │  └─ WEB
│  │  │     ├─ README.md
│  │  │     └─ fonts
│  │  │        ├─ Satoshi-Black.eot
│  │  │        ├─ Satoshi-Black.ttf
│  │  │        ├─ Satoshi-Black.woff
│  │  │        ├─ Satoshi-Black.woff2
│  │  │        ├─ Satoshi-BlackItalic.eot
│  │  │        ├─ Satoshi-BlackItalic.ttf
│  │  │        ├─ Satoshi-BlackItalic.woff
│  │  │        ├─ Satoshi-BlackItalic.woff2
│  │  │        ├─ Satoshi-Bold.eot
│  │  │        ├─ Satoshi-Bold.ttf
│  │  │        ├─ Satoshi-Bold.woff
│  │  │        ├─ Satoshi-Bold.woff2
│  │  │        ├─ Satoshi-BoldItalic.eot
│  │  │        ├─ Satoshi-BoldItalic.ttf
│  │  │        ├─ Satoshi-BoldItalic.woff
│  │  │        ├─ Satoshi-BoldItalic.woff2
│  │  │        ├─ Satoshi-Italic.eot
│  │  │        ├─ Satoshi-Italic.ttf
│  │  │        ├─ Satoshi-Italic.woff
│  │  │        ├─ Satoshi-Italic.woff2
│  │  │        ├─ Satoshi-Light.eot
│  │  │        ├─ Satoshi-Light.ttf
│  │  │        ├─ Satoshi-Light.woff
│  │  │        ├─ Satoshi-Light.woff2
│  │  │        ├─ Satoshi-LightItalic.eot
│  │  │        ├─ Satoshi-LightItalic.ttf
│  │  │        ├─ Satoshi-LightItalic.woff
│  │  │        ├─ Satoshi-LightItalic.woff2
│  │  │        ├─ Satoshi-Medium.eot
│  │  │        ├─ Satoshi-Medium.ttf
│  │  │        ├─ Satoshi-Medium.woff
│  │  │        ├─ Satoshi-Medium.woff2
│  │  │        ├─ Satoshi-MediumItalic.eot
│  │  │        ├─ Satoshi-MediumItalic.ttf
│  │  │        ├─ Satoshi-MediumItalic.woff
│  │  │        ├─ Satoshi-MediumItalic.woff2
│  │  │        ├─ Satoshi-Regular.eot
│  │  │        ├─ Satoshi-Regular.ttf
│  │  │        ├─ Satoshi-Regular.woff
│  │  │        ├─ Satoshi-Regular.woff2
│  │  │        ├─ Satoshi-Variable.eot
│  │  │        ├─ Satoshi-Variable.ttf
│  │  │        ├─ Satoshi-Variable.woff
│  │  │        ├─ Satoshi-Variable.woff2
│  │  │        ├─ Satoshi-VariableItalic.eot
│  │  │        ├─ Satoshi-VariableItalic.ttf
│  │  │        ├─ Satoshi-VariableItalic.woff
│  │  │        └─ Satoshi-VariableItalic.woff2
│  │  └─ img
│  │     └─ login
│  │        └─ logo.png
│  ├─ boot
│  │  ├─ .gitkeep
│  │  ├─ axios.ts
│  │  ├─ i18n.ts
│  │  ├─ recaptcha.ts
│  │  └─ unhead.ts
│  ├─ components
│  │  └─ models.ts
│  ├─ css
│  │  ├─ app.scss
│  │  ├─ quasar.variables.scss
│  │  └─ satoshi.css
│  ├─ env.d.ts
│  ├─ i18n
│  │  ├─ en-US
│  │  │  └─ index.ts
│  │  ├─ index.ts
│  │  └─ zh-TW
│  │     └─ index.ts
│  ├─ layouts
│  │  └─ MainLayout.vue
│  ├─ pages
│  │  ├─ ErrorNetwork.vue
│  │  ├─ ErrorNotFound.vue
│  │  ├─ HomePage.vue
│  │  └─ LoginPage.vue
│  ├─ quasar.d.ts
│  ├─ router
│  │  ├─ index.ts
│  │  └─ routes.ts
│  ├─ shims-vue.d.ts
│  └─ stores
│     ├─ auth.ts
│     ├─ index.ts
│     └─ store-flag.d.ts
├─ tsconfig.json
├─ tsconfig.vue-tsc.json
└─ yarn.lock

```
