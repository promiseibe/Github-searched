import { Box, Button, Flex, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image';
import HistoryModal from './HistoryModal';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex justifyContent={"space-between"} py={6} alignItems={"center"}>
     <Box position={"relative"} aspectRatio={5 / 3} minHeight={20} className='navbar-box'>
        <Image width={30} height={30}   src={"/github-logo.png"}  alt='github logo' className="image-logo"/>
     </Box>
     <Box>
     <Button size="sm" colorScheme='whatsapp' onClick={onOpen }>
        Search History
        </Button>
     </Box>
     {isOpen && <HistoryModal isOpen={isOpen} onClose={onClose}/> }
    </Flex>
    
  )
}

export default Navbar