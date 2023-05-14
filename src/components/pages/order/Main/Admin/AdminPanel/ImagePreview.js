import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../../../assets/theme';

const ImagePreview = ({ imageSource, title }) => {
    return (
        <ImagePreviewStyle className="image-preview">
            {imageSource ? (
                <img src={imageSource} alt={title} />) : (
                <div className='empty-image'>Aucune Image</div>
            )}

        </ImagePreviewStyle>
    );
};

const ImagePreviewStyle = styled.div`
    grid-area: 1 / 1 / 4 / 2 ;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
    }

    .empty-image{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${theme.colors.greyLight};
        line-height: 1.5;
        color: ${theme.colors.greySemiDark};
        border-radius: ${theme.borderRadius.round};
    }
`

export default ImagePreview;