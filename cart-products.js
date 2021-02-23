/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-button/paper-button.js';
import './shared-styles.js';




class CartProducts extends PolymerElement {
  static get template() {
    return html`
    
    <app-location route="{{route}}"></app-location>   
      <style include="shared-styles">
        :host {
          display: block;
          padding: 0px;
         }
         paper-button{
            background-color:#236666;
            color:#fff;
            padding:10px;
            border-radius:5px;
            display:flex;
            justify-content: center;
            align-items: center;
            width:150px;
            margin:auto;
         }
         paper-button:hover{
             color:red;
         }
         button{
            text-align:left;
            margin-left:20px;
            background-color:#236666;
            color:#fff;
            padding:10px;
            border-radius:5px;
            margin-top:10px;
            width:60px;
          }
          button:hover{
              color:red;
          }
         h1{
            text-align:center;
            font-size:25px;
          }
         h2{
            text-align:right;
            margin-right:10px;
        }
        img{
          width:80px;
          justify:center;
          justify-content:center;
          
          
        }
         p{

             margin-left:20px;
         }
         paper-icon-button{
           color:red;
           display:visible;
         }
      </style>
          <!-- html content for product list page -->

        <div><button  on-click="Back" class="btn" raised>Back</button></div>
              <h1>CART LIST</h1>
         

             <dom-repeat items="[[cart]]">
              <template strip-whitespace="">
           
   
  
              <p><img src={{item.Img}}></p>
           
                <div class="card-body">
             
                <p class="card-text">Name: {{item.ProductName}}</p>
                <p class="card-text">Quantity: {{item.qty}}</p>
                <p class="card-text">Price per product:Rs. {{item.Price}}</p>
                <p class="card-text">Price on quantity( {{item.qty}} x Rs.{{item.Price}}):Rs={{item.priceOnQuantity}}</p>
                <paper-icon-button icon="close" on-tap="_removeItem"></paper-icon-button>
                
                </div>

               </div>
    
              </template>
         
            </dom-repeat>

                <h2 >
                       Total price:Rs. {{totalSum}}
                </h2>

           <div class="card-body">
             <paper-button  on-click="purchase" class="btn" raised>Purchase</paper-button>
           </div>
      `;
  }
  static get properties() {
    return {
     
      cart:{
        type:Array,
        value:[],
        notify:true,
        observer: "_notifyCart"
      },
      Sum:{
          type:String,
          value: 0,
          notify: true
      },
      totalSum: {   //It will calculate totatl cart items price
        type: Number,
        value: 0,
        notify:true
      }      
    };
  }
  Back(){
    this.set('route.path','./total-products');
  }
  // notify cart whenever it changes
  _notifyCart() {
      this.totalSum = 0;
		let toSetTotalPrice = this.cart.map((product, index) => {
			// set total cost of individual product based on quantity
			product.priceOnQuantity = product.qty * product.Price;
			this.notifyPath('cart.'+index+'.priceOnQuantity', product.priceOnQuantity);
			// set total sum of all products
			this.totalSum = this.totalSum + (product.qty * product.Price);
			return product
  });
}

  purchase() {    //It will clear the cart and navigate to total products page
      this.cart = [];
      alert("Thanks for purchasing. Please visit again");
      this.set('route.path','./total-products');
  } 
}

window.customElements.define('cart-products', CartProducts);