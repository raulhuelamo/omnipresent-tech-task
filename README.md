
# Tech Task @ Omnipresent - Raul Huelamo

> This workspace was generated using [Nx](https://nx.dev).

## Introduction

Hola, Raul here~

This is my best effort to complete the task. Hope you find it interesting, and you are up for a follow-up conversation.

Before starting the task, I've been reading about different Front-End architecture approaches and testing strategies, so I had a kind-of clear vision of the direction I'd like the project to take.

But my main idea was to start simple, _Many More Much Smaller Steps_, and let the design emerge.

I've been following TDD cycles, alternating between **Green-Red-Green** (writing relevant tests to drive the logic, writing the dumbest code posible to pass the tests) and **Green-Green** (relentlessly refactoring) cycles; trying to write simple tests, close to natural language, and trying to introduce some of the ubiquitous language of the domain.

I've tried to keep the tests simple to write, and as decoupled from implementation details as possible.

There is a lot of room for improvement and refactoring, but I had to stop at some point. I believe the tests are quite resistant to refactoring, so we could assemble the team and take some decisions around the design of the architecture, and to define next steps. I really missed having an pair here.

I'll let you explore the code, you can find some commands on how to use this project below:

## Install

Run `yarn` to install the dependencies

## Running tests

Run `yarn nx test onboarding-form` to execute the tests via [Jest](https://jestjs.io).

## Development server

Run `yarn nx serve onboarding-form` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Build

Run `yarn nx build onboarding-form` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
