import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Sidebar } from '../../components/Form/Sidebar'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination';

export default function UserList(){
    return (
      <Box>
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <Box flex="1" borderRadius={8} bg="gray.800" p="8">
            <Flex mb="8" justify="space-between" align="center">
              <Heading size="lg" fontWeight="normal">
                Usuários
              </Heading>

              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="green"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar Novo
              </Button>
            </Flex>
            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th px="6" color="gray.300" width="8">
                    <Checkbox colorScheme="green" />
                  </Th>
                  <Th>Usuário</Th>
                  <Th>Data de Cadastro</Th>
                  <Th width="8"></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td px="6">
                    <Checkbox colorScheme="green" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold" >Alan Lunardi</Text>
                      <Text fontSize="sm" color="gray.300" >alan.lunardi@gmail.com </Text>
                    </Box>
                  </Td>
                  <Td>04 de Abril, 2021</Td>
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="18" />}
                    >
                      Editar
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
            <Pagination />
          </Box>
        </Flex>
      </Box>
    );
}