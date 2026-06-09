import type { INodeProperties } from 'n8n-workflow';

export const identityFunctionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Functions"
					]
				}
			},
			"options": [
				{
					"name": "Identity B 2 C User Flows B 2 C Identity User Flow User Attribute Assignments Get Order",
					"value": "Identity B 2 C User Flows B 2 C Identity User Flow User Attribute Assignments Get Order",
					"action": "Invoke function getOrder",
					"description": "Invoke function getOrder",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/b2cUserFlows/{{$parameter[\"b2cIdentityUserFlow-id\"]}}/userAttributeAssignments/microsoft.graph.getOrder()"
						}
					}
				},
				{
					"name": "Identity B 2 X User Flows B 2 X Identity User Flow User Attribute Assignments Get Order",
					"value": "Identity B 2 X User Flows B 2 X Identity User Flow User Attribute Assignments Get Order",
					"action": "Invoke function getOrder",
					"description": "Invoke function getOrder",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/b2xUserFlows/{{$parameter[\"b2xIdentityUserFlow-id\"]}}/userAttributeAssignments/microsoft.graph.getOrder()"
						}
					}
				},
				{
					"name": "Identity Conditional Access Authentication Strength Policies Authentication Strength Policy Usage",
					"value": "Identity Conditional Access Authentication Strength Policies Authentication Strength Policy Usage",
					"action": "Invoke function usage",
					"description": "Invoke function usage",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/conditionalAccess/authenticationStrength/policies/{{$parameter[\"authenticationStrengthPolicy-id\"]}}/microsoft.graph.usage()"
						}
					}
				},
				{
					"name": "Identity Identity Providers Available Provider Types",
					"value": "Identity Identity Providers Available Provider Types",
					"action": "Invoke function availableProviderTypes",
					"description": "Invoke function availableProviderTypes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/identity/identityProviders/microsoft.graph.availableProviderTypes()"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /identity/b2cUserFlows/{b2cIdentityUserFlow-id}/userAttributeAssignments/microsoft.graph.getOrder()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Functions"
					],
					"operation": [
						"Identity B 2 C User Flows B 2 C Identity User Flow User Attribute Assignments Get Order"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/userAttributeAssignments/microsoft.graph.getOrder()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Functions"
					],
					"operation": [
						"Identity B 2 X User Flows B 2 X Identity User Flow User Attribute Assignments Get Order"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy-id}/microsoft.graph.usage()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Functions"
					],
					"operation": [
						"Identity Conditional Access Authentication Strength Policies Authentication Strength Policy Usage"
					]
				}
			}
		},
		{
			"displayName": "GET /identity/identityProviders/microsoft.graph.availableProviderTypes()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identity Functions"
					],
					"operation": [
						"Identity Identity Providers Available Provider Types"
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
						"Identity Functions"
					],
					"operation": [
						"Identity Identity Providers Available Provider Types"
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
						"Identity Functions"
					],
					"operation": [
						"Identity Identity Providers Available Provider Types"
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
						"Identity Functions"
					],
					"operation": [
						"Identity Identity Providers Available Provider Types"
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
						"Identity Functions"
					],
					"operation": [
						"Identity Identity Providers Available Provider Types"
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
						"Identity Functions"
					],
					"operation": [
						"Identity Identity Providers Available Provider Types"
					]
				}
			}
		},
];
