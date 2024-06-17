import { Card } from "flowbite-react";

export function GetLoansCard({name, amount, payments}) {
  return (
    <Card className="max-w-sm bg-blue-200 w-[275px]">
      <h5 className="text-xl lg:text-2xl text-center font-bold tracking-tight text-gray-900">
        {name}
      </h5>
      <div className= "flex gap-2 items-baseline">
        <p className="text-sm lg:text-base font-normal text-gray-700">
          Amount:
        </p>
        <p className="font-normal text-gray-700 text-xl lg:text-2xl">
          ${amount.toFixed(2).toLocaleString()}
        </p>
      </div>
      <div className= "flex gap-2 items-baseline">
        <p className="text-sm lg:text-base font-normal text-gray-700">
          Payments:
        </p>
        <p className="font-normal text-gray-700 text-xl lg:text-2xl">
          {payments}
        </p>
      </div>
    </Card>
  );
}