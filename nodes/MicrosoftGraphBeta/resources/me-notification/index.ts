import type { INodeProperties } from 'n8n-workflow';

export const meNotificationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Notification"
					]
				}
			},
			"options": [
				{
					"name": "Me List Notifications",
					"value": "Me List Notifications",
					"action": "Get notifications from me",
					"description": "Get notifications from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/notifications"
						}
					}
				},
				{
					"name": "Me Create Notifications",
					"value": "Me Create Notifications",
					"action": "Create new navigation property to notifications for me",
					"description": "Create new navigation property to notifications for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/notifications"
						}
					}
				},
				{
					"name": "Me Delete Notifications",
					"value": "Me Delete Notifications",
					"action": "Delete navigation property notifications for me",
					"description": "Delete navigation property notifications for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/notifications/{{$parameter[\"notification-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get Notifications",
					"value": "Me Get Notifications",
					"action": "Get notifications from me",
					"description": "Get notifications from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/notifications/{{$parameter[\"notification-id\"]}}"
						}
					}
				},
				{
					"name": "Me Update Notifications",
					"value": "Me Update Notifications",
					"action": "Update the navigation property notifications in me",
					"description": "Update the navigation property notifications in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/notifications/{{$parameter[\"notification-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/notifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Notification"
					],
					"operation": [
						"Me List Notifications"
					]
				}
			}
		},
		{
			"displayName": "Top",
			"name": "%24top",
			"description": "Show only the first n items",
			"default": 50,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$top",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Notification"
					],
					"operation": [
						"Me List Notifications"
					]
				}
			}
		},
		{
			"displayName": "Skip",
			"name": "%24skip",
			"description": "Skip the first n items",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "$skip",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Notification"
					],
					"operation": [
						"Me List Notifications"
					]
				}
			}
		},
		{
			"displayName": "Search",
			"name": "%24search",
			"description": "Search items by search phrases",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$search",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Notification"
					],
					"operation": [
						"Me List Notifications"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "%24filter",
			"description": "Filter items by property values",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "$filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Notification"
					],
					"operation": [
						"Me List Notifications"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "%24count",
			"description": "Include count of items",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "$count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Notification"
					],
					"operation": [
						"Me List Notifications"
					]
				}
			}
		},
		{
			"displayName": "Orderby",
			"name": "%24orderby",
			"description": "Order items by property values",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "$orderby",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Me Notification"
					],
					"operation": [
						"Me List Notifications"
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
						"Me Notification"
					],
					"operation": [
						"Me List Notifications"
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
						"Me Notification"
					],
					"operation": [
						"Me List Notifications"
					]
				}
			}
		},
		{
			"displayName": "POST /me/notifications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Notification"
					],
					"operation": [
						"Me Create Notifications"
					]
				}
			}
		},
		{
			"displayName": "POST /me/notifications<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Notification"
					],
					"operation": [
						"Me Create Notifications"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/notifications/{notification-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Notification"
					],
					"operation": [
						"Me Delete Notifications"
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
						"Me Notification"
					],
					"operation": [
						"Me Delete Notifications"
					]
				}
			}
		},
		{
			"displayName": "GET /me/notifications/{notification-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Notification"
					],
					"operation": [
						"Me Get Notifications"
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
						"Me Notification"
					],
					"operation": [
						"Me Get Notifications"
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
						"Me Notification"
					],
					"operation": [
						"Me Get Notifications"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/notifications/{notification-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Notification"
					],
					"operation": [
						"Me Update Notifications"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/notifications/{notification-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Notification"
					],
					"operation": [
						"Me Update Notifications"
					]
				}
			}
		},
];
