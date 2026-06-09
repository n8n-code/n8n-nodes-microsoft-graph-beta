import type { INodeProperties } from 'n8n-workflow';

export const meExtensionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Me Extension"
					]
				}
			},
			"options": [
				{
					"name": "Me List Extensions",
					"value": "Me List Extensions",
					"action": "Get extensions from me",
					"description": "The collection of open extensions defined for the user. Supports $expand. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/extensions"
						}
					}
				},
				{
					"name": "Me Create Extensions",
					"value": "Me Create Extensions",
					"action": "Create new navigation property to extensions for me",
					"description": "Create new navigation property to extensions for me",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/me/extensions"
						}
					}
				},
				{
					"name": "Me Delete Extensions",
					"value": "Me Delete Extensions",
					"action": "Delete navigation property extensions for me",
					"description": "Delete navigation property extensions for me",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/me/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Get Extensions",
					"value": "Me Get Extensions",
					"action": "Get extensions from me",
					"description": "The collection of open extensions defined for the user. Supports $expand. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/me/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Me Update Extensions",
					"value": "Me Update Extensions",
					"action": "Update the navigation property extensions in me",
					"description": "Update the navigation property extensions in me",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/me/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /me/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Extension"
					],
					"operation": [
						"Me List Extensions"
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
						"Me Extension"
					],
					"operation": [
						"Me List Extensions"
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
						"Me Extension"
					],
					"operation": [
						"Me List Extensions"
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
						"Me Extension"
					],
					"operation": [
						"Me List Extensions"
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
						"Me Extension"
					],
					"operation": [
						"Me List Extensions"
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
						"Me Extension"
					],
					"operation": [
						"Me List Extensions"
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
						"Me Extension"
					],
					"operation": [
						"Me List Extensions"
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
						"Me Extension"
					],
					"operation": [
						"Me List Extensions"
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
						"Me Extension"
					],
					"operation": [
						"Me List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Extension"
					],
					"operation": [
						"Me Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /me/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Extension"
					],
					"operation": [
						"Me Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /me/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Extension"
					],
					"operation": [
						"Me Delete Extensions"
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
						"Me Extension"
					],
					"operation": [
						"Me Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /me/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Extension"
					],
					"operation": [
						"Me Get Extensions"
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
						"Me Extension"
					],
					"operation": [
						"Me Get Extensions"
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
						"Me Extension"
					],
					"operation": [
						"Me Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Extension"
					],
					"operation": [
						"Me Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /me/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Me Extension"
					],
					"operation": [
						"Me Update Extensions"
					]
				}
			}
		},
];
