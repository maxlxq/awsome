function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import { Box, NumberPicker, Button } from '@alifd/next';
import { thousandFormat } from 'awsome-utils';

var ThousandFormat = function ThousandFormat() {
  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      num = _useState2[0],
      setNum = _useState2[1];

  var _useState3 = useState(2),
      _useState4 = _slicedToArray(_useState3, 2),
      digit = _useState4[0],
      setDigit = _useState4[1];

  var _useState5 = useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      text = _useState6[0],
      setText = _useState6[1];

  var onChangeDigit = function onChangeDigit(val) {
    return setDigit(val || 2);
  };

  var onClick = function onClick() {
    setText(thousandFormat(num || '', digit));
  };

  return /*#__PURE__*/React.createElement(Box, {
    direction: "column"
  }, /*#__PURE__*/React.createElement(NumberPicker, {
    label: "\u8BF7\u8F93\u5165\u6709\u6548\u6570\u5B57\uFF1A",
    precision: 8,
    placeholder: "\u6574\u6570 or \u5C0F\u6570",
    hasTrigger: false,
    onChange: setNum
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(NumberPicker, {
    label: "\u8BF7\u8F93\u5165\u5C0F\u6570\u4F4D\uFF1A",
    placeholder: "\u6574\u6570",
    hasTrigger: false,
    onChange: onChangeDigit,
    defaultValue: 2
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Button, {
    type: "normal",
    onClick: onClick
  }, "\u63D0\u4EA4"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "#4c4c4c",
      fontSize: 14
    }
  }, "\u683C\u5F0F\u5316\u540E\uFF1A".concat(text || '待输入')));
};

export default ThousandFormat;