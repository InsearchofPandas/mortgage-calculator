import React, {Component} from 'react';
import TextBox from './components/TextBox/TextBox';
import SelectBox from './components/SelectBox/SelectBox';
import './css/tailwind.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanAmount: '',
      loanAmountDisplay: '',
      loanRate: 3.0,
      loanYears: 30,
      statusMessage: "Enter the loan amount"
    }
  }
  handleChange = event => {
    switch (event.target.name) {
      case "loanAmount":
        let statusMessage
        let loanAmountDisplay
        let loanAmount = event.target.value
        loanAmount = event.target.value.replace(/ /g, 'k')
        loanAmount = loanAmount.replace(/,/g, '')
        if (isNaN(loanAmount) === true) {
          statusMessage = "Only Numbers Accepted"
          loanAmountDisplay = this.state.loanAmountDisplay
        } else if (event.target.value.length > 11) {
          loanAmountDisplay = this.state.loanAmountDisplay
          statusMessage = "Max Input Amount"
        } else if (loanAmount < 10000) {
          loanAmountDisplay = loanAmount
          statusMessage = "Minimum Loan Amount 10,000"
        } else if (loanAmount >= 10000) {
          loanAmountDisplay = loanAmount
          statusMessage = ""
        }

        this.setState({loanAmount: loanAmount, loanAmountDisplay: loanAmountDisplay, statusMessage: statusMessage})

        break;
      case "loanRate":
        this.setState({loanRate: event.target.value})
        break;
      case "loanYears":
        this.setState({loanYears: event.target.value})
        break
      default:

    }
  }

  render() {
    // update loan amount to display with commas
    let outLoanAmountDisplay = this.state.loanAmountDisplay
      outLoanAmountDisplay = Math.floor(outLoanAmountDisplay)
      outLoanAmountDisplay = outLoanAmountDisplay.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      })

      // loan  calculations
      let monthlyPayment,
        totalPayment,
        displayMonthlyPayment,
        displayTotalPayment
      const p = this.state.loanAmount
      const r = (this.state.loanRate * .01) / 12
      const n = this.state.loanYears * 12
      if (p < 1000) {
        displayMonthlyPayment = ""
        displayTotalPayment = ""
      } else {
        monthlyPayment = p * (((r * (1 + r) ** n)) / (((1 + r) ** n) - 1))
        totalPayment = monthlyPayment * n
        displayMonthlyPayment = monthlyPayment.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })
        displayTotalPayment = totalPayment.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })
      }
      if (isNaN(monthlyPayment)) {
        displayMonthlyPayment = ""
      }
      if (isNaN(totalPayment)) {
        displayTotalPayment = ""
      }

      return (<div className="bg-blue-lightest h-screen">

        <header className="flex">
          <h1 className="w-full bg-blue-lighter text-center my-6 py-4 font-normal ">Mortgage Payment Calculator</h1>
        </header>

        <div className="flex justify-center mb-3 h-4">
          <div className="justify-center">{this.state.statusMessage}</div>
        </div>

        <div className="lg:flex justify-center text-3xl">
          <div className="lg:flex justify-center lg:w-2/3">
            <div className="w-full lg:w-1/2  text-center bg-grey-dark p-3 m-1">
              Loan Amount
            </div>
            <TextBox name="loanAmount" value={outLoanAmountDisplay} onChange={this.handleChange}/>
          </div>
        </div>

        <div className="lg:flex justify-center text-3xl">
          <div className="lg:flex justify-center lg:w-2/3">
            <div className="w-full lg:w-1/2 text-center bg-grey-dark p-3 m-1">
              Interest Ratet
            </div>
            <SelectBox name='loanRate' value={this.state.loanRate} onChange={this.handleChange} options={[
                "3.00",
                "3.25",
                "3.50",
                "3.75",
                "4.00",
                "4.25",
                "4.50",
                "4.75",
                "5.00",
                "5.25",
                "5.50",
                "5.75",
                "6.00",
                "6.25",
                "6.50",
                "6.75"
              ]}/>
          </div>
        </div>

        <div className="lg:flex justify-center text-3xl">
          <div className="lg:flex justify-center lg:w-2/3">
            <div className="w-full lg:w-1/2 text-center bg-grey-dark p-3 m-1">
              Loan Years
            </div>
            <SelectBox name="loanYears" value={this.state.loanYears} onChange={this.handleChange} options={[
                30,
                29,
                28,
                27,
                26,
                25,
                24,
                23,
                22,
                21,
                20,
                19,
                18,
                17,
                16,
                15,
                14,
                13,
                12,
                11,
                10,
                9,
                8,
                7,
                6,
                5,
                4,
                3,
                2,
                1
              ]}/>
          </div>
        </div>

        <div className="lg:flex justify-center text-3xl">
          <div className="lg:flex justify-center lg:w-2/3">
            <div className="w-full lg:w-1/2 text-center bg-grey-dark p-3 m-1">
              Monthly Payment
            </div>
            <div className="w-full lg:w-1/2 text-center bg-grey-light p-3 m-1">{displayMonthlyPayment}</div>
          </div>
        </div>

        <div className="lg:flex justify-center text-3xl">
          <div className="lg:flex justify-center lg:w-2/3">
            <div className="w-full lg:w-1/2 text-center bg-grey-dark p-3 m-1">
              Total Amount Paid
            </div>
            <div className="w-full lg:w-1/2 text-center bg-grey-light p-3 m-1">{displayTotalPayment}</div>
          </div>
        </div>

      </div>)
    }
  }

  export default App;
