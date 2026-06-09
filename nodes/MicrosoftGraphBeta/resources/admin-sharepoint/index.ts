import type { INodeProperties } from 'n8n-workflow';

export const adminSharepointDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Sharepoint"
					]
				}
			},
			"options": [
				{
					"name": "Admin Delete Sharepoint",
					"value": "Admin Delete Sharepoint",
					"action": "Delete navigation property sharepoint for admin",
					"description": "Delete navigation property sharepoint for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/sharepoint"
						}
					}
				},
				{
					"name": "Admin Get Sharepoint",
					"value": "Admin Get Sharepoint",
					"action": "Get sharepoint from admin",
					"description": "A container for administrative resources to manage tenant-level settings for SharePoint and OneDrive.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/sharepoint"
						}
					}
				},
				{
					"name": "Admin Update Sharepoint",
					"value": "Admin Update Sharepoint",
					"action": "Update the navigation property sharepoint in admin",
					"description": "Update the navigation property sharepoint in admin",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/sharepoint"
						}
					}
				},
				{
					"name": "Admin Sharepoint Delete Settings",
					"value": "Admin Sharepoint Delete Settings",
					"action": "Delete navigation property settings for admin",
					"description": "Delete navigation property settings for admin",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/admin/sharepoint/settings"
						}
					}
				},
				{
					"name": "Admin Sharepoint Get Settings",
					"value": "Admin Sharepoint Get Settings",
					"action": "Get settings",
					"description": "Get the tenant-level settings for SharePoint and OneDrive.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/admin/sharepoint/settings"
						}
					}
				},
				{
					"name": "Admin Sharepoint Update Settings",
					"value": "Admin Sharepoint Update Settings",
					"action": "Update settings",
					"description": "Update one or more tenant-level settings for SharePoint and OneDrive.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/admin/sharepoint/settings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /admin/sharepoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Sharepoint"
					],
					"operation": [
						"Admin Delete Sharepoint"
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
						"Admin Sharepoint"
					],
					"operation": [
						"Admin Delete Sharepoint"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/sharepoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Sharepoint"
					],
					"operation": [
						"Admin Get Sharepoint"
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
						"Admin Sharepoint"
					],
					"operation": [
						"Admin Get Sharepoint"
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
						"Admin Sharepoint"
					],
					"operation": [
						"Admin Get Sharepoint"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/sharepoint",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Sharepoint"
					],
					"operation": [
						"Admin Update Sharepoint"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/sharepoint<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Sharepoint"
					],
					"operation": [
						"Admin Update Sharepoint"
					]
				}
			}
		},
		{
			"displayName": "DELETE /admin/sharepoint/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Sharepoint"
					],
					"operation": [
						"Admin Sharepoint Delete Settings"
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
						"Admin Sharepoint"
					],
					"operation": [
						"Admin Sharepoint Delete Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /admin/sharepoint/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Sharepoint"
					],
					"operation": [
						"Admin Sharepoint Get Settings"
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
						"Admin Sharepoint"
					],
					"operation": [
						"Admin Sharepoint Get Settings"
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
						"Admin Sharepoint"
					],
					"operation": [
						"Admin Sharepoint Get Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/sharepoint/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Sharepoint"
					],
					"operation": [
						"Admin Sharepoint Update Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /admin/sharepoint/settings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Admin Sharepoint"
					],
					"operation": [
						"Admin Sharepoint Update Settings"
					]
				}
			}
		},
];
