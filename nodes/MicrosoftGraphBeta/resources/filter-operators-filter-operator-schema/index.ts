import type { INodeProperties } from 'n8n-workflow';

export const filterOperatorsFilterOperatorSchemaDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Filter Operators Filter Operator Schema"
					]
				}
			},
			"options": [
				{
					"name": "Filter Operators Filter Operator Schema List Filter Operator Schema",
					"value": "Filter Operators Filter Operator Schema List Filter Operator Schema",
					"action": "Get entities from filterOperators",
					"description": "Get entities from filterOperators",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/filterOperators"
						}
					}
				},
				{
					"name": "Filter Operators Filter Operator Schema Create Filter Operator Schema",
					"value": "Filter Operators Filter Operator Schema Create Filter Operator Schema",
					"action": "Add new entity to filterOperators",
					"description": "Add new entity to filterOperators",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/filterOperators"
						}
					}
				},
				{
					"name": "Filter Operators Filter Operator Schema Delete Filter Operator Schema",
					"value": "Filter Operators Filter Operator Schema Delete Filter Operator Schema",
					"action": "Delete entity from filterOperators",
					"description": "Delete entity from filterOperators",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/filterOperators/{{$parameter[\"filterOperatorSchema-id\"]}}"
						}
					}
				},
				{
					"name": "Filter Operators Filter Operator Schema Get Filter Operator Schema",
					"value": "Filter Operators Filter Operator Schema Get Filter Operator Schema",
					"action": "Get entity from filterOperators by key",
					"description": "Get entity from filterOperators by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/filterOperators/{{$parameter[\"filterOperatorSchema-id\"]}}"
						}
					}
				},
				{
					"name": "Filter Operators Filter Operator Schema Update Filter Operator Schema",
					"value": "Filter Operators Filter Operator Schema Update Filter Operator Schema",
					"action": "Update entity in filterOperators",
					"description": "Update entity in filterOperators",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/filterOperators/{{$parameter[\"filterOperatorSchema-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /filterOperators",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Filter Operators Filter Operator Schema"
					],
					"operation": [
						"Filter Operators Filter Operator Schema List Filter Operator Schema"
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
						"Filter Operators Filter Operator Schema"
					],
					"operation": [
						"Filter Operators Filter Operator Schema List Filter Operator Schema"
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
						"Filter Operators Filter Operator Schema"
					],
					"operation": [
						"Filter Operators Filter Operator Schema List Filter Operator Schema"
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
						"Filter Operators Filter Operator Schema"
					],
					"operation": [
						"Filter Operators Filter Operator Schema List Filter Operator Schema"
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
						"Filter Operators Filter Operator Schema"
					],
					"operation": [
						"Filter Operators Filter Operator Schema List Filter Operator Schema"
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
						"Filter Operators Filter Operator Schema"
					],
					"operation": [
						"Filter Operators Filter Operator Schema List Filter Operator Schema"
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
						"Filter Operators Filter Operator Schema"
					],
					"operation": [
						"Filter Operators Filter Operator Schema List Filter Operator Schema"
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
						"Filter Operators Filter Operator Schema"
					],
					"operation": [
						"Filter Operators Filter Operator Schema List Filter Operator Schema"
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
						"Filter Operators Filter Operator Schema"
					],
					"operation": [
						"Filter Operators Filter Operator Schema List Filter Operator Schema"
					]
				}
			}
		},
		{
			"displayName": "POST /filterOperators",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Filter Operators Filter Operator Schema"
					],
					"operation": [
						"Filter Operators Filter Operator Schema Create Filter Operator Schema"
					]
				}
			}
		},
		{
			"displayName": "POST /filterOperators<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Filter Operators Filter Operator Schema"
					],
					"operation": [
						"Filter Operators Filter Operator Schema Create Filter Operator Schema"
					]
				}
			}
		},
		{
			"displayName": "DELETE /filterOperators/{filterOperatorSchema-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Filter Operators Filter Operator Schema"
					],
					"operation": [
						"Filter Operators Filter Operator Schema Delete Filter Operator Schema"
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
						"Filter Operators Filter Operator Schema"
					],
					"operation": [
						"Filter Operators Filter Operator Schema Delete Filter Operator Schema"
					]
				}
			}
		},
		{
			"displayName": "GET /filterOperators/{filterOperatorSchema-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Filter Operators Filter Operator Schema"
					],
					"operation": [
						"Filter Operators Filter Operator Schema Get Filter Operator Schema"
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
						"Filter Operators Filter Operator Schema"
					],
					"operation": [
						"Filter Operators Filter Operator Schema Get Filter Operator Schema"
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
						"Filter Operators Filter Operator Schema"
					],
					"operation": [
						"Filter Operators Filter Operator Schema Get Filter Operator Schema"
					]
				}
			}
		},
		{
			"displayName": "PATCH /filterOperators/{filterOperatorSchema-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Filter Operators Filter Operator Schema"
					],
					"operation": [
						"Filter Operators Filter Operator Schema Update Filter Operator Schema"
					]
				}
			}
		},
		{
			"displayName": "PATCH /filterOperators/{filterOperatorSchema-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Filter Operators Filter Operator Schema"
					],
					"operation": [
						"Filter Operators Filter Operator Schema Update Filter Operator Schema"
					]
				}
			}
		},
];
