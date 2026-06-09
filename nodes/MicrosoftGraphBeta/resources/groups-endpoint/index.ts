import type { INodeProperties } from 'n8n-workflow';

export const groupsEndpointDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Endpoint"
					]
				}
			},
			"options": [
				{
					"name": "Groups List Endpoints",
					"value": "Groups List Endpoints",
					"action": "List endpoints",
					"description": "Retrieve a list of endpoint objects.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/endpoints"
						}
					}
				},
				{
					"name": "Groups Create Endpoints",
					"value": "Groups Create Endpoints",
					"action": "Create new navigation property to endpoints for groups",
					"description": "Create new navigation property to endpoints for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/endpoints"
						}
					}
				},
				{
					"name": "Groups Delete Endpoints",
					"value": "Groups Delete Endpoints",
					"action": "Delete navigation property endpoints for groups",
					"description": "Delete navigation property endpoints for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/endpoints/{{$parameter[\"endpoint-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Get Endpoints",
					"value": "Groups Get Endpoints",
					"action": "Get endpoints from groups",
					"description": "Endpoints for the group. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/endpoints/{{$parameter[\"endpoint-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Update Endpoints",
					"value": "Groups Update Endpoints",
					"action": "Update the navigation property endpoints in groups",
					"description": "Update the navigation property endpoints in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/endpoints/{{$parameter[\"endpoint-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /groups/{group-id}/endpoints",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Endpoint"
					],
					"operation": [
						"Groups List Endpoints"
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
						"Groups Endpoint"
					],
					"operation": [
						"Groups List Endpoints"
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
						"Groups Endpoint"
					],
					"operation": [
						"Groups List Endpoints"
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
						"Groups Endpoint"
					],
					"operation": [
						"Groups List Endpoints"
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
						"Groups Endpoint"
					],
					"operation": [
						"Groups List Endpoints"
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
						"Groups Endpoint"
					],
					"operation": [
						"Groups List Endpoints"
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
						"Groups Endpoint"
					],
					"operation": [
						"Groups List Endpoints"
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
						"Groups Endpoint"
					],
					"operation": [
						"Groups List Endpoints"
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
						"Groups Endpoint"
					],
					"operation": [
						"Groups List Endpoints"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/endpoints",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Endpoint"
					],
					"operation": [
						"Groups Create Endpoints"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/endpoints<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Endpoint"
					],
					"operation": [
						"Groups Create Endpoints"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/endpoints/{endpoint-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Endpoint"
					],
					"operation": [
						"Groups Delete Endpoints"
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
						"Groups Endpoint"
					],
					"operation": [
						"Groups Delete Endpoints"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/endpoints/{endpoint-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Endpoint"
					],
					"operation": [
						"Groups Get Endpoints"
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
						"Groups Endpoint"
					],
					"operation": [
						"Groups Get Endpoints"
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
						"Groups Endpoint"
					],
					"operation": [
						"Groups Get Endpoints"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/endpoints/{endpoint-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Endpoint"
					],
					"operation": [
						"Groups Update Endpoints"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/endpoints/{endpoint-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Endpoint"
					],
					"operation": [
						"Groups Update Endpoints"
					]
				}
			}
		},
];
