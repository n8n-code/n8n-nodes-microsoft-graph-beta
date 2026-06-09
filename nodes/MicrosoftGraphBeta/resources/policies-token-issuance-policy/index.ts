import type { INodeProperties } from 'n8n-workflow';

export const policiesTokenIssuancePolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Token Issuance Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies List Token Issuance Policies",
					"value": "Policies List Token Issuance Policies",
					"action": "List tokenIssuancePolicy",
					"description": "Get a list of tokenIssuancePolicy objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/tokenIssuancePolicies"
						}
					}
				},
				{
					"name": "Policies Create Token Issuance Policies",
					"value": "Policies Create Token Issuance Policies",
					"action": "Create tokenIssuancePolicy",
					"description": "Create a new tokenIssuancePolicy object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/tokenIssuancePolicies"
						}
					}
				},
				{
					"name": "Policies Delete Token Issuance Policies",
					"value": "Policies Delete Token Issuance Policies",
					"action": "Delete navigation property tokenIssuancePolicies for policies",
					"description": "Delete navigation property tokenIssuancePolicies for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/tokenIssuancePolicies/{{$parameter[\"tokenIssuancePolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Get Token Issuance Policies",
					"value": "Policies Get Token Issuance Policies",
					"action": "Get tokenIssuancePolicies from policies",
					"description": "The policy that specifies the characteristics of SAML tokens issued by Azure AD.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/tokenIssuancePolicies/{{$parameter[\"tokenIssuancePolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Update Token Issuance Policies",
					"value": "Policies Update Token Issuance Policies",
					"action": "Update the navigation property tokenIssuancePolicies in policies",
					"description": "Update the navigation property tokenIssuancePolicies in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/tokenIssuancePolicies/{{$parameter[\"tokenIssuancePolicy-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /policies/tokenIssuancePolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Token Issuance Policy"
					],
					"operation": [
						"Policies List Token Issuance Policies"
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
						"Policies Token Issuance Policy"
					],
					"operation": [
						"Policies List Token Issuance Policies"
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
						"Policies Token Issuance Policy"
					],
					"operation": [
						"Policies List Token Issuance Policies"
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
						"Policies Token Issuance Policy"
					],
					"operation": [
						"Policies List Token Issuance Policies"
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
						"Policies Token Issuance Policy"
					],
					"operation": [
						"Policies List Token Issuance Policies"
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
						"Policies Token Issuance Policy"
					],
					"operation": [
						"Policies List Token Issuance Policies"
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
						"Policies Token Issuance Policy"
					],
					"operation": [
						"Policies List Token Issuance Policies"
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
						"Policies Token Issuance Policy"
					],
					"operation": [
						"Policies List Token Issuance Policies"
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
						"Policies Token Issuance Policy"
					],
					"operation": [
						"Policies List Token Issuance Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/tokenIssuancePolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Token Issuance Policy"
					],
					"operation": [
						"Policies Create Token Issuance Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/tokenIssuancePolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Token Issuance Policy"
					],
					"operation": [
						"Policies Create Token Issuance Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Token Issuance Policy"
					],
					"operation": [
						"Policies Delete Token Issuance Policies"
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
						"Policies Token Issuance Policy"
					],
					"operation": [
						"Policies Delete Token Issuance Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Token Issuance Policy"
					],
					"operation": [
						"Policies Get Token Issuance Policies"
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
						"Policies Token Issuance Policy"
					],
					"operation": [
						"Policies Get Token Issuance Policies"
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
						"Policies Token Issuance Policy"
					],
					"operation": [
						"Policies Get Token Issuance Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Token Issuance Policy"
					],
					"operation": [
						"Policies Update Token Issuance Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/tokenIssuancePolicies/{tokenIssuancePolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Token Issuance Policy"
					],
					"operation": [
						"Policies Update Token Issuance Policies"
					]
				}
			}
		},
];
