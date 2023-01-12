import Image from 'next/image'
import React from 'react'

export const MainSectionLogo = () => {
  return (
    <Image width={590} height={450} src={"/img/Landing1/MainSection/hero-image.webp"} alt="hero image" priority={true} />
  )
}
