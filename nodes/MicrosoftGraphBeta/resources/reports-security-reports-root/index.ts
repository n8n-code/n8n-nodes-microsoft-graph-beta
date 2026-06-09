import type { INodeProperties } from 'n8n-workflow';

export const reportsSecurityReportsRootDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Security Reports Root"
					]
				}
			},
			"options": [
				{
					"name": "Reports Delete Security",
					"value": "Reports Delete Security",
					"action": "Delete navigation property security for reports",
					"description": "Delete navigation property security for reports",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/reports/security"
						}
					}
				},
				{
					"name": "Reports Get Security",
					"value": "Reports Get Security",
					"action": "Get security from reports",
					"description": "Provides the ability to launch a realistic simulated phishing attack that organizations can learn from.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/security"
						}
					}
				},
				{
					"name": "Reports Update Security",
					"value": "Reports Update Security",
					"action": "Update the navigation property security in reports",
					"description": "Update the navigation property security in reports",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/reports/security"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /reports/security",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Security Reports Root"
					],
					"operation": [
						"Reports Delete Security"
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
						"Reports Security Reports Root"
					],
					"operation": [
						"Reports Delete Security"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/security",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Security Reports Root"
					],
					"operation": [
						"Reports Get Security"
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
						"Reports Security Reports Root"
					],
					"operation": [
						"Reports Get Security"
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
						"Reports Security Reports Root"
					],
					"operation": [
						"Reports Get Security"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/security",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Security Reports Root"
					],
					"operation": [
						"Reports Update Security"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/security<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Security Reports Root"
					],
					"operation": [
						"Reports Update Security"
					]
				}
			}
		},
];
