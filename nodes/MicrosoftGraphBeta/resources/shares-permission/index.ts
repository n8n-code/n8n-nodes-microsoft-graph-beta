import type { INodeProperties } from 'n8n-workflow';

export const sharesPermissionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Permission"
					]
				}
			},
			"options": [
				{
					"name": "Shares Delete Permission",
					"value": "Shares Delete Permission",
					"action": "Delete navigation property permission for shares",
					"description": "Delete navigation property permission for shares",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/permission"
						}
					}
				},
				{
					"name": "Shares Get Permission",
					"value": "Shares Get Permission",
					"action": "Get permission from shares",
					"description": "Used to access the permission representing the underlying sharing link",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/permission"
						}
					}
				},
				{
					"name": "Shares Update Permission",
					"value": "Shares Update Permission",
					"action": "Update the navigation property permission in shares",
					"description": "Update the navigation property permission in shares",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/permission"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /shares/{sharedDriveItem-id}/permission",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Permission"
					],
					"operation": [
						"Shares Delete Permission"
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
						"Shares Permission"
					],
					"operation": [
						"Shares Delete Permission"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/permission",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Permission"
					],
					"operation": [
						"Shares Get Permission"
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
						"Shares Permission"
					],
					"operation": [
						"Shares Get Permission"
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
						"Shares Permission"
					],
					"operation": [
						"Shares Get Permission"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/permission",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Permission"
					],
					"operation": [
						"Shares Update Permission"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}/permission<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Permission"
					],
					"operation": [
						"Shares Update Permission"
					]
				}
			}
		},
];
