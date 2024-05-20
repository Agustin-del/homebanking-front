import { Card } from "flowbite-react";

export function GetLoansCard({name, amount, payments}) {
  return (
    <Card className="max-w-sm">
      <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900">
        {name}
      </h5>
      <div className= "flex gap-2 items-center">
        <p className="font-normal text-gray-700">
          Amount:
        </p>
        <p className="font-normal text-gray-700 text-2xl">
          ${amount}
        </p>
      </div>
      <div className= "flex gap-2 items-center">
        <p className="font-normal text-gray-700">
          Payments:
        </p>
        <p className="font-normal text-gray-700 text-2xl">
          {payments}
        </p>
      </div>
    </Card>
  );
}