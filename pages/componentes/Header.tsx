import { Circle, Flex, Stack } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react"

export default function Header() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
      <Stack>
       <Circle 
        position='absolute' 
        bg='black' 
        w='300px'
        h='300px'
        alignSelf='flex-end'/>
       <Flex direction={isNotSmallerScreen? 'row' : 'column'}>

       </Flex>
      </Stack>
    )
  }