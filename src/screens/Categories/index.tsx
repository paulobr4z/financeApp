import { ArrowLeft, PlusCircle } from 'phosphor-react-native'
import * as S from './styles'
import { FlatList, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Input } from '../../components/Input'
import { categoriesData } from './data'
import { Category } from '../../components/Category'

export function Categories() {
  const navigation = useNavigation()

  return (
    <S.Container>
      <S.CategoriesTitleContainer>
        <S.Row>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft weight="bold" />
          </TouchableOpacity>
          <S.CategoriesTitle>Categorias</S.CategoriesTitle>
        </S.Row>
        <TouchableOpacity>
          <PlusCircle weight="bold" />
        </TouchableOpacity>
      </S.CategoriesTitleContainer>
      <Input placeholder="Pesquisar categoria" />
      <S.SelectCategoryContainer>
        <S.SelectCategoryTitle>Selecione a categoria</S.SelectCategoryTitle>
      </S.SelectCategoryContainer>
      <FlatList
        data={categoriesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Category colorCircle={item.color} title={item.title} />
        )}
        contentContainerStyle={{
          borderWidth: 1,
          borderColor: '#CBD5E1',
          borderRadius: 8,
          overflow: 'hidden',
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text>Que tal cadastrar a primeira turma?</Text>
        )}
      />
    </S.Container>
  )
}
