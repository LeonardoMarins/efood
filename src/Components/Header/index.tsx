import React from 'react'
import logo from '../../img/logo.png'
import { Container, ImagemLogo, Text } from './styles'
import { Image } from './styles'

export type Props = {
  text?: string
  images?: string[]
}

const Header = ({ images, text }: Props) => {
  return (
    <Container className="container">
      <ImagemLogo to={'/'}>
        <img src={logo} alt="logo" />
      </ImagemLogo>
      <Text>{text}</Text>
      {images &&
        images.map((image, index) => (
          <Image key={index} src={image} alt={`image-${index}`} />
        ))}
    </Container>
  )
}

export default Header
