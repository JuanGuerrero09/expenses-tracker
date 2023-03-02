import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { IoWallet } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa";

export default function Buttons() {
  return (
    <div>
      <ButtonGroup className="mt-2">
        <Button leftIcon={<IoWallet />} colorScheme="linkedin">Add Budget</Button>
        <Button leftIcon={<FaMoneyBillWave />} colorScheme="whatsapp">Add Income</Button>
      </ButtonGroup>
    </div>
  );
}
