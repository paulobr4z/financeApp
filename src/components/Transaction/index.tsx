import * as S from './styles'

interface ITransaction {
  title: string
  type: 'income' | 'outcome'
}

export function Transaction({ type, title }: ITransaction) {
  return (
    <S.Container type={type}>
      <S.TypeIndicator type={type} />
      <S.Row>
        <S.Title>{title}</S.Title>
        <S.Amount>R$ 1.200,00</S.Amount>
      </S.Row>
      <S.Row>
        <S.Subtitle>Prestação de serviço</S.Subtitle>
        <S.Subtitle>16/03/2024</S.Subtitle>
      </S.Row>
    </S.Container>
  )
}
