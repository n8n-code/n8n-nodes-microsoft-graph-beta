import type { INodeProperties } from 'n8n-workflow';

export const usersItemInsightsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Item Insights"
					]
				}
			},
			"options": [
				{
					"name": "Users Delete Insights",
					"value": "Users Delete Insights",
					"action": "Delete navigation property insights for users",
					"description": "Delete navigation property insights for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/insights"
						}
					}
				},
				{
					"name": "Users Get Insights",
					"value": "Users Get Insights",
					"action": "Get insights from users",
					"description": "Get insights from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/insights"
						}
					}
				},
				{
					"name": "Users Update Insights",
					"value": "Users Update Insights",
					"action": "Update the navigation property insights in users",
					"description": "Update the navigation property insights in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/insights"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /users/{user-id}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Item Insights"
					],
					"operation": [
						"Users Delete Insights"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "ETag",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Users Item Insights"
					],
					"operation": [
						"Users Delete Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Item Insights"
					],
					"operation": [
						"Users Get Insights"
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
						"Users Item Insights"
					],
					"operation": [
						"Users Get Insights"
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
						"Users Item Insights"
					],
					"operation": [
						"Users Get Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Item Insights"
					],
					"operation": [
						"Users Update Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/insights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Item Insights"
					],
					"operation": [
						"Users Update Insights"
					]
				}
			}
		},
];
