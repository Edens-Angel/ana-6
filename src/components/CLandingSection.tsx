import React, { useEffect, useRef, useState } from 'react'
import { defaultData } from '../utils/data'
import { importAllFiles } from '../utils/util'
import CImage from './CImage'

const CLandingSection: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const allVideos = importAllFiles(require.context("../../public/videos", true, /\.(mp4|wmv)$/))
    const { message } = defaultData
    const [videoCounter, setVideoCounter] = useState<number>(0)

    const handleVideos = () => {
        if (!videoRef.current) return

        const nextVideo = allVideos[videoCounter].default
        videoRef.current.src = nextVideo
        videoRef.current.play()
        setVideoCounter(cur => cur + 1)
    }

    useEffect(() => {
        if (videoCounter > allVideos.length - 1) {
            setVideoCounter(0)
        }

    }, [videoCounter])

    return (
        <div className="landing-section">
            <div className="video">
                <video onEnded={handleVideos} ref={videoRef} autoPlay muted>
                    <source src="/videos/whatsapp03.mp4" />
                </video>
            </div>
            <div className="overlay">
                <div className="header-container">
                    <div className="text-center w-100 row">
                        <span className="col-12 pt-5 header-text">Happy 6 months</span>
                    </div>
                </div>
                <div className="content w-100 h-75 row align-items-center justify-content-around">
                    <div className="content-text col-3">
                        <span className="fw-bold h5 sub-text">{message}</span>
                    </div>
                    <div className="image col-3 d-flex justify-content-center">
                        <CImage styling={{ transform: 'scale(1.5)' }} url="/images/landing/together.jpg" />
                    </div>

                </div>
            </div>
        </div >
    )
}

export default CLandingSection