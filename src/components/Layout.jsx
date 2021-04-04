import React, { Children } from 'react'
import * as LayoutStyles from './Layout.module.css'
const Layout = ({children}) => {
    return (
        <div className ={LayoutStyles.Container}>
            {children}    
        </div>
    )
}
export default Layout
