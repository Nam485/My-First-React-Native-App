import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'
import ElevatedCard from './components/ElevatedCard'
import FancyCards from './components/FancyCards'
import FlatCards from './components/FlatCards'

const App = () => {
  return (
    <SafeAreaView>
    <ScrollView>
      <FlatCards />
      <ElevatedCard />
      <FancyCards />
      <ActionCard />
      <ContactList />
    </ScrollView>
    </SafeAreaView>
  )
}

export default App