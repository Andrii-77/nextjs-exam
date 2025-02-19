import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'TagLayout metadata'
}
type Props = { children: React.ReactNode }
const TagLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default TagLayout;