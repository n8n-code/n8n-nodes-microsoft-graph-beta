import type { INodeProperties } from 'n8n-workflow';

export const usersPresenceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Presence"
					]
				}
			},
			"options": [
				{
					"name": "Users Delete Presence",
					"value": "Users Delete Presence",
					"action": "Delete navigation property presence for users",
					"description": "Delete navigation property presence for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/presence"
						}
					}
				},
				{
					"name": "Users Get Presence",
					"value": "Users Get Presence",
					"action": "presence: setStatusMessage",
					"description": "Set a presence status message for a user. An optional expiration date and time can be supplied.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/presence"
						}
					}
				},
				{
					"name": "Users Update Presence",
					"value": "Users Update Presence",
					"action": "Update the navigation property presence in users",
					"description": "Update the navigation property presence in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/presence"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /users/{user-id}/presence",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Presence"
					],
					"operation": [
						"Users Delete Presence"
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
						"Users Presence"
					],
					"operation": [
						"Users Delete Presence"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/presence",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Presence"
					],
					"operation": [
						"Users Get Presence"
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
						"Users Presence"
					],
					"operation": [
						"Users Get Presence"
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
						"Users Presence"
					],
					"operation": [
						"Users Get Presence"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/presence",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Presence"
					],
					"operation": [
						"Users Update Presence"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/presence<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Presence"
					],
					"operation": [
						"Users Update Presence"
					]
				}
			}
		},
];
