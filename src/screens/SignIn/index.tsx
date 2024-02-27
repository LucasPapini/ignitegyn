import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount(){
    navigation.navigate('SignUp');
  }
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex="1" bg="gray.700" px={5} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
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

          <Input placeholder="Senha" secureTextEntry />
        </Center>

        <Button title="Acessar" />

        <Center mt={"32"}>
          <Text color={"gray.100"} fontSize={"sm"} fontFamily={"body"} mb={3}>
            Ainda não tem acesso ?
          </Text>
          <Button title="Criar conta" variant={"outline"}  onPress={handleNewAccount}/>
        </Center>
      </VStack>
    </ScrollView>
  );
}
