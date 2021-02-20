import { useEffect } from 'react'

const photoSlider = (pics) => {

    useEffect(() => initSlider())

    const initSlider =() => {
        <>
            {pics.map((pic, index) => {
                return (
                    <img src={pic.url} alt="" />
                )
            })}
        </>
    }

    return {}
}

export default photoSlider