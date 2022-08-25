
import "./home.css"
import { useEffect, useState } from "react";

const Home = () => {
  const [age, setAge] = useState(30)
  const [disAge, setDisAge] = useState("none")
  const [retireAge, setRetireAge] = useState(65)
  const [disRetire, setDisRetire] = useState("none")
  const [invested, setInvested] = useState(0)
  const [invDisplay, setInvDisplay] = useState("none")
  const [real, setReal] = useState(0)
  const [realDisplay, setRealDisplay] = useState("none")
  const [networth, setNetworth] = useState(0)
  const [curRetIncome, setCurRetIncome] = useState(0)
  const [retIncome, setRetIncome] = useState(0)
  const [rentIncome, setRentIncome] = useState(0)
  const [realInDisplay, setRealInDisplay] = useState("none")
  const [other, setOther] = useState(0)
  const [otherDisplay, setOtherDisplay] = useState("none")
  const [savings, setSavings] = useState(0)
  const [savingsDisplay, setSavingsDisplay] = useState("none")
  const [expenses, setExpenses] = useState(0)
  const [expensesDisplay, setExpensesDisplay] = useState("none")
  const [phrase, setPhrase] = useState("Get Started by Updating Any Metric or Age!")
  const [photo, setPhoto] = useState("https://media3.giphy.com/media/2xPP9l8jeU5eMsnFsm/giphy.gif?cid=6c09b9523cde90ab311eb3e8a26aa33c7b97b55708cedf86&rid=giphy.gif&ct=ts")
  const [liabs, setLiabs] = useState(0)
  const [liabDisplay, setLiabDisplay] = useState("none")
  const [sRate, setsRate] = useState(0)
  const [sRateDisplay, setSRateDisplay] = useState("none")
  const [nonSavings, setNonSavings] = useState(0)
  const [nonSavingsDisplay, setNonSavingsDisplay] = useState("none")
  
  

  let rate4 = Number(invested*0.04).toFixed(2)

  const handleContent = (invDisplay, setInvDisplay)=>{
    if (invDisplay === "none"){

      setInvDisplay("flex")


    }
    else{
      setInvDisplay("none")

    }

  }

  useEffect(()=>{
    if (curRetIncome < 1 && expenses <1){
      setPhoto("https://media3.giphy.com/media/2xPP9l8jeU5eMsnFsm/giphy.gif?cid=6c09b9523cde90ab311eb3e8a26aa33c7b97b55708cedf86&rid=giphy.gif&ct=ts")
      
    }
    else if (curRetIncome >= Number(expenses)*12){
      setPhoto ("https://acegif.com/wp-content/uploads/gifs/fire-65.gif")
      setPhrase("Congratulations on Financial Independence!")
    }
    else if(retIncome>=Number(expenses)*12){
      setPhoto("https://giffiles.alphacoders.com/214/21400.gif")
      setPhrase("On Track!")
      
    }
    else{
      setPhoto("https://i.gifer.com/XlO4.gif")
      setPhrase("Work to do!")

    }

  }, [curRetIncome, retIncome, expenses])

  useEffect(()=>{
    setNetworth((Number(invested) + Number(real) - Number(liabs)).toFixed(2))

  }, [invested, real, age, liabs])

  useEffect(()=>{
    setCurRetIncome((Number(Number(rate4)+Number(rentIncome)+Number(other))).toFixed(2))
  },[rate4,rentIncome,other ])

  useEffect(()=>{
    setRetIncome(((((Number(invested)*(1+0.07)**(Number(retireAge-age)))+(Number(Number(savings)*12)*((1+0.07)**Number(retireAge-age)-1)/0.07))*0.04)+Number(rentIncome)+Number(other)).toFixed(2))

  }, [invested, real, age, retireAge, savings, other, rentIncome])


  

  return (
    <>
     <div className="main">
        <div className="navBar">
        <div className="userInfo">
            <div className="personal">
            <h2>Personal Finance Metrics</h2>
            <img src="https://www.freeiconspng.com/thumbs/financial-icon-png/finance-a-icons-free-icons-in-google-apps--icon-search-engine--14.png" alt="" />
            </div>
           
            <div className="age">
            <h3>Age:</h3>
            <h3 className="ageChange" style={{'display': disAge}}><input type="number" min = "0" max = "90" onChange={(e)=>setAge(e.target.value)} /></h3>
          <h3 className  = "curDash" onClick={()=>{handleContent(disAge, setDisAge)}}>{age}</h3>
        </div>
       
        <div className="retirement">
            <h3>Retirement Age:</h3>
            <h3 className="ageChange" style={{'display': disRetire}}><input type="number" min = "0" max = "90" onChange={(e)=>setRetireAge(e.target.value)} /></h3>
          <h3 className  = "curDash" onClick={()=>{handleContent(disRetire, setDisRetire)}}>{retireAge}</h3>
            

        </div>
        <div className="date">
            <h3>Year:</h3>

            <h3>{new Date().getFullYear()}</h3>

        </div>
        </div>
        

        </div>
        

    </div>
    <div className="home">
    <div className ="dash">
      <div className="dashboardLeft">
        <div className="dashes">
          <img src="https://www.edison.com/content/dam/eix/visual-assets/icons/donation-money-bag-edison-green-icon.png" alt="" />
          <h2 className="investChange" style={{'display': invDisplay}}> <input type="number" min = "0" onChange={(e)=>setInvested(e.target.value)} /></h2>
          <h2 className  = "curDash" onClick={()=>{handleContent(invDisplay, setInvDisplay)}}>INVESTMENTS: ${invested}</h2>
          
        </div>
        <div className="dashes">
          <img src="https://www.freeiconspng.com/thumbs/dollar-icon-png/money-flat-money-png-15.png" alt="" />
        <h2>4% Rate: ${rate4}</h2>
          
        </div>
        <div className="dashes">
          <img src="http://www.clker.com/cliparts/U/6/e/C/Z/l/green-house-icon-md.png" alt="" />
          <h2 className="realChange" style={{'display': realDisplay}}><input type="number" min = "0" onChange={(e)=>setReal(e.target.value)} /></h2>
          <h2 className  = "curDash" onClick={()=>{handleContent(realDisplay, setRealDisplay)}}>REAL ESTATE: ${real}</h2>
          
        </div>
        <div className="dashes">
          <img src="https://cdn-icons-png.flaticon.com/512/188/188473.png" alt="" />
          <h2 className="realChange" style={{'display': realInDisplay}}><input type="number" min = "0" onChange={(e)=>setRentIncome(e.target.value)} /></h2>
          <h2 className  = "curDash" onClick={()=>{handleContent(realInDisplay, setRealInDisplay)}}>ANNUAL RENTAL INCOME: ${rentIncome}</h2>
          
        </div>
        <div className="dashes">
          <img src="https://icons.veryicon.com/png/o/miscellaneous/social-security-function-icon/report-loss-of-social-security-card.png" alt="" />
          <h2 className="otherChange" style={{'display': otherDisplay}}> <input type="number" min = "0" onChange={(e)=>setOther(e.target.value)} /></h2>
          <h2 className  = "curDash" onClick={()=>{handleContent(otherDisplay, setOtherDisplay)}}>FUTURE ANNUAL SOC. SECURITY + OTHER INCOME: ${other}</h2>
          
        </div>

      </div>
      <div className="dashboardMiddle">
        <div className="circle">
          <img src={photo} alt="" />
          <h3>{phrase}</h3>
          <h3>CURRENT Networth: ${networth}</h3>
          <h3>CURRENT Annual Retirement Income ${curRetIncome}</h3>
          <h3>FUTURE Annual Retirement Income: ${retIncome}</h3>
          <h3>Annual Retirement Expenses: $({expenses*12})</h3>
          <h3>CURRENT Annual Retirement Income vs Expenses: ${Number(curRetIncome-(expenses*12)).toFixed(2)}</h3>
          <h3>FUTURE Annual Retirement Income vs Expenses: ${Number(retIncome-(expenses*12)).toFixed(2)}</h3>
          
        </div>

      </div>
      <div className="dashboardRight">

      <div className="dashes">
        <img src="https://ercoenergy.us/wp-content/uploads/sites/4/2021/02/piggy-bank.png" alt="" />
        <h2 className="savingsChange" style={{'display': savingsDisplay}}> <input type="number" min = "0" onChange={(e)=>setSavings(e.target.value)} /></h2>
          <h2 className  = "curDash" onClick={()=>{handleContent(savingsDisplay, setSavingsDisplay)}}>SAVINGS PER MONTH/CONTRIBUTIONS: ${savings}</h2>
        
          
          </div>
          <div className="dashes">
            <img src="https://cdn-icons-png.flaticon.com/512/5110/5110766.png" alt="" />
            <h2 className="nonSavingsChange" style={{'display': nonSavingsDisplay}}> <input type="number" min = "0" onChange={(e)=>setNonSavings(e.target.value)} /></h2>
          <h2 className  = "curDash" onClick={()=>{handleContent(nonSavingsDisplay, setNonSavingsDisplay)}}>NON SAVINGS CASH FLOW PER MTH: ${nonSavings}</h2>
            
          </div>
          <div className="dashes">
            <img src="https://icon-library.com/images/lower-cost-icon/lower-cost-icon-4.jpg" alt="" />
            <h2 className="expensesChange" style={{'display': expensesDisplay}}> <input type="number" min = "0" onChange={(e)=>setExpenses(e.target.value)} /></h2>
          <h2 className  = "curDash" onClick={()=>{handleContent(expensesDisplay, setExpensesDisplay)}}>Est. EXPENSES PER MONTH: ${expenses}</h2>
            
          </div>
          <div className="dashes">
            <img src="https://cdn-icons-png.flaticon.com/512/4334/4334598.png" alt="" />
            <h2 className="liabChange" style={{'display': liabDisplay}}> <input type="number" min = "0" onChange={(e)=>setLiabs(e.target.value)} /></h2>
          <h2 className  = "curDash" onClick={()=>{handleContent(liabDisplay, setLiabDisplay)}}>LIABILITIES: ${liabs}</h2>
            
          </div>
          <div className="dashes">
            <img src="https://pngimg.com/uploads/percent/percent_PNG66.png" alt="" />
            <h2 className="sRateChange" style={{'display': sRateDisplay}}> <input type="number" min = "0" onChange={(e)=>setsRate(e.target.value)} /></h2>
          <h2 className  = "curDash" onClick={()=>{handleContent(sRateDisplay, setSRateDisplay)}}>SAVINGS RATE: {sRate}%</h2>
            
          </div>
      </div>
      
    </div>

    </div>
    
    </>
    
  )
}

export default Home
