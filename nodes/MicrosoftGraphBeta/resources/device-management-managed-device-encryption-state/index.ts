import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementManagedDeviceEncryptionStateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device Encryption State"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Managed Device Encryption States",
					"value": "Device Management List Managed Device Encryption States",
					"action": "Get managedDeviceEncryptionStates from deviceManagement",
					"description": "Encryption report for devices in this account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDeviceEncryptionStates"
						}
					}
				},
				{
					"name": "Device Management Create Managed Device Encryption States",
					"value": "Device Management Create Managed Device Encryption States",
					"action": "Create new navigation property to managedDeviceEncryptionStates for deviceManagement",
					"description": "Create new navigation property to managedDeviceEncryptionStates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/managedDeviceEncryptionStates"
						}
					}
				},
				{
					"name": "Device Management Delete Managed Device Encryption States",
					"value": "Device Management Delete Managed Device Encryption States",
					"action": "Delete navigation property managedDeviceEncryptionStates for deviceManagement",
					"description": "Delete navigation property managedDeviceEncryptionStates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/managedDeviceEncryptionStates/{{$parameter[\"managedDeviceEncryptionState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Managed Device Encryption States",
					"value": "Device Management Get Managed Device Encryption States",
					"action": "Get managedDeviceEncryptionStates from deviceManagement",
					"description": "Encryption report for devices in this account",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/managedDeviceEncryptionStates/{{$parameter[\"managedDeviceEncryptionState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Managed Device Encryption States",
					"value": "Device Management Update Managed Device Encryption States",
					"action": "Update the navigation property managedDeviceEncryptionStates in deviceManagement",
					"description": "Update the navigation property managedDeviceEncryptionStates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/managedDeviceEncryptionStates/{{$parameter[\"managedDeviceEncryptionState-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/managedDeviceEncryptionStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device Encryption State"
					],
					"operation": [
						"Device Management List Managed Device Encryption States"
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
						"Device Management Managed Device Encryption State"
					],
					"operation": [
						"Device Management List Managed Device Encryption States"
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
						"Device Management Managed Device Encryption State"
					],
					"operation": [
						"Device Management List Managed Device Encryption States"
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
						"Device Management Managed Device Encryption State"
					],
					"operation": [
						"Device Management List Managed Device Encryption States"
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
						"Device Management Managed Device Encryption State"
					],
					"operation": [
						"Device Management List Managed Device Encryption States"
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
						"Device Management Managed Device Encryption State"
					],
					"operation": [
						"Device Management List Managed Device Encryption States"
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
						"Device Management Managed Device Encryption State"
					],
					"operation": [
						"Device Management List Managed Device Encryption States"
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
						"Device Management Managed Device Encryption State"
					],
					"operation": [
						"Device Management List Managed Device Encryption States"
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
						"Device Management Managed Device Encryption State"
					],
					"operation": [
						"Device Management List Managed Device Encryption States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDeviceEncryptionStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device Encryption State"
					],
					"operation": [
						"Device Management Create Managed Device Encryption States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/managedDeviceEncryptionStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device Encryption State"
					],
					"operation": [
						"Device Management Create Managed Device Encryption States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device Encryption State"
					],
					"operation": [
						"Device Management Delete Managed Device Encryption States"
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
						"Device Management Managed Device Encryption State"
					],
					"operation": [
						"Device Management Delete Managed Device Encryption States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device Encryption State"
					],
					"operation": [
						"Device Management Get Managed Device Encryption States"
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
						"Device Management Managed Device Encryption State"
					],
					"operation": [
						"Device Management Get Managed Device Encryption States"
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
						"Device Management Managed Device Encryption State"
					],
					"operation": [
						"Device Management Get Managed Device Encryption States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device Encryption State"
					],
					"operation": [
						"Device Management Update Managed Device Encryption States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/managedDeviceEncryptionStates/{managedDeviceEncryptionState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed Device Encryption State"
					],
					"operation": [
						"Device Management Update Managed Device Encryption States"
					]
				}
			}
		},
];
