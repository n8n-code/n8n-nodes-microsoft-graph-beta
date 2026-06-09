import type { INodeProperties } from 'n8n-workflow';

export const sitesItemAnalyticsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Item Analytics"
					]
				}
			},
			"options": [
				{
					"name": "Sites Get Analytics",
					"value": "Sites Get Analytics",
					"action": "Get analytics from sites",
					"description": "Analytics about the view activities that took place in this site.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/sites/{{$parameter[\"site-id\"]}}/analytics"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /sites/{site-id}/analytics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Sites Item Analytics"
					],
					"operation": [
						"Sites Get Analytics"
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
						"Sites Item Analytics"
					],
					"operation": [
						"Sites Get Analytics"
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
						"Sites Item Analytics"
					],
					"operation": [
						"Sites Get Analytics"
					]
				}
			}
		},
];
