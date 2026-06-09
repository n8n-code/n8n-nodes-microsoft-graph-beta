import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementMonitoringDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Monitoring"
					]
				}
			},
			"options": [
				{
					"name": "Device Management Delete Monitoring",
					"value": "Device Management Delete Monitoring",
					"action": "Delete navigation property monitoring for deviceManagement",
					"description": "Delete navigation property monitoring for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/monitoring"
						}
					}
				},
				{
					"name": "Device Management Get Monitoring",
					"value": "Device Management Get Monitoring",
					"action": "Get monitoring from deviceManagement",
					"description": "Get monitoring from deviceManagement",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/monitoring"
						}
					}
				},
				{
					"name": "Device Management Update Monitoring",
					"value": "Device Management Update Monitoring",
					"action": "Update the navigation property monitoring in deviceManagement",
					"description": "Update the navigation property monitoring in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/monitoring"
						}
					}
				},
				{
					"name": "Device Management Monitoring List Alert Records",
					"value": "Device Management Monitoring List Alert Records",
					"action": "List alertRecords",
					"description": "Get a list of the alertRecord objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/monitoring/alertRecords"
						}
					}
				},
				{
					"name": "Device Management Monitoring Create Alert Records",
					"value": "Device Management Monitoring Create Alert Records",
					"action": "Create new navigation property to alertRecords for deviceManagement",
					"description": "Create new navigation property to alertRecords for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/monitoring/alertRecords"
						}
					}
				},
				{
					"name": "Device Management Monitoring Delete Alert Records",
					"value": "Device Management Monitoring Delete Alert Records",
					"action": "Delete navigation property alertRecords for deviceManagement",
					"description": "Delete navigation property alertRecords for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/monitoring/alertRecords/{{$parameter[\"alertRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Monitoring Get Alert Records",
					"value": "Device Management Monitoring Get Alert Records",
					"action": "Get alertRecords from deviceManagement",
					"description": "The collection of records of alert events.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/monitoring/alertRecords/{{$parameter[\"alertRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Monitoring Update Alert Records",
					"value": "Device Management Monitoring Update Alert Records",
					"action": "Update the navigation property alertRecords in deviceManagement",
					"description": "Update the navigation property alertRecords in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/monitoring/alertRecords/{{$parameter[\"alertRecord-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Monitoring List Alert Rules",
					"value": "Device Management Monitoring List Alert Rules",
					"action": "List alertRules",
					"description": "Get a list of the alertRule objects and their properties.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/monitoring/alertRules"
						}
					}
				},
				{
					"name": "Device Management Monitoring Create Alert Rules",
					"value": "Device Management Monitoring Create Alert Rules",
					"action": "Create alertRule",
					"description": "Create an alertRule object.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/monitoring/alertRules"
						}
					}
				},
				{
					"name": "Device Management Monitoring Delete Alert Rules",
					"value": "Device Management Monitoring Delete Alert Rules",
					"action": "Delete navigation property alertRules for deviceManagement",
					"description": "Delete navigation property alertRules for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/monitoring/alertRules/{{$parameter[\"alertRule-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Monitoring Get Alert Rules",
					"value": "Device Management Monitoring Get Alert Rules",
					"action": "Get alertRules from deviceManagement",
					"description": "The collection of alert rules.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/monitoring/alertRules/{{$parameter[\"alertRule-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Monitoring Update Alert Rules",
					"value": "Device Management Monitoring Update Alert Rules",
					"action": "Update the navigation property alertRules in deviceManagement",
					"description": "Update the navigation property alertRules in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/monitoring/alertRules/{{$parameter[\"alertRule-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /deviceManagement/monitoring",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Delete Monitoring"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Delete Monitoring"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/monitoring",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Get Monitoring"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Get Monitoring"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Get Monitoring"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/monitoring",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Update Monitoring"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/monitoring<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Update Monitoring"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/monitoring/alertRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring List Alert Records"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring List Alert Records"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring List Alert Records"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring List Alert Records"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring List Alert Records"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring List Alert Records"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring List Alert Records"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring List Alert Records"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring List Alert Records"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/monitoring/alertRecords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring Create Alert Records"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/monitoring/alertRecords<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring Create Alert Records"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/monitoring/alertRecords/{alertRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring Delete Alert Records"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring Delete Alert Records"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/monitoring/alertRecords/{alertRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring Get Alert Records"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring Get Alert Records"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring Get Alert Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/monitoring/alertRecords/{alertRecord-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring Update Alert Records"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/monitoring/alertRecords/{alertRecord-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring Update Alert Records"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/monitoring/alertRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring List Alert Rules"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring List Alert Rules"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring List Alert Rules"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring List Alert Rules"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring List Alert Rules"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring List Alert Rules"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring List Alert Rules"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring List Alert Rules"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring List Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/monitoring/alertRules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring Create Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/monitoring/alertRules<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring Create Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/monitoring/alertRules/{alertRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring Delete Alert Rules"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring Delete Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/monitoring/alertRules/{alertRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring Get Alert Rules"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring Get Alert Rules"
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
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring Get Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/monitoring/alertRules/{alertRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring Update Alert Rules"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/monitoring/alertRules/{alertRule-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Monitoring"
					],
					"operation": [
						"Device Management Monitoring Update Alert Rules"
					]
				}
			}
		},
];
