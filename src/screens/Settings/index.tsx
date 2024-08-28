import * as S from './styles'
import { useCallback, useMemo, useRef } from 'react'
import { Button, StyleSheet, Text } from 'react-native'
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet'
import { useNavigation } from '@react-navigation/native'
import { StackNavigatorRoutesProps } from '../../routes/stack.routes'

export function Settings() {
  const { navigate } = useNavigation<StackNavigatorRoutesProps>()

  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  // variables
  const snapPoints = useMemo(() => ['75%'], [])

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])
  const handleSheetChanges = useCallback(() => {}, [])

  return (
    <S.Container>
      <Button
        onPress={handlePresentModalPress}
        title="Present Modal"
        color="black"
      />
      <Button title="Go to Categories" onPress={() => navigate('categories')} />
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
            pressBehavior="close"
          />
        )}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheetModal>
    </S.Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
})
