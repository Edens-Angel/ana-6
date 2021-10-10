import React from 'react'
import { importAllFiles } from '../utils/util'
import CImage from './CImage'


const CCollage: React.FC = () => {
    const images = importAllFiles(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/))
    return (
        <div className="collage">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <span className="h1 mt-3">Some of our best moments</span>
                </div>
                <div className="images d-flex row p-2">
                    {images.map((item: any, idx: number) => (
                        <div key={idx} className="image px-4 py-2 col-3">
                            <CImage url={item.default} />

                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default CCollage