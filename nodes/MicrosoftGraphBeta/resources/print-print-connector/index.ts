import type { INodeProperties } from 'n8n-workflow';

export const printPrintConnectorDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Connector"
					]
				}
			},
			"options": [
				{
					"name": "Print List Connectors",
					"value": "Print List Connectors",
					"action": "List printConnectors",
					"description": "Retrieve a list of print connectors.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/connectors"
						}
					}
				},
				{
					"name": "Print Create Connectors",
					"value": "Print Create Connectors",
					"action": "Create new navigation property to connectors for print",
					"description": "Create new navigation property to connectors for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/connectors"
						}
					}
				},
				{
					"name": "Print Delete Connectors",
					"value": "Print Delete Connectors",
					"action": "Delete navigation property connectors for print",
					"description": "Delete navigation property connectors for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/connectors/{{$parameter[\"printConnector-id\"]}}"
						}
					}
				},
				{
					"name": "Print Get Connectors",
					"value": "Print Get Connectors",
					"action": "Get connectors from print",
					"description": "The list of available print connectors.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/connectors/{{$parameter[\"printConnector-id\"]}}"
						}
					}
				},
				{
					"name": "Print Update Connectors",
					"value": "Print Update Connectors",
					"action": "Update the navigation property connectors in print",
					"description": "Update the navigation property connectors in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/connectors/{{$parameter[\"printConnector-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /print/connectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Connector"
					],
					"operation": [
						"Print List Connectors"
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
						"Print Print Connector"
					],
					"operation": [
						"Print List Connectors"
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
						"Print Print Connector"
					],
					"operation": [
						"Print List Connectors"
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
						"Print Print Connector"
					],
					"operation": [
						"Print List Connectors"
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
						"Print Print Connector"
					],
					"operation": [
						"Print List Connectors"
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
						"Print Print Connector"
					],
					"operation": [
						"Print List Connectors"
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
						"Print Print Connector"
					],
					"operation": [
						"Print List Connectors"
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
						"Print Print Connector"
					],
					"operation": [
						"Print List Connectors"
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
						"Print Print Connector"
					],
					"operation": [
						"Print List Connectors"
					]
				}
			}
		},
		{
			"displayName": "POST /print/connectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Connector"
					],
					"operation": [
						"Print Create Connectors"
					]
				}
			}
		},
		{
			"displayName": "POST /print/connectors<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Connector"
					],
					"operation": [
						"Print Create Connectors"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/connectors/{printConnector-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Connector"
					],
					"operation": [
						"Print Delete Connectors"
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
						"Print Print Connector"
					],
					"operation": [
						"Print Delete Connectors"
					]
				}
			}
		},
		{
			"displayName": "GET /print/connectors/{printConnector-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Connector"
					],
					"operation": [
						"Print Get Connectors"
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
						"Print Print Connector"
					],
					"operation": [
						"Print Get Connectors"
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
						"Print Print Connector"
					],
					"operation": [
						"Print Get Connectors"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/connectors/{printConnector-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Connector"
					],
					"operation": [
						"Print Update Connectors"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/connectors/{printConnector-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Connector"
					],
					"operation": [
						"Print Update Connectors"
					]
				}
			}
		},
];
