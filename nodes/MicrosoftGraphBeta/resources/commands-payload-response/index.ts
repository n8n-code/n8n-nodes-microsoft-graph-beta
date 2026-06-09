import type { INodeProperties } from 'n8n-workflow';

export const commandsPayloadResponseDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Commands Payload Response"
					]
				}
			},
			"options": [
				{
					"name": "Commands Get Responsepayload",
					"value": "Commands Get Responsepayload",
					"action": "Get responsepayload from commands",
					"description": "Get responsepayload from commands",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/commands/{{$parameter[\"command-id\"]}}/responsepayload"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /commands/{command-id}/responsepayload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Commands Payload Response"
					],
					"operation": [
						"Commands Get Responsepayload"
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
						"Commands Payload Response"
					],
					"operation": [
						"Commands Get Responsepayload"
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
						"Commands Payload Response"
					],
					"operation": [
						"Commands Get Responsepayload"
					]
				}
			}
		},
];
