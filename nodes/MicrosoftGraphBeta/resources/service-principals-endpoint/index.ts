import type { INodeProperties } from 'n8n-workflow';

export const servicePrincipalsEndpointDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Endpoint"
					]
				}
			},
			"options": [
				{
					"name": "Service Principals List Endpoints",
					"value": "Service Principals List Endpoints",
					"action": "Get endpoints from servicePrincipals",
					"description": "Endpoints available for discovery. Services like Sharepoint populate this property with a tenant specific SharePoint endpoints that other applications can discover and use in their experiences.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/endpoints"
						}
					}
				},
				{
					"name": "Service Principals Create Endpoints",
					"value": "Service Principals Create Endpoints",
					"action": "Create new navigation property to endpoints for servicePrincipals",
					"description": "Create new navigation property to endpoints for servicePrincipals",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/endpoints"
						}
					}
				},
				{
					"name": "Service Principals Delete Endpoints",
					"value": "Service Principals Delete Endpoints",
					"action": "Delete navigation property endpoints for servicePrincipals",
					"description": "Delete navigation property endpoints for servicePrincipals",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/endpoints/{{$parameter[\"endpoint-id\"]}}"
						}
					}
				},
				{
					"name": "Service Principals Get Endpoints",
					"value": "Service Principals Get Endpoints",
					"action": "Get endpoints from servicePrincipals",
					"description": "Endpoints available for discovery. Services like Sharepoint populate this property with a tenant specific SharePoint endpoints that other applications can discover and use in their experiences.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/endpoints/{{$parameter[\"endpoint-id\"]}}"
						}
					}
				},
				{
					"name": "Service Principals Update Endpoints",
					"value": "Service Principals Update Endpoints",
					"action": "Update the navigation property endpoints in servicePrincipals",
					"description": "Update the navigation property endpoints in servicePrincipals",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}/endpoints/{{$parameter[\"endpoint-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/endpoints",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Endpoint"
					],
					"operation": [
						"Service Principals List Endpoints"
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
						"Service Principals Endpoint"
					],
					"operation": [
						"Service Principals List Endpoints"
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
						"Service Principals Endpoint"
					],
					"operation": [
						"Service Principals List Endpoints"
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
						"Service Principals Endpoint"
					],
					"operation": [
						"Service Principals List Endpoints"
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
						"Service Principals Endpoint"
					],
					"operation": [
						"Service Principals List Endpoints"
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
						"Service Principals Endpoint"
					],
					"operation": [
						"Service Principals List Endpoints"
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
						"Service Principals Endpoint"
					],
					"operation": [
						"Service Principals List Endpoints"
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
						"Service Principals Endpoint"
					],
					"operation": [
						"Service Principals List Endpoints"
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
						"Service Principals Endpoint"
					],
					"operation": [
						"Service Principals List Endpoints"
					]
				}
			}
		},
		{
			"displayName": "POST /servicePrincipals/{servicePrincipal-id}/endpoints",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Endpoint"
					],
					"operation": [
						"Service Principals Create Endpoints"
					]
				}
			}
		},
		{
			"displayName": "POST /servicePrincipals/{servicePrincipal-id}/endpoints<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Endpoint"
					],
					"operation": [
						"Service Principals Create Endpoints"
					]
				}
			}
		},
		{
			"displayName": "DELETE /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Endpoint"
					],
					"operation": [
						"Service Principals Delete Endpoints"
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
						"Service Principals Endpoint"
					],
					"operation": [
						"Service Principals Delete Endpoints"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Endpoint"
					],
					"operation": [
						"Service Principals Get Endpoints"
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
						"Service Principals Endpoint"
					],
					"operation": [
						"Service Principals Get Endpoints"
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
						"Service Principals Endpoint"
					],
					"operation": [
						"Service Principals Get Endpoints"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Endpoint"
					],
					"operation": [
						"Service Principals Update Endpoints"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}/endpoints/{endpoint-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Endpoint"
					],
					"operation": [
						"Service Principals Update Endpoints"
					]
				}
			}
		},
];
