import {withRouter} from 'react-router-dom'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
require('dotenv').config();
const PaymentForm = ()=>{
    const elements = useElements();
    const stripe = useStripe();
    const handleSubmit = async(e) =>{
        e.preventDefault()
        if (!stripe || !elements){
            return null;
        }
        const cardElement = elements.getElement(CardElement);
    }
    return (
        <div>
        <form className="blue-button" onSubmit={handleSubmit}>
            <CardElement options={{
                hidePostalCode: true,
                style: {
                    base: {
                        fontSize: '16px',
                        width:'40px',
                        color: '#424770',
                        '::placeholder': {
                            color: 'red',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
                }}/>
            <button type="submit" diabled={!stripe}>Pay</button>
        </form>
        </div>
    )
}

export default withRouter(PaymentForm);