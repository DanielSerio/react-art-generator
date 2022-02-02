# React Art Generator

An abstract art generator user interface built with React.

## Tools used:

  - Typescript
  - SCSS
  - React
  - react-color
  - rc-slider
  - react-hook-form


### Problems solved:

 - Generate many shapes with many points (heavy memory usage): 
      
      > A 'Store' object is used to store all shape properties.
      The store object contains a list of values and a 
      Uint16Array of value indicies. The value is retrieved 
      by getting an index reference from a particular 
      position in the Uint16Array. The 'valueAt' method 
      returns the value from the retrieved index.
