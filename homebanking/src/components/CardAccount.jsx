import { Card } from "flowbite-react";

export function CardAccount() {
  return (
    <Card href="#" className="max-w-sm bg-blue-200 flex items-center">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Account Number: 200020
      </h5>
      <div className="flex items-center gap-4 justify-center">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Amount:
        </p>
        <p  className="font-normal text-4xl text-gray-700 dark:text-gray-400">
          $200000
        </p>
        </div>
    </Card>
  );
}