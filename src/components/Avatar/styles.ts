import styled from 'styled-components/native'

interface IImage {
  width: string
  height: string
}

export const Image = styled.Image<IImage>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 200px;
`

export const Default = styled.Image<IImage>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 200px;
`
