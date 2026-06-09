import type { INodeProperties } from 'n8n-workflow';

export const sharesDriveItemDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Drive Item"
					]
				}
			},
			"options": [
				{
					"name": "Shares Get Drive Item",
					"value": "Shares Get Drive Item",
					"action": "Accessing shared DriveItems",
					"description": "Access a shared DriveItem or a collection of shared items by using a **shareId** or sharing URL. To use a sharing URL with this API, your app needs to transform the URL into a sharing token.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/driveItem"
						}
					}
				},
				{
					"name": "Shares Get Drive Item Content",
					"value": "Shares Get Drive Item Content",
					"action": "Get content for the navigation property driveItem from shares",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/driveItem/content"
						}
					}
				},
				{
					"name": "Shares Update Drive Item Content",
					"value": "Shares Update Drive Item Content",
					"action": "Update content for the navigation property driveItem in shares",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/driveItem/content"
						}
					}
				},
				{
					"name": "Shares List Items",
					"value": "Shares List Items",
					"action": "Get items from shares",
					"description": "All driveItems contained in the sharing root. This collection cannot be enumerated.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/items"
						}
					}
				},
				{
					"name": "Shares Get Items",
					"value": "Shares Get Items",
					"action": "Get items from shares",
					"description": "All driveItems contained in the sharing root. This collection cannot be enumerated.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}"
						}
					}
				},
				{
					"name": "Shares Get Items Content",
					"value": "Shares Get Items Content",
					"action": "Get content for the navigation property items from shares",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/content"
						}
					}
				},
				{
					"name": "Shares Update Items Content",
					"value": "Shares Update Items Content",
					"action": "Update content for the navigation property items in shares",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/items/{{$parameter[\"driveItem-id\"]}}/content"
						}
					}
				},
				{
					"name": "Shares Get Root",
					"value": "Shares Get Root",
					"action": "Get root from shares",
					"description": "Get root from shares",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/root"
						}
					}
				},
				{
					"name": "Shares Get Root Content",
					"value": "Shares Get Root Content",
					"action": "Get content for the navigation property root from shares",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/root/content"
						}
					}
				},
				{
					"name": "Shares Update Root Content",
					"value": "Shares Update Root Content",
					"action": "Update content for the navigation property root in shares",
					"description": "The content stream, if the item represents a file.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/shares/{{$parameter[\"sharedDriveItem-id\"]}}/root/content"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/driveItem",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Drive Item"
					],
					"operation": [
						"Shares Get Drive Item"
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
						"Shares Drive Item"
					],
					"operation": [
						"Shares Get Drive Item"
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
						"Shares Drive Item"
					],
					"operation": [
						"Shares Get Drive Item"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/driveItem/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Drive Item"
					],
					"operation": [
						"Shares Get Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /shares/{sharedDriveItem-id}/driveItem/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Drive Item"
					],
					"operation": [
						"Shares Update Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /shares/{sharedDriveItem-id}/driveItem/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Drive Item"
					],
					"operation": [
						"Shares Update Drive Item Content"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/items",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Drive Item"
					],
					"operation": [
						"Shares List Items"
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
						"Shares Drive Item"
					],
					"operation": [
						"Shares List Items"
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
						"Shares Drive Item"
					],
					"operation": [
						"Shares List Items"
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
						"Shares Drive Item"
					],
					"operation": [
						"Shares List Items"
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
						"Shares Drive Item"
					],
					"operation": [
						"Shares List Items"
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
						"Shares Drive Item"
					],
					"operation": [
						"Shares List Items"
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
						"Shares Drive Item"
					],
					"operation": [
						"Shares List Items"
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
						"Shares Drive Item"
					],
					"operation": [
						"Shares List Items"
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
						"Shares Drive Item"
					],
					"operation": [
						"Shares List Items"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/items/{driveItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Drive Item"
					],
					"operation": [
						"Shares Get Items"
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
						"Shares Drive Item"
					],
					"operation": [
						"Shares Get Items"
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
						"Shares Drive Item"
					],
					"operation": [
						"Shares Get Items"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/items/{driveItem-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Drive Item"
					],
					"operation": [
						"Shares Get Items Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /shares/{sharedDriveItem-id}/items/{driveItem-id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Drive Item"
					],
					"operation": [
						"Shares Update Items Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /shares/{sharedDriveItem-id}/items/{driveItem-id}/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Drive Item"
					],
					"operation": [
						"Shares Update Items Content"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/root",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Drive Item"
					],
					"operation": [
						"Shares Get Root"
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
						"Shares Drive Item"
					],
					"operation": [
						"Shares Get Root"
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
						"Shares Drive Item"
					],
					"operation": [
						"Shares Get Root"
					]
				}
			}
		},
		{
			"displayName": "GET /shares/{sharedDriveItem-id}/root/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Drive Item"
					],
					"operation": [
						"Shares Get Root Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /shares/{sharedDriveItem-id}/root/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Drive Item"
					],
					"operation": [
						"Shares Update Root Content"
					]
				}
			}
		},
		{
			"displayName": "PUT /shares/{sharedDriveItem-id}/root/content<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Shares Drive Item"
					],
					"operation": [
						"Shares Update Root Content"
					]
				}
			}
		},
];
