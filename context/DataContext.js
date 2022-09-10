import React, {useState, useContext, useEffect} from 'react'
import {Netflixdata} from '../data/netflix';
const DataContext = React.createContext()

export function useDataContext(){
    return useContext(DataContext)
}

export function DataProvider({children}){

    const value = {
        Netflixdata,
    } 
    return(
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>

        // if we are not loading render children
    )
}