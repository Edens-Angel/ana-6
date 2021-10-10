import React, { CSSProperties } from 'react'

interface ImageProps {
    url: string
    className?: string
    styling?: CSSProperties
}

const CImage: React.FC<ImageProps> = ({ url, styling, className }) => {
    return (
        <div className="image-container">
            <div className={`Cimage ${className}`} style={{ backgroundImage: `url(${url})`, ...styling }}></div>
        </div>
    )
}

export default CImage