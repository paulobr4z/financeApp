import * as S from './styles'

import DefaultImage from '../../assets/images/default_user.png'

interface IAvatar {
  width?: string
  height?: string
  urlImage?: string
}

export function Avatar({ width = '48px', height = '48px', urlImage }: IAvatar) {
  return (
    <>
      {urlImage ? (
        <S.Image
          width={width}
          height={height}
          source={{
            uri: urlImage,
          }}
        />
      ) : (
        <S.Image width={width} height={height} source={DefaultImage} />
      )}
    </>
  )
}
