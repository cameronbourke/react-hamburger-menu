React Hamburger Menu
=========================

Built for React, this is a handy UI component for a menu icon in a mobile site or application.

## Installation

react-hamburger-menu requires **React 0.14 or later.**

```
npm install --save react-hamburger-menu
```

## Demo & Example

Live demo: [cameronbourke.github.io/react-hamburger-menu](http://cameronbourke.github.io/react-hamburger-menu)

http://username.github.io/repository/

To build the example locally, clone this repo then run:

```
npm install
npm start
Then open localhost:8080 in a browser.
```

## Usage

React Hamburger Menu only has two required props. They are `isOpen` and `menuClicked`. The other 7 props are optional.

#### menuClicked

Note: This prop is passed a `function`. This function will be invoked when the component is `clicked`. The function should responsible for updating the state that is passed to `isOpen`. The function passed to `menuClicked` could look something like the following:

```js
handleClick() {
	this.setState({
		open: !this.state.open
	});
}
```

An example use of React Hamburger Menu looks like:

```js
<HamburgerMenu
	isOpen={this.state.open}
	menuClicked={this.handleClick.bind(this)}
	width={18}
	height={15}
	strokeWidth={1}
	rotate={0}
	color='black'
	borderRadius={0}
	animationDuration={0.5}
/>
```

Note, not all props are required. All the props besides `isOpen` and `menuClicked` have defaults.

## Options

Property  | Type | Default | Description
------------- | ------------- | --------- | ----------
isOpen            | bool   | undefined | determines whether the menu is a hamburger or cross icon
menuClicked       | func   | undefined | will be invoked when the component is clicked
width             | number | 36        | the width of the icon
height            | number | 30        | the height of the icon
strokeWidth       | number | 2         | the stroke width of the lines
rotate            | number | 0         | the rotation of the icon, eg {45} would be `45deg`
color             | string | #000      | the color of both icons
borderRadius      | number | 0         | the border radius of the lines
animationDuration | number | 0.4       | the length of time it takes for the icon transitions to complete.

## Todo

- Add Unit Tests

## License

MIT Licensed Copyright (c) Cameron Bourke 2016
