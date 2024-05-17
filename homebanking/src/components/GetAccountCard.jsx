import React from 'react'
import { Button, Card } from "flowbite-react";

export function GetAccountCard() {
  return (
    <Card className="max-w-sm bg-blue-200">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Account Number: 200020
      </h5>
      <div className="flex items-center gap-4">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Amount:
        </p>
        <p  className="font-normal text-4xl text-gray-700 dark:text-gray-400">
          $200000
        </p>
        </div>
      <Button>
        <div className ="flex items-center">
        Check Account
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        </div>
      </Button>
    </Card>
  );
}