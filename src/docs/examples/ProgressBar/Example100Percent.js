import React from 'react'
import ProgressBar from 'ps-react/ProgressBar';

/** 100% Progress bar */

export default function Example100Percent() {
    return (
        <ProgressBar percent={100} width={150} height={20}></ProgressBar>
    )
}