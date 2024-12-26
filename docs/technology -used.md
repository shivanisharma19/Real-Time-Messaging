# Technology Stack

## Typescript

This project is fully written in [Typescript](https://www.typescriptlang.org/). When adding new files please ensure the correct file ending (either `.ts` or `.tsx` for react components).

## React

This project uses [React](https://reactjs.org/)

### Usage of React features 


## 1. useEffect 

* It hooks into react lifecycle methods like componentDidMount(), componentDidUpdate() and componentWillUnmount(). In this project `useEffect()` is replaced componentDidMount() method to set the title of the application [useEffect](../src/App.tsx)

## 2. useContext 

* It is used to share data/state across the application without passing them down as props. In this project, `useContext()` is used to share contact list different components [createContext](../src/store/contactStore.ts)

## 3. useState 

* It is used to update the state of components with a state variable and it's update function. Here `useState()` is used for update the state of contact user clicked on and render it's chat window

## 4. Custom Hooks 

* Special kind of function that gives developer liberty to create their own logic to share between components using other react hooks. In this project, a custom hook `useMessagesFilterAndSort` [customHook](../src/common/hooks/useMessagesFilterAndSort.tsx) is created to retrieve the sorted and messages of the contact user selected and uis sed in here [chatWindow](../src/components/ChatWindow.tsx) 


## InstantDB 

This project uses [InstantDB](https://www.instantdb.com)

### Usage

Used for real time messaging storage and retrieval. 
* **Set up:**  [InstantDB-setUp](../src/store/messageStorage.ts)
* **Operations (Addition and Deletion of Messages):**  - [InstantDB-operations](../src/store/messageStorage.ts)
* **Retrieval of Messages:**  - [InstantDB-retrieval](../src/common/hooks/useMessagesFilterAndSort.tsx)

## Cypress

Tests are made using [Cypress](https://www.cypress.io/).






