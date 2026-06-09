import type { INodeProperties } from 'n8n-workflow';

export const policiesFunctionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Functions"
					]
				}
			},
			"options": [
				{
					"name": "Policies Authentication Strength Policies Authentication Strength Policy Usage",
					"value": "Policies Authentication Strength Policies Authentication Strength Policy Usage",
					"action": "Invoke function usage",
					"description": "Invoke function usage",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/policies/authenticationStrengthPolicies/{{$parameter[\"authenticationStrengthPolicy-id\"]}}/microsoft.graph.usage()"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /policies/authenticationStrengthPolicies/{authenticationStrengthPolicy-id}/microsoft.graph.usage()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Policies Functions"
					],
					"operation": [
						"Policies Authentication Strength Policies Authentication Strength Policy Usage"
					]
				}
			}
		},
];
