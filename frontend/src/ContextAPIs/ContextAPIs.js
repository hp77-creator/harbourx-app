import React from "react"
export let defaultValues = {
    user:{},
    islogged:false
  };

export let MainContext = React.createContext(defaultValues);