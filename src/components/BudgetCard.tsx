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

export type BudgetProps = {
  name: string,
  amount: number,
  max: number
}

const selectColor = (percent:number) => {
  if (percent > 85){
    return 'red'
  }
  if (percent > 50){
    return 'yellow'
  }
  else{
    return 'green'
  }
}

export default function BudgetCard({name, amount, max}:BudgetProps) {
  const percent = (amount / max) * 100
  const color = selectColor(percent)
  console.log(percent)
  return (
    <>
      <Card className="m-4">
        <CardHeader>
          <Text className="flex justify-between font-semibold">
            <h1>{name}</h1>
            <div>
              {amount} $ / {max} $
            </div>
          </Text>
        </CardHeader>
        <Progress value={percent} colorScheme={color} className="ml-2 mr-2" />
        <CardBody>
            <ButtonGroup>
                <Button>Add Expense</Button>
            </ButtonGroup>
        </CardBody>
      </Card>
    </>
  );
}
