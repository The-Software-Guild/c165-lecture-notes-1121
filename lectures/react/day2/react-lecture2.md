<<<<<<< HEAD
# C165 Week 2 React Lecture 1

Learnign goals for react day 1 => As we dive into React we first touch on a few vanilla JS concepts that will prepare us for using the most popular javascipt framework in the world. Buckle-up.

## Agenda

    1) Day 0 Recap
    2) Vanilla DOM Tree
    3) Constructor Functions & Classes
    4) Introduction to React.js
    5) Event Handling

### 1. Day 0 Recap

- Express.js
- Middleware
- Nodemon
- API's
- Routing
- Parameterization
- TDD
- Mocha & Chai
- Socket IO

### 2. Vanilla DOM Tree

#### **The Document Object**

*_main.js_

#### **Intro To The DOM**

The DOM (Document Object Model) is a object that represents the HTML and CSS of a web page. The DOM allows us to use JavaScript to interface with what the user sees.

There are a few ways to select elements from the DOM.

    document.getElementById()

    document.getElementsByClassName()

    document.querySelector()

Notice the "s" on elements in getElementsByClassName. **Any DOM method with the plural elements will return an array.** You are able to loop over each element, or select an individual element with bracket notation.

    document.createElement() takes a string of the tag name you want to create. It then returns the element.

The most common way to append this to the DOM is to first select the parent, and call it's .appendChild.

You may be asking why we wouldn't just write this in our HTML.

JavaScript helps us dynamically render our apps. We'll be using JavaScript to get us dynamic data, and then change how the webpage looks depending.

If a user wanted to take things from a list, or add to a list, we would use JavaScript to control that.

Much of your DOM manipulation will happen after the user does something. To make the user able to change what they see, you'll need to learn to use [event listeners](https://coursework.vschool.io/event-listeners/)

### 3. Constructor Functions & Classes

Sometimes we need a "blueprint" for creating many objects of the same "type".

The way to create an "object type", is to use an object constructor function.

Objects of the same type are created by calling the constructor function with the new keyword:

```javascript
const myFather = new Person("John", "Doe", 50, "blue");

const myMother = new Person("Sally", "Rally", 48, "green");
```

#### **The this Keyword**

In JavaScript, the thing called _**this**_ is the object that "owns" the code.

The value of _**this**_, when used in an object, is the object itself.

In a constructor function _**this**_ does not have a value. It is a substitute for the new object. The value of _**this**_ will become the new object when a new object is created.

#### **Built-in JavaScript Constructors**

#### **Classes**

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Rectangle" here).

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

An important difference between function declarations and class declarations is that **function declarations are hoisted and class declarations are not**. You first need to declare your class and then access it

#### **Strict Mode**

The body of a class is executed in strict mode, i.e., code written here is subject to stricter syntax for increased performance, some otherwise silent errors will be thrown, and certain keywords are reserved for future versions of ECMAScript.

##### **constructor()**

The constructor method is a special method of a class for creating and initializing an object of that class.

    A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.

If you don't provide your own constructor, then a default constructor will be supplied for you. If your class is a base class, the default constructor is empty:

```Javascript
constructor()
```

If your class is a derived class, the default constructor calls the parent constructor, passing along any arguments that were provided:

```Javascript
constructor(...args) {
    super(...args)
}
```

- args for us are what we use to pass information between components ... aka props!

There can be only one special method with the name "constructor" in a class. Having more than one occurrence of a constructor method in a class will throw a SyntaxError error.

    A constructor can use the super keyword to call the constructor of the super class.

#### **Static Methods & Properties**

The static keyword defines a static method or property for a class. Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

### 4. Introduction to React.js

REACT DEV TOOLS -> has everyone installed it? If not lets do that now

React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code **more predictable** and easier to debug.

React is component-based, meaning you can build **encapsulated** components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

- Setup

CRA and how everything is connected with ReactDom.render()

- Components

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

    2 types:

    1. Functional
    2. Class

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

- Props

When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

**Props are Read-Only**

Whether you declare a component as a function or a class, it must never modify its own props.

    Functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.

React is pretty flexible but it has a single strict rule:

_**All React components must act like pure functions with respect to their props.**_

#### **State**

State is similar to props, but it is private and fully controlled by the component.

In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().

    Internal state alows for true encapsulation and reusability.

