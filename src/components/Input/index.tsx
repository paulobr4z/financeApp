import { TextInputProps } from 'react-native'
import * as S from './styles'

interface IInput extends TextInputProps {}

export function Input({ ...rest }: IInput) {
  return <S.Input {...rest} />
}
