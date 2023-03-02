import { Heading, Text } from "@chakra-ui/react";

export default function Balance() {
  return (
    <div className="mt-4 flex flex-col items-start ml-4">
      <Text className="font-semibold">Your Balance</Text>
      <Heading size='lg'>$100</Heading>
    </div>
  );
}
