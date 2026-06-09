import type { INodeProperties } from 'n8n-workflow';

export const mePresenceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Presence"
					]
				}
			},
			"options": [
				{
					"name": "Me Delete Presence",
					"value": "Me Delete Presence",
					"action": "Delete navigation property presence for me",
					"description": "Delete navigation property presence for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/presence"
						}
					}
				},
				{
					"name": "Me Get Presence",
					"value": "Me Get Presence",
					"action": "presence: setStatusMessage",
					"description": "Set a presence status message for a user. An optional expiration date and time can be supplied.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/presence"
						}
					}
				},
				{
					"name": "Me Update Presence",
					"value": "Me Update Presence",
					"action": "Update the navigation property presence in me",
					"description": "Update the navigation property presence in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/presence"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /me/presence",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Presence"
					],
					"operation": [
						"Me Delete Presence"
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
						"Me Presence"
					],
					"operation": [
						"Me Delete Presence"
					]
				}
			}
		},
		{
			"displayName": "GET /me/presence",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Presence"
					],
					"operation": [
						"Me Get Presence"
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
						"Me Presence"
					],
					"operation": [
						"Me Get Presence"
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
						"Me Presence"
					],
					"operation": [
						"Me Get Presence"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/presence",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Presence"
					],
					"operation": [
						"Me Update Presence"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/presence<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Presence"
					],
					"operation": [
						"Me Update Presence"
					]
				}
			}
		},
];
