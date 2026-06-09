import type { INodeProperties } from 'n8n-workflow';

export const trustFrameworkFunctionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Functions"
					]
				}
			},
			"options": [
				{
					"name": "Trust Framework Key Sets Trust Framework Key Set Get Active Key",
					"value": "Trust Framework Key Sets Trust Framework Key Set Get Active Key",
					"action": "Invoke function getActiveKey",
					"description": "Invoke function getActiveKey",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/trustFramework/keySets/{{$parameter[\"trustFrameworkKeySet-id\"]}}/microsoft.graph.getActiveKey()"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /trustFramework/keySets/{trustFrameworkKeySet-id}/microsoft.graph.getActiveKey()",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Trust Framework Functions"
					],
					"operation": [
						"Trust Framework Key Sets Trust Framework Key Set Get Active Key"
					]
				}
			}
		},
];
