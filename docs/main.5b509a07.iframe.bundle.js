(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "./.storybook/preview.js-generated-config-entry.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(
          preview_namespaceObject,
          "decorators",
          function () {
            return decorators;
          }
        ),
        __webpack_require__.d(
          preview_namespaceObject,
          "parameters",
          function () {
            return parameters;
          }
        );
      __webpack_require__(
        "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.object.keys.js"
      ),
        __webpack_require__(
          "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.symbol.js"
        ),
        __webpack_require__(
          "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.array.filter.js"
        ),
        __webpack_require__(
          "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.object.get-own-property-descriptor.js"
        ),
        __webpack_require__(
          "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.array.for-each.js"
        ),
        __webpack_require__(
          "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/web.dom-collections.for-each.js"
        ),
        __webpack_require__(
          "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.object.get-own-property-descriptors.js"
        ),
        __webpack_require__(
          "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.object.define-properties.js"
        ),
        __webpack_require__(
          "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.object.define-property.js"
        );
      var ClientApi = __webpack_require__(
          "./.yarn/__virtual__/@storybook-client-api-virtual-c017164cd6/0/cache/@storybook-client-api-npm-6.4.20-48d4c8e9d0-b8e28d9a3e.zip/node_modules/@storybook/client-api/dist/esm/ClientApi.js"
        ),
        esm = __webpack_require__(
          "./.yarn/cache/@storybook-client-logger-npm-6.4.20-f7367055c0-1b6f89ebce.zip/node_modules/@storybook/client-logger/dist/esm/index.js"
        ),
        styled_components_browser_esm =
          (__webpack_require__(
            "./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"
          ),
          __webpack_require__(
            "./.yarn/__virtual__/styled-components-virtual-1c1c314cd4/0/cache/styled-components-npm-5.3.1-6cb43fe52b-2d833d573c.zip/node_modules/styled-components/dist/styled-components.browser.esm.js"
          )),
        bodyStyles = Object(styled_components_browser_esm.b)([
          '*{font-family:"Goudy Bookletter 1911",serif;box-sizing:content-box;}a,a:hover,a:focus,a:active{text-decoration:none;color:inherit;}button{padding:0;margin:0;font-size:inherit;border-radius:none;background-color:inherit;border:none;}',
        ]),
        GlobalStyle = Object(styled_components_browser_esm.a)(
          ["body{", "}"],
          bodyStyles
        ),
        jsx_runtime = __webpack_require__(
          "./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js"
        ),
        decorators = [
          function (Story) {
            return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                Object(jsx_runtime.jsx)(GlobalStyle, {}),
                Object(jsx_runtime.jsx)(Story, {}),
              ],
            });
          },
        ],
        parameters = {
          actions: { argTypesRegex: "^on[A-Z].*" },
          controls: {
            matchers: { color: /(background|color)$/i, date: /Date$/ },
          },
          options: {
            storySort: {
              order: [
                "Introduction",
                "Documentation",
                "Core UI",
                "Docs Utilities",
              ],
            },
          },
        };
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case "args":
          case "argTypes":
            return esm.a.warn(
              "Invalid args/argTypes in config, ignoring.",
              JSON.stringify(value)
            );
          case "decorators":
            return value.forEach(function (decorator) {
              return Object(ClientApi.d)(decorator, !1);
            });
          case "loaders":
            return value.forEach(function (loader) {
              return Object(ClientApi.e)(loader, !1);
            });
          case "parameters":
            return Object(ClientApi.f)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        );
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case "argTypesEnhancers":
            return value.forEach(function (enhancer) {
              return Object(ClientApi.b)(enhancer);
            });
          case "argsEnhancers":
            return value.forEach(function (enhancer) {
              return Object(ClientApi.c)(enhancer);
            });
          case "render":
            return Object(ClientApi.g)(value);
          case "globals":
          case "globalTypes":
            var v = {};
            return (v[key] = value), Object(ClientApi.f)(v, !1);
          case "__namedExportsOrder":
          case "decorateStory":
          case "renderToDOM":
            return null;
          default:
            return console.log(key + " was not supported :( !");
        }
      });
    },
    "./.yarn/__virtual__/css-loader-virtual-69bfb3fae2/0/cache/css-loader-npm-3.6.0-3394f37d07-a45d7ee810.zip/node_modules/css-loader/dist/cjs.js?!./.yarn/__virtual__/sass-loader-virtual-1c497e9eb0/0/cache/sass-loader-npm-10.2.1-eb918cbb8a-e5bc4a230b.zip/node_modules/sass-loader/dist/cjs.js!./src/Button/Button.module.scss":
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          "./.yarn/__virtual__/css-loader-virtual-69bfb3fae2/0/cache/css-loader-npm-3.6.0-3394f37d07-a45d7ee810.zip/node_modules/css-loader/dist/runtime/api.js"
        )(!1)).push([
          module.i,
          ".Button-module__styledButton--2kXM_{background-color:#fff;color:#000;cursor:pointer;padding:8px 24px;font-size:16px;font-weight:400;border:1px solid #000;transition:all .1s ease 0s}.Button-module__styledButton--2kXM_:hover,.Button-module__styledButton--2kXM_:focus{cursor:pointer;background-color:#000;color:#fff;box-shadow:3px 3px var(--accent-color),6px 6px #000,inset 0px 0px 0px 1px #fff}.Button-module__tile--2FnQr{font-size:22px;width:140px;height:140px;padding:8px}",
          "",
        ]),
          (exports.locals = {
            styledButton: "Button-module__styledButton--2kXM_",
            tile: "Button-module__tile--2FnQr",
          }),
          (module.exports = exports);
      },
    "./.yarn/__virtual__/css-loader-virtual-69bfb3fae2/0/cache/css-loader-npm-3.6.0-3394f37d07-a45d7ee810.zip/node_modules/css-loader/dist/cjs.js?!./.yarn/__virtual__/sass-loader-virtual-1c497e9eb0/0/cache/sass-loader-npm-10.2.1-eb918cbb8a-e5bc4a230b.zip/node_modules/sass-loader/dist/cjs.js!./src/ImageLink/ImageLink.module.scss":
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          "./.yarn/__virtual__/css-loader-virtual-69bfb3fae2/0/cache/css-loader-npm-3.6.0-3394f37d07-a45d7ee810.zip/node_modules/css-loader/dist/runtime/api.js"
        )(!1)).push([
          module.i,
          ".ImageLink-module__styledImageLink--h8SYF{position:relative;display:inline-block;height:100%;width:100%;background-color:#d3d3d3}.ImageLink-module__overlayItem--3_RlP{position:absolute;z-index:1;top:50%;left:50%;transform:translate(-50%, -50%);font-style:unset;width:100%}.ImageLink-module__backgroundImg--2Qr3O{width:100%;max-height:100%;object-fit:cover;filter:brightness(var(--brightness))}",
          "",
        ]),
          (exports.locals = {
            styledImageLink: "ImageLink-module__styledImageLink--h8SYF",
            overlayItem: "ImageLink-module__overlayItem--3_RlP",
            backgroundImg: "ImageLink-module__backgroundImg--2Qr3O",
          }),
          (module.exports = exports);
      },
    "./.yarn/__virtual__/css-loader-virtual-69bfb3fae2/0/cache/css-loader-npm-3.6.0-3394f37d07-a45d7ee810.zip/node_modules/css-loader/dist/cjs.js?!./.yarn/__virtual__/sass-loader-virtual-1c497e9eb0/0/cache/sass-loader-npm-10.2.1-eb918cbb8a-e5bc4a230b.zip/node_modules/sass-loader/dist/cjs.js!./src/StorybookDocsFooter/StorybookDocsFooter.module.scss":
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          "./.yarn/__virtual__/css-loader-virtual-69bfb3fae2/0/cache/css-loader-npm-3.6.0-3394f37d07-a45d7ee810.zip/node_modules/css-loader/dist/runtime/api.js"
        )(!1)).push([
          module.i,
          '.StorybookDocsFooter-module__styledStorybookDocsFooter--2PvfK{margin:64px;padding:32px;display:flex;justify-content:space-around;padding:16px 48px;border:1px solid #000;font-size:16px;font-family:"Goudy Bookletter 1911",serif}.StorybookDocsFooter-module__footer-row--1kRuk{display:flex;flex-direction:column}h2{font-size:16px;border-bottom:1px solid #000}ul{padding:0;list-style:none}a{color:inherit;text-decoration:none;font-style:italic}a:hover,a:focus{text-shadow:1px 1px 0 #8254eb,2px 2px 0 #fff,3px 3px 0 #000;transition:.1s}',
          "",
        ]),
          (exports.locals = {
            styledStorybookDocsFooter:
              "StorybookDocsFooter-module__styledStorybookDocsFooter--2PvfK",
            "footer-row": "StorybookDocsFooter-module__footer-row--1kRuk",
          }),
          (module.exports = exports);
      },
    "./generated-stories-entry.js": function (
      module,
      exports,
      __webpack_require__
    ) {
      "use strict";
      (function (module) {
        (0,
        __webpack_require__(
          "./.yarn/__virtual__/@storybook-react-virtual-7466844acb/0/cache/@storybook-react-npm-6.4.20-405015628d-03878cf4cb.zip/node_modules/@storybook/react/dist/esm/client/index.js"
        ).configure)(
          [
            __webpack_require__(
              "./src/docs sync ^\\.[\\\\/](?:Introduction\\.mdx)$"
            ),
            __webpack_require__(
              "./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"
            ),
            __webpack_require__(
              "./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"
            ),
          ],
          module,
          !1
        );
      }.call(
        this,
        __webpack_require__(
          "./.yarn/__virtual__/webpack-virtual-807e992c8b/0/cache/webpack-npm-4.46.0-a8158cfa7f-013fa24c00.zip/node_modules/webpack/buildin/module.js"
        )(module)
      ));
    },
    "./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":
      function (module, exports, __webpack_require__) {
        var map = {
          "./Button/Button.stories.js": "./src/Button/Button.stories.js",
          "./ImageLink/ImageLink.stories.js":
            "./src/ImageLink/ImageLink.stories.js",
          "./StorybookDocsFooter/StorybookDocsFooter.stories.js":
            "./src/StorybookDocsFooter/StorybookDocsFooter.stories.js",
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            "./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$");
      },
    "./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":
      function (module, exports, __webpack_require__) {
        var map = {
          "./docs/Introduction.stories.mdx":
            "./src/docs/Introduction.stories.mdx",
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            "./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$");
      },
    "./src/Button/Button.module.scss": function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          "./.yarn/__virtual__/style-loader-virtual-4fea530c33/0/cache/style-loader-npm-1.3.0-2047b33843-1be9e87053.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        content = __webpack_require__(
          "./.yarn/__virtual__/css-loader-virtual-69bfb3fae2/0/cache/css-loader-npm-3.6.0-3394f37d07-a45d7ee810.zip/node_modules/css-loader/dist/cjs.js?!./.yarn/__virtual__/sass-loader-virtual-1c497e9eb0/0/cache/sass-loader-npm-10.2.1-eb918cbb8a-e5bc4a230b.zip/node_modules/sass-loader/dist/cjs.js!./src/Button/Button.module.scss"
        );
      "string" ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, ""]]);
      var options = { insert: "head", singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    "./src/Button/Button.stories.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "MainStory", function () {
          return MainStory;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          "GreenAccentColor",
          function () {
            return GreenAccentColor;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          "onClickCallback",
          function () {
            return onClickCallback;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          "TileStyleType",
          function () {
            return TileStyleType;
          }
        );
      __webpack_require__(
        "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.object.assign.js"
      ),
        __webpack_require__(
          "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.function.bind.js"
        );
      var react = __webpack_require__(
          "./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"
        ),
        esm =
          (__webpack_require__(
            "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.object.keys.js"
          ),
          __webpack_require__(
            "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.array.index-of.js"
          ),
          __webpack_require__(
            "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.symbol.js"
          ),
          __webpack_require__(
            "./.yarn/__virtual__/@mdx-js-react-virtual-8da21fbe32/0/cache/@mdx-js-react-npm-1.6.22-57e4c05c2b-bc84bd514b.zip/node_modules/@mdx-js/react/dist/esm.js"
          )),
        dist_esm = __webpack_require__(
          "./.yarn/__virtual__/@storybook-addon-docs-virtual-e8f719abf6/0/cache/@storybook-addon-docs-npm-6.4.20-88a2297876-63fa1cee65.zip/node_modules/@storybook/addon-docs/dist/esm/index.js"
        ),
        StorybookDocsFooter = __webpack_require__(
          "./src/StorybookDocsFooter/StorybookDocsFooter.js"
        ),
        prop_types = __webpack_require__(
          "./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js"
        ),
        prop_types_default = __webpack_require__.n(prop_types),
        classnames = __webpack_require__(
          "./.yarn/cache/classnames-npm-2.3.1-f2ae0a8d3c-14db8889d5.zip/node_modules/classnames/index.js"
        ),
        classnames_default = __webpack_require__.n(classnames),
        Button_module = __webpack_require__("./src/Button/Button.module.scss"),
        Button_module_default = __webpack_require__.n(Button_module),
        jsx_runtime = __webpack_require__(
          "./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js"
        ),
        _excluded = ["accentColor", "label", "onClick", "styleType"];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Button = Object(react.forwardRef)(function (_ref, ref) {
        var _ref$accentColor = _ref.accentColor,
          accentColor = void 0 === _ref$accentColor ? "gray" : _ref$accentColor,
          label = _ref.label,
          _ref$onClick = _ref.onClick,
          onClick = void 0 === _ref$onClick ? function () {} : _ref$onClick,
          _ref$styleType = _ref.styleType,
          styleType = void 0 === _ref$styleType ? "default" : _ref$styleType,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(jsx_runtime.jsx)(
          "button",
          Object.assign(
            {
              className: classnames_default()(
                Button_module_default.a.styledButton,
                Button_module_default.a[styleType]
              ),
              style: { "--accent-color": accentColor },
              onClick: onClick,
              ref: ref,
            },
            props,
            { children: label }
          )
        );
      });
      (Button.propTypes = {
        accentColor: prop_types_default.a.string,
        label: prop_types_default.a.string.isRequired,
        onClick: prop_types_default.a.func,
        styleType: prop_types_default.a.oneOf(["default", "tile"]),
      }),
        (Button.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Button",
          props: {
            accentColor: {
              defaultValue: { value: "'gray'", computed: !1 },
              type: { name: "string" },
              required: !1,
              description: "Color used as accent",
            },
            onClick: {
              defaultValue: { value: "() => {}", computed: !1 },
              type: { name: "func" },
              required: !1,
              description: "onClick callback",
            },
            styleType: {
              defaultValue: { value: '"default"', computed: !1 },
              type: {
                name: "enum",
                value: [
                  { value: '"default"', computed: !1 },
                  { value: '"tile"', computed: !1 },
                ],
              },
              required: !1,
              description: "Which pre-determined style to use",
            },
            label: {
              type: { name: "string" },
              required: !0,
              description: "Button label",
            },
          },
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/Button/Button.js"] = {
            name: "Button",
            docgenInfo: Button.__docgenInfo,
            path: "src/Button/Button.js",
          });
      var README_excluded = ["components"];
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      function README_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function README_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = README_objectWithoutProperties(_ref, README_excluded);
        return Object(esm.b)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(esm.b)("h1", { id: "button" }, "Button"),
          Object(esm.b)(
            "p",
            null,
            Object(esm.b)("inlineCode", { parentName: "p" }, "Button"),
            " is a button element with built in accessibility considerations"
          ),
          Object(esm.b)(
            dist_esm.c,
            { mdxType: "Canvas" },
            Object(esm.b)(dist_esm.e, {
              id: "core-ui-button--main-story",
              mdxType: "Story",
            })
          ),
          Object(esm.b)(
            "pre",
            null,
            Object(esm.b)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              "import React from 'react'\nimport { Button } from '@pguava-ui'\n\n<Button label=\"Button\" />\n"
            )
          ),
          Object(esm.b)("h2", { id: "component-options" }, "Component Options"),
          Object(esm.b)(dist_esm.b, { of: Button, mdxType: "ArgsTable" }),
          Object(esm.b)(
            "p",
            null,
            "Below is a more detailed list of props for ",
            Object(esm.b)("inlineCode", { parentName: "p" }, "Button"),
            " and their usage."
          ),
          Object(esm.b)("h3", { id: "accent-color" }, "Accent Color"),
          Object(esm.b)(
            "p",
            null,
            "The color used as an accent shadow of the button. This accent appears on hover and focus. "
          ),
          Object(esm.b)(
            dist_esm.c,
            { mdxType: "Canvas" },
            Object(esm.b)(dist_esm.e, {
              id: "core-ui-button--green-accent-color",
              mdxType: "Story",
            })
          ),
          Object(esm.b)(
            "pre",
            null,
            Object(esm.b)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              '<Button accentColor="forestgreen" />\n'
            )
          ),
          Object(esm.b)("h3", { id: "label" }, "Label"),
          Object(esm.b)(
            "p",
            null,
            "Every Button is required to have a label for accessibilty reasons. If this does not meet your needs, see the ",
            Object(esm.b)(
              "a",
              { parentName: "p", href: "#accessibility" },
              "Accessibility"
            ),
            " section below."
          ),
          Object(esm.b)(
            "pre",
            null,
            Object(esm.b)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              '<Button label="Button Label" />\n'
            )
          ),
          Object(esm.b)("h3", { id: "callback-onclick" }, "Callback: onClick"),
          Object(esm.b)(
            "p",
            null,
            "An ",
            Object(esm.b)("inlineCode", { parentName: "p" }, "onClick"),
            " callback can be provided that triggers when a user clicks the ",
            Object(esm.b)("inlineCode", { parentName: "p" }, "Button"),
            "."
          ),
          Object(esm.b)(
            dist_esm.c,
            { mdxType: "Canvas" },
            Object(esm.b)(dist_esm.e, {
              id: "core-ui-button--on-click-callback",
              mdxType: "Story",
            })
          ),
          Object(esm.b)(
            "pre",
            null,
            Object(esm.b)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              "const handleClick = () => alert('Button clicked!');\n\n<Button onClick={handleClick} />\n"
            )
          ),
          Object(esm.b)("h3", { id: "styletype" }, "StyleType"),
          Object(esm.b)(
            "p",
            null,
            "There are currently two styles for the ",
            Object(esm.b)("inlineCode", { parentName: "p" }, "Button"),
            ":"
          ),
          Object(esm.b)(
            "ul",
            null,
            Object(esm.b)(
              "li",
              { parentName: "ul" },
              Object(esm.b)("inlineCode", { parentName: "li" }, "default"),
              " - basic rectangle button"
            ),
            Object(esm.b)(
              "li",
              { parentName: "ul" },
              Object(esm.b)("inlineCode", { parentName: "li" }, "tile"),
              " - large square button, intended for larger UI"
            )
          ),
          Object(esm.b)(
            dist_esm.c,
            { mdxType: "Canvas" },
            Object(esm.b)(dist_esm.e, {
              id: "core-ui-button--tile-style-type",
              mdxType: "Story",
            })
          ),
          Object(esm.b)(
            "pre",
            null,
            Object(esm.b)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              '<Button styleType="tile" />\n'
            )
          ),
          Object(esm.b)("h2", { id: "accessibility" }, "Accessibility"),
          Object(esm.b)(
            "p",
            null,
            "Below are the built in accessibility notes and considerations for ",
            Object(esm.b)("inlineCode", { parentName: "p" }, "Button"),
            "."
          ),
          Object(esm.b)(
            "h3",
            { id: "do-not-override-focus-outline" },
            "Do not override focus outline"
          ),
          Object(esm.b)(
            "p",
            null,
            "The default focus outline provided by the browser is needed so keyboard users know what element is focused on the page. While there are additional focus styles that may be supressed, it is critical that the default outline is not."
          ),
          Object(esm.b)(StorybookDocsFooter.a, {
            mdxType: "StorybookDocsFooter",
          })
        );
      }
      (MDXContent.displayName = "MDXContent"), (MDXContent.isMDXComponent = !0);
      __webpack_exports__.default = {
        title: "Core UI/Button",
        component: Button,
        parameters: { docs: { page: MDXContent } },
      };
      var Button_stories_Template = function Template(args) {
        return Object(jsx_runtime.jsx)(Button, Object.assign({}, args));
      };
      Button_stories_Template.displayName = "Template";
      var MainStory = Button_stories_Template.bind({});
      MainStory.args = { label: "Button" };
      var GreenAccentColor = Button_stories_Template.bind({});
      GreenAccentColor.args = {
        accentColor: "forestgreen",
        label: "Green Button",
      };
      var onClickCallback = Button_stories_Template.bind({});
      onClickCallback.args = {
        onClick: function handleClick() {
          return alert("Button clicked!");
        },
        label: "Click Me",
      };
      var TileStyleType = Button_stories_Template.bind({});
      (TileStyleType.args = { label: "Tile Button", styleType: "tile" }),
        (MainStory.parameters = Object.assign(
          { storySource: { source: "(args) => <Button {...args} />" } },
          MainStory.parameters
        )),
        (GreenAccentColor.parameters = Object.assign(
          { storySource: { source: "(args) => <Button {...args} />" } },
          GreenAccentColor.parameters
        )),
        (onClickCallback.parameters = Object.assign(
          { storySource: { source: "(args) => <Button {...args} />" } },
          onClickCallback.parameters
        )),
        (TileStyleType.parameters = Object.assign(
          { storySource: { source: "(args) => <Button {...args} />" } },
          TileStyleType.parameters
        ));
    },
    "./src/ImageLink/ImageLink.module.scss": function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          "./.yarn/__virtual__/style-loader-virtual-4fea530c33/0/cache/style-loader-npm-1.3.0-2047b33843-1be9e87053.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        content = __webpack_require__(
          "./.yarn/__virtual__/css-loader-virtual-69bfb3fae2/0/cache/css-loader-npm-3.6.0-3394f37d07-a45d7ee810.zip/node_modules/css-loader/dist/cjs.js?!./.yarn/__virtual__/sass-loader-virtual-1c497e9eb0/0/cache/sass-loader-npm-10.2.1-eb918cbb8a-e5bc4a230b.zip/node_modules/sass-loader/dist/cjs.js!./src/ImageLink/ImageLink.module.scss"
        );
      "string" ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, ""]]);
      var options = { insert: "head", singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    "./src/ImageLink/ImageLink.stories.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "MainStory", function () {
          return MainStory;
        });
      __webpack_require__(
        "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.object.assign.js"
      ),
        __webpack_require__(
          "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.function.bind.js"
        );
      var react = __webpack_require__(
          "./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"
        ),
        esm =
          (__webpack_require__(
            "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.object.keys.js"
          ),
          __webpack_require__(
            "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.array.index-of.js"
          ),
          __webpack_require__(
            "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.symbol.js"
          ),
          __webpack_require__(
            "./.yarn/__virtual__/@mdx-js-react-virtual-8da21fbe32/0/cache/@mdx-js-react-npm-1.6.22-57e4c05c2b-bc84bd514b.zip/node_modules/@mdx-js/react/dist/esm.js"
          )),
        dist_esm = __webpack_require__(
          "./.yarn/__virtual__/@storybook-addon-docs-virtual-e8f719abf6/0/cache/@storybook-addon-docs-npm-6.4.20-88a2297876-63fa1cee65.zip/node_modules/@storybook/addon-docs/dist/esm/index.js"
        ),
        StorybookDocsFooter = __webpack_require__(
          "./src/StorybookDocsFooter/StorybookDocsFooter.js"
        ),
        prop_types = __webpack_require__(
          "./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js"
        ),
        prop_types_default = __webpack_require__.n(prop_types),
        ImageLink_module = __webpack_require__(
          "./src/ImageLink/ImageLink.module.scss"
        ),
        ImageLink_module_default = __webpack_require__.n(ImageLink_module),
        jsx_runtime = __webpack_require__(
          "./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js"
        ),
        _excluded = ["brightness", "children", "imgSrc"];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var ImageLink = Object(react.forwardRef)(function (_ref, ref) {
        var _ref$brightness = _ref.brightness,
          brightness = void 0 === _ref$brightness ? "30%" : _ref$brightness,
          children = _ref.children,
          imgSrc = _ref.imgSrc,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(jsx_runtime.jsxs)(
          "a",
          Object.assign(
            { className: ImageLink_module_default.a.styledImageLink, ref: ref },
            props,
            {
              children: [
                Object(jsx_runtime.jsx)("img", {
                  className: ImageLink_module_default.a.backgroundImg,
                  src: imgSrc,
                  style: { "--brightness": brightness },
                  alt: "",
                  role: "presentation",
                }),
                Object(jsx_runtime.jsx)("span", {
                  className: ImageLink_module_default.a.overlayItem,
                  children: children,
                }),
              ],
            }
          )
        );
      });
      (ImageLink.propTypes = {
        brightness: prop_types_default.a.string,
        imgSrc: prop_types_default.a.string,
      }),
        (ImageLink.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "ImageLink",
          props: {
            brightness: {
              defaultValue: { value: '"30%"', computed: !1 },
              type: { name: "string" },
              required: !1,
              description: "Sets the brightness filter of the image",
            },
            imgSrc: {
              type: { name: "string" },
              required: !1,
              description: "Image src used as the base",
            },
          },
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["src/ImageLink/ImageLink.js"] = {
            name: "ImageLink",
            docgenInfo: ImageLink.__docgenInfo,
            path: "src/ImageLink/ImageLink.js",
          });
      var README_excluded = ["components"];
      function README_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function README_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      var README_Template = function Template(args) {
        return Object(esm.b)(
          ImageLink,
          _extends({}, args, { mdxType: "ImageLink" })
        );
      };
      README_Template.displayName = "Template";
      var layoutProps = { Template: README_Template };
      function MDXContent(_ref) {
        var components = _ref.components,
          props = README_objectWithoutProperties(_ref, README_excluded);
        return Object(esm.b)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(esm.b)("h1", { id: "imagelink" }, "ImageLink"),
          Object(esm.b)(
            "p",
            null,
            Object(esm.b)("inlineCode", { parentName: "p" }, "ImageLink"),
            " is an anchor component used to display child elements overtop an image."
          ),
          Object(esm.b)(
            dist_esm.c,
            { mdxType: "Canvas" },
            Object(esm.b)(dist_esm.e, {
              id: "core-ui-image-link--main-story",
              mdxType: "Story",
            })
          ),
          Object(esm.b)(
            "pre",
            null,
            Object(esm.b)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              "import React from 'react'\nimport { ImageLink } from '@pguava-ui'\n\n<ImageLink href=\"/writing\" imgSrc=\"https://victorjperez.github.io/writing/assets/img/morgantown.jpg\">\n  <p>This Town</p>\n</ImageLink>\n"
            )
          ),
          Object(esm.b)("h2", { id: "component-options" }, "Component Options"),
          Object(esm.b)(dist_esm.b, { of: ImageLink, mdxType: "ArgsTable" }),
          Object(esm.b)(
            "p",
            null,
            "Below is a more detailed list of props for ",
            Object(esm.b)("inlineCode", { parentName: "p" }, "ImageLink"),
            " and their usage."
          ),
          Object(esm.b)("h3", { id: "image-brightness" }, "Image Brightness"),
          Object(esm.b)(
            "p",
            null,
            "You can set the Brightness of the image by filter by passing a ",
            Object(esm.b)("inlineCode", { parentName: "p" }, "brightness"),
            " value."
          ),
          Object(esm.b)(
            "pre",
            null,
            Object(esm.b)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              '<ImageLink brightness="90%" />\n'
            )
          ),
          Object(esm.b)("h3", { id: "image-source" }, "Image Source"),
          Object(esm.b)(
            "p",
            null,
            "The base of ",
            Object(esm.b)("inlineCode", { parentName: "p" }, "ImageLink"),
            " is an ",
            Object(esm.b)("inlineCode", { parentName: "p" }, "img"),
            " element, and needs a src passed via ",
            Object(esm.b)("inlineCode", { parentName: "p" }, "imgSrc"),
            ". If no source is passed, it will fall back to light gray."
          ),
          Object(esm.b)(
            "pre",
            null,
            Object(esm.b)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              '<ImageLink imgSrc="https://victorjperez.github.io/writing/assets/img/morgantown.jpg" />\n'
            )
          ),
          Object(esm.b)("h2", { id: "accessibility" }, "Accessibility"),
          Object(esm.b)(
            "p",
            null,
            "Below are the built in accessibility notes and considerations for ",
            Object(esm.b)("inlineCode", { parentName: "p" }, "Button"),
            "."
          ),
          Object(esm.b)(
            "h3",
            { id: "only-use-decorative-images" },
            "Only use decorative images"
          ),
          Object(esm.b)(
            "p",
            null,
            "Any ",
            Object(esm.b)("inlineCode", { parentName: "p" }, "imgSrc"),
            " provided should be pruely decorative, and should not be critical to the usage of the component."
          ),
          Object(esm.b)(
            "h3",
            { id: "ensure-text-color-contrast-when-using-brightness" },
            "Ensure text color contrast when using brightness"
          ),
          Object(esm.b)(
            "p",
            null,
            "Depending on the passed children, your brightness value may not let text have enough color contrast to meet accessibility standards. Be sure to check this with every child component possible for ",
            Object(esm.b)("inlineCode", { parentName: "p" }, "ImageLink"),
            "."
          ),
          Object(esm.b)(
            "h3",
            { id: "provide-aria-label-if-child-does-not-contain-text" },
            "Provide aria label if child does not contain text"
          ),
          Object(esm.b)(
            "p",
            null,
            "If you are not passing text to ",
            Object(esm.b)("inlineCode", { parentName: "p" }, "ImageLink"),
            ", an ",
            Object(esm.b)("inlineCode", { parentName: "p" }, "aria-label"),
            " should be provided to describe the link."
          ),
          Object(esm.b)(StorybookDocsFooter.a, {
            mdxType: "StorybookDocsFooter",
          })
        );
      }
      (MDXContent.displayName = "MDXContent"), (MDXContent.isMDXComponent = !0);
      __webpack_exports__.default = {
        title: "Core UI/Image Link",
        component: ImageLink,
        parameters: { docs: { page: MDXContent } },
      };
      var ImageLink_stories_Template = function Template(args) {
        return Object(jsx_runtime.jsx)("div", {
          style: {
            width: "400px",
            height: "300px",
            textShadow: "2px 2px 0 black",
            color: "white",
            fontSize: "48px",
            textAlign: "center",
          },
          children: Object(jsx_runtime.jsx)(ImageLink, Object.assign({}, args)),
        });
      };
      ImageLink_stories_Template.displayName = "Template";
      var MainStory = ImageLink_stories_Template.bind({});
      (MainStory.args = {
        href: "/writing",
        imgSrc:
          "https://victorjperez.github.io/writing/assets/img/morgantown.jpg",
        children: Object(jsx_runtime.jsx)("p", { children: "This Town" }),
      }),
        (MainStory.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\n  <div\n    style={{\n      width: "400px",\n      height: "300px",\n      textShadow: "2px 2px 0 black",\n      color: "white",\n      fontSize: "48px",\n      textAlign: "center",\n    }}\n  >\n    <ImageLink {...args} />\n  </div>\n)',
            },
          },
          MainStory.parameters
        ));
    },
    "./src/StorybookDocsFooter/StorybookDocsFooter.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return StorybookDocsFooter;
      });
      __webpack_require__(
        "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.object.assign.js"
      );
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"
        ),
        _StorybookDocsFooter_module_scss__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__(
            "./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js"
          ),
          __webpack_require__(
            "./src/StorybookDocsFooter/StorybookDocsFooter.module.scss"
          )),
        _StorybookDocsFooter_module_scss__WEBPACK_IMPORTED_MODULE_3___default =
          __webpack_require__.n(
            _StorybookDocsFooter_module_scss__WEBPACK_IMPORTED_MODULE_3__
          ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js"
        );
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      var StorybookDocsFooter = Object(
        react__WEBPACK_IMPORTED_MODULE_1__.forwardRef
      )(function (_ref, ref) {
        var props = _extends({}, _ref);
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
          "div",
          Object.assign(
            {
              className:
                _StorybookDocsFooter_module_scss__WEBPACK_IMPORTED_MODULE_3___default
                  .a.styledStorybookDocsFooter,
              ref: ref,
            },
            props,
            {
              children: [
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
                  "div",
                  {
                    className: "footer-column",
                    children: [
                      Object(
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
                      )("h2", { children: "Paper Guava UI Links" }),
                      Object(
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs
                      )("ul", {
                        children: [
                          Object(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
                          )("li", {
                            children: Object(
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
                            )("a", {
                              href: "https://github.com/victorjperez/paper-guava-ui",
                              children: "Github Repo",
                            }),
                          }),
                          Object(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
                          )("li", {
                            children: Object(
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
                            )("a", {
                              href: "https://victorjperez.github.io/paper-guava-ui/?path=/story/documentation-introduction--page",
                              children: "Prod Storybook",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
                  "div",
                  {
                    className: "footer-column",
                    children: [
                      Object(
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
                      )("h2", { children: "Key Documentation" }),
                      Object(
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
                      )("ul", {
                        children: Object(
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
                        )("li", {
                          children: Object(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
                          )("a", {
                            href: "./?path=/docs/documentation-introduction--page",
                            children: "Introduction",
                          }),
                        }),
                      }),
                    ],
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
                  "div",
                  {
                    className: "footer-column",
                    children: [
                      Object(
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
                      )("h2", { children: "Related Repos" }),
                      Object(
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs
                      )("ul", {
                        children: [
                          Object(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
                          )("li", {
                            children: Object(
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
                            )("a", {
                              href: "https://github.com/victorjperez/writing",
                              children: "Writing",
                            }),
                          }),
                          Object(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
                          )("li", {
                            children: Object(
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
                            )("a", {
                              href: "https://github.com/victorjperez/portfolio",
                              children: "Portfolio",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
                  "div",
                  {
                    className: "footer-column",
                    children: [
                      Object(
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
                      )("h2", { children: "Author Links" }),
                      Object(
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs
                      )("ul", {
                        children: [
                          Object(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
                          )("li", {
                            children: Object(
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
                            )("a", {
                              href: "https://github.com/victorjperez/",
                              children: "Personal Github",
                            }),
                          }),
                          Object(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
                          )("li", {
                            children: Object(
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
                            )("a", {
                              href: "https://victorjperez.github.io/",
                              children: "Portfolio",
                            }),
                          }),
                          Object(
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
                          )("li", {
                            children: Object(
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx
                            )("a", {
                              href: "https://victorjperez.github.io/writing/",
                              children: "Writing",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }
                ),
              ],
            }
          )
        );
      });
      (StorybookDocsFooter.propTypes = {}),
        (StorybookDocsFooter.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "StorybookDocsFooter",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "src/StorybookDocsFooter/StorybookDocsFooter.js"
          ] = {
            name: "StorybookDocsFooter",
            docgenInfo: StorybookDocsFooter.__docgenInfo,
            path: "src/StorybookDocsFooter/StorybookDocsFooter.js",
          });
    },
    "./src/StorybookDocsFooter/StorybookDocsFooter.module.scss": function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          "./.yarn/__virtual__/style-loader-virtual-4fea530c33/0/cache/style-loader-npm-1.3.0-2047b33843-1be9e87053.zip/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        content = __webpack_require__(
          "./.yarn/__virtual__/css-loader-virtual-69bfb3fae2/0/cache/css-loader-npm-3.6.0-3394f37d07-a45d7ee810.zip/node_modules/css-loader/dist/cjs.js?!./.yarn/__virtual__/sass-loader-virtual-1c497e9eb0/0/cache/sass-loader-npm-10.2.1-eb918cbb8a-e5bc4a230b.zip/node_modules/sass-loader/dist/cjs.js!./src/StorybookDocsFooter/StorybookDocsFooter.module.scss"
        );
      "string" ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, ""]]);
      var options = { insert: "head", singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    "./src/StorybookDocsFooter/StorybookDocsFooter.stories.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "MainStory", function () {
          return MainStory;
        });
      __webpack_require__(
        "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.object.assign.js"
      ),
        __webpack_require__(
          "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.function.bind.js"
        ),
        __webpack_require__(
          "./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"
        ),
        __webpack_require__(
          "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.object.keys.js"
        ),
        __webpack_require__(
          "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.array.index-of.js"
        ),
        __webpack_require__(
          "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.symbol.js"
        );
      var esm = __webpack_require__(
          "./.yarn/__virtual__/@mdx-js-react-virtual-8da21fbe32/0/cache/@mdx-js-react-npm-1.6.22-57e4c05c2b-bc84bd514b.zip/node_modules/@mdx-js/react/dist/esm.js"
        ),
        StorybookDocsFooter =
          (__webpack_require__(
            "./.yarn/__virtual__/@storybook-addon-docs-virtual-e8f719abf6/0/cache/@storybook-addon-docs-npm-6.4.20-88a2297876-63fa1cee65.zip/node_modules/@storybook/addon-docs/dist/esm/index.js"
          ),
          __webpack_require__(
            "./src/StorybookDocsFooter/StorybookDocsFooter.js"
          )),
        _excluded = ["components"];
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(esm.b)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(esm.b)(
            "h1",
            { id: "storybookdocsfooter" },
            "StorybookDocsFooter"
          ),
          Object(esm.b)("p", null, "StorybookDocsFooter description."),
          Object(esm.b)(StorybookDocsFooter.a, {
            mdxType: "StorybookDocsFooter",
          })
        );
      }
      (MDXContent.displayName = "MDXContent"), (MDXContent.isMDXComponent = !0);
      var jsx_runtime = __webpack_require__(
          "./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js"
        ),
        StorybookDocsFooter_stories_Template =
          ((__webpack_exports__.default = {
            title: "Docs Utilities/StorybookDocsFooter",
            component: StorybookDocsFooter.a,
            parameters: { docs: { page: MDXContent } },
          }),
          function Template(args) {
            return Object(jsx_runtime.jsx)(
              StorybookDocsFooter.a,
              Object.assign({}, args)
            );
          });
      StorybookDocsFooter_stories_Template.displayName = "Template";
      var MainStory = StorybookDocsFooter_stories_Template.bind({});
      MainStory.parameters = Object.assign(
        {
          storySource: {
            source: "(args) => <StorybookDocsFooter {...args} />",
          },
        },
        MainStory.parameters
      );
    },
    "./src/docs sync ^\\.[\\\\/](?:Introduction\\.mdx)$": function (
      module,
      exports
    ) {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      (webpackEmptyContext.keys = function () {
        return [];
      }),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (module.exports = webpackEmptyContext),
        (webpackEmptyContext.id =
          "./src/docs sync ^\\.[\\\\/](?:Introduction\\.mdx)$");
    },
    "./src/docs/Introduction.stories.mdx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "__page", function () {
          return __page;
        });
      __webpack_require__(
        "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.object.keys.js"
      ),
        __webpack_require__(
          "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.array.index-of.js"
        ),
        __webpack_require__(
          "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.symbol.js"
        ),
        __webpack_require__(
          "./.yarn/unplugged/core-js-npm-3.18.1-17afc1fe9c/node_modules/core-js/modules/es.object.assign.js"
        ),
        __webpack_require__(
          "./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"
        );
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./.yarn/__virtual__/@mdx-js-react-virtual-8da21fbe32/0/cache/@mdx-js-react-npm-1.6.22-57e4c05c2b-bc84bd514b.zip/node_modules/@mdx-js/react/dist/esm.js"
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            "./.yarn/__virtual__/@storybook-addon-docs-virtual-e8f719abf6/0/cache/@storybook-addon-docs-npm-6.4.20-88a2297876-63fa1cee65.zip/node_modules/@storybook/addon-docs/dist/esm/index.js"
          ),
        _StorybookDocsFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          "./src/StorybookDocsFooter/StorybookDocsFooter.js"
        ),
        _excluded = ["components"];
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) &&
                    (target[key] = source[key]);
              }
              return target;
            }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.d,
            { title: "Documentation/Introduction", mdxType: "Meta" }
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "h1",
            { id: "paper-guava-ui" },
            "Paper Guava UI"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            "This is a stylized component library of React components used in Victor Perez's projects. It has an emphasis on:"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "ul",
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              "Performance"
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              "Accessibility"
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              "Documentation"
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            "Because of this, there are various design tradoffs you may encounter. Most of them will be listed here in time as the format is more ironed out."
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "p",
            null,
            "This is very much an early version and many things are a work in progress."
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "h2",
            { id: "key-features-in-progress" },
            "Key features in progress"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "ul",
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              "Component template creation script"
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              "npm publishing"
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "h2",
            { id: "work-in-progress-components" },
            "Work in progress components"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "ul",
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              "Button"
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              "ImageLink"
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              "StorybookDocsFooter"
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "h2",
            { id: "design-mockups-done" },
            "Design mockups done"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            "ul",
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              "Global Header"
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              "Box"
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
              "li",
              { parentName: "ul" },
              "Typography Components"
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
            _StorybookDocsFooter__WEBPACK_IMPORTED_MODULE_7__.a,
            { mdxType: "StorybookDocsFooter" }
          )
        );
      }
      (MDXContent.displayName = "MDXContent"), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error("Docs-only story");
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: "Documentation/Introduction",
          includeStories: ["__page"],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentAnnotations: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    "./storybook-init-framework-entry.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(
        "./.yarn/__virtual__/@storybook-react-virtual-7466844acb/0/cache/@storybook-react-npm-6.4.20-405015628d-03878cf4cb.zip/node_modules/@storybook/react/dist/esm/client/index.js"
      );
    },
    0: function (module, exports, __webpack_require__) {
      __webpack_require__(
        "./.yarn/__virtual__/@storybook-core-client-virtual-b2fd25c8d7/0/cache/@storybook-core-client-npm-6.4.20-e9d513dda8-17eab1180d.zip/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"
      ),
        __webpack_require__(
          "./.yarn/__virtual__/@storybook-core-client-virtual-b2fd25c8d7/0/cache/@storybook-core-client-npm-6.4.20-e9d513dda8-17eab1180d.zip/node_modules/@storybook/core-client/dist/esm/globals/globals.js"
        ),
        __webpack_require__("./storybook-init-framework-entry.js"),
        __webpack_require__(
          "./.yarn/__virtual__/@storybook-addon-docs-virtual-ab559caeb0/0/cache/@storybook-addon-docs-npm-6.4.20-88a2297876-63fa1cee65.zip/node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./.yarn/__virtual__/@storybook-addon-docs-virtual-ab559caeb0/0/cache/@storybook-addon-docs-npm-6.4.20-88a2297876-63fa1cee65.zip/node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./.yarn/__virtual__/@storybook-react-virtual-7466844acb/0/cache/@storybook-react-npm-6.4.20-405015628d-03878cf4cb.zip/node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"
        ),
        __webpack_require__(
          "./.yarn/__virtual__/@storybook-addon-links-virtual-e257bf6a70/0/cache/@storybook-addon-links-npm-6.4.20-cabb2a2166-eb95970009.zip/node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./.yarn/__virtual__/@storybook-addon-actions-virtual-22d20997d0/0/cache/@storybook-addon-actions-npm-6.4.20-220ae85ae5-e844f31a2a.zip/node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./.yarn/__virtual__/@storybook-addon-actions-virtual-22d20997d0/0/cache/@storybook-addon-actions-npm-6.4.20-220ae85ae5-e844f31a2a.zip/node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./.yarn/__virtual__/@storybook-addon-backgrounds-virtual-f7c2af4e16/0/cache/@storybook-addon-backgrounds-npm-6.4.20-fcf6f96a4a-3aad65118c.zip/node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./.yarn/__virtual__/@storybook-addon-backgrounds-virtual-f7c2af4e16/0/cache/@storybook-addon-backgrounds-npm-6.4.20-fcf6f96a4a-3aad65118c.zip/node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./.yarn/__virtual__/@storybook-addon-measure-virtual-36b07435c5/0/cache/@storybook-addon-measure-npm-6.4.20-f8613c5170-a4b6f01f0d.zip/node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./.yarn/__virtual__/@storybook-addon-outline-virtual-6b112abd54/0/cache/@storybook-addon-outline-npm-6.4.20-9320489dbf-ab673467f6.zip/node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./.yarn/__virtual__/@storybook-addon-a11y-virtual-8fa3739b91/0/cache/@storybook-addon-a11y-npm-6.4.20-ebd836ae0f-3f88448041.zip/node_modules/@storybook/addon-a11y/dist/esm/a11yRunner.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./.yarn/__virtual__/@storybook-addon-a11y-virtual-8fa3739b91/0/cache/@storybook-addon-a11y-npm-6.4.20-ebd836ae0f-3f88448041.zip/node_modules/@storybook/addon-a11y/dist/esm/a11yHighlight.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./.storybook/preview.js-generated-config-entry.js"
        ),
        (module.exports = __webpack_require__("./generated-stories-entry.js"));
    },
    1: function (module, exports) {},
  },
  [[0, 5, 6]],
]);
