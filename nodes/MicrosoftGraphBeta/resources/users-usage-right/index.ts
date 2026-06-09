import type { INodeProperties } from 'n8n-workflow';

export const usersUsageRightDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Users Usage Right"
					]
				}
			},
			"options": [
				{
					"name": "Users List Usage Rights",
					"value": "Users List Usage Rights",
					"action": "List user usageRights",
					"description": "Retrieve a list of usageRight objects for a given user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/usageRights"
						}
					}
				},
				{
					"name": "Users Create Usage Rights",
					"value": "Users Create Usage Rights",
					"action": "Create new navigation property to usageRights for users",
					"description": "Create new navigation property to usageRights for users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"user-id\"]}}/usageRights"
						}
					}
				},
				{
					"name": "Users Delete Usage Rights",
					"value": "Users Delete Usage Rights",
					"action": "Delete navigation property usageRights for users",
					"description": "Delete navigation property usageRights for users",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"user-id\"]}}/usageRights/{{$parameter[\"usageRight-id\"]}}"
						}
					}
				},
				{
					"name": "Users Get Usage Rights",
					"value": "Users Get Usage Rights",
					"action": "Get usageRights from users",
					"description": "Represents the usage rights a user has been granted.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"user-id\"]}}/usageRights/{{$parameter[\"usageRight-id\"]}}"
						}
					}
				},
				{
					"name": "Users Update Usage Rights",
					"value": "Users Update Usage Rights",
					"action": "Update the navigation property usageRights in users",
					"description": "Update the navigation property usageRights in users",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"user-id\"]}}/usageRights/{{$parameter[\"usageRight-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users/{user-id}/usageRights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Usage Right"
					],
					"operation": [
						"Users List Usage Rights"
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
						"Users Usage Right"
					],
					"operation": [
						"Users List Usage Rights"
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
						"Users Usage Right"
					],
					"operation": [
						"Users List Usage Rights"
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
						"Users Usage Right"
					],
					"operation": [
						"Users List Usage Rights"
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
						"Users Usage Right"
					],
					"operation": [
						"Users List Usage Rights"
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
						"Users Usage Right"
					],
					"operation": [
						"Users List Usage Rights"
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
						"Users Usage Right"
					],
					"operation": [
						"Users List Usage Rights"
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
						"Users Usage Right"
					],
					"operation": [
						"Users List Usage Rights"
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
						"Users Usage Right"
					],
					"operation": [
						"Users List Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/usageRights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Usage Right"
					],
					"operation": [
						"Users Create Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{user-id}/usageRights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Usage Right"
					],
					"operation": [
						"Users Create Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{user-id}/usageRights/{usageRight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Usage Right"
					],
					"operation": [
						"Users Delete Usage Rights"
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
						"Users Usage Right"
					],
					"operation": [
						"Users Delete Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{user-id}/usageRights/{usageRight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Usage Right"
					],
					"operation": [
						"Users Get Usage Rights"
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
						"Users Usage Right"
					],
					"operation": [
						"Users Get Usage Rights"
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
						"Users Usage Right"
					],
					"operation": [
						"Users Get Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/usageRights/{usageRight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Usage Right"
					],
					"operation": [
						"Users Update Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{user-id}/usageRights/{usageRight-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Users Usage Right"
					],
					"operation": [
						"Users Update Usage Rights"
					]
				}
			}
		},
];