#### **Do Not Modify State Directly**

- Instead, use setState()

- The only place where you can assign this.state is the constructor.

- State Updates May Be Asynchronous

*React may batch multiple setState() calls into a single update for performance. Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

#### **A Simple Component**

React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.

#### **A Stateful Component**

In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().

In order to gain access to state or a components lifecycle method we must convert our functional component into a class. (you should always be writing components functional, until you need state or a lifecycle method and then convert it)

_example.see_assets_

#### **This**

You have to be careful about the meaning of _this_ in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.

This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, **if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.**

If calling bind annoys you, there are two ways you can get around this. If you are using the experimental public class fields syntax, you can use class fields to correctly bind callbacks.

```Javascript
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```

*This syntax is enabled by default in Create React App.

If you aren’t using class fields syntax, you can use an arrow function in the callback:

```Javascript
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```

The problem with this syntax is that a different callback is created each time the LoggingButton renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.

**_show binding of this in constructor_**

### 5. Event Handling

#### **Vanilla**

[Events](https://www.w3schools.com/js/js_htmldom_events.asp)

[Event Bubbling & Propogation](https://frontend.turing.edu/lessons/module-1/js-event-bubbling-and-delegation.html?ads_cmpid=6451354298&ads_adid=76255849919&ads_matchtype=&ads_network=g&ads_creative=517671727591&utm_term=&ads_targetid=dsa-19959388920&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2&gclid=Cj0KCQiA2NaNBhDvARIsAEw55hieoAUdHrTB1xeeLjD-Rvux_Q_bTvW1P_CjVQC5fqlDYXiOq4VqauIaAnwVEALw_wcB)

[addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

#### **In React**

Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

- React events are named using camelCase, rather than lowercase.

- With JSX you pass a function as the event handler, rather than a string.

- You cannot return false to prevent default behavior in React. You must call preventDefault explicitly

- You generally don’t need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.

- When you define a component using an ES6 class, a common pattern is for an event handler to be a method on the class.
=======
# C165 Week 2 React Lecture 2

Learnign goals for react day 2 => to finish our high level concepts of react, catch up with old assignments or materials, and make way for a more code heavy end of the week.

## Agenda

    1) Day 1 Recap
    2) Routing
    3) Composition vs Inheritance
    4) Unit Testing with Jest & Enzyme

### 1. Day 1 Recap

- Vanilla DOM
- Constructor Functions & Classes
- Intro to React
- Event Handling

### 2. Routing

Components are the heart of React's powerful, declarative programming model. [React Router](https://reactrouter.com/) is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native.

### 3. Composition vs Inheritance

React has a powerful composition model, and they recommend using composition instead of inheritance to reuse code between components.

**So What About Inheritance?**

At Facebook, they use React in thousands of components, and haven’t found any use cases where they would recommend creating component inheritance hierarchies.

Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.

If you want to reuse non-UI functionality between components, they suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.

    The above paragraph is a perfect example of Encapsulation & Abstraction, can you name the other two pillars of OOP (Object Oriented Programming)

#### **Containment**

Some components don’t know their children ahead of time. This is especially common for components like Sidebar or Dialog that represent generic “boxes”.

We recommend that such components use the special children prop to pass children elements directly into their output:

```javascript
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
```

This lets other components pass arbitrary children to them by nesting the JSX:

```javascript
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
```

Anything inside the ```FancyBorder``` JSX tag gets passed into the FancyBorder component as a children prop. Since FancyBorder renders {props.children} inside a ```div```, the passed elements appear in the final output.

While this is less common, sometimes you might need multiple “holes” in a component. In such cases you may come up with your own convention instead of using children:

```javascript
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}
```

