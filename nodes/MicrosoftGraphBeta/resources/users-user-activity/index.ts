import type { INodeProperties } from 'n8n-workflow';

export const usersUserActivityDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Activity"
					]
				}
			},
			"options": [
				{
					"name": "Users List Activities",
					"value": "Users List Activities",
					"action": "Get activities from users",
					"description": "Get activities from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/activities"
						}
					}
				},
				{
					"name": "Users Create Activities",
					"value": "Users Create Activities",
					"action": "Create new navigation property to activities for users",
					"description": "Create new navigation property to activities for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/activities"
						}
					}
				},
				{
					"name": "Users Delete Activities",
					"value": "Users Delete Activities",
					"action": "Delete navigation property activities for users",
					"description": "Delete navigation property activities for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/activities/{{$parameter[\"userActivity-id\"]}}"
						}
					}
				},
				{
					"name": "Users Get Activities",
					"value": "Users Get Activities",
					"action": "Get activities from users",
					"description": "Get activities from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/activities/{{$parameter[\"userActivity-id\"]}}"
						}
					}
				},
				{
					"name": "Users Update Activities",
					"value": "Users Update Activities",
					"action": "Update the navigation property activities in users",
					"description": "Update the navigation property activities in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/activities/{{$parameter[\"userActivity-id\"]}}"
						}
					}
				},
				{
					"name": "Users Activities List History Items",
					"value": "Users Activities List History Items",
					"action": "Get historyItems from users",
					"description": "Get historyItems from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/activities/{{$parameter[\"userActivity-id\"]}}/historyItems"
						}
					}
				},
				{
					"name": "Users Activities Create History Items",
					"value": "Users Activities Create History Items",
					"action": "Create new navigation property to historyItems for users",
					"description": "Create new navigation property to historyItems for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/activities/{{$parameter[\"userActivity-id\"]}}/historyItems"
						}
					}
				},
				{
					"name": "Users Activities Delete History Items",
					"value": "Users Activities Delete History Items",
					"action": "Delete navigation property historyItems for users",
					"description": "Delete navigation property historyItems for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/activities/{{$parameter[\"userActivity-id\"]}}/historyItems/{{$parameter[\"activityHistoryItem-id\"]}}"
						}
					}
				},
				{
					"name": "Users Activities Get History Items",
					"value": "Users Activities Get History Items",
					"action": "Get historyItems from users",
					"description": "Get historyItems from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/activities/{{$parameter[\"userActivity-id\"]}}/historyItems/{{$parameter[\"activityHistoryItem-id\"]}}"
						}
					}
				},
				{
					"name": "Users Activities Update History Items",
					"value": "Users Activities Update History Items",
					"action": "Update the navigation property historyItems in users",
					"description": "Update the navigation property historyItems in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/activities/{{$parameter[\"userActivity-id\"]}}/historyItems/{{$parameter[\"activityHistoryItem-id\"]}}"
						}
					}
				},
				{
					"name": "Users Activities History Items Get Activity",
					"value": "Users Activities History Items Get Activity",
					"action": "Get activity from users",
					"description": "Get activity from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/activities/{{$parameter[\"userActivity-id\"]}}/historyItems/{{$parameter[\"activityHistoryItem-id\"]}}/activity"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/{user-id}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Activity"
					],
					"operation": [
						"Users List Activities"
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
						"Users User Activity"
					],
					"operation": [
						"Users List Activities"
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
						"Users User Activity"
					],
					"operation": [
						"Users List Activities"
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
						"Users User Activity"
					],
					"operation": [
						"Users List Activities"
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
						"Users User Activity"
					],
					"operation": [
						"Users List Activities"
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
						"Users User Activity"
					],
					"operation": [
						"Users List Activities"
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
						"Users User Activity"
					],
					"operation": [
						"Users List Activities"
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
						"Users User Activity"
					],
					"operation": [
						"Users List Activities"
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
						"Users User Activity"
					],
					"operation": [
						"Users List Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Activity"
					],
					"operation": [
						"Users Create Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/activities<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Activity"
					],
					"operation": [
						"Users Create Activities"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/activities/{userActivity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Activity"
					],
					"operation": [
						"Users Delete Activities"
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
						"Users User Activity"
					],
					"operation": [
						"Users Delete Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/activities/{userActivity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Activity"
					],
					"operation": [
						"Users Get Activities"
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
						"Users User Activity"
					],
					"operation": [
						"Users Get Activities"
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
						"Users User Activity"
					],
					"operation": [
						"Users Get Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/activities/{userActivity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Activity"
					],
					"operation": [
						"Users Update Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/activities/{userActivity-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Activity"
					],
					"operation": [
						"Users Update Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/activities/{userActivity-id}/historyItems",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Activity"
					],
					"operation": [
						"Users Activities List History Items"
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
						"Users User Activity"
					],
					"operation": [
						"Users Activities List History Items"
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
						"Users User Activity"
					],
					"operation": [
						"Users Activities List History Items"
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
						"Users User Activity"
					],
					"operation": [
						"Users Activities List History Items"
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
						"Users User Activity"
					],
					"operation": [
						"Users Activities List History Items"
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
						"Users User Activity"
					],
					"operation": [
						"Users Activities List History Items"
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
						"Users User Activity"
					],
					"operation": [
						"Users Activities List History Items"
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
						"Users User Activity"
					],
					"operation": [
						"Users Activities List History Items"
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
						"Users User Activity"
					],
					"operation": [
						"Users Activities List History Items"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/activities/{userActivity-id}/historyItems",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Activity"
					],
					"operation": [
						"Users Activities Create History Items"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/activities/{userActivity-id}/historyItems<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Activity"
					],
					"operation": [
						"Users Activities Create History Items"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Activity"
					],
					"operation": [
						"Users Activities Delete History Items"
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
						"Users User Activity"
					],
					"operation": [
						"Users Activities Delete History Items"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Activity"
					],
					"operation": [
						"Users Activities Get History Items"
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
						"Users User Activity"
					],
					"operation": [
						"Users Activities Get History Items"
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
						"Users User Activity"
					],
					"operation": [
						"Users Activities Get History Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Activity"
					],
					"operation": [
						"Users Activities Update History Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Activity"
					],
					"operation": [
						"Users Activities Update History Items"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Activity"
					],
					"operation": [
						"Users Activities History Items Get Activity"
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
						"Users User Activity"
					],
					"operation": [
						"Users Activities History Items Get Activity"
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
						"Users User Activity"
					],
					"operation": [
						"Users Activities History Items Get Activity"
					]
				}
			}
		},
];
