import styled from 'styled-components';

export const MediaHeader = styled.header`
  @media screen and (min-width: 320px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media screen and (min-width: 480px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  @media screen and (min-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 10rem;
    padding-right: 10rem;
  }

  @media screen and (min-width: 1080px) {
    padding-left: 10rem;
    padding-right: 10rem;
  }

  @media screen and (min-width: 1200px) {
    padding-left: 15rem;
    padding-right: 15rem;
  }

  @media screen and (min-width: 1680px) {
    padding-left: 17.5rem;
    padding-right: 17.5rem;
  }

  @media screen and (min-width: 1920px) {
    padding-left: 20rem;
    padding-right: 20rem;
  }
`
export const MediaDiv = styled.div`
  @media screen and (min-width: 320px) {
    margin-left: 0rem;
    margin-right: 0rem;
  }

  @media screen and (min-width: 480px) {
    margin-left: 0rem;
    margin-right: 0rem;
  }

  @media screen and (min-width: 768px) {
    margin-left: 6rem;
    margin-right: 6rem;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 10rem;
    margin-right: 10rem;
  }

  @media screen and (min-width: 1080px) {
    margin-left: 10rem;
    margin-right: 10rem;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 15rem;
    margin-right: 15rem;
  }

  @media screen and (min-width: 1680px) {
    margin-left: 17.5rem;
    margin-right: 17.5rem;
  }

  @media screen and (min-width: 1920px) {
    margin-left: 20rem;
    margin-right: 20rem;
  }

  @media screen and (min-width: 320px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media screen and (min-width: 480px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  @media screen and (min-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media screen and (min-width: 1080px) {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  @media screen and (min-width: 1200px) {
    padding-left: 10rem;
    padding-right: 10rem;
  }

  @media screen and (min-width: 1680px) {
    padding-left: 13rem;
    padding-right: 13rem;
  }

  @media screen and (min-width: 1920px) {
    padding-left: 20rem;
    padding-right: 20rem;
  }
`

export const CommonWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F7F7F7;
`

export const ErrorMessageBox = styled.div`
  margin-top: 0.5rem;
  text-align: center;
`

export const ErrorMesage = styled.p`
  padding-left: 0.5rem;
  text-align: left;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: red;
`

export const SelectBox = styled.select`
  height: 40px;
  border-radius: 0.325rem;
  outline: none;
  margin: 1rem 0;
  font-size: 0.9rem;
  padding-left: 0.5rem;
`

export const Options = styled.option`
  outline: none;
`

export const HedaerWrap = styled(MediaHeader) <{ verified: boolean }>`
  background-color: #f7f7f7;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  position: sticky;
  top: 0;
  width: 100%;
  margin-top: ${(props) => (props.verified ? '0' : "0")};
  z-index: 10;

  @media screen and (min-width: 1920px) {
    padding-left: 20rem;
    padding-right: 20rem;
  }
`

export const HeaderBox = styled.div`
  width: 100%;
  magin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderLogo = styled.img`
  width: 130px;
  height: 30px;
  object-fit: cover;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const HeaderInfo = styled.form`
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const VerifyVar = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
  background: #e84118;
  color: white;
  position: sticky;
  top:0;
  width: 100%;
`

export const HedaerInput = styled.input`
  background: #dcdde1;
  padding: 0.7rem 0.7rem;
  padding-left: 40px;
  outline: none;
  border-radius: 0.325rem;
  font-size: 0.9rem;
`

export const HeaderInputBox = styled.div`
  display: flex;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  justify-content: center;
  align-items: center;
`