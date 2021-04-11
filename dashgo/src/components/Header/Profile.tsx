import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile(){
    return(
        <Flex alignSelf="center">
        <Box mr="4" textAlign="right" > 
            <Text>Alan Lunardi</Text>
            <Text
            color="gray.300" fontSize="small"
                >
                alan.lunardi@gmail.com
            </Text>
        </Box>

        <Avatar size="md" name="Alan Lunardi"  />
    </Flex>
    )
}