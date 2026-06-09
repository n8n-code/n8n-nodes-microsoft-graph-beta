import type { INodeProperties } from 'n8n-workflow';

export const policiesTokenLifetimePolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Token Lifetime Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies List Token Lifetime Policies",
					"value": "Policies List Token Lifetime Policies",
					"action": "List tokenLifetimePolicies",
					"description": "Get a list of tokenLifetimePolicy objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/tokenLifetimePolicies"
						}
					}
				},
				{
					"name": "Policies Create Token Lifetime Policies",
					"value": "Policies Create Token Lifetime Policies",
					"action": "Create tokenLifetimePolicy",
					"description": "Create a new tokenLifetimePolicy object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/tokenLifetimePolicies"
						}
					}
				},
				{
					"name": "Policies Delete Token Lifetime Policies",
					"value": "Policies Delete Token Lifetime Policies",
					"action": "Delete navigation property tokenLifetimePolicies for policies",
					"description": "Delete navigation property tokenLifetimePolicies for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/tokenLifetimePolicies/{{$parameter[\"tokenLifetimePolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Get Token Lifetime Policies",
					"value": "Policies Get Token Lifetime Policies",
					"action": "Get tokenLifetimePolicies from policies",
					"description": "The policy that controls the lifetime of a JWT access token, an ID token, or a SAML 1.1/2.0 token issued by Azure AD.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/tokenLifetimePolicies/{{$parameter[\"tokenLifetimePolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Update Token Lifetime Policies",
					"value": "Policies Update Token Lifetime Policies",
					"action": "Update the navigation property tokenLifetimePolicies in policies",
					"description": "Update the navigation property tokenLifetimePolicies in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/tokenLifetimePolicies/{{$parameter[\"tokenLifetimePolicy-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /policies/tokenLifetimePolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Token Lifetime Policy"
					],
					"operation": [
						"Policies List Token Lifetime Policies"
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
						"Policies Token Lifetime Policy"
					],
					"operation": [
						"Policies List Token Lifetime Policies"
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
						"Policies Token Lifetime Policy"
					],
					"operation": [
						"Policies List Token Lifetime Policies"
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
						"Policies Token Lifetime Policy"
					],
					"operation": [
						"Policies List Token Lifetime Policies"
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
						"Policies Token Lifetime Policy"
					],
					"operation": [
						"Policies List Token Lifetime Policies"
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
						"Policies Token Lifetime Policy"
					],
					"operation": [
						"Policies List Token Lifetime Policies"
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
						"Policies Token Lifetime Policy"
					],
					"operation": [
						"Policies List Token Lifetime Policies"
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
						"Policies Token Lifetime Policy"
					],
					"operation": [
						"Policies List Token Lifetime Policies"
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
						"Policies Token Lifetime Policy"
					],
					"operation": [
						"Policies List Token Lifetime Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/tokenLifetimePolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Token Lifetime Policy"
					],
					"operation": [
						"Policies Create Token Lifetime Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/tokenLifetimePolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Token Lifetime Policy"
					],
					"operation": [
						"Policies Create Token Lifetime Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Token Lifetime Policy"
					],
					"operation": [
						"Policies Delete Token Lifetime Policies"
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
						"Policies Token Lifetime Policy"
					],
					"operation": [
						"Policies Delete Token Lifetime Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Token Lifetime Policy"
					],
					"operation": [
						"Policies Get Token Lifetime Policies"
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
						"Policies Token Lifetime Policy"
					],
					"operation": [
						"Policies Get Token Lifetime Policies"
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
						"Policies Token Lifetime Policy"
					],
					"operation": [
						"Policies Get Token Lifetime Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Token Lifetime Policy"
					],
					"operation": [
						"Policies Update Token Lifetime Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/tokenLifetimePolicies/{tokenLifetimePolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Token Lifetime Policy"
					],
					"operation": [
						"Policies Update Token Lifetime Policies"
					]
				}
			}
		},
];
