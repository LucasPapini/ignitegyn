import { VStack, Image, Text, Center, Heading } from "native-base";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";
import { Input } from "@components/Input";

export function SignIn() {
  return (
    <VStack flex="1" bg="gray.700" px={5}>
      <Image
        source={BackgroundImg}
        alt="Pessoas treinando em uma bicicleta."
        resizeMode="contain"
        position="absolute"
      />
      <Center my={24}>
        <LogoSvg />
        <Text color="gray.100" fontSize="sm">
          Treine sua emnte e seu corpo
        </Text>
      </Center>

      <Heading
        color="gray.100"
        fontSize="xl"
        mb="6"
        fontFamily="heading"
        textAlign="center"
      >
        Acessa a conta
      </Heading>

      <Center>
        <Input 
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input 
          placeholder="Senha" 
          secureTextEntry
        />
      </Center>
    </VStack>
  );
}
