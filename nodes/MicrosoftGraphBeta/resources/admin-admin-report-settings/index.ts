import type { INodeProperties } from 'n8n-workflow';

export const adminAdminReportSettingsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Report Settings"
					]
				}
			},
			"options": [
				{
					"name": "Admin Delete Report Settings",
					"value": "Admin Delete Report Settings",
					"action": "Delete navigation property reportSettings for admin",
					"description": "Delete navigation property reportSettings for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/reportSettings"
						}
					}
				},
				{
					"name": "Admin Get Report Settings",
					"value": "Admin Get Report Settings",
					"action": "Get adminReportSettings",
					"description": "Get the tenant-level settings for Microsoft 365 reports.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/reportSettings"
						}
					}
				},
				{
					"name": "Admin Update Report Settings",
					"value": "Admin Update Report Settings",
					"action": "Update adminReportSettings",
					"description": "Update tenant-level settings for Microsoft 365 reports.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/reportSettings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /admin/reportSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Report Settings"
					],
					"operation": [
						"Admin Delete Report Settings"
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
						"Admin Admin Report Settings"
					],
					"operation": [
						"Admin Delete Report Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/reportSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Report Settings"
					],
					"operation": [
						"Admin Get Report Settings"
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
						"Admin Admin Report Settings"
					],
					"operation": [
						"Admin Get Report Settings"
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
						"Admin Admin Report Settings"
					],
					"operation": [
						"Admin Get Report Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/reportSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Report Settings"
					],
					"operation": [
						"Admin Update Report Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/reportSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Admin Report Settings"
					],
					"operation": [
						"Admin Update Report Settings"
					]
				}
			}
		},
];
