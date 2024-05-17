import { Table } from "flowbite-react";

export function Resume() {
  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="bg-blue-200">Type</Table.HeadCell>
          <Table.HeadCell className="bg-blue-200">Amount</Table.HeadCell>
          <Table.HeadCell className="bg-blue-200">Date</Table.HeadCell>
          <Table.HeadCell className="bg-blue-200">Description</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-blue-200 dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Credit'}
            </Table.Cell>
            <Table.Cell>$25000.0</Table.Cell>
            <Table.Cell>24/04/23</Table.Cell>
            <Table.Cell>Comida</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-blue-200 dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Debit
            </Table.Cell>
            <Table.Cell>$5000.0</Table.Cell>
            <Table.Cell>24/04/23</Table.Cell>
            <Table.Cell>Comida</Table.Cell>
          </Table.Row>
          <Table.Row className="bg-blue-200 dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Credit</Table.Cell>
            <Table.Cell>$2000.0</Table.Cell>
            <Table.Cell>24/04/23</Table.Cell>
            <Table.Cell>Coffee</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}