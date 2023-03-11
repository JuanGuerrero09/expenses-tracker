import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { IoWallet } from "react-icons/io5";
import { FaMoneyBillWave, FaMoneyCheckAlt } from "react-icons/fa";

export default function Buttons() {
  return (
    <div className="flex flex-col items-center">
      <ButtonGroup className="mt-2">
        <Button leftIcon={<FaMoneyCheckAlt />} colorScheme="whatsapp">Add Income</Button>
        <Button leftIcon={<FaMoneyBillWave />} colorScheme="red">Add Expense</Button>
      </ButtonGroup>
      <ButtonGroup className="mt-2">
        <Button width='200px' leftIcon={<IoWallet />} colorScheme="linkedin">Add Budget</Button>

      </ButtonGroup>
    </div>
  );
}
