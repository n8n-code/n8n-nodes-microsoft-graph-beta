import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementComanagementEligibleDeviceDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Comanagement Eligible Device"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Comanagement Eligible Devices",
					"value": "Device Management List Comanagement Eligible Devices",
					"action": "Get comanagementEligibleDevices from deviceManagement",
					"description": "The list of co-management eligible devices report",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagementEligibleDevices"
						}
					}
				},
				{
					"name": "Device Management Create Comanagement Eligible Devices",
					"value": "Device Management Create Comanagement Eligible Devices",
					"action": "Create new navigation property to comanagementEligibleDevices for deviceManagement",
					"description": "Create new navigation property to comanagementEligibleDevices for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/comanagementEligibleDevices"
						}
					}
				},
				{
					"name": "Device Management Delete Comanagement Eligible Devices",
					"value": "Device Management Delete Comanagement Eligible Devices",
					"action": "Delete navigation property comanagementEligibleDevices for deviceManagement",
					"description": "Delete navigation property comanagementEligibleDevices for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/comanagementEligibleDevices/{{$parameter[\"comanagementEligibleDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Comanagement Eligible Devices",
					"value": "Device Management Get Comanagement Eligible Devices",
					"action": "Get comanagementEligibleDevices from deviceManagement",
					"description": "The list of co-management eligible devices report",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/comanagementEligibleDevices/{{$parameter[\"comanagementEligibleDevice-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Comanagement Eligible Devices",
					"value": "Device Management Update Comanagement Eligible Devices",
					"action": "Update the navigation property comanagementEligibleDevices in deviceManagement",
					"description": "Update the navigation property comanagementEligibleDevices in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/comanagementEligibleDevices/{{$parameter[\"comanagementEligibleDevice-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/comanagementEligibleDevices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Comanagement Eligible Device"
					],
					"operation": [
						"Device Management List Comanagement Eligible Devices"
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
						"Device Management Comanagement Eligible Device"
					],
					"operation": [
						"Device Management List Comanagement Eligible Devices"
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
						"Device Management Comanagement Eligible Device"
					],
					"operation": [
						"Device Management List Comanagement Eligible Devices"
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
						"Device Management Comanagement Eligible Device"
					],
					"operation": [
						"Device Management List Comanagement Eligible Devices"
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
						"Device Management Comanagement Eligible Device"
					],
					"operation": [
						"Device Management List Comanagement Eligible Devices"
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
						"Device Management Comanagement Eligible Device"
					],
					"operation": [
						"Device Management List Comanagement Eligible Devices"
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
						"Device Management Comanagement Eligible Device"
					],
					"operation": [
						"Device Management List Comanagement Eligible Devices"
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
						"Device Management Comanagement Eligible Device"
					],
					"operation": [
						"Device Management List Comanagement Eligible Devices"
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
						"Device Management Comanagement Eligible Device"
					],
					"operation": [
						"Device Management List Comanagement Eligible Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagementEligibleDevices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Comanagement Eligible Device"
					],
					"operation": [
						"Device Management Create Comanagement Eligible Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/comanagementEligibleDevices<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Comanagement Eligible Device"
					],
					"operation": [
						"Device Management Create Comanagement Eligible Devices"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Comanagement Eligible Device"
					],
					"operation": [
						"Device Management Delete Comanagement Eligible Devices"
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
						"Device Management Comanagement Eligible Device"
					],
					"operation": [
						"Device Management Delete Comanagement Eligible Devices"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Comanagement Eligible Device"
					],
					"operation": [
						"Device Management Get Comanagement Eligible Devices"
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
						"Device Management Comanagement Eligible Device"
					],
					"operation": [
						"Device Management Get Comanagement Eligible Devices"
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
						"Device Management Comanagement Eligible Device"
					],
					"operation": [
						"Device Management Get Comanagement Eligible Devices"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Comanagement Eligible Device"
					],
					"operation": [
						"Device Management Update Comanagement Eligible Devices"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/comanagementEligibleDevices/{comanagementEligibleDevice-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Comanagement Eligible Device"
					],
					"operation": [
						"Device Management Update Comanagement Eligible Devices"
					]
				}
			}
		},
];
