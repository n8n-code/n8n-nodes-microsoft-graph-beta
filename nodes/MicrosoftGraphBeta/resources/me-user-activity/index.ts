import type { INodeProperties } from 'n8n-workflow';

export const meUserActivityDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Activity"
					]
				}
			},
			"options": [
				{
					"name": "Me List Activities",
					"value": "Me List Activities",
					"action": "Get activities from me",
					"description": "Get activities from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/activities"
						}
					}
				},
				{
					"name": "Me Create Activities",
					"value": "Me Create Activities",
					"action": "Create new navigation property to activities for me",
					"description": "Create new navigation property to activities for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/activities"
						}
					}
				},
				{
					"name": "Me Delete Activities",
					"value": "Me Delete Activities",
					"action": "Delete navigation property activities for me",
					"description": "Delete navigation property activities for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/activities/{{$parameter[\"userActivity-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get Activities",
					"value": "Me Get Activities",
					"action": "Get activities from me",
					"description": "Get activities from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/activities/{{$parameter[\"userActivity-id\"]}}"
						}
					}
				},
				{
					"name": "Me Update Activities",
					"value": "Me Update Activities",
					"action": "Update the navigation property activities in me",
					"description": "Update the navigation property activities in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/activities/{{$parameter[\"userActivity-id\"]}}"
						}
					}
				},
				{
					"name": "Me Activities List History Items",
					"value": "Me Activities List History Items",
					"action": "Get historyItems from me",
					"description": "Get historyItems from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/activities/{{$parameter[\"userActivity-id\"]}}/historyItems"
						}
					}
				},
				{
					"name": "Me Activities Create History Items",
					"value": "Me Activities Create History Items",
					"action": "Create new navigation property to historyItems for me",
					"description": "Create new navigation property to historyItems for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/activities/{{$parameter[\"userActivity-id\"]}}/historyItems"
						}
					}
				},
				{
					"name": "Me Activities Delete History Items",
					"value": "Me Activities Delete History Items",
					"action": "Delete navigation property historyItems for me",
					"description": "Delete navigation property historyItems for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/activities/{{$parameter[\"userActivity-id\"]}}/historyItems/{{$parameter[\"activityHistoryItem-id\"]}}"
						}
					}
				},
				{
					"name": "Me Activities Get History Items",
					"value": "Me Activities Get History Items",
					"action": "Get historyItems from me",
					"description": "Get historyItems from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/activities/{{$parameter[\"userActivity-id\"]}}/historyItems/{{$parameter[\"activityHistoryItem-id\"]}}"
						}
					}
				},
				{
					"name": "Me Activities Update History Items",
					"value": "Me Activities Update History Items",
					"action": "Update the navigation property historyItems in me",
					"description": "Update the navigation property historyItems in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/activities/{{$parameter[\"userActivity-id\"]}}/historyItems/{{$parameter[\"activityHistoryItem-id\"]}}"
						}
					}
				},
				{
					"name": "Me Activities History Items Get Activity",
					"value": "Me Activities History Items Get Activity",
					"action": "Get activity from me",
					"description": "Get activity from me",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/activities/{{$parameter[\"userActivity-id\"]}}/historyItems/{{$parameter[\"activityHistoryItem-id\"]}}/activity"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Activity"
					],
					"operation": [
						"Me List Activities"
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
						"Me User Activity"
					],
					"operation": [
						"Me List Activities"
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
						"Me User Activity"
					],
					"operation": [
						"Me List Activities"
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
						"Me User Activity"
					],
					"operation": [
						"Me List Activities"
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
						"Me User Activity"
					],
					"operation": [
						"Me List Activities"
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
						"Me User Activity"
					],
					"operation": [
						"Me List Activities"
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
						"Me User Activity"
					],
					"operation": [
						"Me List Activities"
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
						"Me User Activity"
					],
					"operation": [
						"Me List Activities"
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
						"Me User Activity"
					],
					"operation": [
						"Me List Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /me/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Activity"
					],
					"operation": [
						"Me Create Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /me/activities<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Activity"
					],
					"operation": [
						"Me Create Activities"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/activities/{userActivity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Activity"
					],
					"operation": [
						"Me Delete Activities"
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
						"Me User Activity"
					],
					"operation": [
						"Me Delete Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /me/activities/{userActivity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Activity"
					],
					"operation": [
						"Me Get Activities"
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
						"Me User Activity"
					],
					"operation": [
						"Me Get Activities"
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
						"Me User Activity"
					],
					"operation": [
						"Me Get Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/activities/{userActivity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Activity"
					],
					"operation": [
						"Me Update Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/activities/{userActivity-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Activity"
					],
					"operation": [
						"Me Update Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /me/activities/{userActivity-id}/historyItems",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Activity"
					],
					"operation": [
						"Me Activities List History Items"
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
						"Me User Activity"
					],
					"operation": [
						"Me Activities List History Items"
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
						"Me User Activity"
					],
					"operation": [
						"Me Activities List History Items"
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
						"Me User Activity"
					],
					"operation": [
						"Me Activities List History Items"
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
						"Me User Activity"
					],
					"operation": [
						"Me Activities List History Items"
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
						"Me User Activity"
					],
					"operation": [
						"Me Activities List History Items"
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
						"Me User Activity"
					],
					"operation": [
						"Me Activities List History Items"
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
						"Me User Activity"
					],
					"operation": [
						"Me Activities List History Items"
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
						"Me User Activity"
					],
					"operation": [
						"Me Activities List History Items"
					]
				}
			}
		},
		{
			"displayName": "POST /me/activities/{userActivity-id}/historyItems",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Activity"
					],
					"operation": [
						"Me Activities Create History Items"
					]
				}
			}
		},
		{
			"displayName": "POST /me/activities/{userActivity-id}/historyItems<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Activity"
					],
					"operation": [
						"Me Activities Create History Items"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Activity"
					],
					"operation": [
						"Me Activities Delete History Items"
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
						"Me User Activity"
					],
					"operation": [
						"Me Activities Delete History Items"
					]
				}
			}
		},
		{
			"displayName": "GET /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Activity"
					],
					"operation": [
						"Me Activities Get History Items"
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
						"Me User Activity"
					],
					"operation": [
						"Me Activities Get History Items"
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
						"Me User Activity"
					],
					"operation": [
						"Me Activities Get History Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Activity"
					],
					"operation": [
						"Me Activities Update History Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Activity"
					],
					"operation": [
						"Me Activities Update History Items"
					]
				}
			}
		},
		{
			"displayName": "GET /me/activities/{userActivity-id}/historyItems/{activityHistoryItem-id}/activity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me User Activity"
					],
					"operation": [
						"Me Activities History Items Get Activity"
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
						"Me User Activity"
					],
					"operation": [
						"Me Activities History Items Get Activity"
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
						"Me User Activity"
					],
					"operation": [
						"Me Activities History Items Get Activity"
					]
				}
			}
		},
];
