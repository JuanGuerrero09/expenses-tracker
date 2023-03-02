import React from "react";
import {
  Card,
  Text,
  CardBody,
  CardHeader,
  Progress,
  Button, 
  ButtonGroup
} from "@chakra-ui/react";

let name = 'Rent'
let amount = 750
let max = 1000

export default function BudgetCard() {
  return (
    <>
      <Card>
        <CardHeader>
          <Text className="flex justify-between font-semibold">
            <div>{name}</div>
            <div>
              {amount} / {max}
            </div>
          </Text>
        </CardHeader>
        <Progress value={90} colorScheme='red' />
        <CardBody>
            <ButtonGroup>
                <Button></Button>
            </ButtonGroup>
        </CardBody>
      </Card>
    </>
  );
}
