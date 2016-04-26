(
function(window){
	'use strict'
	function DefineChargeAPI(){
		var ChargeAPI={};
		var appKey='';
		var username='';
		var accountId=''; 
		var serverUrl="http://services-demo.ezetap.com/charge_api/v1";
		var baseUrl="http://localhost:";
		var port={};
		port.httpPort=8081;
		var isDeviceRequired=false;

		ChargeAPI.initialize=function(ezetapConfigData,fn){
			console.log("coming here")
			try{

				doPostCallWithoutKey(ezetapConfigData,baseUrl+port.httpPort+"/ezetap/v1/initialize",function(response){
						if(fn) fn(response);
				});			
			}catch(e){
				console.log(e);
			}
		}

		ChargeAPI.close=function(fn){
			console.log("coming here")
			try{

				doGetCallWithoutKey(baseUrl+port.httpPort+"/ezetap/v1/close",function(response){
						if(fn) fn(response);
				});			
			}catch(e){
				console.log(e);
			}
		}

		ChargeAPI.prepareDevice=function(fn){
			console.log("coming here")
			try{

				doGetCallWithoutKey(baseUrl+port.httpPort+"/ezetap/v1/prepareDevice",function(response){
						if(fn) fn(response);
				});			
			}catch(e){
				console.log(e);
			}
		}

		ChargeAPI.viewCharge=function(chargeId,fn){
			var chargeUri="/charges/"+chargeId;
			try{
				doGetCall(serverUrl+chargeUri,function(response){
					if(fn) fn(response);
				});
			}catch(e){
				console.log(e);
			}
		}
			
		ChargeAPI.cardTransaction=function(chargeObj,fn){
			try{
				//chargeObj.accountId=accountId;
				doPostCallWithoutKey(chargeObj.charge,baseUrl+port.httpPort+"/ezetap/v1/takeCardPayment",function(response){
					//console.log(JSON.stringify(response));
					if(fn) fn(response);
				});
			}catch(e){
				console.log(e);
			}
		}

		ChargeAPI.abortCurrentTransaction=function(fn){
			try{
				doGetCallWithoutKey(baseUrl+port.httpPort+"/ezetap/v1/abortCurrentTransaction",function(response){
					
					if(fn) fn(response);
				});
			}catch(e){
				console.log(e);
			}
		}

		ChargeAPI.cashTransaction=function(chargeObj,fn){
			try{
				//chargeObj.accountId=accountId;
				doPostCallWithoutKey(chargeObj.charge,baseUrl+port.httpPort+"/ezetap/v1/takeCashPayment",function(response){
					
					if(fn) fn(response);
				});
			}catch(e){
				console.log(e);
			}
		}

		ChargeAPI.walletTransaction=function(walletObj,fn){
			try{
					
					doPostCallWithoutKey(walletObj,baseUrl+port.httpPort+"/ezetap/v1/walletTransaction",function(response){
						if(fn) fn(response);
					});
					}catch(e){
						console.log(e);
					}
				
		}

		ChargeAPI.confirmWalletTransaction=function(walletObj,fn){
			try{
					console.log('inside confirm wallet txn')
					doPostCallWithoutKey(walletObj,baseUrl+port.httpPort+"/ezetap/v1/confirmWalletTransaction",function(response){
						if(fn) fn(response);
					});
					}catch(e){
						console.log(e);
					}
		}

		ChargeAPI.remoteTransaction=function(remoteObj,fn){
			try{
					console.log('inside remote txn')
					doPostCallWithoutKey(remoteObj,baseUrl+port.httpPort+"/ezetap/v1/remoteTransaction",function(response){
						if(fn) fn(response);
					});
					}catch(e){
						console.log(e);
					}
		}

		ChargeAPI.updateCustomer=function(customerObj,fn){
			try{
					console.log('inside update customer')
					doPostCallWithoutKey(customerObj,baseUrl+port.httpPort+"/ezetap/v1/updateCustomere",function(response){
						if(fn) fn(response);
					});
					}catch(e){
						console.log(e);
					}
		}

		ChargeAPI.viewCharge=function(chargeId,fn){
			try{
					console.log('inside view charge')
					doGetCallWithoutKey(baseUrl+port.httpPort+"/ezetap/v1/viewCharge/"+chargeId,function(response){
						if(fn) fn(response);
					});
					}catch(e){
						console.log(e);
					}
		}

		ChargeAPI.searchCharges=function(searchChargeObj,fn){
			try{
					console.log('inside search charge')
					doPostCallWithoutKey(searchChargeObj,baseUrl+port.httpPort+"/ezetap/v1/searchCharges",function(response){
						if(fn) fn(response);
					});
					}catch(e){
						console.log(e);
					}
		}

		ChargeAPI.viewTransaction=function(txnId,fn){
			try{
					console.log('inside view txn')
					doGetCallWithoutKey(baseUrl+port.httpPort+"/ezetap/v1/viewTransaction/"+txnId,function(response){
						if(fn) fn(response);
					});
					}catch(e){
						console.log(e);
					}
		}

		var doPostCall=function(data,url,ezetapResponseHandler){
			$.ajax({
						  type: "POST",
						  url: url,
						  data:JSON.stringify(data),
						  headers:{"key": appKey,'Content-Type': 'application/json'},
						  success: function(response){
							  if(typeof (ezetapResponseHandler)==='function')
								  ezetapResponseHandler(response);
						  },
						  error:function(response){
							  if(typeof (ezetapResponseHandler)==='function'){
							  	ezetapResponseHandler(response.responseJSON);
							  }
						  },
						  dataType: "json"
						});
		}

		var doPostCallWithoutKey=function(data,url,ezetapResponseHandler){
			$.ajax({
						  type: "POST",
						  url: url,
						  data:data,
						  success: function(response){
							  if(typeof (ezetapResponseHandler)==='function')
								  ezetapResponseHandler(response);
						  },
						  error:function(response){
							  if(typeof (ezetapResponseHandler)==='function'){
							  	ezetapResponseHandler(response.responseJSON);
							  }
						  },
						  dataType: "json"
						});
		}

		var doGetCall=function(url,ezetapResponseHandler){
			$.ajax({
						  type: "GET",
						  url: url,
						  headers:{"key": appKey,'Content-Type': 'application/json'},
						  success: function(response){
							  if(typeof (ezetapResponseHandler)==='function')
								  ezetapResponseHandler(response);
						  },
						  error:function(response){
							  if(typeof (ezetapResponseHandler)==='function')
								  ezetapResponseHandler(response.responseJSON);
						  },
						  dataType: "json"
						});
		}
		var doGetCallWithoutKey=function(url,ezetapResponseHandler){
			$.ajax({
						  type: "GET",
						  url: url,
						  success: function(response){
							  if(typeof (ezetapResponseHandler)==='function')
								  ezetapResponseHandler(response);
						  },
						  error:function(response){
							  if(typeof (ezetapResponseHandler)==='function')
								  ezetapResponseHandler(response.responseJSON);
						  },
						  dataType: "json"
						});
		}
		var doPutCall=function(data,url,ezetapResponseHandler){
			$.ajax({
						  type: "PUT",
						  url: url,
						  data:JSON.stringify(data),
						  headers:{"key": appKey,'Content-Type': 'application/json'},
						  success: function(response){
							  if(typeof (ezetapResponseHandler)==='function')
								  ezetapResponseHandler(response);
						  },
						  error:function(response){
							  if(typeof (ezetapResponseHandler)==='function'){
							  	ezetapResponseHandler(response.responseJSON);
							  }
						  },
						  dataType: "json"
						});
		}
		return ChargeAPI;
	}
	if(typeof(ChargeAPI)==='undefined'){
		window.ChargeAPI=DefineChargeAPI();
	}else{
		console.log('ChargeAPI Already defined');
	}
}
)(window);
