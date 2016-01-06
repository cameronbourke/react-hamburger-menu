import React from 'react';
import HamburgerMenu from './hamburger-menu';
import TestUtils from 'react-addons-test-utils';
import test from 'tape';
import expect from 'expect';

const shallowRenderComponent = (component) => {
	const shallowRenderer = TestUtils.createRenderer();
	shallowRenderer.render(component);
	return shallowRenderer.getRenderOutput();
};

const getChildStyle = (parent, index = 0) => parent.props.children[index].props.style;

test('should show the correct icon depending what is passed to isOpen', (t) => {
	function renderHamburgerMenu(isOpen) {
		const output = shallowRenderComponent( <HamburgerMenu isOpen={isOpen} /> );
		const [, middleLine] = output.props.children;
		return middleLine.props.style.opacity;
	}

	expect(renderHamburgerMenu(false)).toBe('1');
	t.pass('component is a hamburger icon');

	expect(renderHamburgerMenu(true)).toBe('0');
	t.pass('component is a crpss icon');
	t.end();
});

test('should be the correct size', (t) => {
	const output = shallowRenderComponent( <HamburgerMenu width={30} height={20} /> );
	const { style } = output.props;

	expect(style.width).toBe('30px');
	t.pass('component is the correct width');

	expect(style.height).toBe('20px');
	t.pass('component is the correct height');
	t.end();
});

test('should have the correct stroke width', (t) => {
	const output = shallowRenderComponent( <HamburgerMenu strokeWidth={3} /> );
	const { height } = getChildStyle(output);

	expect(height).toBe('3px');
	t.pass('lines are the correct width');
	t.end();
});

test('should be able to rotate', (t) => {
	const output = shallowRenderComponent(<HamburgerMenu rotate={45} />);
	const { style } = output.props;

	expect(style.transform).toBe('rotate(45deg)');
	t.pass('component is correctly rotated');
	t.end();
});

test('should be able to show the background of each line as a gradient', (t) => {
	const gradient = 'linear-gradient(135deg, red, blue)';
	const output = shallowRenderComponent( <HamburgerMenu color={gradient} /> );
	const { background } = getChildStyle(output);

	expect(background).toBe(gradient);
	t.pass('each line has a gradient for the background');
	t.end();
});

test('should have the correct border radius', (t) => {
	const output = shallowRenderComponent( <HamburgerMenu borderRadius={5} /> );
	const { borderRadius } = getChildStyle(output);

	expect(borderRadius).toBe('5px');
	t.pass('each line has a gradient for the background');
	t.end();
});

test('should have the correct animation length', (t) => {
	const output = shallowRenderComponent( <HamburgerMenu animationDuration={'0.5'} /> );
	const { transitionDuration } = getChildStyle(output);

	expect(transitionDuration).toBe('0.5s');
	t.pass('each line has correct transition length');
	t.end();
});
