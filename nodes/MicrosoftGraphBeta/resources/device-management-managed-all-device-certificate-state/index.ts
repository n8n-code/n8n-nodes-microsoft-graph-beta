import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementManagedAllDeviceCertificateStateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed All Device Certificate State"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Device Configurations All Managed Device Certificate States",
					"value": "Device Management List Device Configurations All Managed Device Certificate States",
					"action": "Get deviceConfigurationsAllManagedDeviceCertificateStates from deviceManagement",
					"description": "Summary of all certificates for all devices.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates"
						}
					}
				},
				{
					"name": "Device Management Create Device Configurations All Managed Device Certificate States",
					"value": "Device Management Create Device Configurations All Managed Device Certificate States",
					"action": "Create new navigation property to deviceConfigurationsAllManagedDeviceCertificateStates for deviceManagement",
					"description": "Create new navigation property to deviceConfigurationsAllManagedDeviceCertificateStates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates"
						}
					}
				},
				{
					"name": "Device Management Delete Device Configurations All Managed Device Certificate States",
					"value": "Device Management Delete Device Configurations All Managed Device Certificate States",
					"action": "Delete navigation property deviceConfigurationsAllManagedDeviceCertificateStates for deviceManagement",
					"description": "Delete navigation property deviceConfigurationsAllManagedDeviceCertificateStates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{{$parameter[\"managedAllDeviceCertificateState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Device Configurations All Managed Device Certificate States",
					"value": "Device Management Get Device Configurations All Managed Device Certificate States",
					"action": "Get deviceConfigurationsAllManagedDeviceCertificateStates from deviceManagement",
					"description": "Summary of all certificates for all devices.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{{$parameter[\"managedAllDeviceCertificateState-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Device Configurations All Managed Device Certificate States",
					"value": "Device Management Update Device Configurations All Managed Device Certificate States",
					"action": "Update the navigation property deviceConfigurationsAllManagedDeviceCertificateStates in deviceManagement",
					"description": "Update the navigation property deviceConfigurationsAllManagedDeviceCertificateStates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{{$parameter[\"managedAllDeviceCertificateState-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed All Device Certificate State"
					],
					"operation": [
						"Device Management List Device Configurations All Managed Device Certificate States"
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
						"Device Management Managed All Device Certificate State"
					],
					"operation": [
						"Device Management List Device Configurations All Managed Device Certificate States"
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
						"Device Management Managed All Device Certificate State"
					],
					"operation": [
						"Device Management List Device Configurations All Managed Device Certificate States"
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
						"Device Management Managed All Device Certificate State"
					],
					"operation": [
						"Device Management List Device Configurations All Managed Device Certificate States"
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
						"Device Management Managed All Device Certificate State"
					],
					"operation": [
						"Device Management List Device Configurations All Managed Device Certificate States"
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
						"Device Management Managed All Device Certificate State"
					],
					"operation": [
						"Device Management List Device Configurations All Managed Device Certificate States"
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
						"Device Management Managed All Device Certificate State"
					],
					"operation": [
						"Device Management List Device Configurations All Managed Device Certificate States"
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
						"Device Management Managed All Device Certificate State"
					],
					"operation": [
						"Device Management List Device Configurations All Managed Device Certificate States"
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
						"Device Management Managed All Device Certificate State"
					],
					"operation": [
						"Device Management List Device Configurations All Managed Device Certificate States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed All Device Certificate State"
					],
					"operation": [
						"Device Management Create Device Configurations All Managed Device Certificate States"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed All Device Certificate State"
					],
					"operation": [
						"Device Management Create Device Configurations All Managed Device Certificate States"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed All Device Certificate State"
					],
					"operation": [
						"Device Management Delete Device Configurations All Managed Device Certificate States"
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
						"Device Management Managed All Device Certificate State"
					],
					"operation": [
						"Device Management Delete Device Configurations All Managed Device Certificate States"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed All Device Certificate State"
					],
					"operation": [
						"Device Management Get Device Configurations All Managed Device Certificate States"
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
						"Device Management Managed All Device Certificate State"
					],
					"operation": [
						"Device Management Get Device Configurations All Managed Device Certificate States"
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
						"Device Management Managed All Device Certificate State"
					],
					"operation": [
						"Device Management Get Device Configurations All Managed Device Certificate States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed All Device Certificate State"
					],
					"operation": [
						"Device Management Update Device Configurations All Managed Device Certificate States"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceConfigurationsAllManagedDeviceCertificateStates/{managedAllDeviceCertificateState-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Managed All Device Certificate State"
					],
					"operation": [
						"Device Management Update Device Configurations All Managed Device Certificate States"
					]
				}
			}
		},
];
