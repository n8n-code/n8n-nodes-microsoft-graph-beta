import type { INodeProperties } from 'n8n-workflow';

export const servicePrincipalsServicePrincipalDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Service Principal"
					]
				}
			},
			"options": [
				{
					"name": "Service Principals Service Principal List Service Principal",
					"value": "Service Principals Service Principal List Service Principal",
					"action": "List servicePrincipals",
					"description": "Retrieve a list of servicePrincipal objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals"
						}
					}
				},
				{
					"name": "Service Principals Service Principal Create Service Principal",
					"value": "Service Principals Service Principal Create Service Principal",
					"action": "Create servicePrincipal",
					"description": "Create a new servicePrincipal object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/servicePrincipals"
						}
					}
				},
				{
					"name": "Service Principals Service Principal Delete Service Principal",
					"value": "Service Principals Service Principal Delete Service Principal",
					"action": "Delete servicePrincipal",
					"description": "Delete a servicePrincipal object.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}"
						}
					}
				},
				{
					"name": "Service Principals Service Principal Get Service Principal",
					"value": "Service Principals Service Principal Get Service Principal",
					"action": "Get servicePrincipal",
					"description": "Retrieve the properties and relationships of a servicePrincipal object.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}"
						}
					}
				},
				{
					"name": "Service Principals Service Principal Update Service Principal",
					"value": "Service Principals Service Principal Update Service Principal",
					"action": "Update servicePrincipal",
					"description": "Update the properties of servicePrincipal object.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/servicePrincipals/{{$parameter[\"servicePrincipal-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /servicePrincipals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Service Principal"
					],
					"operation": [
						"Service Principals Service Principal List Service Principal"
					]
				}
			}
		},
		{
			"displayName": "Consistency Level",
			"name": "ConsistencyLevel",
			"description": "Indicates the requested consistency level. Documentation URL: https://docs.microsoft.com/graph/aad-advanced-queries",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"ConsistencyLevel": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Service Principal"
					],
					"operation": [
						"Service Principals Service Principal List Service Principal"
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
						"Service Principals Service Principal"
					],
					"operation": [
						"Service Principals Service Principal List Service Principal"
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
						"Service Principals Service Principal"
					],
					"operation": [
						"Service Principals Service Principal List Service Principal"
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
						"Service Principals Service Principal"
					],
					"operation": [
						"Service Principals Service Principal List Service Principal"
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
						"Service Principals Service Principal"
					],
					"operation": [
						"Service Principals Service Principal List Service Principal"
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
						"Service Principals Service Principal"
					],
					"operation": [
						"Service Principals Service Principal List Service Principal"
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
						"Service Principals Service Principal"
					],
					"operation": [
						"Service Principals Service Principal List Service Principal"
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
						"Service Principals Service Principal"
					],
					"operation": [
						"Service Principals Service Principal List Service Principal"
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
						"Service Principals Service Principal"
					],
					"operation": [
						"Service Principals Service Principal List Service Principal"
					]
				}
			}
		},
		{
			"displayName": "POST /servicePrincipals",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Service Principal"
					],
					"operation": [
						"Service Principals Service Principal Create Service Principal"
					]
				}
			}
		},
		{
			"displayName": "POST /servicePrincipals<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Service Principal"
					],
					"operation": [
						"Service Principals Service Principal Create Service Principal"
					]
				}
			}
		},
		{
			"displayName": "DELETE /servicePrincipals/{servicePrincipal-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Service Principal"
					],
					"operation": [
						"Service Principals Service Principal Delete Service Principal"
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
						"Service Principals Service Principal"
					],
					"operation": [
						"Service Principals Service Principal Delete Service Principal"
					]
				}
			}
		},
		{
			"displayName": "GET /servicePrincipals/{servicePrincipal-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Service Principal"
					],
					"operation": [
						"Service Principals Service Principal Get Service Principal"
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
						"Service Principals Service Principal"
					],
					"operation": [
						"Service Principals Service Principal Get Service Principal"
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
						"Service Principals Service Principal"
					],
					"operation": [
						"Service Principals Service Principal Get Service Principal"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Service Principal"
					],
					"operation": [
						"Service Principals Service Principal Update Service Principal"
					]
				}
			}
		},
		{
			"displayName": "PATCH /servicePrincipals/{servicePrincipal-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Service Principals Service Principal"
					],
					"operation": [
						"Service Principals Service Principal Update Service Principal"
					]
				}
			}
		},
];
