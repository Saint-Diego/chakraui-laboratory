import { VStack, Box, ButtonGroup, Button, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <VStack w="100vw" py={2}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="100%"
        h="330px"
        py={12}
        mb={2}
        mx="auto"
        bgImage="url('https://deportemania.online/wp-content/uploads/ciclismo.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Box>
          <Text fontSize="3xl" color="blackAlpha.900" textTransform="uppercase">
            domina el terreno
          </Text>
          <ButtonGroup
            flexDirection={["column", "row"]}
            justifyContent="center"
            w="100%"
            gap="4"
            variant="outline"
          >
            <Button
              color="blackAlpha.900"
              borderColor="blackAlpha.700"
              textTransform="uppercase"
              w="100%"
            >
              ver detalles
            </Button>
            <Button
              color="blackAlpha.900"
              borderColor="blackAlpha.700"
              textTransform="uppercase"
              marginInlineStart={0}
              w="100%"
            >
              ver video
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </VStack>
  );
};

export default Header;
