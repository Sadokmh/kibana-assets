"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.Template = void 0;

var _react = _interopRequireWildcard(require("react"));

var _fonts = require("./fonts");

var _styles = require("./styles");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const Template = ({
  metadata: {
    uiPublicUrl,
    locale,
    darkMode,
    injectedMetadata,
    i18n,
    bootstrapScriptUrl,
    strictCsp,
  },
}) => {
  const logo = /*#__PURE__*/ _react.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "45",
      height: "45",
      viewBox: "0 0 7940 7690",
      preserveAspectRatio: "xMidYMid meet",
    },
    /*#__PURE__*/ _react.default.createElement(
      "g",
      {
        fill: "#0af1d0",
      },
      /*#__PURE__*/ _react.default.createElement("path", {
        d:
          "M260 3750 l0 -3540 285 0 285 0 0 3540 0 3540 -285 0 -285 0 0 -3540z",
      }),
      /*#__PURE__*/ _react.default.createElement("path", {
        d:
          "M3690 4655 l0 -2635 285 0 285 0 0 2635 0 2635 -285 0 -285 0 0 -2635z",
      }),
      /*#__PURE__*/ _react.default.createElement("path", {
        d:
          "M7120 3750 l0 -3540 285 0 285 0 0 3540 0 3540 -285 0 -285 0 0 -3540z",
      })
    )
  );

  return /*#__PURE__*/ _react.default.createElement(
    "html",
    {
      lang: locale,
    },
    /*#__PURE__*/ _react.default.createElement(
      "head",
      null,
      /*#__PURE__*/ _react.default.createElement("meta", {
        charSet: "utf-8",
      }),
      /*#__PURE__*/ _react.default.createElement("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge,chrome=1",
      }),
      /*#__PURE__*/ _react.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width",
      }),
      /*#__PURE__*/ _react.default.createElement("title", null, "Elastic"),
      /*#__PURE__*/ _react.default.createElement(_fonts.Fonts, {
        url: uiPublicUrl,
      }),
      /*#__PURE__*/ _react.default.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: `${uiPublicUrl}/favicons/apple-touch-icon.png`,
      }),
      /*#__PURE__*/ _react.default.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `${uiPublicUrl}/favicons/favicon-32x32.png`,
      }),
      /*#__PURE__*/ _react.default.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `${uiPublicUrl}/favicons/favicon-16x16.png`,
      }),
      /*#__PURE__*/ _react.default.createElement("link", {
        rel: "manifest",
        href: `${uiPublicUrl}/favicons/manifest.json`,
      }),
      /*#__PURE__*/ _react.default.createElement("link", {
        rel: "mask-icon",
        color: "#e8488b",
        href: `${uiPublicUrl}/favicons/safari-pinned-tab.svg`,
      }),
      /*#__PURE__*/ _react.default.createElement("link", {
        rel: "shortcut icon",
        href: `${uiPublicUrl}/favicons/favicon.ico`,
      }),
      /*#__PURE__*/ _react.default.createElement("meta", {
        name: "msapplication-config",
        content: `${uiPublicUrl}/favicons/browserconfig.xml`,
      }),
      /*#__PURE__*/ _react.default.createElement("meta", {
        name: "theme-color",
        content: "#ffffff",
      }),
      /*#__PURE__*/ _react.default.createElement(_styles.Styles, {
        darkMode: darkMode,
      }),
      /*#__PURE__*/ _react.default.createElement("meta", {
        name: "add-styles-here",
      }),
      /*#__PURE__*/ _react.default.createElement("meta", {
        name: "add-scripts-here",
      })
    ),
    /*#__PURE__*/ _react.default.createElement(
      "body",
      null,
      /*#__PURE__*/ (0, _react.createElement)("kbn-csp", {
        data: JSON.stringify({
          strictCsp,
        }),
      }),
      /*#__PURE__*/ (0, _react.createElement)("kbn-injected-metadata", {
        data: JSON.stringify(injectedMetadata),
      }),
      /*#__PURE__*/ _react.default.createElement(
        "div",
        {
          className: "kbnWelcomeView",
          id: "kbn_loading_message",
          style: {
            display: "none",
          },
          "data-test-subj": "kbnLoadingMessage",
        },
        /*#__PURE__*/ _react.default.createElement(
          "div",
          {
            className: "kbnLoaderWrap",
          },
          logo,
          /*#__PURE__*/ _react.default.createElement(
            "div",
            {
              className: "kbnWelcomeText",
              "data-error-message": i18n("core.ui.welcomeErrorMessage", {
                defaultMessage:
                  "Green Metrics did not load properly. Check the server output for more information.",
              }),
            },
            i18n("core.ui.welcomeMessage", {
              defaultMessage: "Loading Green Metrics",
            })
          ),
          /*#__PURE__*/ _react.default.createElement("div", {
            className: "kbnProgress",
          })
        )
      ),
      /*#__PURE__*/ _react.default.createElement(
        "div",
        {
          className: "kbnWelcomeView",
          id: "kbn_legacy_browser_error",
          style: {
            display: "none",
          },
        },
        logo,
        /*#__PURE__*/ _react.default.createElement(
          "h2",
          {
            className: "kbnWelcomeTitle",
          },
          i18n("core.ui.legacyBrowserTitle", {
            defaultMessage: "Please upgrade your browser",
          })
        ),
        /*#__PURE__*/ _react.default.createElement(
          "div",
          {
            className: "kbnWelcomeText",
          },
          i18n("core.ui.legacyBrowserMessage", {
            defaultMessage:
              "This Elastic installation has strict security requirements enabled that your current browser does not meet.",
          })
        )
      ),
      /*#__PURE__*/ _react.default.createElement(
        "script",
        null,
        `
            // Since this is an unsafe inline script, this code will not run
            // in browsers that support content security policy(CSP). This is
            // intentional as we check for the existence of __kbnCspNotEnforced__ in
            // bootstrap.
            window.__kbnCspNotEnforced__ = true;
          `
      ),
      /*#__PURE__*/ _react.default.createElement("script", {
        src: bootstrapScriptUrl,
      })
    )
  );
};

exports.Template = Template;
