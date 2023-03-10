import Image from 'next/image'
import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo>
      <Image
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
        height={100}
        width={250}
      />
    </S.Logo>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration>
      <Image
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
        height={250}
        width={250}
      />
    </S.Illustration>
  </S.Wrapper>
)

export default Main
