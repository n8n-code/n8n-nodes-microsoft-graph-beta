import type { INodeProperties } from 'n8n-workflow';

export const riskyUsersActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Risky Users Actions"
					]
				}
			},
			"options": [
				{
					"name": "Risky Users Confirm Compromised",
					"value": "Risky Users Confirm Compromised",
					"action": "Invoke action confirmCompromised",
					"description": "Confirm one or more riskyUser objects as compromised. This action sets the targeted user's risk level to high.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/riskyUsers/microsoft.graph.confirmCompromised"
						}
					}
				},
				{
					"name": "Risky Users Dismiss",
					"value": "Risky Users Dismiss",
					"action": "Invoke action dismiss",
					"description": "Dismiss the risk of one or more riskyUser objects. This action sets the targeted user's risk level to none. The maximum count of users to dismiss in one call is 60.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/riskyUsers/microsoft.graph.dismiss"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /riskyUsers/microsoft.graph.confirmCompromised",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risky Users Actions"
					],
					"operation": [
						"Risky Users Confirm Compromised"
					]
				}
			}
		},
		{
			"displayName": "User Ids",
			"name": "userIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "userIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Risky Users Actions"
					],
					"operation": [
						"Risky Users Confirm Compromised"
					]
				}
			}
		},
		{
			"displayName": "POST /riskyUsers/microsoft.graph.dismiss",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Risky Users Actions"
					],
					"operation": [
						"Risky Users Dismiss"
					]
				}
			}
		},
		{
			"displayName": "User Ids",
			"name": "userIds",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "userIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Risky Users Actions"
					],
					"operation": [
						"Risky Users Dismiss"
					]
				}
			}
		},
];
