import type { INodeProperties } from 'n8n-workflow';

export const plannerPlannerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner"
					]
				}
			},
			"options": [
				{
					"name": "Planner Planner Get Planner",
					"value": "Planner Planner Get Planner",
					"action": "Get planner",
					"description": "Get planner",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/planner"
						}
					}
				},
				{
					"name": "Planner Planner Update Planner",
					"value": "Planner Planner Update Planner",
					"action": "Update planner",
					"description": "Update planner",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/planner"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /planner",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner"
					],
					"operation": [
						"Planner Planner Get Planner"
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
						"Planner Planner"
					],
					"operation": [
						"Planner Planner Get Planner"
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
						"Planner Planner"
					],
					"operation": [
						"Planner Planner Get Planner"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner"
					],
					"operation": [
						"Planner Planner Update Planner"
					]
				}
			}
		},
		{
			"displayName": "PATCH /planner<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Planner Planner"
					],
					"operation": [
						"Planner Planner Update Planner"
					]
				}
			}
		},
];
