import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceCompliancePolicyDeviceStateSummaryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy Device State Summary"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Delete Device Compliance Policy Device State Summary",
					"value": "Device Management Delete Device Compliance Policy Device State Summary",
					"action": "Delete navigation property deviceCompliancePolicyDeviceStateSummary for deviceManagement",
					"description": "Delete navigation property deviceCompliancePolicyDeviceStateSummary for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceCompliancePolicyDeviceStateSummary"
						}
					}
				},
				{
					"name": "Device Management Get Device Compliance Policy Device State Summary",
					"value": "Device Management Get Device Compliance Policy Device State Summary",
					"action": "Get deviceCompliancePolicyDeviceStateSummary from deviceManagement",
					"description": "The device compliance state summary for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCompliancePolicyDeviceStateSummary"
						}
					}
				},
				{
					"name": "Device Management Update Device Compliance Policy Device State Summary",
					"value": "Device Management Update Device Compliance Policy Device State Summary",
					"action": "Update the navigation property deviceCompliancePolicyDeviceStateSummary in deviceManagement",
					"description": "Update the navigation property deviceCompliancePolicyDeviceStateSummary in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceCompliancePolicyDeviceStateSummary"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceManagement/deviceCompliancePolicyDeviceStateSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy Device State Summary"
					],
					"operation": [
						"Device Management Delete Device Compliance Policy Device State Summary"
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
						"Device Management Device Compliance Policy Device State Summary"
					],
					"operation": [
						"Device Management Delete Device Compliance Policy Device State Summary"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceCompliancePolicyDeviceStateSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy Device State Summary"
					],
					"operation": [
						"Device Management Get Device Compliance Policy Device State Summary"
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
						"Device Management Device Compliance Policy Device State Summary"
					],
					"operation": [
						"Device Management Get Device Compliance Policy Device State Summary"
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
						"Device Management Device Compliance Policy Device State Summary"
					],
					"operation": [
						"Device Management Get Device Compliance Policy Device State Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicyDeviceStateSummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy Device State Summary"
					],
					"operation": [
						"Device Management Update Device Compliance Policy Device State Summary"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCompliancePolicyDeviceStateSummary<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Compliance Policy Device State Summary"
					],
					"operation": [
						"Device Management Update Device Compliance Policy Device State Summary"
					]
				}
			}
		},
];
