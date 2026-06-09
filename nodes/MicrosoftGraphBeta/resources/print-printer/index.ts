import type { INodeProperties } from 'n8n-workflow';

export const printPrinterDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer"
					]
				}
			},
			"options": [
				{
					"name": "Print List Printers",
					"value": "Print List Printers",
					"action": "List printers",
					"description": "Retrieve the list of **printers** that are registered in the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/printers"
						}
					}
				},
				{
					"name": "Print Create Printers",
					"value": "Print Create Printers",
					"action": "Create new navigation property to printers for print",
					"description": "Create new navigation property to printers for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/printers"
						}
					}
				},
				{
					"name": "Print Delete Printers",
					"value": "Print Delete Printers",
					"action": "Delete navigation property printers for print",
					"description": "Delete navigation property printers for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/printers/{{$parameter[\"printer-id\"]}}"
						}
					}
				},
				{
					"name": "Print Get Printers",
					"value": "Print Get Printers",
					"action": "Get printers from print",
					"description": "The list of printers registered in the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/printers/{{$parameter[\"printer-id\"]}}"
						}
					}
				},
				{
					"name": "Print Update Printers",
					"value": "Print Update Printers",
					"action": "Update the navigation property printers in print",
					"description": "Update the navigation property printers in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/printers/{{$parameter[\"printer-id\"]}}"
						}
					}
				},
				{
					"name": "Print Printers List Connectors",
					"value": "Print Printers List Connectors",
					"action": "List printConnectors for printer",
					"description": "Retrieve a list of **connectors** associated with the printer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/printers/{{$parameter[\"printer-id\"]}}/connectors"
						}
					}
				},
				{
					"name": "Print Printers Get Connectors",
					"value": "Print Printers Get Connectors",
					"action": "Get connectors from print",
					"description": "The connectors that are associated with the printer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/printers/{{$parameter[\"printer-id\"]}}/connectors/{{$parameter[\"printConnector-id\"]}}"
						}
					}
				},
				{
					"name": "Print Printers Get Share",
					"value": "Print Printers Get Share",
					"action": "Get share from print",
					"description": "Get share from print",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/printers/{{$parameter[\"printer-id\"]}}/share"
						}
					}
				},
				{
					"name": "Print Printers List Shares",
					"value": "Print Printers List Shares",
					"action": "Get shares from print",
					"description": "The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with the printer. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/printers/{{$parameter[\"printer-id\"]}}/shares"
						}
					}
				},
				{
					"name": "Print Printers Get Shares",
					"value": "Print Printers Get Shares",
					"action": "Get shares from print",
					"description": "The list of printerShares that are associated with the printer. Currently, only one printerShare can be associated with the printer. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/printers/{{$parameter[\"printer-id\"]}}/shares/{{$parameter[\"printerShare-id\"]}}"
						}
					}
				},
				{
					"name": "Print Printers List Task Triggers",
					"value": "Print Printers List Task Triggers",
					"action": "List taskTriggers",
					"description": "Retrieve a list of task triggers associated with the printer. The list of task triggers defines which tasks will be triggered as a result of events that occur during printing. For details about how to use this API to add pull printing support to Universal Print, see Extending Universal Print to support pull printing.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/printers/{{$parameter[\"printer-id\"]}}/taskTriggers"
						}
					}
				},
				{
					"name": "Print Printers Create Task Triggers",
					"value": "Print Printers Create Task Triggers",
					"action": "Create taskTrigger",
					"description": "Create a new task trigger on the specified printer. Currently, only **one** task trigger can be specified per printer, but this limit might be removed in the future. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/printers/{{$parameter[\"printer-id\"]}}/taskTriggers"
						}
					}
				},
				{
					"name": "Print Printers Delete Task Triggers",
					"value": "Print Printers Delete Task Triggers",
					"action": "Delete navigation property taskTriggers for print",
					"description": "Delete navigation property taskTriggers for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/printers/{{$parameter[\"printer-id\"]}}/taskTriggers/{{$parameter[\"printTaskTrigger-id\"]}}"
						}
					}
				},
				{
					"name": "Print Printers Get Task Triggers",
					"value": "Print Printers Get Task Triggers",
					"action": "Get taskTriggers from print",
					"description": "A list of task triggers that are associated with the printer.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/printers/{{$parameter[\"printer-id\"]}}/taskTriggers/{{$parameter[\"printTaskTrigger-id\"]}}"
						}
					}
				},
				{
					"name": "Print Printers Update Task Triggers",
					"value": "Print Printers Update Task Triggers",
					"action": "Update the navigation property taskTriggers in print",
					"description": "Update the navigation property taskTriggers in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/printers/{{$parameter[\"printer-id\"]}}/taskTriggers/{{$parameter[\"printTaskTrigger-id\"]}}"
						}
					}
				},
				{
					"name": "Print Printers Task Triggers Get Definition",
					"value": "Print Printers Task Triggers Get Definition",
					"action": "Get definition from print",
					"description": "An abstract definition that will be used to create a printTask when triggered by a print event. Read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/printers/{{$parameter[\"printer-id\"]}}/taskTriggers/{{$parameter[\"printTaskTrigger-id\"]}}/definition"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /print/printers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer"
					],
					"operation": [
						"Print List Printers"
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
						"Print Printer"
					],
					"operation": [
						"Print List Printers"
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
						"Print Printer"
					],
					"operation": [
						"Print List Printers"
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
						"Print Printer"
					],
					"operation": [
						"Print List Printers"
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
						"Print Printer"
					],
					"operation": [
						"Print List Printers"
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
						"Print Printer"
					],
					"operation": [
						"Print List Printers"
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
						"Print Printer"
					],
					"operation": [
						"Print List Printers"
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
						"Print Printer"
					],
					"operation": [
						"Print List Printers"
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
						"Print Printer"
					],
					"operation": [
						"Print List Printers"
					]
				}
			}
		},
		{
			"displayName": "POST /print/printers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer"
					],
					"operation": [
						"Print Create Printers"
					]
				}
			}
		},
		{
			"displayName": "POST /print/printers<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer"
					],
					"operation": [
						"Print Create Printers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/printers/{printer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer"
					],
					"operation": [
						"Print Delete Printers"
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
						"Print Printer"
					],
					"operation": [
						"Print Delete Printers"
					]
				}
			}
		},
		{
			"displayName": "GET /print/printers/{printer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer"
					],
					"operation": [
						"Print Get Printers"
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
						"Print Printer"
					],
					"operation": [
						"Print Get Printers"
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
						"Print Printer"
					],
					"operation": [
						"Print Get Printers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/printers/{printer-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer"
					],
					"operation": [
						"Print Update Printers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/printers/{printer-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer"
					],
					"operation": [
						"Print Update Printers"
					]
				}
			}
		},
		{
			"displayName": "GET /print/printers/{printer-id}/connectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer"
					],
					"operation": [
						"Print Printers List Connectors"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Connectors"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Connectors"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Connectors"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Connectors"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Connectors"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Connectors"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Connectors"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Connectors"
					]
				}
			}
		},
		{
			"displayName": "GET /print/printers/{printer-id}/connectors/{printConnector-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer"
					],
					"operation": [
						"Print Printers Get Connectors"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers Get Connectors"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers Get Connectors"
					]
				}
			}
		},
		{
			"displayName": "GET /print/printers/{printer-id}/share",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer"
					],
					"operation": [
						"Print Printers Get Share"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers Get Share"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers Get Share"
					]
				}
			}
		},
		{
			"displayName": "GET /print/printers/{printer-id}/shares",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer"
					],
					"operation": [
						"Print Printers List Shares"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Shares"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Shares"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Shares"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Shares"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Shares"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Shares"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Shares"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Shares"
					]
				}
			}
		},
		{
			"displayName": "GET /print/printers/{printer-id}/shares/{printerShare-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer"
					],
					"operation": [
						"Print Printers Get Shares"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers Get Shares"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers Get Shares"
					]
				}
			}
		},
		{
			"displayName": "GET /print/printers/{printer-id}/taskTriggers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer"
					],
					"operation": [
						"Print Printers List Task Triggers"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Task Triggers"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Task Triggers"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Task Triggers"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Task Triggers"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Task Triggers"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Task Triggers"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Task Triggers"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers List Task Triggers"
					]
				}
			}
		},
		{
			"displayName": "POST /print/printers/{printer-id}/taskTriggers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer"
					],
					"operation": [
						"Print Printers Create Task Triggers"
					]
				}
			}
		},
		{
			"displayName": "POST /print/printers/{printer-id}/taskTriggers<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer"
					],
					"operation": [
						"Print Printers Create Task Triggers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer"
					],
					"operation": [
						"Print Printers Delete Task Triggers"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers Delete Task Triggers"
					]
				}
			}
		},
		{
			"displayName": "GET /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer"
					],
					"operation": [
						"Print Printers Get Task Triggers"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers Get Task Triggers"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers Get Task Triggers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer"
					],
					"operation": [
						"Print Printers Update Task Triggers"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer"
					],
					"operation": [
						"Print Printers Update Task Triggers"
					]
				}
			}
		},
		{
			"displayName": "GET /print/printers/{printer-id}/taskTriggers/{printTaskTrigger-id}/definition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Printer"
					],
					"operation": [
						"Print Printers Task Triggers Get Definition"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers Task Triggers Get Definition"
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
						"Print Printer"
					],
					"operation": [
						"Print Printers Task Triggers Get Definition"
					]
				}
			}
		},
];
