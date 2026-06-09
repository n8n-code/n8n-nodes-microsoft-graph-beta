import type { INodeProperties } from 'n8n-workflow';

export const reportsPrintUsageByUserDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					]
				}
			},
			"options": [
				{
					"name": "Reports List Daily Print Usage By User",
					"value": "Reports List Daily Print Usage By User",
					"action": "List dailyPrintUsageByUser",
					"description": "Retrieve a list of daily print usage summaries, grouped by user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/dailyPrintUsageByUser"
						}
					}
				},
				{
					"name": "Reports Create Daily Print Usage By User",
					"value": "Reports Create Daily Print Usage By User",
					"action": "Create new navigation property to dailyPrintUsageByUser for reports",
					"description": "Create new navigation property to dailyPrintUsageByUser for reports",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/reports/dailyPrintUsageByUser"
						}
					}
				},
				{
					"name": "Reports Delete Daily Print Usage By User",
					"value": "Reports Delete Daily Print Usage By User",
					"action": "Delete navigation property dailyPrintUsageByUser for reports",
					"description": "Delete navigation property dailyPrintUsageByUser for reports",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/reports/dailyPrintUsageByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Get Daily Print Usage By User",
					"value": "Reports Get Daily Print Usage By User",
					"action": "Get dailyPrintUsageByUser from reports",
					"description": "Get dailyPrintUsageByUser from reports",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/dailyPrintUsageByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Update Daily Print Usage By User",
					"value": "Reports Update Daily Print Usage By User",
					"action": "Update the navigation property dailyPrintUsageByUser in reports",
					"description": "Update the navigation property dailyPrintUsageByUser in reports",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/reports/dailyPrintUsageByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Reports List Daily Print Usage Summaries By User",
					"value": "Reports List Daily Print Usage Summaries By User",
					"action": "Get dailyPrintUsageSummariesByUser from reports",
					"description": "Get dailyPrintUsageSummariesByUser from reports",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/dailyPrintUsageSummariesByUser"
						}
					}
				},
				{
					"name": "Reports Create Daily Print Usage Summaries By User",
					"value": "Reports Create Daily Print Usage Summaries By User",
					"action": "Create new navigation property to dailyPrintUsageSummariesByUser for reports",
					"description": "Create new navigation property to dailyPrintUsageSummariesByUser for reports",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/reports/dailyPrintUsageSummariesByUser"
						}
					}
				},
				{
					"name": "Reports Delete Daily Print Usage Summaries By User",
					"value": "Reports Delete Daily Print Usage Summaries By User",
					"action": "Delete navigation property dailyPrintUsageSummariesByUser for reports",
					"description": "Delete navigation property dailyPrintUsageSummariesByUser for reports",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/reports/dailyPrintUsageSummariesByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Get Daily Print Usage Summaries By User",
					"value": "Reports Get Daily Print Usage Summaries By User",
					"action": "Get dailyPrintUsageSummariesByUser from reports",
					"description": "Get dailyPrintUsageSummariesByUser from reports",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/dailyPrintUsageSummariesByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Update Daily Print Usage Summaries By User",
					"value": "Reports Update Daily Print Usage Summaries By User",
					"action": "Update the navigation property dailyPrintUsageSummariesByUser in reports",
					"description": "Update the navigation property dailyPrintUsageSummariesByUser in reports",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/reports/dailyPrintUsageSummariesByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Reports List Monthly Print Usage By User",
					"value": "Reports List Monthly Print Usage By User",
					"action": "List monthlyPrintUsageByUser",
					"description": "Retrieve a list of monthly print usage summaries, grouped by user.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/monthlyPrintUsageByUser"
						}
					}
				},
				{
					"name": "Reports Create Monthly Print Usage By User",
					"value": "Reports Create Monthly Print Usage By User",
					"action": "Create new navigation property to monthlyPrintUsageByUser for reports",
					"description": "Create new navigation property to monthlyPrintUsageByUser for reports",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/reports/monthlyPrintUsageByUser"
						}
					}
				},
				{
					"name": "Reports Delete Monthly Print Usage By User",
					"value": "Reports Delete Monthly Print Usage By User",
					"action": "Delete navigation property monthlyPrintUsageByUser for reports",
					"description": "Delete navigation property monthlyPrintUsageByUser for reports",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/reports/monthlyPrintUsageByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Get Monthly Print Usage By User",
					"value": "Reports Get Monthly Print Usage By User",
					"action": "Get monthlyPrintUsageByUser from reports",
					"description": "Get monthlyPrintUsageByUser from reports",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/monthlyPrintUsageByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Update Monthly Print Usage By User",
					"value": "Reports Update Monthly Print Usage By User",
					"action": "Update the navigation property monthlyPrintUsageByUser in reports",
					"description": "Update the navigation property monthlyPrintUsageByUser in reports",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/reports/monthlyPrintUsageByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Reports List Monthly Print Usage Summaries By User",
					"value": "Reports List Monthly Print Usage Summaries By User",
					"action": "Get monthlyPrintUsageSummariesByUser from reports",
					"description": "Get monthlyPrintUsageSummariesByUser from reports",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/monthlyPrintUsageSummariesByUser"
						}
					}
				},
				{
					"name": "Reports Create Monthly Print Usage Summaries By User",
					"value": "Reports Create Monthly Print Usage Summaries By User",
					"action": "Create new navigation property to monthlyPrintUsageSummariesByUser for reports",
					"description": "Create new navigation property to monthlyPrintUsageSummariesByUser for reports",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/reports/monthlyPrintUsageSummariesByUser"
						}
					}
				},
				{
					"name": "Reports Delete Monthly Print Usage Summaries By User",
					"value": "Reports Delete Monthly Print Usage Summaries By User",
					"action": "Delete navigation property monthlyPrintUsageSummariesByUser for reports",
					"description": "Delete navigation property monthlyPrintUsageSummariesByUser for reports",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/reports/monthlyPrintUsageSummariesByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Get Monthly Print Usage Summaries By User",
					"value": "Reports Get Monthly Print Usage Summaries By User",
					"action": "Get monthlyPrintUsageSummariesByUser from reports",
					"description": "Get monthlyPrintUsageSummariesByUser from reports",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/monthlyPrintUsageSummariesByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Update Monthly Print Usage Summaries By User",
					"value": "Reports Update Monthly Print Usage Summaries By User",
					"action": "Update the navigation property monthlyPrintUsageSummariesByUser in reports",
					"description": "Update the navigation property monthlyPrintUsageSummariesByUser in reports",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/reports/monthlyPrintUsageSummariesByUser/{{$parameter[\"printUsageByUser-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /reports/dailyPrintUsageByUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Daily Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Daily Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Daily Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Daily Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Daily Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Daily Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Daily Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Daily Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Daily Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/dailyPrintUsageByUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Create Daily Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/dailyPrintUsageByUser<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Create Daily Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "DELETE /reports/dailyPrintUsageByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Delete Daily Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Delete Daily Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/dailyPrintUsageByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Get Daily Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Get Daily Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Get Daily Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/dailyPrintUsageByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Update Daily Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/dailyPrintUsageByUser/{printUsageByUser-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Update Daily Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/dailyPrintUsageSummariesByUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Daily Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Daily Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Daily Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Daily Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Daily Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Daily Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Daily Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Daily Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Daily Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/dailyPrintUsageSummariesByUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Create Daily Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/dailyPrintUsageSummariesByUser<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Create Daily Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "DELETE /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Delete Daily Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Delete Daily Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Get Daily Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Get Daily Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Get Daily Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Update Daily Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/dailyPrintUsageSummariesByUser/{printUsageByUser-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Update Daily Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/monthlyPrintUsageByUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Monthly Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Monthly Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Monthly Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Monthly Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Monthly Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Monthly Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Monthly Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Monthly Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Monthly Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/monthlyPrintUsageByUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Create Monthly Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/monthlyPrintUsageByUser<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Create Monthly Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "DELETE /reports/monthlyPrintUsageByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Delete Monthly Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Delete Monthly Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/monthlyPrintUsageByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Get Monthly Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Get Monthly Print Usage By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Get Monthly Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/monthlyPrintUsageByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Update Monthly Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/monthlyPrintUsageByUser/{printUsageByUser-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Update Monthly Print Usage By User"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/monthlyPrintUsageSummariesByUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Monthly Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Monthly Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Monthly Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Monthly Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Monthly Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Monthly Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Monthly Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Monthly Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports List Monthly Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/monthlyPrintUsageSummariesByUser",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Create Monthly Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/monthlyPrintUsageSummariesByUser<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Create Monthly Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "DELETE /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Delete Monthly Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Delete Monthly Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Get Monthly Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Get Monthly Print Usage Summaries By User"
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
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Get Monthly Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Update Monthly Print Usage Summaries By User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/monthlyPrintUsageSummariesByUser/{printUsageByUser-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By User"
					],
					"operation": [
						"Reports Update Monthly Print Usage Summaries By User"
					]
				}
			}
		},
];
