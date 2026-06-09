import type { INodeProperties } from 'n8n-workflow';

export const usersAuthenticationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					]
				}
			},
			"options": [
				{
					"name": "Users Delete Authentication",
					"value": "Users Delete Authentication",
					"action": "Delete navigation property authentication for users",
					"description": "Delete navigation property authentication for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication"
						}
					}
				},
				{
					"name": "Users Get Authentication",
					"value": "Users Get Authentication",
					"action": "Get authentication from users",
					"description": "Get authentication from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication"
						}
					}
				},
				{
					"name": "Users Update Authentication",
					"value": "Users Update Authentication",
					"action": "Update the navigation property authentication in users",
					"description": "Update the navigation property authentication in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication"
						}
					}
				},
				{
					"name": "Users Authentication List Email Methods",
					"value": "Users Authentication List Email Methods",
					"action": "List emailAuthenticationMethods",
					"description": "Retrieve a list of a user's email Authentication Method objects and their properties. This call will only return a single object as only one email method can be set on users.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/emailMethods"
						}
					}
				},
				{
					"name": "Users Authentication Create Email Methods",
					"value": "Users Authentication Create Email Methods",
					"action": "Create emailAuthenticationMethod",
					"description": "Set a user's emailAuthenticationMethod object. Email authentication is a self-service password reset method. A user may only have one email authentication method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/emailMethods"
						}
					}
				},
				{
					"name": "Users Authentication Delete Email Methods",
					"value": "Users Authentication Delete Email Methods",
					"action": "Delete navigation property emailMethods for users",
					"description": "Delete navigation property emailMethods for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/emailMethods/{{$parameter[\"emailAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication Get Email Methods",
					"value": "Users Authentication Get Email Methods",
					"action": "Get emailMethods from users",
					"description": "Represents the email addresses registered to a user for authentication.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/emailMethods/{{$parameter[\"emailAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication Update Email Methods",
					"value": "Users Authentication Update Email Methods",
					"action": "Update the navigation property emailMethods in users",
					"description": "Update the navigation property emailMethods in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/emailMethods/{{$parameter[\"emailAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication List Fido 2 Methods",
					"value": "Users Authentication List Fido 2 Methods",
					"action": "List fido2AuthenticationMethod",
					"description": "Retrieve a list of a user's FIDO2 Security Key Authentication Method objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/fido2Methods"
						}
					}
				},
				{
					"name": "Users Authentication Delete Fido 2 Methods",
					"value": "Users Authentication Delete Fido 2 Methods",
					"action": "Delete navigation property fido2Methods for users",
					"description": "Delete navigation property fido2Methods for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/fido2Methods/{{$parameter[\"fido2AuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication Get Fido 2 Methods",
					"value": "Users Authentication Get Fido 2 Methods",
					"action": "Get fido2Methods from users",
					"description": "Represents the FIDO2 security keys registered to a user for authentication.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/fido2Methods/{{$parameter[\"fido2AuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication List Methods",
					"value": "Users Authentication List Methods",
					"action": "List methods",
					"description": "Retrieve a list of authentication methods registered to a user. The authentication methods are defined by the types derived from the authenticationMethod resource type, and only the methods supported on this API version. See Azure AD authentication methods API overview for a list of currently supported methods.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/methods"
						}
					}
				},
				{
					"name": "Users Authentication Create Methods",
					"value": "Users Authentication Create Methods",
					"action": "Create new navigation property to methods for users",
					"description": "Create new navigation property to methods for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/methods"
						}
					}
				},
				{
					"name": "Users Authentication Get Methods",
					"value": "Users Authentication Get Methods",
					"action": "Get methods from users",
					"description": "Represents all authentication methods registered to a user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/methods/{{$parameter[\"authenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication Update Methods",
					"value": "Users Authentication Update Methods",
					"action": "Update the navigation property methods in users",
					"description": "Update the navigation property methods in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/methods/{{$parameter[\"authenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication List Microsoft Authenticator Methods",
					"value": "Users Authentication List Microsoft Authenticator Methods",
					"action": "List microsoftAuthenticatorAuthenticationMethods",
					"description": "Get a list of the microsoftAuthenticatorAuthenticationMethod objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/microsoftAuthenticatorMethods"
						}
					}
				},
				{
					"name": "Users Authentication Delete Microsoft Authenticator Methods",
					"value": "Users Authentication Delete Microsoft Authenticator Methods",
					"action": "Delete navigation property microsoftAuthenticatorMethods for users",
					"description": "Delete navigation property microsoftAuthenticatorMethods for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/microsoftAuthenticatorMethods/{{$parameter[\"microsoftAuthenticatorAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication Get Microsoft Authenticator Methods",
					"value": "Users Authentication Get Microsoft Authenticator Methods",
					"action": "Get microsoftAuthenticatorMethods from users",
					"description": "The details of the Microsoft Authenticator app registered to a user for authentication.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/microsoftAuthenticatorMethods/{{$parameter[\"microsoftAuthenticatorAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication Microsoft Authenticator Methods Get Device",
					"value": "Users Authentication Microsoft Authenticator Methods Get Device",
					"action": "Get device from users",
					"description": "The registered device on which Microsoft Authenticator resides. This property is null if the device is not registered for passwordless Phone Sign-In.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/microsoftAuthenticatorMethods/{{$parameter[\"microsoftAuthenticatorAuthenticationMethod-id\"]}}/device"
						}
					}
				},
				{
					"name": "Users Authentication List Operations",
					"value": "Users Authentication List Operations",
					"action": "Get operations from users",
					"description": "Get operations from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/operations"
						}
					}
				},
				{
					"name": "Users Authentication Create Operations",
					"value": "Users Authentication Create Operations",
					"action": "Create new navigation property to operations for users",
					"description": "Create new navigation property to operations for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/operations"
						}
					}
				},
				{
					"name": "Users Authentication Delete Operations",
					"value": "Users Authentication Delete Operations",
					"action": "Delete navigation property operations for users",
					"description": "Delete navigation property operations for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/operations/{{$parameter[\"longRunningOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication Get Operations",
					"value": "Users Authentication Get Operations",
					"action": "Get operations from users",
					"description": "Get operations from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/operations/{{$parameter[\"longRunningOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication Update Operations",
					"value": "Users Authentication Update Operations",
					"action": "Update the navigation property operations in users",
					"description": "Update the navigation property operations in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/operations/{{$parameter[\"longRunningOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication List Password Methods",
					"value": "Users Authentication List Password Methods",
					"action": "List passwordMethods",
					"description": "Retrieve a list of password authentication method objects. This will return exactly one object, as a user can have exactly one password.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/passwordMethods"
						}
					}
				},
				{
					"name": "Users Authentication Create Password Methods",
					"value": "Users Authentication Create Password Methods",
					"action": "Create new navigation property to passwordMethods for users",
					"description": "Create new navigation property to passwordMethods for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/passwordMethods"
						}
					}
				},
				{
					"name": "Users Authentication Get Password Methods",
					"value": "Users Authentication Get Password Methods",
					"action": "Get passwordMethods from users",
					"description": "Represents the details of the password authentication method registered to a user for authentication.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/passwordMethods/{{$parameter[\"passwordAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication List Passwordless Microsoft Authenticator Methods",
					"value": "Users Authentication List Passwordless Microsoft Authenticator Methods",
					"action": "List passwordlessMicrosoftAuthenticatorAuthenticationMethods (deprecated)",
					"description": "Retrieve a list of a user's Microsoft Authenticator Passwordless Phone Sign-in method objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/passwordlessMicrosoftAuthenticatorMethods"
						}
					}
				},
				{
					"name": "Users Authentication Delete Passwordless Microsoft Authenticator Methods",
					"value": "Users Authentication Delete Passwordless Microsoft Authenticator Methods",
					"action": "Delete navigation property passwordlessMicrosoftAuthenticatorMethods for users",
					"description": "Delete navigation property passwordlessMicrosoftAuthenticatorMethods for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/passwordlessMicrosoftAuthenticatorMethods/{{$parameter[\"passwordlessMicrosoftAuthenticatorAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication Get Passwordless Microsoft Authenticator Methods",
					"value": "Users Authentication Get Passwordless Microsoft Authenticator Methods",
					"action": "Get passwordlessMicrosoftAuthenticatorMethods from users",
					"description": "Represents the Microsoft Authenticator Passwordless Phone Sign-in methods registered to a user for authentication.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/passwordlessMicrosoftAuthenticatorMethods/{{$parameter[\"passwordlessMicrosoftAuthenticatorAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication Passwordless Microsoft Authenticator Methods Get Device",
					"value": "Users Authentication Passwordless Microsoft Authenticator Methods Get Device",
					"action": "Get device from users",
					"description": "Get device from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/passwordlessMicrosoftAuthenticatorMethods/{{$parameter[\"passwordlessMicrosoftAuthenticatorAuthenticationMethod-id\"]}}/device"
						}
					}
				},
				{
					"name": "Users Authentication List Phone Methods",
					"value": "Users Authentication List Phone Methods",
					"action": "List phoneMethods",
					"description": "Retrieve a list of phone authentication method objects. This will return up to three objects, as a user can have up to three phones usable for authentication. This method is available only for standard Azure AD and B2B users, but not B2C users.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/phoneMethods"
						}
					}
				},
				{
					"name": "Users Authentication Create Phone Methods",
					"value": "Users Authentication Create Phone Methods",
					"action": "Create phoneAuthenticationMethod",
					"description": "Add a new phone authentication method. A user may only have one phone of each type, captured in the **phoneType** property. This means, for example, adding a `mobile` phone to a user with a preexisting `mobile` phone will fail. Additionally, a user must always have a `mobile` phone before adding an `alternateMobile` phone. Adding a phone number makes it available for use in both Azure multi-factor authentication (MFA) and self-service password reset (SSPR), if enabled. Additionally, if a user is enabled by policy to use SMS sign-in and a `mobile` number is added, the system will attempt to register the number for use in that system.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/phoneMethods"
						}
					}
				},
				{
					"name": "Users Authentication Delete Phone Methods",
					"value": "Users Authentication Delete Phone Methods",
					"action": "Delete navigation property phoneMethods for users",
					"description": "Delete navigation property phoneMethods for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/phoneMethods/{{$parameter[\"phoneAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication Get Phone Methods",
					"value": "Users Authentication Get Phone Methods",
					"action": "Get phoneMethods from users",
					"description": "Represents the phone registered to a user for authentication.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/phoneMethods/{{$parameter[\"phoneAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication Update Phone Methods",
					"value": "Users Authentication Update Phone Methods",
					"action": "Update the navigation property phoneMethods in users",
					"description": "Update the navigation property phoneMethods in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/phoneMethods/{{$parameter[\"phoneAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication List Software Oath Methods",
					"value": "Users Authentication List Software Oath Methods",
					"action": "List softwareOathMethods",
					"description": "Retrieve a list of a user's software OATH token authentication method objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/softwareOathMethods"
						}
					}
				},
				{
					"name": "Users Authentication Delete Software Oath Methods",
					"value": "Users Authentication Delete Software Oath Methods",
					"action": "Delete navigation property softwareOathMethods for users",
					"description": "Delete navigation property softwareOathMethods for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/softwareOathMethods/{{$parameter[\"softwareOathAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication Get Software Oath Methods",
					"value": "Users Authentication Get Software Oath Methods",
					"action": "Get softwareOathMethods from users",
					"description": "Get softwareOathMethods from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/softwareOathMethods/{{$parameter[\"softwareOathAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication List Temporary Access Pass Methods",
					"value": "Users Authentication List Temporary Access Pass Methods",
					"action": "List temporaryAccessPassMethods",
					"description": "Retrieve a list of a user's temporaryAccessPassAuthenticationMethod objects and their properties. This API will only return a single object in the collection as a user can have only one Temporary Access Pass method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/temporaryAccessPassMethods"
						}
					}
				},
				{
					"name": "Users Authentication Create Temporary Access Pass Methods",
					"value": "Users Authentication Create Temporary Access Pass Methods",
					"action": "Create temporaryAccessPassMethod",
					"description": "Create a new temporaryAccessPassAuthenticationMethod object on a user. A user can only have one Temporary Access Pass that's usable within its specified lifetime. If the user requires a new Temporary Access Pass while the current Temporary Access Pass is valid, the admin can create a new Temporary Access Pass for the user, the previous Temporary Access Pass will be deleted, and a new Temporary Access Pass will be created.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/temporaryAccessPassMethods"
						}
					}
				},
				{
					"name": "Users Authentication Delete Temporary Access Pass Methods",
					"value": "Users Authentication Delete Temporary Access Pass Methods",
					"action": "Delete navigation property temporaryAccessPassMethods for users",
					"description": "Delete navigation property temporaryAccessPassMethods for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/temporaryAccessPassMethods/{{$parameter[\"temporaryAccessPassAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication Get Temporary Access Pass Methods",
					"value": "Users Authentication Get Temporary Access Pass Methods",
					"action": "Get temporaryAccessPassMethods from users",
					"description": "Represents a Temporary Access Pass registered to a user for authentication through time-limited passcodes.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/temporaryAccessPassMethods/{{$parameter[\"temporaryAccessPassAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication List Windows Hello For Business Methods",
					"value": "Users Authentication List Windows Hello For Business Methods",
					"action": "List windowsHelloForBusinessAuthenticationMethods",
					"description": "Get a list of the windowsHelloForBusinessAuthenticationMethod objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/windowsHelloForBusinessMethods"
						}
					}
				},
				{
					"name": "Users Authentication Delete Windows Hello For Business Methods",
					"value": "Users Authentication Delete Windows Hello For Business Methods",
					"action": "Delete navigation property windowsHelloForBusinessMethods for users",
					"description": "Delete navigation property windowsHelloForBusinessMethods for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/windowsHelloForBusinessMethods/{{$parameter[\"windowsHelloForBusinessAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication Get Windows Hello For Business Methods",
					"value": "Users Authentication Get Windows Hello For Business Methods",
					"action": "Get windowsHelloForBusinessMethods from users",
					"description": "Represents the Windows Hello for Business authentication method registered to a user for authentication.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/windowsHelloForBusinessMethods/{{$parameter[\"windowsHelloForBusinessAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Users Authentication Windows Hello For Business Methods Get Device",
					"value": "Users Authentication Windows Hello For Business Methods Get Device",
					"action": "Get device from users",
					"description": "The registered device on which this Windows Hello for Business key resides. Supports $expand. When you get a user's Windows Hello for Business registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/windowsHelloForBusinessMethods/_jpuR-TGZtk6aQCLF3BQjA2?$expand=device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/authentication/windowsHelloForBusinessMethods/{{$parameter[\"windowsHelloForBusinessAuthenticationMethod-id\"]}}/device"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /users/{user-id}/authentication",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Delete Authentication"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Delete Authentication"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Get Authentication"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Get Authentication"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Get Authentication"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/authentication",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Update Authentication"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/authentication<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Update Authentication"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/emailMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Email Methods"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Email Methods"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Email Methods"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Email Methods"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Email Methods"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Email Methods"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Email Methods"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Email Methods"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Email Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/authentication/emailMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Create Email Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/authentication/emailMethods<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Create Email Methods"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Delete Email Methods"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Delete Email Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Email Methods"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Email Methods"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Email Methods"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Update Email Methods"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/authentication/emailMethods/{emailAuthenticationMethod-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Update Email Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/fido2Methods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Fido 2 Methods"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Fido 2 Methods"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Fido 2 Methods"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Fido 2 Methods"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Fido 2 Methods"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Fido 2 Methods"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Fido 2 Methods"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Fido 2 Methods"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Fido 2 Methods"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Delete Fido 2 Methods"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Delete Fido 2 Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/fido2Methods/{fido2AuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Fido 2 Methods"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Fido 2 Methods"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Fido 2 Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/methods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Methods"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Methods"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Methods"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Methods"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Methods"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Methods"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Methods"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Methods"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/authentication/methods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Create Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/authentication/methods<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Create Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/methods/{authenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Methods"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Methods"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Methods"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/authentication/methods/{authenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Update Methods"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/authentication/methods/{authenticationMethod-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Update Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/microsoftAuthenticatorMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Delete Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Delete Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}/device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Microsoft Authenticator Methods Get Device"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Microsoft Authenticator Methods Get Device"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Microsoft Authenticator Methods Get Device"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Operations"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Operations"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Operations"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Operations"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Operations"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Operations"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Operations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Operations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/authentication/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/authentication/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/authentication/operations/{longRunningOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/operations/{longRunningOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Operations"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Operations"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/authentication/operations/{longRunningOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/authentication/operations/{longRunningOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Update Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/passwordMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Password Methods"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Password Methods"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Password Methods"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Password Methods"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Password Methods"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Password Methods"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Password Methods"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Password Methods"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Password Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/authentication/passwordMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Create Password Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/authentication/passwordMethods<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Create Password Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/passwordMethods/{passwordAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Password Methods"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Password Methods"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Password Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Passwordless Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Passwordless Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Passwordless Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Passwordless Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Passwordless Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Passwordless Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Passwordless Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Passwordless Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Passwordless Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Delete Passwordless Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Delete Passwordless Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Passwordless Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Passwordless Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Passwordless Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}/device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Passwordless Microsoft Authenticator Methods Get Device"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Passwordless Microsoft Authenticator Methods Get Device"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Passwordless Microsoft Authenticator Methods Get Device"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/phoneMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/authentication/phoneMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Create Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/authentication/phoneMethods<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Create Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Delete Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Delete Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Update Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/authentication/phoneMethods/{phoneAuthenticationMethod-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Update Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/softwareOathMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Software Oath Methods"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Software Oath Methods"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Software Oath Methods"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Software Oath Methods"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Software Oath Methods"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Software Oath Methods"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Software Oath Methods"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Software Oath Methods"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Software Oath Methods"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Delete Software Oath Methods"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Delete Software Oath Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Software Oath Methods"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Software Oath Methods"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Software Oath Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/temporaryAccessPassMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Temporary Access Pass Methods"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Temporary Access Pass Methods"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Temporary Access Pass Methods"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Temporary Access Pass Methods"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Temporary Access Pass Methods"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Temporary Access Pass Methods"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Temporary Access Pass Methods"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Temporary Access Pass Methods"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Temporary Access Pass Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/authentication/temporaryAccessPassMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Create Temporary Access Pass Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/authentication/temporaryAccessPassMethods<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Create Temporary Access Pass Methods"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Delete Temporary Access Pass Methods"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Delete Temporary Access Pass Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Temporary Access Pass Methods"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Temporary Access Pass Methods"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Temporary Access Pass Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/windowsHelloForBusinessMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Windows Hello For Business Methods"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Windows Hello For Business Methods"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Windows Hello For Business Methods"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Windows Hello For Business Methods"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Windows Hello For Business Methods"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Windows Hello For Business Methods"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Windows Hello For Business Methods"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Windows Hello For Business Methods"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication List Windows Hello For Business Methods"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Delete Windows Hello For Business Methods"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Delete Windows Hello For Business Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Windows Hello For Business Methods"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Windows Hello For Business Methods"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Get Windows Hello For Business Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}/device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Windows Hello For Business Methods Get Device"
					]
				}
			}
		},
		{
			"displayName": "Select",
			"name": "%24select",
			"description": "Select properties to be returned",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$select",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Windows Hello For Business Methods Get Device"
					]
				}
			}
		},
		{
			"displayName": "Expand",
			"name": "%24expand",
			"description": "Expand related entities",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$expand",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Authentication"
					],
					"operation": [
						"Users Authentication Windows Hello For Business Methods Get Device"
					]
				}
			}
		},
];
