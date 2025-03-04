import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'SearchLayout metadata'
}
type Props = { children: React.ReactNode }
const SearchLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default SearchLayout;