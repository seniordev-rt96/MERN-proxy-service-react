import React, { Component } from 'react';

import './../assets/styles/pages/home.css';

import constants from '../shared/constants.js'

export default class Home extends Component {

     constructor(props) {
          super(props)
          this.state = {
               urls: 'ahrefs.com',
          }
     }
/*
     async versatileHandler(targetUrl) {
          await fetch('http://localhost:4000/',
          {
               method: "POST",
               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify({url:targetUrl})
          })
          .then(response => {
               console.log("response", response)
          })
     }
*/
  render(){
    return (
      <main id="page_home">
          <div className="container">
          	<div className="row">
          		<div className="col-sm-6">
          			<div className="main-left">
                              <div className="text-center">
                                   <h2 className="p-3">Active Resources</h2>
                              </div>
                              <ul className="p-4">
                                   {/*<li>
                                        <p className="p-link" onClick={() => this.versatileHandler(this.state.urls)}>Ahrefs 01</p>
                                        <p>Ahrefs Subscription</p>
                                   </li>*/}

                                   {
                                        constants.SERVICE.map(item => (
                                             <li key={item.URL}>
                                                  <a href={`http://localhost:5000/?url=${item.URL}`} target="_blank">{item.URL}</a>
                                                  <p>{item.COMMENT}</p>
                                             </li>
                                        ))
                                   }


                                   {/*
                                   <li>
                                        <a href="http://localhost:5000/?url=demo.flikover.net" target="_blank">demo.flikover.net</a>
                                        <p>flikover Subscription</p>
                                   </li>
                                   <li>
                                        <a href="http://localhost:4000/?url=github.com" target="_blank">github.com</a>
                                        <p>github Subscription</p>
                                   </li>
                                   <li>
                                        <a href="http://localhost:4000/?url=twitter.com" target="_blank">twitter.com</a>
                                        <p>twitter Subscription</p>
                                   </li>
                                   <li>
                                        <a href="http://localhost:4000/?url=facebook.com" target="_blank">facebook.com</a>
                                        <p>facebook Subscription</p>
                                   </li>
                                   <li>
                                        <a href="http://localhost:4000/?url=vk.com" target="_blank">vk.com</a>
                                        <p>vk Subscription</p>
                                   </li>*/}
                              </ul>
          			</div>
          		</div>
          		<div className="col-sm-6">
          			<div className="main-right">
                              <div className="text-center">
                                   <h2 className="p-3">Status</h2>
                              </div>
                              <ul className="p-4">
                                   <li>Membership: <span className="badge">Professional</span></li>
                                   <li>Service: <span className="badge badge-light">5</span></li>
                              </ul>
          			</div>
          		</div>
          	</div>
          </div>
      </main>
    );
  }
}