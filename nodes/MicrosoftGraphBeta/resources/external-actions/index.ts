import type { INodeProperties } from 'n8n-workflow';

export const externalActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"External Actions"
					]
				}
			},
			"options": [
				{
					"name": "External Connections External Connection Items External Item Add Activities",
					"value": "External Connections External Connection Items External Item Add Activities",
					"action": "Invoke action addActivities",
					"description": "Invoke action addActivities",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/external/connections/{{$parameter[\"externalConnection-id\"]}}/items/{{$parameter[\"externalItem-id\"]}}/microsoft.graph.externalConnectors.addActivities"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /external/connections/{externalConnection-id}/items/{externalItem-id}/microsoft.graph.externalConnectors.addActivities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"External Actions"
					],
					"operation": [
						"External Connections External Connection Items External Item Add Activities"
					]
				}
			}
		},
		{
			"displayName": "Activities",
			"name": "activities",
			"type": "json",
			"default": "[\n  {\n    \"performedBy\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "activities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"External Actions"
					],
					"operation": [
						"External Connections External Connection Items External Item Add Activities"
					]
				}
			}
		},
];
