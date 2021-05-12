import React from 'react'


export default function Quote(props) {

    const quoteEntry = props.quote;
    return (
        <>
        
            <div suppressHydrationWarning={true} className="min-w-screen min-h-screen bg-mains bg-cover flex items-center justify-center px-5 py-5" >

                <div className="w-full max-h-screen max-w-lg mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" suppressHydrationWarning={true}>

                    <div className="w-full pt-1 pb-5">
                        <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                            <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="" />
                        </div>
                    </div>

                    <div className="w-full mb-10" suppressHydrationWarning={true}>
                        <div className="text-3xl text-indigo-500 text-left leading-tight h-3" suppressHydrationWarning={true}>“</div>
                        <p className="text-sm text-gray-600 text-center px-5" suppressHydrationWarning={true}>
                            {quoteEntry.quote}</p>
                        <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3" suppressHydrationWarning={true}>”</div>
                    </div>
                    <div className="w-full">
                        <p className="text-md text-black font-bold text-center" suppressHydrationWarning={true}>{quoteEntry.author}</p>

                    </div>

                   

                </div>

            </div>

            
            <button onClick={props.handleClick} className="absolute top-3/4 left-1/2 lg:left-45/45 md:left-45/45 sm:left-1/3 bg-backing border border-black hover:bg-blue-700 text-black font-bold py-2 px-4 rounded" >
                Generate Quote
            </button>
            

</>
    )
}
