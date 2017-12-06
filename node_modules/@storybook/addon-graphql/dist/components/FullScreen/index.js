'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FullScreen;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FullScreen(props) {
  return _react2.default.createElement(
    'div',
    { style: _style2.default.wrapper },
    props.children
  );
}

FullScreen.defaultProps = { children: null };
FullScreen.propTypes = { children: _propTypes2.default.node };