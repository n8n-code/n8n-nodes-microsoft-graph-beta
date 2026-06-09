import type { INodeProperties } from 'n8n-workflow';

export const policiesAuthenticationMethodsPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Methods Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies Delete Authentication Methods Policy",
					"value": "Policies Delete Authentication Methods Policy",
					"action": "Delete navigation property authenticationMethodsPolicy for policies",
					"description": "Delete navigation property authenticationMethodsPolicy for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/authenticationMethodsPolicy"
						}
					}
				},
				{
					"name": "Policies Get Authentication Methods Policy",
					"value": "Policies Get Authentication Methods Policy",
					"action": "Get authenticationMethodsPolicy",
					"description": "Read the properties and relationships of an authenticationMethodsPolicy object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/authenticationMethodsPolicy"
						}
					}
				},
				{
					"name": "Policies Update Authentication Methods Policy",
					"value": "Policies Update Authentication Methods Policy",
					"action": "Update authenticationMethodsPolicy",
					"description": "Update the properties of an authenticationMethodsPolicy object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/authenticationMethodsPolicy"
						}
					}
				},
				{
					"name": "Policies Authentication Methods Policy List Authentication Method Configurations",
					"value": "Policies Authentication Methods Policy List Authentication Method Configurations",
					"action": "Get authenticationMethodConfigurations from policies",
					"description": "Represents the settings for each authentication method. Automatically expanded on GET /policies/authenticationMethodsPolicy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/authenticationMethodsPolicy/authenticationMethodConfigurations"
						}
					}
				},
				{
					"name": "Policies Authentication Methods Policy Create Authentication Method Configurations",
					"value": "Policies Authentication Methods Policy Create Authentication Method Configurations",
					"action": "Create new navigation property to authenticationMethodConfigurations for policies",
					"description": "Create new navigation property to authenticationMethodConfigurations for policies",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/authenticationMethodsPolicy/authenticationMethodConfigurations"
						}
					}
				},
				{
					"name": "Policies Authentication Methods Policy Delete Authentication Method Configurations",
					"value": "Policies Authentication Methods Policy Delete Authentication Method Configurations",
					"action": "Delete navigation property authenticationMethodConfigurations for policies",
					"description": "Delete navigation property authenticationMethodConfigurations for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{{$parameter[\"authenticationMethodConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Authentication Methods Policy Get Authentication Method Configurations",
					"value": "Policies Authentication Methods Policy Get Authentication Method Configurations",
					"action": "Get authenticationMethodConfigurations from policies",
					"description": "Represents the settings for each authentication method. Automatically expanded on GET /policies/authenticationMethodsPolicy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{{$parameter[\"authenticationMethodConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Authentication Methods Policy Update Authentication Method Configurations",
					"value": "Policies Authentication Methods Policy Update Authentication Method Configurations",
					"action": "Update the navigation property authenticationMethodConfigurations in policies",
					"description": "Update the navigation property authenticationMethodConfigurations in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{{$parameter[\"authenticationMethodConfiguration-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /policies/authenticationMethodsPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Delete Authentication Methods Policy"
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
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Delete Authentication Methods Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/authenticationMethodsPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Get Authentication Methods Policy"
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
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Get Authentication Methods Policy"
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
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Get Authentication Methods Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/authenticationMethodsPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Update Authentication Methods Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/authenticationMethodsPolicy<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Update Authentication Methods Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/authenticationMethodsPolicy/authenticationMethodConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Authentication Methods Policy List Authentication Method Configurations"
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
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Authentication Methods Policy List Authentication Method Configurations"
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
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Authentication Methods Policy List Authentication Method Configurations"
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
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Authentication Methods Policy List Authentication Method Configurations"
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
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Authentication Methods Policy List Authentication Method Configurations"
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
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Authentication Methods Policy List Authentication Method Configurations"
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
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Authentication Methods Policy List Authentication Method Configurations"
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
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Authentication Methods Policy List Authentication Method Configurations"
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
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Authentication Methods Policy List Authentication Method Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/authenticationMethodsPolicy/authenticationMethodConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Authentication Methods Policy Create Authentication Method Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/authenticationMethodsPolicy/authenticationMethodConfigurations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Authentication Methods Policy Create Authentication Method Configurations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Authentication Methods Policy Delete Authentication Method Configurations"
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
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Authentication Methods Policy Delete Authentication Method Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Authentication Methods Policy Get Authentication Method Configurations"
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
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Authentication Methods Policy Get Authentication Method Configurations"
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
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Authentication Methods Policy Get Authentication Method Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Authentication Methods Policy Update Authentication Method Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/authenticationMethodsPolicy/authenticationMethodConfigurations/{authenticationMethodConfiguration-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Methods Policy"
					],
					"operation": [
						"Policies Authentication Methods Policy Update Authentication Method Configurations"
					]
				}
			}
		},
];
