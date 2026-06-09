import type { INodeProperties } from 'n8n-workflow';

export const printPrintServiceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Service"
					]
				}
			},
			"options": [
				{
					"name": "Print List Services",
					"value": "Print List Services",
					"action": "List printServices",
					"description": "Retrieve a list of printService objects that represent the **services** available to your tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/services"
						}
					}
				},
				{
					"name": "Print Create Services",
					"value": "Print Create Services",
					"action": "Create new navigation property to services for print",
					"description": "Create new navigation property to services for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/services"
						}
					}
				},
				{
					"name": "Print Delete Services",
					"value": "Print Delete Services",
					"action": "Delete navigation property services for print",
					"description": "Delete navigation property services for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/services/{{$parameter[\"printService-id\"]}}"
						}
					}
				},
				{
					"name": "Print Get Services",
					"value": "Print Get Services",
					"action": "Get services from print",
					"description": "The list of available Universal Print service endpoints.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/services/{{$parameter[\"printService-id\"]}}"
						}
					}
				},
				{
					"name": "Print Update Services",
					"value": "Print Update Services",
					"action": "Update the navigation property services in print",
					"description": "Update the navigation property services in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/services/{{$parameter[\"printService-id\"]}}"
						}
					}
				},
				{
					"name": "Print Services List Endpoints",
					"value": "Print Services List Endpoints",
					"action": "List printServiceEndpoints",
					"description": "Retrieve a list of endpoints exposed by a print service.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/services/{{$parameter[\"printService-id\"]}}/endpoints"
						}
					}
				},
				{
					"name": "Print Services Create Endpoints",
					"value": "Print Services Create Endpoints",
					"action": "Create new navigation property to endpoints for print",
					"description": "Create new navigation property to endpoints for print",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/print/services/{{$parameter[\"printService-id\"]}}/endpoints"
						}
					}
				},
				{
					"name": "Print Services Delete Endpoints",
					"value": "Print Services Delete Endpoints",
					"action": "Delete navigation property endpoints for print",
					"description": "Delete navigation property endpoints for print",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/print/services/{{$parameter[\"printService-id\"]}}/endpoints/{{$parameter[\"printServiceEndpoint-id\"]}}"
						}
					}
				},
				{
					"name": "Print Services Get Endpoints",
					"value": "Print Services Get Endpoints",
					"action": "Get endpoints from print",
					"description": "Endpoints that can be used to access the service. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/print/services/{{$parameter[\"printService-id\"]}}/endpoints/{{$parameter[\"printServiceEndpoint-id\"]}}"
						}
					}
				},
				{
					"name": "Print Services Update Endpoints",
					"value": "Print Services Update Endpoints",
					"action": "Update the navigation property endpoints in print",
					"description": "Update the navigation property endpoints in print",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/print/services/{{$parameter[\"printService-id\"]}}/endpoints/{{$parameter[\"printServiceEndpoint-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /print/services",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Service"
					],
					"operation": [
						"Print List Services"
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
						"Print Print Service"
					],
					"operation": [
						"Print List Services"
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
						"Print Print Service"
					],
					"operation": [
						"Print List Services"
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
						"Print Print Service"
					],
					"operation": [
						"Print List Services"
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
						"Print Print Service"
					],
					"operation": [
						"Print List Services"
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
						"Print Print Service"
					],
					"operation": [
						"Print List Services"
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
						"Print Print Service"
					],
					"operation": [
						"Print List Services"
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
						"Print Print Service"
					],
					"operation": [
						"Print List Services"
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
						"Print Print Service"
					],
					"operation": [
						"Print List Services"
					]
				}
			}
		},
		{
			"displayName": "POST /print/services",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Service"
					],
					"operation": [
						"Print Create Services"
					]
				}
			}
		},
		{
			"displayName": "POST /print/services<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Service"
					],
					"operation": [
						"Print Create Services"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/services/{printService-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Service"
					],
					"operation": [
						"Print Delete Services"
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
						"Print Print Service"
					],
					"operation": [
						"Print Delete Services"
					]
				}
			}
		},
		{
			"displayName": "GET /print/services/{printService-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Service"
					],
					"operation": [
						"Print Get Services"
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
						"Print Print Service"
					],
					"operation": [
						"Print Get Services"
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
						"Print Print Service"
					],
					"operation": [
						"Print Get Services"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/services/{printService-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Service"
					],
					"operation": [
						"Print Update Services"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/services/{printService-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Service"
					],
					"operation": [
						"Print Update Services"
					]
				}
			}
		},
		{
			"displayName": "GET /print/services/{printService-id}/endpoints",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Service"
					],
					"operation": [
						"Print Services List Endpoints"
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
						"Print Print Service"
					],
					"operation": [
						"Print Services List Endpoints"
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
						"Print Print Service"
					],
					"operation": [
						"Print Services List Endpoints"
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
						"Print Print Service"
					],
					"operation": [
						"Print Services List Endpoints"
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
						"Print Print Service"
					],
					"operation": [
						"Print Services List Endpoints"
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
						"Print Print Service"
					],
					"operation": [
						"Print Services List Endpoints"
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
						"Print Print Service"
					],
					"operation": [
						"Print Services List Endpoints"
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
						"Print Print Service"
					],
					"operation": [
						"Print Services List Endpoints"
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
						"Print Print Service"
					],
					"operation": [
						"Print Services List Endpoints"
					]
				}
			}
		},
		{
			"displayName": "POST /print/services/{printService-id}/endpoints",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Service"
					],
					"operation": [
						"Print Services Create Endpoints"
					]
				}
			}
		},
		{
			"displayName": "POST /print/services/{printService-id}/endpoints<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Service"
					],
					"operation": [
						"Print Services Create Endpoints"
					]
				}
			}
		},
		{
			"displayName": "DELETE /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Service"
					],
					"operation": [
						"Print Services Delete Endpoints"
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
						"Print Print Service"
					],
					"operation": [
						"Print Services Delete Endpoints"
					]
				}
			}
		},
		{
			"displayName": "GET /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Service"
					],
					"operation": [
						"Print Services Get Endpoints"
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
						"Print Print Service"
					],
					"operation": [
						"Print Services Get Endpoints"
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
						"Print Print Service"
					],
					"operation": [
						"Print Services Get Endpoints"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Service"
					],
					"operation": [
						"Print Services Update Endpoints"
					]
				}
			}
		},
		{
			"displayName": "PATCH /print/services/{printService-id}/endpoints/{printServiceEndpoint-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Print Print Service"
					],
					"operation": [
						"Print Services Update Endpoints"
					]
				}
			}
		},
];
