import type { INodeProperties } from 'n8n-workflow';

export const searchAcronymDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Search Acronym"
					]
				}
			},
			"options": [
				{
					"name": "Search List Acronyms",
					"value": "Search List Acronyms",
					"action": "List acronyms",
					"description": "Get a list of the acronym objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search/acronyms"
						}
					}
				},
				{
					"name": "Search Create Acronyms",
					"value": "Search Create Acronyms",
					"action": "Create acronym",
					"description": "Create a new acronym object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/search/acronyms"
						}
					}
				},
				{
					"name": "Search Delete Acronyms",
					"value": "Search Delete Acronyms",
					"action": "Delete navigation property acronyms for search",
					"description": "Delete navigation property acronyms for search",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/search/acronyms/{{$parameter[\"acronym-id\"]}}"
						}
					}
				},
				{
					"name": "Search Get Acronyms",
					"value": "Search Get Acronyms",
					"action": "Get acronyms from search",
					"description": "Administrative answer in Microsoft Search results to define common acronyms in a organization.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search/acronyms/{{$parameter[\"acronym-id\"]}}"
						}
					}
				},
				{
					"name": "Search Update Acronyms",
					"value": "Search Update Acronyms",
					"action": "Update the navigation property acronyms in search",
					"description": "Update the navigation property acronyms in search",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/search/acronyms/{{$parameter[\"acronym-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /search/acronyms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Acronym"
					],
					"operation": [
						"Search List Acronyms"
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
						"Search Acronym"
					],
					"operation": [
						"Search List Acronyms"
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
						"Search Acronym"
					],
					"operation": [
						"Search List Acronyms"
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
						"Search Acronym"
					],
					"operation": [
						"Search List Acronyms"
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
						"Search Acronym"
					],
					"operation": [
						"Search List Acronyms"
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
						"Search Acronym"
					],
					"operation": [
						"Search List Acronyms"
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
						"Search Acronym"
					],
					"operation": [
						"Search List Acronyms"
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
						"Search Acronym"
					],
					"operation": [
						"Search List Acronyms"
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
						"Search Acronym"
					],
					"operation": [
						"Search List Acronyms"
					]
				}
			}
		},
		{
			"displayName": "POST /search/acronyms",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Acronym"
					],
					"operation": [
						"Search Create Acronyms"
					]
				}
			}
		},
		{
			"displayName": "POST /search/acronyms<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Acronym"
					],
					"operation": [
						"Search Create Acronyms"
					]
				}
			}
		},
		{
			"displayName": "DELETE /search/acronyms/{acronym-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Acronym"
					],
					"operation": [
						"Search Delete Acronyms"
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
						"Search Acronym"
					],
					"operation": [
						"Search Delete Acronyms"
					]
				}
			}
		},
		{
			"displayName": "GET /search/acronyms/{acronym-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Acronym"
					],
					"operation": [
						"Search Get Acronyms"
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
						"Search Acronym"
					],
					"operation": [
						"Search Get Acronyms"
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
						"Search Acronym"
					],
					"operation": [
						"Search Get Acronyms"
					]
				}
			}
		},
		{
			"displayName": "PATCH /search/acronyms/{acronym-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Acronym"
					],
					"operation": [
						"Search Update Acronyms"
					]
				}
			}
		},
		{
			"displayName": "PATCH /search/acronyms/{acronym-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search Acronym"
					],
					"operation": [
						"Search Update Acronyms"
					]
				}
			}
		},
];
