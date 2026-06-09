import type { INodeProperties } from 'n8n-workflow';

export const privilegedSignupStatusActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Signup Status Actions"
					]
				}
			},
			"options": [
				{
					"name": "Privileged Signup Status Complete Setup",
					"value": "Privileged Signup Status Complete Setup",
					"action": "Invoke action completeSetup",
					"description": "Invoke action completeSetup",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedSignupStatus/microsoft.graph.completeSetup"
						}
					}
				},
				{
					"name": "Privileged Signup Status Sign Up",
					"value": "Privileged Signup Status Sign Up",
					"action": "Invoke action signUp",
					"description": "Invoke action signUp",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/privilegedSignupStatus/microsoft.graph.signUp"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /privilegedSignupStatus/microsoft.graph.completeSetup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Signup Status Actions"
					],
					"operation": [
						"Privileged Signup Status Complete Setup"
					]
				}
			}
		},
		{
			"displayName": "Tenant Setup Info",
			"name": "tenantSetupInfo",
			"type": "string",
			"default": {
				"defaultRolesSettings": {
					"approverIds": [
						null
					]
				},
				"relevantRolesSettings": [
					null
				]
			},
			"routing": {
				"send": {
					"property": "tenantSetupInfo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Signup Status Actions"
					],
					"operation": [
						"Privileged Signup Status Complete Setup"
					]
				}
			}
		},
		{
			"displayName": "POST /privilegedSignupStatus/microsoft.graph.signUp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Privileged Signup Status Actions"
					],
					"operation": [
						"Privileged Signup Status Sign Up"
					]
				}
			}
		},
];
