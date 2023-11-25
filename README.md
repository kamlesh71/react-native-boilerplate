## React Native Project with Redux, Redux Saga, TypeScript, Path Aliases, Fonts, React Native Paper, React Navigation, Dark Mode, and Login Flow

### Project Overview

This React Native project is a comprehensive setup that includes Redux, Redux Saga, TypeScript, path aliases, fonts, React Native Paper, React Navigation, and login flow. It also features a dark mode toggle that can be switched manually or automatically based on the user's OS preference.

### Features

* Redux and Redux Saga for state management
* TypeScript for type safety and code maintainability
* Path aliases for easy navigation within the project
* Custom fonts for enhanced UI design
* React Native Paper for a consistent and cross-platform UI
* React Navigation for effortless app navigation
* Dark mode toggle for personalized user experience
* Login flow for secure user authentication

### Directory Structure

The project is organized into well-defined directories and files to maintain a clean and maintainable codebase:

```
assets
├── fonts
│   ├── font1.ttf
│   └── font2.otf
└── images
    ├── image1.png
    └── image2.jpg
components
├── Button
│   ├── Button.tsx
│   └── Button.types.ts
├── Input
│   ├── Input.tsx
│   └── Input.types.ts
├── Text
│   ├── Text.tsx
│   └── Text.types.ts
└── ...
hooks
├── useAsyncEffect.ts
├── useDebounce.ts
├── useFetch.ts
└── ...
navigation
├── AuthStack.tsx
├── MainStack.tsx
└── RootStack.tsx
screens
├── Auth
│   ├── LoginScreen.tsx
│   └── SignupScreen.tsx
├── Home
│   └── HomeScreen.tsx
└── ...
services
├── AuthService.ts
├── TokenService.ts
└── ...
store
├── index.ts
├── module-name
│   ├── api.ts
│   ├── sagas.ts
│   ├── selectors.ts
│   ├── slices.ts
│   └── types.ts
└── ...
utils
├── constants.ts
├── helpers.ts
├── validators.ts
└── ...
```

### Dark Mode Toggle

The project provides a dark mode toggle that can be switched manually by the user or automatically based on the user's OS preference.

### Login Flow

The project includes a login flow that allows users to authenticate their credentials before accessing the app's features.

### Customization

The project is designed to be easily customizable to suit your specific needs and preferences.

### Contributing

Contributions to the project are welcome. Please follow the guidelines in the `CONTRIBUTING.md` file.