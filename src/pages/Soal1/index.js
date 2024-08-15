import './index.css'

import No1 from "./1"
import No2 from "./2"
import No3 from "./3"

const Soal1 = () => {
    return (
        <div className="soal-1-section">
            <div className='text-center'>
                <p className='text-2xl text-white'>soal 1 ini terdapat 3 point, yaitu</p>
                <div className='flex-mt-10'>
                    <button 
                        className="before:ease skew-secondary-button"
                        data-testid="Button1"
                        onClick={() => No1(5)}
                    >
                        <span className="relative z-10">No 1</span>
                    </button>
                    <button 
                        className="before:ease skew-secondary-button"
                        onClick={() => No2([3, 7, 2, 1, 8, 4, 5, 6])}
                    >
                        <span className="relative z-10">No 2</span>
                    </button>
                    <button 
                        className="before:ease skew-secondary-button"
                        onClick={() => {
                            console.log('True palindrome', No3("Racecar"))
                            console.log('False palindrome', No3("Aku adalah Jo"))
                        }}
                    >
                        <span className="relative z-10">No 3</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Soal1
