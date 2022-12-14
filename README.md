
# Tech Task @ Omnipresent - Raul Huelamo

> This workspace was generated using [Nx](https://nx.dev).

## Introduction

Hola, Raul here~

This is my best effort to complete the task. Hope you find it interesting, and you are up for a follow-up conversation.

Before starting the task, I've been reading about different Front-End architecture approaches and testing strategies, so I had a kind-of clear vision of the direction I'd like the project to take.

But my main idea was to start simple, take _Many More Much Smaller Steps_, and let the design emerge.

I've been following TDD cycles, alternating between **Green-Red-Green** (writing relevant tests to drive the logic, writing the dumbest code posible to pass the tests) and **Green-Green** (relentlessly refactoring) cycles; trying to write simple tests, close to natural language, and trying to introduce some of the ubiquitous language of the domain. You can check the commit history to follow my process... though it got a tad messy at the end, when I rushed due to the time constraints.

I've tried to create the tests with simplicity to write them in mind, and attempting to have them as decoupled as possible from implementation details, to ensure the engineers working in the much needed upcoming refactor would have a proper safety net, resistant to refactoring, and letting the architecture design emerge before enriching the testing strategy.

There is a lot of room for improvement and refactoring (_e.g. create field components, setup a context to avoid explicitly mapping so many props_), but I had to stop at some point. I believe the code is at that point where the team should align on the direction they want to take, and take some decisions around the design of the architecture, before defining the next steps. I really missed having an pair here!

I'll let you explore the code, you can find some commands on how to use this project below.

## Stack choice

The project has been created with **NX**, as I'm quite used to work with it, and it allows me to start a well-structured project in seconds (on the other hand, the trade-off here is to have a clutered folder structure since the beginning of the project).

The FE is a simple **React** application, tested with **Jest** and **@testing-library/react**; I feel comfortable working with these technologies, but I feel I'm a bit outdated due to my late focus on BackEnd design and architecture. 

It is styled using **Tailwind CSS**. I never used it before, and I felt it was a great moment to do so. It's been quite easy to provide some simple stylings. I would rather use an already-branded component library, but considering there is none, I felt the best option would be to use an utility-based library.

## Install

Run `yarn` to install the dependencies

## Running tests

Run `yarn nx test onboarding-form` to execute the tests via [Jest](https://jestjs.io).
Run `yarn nx test onboarding-form --coverage` to execute the tests and generate its coverage. An HTML version will be stored in the `coverage/` directory.

## Development server

Run `yarn nx serve onboarding-form` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Build

Run `yarn nx build onboarding-form` to build the project. The build artifacts will be stored in the `dist/` directory.
