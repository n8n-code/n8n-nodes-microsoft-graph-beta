import type { INodeProperties } from 'n8n-workflow';

export const searchBookmarkDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Search Bookmark"
					]
				}
			},
			"options": [
				{
					"name": "Search List Bookmarks",
					"value": "Search List Bookmarks",
					"action": "List bookmarks",
					"description": "Get a list of bookmark objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search/bookmarks"
						}
					}
				},
				{
					"name": "Search Create Bookmarks",
					"value": "Search Create Bookmarks",
					"action": "Create bookmark",
					"description": "Create a new bookmark object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/search/bookmarks"
						}
					}
				},
				{
					"name": "Search Delete Bookmarks",
					"value": "Search Delete Bookmarks",
					"action": "Delete navigation property bookmarks for search",
					"description": "Delete navigation property bookmarks for search",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/search/bookmarks/{{$parameter[\"bookmark-id\"]}}"
						}
					}
				},
				{
					"name": "Search Get Bookmarks",
					"value": "Search Get Bookmarks",
					"action": "Get bookmarks from search",
					"description": "Administrative answer in Microsoft Search results for common search queries in an organization.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search/bookmarks/{{$parameter[\"bookmark-id\"]}}"
						}
					}
				},
				{
					"name": "Search Update Bookmarks",
					"value": "Search Update Bookmarks",
					"action": "Update the navigation property bookmarks in search",
					"description": "Update the navigation property bookmarks in search",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/search/bookmarks/{{$parameter[\"bookmark-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /search/bookmarks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Bookmark"
					],
					"operation": [
						"Search List Bookmarks"
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
						"Search Bookmark"
					],
					"operation": [
						"Search List Bookmarks"
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
						"Search Bookmark"
					],
					"operation": [
						"Search List Bookmarks"
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
						"Search Bookmark"
					],
					"operation": [
						"Search List Bookmarks"
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
						"Search Bookmark"
					],
					"operation": [
						"Search List Bookmarks"
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
						"Search Bookmark"
					],
					"operation": [
						"Search List Bookmarks"
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
						"Search Bookmark"
					],
					"operation": [
						"Search List Bookmarks"
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
						"Search Bookmark"
					],
					"operation": [
						"Search List Bookmarks"
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
						"Search Bookmark"
					],
					"operation": [
						"Search List Bookmarks"
					]
				}
			}
		},
		{
			"displayName": "POST /search/bookmarks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Bookmark"
					],
					"operation": [
						"Search Create Bookmarks"
					]
				}
			}
		},
		{
			"displayName": "POST /search/bookmarks<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Bookmark"
					],
					"operation": [
						"Search Create Bookmarks"
					]
				}
			}
		},
		{
			"displayName": "DELETE /search/bookmarks/{bookmark-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Bookmark"
					],
					"operation": [
						"Search Delete Bookmarks"
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
						"Search Bookmark"
					],
					"operation": [
						"Search Delete Bookmarks"
					]
				}
			}
		},
		{
			"displayName": "GET /search/bookmarks/{bookmark-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Bookmark"
					],
					"operation": [
						"Search Get Bookmarks"
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
						"Search Bookmark"
					],
					"operation": [
						"Search Get Bookmarks"
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
						"Search Bookmark"
					],
					"operation": [
						"Search Get Bookmarks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /search/bookmarks/{bookmark-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Bookmark"
					],
					"operation": [
						"Search Update Bookmarks"
					]
				}
			}
		},
		{
			"displayName": "PATCH /search/bookmarks/{bookmark-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Bookmark"
					],
					"operation": [
						"Search Update Bookmarks"
					]
				}
			}
		},
];
