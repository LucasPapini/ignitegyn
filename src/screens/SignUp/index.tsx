import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex="1" bg="gray.700" px={5} pb={16}>
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
          Crie sua conta
        </Heading>

        <Center>
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input placeholder="Nome" />

          <Input placeholder="Senha" secureTextEntry />
        </Center>

        <Button title="Criar e acessar" />

        <Button title="Voltar" variant={"outline"} mt={"32"} />
      </VStack>
    </ScrollView>
  );
}
