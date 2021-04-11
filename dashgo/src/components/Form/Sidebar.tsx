import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiInputMethodLine } from "react-icons/ri";

export function Sidebar(){
    return(
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small" >GERAL</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" align="center" color="green.300">
                            <Icon as={RiDashboardLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium" >Dashboard</Text>
                        </Link>
                        <Link display="flex" align="center" color="green.300">
                            <Icon as={RiContactsLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium" >Usuários</Text>
                        </Link>
                    </Stack>
                </Box>

                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small" >AUTOMAÇÃO</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" align="center" color="green.300">
                            <Icon as={RiInputMethodLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium" >Formulários</Text>
                        </Link>
                        <Link display="flex" align="center" color="green.300">
                            <Icon as={RiContactsLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium" >Automação</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}