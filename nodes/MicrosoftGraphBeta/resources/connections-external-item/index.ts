import type { INodeProperties } from 'n8n-workflow';

export const connectionsExternalItemDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Item"
					]
				}
			},
			"options": [
				{
					"name": "Connections List Items",
					"value": "Connections List Items",
					"action": "Get items from connections",
					"description": "Get items from connections",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/items"
						}
					}
				},
				{
					"name": "Connections Create Items",
					"value": "Connections Create Items",
					"action": "Create new navigation property to items for connections",
					"description": "Create new navigation property to items for connections",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/items"
						}
					}
				},
				{
					"name": "Connections Delete Items",
					"value": "Connections Delete Items",
					"action": "Delete navigation property items for connections",
					"description": "Delete navigation property items for connections",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/items/{{$parameter[\"externalItem-id\"]}}"
						}
					}
				},
				{
					"name": "Connections Get Items",
					"value": "Connections Get Items",
					"action": "Get items from connections",
					"description": "Get items from connections",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/items/{{$parameter[\"externalItem-id\"]}}"
						}
					}
				},
				{
					"name": "Connections Update Items",
					"value": "Connections Update Items",
					"action": "Update the navigation property items in connections",
					"description": "Update the navigation property items in connections",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/items/{{$parameter[\"externalItem-id\"]}}"
						}
					}
				},
				{
					"name": "Connections Items List Activities",
					"value": "Connections Items List Activities",
					"action": "Get activities from connections",
					"description": "Write-only property. Returns results.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/items/{{$parameter[\"externalItem-id\"]}}/activities"
						}
					}
				},
				{
					"name": "Connections Items Create Activities",
					"value": "Connections Items Create Activities",
					"action": "Create new navigation property to activities for connections",
					"description": "Create new navigation property to activities for connections",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/items/{{$parameter[\"externalItem-id\"]}}/activities"
						}
					}
				},
				{
					"name": "Connections Items Delete Activities",
					"value": "Connections Items Delete Activities",
					"action": "Delete navigation property activities for connections",
					"description": "Delete navigation property activities for connections",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/items/{{$parameter[\"externalItem-id\"]}}/activities/{{$parameter[\"externalActivity-id\"]}}"
						}
					}
				},
				{
					"name": "Connections Items Get Activities",
					"value": "Connections Items Get Activities",
					"action": "Get activities from connections",
					"description": "Write-only property. Returns results.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/items/{{$parameter[\"externalItem-id\"]}}/activities/{{$parameter[\"externalActivity-id\"]}}"
						}
					}
				},
				{
					"name": "Connections Items Update Activities",
					"value": "Connections Items Update Activities",
					"action": "Update the navigation property activities in connections",
					"description": "Update the navigation property activities in connections",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/items/{{$parameter[\"externalItem-id\"]}}/activities/{{$parameter[\"externalActivity-id\"]}}"
						}
					}
				},
				{
					"name": "Connections Items Activities Get Performed By",
					"value": "Connections Items Activities Get Performed By",
					"action": "Get performedBy from connections",
					"description": "Represents an identity used to identify who is responsible for the activity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connections/{{$parameter[\"externalConnection-id\"]}}/items/{{$parameter[\"externalItem-id\"]}}/activities/{{$parameter[\"externalActivity-id\"]}}/performedBy"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /connections/{externalConnection-id}/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Item"
					],
					"operation": [
						"Connections List Items"
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
						"Connections External Item"
					],
					"operation": [
						"Connections List Items"
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
						"Connections External Item"
					],
					"operation": [
						"Connections List Items"
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
						"Connections External Item"
					],
					"operation": [
						"Connections List Items"
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
						"Connections External Item"
					],
					"operation": [
						"Connections List Items"
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
						"Connections External Item"
					],
					"operation": [
						"Connections List Items"
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
						"Connections External Item"
					],
					"operation": [
						"Connections List Items"
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
						"Connections External Item"
					],
					"operation": [
						"Connections List Items"
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
						"Connections External Item"
					],
					"operation": [
						"Connections List Items"
					]
				}
			}
		},
		{
			"displayName": "POST /connections/{externalConnection-id}/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Item"
					],
					"operation": [
						"Connections Create Items"
					]
				}
			}
		},
		{
			"displayName": "POST /connections/{externalConnection-id}/items<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Item"
					],
					"operation": [
						"Connections Create Items"
					]
				}
			}
		},
		{
			"displayName": "DELETE /connections/{externalConnection-id}/items/{externalItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Item"
					],
					"operation": [
						"Connections Delete Items"
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
						"Connections External Item"
					],
					"operation": [
						"Connections Delete Items"
					]
				}
			}
		},
		{
			"displayName": "GET /connections/{externalConnection-id}/items/{externalItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Item"
					],
					"operation": [
						"Connections Get Items"
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
						"Connections External Item"
					],
					"operation": [
						"Connections Get Items"
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
						"Connections External Item"
					],
					"operation": [
						"Connections Get Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /connections/{externalConnection-id}/items/{externalItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Item"
					],
					"operation": [
						"Connections Update Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /connections/{externalConnection-id}/items/{externalItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Item"
					],
					"operation": [
						"Connections Update Items"
					]
				}
			}
		},
		{
			"displayName": "GET /connections/{externalConnection-id}/items/{externalItem-id}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Item"
					],
					"operation": [
						"Connections Items List Activities"
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
						"Connections External Item"
					],
					"operation": [
						"Connections Items List Activities"
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
						"Connections External Item"
					],
					"operation": [
						"Connections Items List Activities"
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
						"Connections External Item"
					],
					"operation": [
						"Connections Items List Activities"
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
						"Connections External Item"
					],
					"operation": [
						"Connections Items List Activities"
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
						"Connections External Item"
					],
					"operation": [
						"Connections Items List Activities"
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
						"Connections External Item"
					],
					"operation": [
						"Connections Items List Activities"
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
						"Connections External Item"
					],
					"operation": [
						"Connections Items List Activities"
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
						"Connections External Item"
					],
					"operation": [
						"Connections Items List Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /connections/{externalConnection-id}/items/{externalItem-id}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Item"
					],
					"operation": [
						"Connections Items Create Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /connections/{externalConnection-id}/items/{externalItem-id}/activities<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Item"
					],
					"operation": [
						"Connections Items Create Activities"
					]
				}
			}
		},
		{
			"displayName": "DELETE /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Item"
					],
					"operation": [
						"Connections Items Delete Activities"
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
						"Connections External Item"
					],
					"operation": [
						"Connections Items Delete Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Item"
					],
					"operation": [
						"Connections Items Get Activities"
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
						"Connections External Item"
					],
					"operation": [
						"Connections Items Get Activities"
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
						"Connections External Item"
					],
					"operation": [
						"Connections Items Get Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Item"
					],
					"operation": [
						"Connections Items Update Activities"
					]
				}
			}
		},
		{
			"displayName": "PATCH /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Item"
					],
					"operation": [
						"Connections Items Update Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /connections/{externalConnection-id}/items/{externalItem-id}/activities/{externalActivity-id}/performedBy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connections External Item"
					],
					"operation": [
						"Connections Items Activities Get Performed By"
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
						"Connections External Item"
					],
					"operation": [
						"Connections Items Activities Get Performed By"
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
						"Connections External Item"
					],
					"operation": [
						"Connections Items Activities Get Performed By"
					]
				}
			}
		},
];
