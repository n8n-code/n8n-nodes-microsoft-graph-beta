import type { INodeProperties } from 'n8n-workflow';

export const policiesAuthenticationStrengthPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Strength Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies List Authentication Strength Policies",
					"value": "Policies List Authentication Strength Policies",
					"action": "List authenticationStrengthPolicies",
					"description": "Get a list of the authenticationStrengthPolicy objects and their properties. This API returns both built-in and custom policies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/authenticationStrengthPolicies"
						}
					}
				},
				{
					"name": "Policies Create Authentication Strength Policies",
					"value": "Policies Create Authentication Strength Policies",
					"action": "Create authenticationStrengthPolicy",
					"description": "Create a new custom authenticationStrengthPolicy object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/authenticationStrengthPolicies"
						}
					}
				},
				{
					"name": "Policies Delete Authentication Strength Policies",
					"value": "Policies Delete Authentication Strength Policies",
					"action": "Delete navigation property authenticationStrengthPolicies for policies",
					"description": "Delete navigation property authenticationStrengthPolicies for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/authenticationStrengthPolicies/{{$parameter[\"authenticationStrengthPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Get Authentication Strength Policies",
					"value": "Policies Get Authentication Strength Policies",
					"action": "Get authenticationStrengthPolicies from policies",
					"description": "The authentication method combinations that are to be used in scenarios defined by Azure AD Conditional Access.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/authenticationStrengthPolicies/{{$parameter[\"authenticationStrengthPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Update Authentication Strength Policies",
					"value": "Policies Update Authentication Strength Policies",
					"action": "Update the navigation property authenticationStrengthPolicies in policies",
					"description": "Update the navigation property authenticationStrengthPolicies in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/authenticationStrengthPolicies/{{$parameter[\"authenticationStrengthPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Authentication Strength Policies List Combination Configurations",
					"value": "Policies Authentication Strength Policies List Combination Configurations",
					"action": "List combinationConfigurations",
					"description": "Get the authenticationCombinationConfiguration objects for an authentication strength policy. authenticationCombinationConfiguration represents requirements placed on specific authentication method combinations that require specified variants of those authentication methods to be used when authenticating. Currently, only fido2combinationConfigurations objects are supported. authenticationCombinationConfiguration objects are supported only for custom authentication strengths.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/authenticationStrengthPolicies/{{$parameter[\"authenticationStrengthPolicy-id\"]}}/combinationConfigurations"
						}
					}
				},
				{
					"name": "Policies Authentication Strength Policies Create Combination Configurations",
					"value": "Policies Authentication Strength Policies Create Combination Configurations",
					"action": "Create combinationConfiguration",
					"description": "Create a new authenticationCombinationConfiguration object. In use, only fido2combinationConfigurations may be created, and these may only be created for custom authentication strength policies.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/policies/authenticationStrengthPolicies/{{$parameter[\"authenticationStrengthPolicy-id\"]}}/combinationConfigurations"
						}
					}
				},
				{
					"name": "Policies Authentication Strength Policies Delete Combination Configurations",
					"value": "Policies Authentication Strength Policies Delete Combination Configurations",
					"action": "Delete navigation property combinationConfigurations for policies",
					"description": "Delete navigation property combinationConfigurations for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/authenticationStrengthPolicies/{{$parameter[\"authenticationStrengthPolicy-id\"]}}/combinationConfigurations/{{$parameter[\"authenticationCombinationConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Authentication Strength Policies Get Combination Configurations",
					"value": "Policies Authentication Strength Policies Get Combination Configurations",
					"action": "Get combinationConfigurations from policies",
					"description": "Settings that may be used to require specific types or instances of an authentication method to be used when authenticating with a specified combination of authentication methods.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/authenticationStrengthPolicies/{{$parameter[\"authenticationStrengthPolicy-id\"]}}/combinationConfigurations/{{$parameter[\"authenticationCombinationConfiguration-id\"]}}"
						}
					}
				},
				{
					"name": "Policies Authentication Strength Policies Update Combination Configurations",
					"value": "Policies Authentication Strength Policies Update Combination Configurations",
					"action": "Update the navigation property combinationConfigurations in policies",
					"description": "Update the navigation property combinationConfigurations in policies",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/authenticationStrengthPolicies/{{$parameter[\"authenticationStrengthPolicy-id\"]}}/combinationConfigurations/{{$parameter[\"authenticationCombinationConfiguration-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /policies/authenticationStrengthPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies List Authentication Strength Policies"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies List Authentication Strength Policies"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies List Authentication Strength Policies"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies List Authentication Strength Policies"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies List Authentication Strength Policies"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies List Authentication Strength Policies"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies List Authentication Strength Policies"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies List Authentication Strength Policies"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies List Authentication Strength Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/authenticationStrengthPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Create Authentication Strength Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/authenticationStrengthPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Create Authentication Strength Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Delete Authentication Strength Policies"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Delete Authentication Strength Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Get Authentication Strength Policies"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Get Authentication Strength Policies"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Get Authentication Strength Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Update Authentication Strength Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Update Authentication Strength Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Authentication Strength Policies List Combination Configurations"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Authentication Strength Policies List Combination Configurations"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Authentication Strength Policies List Combination Configurations"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Authentication Strength Policies List Combination Configurations"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Authentication Strength Policies List Combination Configurations"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Authentication Strength Policies List Combination Configurations"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Authentication Strength Policies List Combination Configurations"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Authentication Strength Policies List Combination Configurations"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Authentication Strength Policies List Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Authentication Strength Policies Create Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Authentication Strength Policies Create Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Authentication Strength Policies Delete Combination Configurations"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Authentication Strength Policies Delete Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Authentication Strength Policies Get Combination Configurations"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Authentication Strength Policies Get Combination Configurations"
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
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Authentication Strength Policies Get Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Authentication Strength Policies Update Combination Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/combinationConfigurations/{authenticationCombinationConfiguration-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Strength Policy"
					],
					"operation": [
						"Policies Authentication Strength Policies Update Combination Configurations"
					]
				}
			}
		},
];
