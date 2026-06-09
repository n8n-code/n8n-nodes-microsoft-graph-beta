import type { INodeProperties } from 'n8n-workflow';

export const privilegedSignupStatusFunctionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Signup Status Functions"
					]
				}
			},
			"options": [
				{
					"name": "Privileged Signup Status Can Sign Up",
					"value": "Privileged Signup Status Can Sign Up",
					"action": "Invoke function canSignUp",
					"description": "Invoke function canSignUp",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedSignupStatus/microsoft.graph.canSignUp()"
						}
					}
				},
				{
					"name": "Privileged Signup Status Is Signed Up",
					"value": "Privileged Signup Status Is Signed Up",
					"action": "Invoke function isSignedUp",
					"description": "Invoke function isSignedUp",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/privilegedSignupStatus/microsoft.graph.isSignedUp()"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /privilegedSignupStatus/microsoft.graph.canSignUp()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Signup Status Functions"
					],
					"operation": [
						"Privileged Signup Status Can Sign Up"
					]
				}
			}
		},
		{
			"displayName": "GET /privilegedSignupStatus/microsoft.graph.isSignedUp()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Signup Status Functions"
					],
					"operation": [
						"Privileged Signup Status Is Signed Up"
					]
				}
			}
		},
];
