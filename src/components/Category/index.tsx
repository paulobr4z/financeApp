import { CaretRight } from 'phosphor-react-native'
import * as S from './styles'

interface ICategory {
  title: string
  colorCircle: string
}

export function Category({ title, colorCircle }: ICategory) {
  return (
    <S.Container>
      <S.Row>
        <S.Circle colorCircle={colorCircle} />
        <S.Title>{title}</S.Title>
      </S.Row>
      <CaretRight weight="bold" size={18} />
    </S.Container>
  )
}
