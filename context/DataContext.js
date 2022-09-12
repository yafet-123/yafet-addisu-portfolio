import React, {useState, useContext, useEffect} from 'react'
import {SimpleLandingPagedata} from '../data/simpleLandingPage';
import {UberClone} from '../data/UberClone';
import {OnlineCodeGenerator} from '../data/OnlineCodeGenerator';
import {ECFFPAGE} from '../data/ECFFPAGE';

const DataContext = React.createContext()

export function useDataContext(){
    return useContext(DataContext)
}

export function DataProvider({children}){

    const value = {
        SimpleLandingPagedata,
        UberClone,
        OnlineCodeGenerator,
        ECFFPAGE
    } 
    return(
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>

        // if we are not loading render children
    )
}