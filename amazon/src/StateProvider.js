import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer/
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer//
export const useStateValue = () => useContext(StateContext);


/* My Learning Notes /

createContext() is used to create a new context object. 
Context allows you to pass data through the component tree 
without having to pass props down manually at every level.


~~StateProvider ~~: 
This is a React component that wraps around the
part of your application where you want to share the global state.

~~useReducer(reducer, initialState) ~~:
useReducer is a React hook that manages state. It takes two arguments:
reducer: A function that defines how the state changes in response to actions.
initialState: The initial state value.
useReducer returns an array with two elements: the current state and the dispatch
 function that you use to send actions to the reducer.


~~StateContext.Provider~~:
This is a component that makes the context value (which includes the state and dispatch)
 available to any child components that consume the context.
The value prop is set to the array returned by useReducer, which includes both the current state and the dispatch function.
children:

This is a special prop in React that represents the nested components inside the StateProvider. These children will have access to the global state.*/