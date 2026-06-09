import type { INodeProperties } from 'n8n-workflow';

export const meUsageRightDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Usage Right"
					]
				}
			},
			"options": [
				{
					"name": "Me List Usage Rights",
					"value": "Me List Usage Rights",
					"action": "List user usageRights",
					"description": "Retrieve a list of usageRight objects for a given user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/usageRights"
						}
					}
				},
				{
					"name": "Me Create Usage Rights",
					"value": "Me Create Usage Rights",
					"action": "Create new navigation property to usageRights for me",
					"description": "Create new navigation property to usageRights for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/usageRights"
						}
					}
				},
				{
					"name": "Me Delete Usage Rights",
					"value": "Me Delete Usage Rights",
					"action": "Delete navigation property usageRights for me",
					"description": "Delete navigation property usageRights for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/usageRights/{{$parameter[\"usageRight-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get Usage Rights",
					"value": "Me Get Usage Rights",
					"action": "Get usageRights from me",
					"description": "Represents the usage rights a user has been granted.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/usageRights/{{$parameter[\"usageRight-id\"]}}"
						}
					}
				},
				{
					"name": "Me Update Usage Rights",
					"value": "Me Update Usage Rights",
					"action": "Update the navigation property usageRights in me",
					"description": "Update the navigation property usageRights in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/usageRights/{{$parameter[\"usageRight-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/usageRights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Usage Right"
					],
					"operation": [
						"Me List Usage Rights"
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
						"Me Usage Right"
					],
					"operation": [
						"Me List Usage Rights"
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
						"Me Usage Right"
					],
					"operation": [
						"Me List Usage Rights"
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
						"Me Usage Right"
					],
					"operation": [
						"Me List Usage Rights"
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
						"Me Usage Right"
					],
					"operation": [
						"Me List Usage Rights"
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
						"Me Usage Right"
					],
					"operation": [
						"Me List Usage Rights"
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
						"Me Usage Right"
					],
					"operation": [
						"Me List Usage Rights"
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
						"Me Usage Right"
					],
					"operation": [
						"Me List Usage Rights"
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
						"Me Usage Right"
					],
					"operation": [
						"Me List Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "POST /me/usageRights",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Usage Right"
					],
					"operation": [
						"Me Create Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "POST /me/usageRights<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Usage Right"
					],
					"operation": [
						"Me Create Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/usageRights/{usageRight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Usage Right"
					],
					"operation": [
						"Me Delete Usage Rights"
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
						"Me Usage Right"
					],
					"operation": [
						"Me Delete Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "GET /me/usageRights/{usageRight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Usage Right"
					],
					"operation": [
						"Me Get Usage Rights"
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
						"Me Usage Right"
					],
					"operation": [
						"Me Get Usage Rights"
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
						"Me Usage Right"
					],
					"operation": [
						"Me Get Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/usageRights/{usageRight-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Usage Right"
					],
					"operation": [
						"Me Update Usage Rights"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/usageRights/{usageRight-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Usage Right"
					],
					"operation": [
						"Me Update Usage Rights"
					]
				}
			}
		},
];
