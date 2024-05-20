import React from 'react'
import { Label, Radio, Select, TextInput, Button} from "flowbite-react";
import { MdAttachMoney } from "react-icons/md";

export const PostTransaction = () => {
  return (
    <>
      <h1 className="text-4xl font-bold">Make a transaction</h1>
      <div className="w-full flex flex-wrap font-normal p-4"> 
      <div className ="w-1/2">
        <form action="" className="w-full p-4 flex flex-col gap-4">
            <fieldset className="max-w-md w-1/2">
          <div className="flex justify-center items-center gap-8">
            <span className="font-normal text-base">Destination:</span>
            <Radio id="self" name="destination" value="self" defaultChecked />
            <Label className="text-base font-normal" htmlFor="self">Self</Label>
            <Radio id="others" name="destination" value="others" />
            <Label className="text-base font-normal" htmlFor="others">Others</Label>
          </div>
        </fieldset>
        <div className="w-full flex flex-col " >
          <div className="mb-2 block">
            <Label className="text-base font-normal" htmlFor="account" value="Origin Account:" />
          </div>
          <Select id="account" className="w-[350px]" required>
            <option> --Select-- </option>
          </Select>
        </div>
      <div>  
        <div className="mb-2">
          <Label className ="font-normal text-base" htmlFor="amount" value="Amount:" />
        </div>
        <div className="relative flex items-center">
          <MdAttachMoney className="absolute top-[1px] left-2 h-10 w-8"/> 
          <TextInput id="amount" type="number" className="pl-10 w-[350px] font-normal text-base" required/>
        </div>
      </div>
      <div>  
        <div className="mb-2">
          <Label className ="font-normal text-base" htmlFor="description" value="Description:" />
        </div>
        <TextInput id="description" type="text" className="w-[350px]"/>
      </div>
      <div className="flex justify-center gap-4">
        <Button size="lg" className="w-[100px]">Apply</Button>
        <Button size="lg" className="w-[100px]">Cancel</Button>
      </div>
    </form>
    </div>
      <img className="w-1/2 h-[350px]" src="/applyTransaction.jpg"/>
    </div>
    </>  
  );
}

