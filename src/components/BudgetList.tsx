import BudgetCard, { BudgetProps } from '../components/BudgetCard'
import mockBudgets from '../mocks/budgetmocks.json'

let budgets:BudgetProps[] = mockBudgets

export default function BudgetList() {
  return (
    <>
    {budgets.map((budget) => {
        console.log(budget)
        return (
          <BudgetCard {...budget} key={budget.name}/>
        )
      })}
    </>
  )
}
