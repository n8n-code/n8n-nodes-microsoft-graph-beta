import type { INodeProperties } from 'n8n-workflow';

export const monitoringAlertRuleDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Alert Rule"
					]
				}
			},
			"options": [
				{
					"name": "Monitoring List Alert Rules",
					"value": "Monitoring List Alert Rules",
					"action": "List alertRules",
					"description": "Get a list of the alertRule objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/monitoring/alertRules"
						}
					}
				},
				{
					"name": "Monitoring Create Alert Rules",
					"value": "Monitoring Create Alert Rules",
					"action": "Create alertRule",
					"description": "Create an alertRule object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/monitoring/alertRules"
						}
					}
				},
				{
					"name": "Monitoring Delete Alert Rules",
					"value": "Monitoring Delete Alert Rules",
					"action": "Delete navigation property alertRules for monitoring",
					"description": "Delete navigation property alertRules for monitoring",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/monitoring/alertRules/{{$parameter[\"alertRule-id\"]}}"
						}
					}
				},
				{
					"name": "Monitoring Get Alert Rules",
					"value": "Monitoring Get Alert Rules",
					"action": "Get alertRules from monitoring",
					"description": "The collection of alert rules.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/monitoring/alertRules/{{$parameter[\"alertRule-id\"]}}"
						}
					}
				},
				{
					"name": "Monitoring Update Alert Rules",
					"value": "Monitoring Update Alert Rules",
					"action": "Update the navigation property alertRules in monitoring",
					"description": "Update the navigation property alertRules in monitoring",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/monitoring/alertRules/{{$parameter[\"alertRule-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /monitoring/alertRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Alert Rule"
					],
					"operation": [
						"Monitoring List Alert Rules"
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
						"Monitoring Alert Rule"
					],
					"operation": [
						"Monitoring List Alert Rules"
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
						"Monitoring Alert Rule"
					],
					"operation": [
						"Monitoring List Alert Rules"
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
						"Monitoring Alert Rule"
					],
					"operation": [
						"Monitoring List Alert Rules"
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
						"Monitoring Alert Rule"
					],
					"operation": [
						"Monitoring List Alert Rules"
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
						"Monitoring Alert Rule"
					],
					"operation": [
						"Monitoring List Alert Rules"
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
						"Monitoring Alert Rule"
					],
					"operation": [
						"Monitoring List Alert Rules"
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
						"Monitoring Alert Rule"
					],
					"operation": [
						"Monitoring List Alert Rules"
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
						"Monitoring Alert Rule"
					],
					"operation": [
						"Monitoring List Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /monitoring/alertRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Alert Rule"
					],
					"operation": [
						"Monitoring Create Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /monitoring/alertRules<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Alert Rule"
					],
					"operation": [
						"Monitoring Create Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "DELETE /monitoring/alertRules/{alertRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Alert Rule"
					],
					"operation": [
						"Monitoring Delete Alert Rules"
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
						"Monitoring Alert Rule"
					],
					"operation": [
						"Monitoring Delete Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "GET /monitoring/alertRules/{alertRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Alert Rule"
					],
					"operation": [
						"Monitoring Get Alert Rules"
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
						"Monitoring Alert Rule"
					],
					"operation": [
						"Monitoring Get Alert Rules"
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
						"Monitoring Alert Rule"
					],
					"operation": [
						"Monitoring Get Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /monitoring/alertRules/{alertRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Alert Rule"
					],
					"operation": [
						"Monitoring Update Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /monitoring/alertRules/{alertRule-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring Alert Rule"
					],
					"operation": [
						"Monitoring Update Alert Rules"
					]
				}
			}
		},
];
