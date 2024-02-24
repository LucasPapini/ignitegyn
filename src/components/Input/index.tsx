import { Input as NativeBaseInput, IInputPropsu } from "native-base";
export function Input({ ...rest }: IInputPropsu) {
  return (
    <NativeBaseInput
      bg="gray.700"
      h={14}
      py={4}
      borderWidth={0}
      color="white"
      fontSize="md"
      fontFamily="body"
      marginBottom={4}
      placeholderTextColor="gray.300"
      _focus={{
        bg: 'gray.500',
        borderWidth: 1,
        borderColor: "green.500"
      }}
      {...rest}
    />
  );
}
