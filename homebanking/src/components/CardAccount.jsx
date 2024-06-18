import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export function CardAccount({accountId}) {
  const [accountData, setAccountData] = useState({number:"", balance:0})
  const token = useSelector(store => store.authReducer.token)

  useEffect(() => {
    getAccountData()
  }, [])
 
  const getAccountData = async () => {
    try {
        const response = await axios.get(`https://homebanking-e3f1.onrender.com/api/clients/current/accounts/`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        let account = response.data.find(account => account.id == accountId)
        setAccountData(account)
    }  catch (e) {
      console.error(e)
    }
  }

  return (
    <Card className="max-w-sm w-[70%] lg:w-[35%] h-[120px] lg:h-[180px] bg-blue-200 flex items-center">
      <h5 className="lg:text-2xl font-bold tracking-tight text-gray-900 text-center">
      Account Number: {accountData.number}
      </h5>
      <div className="flex items-center gap-4 justify-center">
        <p className="text-xs lg:text-base font-normal text-gray-700">
          Amount:
        </p>
        <p  className="font-normal text-2xl lg:text-4xl text-gray-700">
          ${accountData.balance.toFixed(2).toLocaleString()}
        </p>
        </div>
    </Card>
  );
}