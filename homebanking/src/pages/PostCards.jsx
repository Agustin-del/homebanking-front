import React from 'react'
import { Label, Select, Button } from 'flowbite-react'

export const PostCards = () => {
    return (
    <>
    <div className="w-full h-full flex justify-between">
      <div className="w-[350px] p-6 flex flex-col gap-2 justify-center">
        <h1 className ="text-3xl font-bold">Apply for a new card</h1>
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="cardType" value="Select card type" />
        </div>
        <Select id="cardType" required>
          <option value="" > -- Select -- </option>
          <option>CREDIT</option>
          <option>DEBIT</option>
        </Select>
      </div>
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="membership" value="Select card membership (color)" />
        </div>
        <Select id="membership" required>
          <option value=""> -- Select -- </option>
          <option>GOLD</option>
          <option>SILVER</option>
          <option>TITANIUM</option>
        </Select>
      </div>
      <div className="flex justify-center gap-2 p-4">
        <Button size="lg" className="w-[100px]">Apply</Button>
        <Button size="lg" className="w-[100px]">Cancel</Button>
      </div>
      </div>
      <img src="/applyCards.jpg" className ="h-full w-1/2 p-4 flex flex-1"></img>
    </div>
    </>
  )
}
