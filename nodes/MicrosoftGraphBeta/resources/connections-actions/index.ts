import type { INodeProperties } from 'n8n-workflow';

export const connectionsActionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Connections Actions"
					]
				}
			},
			"options": [
				{
					"name": "Connections External Connection Items External Item Add Activities",
					"value": "Connections External Connection Items External Item Add Activities",
					"action": "Invoke action addActivities",
					"description": "Invoke action addActivities",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/items/{{$parameter[\"externalItem-id\"]}}/microsoft.graph.externalConnectors.addActivities"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /connections/{externalConnection-id}/items/{externalItem-id}/microsoft.graph.externalConnectors.addActivities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections Actions"
					],
					"operation": [
						"Connections External Connection Items External Item Add Activities"
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
						"Connections Actions"
					],
					"operation": [
						"Connections External Connection Items External Item Add Activities"
					]
				}
			}
		},
];
