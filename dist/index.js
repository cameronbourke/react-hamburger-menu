'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = HamburgerMenu;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var objectAssign = require('object-assign');

function HamburgerMenu(props) {
	var width = (props.width || 36) + 'px',
	    height = (props.height || 30) + 'px',
	    halfHeight = parseInt(height.replace('px', '')) / 2 + 'px',
	    isOpen = props.isOpen || false,
	    strokeWidth = props.strokeWidth || 2,
	    halfStrokeWidth = '-' + strokeWidth / 2 + 'px',
	    animationDuration = props.animationDuration || '0.4';

	var getTransformValue = function getTransformValue(isOpen, defaultPos, rotateVal) {
		return 'translate3d(0,' + (isOpen ? halfHeight : defaultPos) + ',0) rotate(' + (isOpen ? rotateVal + 'deg' : '0') + ')';
	};

	var styles = {
		container: {
			width: width,
			height: height,
			position: 'relative',
			transform: 'rotate(' + (props.rotate || 0) + 'deg)'
		},
		lineBase: {
			display: 'block',
			height: strokeWidth + 'px',
			width: '100%',
			background: props.color || '#000',
			transitionTimingFunction: 'ease',
			transitionDuration: animationDuration + 's',
			borderRadius: (props.borderRadius || 0) + 'px',
			transformOrigin: 'center',
			position: 'absolute'
		},
		firstLine: {
			transform: getTransformValue(isOpen, 0, 45),
			marginTop: halfStrokeWidth
		},
		secondLine: {
			transitionTimingFunction: 'ease-out',
			transitionDuration: animationDuration / 4 + 's',
			opacity: isOpen ? '0' : '1',
			top: halfHeight,
			marginTop: halfStrokeWidth
		},
		thirdLine: {
			transform: getTransformValue(isOpen, height, -45),
			marginTop: halfStrokeWidth
		}
	};

	return _react2.default.createElement(
		'div',
		{ style: styles.container, onClick: props.menuClicked },
		_react2.default.createElement('span', { style: objectAssign({}, styles.lineBase, styles.firstLine) }),
		_react2.default.createElement('span', { style: objectAssign({}, styles.lineBase, styles.secondLine) }),
		_react2.default.createElement('span', { style: objectAssign({}, styles.lineBase, styles.thirdLine) })
	);
};

HamburgerMenu.PropTypes = {
	isOpen: _react2.default.PropTypes.bool.isRequired,
	menuClicked: _react2.default.PropTypes.func.isRequired,
	width: _react2.default.PropTypes.number,
	height: _react2.default.PropTypes.number,
	strokeWidth: _react2.default.PropTypes.number,
	rotate: _react2.default.PropTypes.number,
	color: _react2.default.PropTypes.string,
	borderRadius: _react2.default.PropTypes.number,
	animationDuration: _react2.default.PropTypes.number
};
