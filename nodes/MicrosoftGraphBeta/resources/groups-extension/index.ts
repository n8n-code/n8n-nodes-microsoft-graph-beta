import type { INodeProperties } from 'n8n-workflow';

export const groupsExtensionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Extension"
					]
				}
			},
			"options": [
				{
					"name": "Groups List Extensions",
					"value": "Groups List Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the group. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Create Extensions",
					"value": "Groups Create Extensions",
					"action": "Create new navigation property to extensions for groups",
					"description": "Create new navigation property to extensions for groups",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Groups Delete Extensions",
					"value": "Groups Delete Extensions",
					"action": "Delete navigation property extensions for groups",
					"description": "Delete navigation property extensions for groups",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Get Extensions",
					"value": "Groups Get Extensions",
					"action": "Get extensions from groups",
					"description": "The collection of open extensions defined for the group. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Groups Update Extensions",
					"value": "Groups Update Extensions",
					"action": "Update the navigation property extensions in groups",
					"description": "Update the navigation property extensions in groups",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/groups/{{$parameter[\"group-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /groups/{group-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Extension"
					],
					"operation": [
						"Groups List Extensions"
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
						"Groups Extension"
					],
					"operation": [
						"Groups List Extensions"
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
						"Groups Extension"
					],
					"operation": [
						"Groups List Extensions"
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
						"Groups Extension"
					],
					"operation": [
						"Groups List Extensions"
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
						"Groups Extension"
					],
					"operation": [
						"Groups List Extensions"
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
						"Groups Extension"
					],
					"operation": [
						"Groups List Extensions"
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
						"Groups Extension"
					],
					"operation": [
						"Groups List Extensions"
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
						"Groups Extension"
					],
					"operation": [
						"Groups List Extensions"
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
						"Groups Extension"
					],
					"operation": [
						"Groups List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Extension"
					],
					"operation": [
						"Groups Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /groups/{group-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Extension"
					],
					"operation": [
						"Groups Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /groups/{group-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Extension"
					],
					"operation": [
						"Groups Delete Extensions"
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
						"Groups Extension"
					],
					"operation": [
						"Groups Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /groups/{group-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Extension"
					],
					"operation": [
						"Groups Get Extensions"
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
						"Groups Extension"
					],
					"operation": [
						"Groups Get Extensions"
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
						"Groups Extension"
					],
					"operation": [
						"Groups Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Extension"
					],
					"operation": [
						"Groups Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /groups/{group-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Groups Extension"
					],
					"operation": [
						"Groups Update Extensions"
					]
				}
			}
		},
];
