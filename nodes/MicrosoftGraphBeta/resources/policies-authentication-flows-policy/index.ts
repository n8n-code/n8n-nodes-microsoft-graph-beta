import type { INodeProperties } from 'n8n-workflow';

export const policiesAuthenticationFlowsPolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Flows Policy"
					]
				}
			},
			"options": [
				{
					"name": "Policies Delete Authentication Flows Policy",
					"value": "Policies Delete Authentication Flows Policy",
					"action": "Delete navigation property authenticationFlowsPolicy for policies",
					"description": "Delete navigation property authenticationFlowsPolicy for policies",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/policies/authenticationFlowsPolicy"
						}
					}
				},
				{
					"name": "Policies Get Authentication Flows Policy",
					"value": "Policies Get Authentication Flows Policy",
					"action": "Get authenticationFlowsPolicy",
					"description": "Read the properties and relationships of an authenticationFlowsPolicy object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/authenticationFlowsPolicy"
						}
					}
				},
				{
					"name": "Policies Update Authentication Flows Policy",
					"value": "Policies Update Authentication Flows Policy",
					"action": "Update authenticationFlowsPolicy",
					"description": "Update the Boolean **selfServiceSignUp** property of an authenticationFlowsPolicy object. The properties **id**, **type**, and **description** cannot be modified.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/policies/authenticationFlowsPolicy"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /policies/authenticationFlowsPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Flows Policy"
					],
					"operation": [
						"Policies Delete Authentication Flows Policy"
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
						"Policies Authentication Flows Policy"
					],
					"operation": [
						"Policies Delete Authentication Flows Policy"
					]
				}
			}
		},
		{
			"displayName": "GET /policies/authenticationFlowsPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Flows Policy"
					],
					"operation": [
						"Policies Get Authentication Flows Policy"
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
						"Policies Authentication Flows Policy"
					],
					"operation": [
						"Policies Get Authentication Flows Policy"
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
						"Policies Authentication Flows Policy"
					],
					"operation": [
						"Policies Get Authentication Flows Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/authenticationFlowsPolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Flows Policy"
					],
					"operation": [
						"Policies Update Authentication Flows Policy"
					]
				}
			}
		},
		{
			"displayName": "PATCH /policies/authenticationFlowsPolicy<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Authentication Flows Policy"
					],
					"operation": [
						"Policies Update Authentication Flows Policy"
					]
				}
			}
		},
];
