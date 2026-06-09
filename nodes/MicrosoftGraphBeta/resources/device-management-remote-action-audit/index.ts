import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementRemoteActionAuditDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Remote Action Audit"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Remote Action Audits",
					"value": "Device Management List Remote Action Audits",
					"action": "Get remoteActionAudits from deviceManagement",
					"description": "The list of device remote action audits with the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/remoteActionAudits"
						}
					}
				},
				{
					"name": "Device Management Create Remote Action Audits",
					"value": "Device Management Create Remote Action Audits",
					"action": "Create new navigation property to remoteActionAudits for deviceManagement",
					"description": "Create new navigation property to remoteActionAudits for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/remoteActionAudits"
						}
					}
				},
				{
					"name": "Device Management Delete Remote Action Audits",
					"value": "Device Management Delete Remote Action Audits",
					"action": "Delete navigation property remoteActionAudits for deviceManagement",
					"description": "Delete navigation property remoteActionAudits for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/remoteActionAudits/{{$parameter[\"remoteActionAudit-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Remote Action Audits",
					"value": "Device Management Get Remote Action Audits",
					"action": "Get remoteActionAudits from deviceManagement",
					"description": "The list of device remote action audits with the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/remoteActionAudits/{{$parameter[\"remoteActionAudit-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Remote Action Audits",
					"value": "Device Management Update Remote Action Audits",
					"action": "Update the navigation property remoteActionAudits in deviceManagement",
					"description": "Update the navigation property remoteActionAudits in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/remoteActionAudits/{{$parameter[\"remoteActionAudit-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/remoteActionAudits",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Remote Action Audit"
					],
					"operation": [
						"Device Management List Remote Action Audits"
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
						"Device Management Remote Action Audit"
					],
					"operation": [
						"Device Management List Remote Action Audits"
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
						"Device Management Remote Action Audit"
					],
					"operation": [
						"Device Management List Remote Action Audits"
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
						"Device Management Remote Action Audit"
					],
					"operation": [
						"Device Management List Remote Action Audits"
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
						"Device Management Remote Action Audit"
					],
					"operation": [
						"Device Management List Remote Action Audits"
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
						"Device Management Remote Action Audit"
					],
					"operation": [
						"Device Management List Remote Action Audits"
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
						"Device Management Remote Action Audit"
					],
					"operation": [
						"Device Management List Remote Action Audits"
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
						"Device Management Remote Action Audit"
					],
					"operation": [
						"Device Management List Remote Action Audits"
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
						"Device Management Remote Action Audit"
					],
					"operation": [
						"Device Management List Remote Action Audits"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/remoteActionAudits",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Remote Action Audit"
					],
					"operation": [
						"Device Management Create Remote Action Audits"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/remoteActionAudits<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Remote Action Audit"
					],
					"operation": [
						"Device Management Create Remote Action Audits"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/remoteActionAudits/{remoteActionAudit-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Remote Action Audit"
					],
					"operation": [
						"Device Management Delete Remote Action Audits"
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
						"Device Management Remote Action Audit"
					],
					"operation": [
						"Device Management Delete Remote Action Audits"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/remoteActionAudits/{remoteActionAudit-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Remote Action Audit"
					],
					"operation": [
						"Device Management Get Remote Action Audits"
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
						"Device Management Remote Action Audit"
					],
					"operation": [
						"Device Management Get Remote Action Audits"
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
						"Device Management Remote Action Audit"
					],
					"operation": [
						"Device Management Get Remote Action Audits"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/remoteActionAudits/{remoteActionAudit-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Remote Action Audit"
					],
					"operation": [
						"Device Management Update Remote Action Audits"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/remoteActionAudits/{remoteActionAudit-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Remote Action Audit"
					],
					"operation": [
						"Device Management Update Remote Action Audits"
					]
				}
			}
		},
];
