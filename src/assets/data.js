const questions = [
  {
    ques: "What is React?",
    ans: "React is a open source library of JavaScript for building dynamic and interactive user interfaces. It was developed and is maintained by facebook. It allows developers to create reusable and interactive UI components,  making it easier to build complex and dynamic frontend application.",
  },
  {
    ques: "What are Components?",
    ans: "React Components are the building blocks of a React application. In react we can create components with the help of functions and classes.",
  },
  {
    ques: "What are the different type of components in React?",
    ans: "There are 2 types of components in react: Functional components & class components.",
  },
  {
    ques: "What are functional components in React?",
    ans: "Functional components are pure functions that take props as input and return an element as output. They are most common and simplest type of components in React.",
  },
  {
    ques: "What are class components in React?",
    ans: "React Class Components are JavaScript classes that extend React.Component . Class components are more complex than functional components, but they offer more features, such as state management and lifecycle hooks.",
  },
  {
    ques: "What are props?",
    ans: "props is an attribute in jsx, which is used to pass data from parent component to child component",
  },
  {
    ques: "What is State in React?",
    ans: "State is data that is local to a React component and can be changed by the component itself.",
  },
  {
    ques: "Why should we use react?",
    ans: "React works upon the copy of real DOM which is known as virtual DOM. If we make changes in any element then only related element will be reloaded. This is not a case with vanilla js.",
  },
  {
    ques: "What is SPA and how is it related to React?",
    ans: "SPA stands for Single Page Application. React is used to create projects that are SPA projects.",
  },
  {
    ques: "What do you understand by one-way data binding?",
    ans: "One-way data binding in react is a design pattern that ensures that data flows in one-direction, form parent to child components but not vice versa. This helps to make react application more predictable and easier to debug.",
  },
  {
    ques: "What is Virtual DOM?",
    ans: "The Virtual DOM is a lightweight representation of the real DOM. It is a JavaScript object that describes the current state of the UI. When the state of the UI changes, React updates the Virtual DOM. Then, React compares the Virtual DOM to the real DOM and efficiently updates the real DOM only with the changes that are needed.",
  },
];

export default questions;
