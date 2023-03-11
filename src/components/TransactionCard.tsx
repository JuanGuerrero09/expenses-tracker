import { Box, Grid, GridItem } from "@chakra-ui/react";
import transactionMocks from "../mocks/transactionsmocks.json";

type TransactionProps = {
  name: string;
  amount: number;
  budget?: string;
};

export default function TransactionCard({
  name,
  amount,
  budget,
}: TransactionProps) {
  const transactionColor = amount > 0 ? "green.500" : "red.500";
  return (
    <Box className="ml-4 mt-2 shadow-md" bg="white" w="90%" p={1} color="black">
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem
          className="flex items-center font-semibold"
          w="100%"
          h="10"
        
          colSpan={2}
        >
          {name}
        </GridItem>
        <GridItem className="flex items-center font-thin"  w="100%" h="10" colSpan={1}>
          {budget}
        </GridItem>
        <GridItem className="flex items-center" w="100%" h="10" colSpan={1}>
          {Math.abs(amount)}
        </GridItem>
        <GridItem
          colStart={5}
          colEnd={6}
          w="100%"
          h="10"
          bg={transactionColor}
        ></GridItem>
      </Grid>
    </Box>
  );
}
