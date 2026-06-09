import type { INodeProperties } from 'n8n-workflow';

export const devicesExtensionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Extension"
					]
				}
			},
			"options": [
				{
					"name": "Devices List Extensions",
					"value": "Devices List Extensions",
					"action": "Get extensions from devices",
					"description": "The collection of open extensions defined for the device. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Devices Create Extensions",
					"value": "Devices Create Extensions",
					"action": "Create new navigation property to extensions for devices",
					"description": "Create new navigation property to extensions for devices",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/extensions"
						}
					}
				},
				{
					"name": "Devices Delete Extensions",
					"value": "Devices Delete Extensions",
					"action": "Delete navigation property extensions for devices",
					"description": "Delete navigation property extensions for devices",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Devices Get Extensions",
					"value": "Devices Get Extensions",
					"action": "Get extensions from devices",
					"description": "The collection of open extensions defined for the device. Read-only. Nullable.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				},
				{
					"name": "Devices Update Extensions",
					"value": "Devices Update Extensions",
					"action": "Update the navigation property extensions in devices",
					"description": "Update the navigation property extensions in devices",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/extensions/{{$parameter[\"extension-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /devices/{device-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Extension"
					],
					"operation": [
						"Devices List Extensions"
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
						"Devices Extension"
					],
					"operation": [
						"Devices List Extensions"
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
						"Devices Extension"
					],
					"operation": [
						"Devices List Extensions"
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
						"Devices Extension"
					],
					"operation": [
						"Devices List Extensions"
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
						"Devices Extension"
					],
					"operation": [
						"Devices List Extensions"
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
						"Devices Extension"
					],
					"operation": [
						"Devices List Extensions"
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
						"Devices Extension"
					],
					"operation": [
						"Devices List Extensions"
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
						"Devices Extension"
					],
					"operation": [
						"Devices List Extensions"
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
						"Devices Extension"
					],
					"operation": [
						"Devices List Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /devices/{device-id}/extensions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Extension"
					],
					"operation": [
						"Devices Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "POST /devices/{device-id}/extensions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Extension"
					],
					"operation": [
						"Devices Create Extensions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /devices/{device-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Extension"
					],
					"operation": [
						"Devices Delete Extensions"
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
						"Devices Extension"
					],
					"operation": [
						"Devices Delete Extensions"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Extension"
					],
					"operation": [
						"Devices Get Extensions"
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
						"Devices Extension"
					],
					"operation": [
						"Devices Get Extensions"
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
						"Devices Extension"
					],
					"operation": [
						"Devices Get Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /devices/{device-id}/extensions/{extension-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Extension"
					],
					"operation": [
						"Devices Update Extensions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /devices/{device-id}/extensions/{extension-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Extension"
					],
					"operation": [
						"Devices Update Extensions"
					]
				}
			}
		},
];
