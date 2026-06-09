import type { INodeProperties } from 'n8n-workflow';

export const teamworkTeamworkDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork"
					]
				}
			},
			"options": [
				{
					"name": "Teamwork Teamwork Get Teamwork",
					"value": "Teamwork Teamwork Get Teamwork",
					"action": "Get teamwork",
					"description": "Get teamwork",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamwork"
						}
					}
				},
				{
					"name": "Teamwork Teamwork Update Teamwork",
					"value": "Teamwork Teamwork Update Teamwork",
					"action": "Update teamwork",
					"description": "Update teamwork",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/teamwork"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /teamwork",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork"
					],
					"operation": [
						"Teamwork Teamwork Get Teamwork"
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
						"Teamwork Teamwork"
					],
					"operation": [
						"Teamwork Teamwork Get Teamwork"
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
						"Teamwork Teamwork"
					],
					"operation": [
						"Teamwork Teamwork Get Teamwork"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork"
					],
					"operation": [
						"Teamwork Teamwork Update Teamwork"
					]
				}
			}
		},
		{
			"displayName": "PATCH /teamwork<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Teamwork Teamwork"
					],
					"operation": [
						"Teamwork Teamwork Update Teamwork"
					]
				}
			}
		},
];
