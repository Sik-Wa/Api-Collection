import { useState } from "react"
import useCurrencyinfor from "./CurrencyConverter/Hooks/useCurrencyinfor"
import {Inputbox} from "./CurrencyConverter/index"


const CurrencyConverter = () => {
const [amount,setAmount] = useState(0)
const [from,setFrom] = useState('usd')
const [to,setTo] = useState('inr')
const[convertedAmount,setConvertedAmounted] = useState(0)


const currencyinfor = useCurrencyinfor(from)
const options = Object.keys(currencyinfor)


const swap = () => {
  setFrom(to)
  setTo(from)
  setConvertedAmounted(amount)
  setAmount(convertedAmount)
}

const convert = () => {
  setConvertedAmounted(amount * currencyinfor[to])
}


  return (
    <div className=" w-full h-screen flex flex-wrap justify-center items-center
     bg-cover bg-no-repeat bg-gradient-to-r from-orange-300 to-red-300">
      <div className=" w-full">
      <div className=" w-full max-w-md mx-auto border border-gray-60 rounded-lg backdrop-blur-sm bg-white/30">
<form onSubmit={(e) => {
  e.preventDefault()
  convert()
}}>
  <div className=" w-full mb-1 ">
<Inputbox
label="from"
amount={amount}
currencyOptions={options}
onCurrencyChange={(currency)=> setFrom(currency)}
onAmountChange={(amount) =>setAmount(amount)}
selectedCurrency={from}
/>
  </div>
</form>
      </div>
      </div>

    </div>
  )
}

export default CurrencyConverter