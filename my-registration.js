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

import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';

	

class Myregistration extends PolymerElement {
  static get template() {
    
    return html`
    <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
          
        }
      
        h1{
          text-align:center;
        }
        paper-button{
          display:flex;
          justify-content: center;
          align-items: center;
          width:10px;
          margin:auto;
          color: #fff;
          background: #236666;
          padding:10px;
        }

        
        
      </style>
      

 <app-location route="{{route}}"></app-location>
      <div id="card">
        
        <h1>Create Account</h1>
        
 
    <paper-input id="name" always-float-label label="Username" required auto-validate error-message="Provide valid details!" char-counter maxlength="10" pattern="[a-zA-Z]*" ></paper-input>
    <paper-input id="phone"  always-float-label label="Phone Number" required auto-validate error-message="Provide valid details!" char-counter maxlength="10" pattern="[0-9]*" ></paper-input>
    <paper-input label="name" id="inputWithButton">
    <iron-icon icon="mail" slot="prefix"></iron-icon>
    <div slot="suffix">@email.com</div>
    <paper-icon-button slot="suffix"  icon="clear" alt="clear" title="clear">
    </paper-icon-button>
    
    
    
   </paper-input>

 <paper-input id="password" type="password"always-float-label label="password" required auto-validate error-message="Provide valid details!" char-counter maxlength="10" pattern="[a-zA-Z0-9]*"></paper-input>
  
 
  
  <br/ >
  
  
<div><paper-button class="btn" raised on-click="Register">Register</paper-button></div> 
 </div>
 <br/>
 
  </div> 
  `;
  
  
    }
    //It will checks the enduser valid credentials and navigate to total products page
      Register(){
        if(this.$.name.value=="vishnu" || this.$.password.value=="reddy" || this.$.phone.value=="9490810275" || this.$.email.value=="manne@email.com"){
          this.set('route.path','/total-products');
        }else{
          this.$.toast2.open();
        }  
     }
    
     
  }

    
window.customElements.define('my-registration', Myregistration);
