import type { INodeProperties } from 'n8n-workflow';

export const policiesB2CAuthenticationMethodsPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies B 2 C Authentication Methods Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies Delete B 2 C Authentication Methods Policy",
					"value": "Policies Delete B 2 C Authentication Methods Policy",
					"action": "Delete navigation property b2cAuthenticationMethodsPolicy for policies",
					"description": "Delete navigation property b2cAuthenticationMethodsPolicy for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/b2cAuthenticationMethodsPolicy"
						}
					}
				},
				{
					"name": "Policies Get B 2 C Authentication Methods Policy",
					"value": "Policies Get B 2 C Authentication Methods Policy",
					"action": "Get b2cAuthenticationMethodsPolicy",
					"description": "Read the properties of a b2cAuthenticationMethodsPolicy object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/b2cAuthenticationMethodsPolicy"
						}
					}
				},
				{
					"name": "Policies Update B 2 C Authentication Methods Policy",
					"value": "Policies Update B 2 C Authentication Methods Policy",
					"action": "Update b2cAuthenticationMethodsPolicy",
					"description": "Update the properties of a b2cAuthenticationMethodsPolicy object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/b2cAuthenticationMethodsPolicy"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /policies/b2cAuthenticationMethodsPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies B 2 C Authentication Methods Policy"
					],
					"operation": [
						"Policies Delete B 2 C Authentication Methods Policy"
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
						"Policies B 2 C Authentication Methods Policy"
					],
					"operation": [
						"Policies Delete B 2 C Authentication Methods Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/b2cAuthenticationMethodsPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies B 2 C Authentication Methods Policy"
					],
					"operation": [
						"Policies Get B 2 C Authentication Methods Policy"
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
						"Policies B 2 C Authentication Methods Policy"
					],
					"operation": [
						"Policies Get B 2 C Authentication Methods Policy"
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
						"Policies B 2 C Authentication Methods Policy"
					],
					"operation": [
						"Policies Get B 2 C Authentication Methods Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/b2cAuthenticationMethodsPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies B 2 C Authentication Methods Policy"
					],
					"operation": [
						"Policies Update B 2 C Authentication Methods Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/b2cAuthenticationMethodsPolicy<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies B 2 C Authentication Methods Policy"
					],
					"operation": [
						"Policies Update B 2 C Authentication Methods Policy"
					]
				}
			}
		},
];
