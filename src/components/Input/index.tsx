/* eslint-disable react/display-name */
import { TextInput, TextInputProps } from 'react-native'
import * as S from './styles'
import { forwardRef, useState } from 'react'
import { Masks } from 'react-native-mask-input'

interface IInput extends TextInputProps {
  hasMask?: boolean
}

export const Input = forwardRef<TextInput, IInput>((props, ref) => {
  const [creditCard, setCreditCard] = useState('')

  const { hasMask } = props

  return (
    <>
      {hasMask ? (
        <S.InputMask
          value={creditCard}
          onChangeText={setCreditCard}
          mask={Masks.BRL_CURRENCY}
          ref={ref}
          {...props}
        />
      ) : (
        <S.TextInput {...props} />
      )}
    </>
  )
})
