/* eslint-disable react/display-name */
import { TextInput, TextInputProps } from 'react-native'
import * as S from './styles'
import { forwardRef } from 'react'
import { Masks } from 'react-native-mask-input'

interface IInput extends TextInputProps {
  hasMask?: boolean
  value?: string
}

export const Input = forwardRef<TextInput, IInput>((props, ref) => {
  const { hasMask, value = '' } = props

  return (
    <>
      {hasMask ? (
        <S.InputMask
          value={value}
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
