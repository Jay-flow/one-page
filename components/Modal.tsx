import { useState } from "react"
import publicIp from "public-ip";
import { deviceDetect, isMobile, isTablet } from 'react-device-detect';


interface ModalProps {
    visible: boolean
    setVisible: Function
}

const Modal = ({ visible, setVisible }: ModalProps) => {
    const [userMessage, setUserMessage] = useState('')
    const [starIndex, setStarIndex] = useState(null)

    const createStarts = (): Array<JSX.Element> => {
        let stars: Array<JSX.Element> = []
        for (let i = 0; i < 5; i++) {
            let color = "text-gray-500"
            if (starIndex != null) {
                if (i <= starIndex) {
                    color = "text-yellow-500"
                }
            }
            stars.push(
                <svg key={i} className={`w-12 h-12 ${color}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" onClick={() => clickStart(i)}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            )
        }
        return stars
    }
    const userInputhandling = (e: React.ChangeEvent<HTMLTextAreaElement>) => setUserMessage(e.target.value)

    const clickStart = (index: number) => setStarIndex(index)


    const submit = async () => {
        if (starIndex == null) {
            alert("Please give me some starts.")
        } else {
            const sumbmitData = await getSubmitData()
            // TODO:: Implement Data insertion
            console.log(sumbmitData)
            setStarIndex(null)
            setUserMessage('')
            setVisible(false)
        }
    }

    const getSubmitData = async () => {
        let device: string
        let _os: string
        let _userAgent: string
        if (isMobile) {
            device = isTablet ? "Table" : "Mobile"
            const { ua, os } = deviceDetect()
            _os = os
            _userAgent = ua
        } else {
            device = "Desktop"
            const { osName, userAgent } = deviceDetect()
            _os = osName
            _userAgent = userAgent
        }
        return {
            ip: await publicIp.v4(),
            os: _os,
            device: device,
            userAgent: _userAgent,
            userMessage: userMessage == "" ? null : userMessage,
            starRanking: starIndex + 1
        }
    }

    return (
        <div className={`${visible ? "visible" : "invisible"} fixed top-0 left-0 w-full z-10`}>
            <div className="flex flex-col justify-center min-h-screen py-6 bg-black bg-opacity-70 sm:py-12">
                <div className="py-3 sm:max-w-xl sm:mx-auto">
                    <div className="flex flex-col bg-white shadow-lg min-w-1xl rounded-xl">
                        <div className="px-12 py-5">
                            <h2 className="text-3xl font-semibold text-gray-800">Your opinion matters to us!</h2>
                        </div>
                        <div className="flex flex-col items-center w-full bg-gray-200">
                            <div className="flex flex-col items-center py-6 space-y-3">
                                <span className="text-lg text-gray-800">How was quality of the call?</span>
                                <div className="flex space-x-3">
                                    {createStarts()}
                                </div>
                            </div>
                            <div className="flex flex-col w-3/4">
                                <textarea className="p-4 text-gray-500 resize-none rounded-xl" placeholder="Leave a message, if you want" value={userMessage} onChange={userInputhandling} />
                                <button className="py-3 my-8 text-lg text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl" onClick={() => submit()}>Rate now</button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-20">
                            <button className="text-gray-600" onClick={() => setVisible(false)}>Maybe later</button>
                        </div>
                    </div>

                    <div className="mt-8 text-gray-700">
                        Crédits <a className="font-bold" href="https://dribbble.com/shots/12052834-Rating-popup">Goga</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal