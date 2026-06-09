import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementCertificateConnectorDetailsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Certificate Connector Details"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Certificate Connector Details",
					"value": "Device Management List Certificate Connector Details",
					"action": "Get certificateConnectorDetails from deviceManagement",
					"description": "Collection of certificate connector details, each associated with a corresponding Intune Certificate Connector.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/certificateConnectorDetails"
						}
					}
				},
				{
					"name": "Device Management Create Certificate Connector Details",
					"value": "Device Management Create Certificate Connector Details",
					"action": "Create new navigation property to certificateConnectorDetails for deviceManagement",
					"description": "Create new navigation property to certificateConnectorDetails for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/certificateConnectorDetails"
						}
					}
				},
				{
					"name": "Device Management Delete Certificate Connector Details",
					"value": "Device Management Delete Certificate Connector Details",
					"action": "Delete navigation property certificateConnectorDetails for deviceManagement",
					"description": "Delete navigation property certificateConnectorDetails for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/certificateConnectorDetails/{{$parameter[\"certificateConnectorDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Certificate Connector Details",
					"value": "Device Management Get Certificate Connector Details",
					"action": "Get certificateConnectorDetails from deviceManagement",
					"description": "Collection of certificate connector details, each associated with a corresponding Intune Certificate Connector.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/certificateConnectorDetails/{{$parameter[\"certificateConnectorDetails-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Certificate Connector Details",
					"value": "Device Management Update Certificate Connector Details",
					"action": "Update the navigation property certificateConnectorDetails in deviceManagement",
					"description": "Update the navigation property certificateConnectorDetails in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/certificateConnectorDetails/{{$parameter[\"certificateConnectorDetails-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/certificateConnectorDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Certificate Connector Details"
					],
					"operation": [
						"Device Management List Certificate Connector Details"
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
						"Device Management Certificate Connector Details"
					],
					"operation": [
						"Device Management List Certificate Connector Details"
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
						"Device Management Certificate Connector Details"
					],
					"operation": [
						"Device Management List Certificate Connector Details"
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
						"Device Management Certificate Connector Details"
					],
					"operation": [
						"Device Management List Certificate Connector Details"
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
						"Device Management Certificate Connector Details"
					],
					"operation": [
						"Device Management List Certificate Connector Details"
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
						"Device Management Certificate Connector Details"
					],
					"operation": [
						"Device Management List Certificate Connector Details"
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
						"Device Management Certificate Connector Details"
					],
					"operation": [
						"Device Management List Certificate Connector Details"
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
						"Device Management Certificate Connector Details"
					],
					"operation": [
						"Device Management List Certificate Connector Details"
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
						"Device Management Certificate Connector Details"
					],
					"operation": [
						"Device Management List Certificate Connector Details"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/certificateConnectorDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Certificate Connector Details"
					],
					"operation": [
						"Device Management Create Certificate Connector Details"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/certificateConnectorDetails<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Certificate Connector Details"
					],
					"operation": [
						"Device Management Create Certificate Connector Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Certificate Connector Details"
					],
					"operation": [
						"Device Management Delete Certificate Connector Details"
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
						"Device Management Certificate Connector Details"
					],
					"operation": [
						"Device Management Delete Certificate Connector Details"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Certificate Connector Details"
					],
					"operation": [
						"Device Management Get Certificate Connector Details"
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
						"Device Management Certificate Connector Details"
					],
					"operation": [
						"Device Management Get Certificate Connector Details"
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
						"Device Management Certificate Connector Details"
					],
					"operation": [
						"Device Management Get Certificate Connector Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Certificate Connector Details"
					],
					"operation": [
						"Device Management Update Certificate Connector Details"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/certificateConnectorDetails/{certificateConnectorDetails-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Certificate Connector Details"
					],
					"operation": [
						"Device Management Update Certificate Connector Details"
					]
				}
			}
		},
];
