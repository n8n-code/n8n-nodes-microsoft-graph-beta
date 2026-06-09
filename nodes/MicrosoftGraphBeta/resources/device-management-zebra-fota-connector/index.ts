import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementZebraFotaConnectorDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Zebra Fota Connector"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Delete Zebra Fota Connector",
					"value": "Device Management Delete Zebra Fota Connector",
					"action": "Delete navigation property zebraFotaConnector for deviceManagement",
					"description": "Delete navigation property zebraFotaConnector for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/zebraFotaConnector"
						}
					}
				},
				{
					"name": "Device Management Get Zebra Fota Connector",
					"value": "Device Management Get Zebra Fota Connector",
					"action": "Get zebraFotaConnector from deviceManagement",
					"description": "The singleton ZebraFotaConnector associated with account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/zebraFotaConnector"
						}
					}
				},
				{
					"name": "Device Management Update Zebra Fota Connector",
					"value": "Device Management Update Zebra Fota Connector",
					"action": "Update the navigation property zebraFotaConnector in deviceManagement",
					"description": "Update the navigation property zebraFotaConnector in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/zebraFotaConnector"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceManagement/zebraFotaConnector",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Zebra Fota Connector"
					],
					"operation": [
						"Device Management Delete Zebra Fota Connector"
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
						"Device Management Zebra Fota Connector"
					],
					"operation": [
						"Device Management Delete Zebra Fota Connector"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/zebraFotaConnector",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Zebra Fota Connector"
					],
					"operation": [
						"Device Management Get Zebra Fota Connector"
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
						"Device Management Zebra Fota Connector"
					],
					"operation": [
						"Device Management Get Zebra Fota Connector"
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
						"Device Management Zebra Fota Connector"
					],
					"operation": [
						"Device Management Get Zebra Fota Connector"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/zebraFotaConnector",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Zebra Fota Connector"
					],
					"operation": [
						"Device Management Update Zebra Fota Connector"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/zebraFotaConnector<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Zebra Fota Connector"
					],
					"operation": [
						"Device Management Update Zebra Fota Connector"
					]
				}
			}
		},
];
