import { Card } from "flowbite-react";

export function GetLoansCard({name, amount, payments}) {
  return (
    <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <div className= "flex gap-2 items-center">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Amount:
        </p>
        <p className="font-normal text-gray-700 text-2xl dark:text-gray-400">
          ${amount}
        </p>
      </div>
      <div className= "flex gap-2 items-center">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Payments:
        </p>
        <p className="font-normal text-gray-700 text-2xl dark:text-gray-400">
          {payments}
        </p>
      </div>
    </Card>
  );
}