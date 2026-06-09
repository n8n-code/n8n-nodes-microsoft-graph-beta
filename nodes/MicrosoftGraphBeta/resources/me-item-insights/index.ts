import type { INodeProperties } from 'n8n-workflow';

export const meItemInsightsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Item Insights"
					]
				}
			},
			"options": [
				{
					"name": "Me Delete Insights",
					"value": "Me Delete Insights",
					"action": "Delete navigation property insights for me",
					"description": "Delete navigation property insights for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/insights"
						}
					}
				},
				{
					"name": "Me Get Insights",
					"value": "Me Get Insights",
					"action": "Get insights from me",
					"description": "Get insights from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/insights"
						}
					}
				},
				{
					"name": "Me Update Insights",
					"value": "Me Update Insights",
					"action": "Update the navigation property insights in me",
					"description": "Update the navigation property insights in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/insights"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /me/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Item Insights"
					],
					"operation": [
						"Me Delete Insights"
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
						"Me Item Insights"
					],
					"operation": [
						"Me Delete Insights"
					]
				}
			}
		},
		{
			"displayName": "GET /me/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Item Insights"
					],
					"operation": [
						"Me Get Insights"
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
						"Me Item Insights"
					],
					"operation": [
						"Me Get Insights"
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
						"Me Item Insights"
					],
					"operation": [
						"Me Get Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/insights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Item Insights"
					],
					"operation": [
						"Me Update Insights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/insights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Item Insights"
					],
					"operation": [
						"Me Update Insights"
					]
				}
			}
		},
];
