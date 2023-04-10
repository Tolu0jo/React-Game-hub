import { HStack, Switch, Text, useColorMode} from '@chakra-ui/react'

const SwitchColorMode = () => {
    const{toggleColorMode, colorMode}=useColorMode(); //switch between dark and light mode
  return (
    <HStack>
        <Switch colorScheme ="blue" isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
        <Text>Dark Mode</Text>
    </HStack>
  )
}

export default SwitchColorMode