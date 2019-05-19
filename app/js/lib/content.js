"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 =====================================================

   _____                                _    _ _  __
  / ____|                              | |  | | |/ /
 | (___  _ __   ___  _ __   __ _  ___  | |  | | ' /
  \___ \| '_ \ / _ \| '_ \ / _` |/ _ \ | |  | |  <
  ____) | |_) | (_) | | | | (_| |  __/ | |__| | . \
 |_____/| .__/ \___/|_| |_|\__, |\___|  \____/|_|\_\
        | |                 __/ |
        |_|                |___/

 =====================================================
 SPONGE UK DEVELOPER TEST
 JSON parser and event handler
 =====================================================
*/
var ContentInstance =
/*#__PURE__*/
function () {
  function ContentInstance(strDataLocation) {
    var _this = this;

    _classCallCheck(this, ContentInstance);

    this.strDataLocation = strDataLocation;
    this.objContent = {};
    this.arrOnReady = [];
    this.blReady = false;
    /**
     * Get the JSON file
     */

    $.getJSON(strDataLocation, function (objResponse) {
      _this.objContent = objResponse;
      _this.blReady = true;
      /**
       * Execute all the ready functions once loaded
       */

      $.each(_this.arrOnReady, function (intIndex, funDoOnReady) {
        funDoOnReady.call();
      });
    });
  }
  /**
   * Register a function to execute once loaded
   */


  _createClass(ContentInstance, [{
    key: "onReady",
    value: function onReady(funDoOnReady) {
      if (this.blReady) {
        funDoOnReady.call();
      } else {
        this.arrOnReady.push(funDoOnReady);
      }
    }
  }, {
    key: "getItem",

    /**
     * Get an item from the content data
     */
    value: function getItem(intItem) {
      return this.objContent[intItem];
    }
  }, {
    key: "generateComponent",
    value: function generateComponent(template, item, domElement) {
      if (template && item && domElement) {
        var strContentSource = $('#' + template).html();
        var resContentTemplate = Handlebars.compile(strContentSource);
        var strContentHTML = resContentTemplate(this.getItem(item));
        $('#' + domElement).append(strContentHTML);
      } else {
        alert('Argument not provided');
      }
    }
  }]);

  return ContentInstance;
}();
/*
      ,'``.._   ,'``.
     :,--._:)\,:,._,.:       All Glory to
     :`--,''   :`...';\      the HYPNOTOAD!
      `,'       `---'  `.
      /                 :
     /                   \
   ,'                     :\.___,-.
  `...,---'``````-..._    |:       \
    (                 )   ;:    )   \  _,-.
     `.              (   //          `'    \
      :               `.//  )      )     , ;
    ,-|`.            _,'/       )    ) ,' ,'
   (  :`.`-..____..=:.-':     .     _,' ,'
    `,'\ ``--....-)='    `._,  \  ,') _ '``._
 _.-/ _ `.       (_)      /     )' ; / \ \`-.'
`--(   `-:`.     `' ___..'  _,-'   |/   `.)
    `-. `.`.``-----``--,  .'
      |/`.\`'        ,',');
          `         (/  (/
 */