import type { INodeProperties } from 'n8n-workflow';

export const usersUserAnalyticsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Analytics"
					]
				}
			},
			"options": [
				{
					"name": "Users Delete Analytics",
					"value": "Users Delete Analytics",
					"action": "Delete navigation property analytics for users",
					"description": "Delete navigation property analytics for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/analytics"
						}
					}
				},
				{
					"name": "Users Get Analytics",
					"value": "Users Get Analytics",
					"action": "Get analytics from users",
					"description": "Get analytics from users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/analytics"
						}
					}
				},
				{
					"name": "Users Update Analytics",
					"value": "Users Update Analytics",
					"action": "Update the navigation property analytics in users",
					"description": "Update the navigation property analytics in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/analytics"
						}
					}
				},
				{
					"name": "Users Analytics List Activity Statistics",
					"value": "Users Analytics List Activity Statistics",
					"action": "Get activityStatistics from users",
					"description": "The collection of work activities that a user spent time on during and outside of working hours. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/analytics/activityStatistics"
						}
					}
				},
				{
					"name": "Users Analytics Create Activity Statistics",
					"value": "Users Analytics Create Activity Statistics",
					"action": "Create new navigation property to activityStatistics for users",
					"description": "Create new navigation property to activityStatistics for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/analytics/activityStatistics"
						}
					}
				},
				{
					"name": "Users Analytics Delete Activity Statistics",
					"value": "Users Analytics Delete Activity Statistics",
					"action": "Delete navigation property activityStatistics for users",
					"description": "Delete navigation property activityStatistics for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/analytics/activityStatistics/{{$parameter[\"activityStatistics-id\"]}}"
						}
					}
				},
				{
					"name": "Users Analytics Get Activity Statistics",
					"value": "Users Analytics Get Activity Statistics",
					"action": "Get activityStatistics from users",
					"description": "The collection of work activities that a user spent time on during and outside of working hours. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/analytics/activityStatistics/{{$parameter[\"activityStatistics-id\"]}}"
						}
					}
				},
				{
					"name": "Users Analytics Update Activity Statistics",
					"value": "Users Analytics Update Activity Statistics",
					"action": "Update the navigation property activityStatistics in users",
					"description": "Update the navigation property activityStatistics in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/analytics/activityStatistics/{{$parameter[\"activityStatistics-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /users/{user-id}/analytics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Analytics"
					],
					"operation": [
						"Users Delete Analytics"
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
						"Users User Analytics"
					],
					"operation": [
						"Users Delete Analytics"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/analytics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Analytics"
					],
					"operation": [
						"Users Get Analytics"
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
						"Users User Analytics"
					],
					"operation": [
						"Users Get Analytics"
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
						"Users User Analytics"
					],
					"operation": [
						"Users Get Analytics"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/analytics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Analytics"
					],
					"operation": [
						"Users Update Analytics"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/analytics<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Analytics"
					],
					"operation": [
						"Users Update Analytics"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/analytics/activityStatistics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Analytics"
					],
					"operation": [
						"Users Analytics List Activity Statistics"
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
						"Users User Analytics"
					],
					"operation": [
						"Users Analytics List Activity Statistics"
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
						"Users User Analytics"
					],
					"operation": [
						"Users Analytics List Activity Statistics"
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
						"Users User Analytics"
					],
					"operation": [
						"Users Analytics List Activity Statistics"
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
						"Users User Analytics"
					],
					"operation": [
						"Users Analytics List Activity Statistics"
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
						"Users User Analytics"
					],
					"operation": [
						"Users Analytics List Activity Statistics"
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
						"Users User Analytics"
					],
					"operation": [
						"Users Analytics List Activity Statistics"
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
						"Users User Analytics"
					],
					"operation": [
						"Users Analytics List Activity Statistics"
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
						"Users User Analytics"
					],
					"operation": [
						"Users Analytics List Activity Statistics"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/analytics/activityStatistics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Analytics"
					],
					"operation": [
						"Users Analytics Create Activity Statistics"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/analytics/activityStatistics<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Analytics"
					],
					"operation": [
						"Users Analytics Create Activity Statistics"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Analytics"
					],
					"operation": [
						"Users Analytics Delete Activity Statistics"
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
						"Users User Analytics"
					],
					"operation": [
						"Users Analytics Delete Activity Statistics"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Analytics"
					],
					"operation": [
						"Users Analytics Get Activity Statistics"
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
						"Users User Analytics"
					],
					"operation": [
						"Users Analytics Get Activity Statistics"
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
						"Users User Analytics"
					],
					"operation": [
						"Users Analytics Get Activity Statistics"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Analytics"
					],
					"operation": [
						"Users Analytics Update Activity Statistics"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/analytics/activityStatistics/{activityStatistics-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users User Analytics"
					],
					"operation": [
						"Users Analytics Update Activity Statistics"
					]
				}
			}
		},
];
