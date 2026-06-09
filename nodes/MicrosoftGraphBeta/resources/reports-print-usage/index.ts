import type { INodeProperties } from 'n8n-workflow';

export const reportsPrintUsageDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage"
					]
				}
			},
			"options": [
				{
					"name": "Reports List Daily Print Usage",
					"value": "Reports List Daily Print Usage",
					"action": "Get dailyPrintUsage from reports",
					"description": "Get dailyPrintUsage from reports",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/dailyPrintUsage"
						}
					}
				},
				{
					"name": "Reports Create Daily Print Usage",
					"value": "Reports Create Daily Print Usage",
					"action": "Create new navigation property to dailyPrintUsage for reports",
					"description": "Create new navigation property to dailyPrintUsage for reports",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/reports/dailyPrintUsage"
						}
					}
				},
				{
					"name": "Reports Delete Daily Print Usage",
					"value": "Reports Delete Daily Print Usage",
					"action": "Delete navigation property dailyPrintUsage for reports",
					"description": "Delete navigation property dailyPrintUsage for reports",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/reports/dailyPrintUsage/{{$parameter[\"printUsage-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Get Daily Print Usage",
					"value": "Reports Get Daily Print Usage",
					"action": "Get dailyPrintUsage from reports",
					"description": "Get dailyPrintUsage from reports",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/dailyPrintUsage/{{$parameter[\"printUsage-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Update Daily Print Usage",
					"value": "Reports Update Daily Print Usage",
					"action": "Update the navigation property dailyPrintUsage in reports",
					"description": "Update the navigation property dailyPrintUsage in reports",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/reports/dailyPrintUsage/{{$parameter[\"printUsage-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /reports/dailyPrintUsage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage"
					],
					"operation": [
						"Reports List Daily Print Usage"
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
						"Reports Print Usage"
					],
					"operation": [
						"Reports List Daily Print Usage"
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
						"Reports Print Usage"
					],
					"operation": [
						"Reports List Daily Print Usage"
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
						"Reports Print Usage"
					],
					"operation": [
						"Reports List Daily Print Usage"
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
						"Reports Print Usage"
					],
					"operation": [
						"Reports List Daily Print Usage"
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
						"Reports Print Usage"
					],
					"operation": [
						"Reports List Daily Print Usage"
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
						"Reports Print Usage"
					],
					"operation": [
						"Reports List Daily Print Usage"
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
						"Reports Print Usage"
					],
					"operation": [
						"Reports List Daily Print Usage"
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
						"Reports Print Usage"
					],
					"operation": [
						"Reports List Daily Print Usage"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/dailyPrintUsage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage"
					],
					"operation": [
						"Reports Create Daily Print Usage"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/dailyPrintUsage<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage"
					],
					"operation": [
						"Reports Create Daily Print Usage"
					]
				}
			}
		},
		{
			"displayName": "DELETE /reports/dailyPrintUsage/{printUsage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage"
					],
					"operation": [
						"Reports Delete Daily Print Usage"
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
						"Reports Print Usage"
					],
					"operation": [
						"Reports Delete Daily Print Usage"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/dailyPrintUsage/{printUsage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage"
					],
					"operation": [
						"Reports Get Daily Print Usage"
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
						"Reports Print Usage"
					],
					"operation": [
						"Reports Get Daily Print Usage"
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
						"Reports Print Usage"
					],
					"operation": [
						"Reports Get Daily Print Usage"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/dailyPrintUsage/{printUsage-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage"
					],
					"operation": [
						"Reports Update Daily Print Usage"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/dailyPrintUsage/{printUsage-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage"
					],
					"operation": [
						"Reports Update Daily Print Usage"
					]
				}
			}
		},
];
