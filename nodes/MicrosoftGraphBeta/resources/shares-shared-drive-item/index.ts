import type { INodeProperties } from 'n8n-workflow';

export const sharesSharedDriveItemDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Shared Drive Item"
					]
				}
			},
			"options": [
				{
					"name": "Shares Shared Drive Item List Shared Drive Item",
					"value": "Shares Shared Drive Item List Shared Drive Item",
					"action": "Accessing shared DriveItems",
					"description": "Access a shared DriveItem or a collection of shared items by using a **shareId** or sharing URL. To use a sharing URL with this API, your app needs to transform the URL into a sharing token.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares"
						}
					}
				},
				{
					"name": "Shares Shared Drive Item Create Shared Drive Item",
					"value": "Shares Shared Drive Item Create Shared Drive Item",
					"action": "Add new entity to shares",
					"description": "Add new entity to shares",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/shares"
						}
					}
				},
				{
					"name": "Shares Shared Drive Item Delete Shared Drive Item",
					"value": "Shares Shared Drive Item Delete Shared Drive Item",
					"action": "Delete entity from shares",
					"description": "Delete entity from shares",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}"
						}
					}
				},
				{
					"name": "Shares Shared Drive Item Get Shared Drive Item",
					"value": "Shares Shared Drive Item Get Shared Drive Item",
					"action": "Accessing shared DriveItems",
					"description": "Access a shared DriveItem or a collection of shared items by using a **shareId** or sharing URL. To use a sharing URL with this API, your app needs to transform the URL into a sharing token.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}"
						}
					}
				},
				{
					"name": "Shares Shared Drive Item Update Shared Drive Item",
					"value": "Shares Shared Drive Item Update Shared Drive Item",
					"action": "Update entity in shares",
					"description": "Update entity in shares",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /shares",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Shared Drive Item"
					],
					"operation": [
						"Shares Shared Drive Item List Shared Drive Item"
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
						"Shares Shared Drive Item"
					],
					"operation": [
						"Shares Shared Drive Item List Shared Drive Item"
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
						"Shares Shared Drive Item"
					],
					"operation": [
						"Shares Shared Drive Item List Shared Drive Item"
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
						"Shares Shared Drive Item"
					],
					"operation": [
						"Shares Shared Drive Item List Shared Drive Item"
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
						"Shares Shared Drive Item"
					],
					"operation": [
						"Shares Shared Drive Item List Shared Drive Item"
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
						"Shares Shared Drive Item"
					],
					"operation": [
						"Shares Shared Drive Item List Shared Drive Item"
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
						"Shares Shared Drive Item"
					],
					"operation": [
						"Shares Shared Drive Item List Shared Drive Item"
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
						"Shares Shared Drive Item"
					],
					"operation": [
						"Shares Shared Drive Item List Shared Drive Item"
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
						"Shares Shared Drive Item"
					],
					"operation": [
						"Shares Shared Drive Item List Shared Drive Item"
					]
				}
			}
		},
		{
			"displayName": "POST /shares",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Shared Drive Item"
					],
					"operation": [
						"Shares Shared Drive Item Create Shared Drive Item"
					]
				}
			}
		},
		{
			"displayName": "POST /shares<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Shared Drive Item"
					],
					"operation": [
						"Shares Shared Drive Item Create Shared Drive Item"
					]
				}
			}
		},
		{
			"displayName": "DELETE /shares/{sharedDriveItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Shared Drive Item"
					],
					"operation": [
						"Shares Shared Drive Item Delete Shared Drive Item"
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
						"Shares Shared Drive Item"
					],
					"operation": [
						"Shares Shared Drive Item Delete Shared Drive Item"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Shared Drive Item"
					],
					"operation": [
						"Shares Shared Drive Item Get Shared Drive Item"
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
						"Shares Shared Drive Item"
					],
					"operation": [
						"Shares Shared Drive Item Get Shared Drive Item"
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
						"Shares Shared Drive Item"
					],
					"operation": [
						"Shares Shared Drive Item Get Shared Drive Item"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Shared Drive Item"
					],
					"operation": [
						"Shares Shared Drive Item Update Shared Drive Item"
					]
				}
			}
		},
		{
			"displayName": "PATCH /shares/{sharedDriveItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Shared Drive Item"
					],
					"operation": [
						"Shares Shared Drive Item Update Shared Drive Item"
					]
				}
			}
		},
];
