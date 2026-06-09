import type { INodeProperties } from 'n8n-workflow';

export const searchQnaDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Search Qna"
					]
				}
			},
			"options": [
				{
					"name": "Search List Qnas",
					"value": "Search List Qnas",
					"action": "List qnas",
					"description": "Get a list of the qna objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search/qnas"
						}
					}
				},
				{
					"name": "Search Create Qnas",
					"value": "Search Create Qnas",
					"action": "Create qna",
					"description": "Create a new qna object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/search/qnas"
						}
					}
				},
				{
					"name": "Search Delete Qnas",
					"value": "Search Delete Qnas",
					"action": "Delete navigation property qnas for search",
					"description": "Delete navigation property qnas for search",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/search/qnas/{{$parameter[\"qna-id\"]}}"
						}
					}
				},
				{
					"name": "Search Get Qnas",
					"value": "Search Get Qnas",
					"action": "Get qnas from search",
					"description": "Administrative answer in Microsoft Search results which provide answers for specific search keywords in an organization.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search/qnas/{{$parameter[\"qna-id\"]}}"
						}
					}
				},
				{
					"name": "Search Update Qnas",
					"value": "Search Update Qnas",
					"action": "Update the navigation property qnas in search",
					"description": "Update the navigation property qnas in search",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/search/qnas/{{$parameter[\"qna-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /search/qnas",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Qna"
					],
					"operation": [
						"Search List Qnas"
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
						"Search Qna"
					],
					"operation": [
						"Search List Qnas"
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
						"Search Qna"
					],
					"operation": [
						"Search List Qnas"
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
						"Search Qna"
					],
					"operation": [
						"Search List Qnas"
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
						"Search Qna"
					],
					"operation": [
						"Search List Qnas"
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
						"Search Qna"
					],
					"operation": [
						"Search List Qnas"
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
						"Search Qna"
					],
					"operation": [
						"Search List Qnas"
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
						"Search Qna"
					],
					"operation": [
						"Search List Qnas"
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
						"Search Qna"
					],
					"operation": [
						"Search List Qnas"
					]
				}
			}
		},
		{
			"displayName": "POST /search/qnas",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Qna"
					],
					"operation": [
						"Search Create Qnas"
					]
				}
			}
		},
		{
			"displayName": "POST /search/qnas<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Qna"
					],
					"operation": [
						"Search Create Qnas"
					]
				}
			}
		},
		{
			"displayName": "DELETE /search/qnas/{qna-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Qna"
					],
					"operation": [
						"Search Delete Qnas"
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
						"Search Qna"
					],
					"operation": [
						"Search Delete Qnas"
					]
				}
			}
		},
		{
			"displayName": "GET /search/qnas/{qna-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Qna"
					],
					"operation": [
						"Search Get Qnas"
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
						"Search Qna"
					],
					"operation": [
						"Search Get Qnas"
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
						"Search Qna"
					],
					"operation": [
						"Search Get Qnas"
					]
				}
			}
		},
		{
			"displayName": "PATCH /search/qnas/{qna-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Qna"
					],
					"operation": [
						"Search Update Qnas"
					]
				}
			}
		},
		{
			"displayName": "PATCH /search/qnas/{qna-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Qna"
					],
					"operation": [
						"Search Update Qnas"
					]
				}
			}
		},
];
