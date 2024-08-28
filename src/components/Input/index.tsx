/* eslint-disable react/display-name */
import { TextInput, TextInputProps } from 'react-native'
import * as S from './styles'
import { forwardRef, useState } from 'react'
import { Masks } from 'react-native-mask-input'

interface IInput extends TextInputProps {}

export const Input = forwardRef<TextInput, IInput>((props, ref) => {
  const [creditCard, setCreditCard] = useState('')

  return (
    <S.Input
      value={creditCard}
      onChangeText={setCreditCard}
      mask={Masks.BRL_CURRENCY}
      ref={ref}
      {...props}
    />
  )
})
