import { Flex, Heading, IconButton, Spacer, VStack } from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import Header from "./componentes/Header";
import Social from "./componentes/Header";
import Profile from "./componentes/Header";

export default function Home() {
  return (
    <VStack>
      <Flex w='100%'>
        <Heading
          ml='10'
          size='md'
          fontWeight='semibold'
          color='cyan.400'>
          Lucas
        </Heading>

        <Spacer></Spacer>
        <IconButton icon={<FaSun />} isRound='true'></IconButton>
        <IconButton ml={2} icon={<FaInstagram />} isRound='true'></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound='true'></IconButton>
        <IconButton ml={2} icon={<FaLinkedin />} isRound='true'></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>

    </VStack>
  )
}
