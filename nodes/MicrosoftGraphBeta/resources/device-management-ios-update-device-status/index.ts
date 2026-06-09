import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementIosUpdateDeviceStatusDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Ios Update Device Status"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Ios Update Statuses",
					"value": "Device Management List Ios Update Statuses",
					"action": "Get iosUpdateStatuses from deviceManagement",
					"description": "The IOS software update installation statuses for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/iosUpdateStatuses"
						}
					}
				},
				{
					"name": "Device Management Create Ios Update Statuses",
					"value": "Device Management Create Ios Update Statuses",
					"action": "Create new navigation property to iosUpdateStatuses for deviceManagement",
					"description": "Create new navigation property to iosUpdateStatuses for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/iosUpdateStatuses"
						}
					}
				},
				{
					"name": "Device Management Delete Ios Update Statuses",
					"value": "Device Management Delete Ios Update Statuses",
					"action": "Delete navigation property iosUpdateStatuses for deviceManagement",
					"description": "Delete navigation property iosUpdateStatuses for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/iosUpdateStatuses/{{$parameter[\"iosUpdateDeviceStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Ios Update Statuses",
					"value": "Device Management Get Ios Update Statuses",
					"action": "Get iosUpdateStatuses from deviceManagement",
					"description": "The IOS software update installation statuses for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/iosUpdateStatuses/{{$parameter[\"iosUpdateDeviceStatus-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Ios Update Statuses",
					"value": "Device Management Update Ios Update Statuses",
					"action": "Update the navigation property iosUpdateStatuses in deviceManagement",
					"description": "Update the navigation property iosUpdateStatuses in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/iosUpdateStatuses/{{$parameter[\"iosUpdateDeviceStatus-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/iosUpdateStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Ios Update Device Status"
					],
					"operation": [
						"Device Management List Ios Update Statuses"
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
						"Device Management Ios Update Device Status"
					],
					"operation": [
						"Device Management List Ios Update Statuses"
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
						"Device Management Ios Update Device Status"
					],
					"operation": [
						"Device Management List Ios Update Statuses"
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
						"Device Management Ios Update Device Status"
					],
					"operation": [
						"Device Management List Ios Update Statuses"
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
						"Device Management Ios Update Device Status"
					],
					"operation": [
						"Device Management List Ios Update Statuses"
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
						"Device Management Ios Update Device Status"
					],
					"operation": [
						"Device Management List Ios Update Statuses"
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
						"Device Management Ios Update Device Status"
					],
					"operation": [
						"Device Management List Ios Update Statuses"
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
						"Device Management Ios Update Device Status"
					],
					"operation": [
						"Device Management List Ios Update Statuses"
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
						"Device Management Ios Update Device Status"
					],
					"operation": [
						"Device Management List Ios Update Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/iosUpdateStatuses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Ios Update Device Status"
					],
					"operation": [
						"Device Management Create Ios Update Statuses"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/iosUpdateStatuses<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Ios Update Device Status"
					],
					"operation": [
						"Device Management Create Ios Update Statuses"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Ios Update Device Status"
					],
					"operation": [
						"Device Management Delete Ios Update Statuses"
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
						"Device Management Ios Update Device Status"
					],
					"operation": [
						"Device Management Delete Ios Update Statuses"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Ios Update Device Status"
					],
					"operation": [
						"Device Management Get Ios Update Statuses"
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
						"Device Management Ios Update Device Status"
					],
					"operation": [
						"Device Management Get Ios Update Statuses"
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
						"Device Management Ios Update Device Status"
					],
					"operation": [
						"Device Management Get Ios Update Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Ios Update Device Status"
					],
					"operation": [
						"Device Management Update Ios Update Statuses"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/iosUpdateStatuses/{iosUpdateDeviceStatus-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Ios Update Device Status"
					],
					"operation": [
						"Device Management Update Ios Update Statuses"
					]
				}
			}
		},
];
