import React from "react";
import { Text, Divider } from "@chakra-ui/react";
import TransactionCard from "./TransactionCard";
import transactionMocks from '../mocks/transactionsmocks.json'

type TransactionProps = {
    name: string,
    amount: number,
    budget?: string
}

const transactions:TransactionProps[] = transactionMocks

export default function TransactionList() {
  return (
    <div className="mt-4 relative">
      <Text className="font-semibold text-left ml-4" fontSize='lg'>Last Transactions</Text>
      <Divider className="ml-2 mr-2" />
      <div className="flex flex-col items-center">
        {transactions.map((transaction) => {
          return(
            <TransactionCard {...transaction}/> 
          )
        })}
      </div>
    </div>
  );
}
