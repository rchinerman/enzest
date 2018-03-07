# Enzest

A small React starter kit using common technologies (Enzyme, ESLint, Flow, Jest, Styled-Components).

# Quick Start

## Installation

```sh
git clone https://github.com/rchinerman/enzest.git && cd enzest
```

## Installing Dependencies/Types

To install the dependencies from package.json:

```
yarn install
```

To install all third-party library interface definitions assocated with our dependencies for use with Flow, first ensure the [flow-typed] tool is installed.

```
yarn global add flow-typed
```

Then, install the all definitions listed within package.json:

```
flow-typed install
```

# Testing

## Jest/Enzyme

Testing code functionality

```
yarn test
```

## Flow

Testing Flow type errors

```
yarn run flow
```

## ESLint

Testing code styling

```
yarn global add eslint
```
then
```
eslint lib/**
```

### Text Editor

It's easier and more practical to use a text editor with extension support for Flow testing and ESLint.
[VS Code](https://code.visualstudio.com/)

## Built With

* [Create-React-App](https://github.com/facebook/create-react-app)

## Authors

* **Ryan Hinerman** - *Initial work* - [rchinerman](https://github.com/rchinerman)

See also the list of [contributors](https://github.com/rchinerman/enzest/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details