React elements like ```Contacts``` and ```Chat`` are just objects, so you can pass them as props like any other data. This approach may remind you of “slots” in other libraries but there are no limitations on what you can pass as props in React.

#### **Specialization**

Sometimes we think about components as being “special cases” of other components. For example, we might say that a WelcomeDialog is a special case of Dialog.

In React, this is also achieved by composition, where a more “specific” component renders a more “generic” one and configures it with props:

```javascript
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}
```

Composition works equally well for components defined as classes:

```javascript
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}
```

### 4. Unit Testing with Jest & Enzyme

As your codebase expands, small errors and edge cases you don’t expect can cascade into larger failures. Bugs lead to bad user experience and ultimately, business losses. One way to prevent fragile programming is to test your code before releasing it into the wild.

In this guide, we will cover different, automated ways to ensure your app works as expected, ranging from static analysis to end-to-end tests.

We're humans, and humans make mistakes. Testing is important because it helps you uncover these mistakes and verifies that your code is working. Perhaps even more importantly, testing ensures that your code continues to work in the future as you add new features, refactor the existing ones, or upgrade major dependencies of your project.

There is more value in testing than you might realize. One of the best ways to fix a bug in your code is to write a failing test that exposes it. Then when you fix the bug and re-run the test, if it passes it means the bug is fixed, never reintroduced into the code base.

Tests can also serve as **documentation** for new people joining your team. For people who have never seen a codebase before, reading tests can help them understand how the existing code works.

Last but not least, more automated testing means less time spent with manual QA, freeing up valuable time.

#### **Static Analysis**

The first step to improve your code quality is to start using static analysis tools. Static analysis checks your code for errors as you write it, but without running any of that code.

Linters analyze code to catch common errors such as unused code and to help avoid pitfalls, to flag style guide no-nos like using tabs instead of spaces (or vice versa, depending on your configuration).

Type checking ensures that the construct you’re passing to a function matches what the function was designed to accept, preventing passing a string to a counting function that expects a number, for instance.

#### **Writing Testable Code**

To start with tests, you first need to write code that is testable. Consider an aircraft manufacturing process - before any model first takes off to show that all of its complex systems work well together, individual parts are tested to guarantee they are safe and function correctly. For example, wings are tested by bending them under extreme load; engine parts are tested for their durability; the windshield is tested against simulated bird impact.

Software is similar. Instead of writing your entire program in one huge file with many lines of code, you write your code in multiple small modules that you can test more thoroughly than if you tested the assembled whole. In this way, writing testable code is intertwined with writing clean, modular code.

To make your app more testable, start by separating the view part of your app—your React components—from your business logic and app state (regardless of whether you use Redux, MobX or other solutions). This way, you can keep your business logic testing—which shouldn’t rely on your React components—independent of the components themselves, whose job is primarily rendering your app’s UI!

Theoretically, you could go so far as to move all logic and data fetching out of your components. This way your components would be solely dedicated to rendering. Your state would be entirely independent of your components. Your app’s logic would work without any React components at all!

You can test React components similar to testing other JavaScript code.

There are a few ways to [test React components](https://reactjs.org/docs/testing.html). Broadly, they divide into two categories:

- Rendering component trees in a simplified test environment and asserting on their output.

- Running a complete app in a realistic browser environment (also known as “end-to-end” tests).

### **Structuring Tests**

Your tests should be short and ideally test only one thing. Let's start with an example unit test written with Jest:

```javascript
it('given a date in the past, colorForDueDate() returns red', () => {
  expect(colorForDueDate('2000-10-20')).toBe('red');
});
```

The test is described by the string passed to the it function. Take good care writing the description so that it’s clear what is being tested. Do your best to cover the following:

Given - some precondition
When - some action executed by the function that you’re testing
Then - the expected outcome
This is also known as AAA (Arrange, Act, Assert).

Jest offers describe function to help structure your tests. Use describe to group together all tests that belong to one functionality. Describes can be nested, if you need that. Other functions you'll commonly use are beforeEach or beforeAll that you can use for setting up the objects you're testing. Read more in the Jest api reference.

If your test has many steps or many expectations, you probably want to split it into multiple smaller ones. Also, ensure that your tests are completely independent of one another. Each test in your suite must be executable on its own without first running some other test. Conversely, if you run all your tests together, the first test must not influence the output of the second one.

Lastly, as developers we like when our code works great and doesn't crash. With tests, this is often the opposite. Think of a failed test as of a good thing! When a test fails, it often means something is not right. This gives you an opportunity to fix the problem before it impacts the users.

#### **Unit tests**

Unit tests cover the smallest parts of code, like individual functions or classes.

When the object being tested has any dependencies, you’ll often need to mock them out, as described in the next paragraph.

The great thing about unit tests is that they are quick to write and run. Therefore, as you work, you get fast feedback about whether your tests are passing. Jest even has an option to continuously run tests that are related to code you’re editing: Watch mode.

#### **Mocking & Integration Tests**
>>>>>>> react-day3-start
