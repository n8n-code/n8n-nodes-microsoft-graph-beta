import type { INodeProperties } from 'n8n-workflow';

export const devicesCommandDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Command"
					]
				}
			},
			"options": [
				{
					"name": "Devices List Commands",
					"value": "Devices List Commands",
					"action": "Get commands from devices",
					"description": "Set of commands sent to this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/commands"
						}
					}
				},
				{
					"name": "Devices Create Commands",
					"value": "Devices Create Commands",
					"action": "Create new navigation property to commands for devices",
					"description": "Create new navigation property to commands for devices",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/commands"
						}
					}
				},
				{
					"name": "Devices Delete Commands",
					"value": "Devices Delete Commands",
					"action": "Delete navigation property commands for devices",
					"description": "Delete navigation property commands for devices",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/commands/{{$parameter[\"command-id\"]}}"
						}
					}
				},
				{
					"name": "Devices Get Commands",
					"value": "Devices Get Commands",
					"action": "Get commands from devices",
					"description": "Set of commands sent to this device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/commands/{{$parameter[\"command-id\"]}}"
						}
					}
				},
				{
					"name": "Devices Update Commands",
					"value": "Devices Update Commands",
					"action": "Update the navigation property commands in devices",
					"description": "Update the navigation property commands in devices",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/commands/{{$parameter[\"command-id\"]}}"
						}
					}
				},
				{
					"name": "Devices Commands Get Responsepayload",
					"value": "Devices Commands Get Responsepayload",
					"action": "Get responsepayload from devices",
					"description": "Get responsepayload from devices",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/devices/{{$parameter[\"device-id\"]}}/commands/{{$parameter[\"command-id\"]}}/responsepayload"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /devices/{device-id}/commands",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Command"
					],
					"operation": [
						"Devices List Commands"
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
						"Devices Command"
					],
					"operation": [
						"Devices List Commands"
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
						"Devices Command"
					],
					"operation": [
						"Devices List Commands"
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
						"Devices Command"
					],
					"operation": [
						"Devices List Commands"
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
						"Devices Command"
					],
					"operation": [
						"Devices List Commands"
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
						"Devices Command"
					],
					"operation": [
						"Devices List Commands"
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
						"Devices Command"
					],
					"operation": [
						"Devices List Commands"
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
						"Devices Command"
					],
					"operation": [
						"Devices List Commands"
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
						"Devices Command"
					],
					"operation": [
						"Devices List Commands"
					]
				}
			}
		},
		{
			"displayName": "POST /devices/{device-id}/commands",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Command"
					],
					"operation": [
						"Devices Create Commands"
					]
				}
			}
		},
		{
			"displayName": "POST /devices/{device-id}/commands<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Command"
					],
					"operation": [
						"Devices Create Commands"
					]
				}
			}
		},
		{
			"displayName": "DELETE /devices/{device-id}/commands/{command-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Command"
					],
					"operation": [
						"Devices Delete Commands"
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
						"Devices Command"
					],
					"operation": [
						"Devices Delete Commands"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/commands/{command-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Command"
					],
					"operation": [
						"Devices Get Commands"
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
						"Devices Command"
					],
					"operation": [
						"Devices Get Commands"
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
						"Devices Command"
					],
					"operation": [
						"Devices Get Commands"
					]
				}
			}
		},
		{
			"displayName": "PATCH /devices/{device-id}/commands/{command-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Command"
					],
					"operation": [
						"Devices Update Commands"
					]
				}
			}
		},
		{
			"displayName": "PATCH /devices/{device-id}/commands/{command-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Command"
					],
					"operation": [
						"Devices Update Commands"
					]
				}
			}
		},
		{
			"displayName": "GET /devices/{device-id}/commands/{command-id}/responsepayload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Devices Command"
					],
					"operation": [
						"Devices Commands Get Responsepayload"
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
						"Devices Command"
					],
					"operation": [
						"Devices Commands Get Responsepayload"
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
						"Devices Command"
					],
					"operation": [
						"Devices Commands Get Responsepayload"
					]
				}
			}
		},
];
