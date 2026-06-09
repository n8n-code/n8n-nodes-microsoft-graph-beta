import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementRemoteAssistancePartnerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Remote Assistance Partner"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Remote Assistance Partners",
					"value": "Device Management List Remote Assistance Partners",
					"action": "Get remoteAssistancePartners from deviceManagement",
					"description": "The remote assist partners.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/remoteAssistancePartners"
						}
					}
				},
				{
					"name": "Device Management Create Remote Assistance Partners",
					"value": "Device Management Create Remote Assistance Partners",
					"action": "Create new navigation property to remoteAssistancePartners for deviceManagement",
					"description": "Create new navigation property to remoteAssistancePartners for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/remoteAssistancePartners"
						}
					}
				},
				{
					"name": "Device Management Delete Remote Assistance Partners",
					"value": "Device Management Delete Remote Assistance Partners",
					"action": "Delete navigation property remoteAssistancePartners for deviceManagement",
					"description": "Delete navigation property remoteAssistancePartners for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/remoteAssistancePartners/{{$parameter[\"remoteAssistancePartner-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Remote Assistance Partners",
					"value": "Device Management Get Remote Assistance Partners",
					"action": "Get remoteAssistancePartners from deviceManagement",
					"description": "The remote assist partners.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/remoteAssistancePartners/{{$parameter[\"remoteAssistancePartner-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Remote Assistance Partners",
					"value": "Device Management Update Remote Assistance Partners",
					"action": "Update the navigation property remoteAssistancePartners in deviceManagement",
					"description": "Update the navigation property remoteAssistancePartners in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/remoteAssistancePartners/{{$parameter[\"remoteAssistancePartner-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/remoteAssistancePartners",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Remote Assistance Partner"
					],
					"operation": [
						"Device Management List Remote Assistance Partners"
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
						"Device Management Remote Assistance Partner"
					],
					"operation": [
						"Device Management List Remote Assistance Partners"
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
						"Device Management Remote Assistance Partner"
					],
					"operation": [
						"Device Management List Remote Assistance Partners"
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
						"Device Management Remote Assistance Partner"
					],
					"operation": [
						"Device Management List Remote Assistance Partners"
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
						"Device Management Remote Assistance Partner"
					],
					"operation": [
						"Device Management List Remote Assistance Partners"
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
						"Device Management Remote Assistance Partner"
					],
					"operation": [
						"Device Management List Remote Assistance Partners"
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
						"Device Management Remote Assistance Partner"
					],
					"operation": [
						"Device Management List Remote Assistance Partners"
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
						"Device Management Remote Assistance Partner"
					],
					"operation": [
						"Device Management List Remote Assistance Partners"
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
						"Device Management Remote Assistance Partner"
					],
					"operation": [
						"Device Management List Remote Assistance Partners"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/remoteAssistancePartners",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Remote Assistance Partner"
					],
					"operation": [
						"Device Management Create Remote Assistance Partners"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/remoteAssistancePartners<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Remote Assistance Partner"
					],
					"operation": [
						"Device Management Create Remote Assistance Partners"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Remote Assistance Partner"
					],
					"operation": [
						"Device Management Delete Remote Assistance Partners"
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
						"Device Management Remote Assistance Partner"
					],
					"operation": [
						"Device Management Delete Remote Assistance Partners"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Remote Assistance Partner"
					],
					"operation": [
						"Device Management Get Remote Assistance Partners"
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
						"Device Management Remote Assistance Partner"
					],
					"operation": [
						"Device Management Get Remote Assistance Partners"
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
						"Device Management Remote Assistance Partner"
					],
					"operation": [
						"Device Management Get Remote Assistance Partners"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Remote Assistance Partner"
					],
					"operation": [
						"Device Management Update Remote Assistance Partners"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/remoteAssistancePartners/{remoteAssistancePartner-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Remote Assistance Partner"
					],
					"operation": [
						"Device Management Update Remote Assistance Partners"
					]
				}
			}
		},
];
