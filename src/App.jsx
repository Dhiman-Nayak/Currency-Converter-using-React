// import { useState } from 'react'
// import useCurrencyInfo from "./hooks/useCurrencyInfo"
// import {InputBox} from "./components/InputBox"

// import './App.css'


// function App() {

//     const [amount,setAmount]=useState(0)
//     const [from,setFrom]=useState("usd")
//     const [to,setTo]=useState("inr")
//     const [convertedAmount,setConvertedAmount]=useState(0)

//     const currencyInfo=useCurrencyInfo(from)
//     const option =Object.keys(currencyInfo)

//     const swap=()=>{
//         setFrom(to)
//         setTo(from)
//         setConvertedAmount(amount)
//         setAmount(convertedAmount)

//     }

//     const convert=()=>{
//         setConvertedAmount(amount*currencyInfo[to])
//     }
    
//     return (
//         <div
//             className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//             style={{
//                 backgroundImage: `url('https://images.pexels.com/photos/5980739/pexels-photo-5980739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
//             }}
//         >
//             <div className="w-full">
//                 <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//                     <form
//                         onSubmit={(e) => {
//                             e.preventDefault();
//                            convert()
//                         }}
//                     >
//                         <div className="w-full mb-1">
//                             <InputBox
//                                 label="From"
//                                 amount={amount}
//                                 currencyInfo={option}
//                                 onCurrencyChange={(currency)=>setAmount(currency)}
//                                 selectCurrency={from}
//                                 onAmountChange={(amount)=>setAmount(amount)}
//                             />
//                         </div>
//                         <div className="relative w-full h-0.5">
//                             <button
//                                 type="button"
//                                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                                 onClick={swap}
//                             >
//                                 swap
//                             </button>
//                         </div>
//                         <div className="w-full mt-1 mb-4">
//                             <InputBox
//                                 label="To"
//                                 amount={convertedAmount}
//                                 currencyInfo={option}
//                                 onCurrencyChange={(currency)=>setTo(currency)}
//                                 selectCurrency={to}
//                                 amountDisable
//                                 onAmountChange={(amount)=>setConvertedAmount(amount)}
//                             />
//                         </div>
//                         <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//                             Convert {from.toUpperCase()} to {to.toUpperCase()}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default App

// App.jsx

import { useState } from 'react';
import useCurrencyInfo from "./hooks/useCurrencyInfo";
// import { InputBox } from "./components/InputBox";
import {InputBox } from "./components/Index";


function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);
    // console.log(currencyInfo)
    const option = Object.keys(currencyInfo);
    // console.log(option)
    const swap = () => {
        setFrom(to);
        setTo(from);
        // Update currencyInfo for the new 'from' currency
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    };

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    };
    const remainPositive=(amount)=>{
        if (amount>0){(amount) => setAmount(amount)}
    }
    return (
        <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/5980739/pexels-photo-5980739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}>
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={option}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOption={option}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                                // onAmountChange={(amount) => setConvertedAmount(amount)}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
