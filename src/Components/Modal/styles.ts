import { styled } from 'styled-components'

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 400px;
  height: 400px;

  img {
    width: 36px;
    height: 36px;
  }

  .container {
    display: flex;
    position: fixed;
    justify-content: space-between;
    top: 100px;

    width: 80%;
    margin-left: 8em;
    height: 344px;
    object-fit: cover;
    z-index: 1;
    background-color: #e66767;

    .image-logo {
      position: absolute;
      margin: 32px;
      width: 280px;
      height: 280px;
      border-radius: 0px;
    }

    .description {
      position: absolute;
      left: 340px;
      top: 26%;
    }

    .preco {
      position: absolute;
      left: 340px;
      top: 80%;
      cursor: pointer;
    }

    .porcao {
      position: absolute;
      left: 340px;
      top: 70%;
    }

    h2 {
      margin-left: 14em;
      margin-top: 1.2em;
    }

    button {
      padding: 10px;
      color: #e66767;
      background-color: #ffebd9;
    }
  }

  .overlay {
    position: absolute;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .sticky-image {
    position: fixed;
    top: 100px;
    left: 0;
    width: 100%;
    object-fit: cover;
    z-index: 1;
  }

  @media (max-width: 818px) {
    .container {
      margin-left: 4em;
      height: 400px;
    }

    .porcao {
      top: 74%;
    }
  }

  @media (max-width: 740px) {
    .container {
      text-align: center;
      margin-left: 2em;
      .image-logo {
        display: none;
      }
      .description,
      .preco,
      .porcao {
        left: 0;
      }
      h2 {
        margin-left: 30%;
      }
      .porcao {
        margin-left: 38%;
      }

      button {
        margin-left: 30%;
      }
    }
  }
`
