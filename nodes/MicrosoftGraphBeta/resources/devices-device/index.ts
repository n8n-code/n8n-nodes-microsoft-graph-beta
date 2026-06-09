import type { INodeProperties } from 'n8n-workflow';

export const devicesDeviceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Device"
					]
				}
			},
			"options": [
				{
					"name": "Devices Device List Device",
					"value": "Devices Device List Device",
					"action": "List devices",
					"description": "Retrieve a list of devices registered in the directory. ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices"
						}
					}
				},
				{
					"name": "Devices Device Create Device",
					"value": "Devices Device Create Device",
					"action": "Create device",
					"description": "Create a new device.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/devices"
						}
					}
				},
				{
					"name": "Devices Device Delete Device",
					"value": "Devices Device Delete Device",
					"action": "Delete device",
					"description": "Delete a registered device.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/devices/{{$parameter[\"device-id\"]}}"
						}
					}
				},
				{
					"name": "Devices Device Get Device",
					"value": "Devices Device Get Device",
					"action": "Get device",
					"description": "Get the properties and relationships of a device object. Since the **device** resource supports extensions, you can also use the `GET` operation to get custom properties and extension data in a **device** instance.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}"
						}
					}
				},
				{
					"name": "Devices Device Update Device",
					"value": "Devices Device Update Device",
					"action": "Update device",
					"description": "Update the properties of a device. Only certain properties of a device can be updated through approved Mobile Device Management (MDM) apps.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/devices/{{$parameter[\"device-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /devices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Device"
					],
					"operation": [
						"Devices Device List Device"
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
						"Devices Device"
					],
					"operation": [
						"Devices Device List Device"
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
						"Devices Device"
					],
					"operation": [
						"Devices Device List Device"
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
						"Devices Device"
					],
					"operation": [
						"Devices Device List Device"
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
						"Devices Device"
					],
					"operation": [
						"Devices Device List Device"
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
						"Devices Device"
					],
					"operation": [
						"Devices Device List Device"
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
						"Devices Device"
					],
					"operation": [
						"Devices Device List Device"
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
						"Devices Device"
					],
					"operation": [
						"Devices Device List Device"
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
						"Devices Device"
					],
					"operation": [
						"Devices Device List Device"
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
						"Devices Device"
					],
					"operation": [
						"Devices Device List Device"
					]
				}
			}
		},
		{
			"displayName": "POST /devices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Device"
					],
					"operation": [
						"Devices Device Create Device"
					]
				}
			}
		},
		{
			"displayName": "POST /devices<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Device"
					],
					"operation": [
						"Devices Device Create Device"
					]
				}
			}
		},
		{
			"displayName": "DELETE /devices/{device-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Device"
					],
					"operation": [
						"Devices Device Delete Device"
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
						"Devices Device"
					],
					"operation": [
						"Devices Device Delete Device"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Device"
					],
					"operation": [
						"Devices Device Get Device"
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
						"Devices Device"
					],
					"operation": [
						"Devices Device Get Device"
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
						"Devices Device"
					],
					"operation": [
						"Devices Device Get Device"
					]
				}
			}
		},
		{
			"displayName": "PATCH /devices/{device-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Device"
					],
					"operation": [
						"Devices Device Update Device"
					]
				}
			}
		},
		{
			"displayName": "PATCH /devices/{device-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Device"
					],
					"operation": [
						"Devices Device Update Device"
					]
				}
			}
		},
];
