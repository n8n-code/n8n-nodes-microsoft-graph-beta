import type { INodeProperties } from 'n8n-workflow';

export const activitystatisticsActivityStatisticsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Activitystatistics Activity Statistics"
					]
				}
			},
			"options": [
				{
					"name": "Activitystatistics Activity Statistics List Activity Statistics",
					"value": "Activitystatistics Activity Statistics List Activity Statistics",
					"action": "Get entities from activitystatistics",
					"description": "Get entities from activitystatistics",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/activitystatistics"
						}
					}
				},
				{
					"name": "Activitystatistics Activity Statistics Create Activity Statistics",
					"value": "Activitystatistics Activity Statistics Create Activity Statistics",
					"action": "Add new entity to activitystatistics",
					"description": "Add new entity to activitystatistics",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/activitystatistics"
						}
					}
				},
				{
					"name": "Activitystatistics Activity Statistics Delete Activity Statistics",
					"value": "Activitystatistics Activity Statistics Delete Activity Statistics",
					"action": "Delete entity from activitystatistics",
					"description": "Delete entity from activitystatistics",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/activitystatistics/{{$parameter[\"activityStatistics-id\"]}}"
						}
					}
				},
				{
					"name": "Activitystatistics Activity Statistics Get Activity Statistics",
					"value": "Activitystatistics Activity Statistics Get Activity Statistics",
					"action": "Get entity from activitystatistics by key",
					"description": "Get entity from activitystatistics by key",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/activitystatistics/{{$parameter[\"activityStatistics-id\"]}}"
						}
					}
				},
				{
					"name": "Activitystatistics Activity Statistics Update Activity Statistics",
					"value": "Activitystatistics Activity Statistics Update Activity Statistics",
					"action": "Update entity in activitystatistics",
					"description": "Update entity in activitystatistics",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/activitystatistics/{{$parameter[\"activityStatistics-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /activitystatistics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activitystatistics Activity Statistics"
					],
					"operation": [
						"Activitystatistics Activity Statistics List Activity Statistics"
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
						"Activitystatistics Activity Statistics"
					],
					"operation": [
						"Activitystatistics Activity Statistics List Activity Statistics"
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
						"Activitystatistics Activity Statistics"
					],
					"operation": [
						"Activitystatistics Activity Statistics List Activity Statistics"
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
						"Activitystatistics Activity Statistics"
					],
					"operation": [
						"Activitystatistics Activity Statistics List Activity Statistics"
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
						"Activitystatistics Activity Statistics"
					],
					"operation": [
						"Activitystatistics Activity Statistics List Activity Statistics"
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
						"Activitystatistics Activity Statistics"
					],
					"operation": [
						"Activitystatistics Activity Statistics List Activity Statistics"
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
						"Activitystatistics Activity Statistics"
					],
					"operation": [
						"Activitystatistics Activity Statistics List Activity Statistics"
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
						"Activitystatistics Activity Statistics"
					],
					"operation": [
						"Activitystatistics Activity Statistics List Activity Statistics"
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
						"Activitystatistics Activity Statistics"
					],
					"operation": [
						"Activitystatistics Activity Statistics List Activity Statistics"
					]
				}
			}
		},
		{
			"displayName": "POST /activitystatistics",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activitystatistics Activity Statistics"
					],
					"operation": [
						"Activitystatistics Activity Statistics Create Activity Statistics"
					]
				}
			}
		},
		{
			"displayName": "POST /activitystatistics<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activitystatistics Activity Statistics"
					],
					"operation": [
						"Activitystatistics Activity Statistics Create Activity Statistics"
					]
				}
			}
		},
		{
			"displayName": "DELETE /activitystatistics/{activityStatistics-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activitystatistics Activity Statistics"
					],
					"operation": [
						"Activitystatistics Activity Statistics Delete Activity Statistics"
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
						"Activitystatistics Activity Statistics"
					],
					"operation": [
						"Activitystatistics Activity Statistics Delete Activity Statistics"
					]
				}
			}
		},
		{
			"displayName": "GET /activitystatistics/{activityStatistics-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activitystatistics Activity Statistics"
					],
					"operation": [
						"Activitystatistics Activity Statistics Get Activity Statistics"
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
						"Activitystatistics Activity Statistics"
					],
					"operation": [
						"Activitystatistics Activity Statistics Get Activity Statistics"
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
						"Activitystatistics Activity Statistics"
					],
					"operation": [
						"Activitystatistics Activity Statistics Get Activity Statistics"
					]
				}
			}
		},
		{
			"displayName": "PATCH /activitystatistics/{activityStatistics-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activitystatistics Activity Statistics"
					],
					"operation": [
						"Activitystatistics Activity Statistics Update Activity Statistics"
					]
				}
			}
		},
		{
			"displayName": "PATCH /activitystatistics/{activityStatistics-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activitystatistics Activity Statistics"
					],
					"operation": [
						"Activitystatistics Activity Statistics Update Activity Statistics"
					]
				}
			}
		},
];
