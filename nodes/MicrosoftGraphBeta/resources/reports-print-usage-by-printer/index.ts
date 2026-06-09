import type { INodeProperties } from 'n8n-workflow';

export const reportsPrintUsageByPrinterDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					]
				}
			},
			"options": [
				{
					"name": "Reports List Daily Print Usage By Printer",
					"value": "Reports List Daily Print Usage By Printer",
					"action": "List dailyPrintUsageByPrinter",
					"description": "Retrieve a list of daily print usage summaries, grouped by printer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/dailyPrintUsageByPrinter"
						}
					}
				},
				{
					"name": "Reports Create Daily Print Usage By Printer",
					"value": "Reports Create Daily Print Usage By Printer",
					"action": "Create new navigation property to dailyPrintUsageByPrinter for reports",
					"description": "Create new navigation property to dailyPrintUsageByPrinter for reports",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/reports/dailyPrintUsageByPrinter"
						}
					}
				},
				{
					"name": "Reports Delete Daily Print Usage By Printer",
					"value": "Reports Delete Daily Print Usage By Printer",
					"action": "Delete navigation property dailyPrintUsageByPrinter for reports",
					"description": "Delete navigation property dailyPrintUsageByPrinter for reports",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/reports/dailyPrintUsageByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Get Daily Print Usage By Printer",
					"value": "Reports Get Daily Print Usage By Printer",
					"action": "Get dailyPrintUsageByPrinter from reports",
					"description": "Get dailyPrintUsageByPrinter from reports",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/dailyPrintUsageByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Update Daily Print Usage By Printer",
					"value": "Reports Update Daily Print Usage By Printer",
					"action": "Update the navigation property dailyPrintUsageByPrinter in reports",
					"description": "Update the navigation property dailyPrintUsageByPrinter in reports",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/reports/dailyPrintUsageByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Reports List Daily Print Usage Summaries By Printer",
					"value": "Reports List Daily Print Usage Summaries By Printer",
					"action": "Get dailyPrintUsageSummariesByPrinter from reports",
					"description": "Get dailyPrintUsageSummariesByPrinter from reports",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/dailyPrintUsageSummariesByPrinter"
						}
					}
				},
				{
					"name": "Reports Create Daily Print Usage Summaries By Printer",
					"value": "Reports Create Daily Print Usage Summaries By Printer",
					"action": "Create new navigation property to dailyPrintUsageSummariesByPrinter for reports",
					"description": "Create new navigation property to dailyPrintUsageSummariesByPrinter for reports",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/reports/dailyPrintUsageSummariesByPrinter"
						}
					}
				},
				{
					"name": "Reports Delete Daily Print Usage Summaries By Printer",
					"value": "Reports Delete Daily Print Usage Summaries By Printer",
					"action": "Delete navigation property dailyPrintUsageSummariesByPrinter for reports",
					"description": "Delete navigation property dailyPrintUsageSummariesByPrinter for reports",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/reports/dailyPrintUsageSummariesByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Get Daily Print Usage Summaries By Printer",
					"value": "Reports Get Daily Print Usage Summaries By Printer",
					"action": "Get dailyPrintUsageSummariesByPrinter from reports",
					"description": "Get dailyPrintUsageSummariesByPrinter from reports",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/dailyPrintUsageSummariesByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Update Daily Print Usage Summaries By Printer",
					"value": "Reports Update Daily Print Usage Summaries By Printer",
					"action": "Update the navigation property dailyPrintUsageSummariesByPrinter in reports",
					"description": "Update the navigation property dailyPrintUsageSummariesByPrinter in reports",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/reports/dailyPrintUsageSummariesByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Reports List Monthly Print Usage By Printer",
					"value": "Reports List Monthly Print Usage By Printer",
					"action": "List monthlyPrintUsageByPrinter",
					"description": "Retrieve a list of monthly print usage summaries, grouped by printer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/monthlyPrintUsageByPrinter"
						}
					}
				},
				{
					"name": "Reports Create Monthly Print Usage By Printer",
					"value": "Reports Create Monthly Print Usage By Printer",
					"action": "Create new navigation property to monthlyPrintUsageByPrinter for reports",
					"description": "Create new navigation property to monthlyPrintUsageByPrinter for reports",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/reports/monthlyPrintUsageByPrinter"
						}
					}
				},
				{
					"name": "Reports Delete Monthly Print Usage By Printer",
					"value": "Reports Delete Monthly Print Usage By Printer",
					"action": "Delete navigation property monthlyPrintUsageByPrinter for reports",
					"description": "Delete navigation property monthlyPrintUsageByPrinter for reports",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/reports/monthlyPrintUsageByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Get Monthly Print Usage By Printer",
					"value": "Reports Get Monthly Print Usage By Printer",
					"action": "Get monthlyPrintUsageByPrinter from reports",
					"description": "Get monthlyPrintUsageByPrinter from reports",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/monthlyPrintUsageByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Update Monthly Print Usage By Printer",
					"value": "Reports Update Monthly Print Usage By Printer",
					"action": "Update the navigation property monthlyPrintUsageByPrinter in reports",
					"description": "Update the navigation property monthlyPrintUsageByPrinter in reports",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/reports/monthlyPrintUsageByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Reports List Monthly Print Usage Summaries By Printer",
					"value": "Reports List Monthly Print Usage Summaries By Printer",
					"action": "Get monthlyPrintUsageSummariesByPrinter from reports",
					"description": "Get monthlyPrintUsageSummariesByPrinter from reports",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/monthlyPrintUsageSummariesByPrinter"
						}
					}
				},
				{
					"name": "Reports Create Monthly Print Usage Summaries By Printer",
					"value": "Reports Create Monthly Print Usage Summaries By Printer",
					"action": "Create new navigation property to monthlyPrintUsageSummariesByPrinter for reports",
					"description": "Create new navigation property to monthlyPrintUsageSummariesByPrinter for reports",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/reports/monthlyPrintUsageSummariesByPrinter"
						}
					}
				},
				{
					"name": "Reports Delete Monthly Print Usage Summaries By Printer",
					"value": "Reports Delete Monthly Print Usage Summaries By Printer",
					"action": "Delete navigation property monthlyPrintUsageSummariesByPrinter for reports",
					"description": "Delete navigation property monthlyPrintUsageSummariesByPrinter for reports",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/reports/monthlyPrintUsageSummariesByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Get Monthly Print Usage Summaries By Printer",
					"value": "Reports Get Monthly Print Usage Summaries By Printer",
					"action": "Get monthlyPrintUsageSummariesByPrinter from reports",
					"description": "Get monthlyPrintUsageSummariesByPrinter from reports",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/reports/monthlyPrintUsageSummariesByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				},
				{
					"name": "Reports Update Monthly Print Usage Summaries By Printer",
					"value": "Reports Update Monthly Print Usage Summaries By Printer",
					"action": "Update the navigation property monthlyPrintUsageSummariesByPrinter in reports",
					"description": "Update the navigation property monthlyPrintUsageSummariesByPrinter in reports",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/reports/monthlyPrintUsageSummariesByPrinter/{{$parameter[\"printUsageByPrinter-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /reports/dailyPrintUsageByPrinter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Daily Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Daily Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Daily Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Daily Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Daily Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Daily Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Daily Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Daily Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Daily Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/dailyPrintUsageByPrinter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Create Daily Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/dailyPrintUsageByPrinter<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Create Daily Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "DELETE /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Delete Daily Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Delete Daily Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Get Daily Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Get Daily Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Get Daily Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Update Daily Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/dailyPrintUsageByPrinter/{printUsageByPrinter-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Update Daily Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/dailyPrintUsageSummariesByPrinter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Daily Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Daily Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Daily Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Daily Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Daily Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Daily Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Daily Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Daily Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Daily Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/dailyPrintUsageSummariesByPrinter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Create Daily Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/dailyPrintUsageSummariesByPrinter<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Create Daily Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "DELETE /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Delete Daily Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Delete Daily Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Get Daily Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Get Daily Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Get Daily Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Update Daily Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/dailyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Update Daily Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/monthlyPrintUsageByPrinter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Monthly Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Monthly Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Monthly Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Monthly Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Monthly Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Monthly Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Monthly Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Monthly Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Monthly Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/monthlyPrintUsageByPrinter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Create Monthly Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/monthlyPrintUsageByPrinter<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Create Monthly Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "DELETE /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Delete Monthly Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Delete Monthly Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Get Monthly Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Get Monthly Print Usage By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Get Monthly Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Update Monthly Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/monthlyPrintUsageByPrinter/{printUsageByPrinter-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Update Monthly Print Usage By Printer"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/monthlyPrintUsageSummariesByPrinter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Monthly Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Monthly Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Monthly Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Monthly Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Monthly Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Monthly Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Monthly Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Monthly Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports List Monthly Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/monthlyPrintUsageSummariesByPrinter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Create Monthly Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "POST /reports/monthlyPrintUsageSummariesByPrinter<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Create Monthly Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "DELETE /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Delete Monthly Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Delete Monthly Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "GET /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Get Monthly Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Get Monthly Print Usage Summaries By Printer"
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
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Get Monthly Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Update Monthly Print Usage Summaries By Printer"
					]
				}
			}
		},
		{
			"displayName": "PATCH /reports/monthlyPrintUsageSummariesByPrinter/{printUsageByPrinter-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Reports Print Usage By Printer"
					],
					"operation": [
						"Reports Update Monthly Print Usage Summaries By Printer"
					]
				}
			}
		},
];
