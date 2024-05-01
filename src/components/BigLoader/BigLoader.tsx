import React, { FC } from 'react';
import './BigLoader.css';
import { SerializedStyles, css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

interface LoaderProps {
    isLoading: boolean;
}

const override: SerializedStyles = css`
    display: block;
    margin: 0;
    border-color: red;
`;


const BigLoader = ({ isLoading }: LoaderProps) => {
    return (
        <div className="loader">
            <ClipLoader color="#000" loading={isLoading} css={override} size={50} />
        </div>
    )
}

export default BigLoader;