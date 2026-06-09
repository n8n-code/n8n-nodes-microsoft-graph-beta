import type { INodeProperties } from 'n8n-workflow';

export const printPrintOperationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Operation"
					]
				}
			},
			"options": [
				{
					"name": "Print List Operations",
					"value": "Print List Operations",
					"action": "Get operations from print",
					"description": "Get operations from print",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/operations"
						}
					}
				},
				{
					"name": "Print Create Operations",
					"value": "Print Create Operations",
					"action": "Create new navigation property to operations for print",
					"description": "Create new navigation property to operations for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/operations"
						}
					}
				},
				{
					"name": "Print Delete Operations",
					"value": "Print Delete Operations",
					"action": "Delete navigation property operations for print",
					"description": "Delete navigation property operations for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/operations/{{$parameter[\"printOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Print Get Operations",
					"value": "Print Get Operations",
					"action": "Get operations from print",
					"description": "Get operations from print",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/operations/{{$parameter[\"printOperation-id\"]}}"
						}
					}
				},
				{
					"name": "Print Update Operations",
					"value": "Print Update Operations",
					"action": "Update the navigation property operations in print",
					"description": "Update the navigation property operations in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/operations/{{$parameter[\"printOperation-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /print/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Operation"
					],
					"operation": [
						"Print List Operations"
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
						"Print Print Operation"
					],
					"operation": [
						"Print List Operations"
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
						"Print Print Operation"
					],
					"operation": [
						"Print List Operations"
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
						"Print Print Operation"
					],
					"operation": [
						"Print List Operations"
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
						"Print Print Operation"
					],
					"operation": [
						"Print List Operations"
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
						"Print Print Operation"
					],
					"operation": [
						"Print List Operations"
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
						"Print Print Operation"
					],
					"operation": [
						"Print List Operations"
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
						"Print Print Operation"
					],
					"operation": [
						"Print List Operations"
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
						"Print Print Operation"
					],
					"operation": [
						"Print List Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /print/operations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Operation"
					],
					"operation": [
						"Print Create Operations"
					]
				}
			}
		},
		{
			"displayName": "POST /print/operations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Operation"
					],
					"operation": [
						"Print Create Operations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/operations/{printOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Operation"
					],
					"operation": [
						"Print Delete Operations"
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
						"Print Print Operation"
					],
					"operation": [
						"Print Delete Operations"
					]
				}
			}
		},
		{
			"displayName": "GET /print/operations/{printOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Operation"
					],
					"operation": [
						"Print Get Operations"
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
						"Print Print Operation"
					],
					"operation": [
						"Print Get Operations"
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
						"Print Print Operation"
					],
					"operation": [
						"Print Get Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/operations/{printOperation-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Operation"
					],
					"operation": [
						"Print Update Operations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/operations/{printOperation-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Operation"
					],
					"operation": [
						"Print Update Operations"
					]
				}
			}
		},
];
