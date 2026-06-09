import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDetectedAppDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Detected App"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Detected Apps",
					"value": "Device Management List Detected Apps",
					"action": "Get detectedApps from deviceManagement",
					"description": "The list of detected apps associated with a device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/detectedApps"
						}
					}
				},
				{
					"name": "Device Management Create Detected Apps",
					"value": "Device Management Create Detected Apps",
					"action": "Create new navigation property to detectedApps for deviceManagement",
					"description": "Create new navigation property to detectedApps for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/detectedApps"
						}
					}
				},
				{
					"name": "Device Management Delete Detected Apps",
					"value": "Device Management Delete Detected Apps",
					"action": "Delete navigation property detectedApps for deviceManagement",
					"description": "Delete navigation property detectedApps for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/detectedApps/{{$parameter[\"detectedApp-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Detected Apps",
					"value": "Device Management Get Detected Apps",
					"action": "Get detectedApps from deviceManagement",
					"description": "The list of detected apps associated with a device.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/detectedApps/{{$parameter[\"detectedApp-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Detected Apps",
					"value": "Device Management Update Detected Apps",
					"action": "Update the navigation property detectedApps in deviceManagement",
					"description": "Update the navigation property detectedApps in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/detectedApps/{{$parameter[\"detectedApp-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Detected Apps List Managed Devices",
					"value": "Device Management Detected Apps List Managed Devices",
					"action": "Get managedDevices from deviceManagement",
					"description": "The devices that have the discovered application installed",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/detectedApps/{{$parameter[\"detectedApp-id\"]}}/managedDevices"
						}
					}
				},
				{
					"name": "Device Management Detected Apps Get Managed Devices",
					"value": "Device Management Detected Apps Get Managed Devices",
					"action": "Get managedDevices from deviceManagement",
					"description": "The devices that have the discovered application installed",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/detectedApps/{{$parameter[\"detectedApp-id\"]}}/managedDevices/{{$parameter[\"managedDevice-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/detectedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Detected App"
					],
					"operation": [
						"Device Management List Detected Apps"
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
						"Device Management Detected App"
					],
					"operation": [
						"Device Management List Detected Apps"
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
						"Device Management Detected App"
					],
					"operation": [
						"Device Management List Detected Apps"
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
						"Device Management Detected App"
					],
					"operation": [
						"Device Management List Detected Apps"
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
						"Device Management Detected App"
					],
					"operation": [
						"Device Management List Detected Apps"
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
						"Device Management Detected App"
					],
					"operation": [
						"Device Management List Detected Apps"
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
						"Device Management Detected App"
					],
					"operation": [
						"Device Management List Detected Apps"
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
						"Device Management Detected App"
					],
					"operation": [
						"Device Management List Detected Apps"
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
						"Device Management Detected App"
					],
					"operation": [
						"Device Management List Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/detectedApps",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Detected App"
					],
					"operation": [
						"Device Management Create Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/detectedApps<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Detected App"
					],
					"operation": [
						"Device Management Create Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/detectedApps/{detectedApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Detected App"
					],
					"operation": [
						"Device Management Delete Detected Apps"
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
						"Device Management Detected App"
					],
					"operation": [
						"Device Management Delete Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/detectedApps/{detectedApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Detected App"
					],
					"operation": [
						"Device Management Get Detected Apps"
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
						"Device Management Detected App"
					],
					"operation": [
						"Device Management Get Detected Apps"
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
						"Device Management Detected App"
					],
					"operation": [
						"Device Management Get Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/detectedApps/{detectedApp-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Detected App"
					],
					"operation": [
						"Device Management Update Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/detectedApps/{detectedApp-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Detected App"
					],
					"operation": [
						"Device Management Update Detected Apps"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/detectedApps/{detectedApp-id}/managedDevices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Detected App"
					],
					"operation": [
						"Device Management Detected Apps List Managed Devices"
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
						"Device Management Detected App"
					],
					"operation": [
						"Device Management Detected Apps List Managed Devices"
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
						"Device Management Detected App"
					],
					"operation": [
						"Device Management Detected Apps List Managed Devices"
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
						"Device Management Detected App"
					],
					"operation": [
						"Device Management Detected Apps List Managed Devices"
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
						"Device Management Detected App"
					],
					"operation": [
						"Device Management Detected Apps List Managed Devices"
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
						"Device Management Detected App"
					],
					"operation": [
						"Device Management Detected Apps List Managed Devices"
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
						"Device Management Detected App"
					],
					"operation": [
						"Device Management Detected Apps List Managed Devices"
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
						"Device Management Detected App"
					],
					"operation": [
						"Device Management Detected Apps List Managed Devices"
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
						"Device Management Detected App"
					],
					"operation": [
						"Device Management Detected Apps List Managed Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/detectedApps/{detectedApp-id}/managedDevices/{managedDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Detected App"
					],
					"operation": [
						"Device Management Detected Apps Get Managed Devices"
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
						"Device Management Detected App"
					],
					"operation": [
						"Device Management Detected Apps Get Managed Devices"
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
						"Device Management Detected App"
					],
					"operation": [
						"Device Management Detected Apps Get Managed Devices"
					]
				}
			}
		},
];
