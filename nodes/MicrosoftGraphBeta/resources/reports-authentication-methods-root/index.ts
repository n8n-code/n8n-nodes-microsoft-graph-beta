import type { INodeProperties } from 'n8n-workflow';

export const reportsAuthenticationMethodsRootDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Authentication Methods Root"
					]
				}
			},
			"options": [
				{
					"name": "Reports Delete Authentication Methods",
					"value": "Reports Delete Authentication Methods",
					"action": "Delete navigation property authenticationMethods for reports",
					"description": "Delete navigation property authenticationMethods for reports",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/reports/authenticationMethods"
						}
					}
				},
				{
					"name": "Reports Get Authentication Methods",
					"value": "Reports Get Authentication Methods",
					"action": "Get authenticationMethods from reports",
					"description": "Container for navigation properties for Azure AD authentication methods resources.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/authenticationMethods"
						}
					}
				},
				{
					"name": "Reports Update Authentication Methods",
					"value": "Reports Update Authentication Methods",
					"action": "Update the navigation property authenticationMethods in reports",
					"description": "Update the navigation property authenticationMethods in reports",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/reports/authenticationMethods"
						}
					}
				},
				{
					"name": "Reports Authentication Methods List User Registration Details",
					"value": "Reports Authentication Methods List User Registration Details",
					"action": "List userRegistrationDetails",
					"description": "Get a list of the authentication methods registered for the user as defined in the userRegistrationDetails object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/authenticationMethods/userRegistrationDetails"
						}
					}
				},
				{
					"name": "Reports Authentication Methods Create User Registration Details",
					"value": "Reports Authentication Methods Create User Registration Details",
					"action": "Create new navigation property to userRegistrationDetails for reports",
					"description": "Create new navigation property to userRegistrationDetails for reports",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/reports/authenticationMethods/userRegistrationDetails"
						}
					}
				},
				{
					"name": "Reports Authentication Methods Delete User Registration Details",
					"value": "Reports Authentication Methods Delete User Registration Details",
					"action": "Delete navigation property userRegistrationDetails for reports",
					"description": "Delete navigation property userRegistrationDetails for reports",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/reports/authenticationMethods/userRegistrationDetails/{{$parameter[\"userRegistrationDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Authentication Methods Get User Registration Details",
					"value": "Reports Authentication Methods Get User Registration Details",
					"action": "Get userRegistrationDetails from reports",
					"description": "Represents the state of a user's authentication methods, including which methods are registered and which features the user is registered and capable of (such as multi-factor authentication, self-service password reset, and passwordless authentication).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/authenticationMethods/userRegistrationDetails/{{$parameter[\"userRegistrationDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Authentication Methods Update User Registration Details",
					"value": "Reports Authentication Methods Update User Registration Details",
					"action": "Update the navigation property userRegistrationDetails in reports",
					"description": "Update the navigation property userRegistrationDetails in reports",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/reports/authenticationMethods/userRegistrationDetails/{{$parameter[\"userRegistrationDetails-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /reports/authenticationMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Delete Authentication Methods"
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
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Delete Authentication Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/authenticationMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Get Authentication Methods"
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
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Get Authentication Methods"
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
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Get Authentication Methods"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/authenticationMethods",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Update Authentication Methods"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/authenticationMethods<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Update Authentication Methods"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/authenticationMethods/userRegistrationDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Authentication Methods List User Registration Details"
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
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Authentication Methods List User Registration Details"
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
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Authentication Methods List User Registration Details"
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
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Authentication Methods List User Registration Details"
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
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Authentication Methods List User Registration Details"
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
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Authentication Methods List User Registration Details"
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
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Authentication Methods List User Registration Details"
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
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Authentication Methods List User Registration Details"
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
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Authentication Methods List User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/authenticationMethods/userRegistrationDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Authentication Methods Create User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/authenticationMethods/userRegistrationDetails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Authentication Methods Create User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Authentication Methods Delete User Registration Details"
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
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Authentication Methods Delete User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Authentication Methods Get User Registration Details"
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
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Authentication Methods Get User Registration Details"
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
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Authentication Methods Get User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Authentication Methods Update User Registration Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/authenticationMethods/userRegistrationDetails/{userRegistrationDetails-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Authentication Methods Root"
					],
					"operation": [
						"Reports Authentication Methods Update User Registration Details"
					]
				}
			}
		},
];
