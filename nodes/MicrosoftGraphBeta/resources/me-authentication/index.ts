import type { INodeProperties } from 'n8n-workflow';

export const meAuthenticationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					]
				}
			},
			"options": [
				{
					"name": "Me Delete Authentication",
					"value": "Me Delete Authentication",
					"action": "Delete navigation property authentication for me",
					"description": "Delete navigation property authentication for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/authentication"
						}
					}
				},
				{
					"name": "Me Get Authentication",
					"value": "Me Get Authentication",
					"action": "Get authentication from me",
					"description": "Get authentication from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication"
						}
					}
				},
				{
					"name": "Me Update Authentication",
					"value": "Me Update Authentication",
					"action": "Update the navigation property authentication in me",
					"description": "Update the navigation property authentication in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/authentication"
						}
					}
				},
				{
					"name": "Me Authentication List Email Methods",
					"value": "Me Authentication List Email Methods",
					"action": "List emailAuthenticationMethods",
					"description": "Retrieve a list of a user's email Authentication Method objects and their properties. This call will only return a single object as only one email method can be set on users.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/emailMethods"
						}
					}
				},
				{
					"name": "Me Authentication Create Email Methods",
					"value": "Me Authentication Create Email Methods",
					"action": "Create emailAuthenticationMethod",
					"description": "Set a user's emailAuthenticationMethod object. Email authentication is a self-service password reset method. A user may only have one email authentication method.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/authentication/emailMethods"
						}
					}
				},
				{
					"name": "Me Authentication Delete Email Methods",
					"value": "Me Authentication Delete Email Methods",
					"action": "Delete navigation property emailMethods for me",
					"description": "Delete navigation property emailMethods for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/authentication/emailMethods/{{$parameter[\"emailAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication Get Email Methods",
					"value": "Me Authentication Get Email Methods",
					"action": "Get emailMethods from me",
					"description": "Represents the email addresses registered to a user for authentication.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/emailMethods/{{$parameter[\"emailAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication Update Email Methods",
					"value": "Me Authentication Update Email Methods",
					"action": "Update the navigation property emailMethods in me",
					"description": "Update the navigation property emailMethods in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/authentication/emailMethods/{{$parameter[\"emailAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication List Fido 2 Methods",
					"value": "Me Authentication List Fido 2 Methods",
					"action": "List fido2AuthenticationMethod",
					"description": "Retrieve a list of a user's FIDO2 Security Key Authentication Method objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/fido2Methods"
						}
					}
				},
				{
					"name": "Me Authentication Delete Fido 2 Methods",
					"value": "Me Authentication Delete Fido 2 Methods",
					"action": "Delete navigation property fido2Methods for me",
					"description": "Delete navigation property fido2Methods for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/authentication/fido2Methods/{{$parameter[\"fido2AuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication Get Fido 2 Methods",
					"value": "Me Authentication Get Fido 2 Methods",
					"action": "Get fido2Methods from me",
					"description": "Represents the FIDO2 security keys registered to a user for authentication.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/fido2Methods/{{$parameter[\"fido2AuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication List Methods",
					"value": "Me Authentication List Methods",
					"action": "List methods",
					"description": "Retrieve a list of authentication methods registered to a user. The authentication methods are defined by the types derived from the authenticationMethod resource type, and only the methods supported on this API version. See Azure AD authentication methods API overview for a list of currently supported methods.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/methods"
						}
					}
				},
				{
					"name": "Me Authentication Create Methods",
					"value": "Me Authentication Create Methods",
					"action": "Create new navigation property to methods for me",
					"description": "Create new navigation property to methods for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/authentication/methods"
						}
					}
				},
				{
					"name": "Me Authentication Get Methods",
					"value": "Me Authentication Get Methods",
					"action": "Get methods from me",
					"description": "Represents all authentication methods registered to a user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/methods/{{$parameter[\"authenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication Update Methods",
					"value": "Me Authentication Update Methods",
					"action": "Update the navigation property methods in me",
					"description": "Update the navigation property methods in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/authentication/methods/{{$parameter[\"authenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication List Microsoft Authenticator Methods",
					"value": "Me Authentication List Microsoft Authenticator Methods",
					"action": "List microsoftAuthenticatorAuthenticationMethods",
					"description": "Get a list of the microsoftAuthenticatorAuthenticationMethod objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/microsoftAuthenticatorMethods"
						}
					}
				},
				{
					"name": "Me Authentication Delete Microsoft Authenticator Methods",
					"value": "Me Authentication Delete Microsoft Authenticator Methods",
					"action": "Delete navigation property microsoftAuthenticatorMethods for me",
					"description": "Delete navigation property microsoftAuthenticatorMethods for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/authentication/microsoftAuthenticatorMethods/{{$parameter[\"microsoftAuthenticatorAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication Get Microsoft Authenticator Methods",
					"value": "Me Authentication Get Microsoft Authenticator Methods",
					"action": "Get microsoftAuthenticatorMethods from me",
					"description": "The details of the Microsoft Authenticator app registered to a user for authentication.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/microsoftAuthenticatorMethods/{{$parameter[\"microsoftAuthenticatorAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication Microsoft Authenticator Methods Get Device",
					"value": "Me Authentication Microsoft Authenticator Methods Get Device",
					"action": "Get device from me",
					"description": "The registered device on which Microsoft Authenticator resides. This property is null if the device is not registered for passwordless Phone Sign-In.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/microsoftAuthenticatorMethods/{{$parameter[\"microsoftAuthenticatorAuthenticationMethod-id\"]}}/device"
						}
					}
				},
				{
					"name": "Me Authentication List Operations",
					"value": "Me Authentication List Operations",
					"action": "Get operations from me",
					"description": "Get operations from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/operations"
						}
					}
				},
				{
					"name": "Me Authentication Create Operations",
					"value": "Me Authentication Create Operations",
					"action": "Create new navigation property to operations for me",
					"description": "Create new navigation property to operations for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/authentication/operations"
						}
					}
				},
				{
					"name": "Me Authentication Delete Operations",
					"value": "Me Authentication Delete Operations",
					"action": "Delete navigation property operations for me",
					"description": "Delete navigation property operations for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/authentication/operations/{{$parameter[\"longRunningOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication Get Operations",
					"value": "Me Authentication Get Operations",
					"action": "Get operations from me",
					"description": "Get operations from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/operations/{{$parameter[\"longRunningOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication Update Operations",
					"value": "Me Authentication Update Operations",
					"action": "Update the navigation property operations in me",
					"description": "Update the navigation property operations in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/authentication/operations/{{$parameter[\"longRunningOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication List Password Methods",
					"value": "Me Authentication List Password Methods",
					"action": "List passwordMethods",
					"description": "Retrieve a list of password authentication method objects. This will return exactly one object, as a user can have exactly one password.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/passwordMethods"
						}
					}
				},
				{
					"name": "Me Authentication Create Password Methods",
					"value": "Me Authentication Create Password Methods",
					"action": "Create new navigation property to passwordMethods for me",
					"description": "Create new navigation property to passwordMethods for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/authentication/passwordMethods"
						}
					}
				},
				{
					"name": "Me Authentication Get Password Methods",
					"value": "Me Authentication Get Password Methods",
					"action": "Get passwordMethods from me",
					"description": "Represents the details of the password authentication method registered to a user for authentication.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/passwordMethods/{{$parameter[\"passwordAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication List Passwordless Microsoft Authenticator Methods",
					"value": "Me Authentication List Passwordless Microsoft Authenticator Methods",
					"action": "List passwordlessMicrosoftAuthenticatorAuthenticationMethods (deprecated)",
					"description": "Retrieve a list of a user's Microsoft Authenticator Passwordless Phone Sign-in method objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/passwordlessMicrosoftAuthenticatorMethods"
						}
					}
				},
				{
					"name": "Me Authentication Delete Passwordless Microsoft Authenticator Methods",
					"value": "Me Authentication Delete Passwordless Microsoft Authenticator Methods",
					"action": "Delete navigation property passwordlessMicrosoftAuthenticatorMethods for me",
					"description": "Delete navigation property passwordlessMicrosoftAuthenticatorMethods for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/authentication/passwordlessMicrosoftAuthenticatorMethods/{{$parameter[\"passwordlessMicrosoftAuthenticatorAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication Get Passwordless Microsoft Authenticator Methods",
					"value": "Me Authentication Get Passwordless Microsoft Authenticator Methods",
					"action": "Get passwordlessMicrosoftAuthenticatorMethods from me",
					"description": "Represents the Microsoft Authenticator Passwordless Phone Sign-in methods registered to a user for authentication.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/passwordlessMicrosoftAuthenticatorMethods/{{$parameter[\"passwordlessMicrosoftAuthenticatorAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication Passwordless Microsoft Authenticator Methods Get Device",
					"value": "Me Authentication Passwordless Microsoft Authenticator Methods Get Device",
					"action": "Get device from me",
					"description": "Get device from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/passwordlessMicrosoftAuthenticatorMethods/{{$parameter[\"passwordlessMicrosoftAuthenticatorAuthenticationMethod-id\"]}}/device"
						}
					}
				},
				{
					"name": "Me Authentication List Phone Methods",
					"value": "Me Authentication List Phone Methods",
					"action": "List phoneMethods",
					"description": "Retrieve a list of phone authentication method objects. This will return up to three objects, as a user can have up to three phones usable for authentication. This method is available only for standard Azure AD and B2B users, but not B2C users.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/phoneMethods"
						}
					}
				},
				{
					"name": "Me Authentication Create Phone Methods",
					"value": "Me Authentication Create Phone Methods",
					"action": "Create phoneAuthenticationMethod",
					"description": "Add a new phone authentication method. A user may only have one phone of each type, captured in the **phoneType** property. This means, for example, adding a `mobile` phone to a user with a preexisting `mobile` phone will fail. Additionally, a user must always have a `mobile` phone before adding an `alternateMobile` phone. Adding a phone number makes it available for use in both Azure multi-factor authentication (MFA) and self-service password reset (SSPR), if enabled. Additionally, if a user is enabled by policy to use SMS sign-in and a `mobile` number is added, the system will attempt to register the number for use in that system.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/authentication/phoneMethods"
						}
					}
				},
				{
					"name": "Me Authentication Delete Phone Methods",
					"value": "Me Authentication Delete Phone Methods",
					"action": "Delete navigation property phoneMethods for me",
					"description": "Delete navigation property phoneMethods for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/authentication/phoneMethods/{{$parameter[\"phoneAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication Get Phone Methods",
					"value": "Me Authentication Get Phone Methods",
					"action": "Get phoneMethods from me",
					"description": "Represents the phone registered to a user for authentication.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/phoneMethods/{{$parameter[\"phoneAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication Update Phone Methods",
					"value": "Me Authentication Update Phone Methods",
					"action": "Update the navigation property phoneMethods in me",
					"description": "Update the navigation property phoneMethods in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/authentication/phoneMethods/{{$parameter[\"phoneAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication List Software Oath Methods",
					"value": "Me Authentication List Software Oath Methods",
					"action": "List softwareOathMethods",
					"description": "Retrieve a list of a user's software OATH token authentication method objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/softwareOathMethods"
						}
					}
				},
				{
					"name": "Me Authentication Delete Software Oath Methods",
					"value": "Me Authentication Delete Software Oath Methods",
					"action": "Delete navigation property softwareOathMethods for me",
					"description": "Delete navigation property softwareOathMethods for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/authentication/softwareOathMethods/{{$parameter[\"softwareOathAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication Get Software Oath Methods",
					"value": "Me Authentication Get Software Oath Methods",
					"action": "Get softwareOathMethods from me",
					"description": "Get softwareOathMethods from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/softwareOathMethods/{{$parameter[\"softwareOathAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication List Temporary Access Pass Methods",
					"value": "Me Authentication List Temporary Access Pass Methods",
					"action": "List temporaryAccessPassMethods",
					"description": "Retrieve a list of a user's temporaryAccessPassAuthenticationMethod objects and their properties. This API will only return a single object in the collection as a user can have only one Temporary Access Pass method.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/temporaryAccessPassMethods"
						}
					}
				},
				{
					"name": "Me Authentication Create Temporary Access Pass Methods",
					"value": "Me Authentication Create Temporary Access Pass Methods",
					"action": "Create temporaryAccessPassMethod",
					"description": "Create a new temporaryAccessPassAuthenticationMethod object on a user. A user can only have one Temporary Access Pass that's usable within its specified lifetime. If the user requires a new Temporary Access Pass while the current Temporary Access Pass is valid, the admin can create a new Temporary Access Pass for the user, the previous Temporary Access Pass will be deleted, and a new Temporary Access Pass will be created.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/authentication/temporaryAccessPassMethods"
						}
					}
				},
				{
					"name": "Me Authentication Delete Temporary Access Pass Methods",
					"value": "Me Authentication Delete Temporary Access Pass Methods",
					"action": "Delete navigation property temporaryAccessPassMethods for me",
					"description": "Delete navigation property temporaryAccessPassMethods for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/authentication/temporaryAccessPassMethods/{{$parameter[\"temporaryAccessPassAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication Get Temporary Access Pass Methods",
					"value": "Me Authentication Get Temporary Access Pass Methods",
					"action": "Get temporaryAccessPassMethods from me",
					"description": "Represents a Temporary Access Pass registered to a user for authentication through time-limited passcodes.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/temporaryAccessPassMethods/{{$parameter[\"temporaryAccessPassAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication List Windows Hello For Business Methods",
					"value": "Me Authentication List Windows Hello For Business Methods",
					"action": "List windowsHelloForBusinessAuthenticationMethods",
					"description": "Get a list of the windowsHelloForBusinessAuthenticationMethod objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/windowsHelloForBusinessMethods"
						}
					}
				},
				{
					"name": "Me Authentication Delete Windows Hello For Business Methods",
					"value": "Me Authentication Delete Windows Hello For Business Methods",
					"action": "Delete navigation property windowsHelloForBusinessMethods for me",
					"description": "Delete navigation property windowsHelloForBusinessMethods for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/authentication/windowsHelloForBusinessMethods/{{$parameter[\"windowsHelloForBusinessAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication Get Windows Hello For Business Methods",
					"value": "Me Authentication Get Windows Hello For Business Methods",
					"action": "Get windowsHelloForBusinessMethods from me",
					"description": "Represents the Windows Hello for Business authentication method registered to a user for authentication.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/windowsHelloForBusinessMethods/{{$parameter[\"windowsHelloForBusinessAuthenticationMethod-id\"]}}"
						}
					}
				},
				{
					"name": "Me Authentication Windows Hello For Business Methods Get Device",
					"value": "Me Authentication Windows Hello For Business Methods Get Device",
					"action": "Get device from me",
					"description": "The registered device on which this Windows Hello for Business key resides. Supports $expand. When you get a user's Windows Hello for Business registration information, this property is returned only on a single GET and when you specify ?$expand. For example, GET /users/admin@contoso.com/authentication/windowsHelloForBusinessMethods/_jpuR-TGZtk6aQCLF3BQjA2?$expand=device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/authentication/windowsHelloForBusinessMethods/{{$parameter[\"windowsHelloForBusinessAuthenticationMethod-id\"]}}/device"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /me/authentication",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Delete Authentication"
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
						"Me Authentication"
					],
					"operation": [
						"Me Delete Authentication"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Get Authentication"
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
						"Me Authentication"
					],
					"operation": [
						"Me Get Authentication"
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
						"Me Authentication"
					],
					"operation": [
						"Me Get Authentication"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/authentication",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Update Authentication"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/authentication<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Update Authentication"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/emailMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Email Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Email Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Email Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Email Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Email Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Email Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Email Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Email Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Email Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /me/authentication/emailMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Create Email Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /me/authentication/emailMethods<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Create Email Methods"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/authentication/emailMethods/{emailAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Delete Email Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Delete Email Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/emailMethods/{emailAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Email Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Email Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Email Methods"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/authentication/emailMethods/{emailAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Update Email Methods"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/authentication/emailMethods/{emailAuthenticationMethod-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Update Email Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/fido2Methods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Fido 2 Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Fido 2 Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Fido 2 Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Fido 2 Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Fido 2 Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Fido 2 Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Fido 2 Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Fido 2 Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Fido 2 Methods"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/authentication/fido2Methods/{fido2AuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Delete Fido 2 Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Delete Fido 2 Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/fido2Methods/{fido2AuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Fido 2 Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Fido 2 Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Fido 2 Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/methods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /me/authentication/methods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Create Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /me/authentication/methods<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Create Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/methods/{authenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Methods"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/authentication/methods/{authenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Update Methods"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/authentication/methods/{authenticationMethod-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Update Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/microsoftAuthenticatorMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Delete Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Delete Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/microsoftAuthenticatorMethods/{microsoftAuthenticatorAuthenticationMethod-id}/device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Microsoft Authenticator Methods Get Device"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Microsoft Authenticator Methods Get Device"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Microsoft Authenticator Methods Get Device"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Operations"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Operations"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Operations"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Operations"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Operations"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Operations"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Operations"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Operations"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /me/authentication/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /me/authentication/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/authentication/operations/{longRunningOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Delete Operations"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/operations/{longRunningOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Operations"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Operations"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/authentication/operations/{longRunningOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/authentication/operations/{longRunningOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Update Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/passwordMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Password Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Password Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Password Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Password Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Password Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Password Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Password Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Password Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Password Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /me/authentication/passwordMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Create Password Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /me/authentication/passwordMethods<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Create Password Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/passwordMethods/{passwordAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Password Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Password Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Password Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/passwordlessMicrosoftAuthenticatorMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Passwordless Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Passwordless Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Passwordless Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Passwordless Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Passwordless Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Passwordless Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Passwordless Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Passwordless Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Passwordless Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Delete Passwordless Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Delete Passwordless Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Passwordless Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Passwordless Microsoft Authenticator Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Passwordless Microsoft Authenticator Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod-id}/device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Passwordless Microsoft Authenticator Methods Get Device"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Passwordless Microsoft Authenticator Methods Get Device"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Passwordless Microsoft Authenticator Methods Get Device"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/phoneMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Phone Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Phone Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Phone Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Phone Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Phone Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Phone Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Phone Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Phone Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /me/authentication/phoneMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Create Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /me/authentication/phoneMethods<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Create Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Delete Phone Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Delete Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Phone Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Phone Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Update Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/authentication/phoneMethods/{phoneAuthenticationMethod-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Update Phone Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/softwareOathMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Software Oath Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Software Oath Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Software Oath Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Software Oath Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Software Oath Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Software Oath Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Software Oath Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Software Oath Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Software Oath Methods"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Delete Software Oath Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Delete Software Oath Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Software Oath Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Software Oath Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Software Oath Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/temporaryAccessPassMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Temporary Access Pass Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Temporary Access Pass Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Temporary Access Pass Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Temporary Access Pass Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Temporary Access Pass Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Temporary Access Pass Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Temporary Access Pass Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Temporary Access Pass Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Temporary Access Pass Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /me/authentication/temporaryAccessPassMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Create Temporary Access Pass Methods"
					]
				}
			}
		},
		{
			"displayName": "POST /me/authentication/temporaryAccessPassMethods<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Create Temporary Access Pass Methods"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Delete Temporary Access Pass Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Delete Temporary Access Pass Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/temporaryAccessPassMethods/{temporaryAccessPassAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Temporary Access Pass Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Temporary Access Pass Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Temporary Access Pass Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/windowsHelloForBusinessMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Windows Hello For Business Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Windows Hello For Business Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Windows Hello For Business Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Windows Hello For Business Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Windows Hello For Business Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Windows Hello For Business Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Windows Hello For Business Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Windows Hello For Business Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication List Windows Hello For Business Methods"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Delete Windows Hello For Business Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Delete Windows Hello For Business Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Windows Hello For Business Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Windows Hello For Business Methods"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Get Windows Hello For Business Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /me/authentication/windowsHelloForBusinessMethods/{windowsHelloForBusinessAuthenticationMethod-id}/device",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Windows Hello For Business Methods Get Device"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Windows Hello For Business Methods Get Device"
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
						"Me Authentication"
					],
					"operation": [
						"Me Authentication Windows Hello For Business Methods Get Device"
					]
				}
			}
		},
];
