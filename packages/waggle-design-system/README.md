<p align="center">
  <a href="https://www.npmjs.com/package/waggle-design-system">
    <img width="200" src="https://github.com/teamWaggle/Waggle-front/assets/100590110/cfc8aa01-6e9b-41bc-b40d-b4d7a9d953de">
  </a>
</p>

<h1 align="center">Waggle Design System</h1>

A design system library for Waggle, a place-based travel record service.

## Installation

```sh
$ npm install waggle-design-system
# or
$ yarn add waggle-design-system
```

## Getting started

To start using the components, first wrap your application in a provider provided by **waggle-design-system**

```jsx
import { WaggleProvider } from 'waggle-design-system';

const App = ({ children }) => {
  return <WaggleProvider>{children}</WaggleProvider>;
};
```

<br>

After adding the provider, now you can start using components like this.

```jsx
import { Button } from 'waggle-design-system';

function App() {
  return (
    <Button variant="default">
      Hello World
    </Button>
  );
}
```

## Contributors

| <img src="https://github.com/sikkzz.png" width="120" height="120"> | <img src ="https://github.com/Hellol77.png" width="120" height="120"> |
| :---------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: |
|                         [sikkzz](https://github.com/sikkzz)                         |                          [Hellol77](https://github.com/Hellol77)                          |                            