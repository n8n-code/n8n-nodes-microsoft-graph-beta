import type { INodeProperties } from 'n8n-workflow';

export const authenticationMethodsPolicyAuthenticationMethodsPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Methods Policy Authentication Methods Policy"
					]
				}
			},
			"options": [
				{
					"name": "Authentication Methods Policy Authentication Methods Policy Get Authentication Methods Policy",
					"value": "Authentication Methods Policy Authentication Methods Policy Get Authentication Methods Policy",
					"action": "Get authenticationMethodsPolicy",
					"description": "Get authenticationMethodsPolicy",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/authenticationMethodsPolicy"
						}
					}
				},
				{
					"name": "Authentication Methods Policy Authentication Methods Policy Update Authentication Methods Policy",
					"value": "Authentication Methods Policy Authentication Methods Policy Update Authentication Methods Policy",
					"action": "Update authenticationMethodsPolicy",
					"description": "Update authenticationMethodsPolicy",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/authenticationMethodsPolicy"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /authenticationMethodsPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Methods Policy Authentication Methods Policy"
					],
					"operation": [
						"Authentication Methods Policy Authentication Methods Policy Get Authentication Methods Policy"
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
						"Authentication Methods Policy Authentication Methods Policy"
					],
					"operation": [
						"Authentication Methods Policy Authentication Methods Policy Get Authentication Methods Policy"
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
						"Authentication Methods Policy Authentication Methods Policy"
					],
					"operation": [
						"Authentication Methods Policy Authentication Methods Policy Get Authentication Methods Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /authenticationMethodsPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Methods Policy Authentication Methods Policy"
					],
					"operation": [
						"Authentication Methods Policy Authentication Methods Policy Update Authentication Methods Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /authenticationMethodsPolicy<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authentication Methods Policy Authentication Methods Policy"
					],
					"operation": [
						"Authentication Methods Policy Authentication Methods Policy Update Authentication Methods Policy"
					]
				}
			}
		},
];
