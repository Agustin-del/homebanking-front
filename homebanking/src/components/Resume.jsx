import { Table } from "flowbite-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import '../styles.css'
export function Resume({transactions}) {
  
  // const [transactionData, setTransactionData] = useState([])
  // const token = useSelector(store => store.authReducer.token)
  const isDesktop = useMediaQuery({minWidth:1024})

  // useEffect(() => {
  //   getTransactionData()
  // }, [])
  
  // const getTransactionData = async () => {
  //   try {
  //     const response = await axios.get(`https://homebanking-e3f1.onrender.com/api/clients/current/accounts/`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //      }
  //     })
  //     let account = response.data.find(account => account.id == accountId)
  //     setTransactionData(account.transactions)
  //   } catch (e) {
  //     console.error(e)
  //   }  
  // }
  
  return (
    <div className="lg:w-1/2">
      {isDesktop ? <>
      <Table>
        <Table.Head>
            <Table.HeadCell className="bg-blue-200 text-center">Type</Table.HeadCell>
            <Table.HeadCell className="bg-blue-200 text-center">Amount</Table.HeadCell>
            <Table.HeadCell className="bg-blue-200 text-center">Date</Table.HeadCell>
            <Table.HeadCell className="bg-blue-200 text-center">Description</Table.HeadCell>       
        </Table.Head>
        <Table.Body className="divide-y">
          {transactions && transactions.map(transaction => {
            let color;
            if (transaction.transactionType === "DEBIT") {
              color = "bg-red-300"
            } else {
              color ="bg-blue-100"
            }
            return <Table.Row key={transaction.id} className={color}>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
              {transaction.transactionType}
            </Table.Cell>
            <Table.Cell className="text-end">
              {transaction.amount.toFixed(2).toLocaleString()}
              </Table.Cell>
            <Table.Cell>
              {new Date(transaction.date).toLocaleDateString()}
              </Table.Cell>
            <Table.Cell>
              {transaction.description}
              </Table.Cell>
          </Table.Row>
          })}
        </Table.Body>
      </Table>
      </> :
      <Table className="table-custom">
        <Table.Head >
            <Table.HeadCell className="bg-blue-200 text-center">Type</Table.HeadCell>
            <Table.HeadCell className="bg-blue-200 text-center">Amount</Table.HeadCell>
            <Table.HeadCell className="bg-blue-200 text-center">Date</Table.HeadCell>
            <Table.HeadCell className="bg-blue-200 text-center">Description</Table.HeadCell>       
        </Table.Head>
        <Table.Body className="divide-y">
          {transactions && transactions.map(transaction => {
            let color;
            if (transaction.transactionType === "DEBIT") {
              color = "bg-red-300"
            } else {
              color ="bg-blue-100"
            }
            return <Table.Row key={transaction.id} className={color}>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
              {transaction.transactionType}
            </Table.Cell>
            <Table.Cell className="text-end">
              {transaction.amount.toFixed(2).toLocaleString()}
              </Table.Cell>
            <Table.Cell>
              {new Date(transaction.date).toLocaleDateString()}
              </Table.Cell>
            <Table.Cell>
              {transaction.description}
              </Table.Cell>
          </Table.Row>
          })}
        </Table.Body>
      </Table>
    }
    </div>
  );
}