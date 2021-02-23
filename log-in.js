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
import './shared-styles.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/polymer/lib/elements/dom-bind.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import {} from '@polymer/polymer/lib/elements/dom-if.js';


	

class Login extends PolymerElement {
  static get template() {
    
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
          
        }
        h1{
          text-align:center;
          color:black;
        }
        paper-button{
          display:flex;
          justify-content: center;
          align-items: center;
          width:100px;
          margin:auto;
          color: #fff;
          background: #236666;
          padding:5px;
          border-radius:5px;
        }  
      </style>
  

 <app-location route="{{route}}"></app-location>
      <div class="card">
        
        <h1>LOGIN</h1>
        
     <div class="custom-parent">
     <paper-input id="name" always-float-label label="Username" required auto-validate error-message="Provide valid details!" char-counter maxlength="10" pattern="[a-zA-Z]*"></paper-input>
     <paper-input id="password" type="password" always-float-label label="password" required auto-validate error-message="Provide valid details!" char-counter maxlength="10" pattern="[a-zA-Z0-9]*"></paper-input>
     <br/>
  
     <paper-button  raised on-click="navigateLogin">Submit</paper-button>
     <br/>
     <div><paper-button class="btn" raised on-click="navigateRegister">New User?</paper-button></div> 
 </div>
 <br/>
 
  </div> 
  `;
  }
      navigateLogin(){ //It will check authorized user credentials 
        if(this.$.name.value=="vishnu" && this.$.password.value=="reddy"){
           this.set('route.path','/total-products'); //navigate to total products page
        }else{
          this.$.toast2.open();
             } 
       }
  
      navigateRegister(){  //It will navigate to Registration page
        this.set('route.path','/my-registration');
      }
    }  
window.customElements.define('log-in', Login);
