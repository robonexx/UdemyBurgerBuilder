import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'

    
    class OrderSummary extends Component {

        componentDidUpdate(){
            console.log('[OrderSummary] WillUpdate');
        }

        render() {

            const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li> );
        });
            
            return(
                <Auxiliary>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul style={{listStyle: 'none', textAlign: 'center', padding: '0', margin: 'auto'}}>
            {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
    </Auxiliary>
            )
        }
        
        
   
}

export default OrderSummary;