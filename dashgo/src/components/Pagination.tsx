import { Button } from "@chakra-ui/button";
import { Box, Stack } from "@chakra-ui/layout";

export function Pagination(){
    return(
        <Stack
        direction="row"
        spacing="6"
        mt="8"
        justify="space-between"
        align="center"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> <strong> de </strong><strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">
                <Button 
                    size="sm"
                    fontSize="xs"
                    width="4"
                    colorScheme= "red"
                    disabled
                    _disabled ={ {
                        bg:'purple.500',
                        cursor: 'default',
                    } }
                >
                    1
                </Button>
                <Button 
                    size="sm"
                    fontSize="xs"
                    width="4"
                    colorScheme="gray"
                    disabled
                    _disabled ={ {
                        bg:'green.500',
                        cursor: 'default',
                    } }
                >
                    2
                </Button>
                <Button 
                    size="sm"
                    fontSize="xs"
                    width="4"
                    colorScheme="green"
                    disabled
                    _disabled ={ {
                        bg:'green.500',
                        cursor: 'default',
                    } }
                >
                    3
                </Button>
            </Stack>
        </Stack>
    )
}