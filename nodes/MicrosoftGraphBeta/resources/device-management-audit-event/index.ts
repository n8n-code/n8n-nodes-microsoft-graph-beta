import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementAuditEventDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Audit Event"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Audit Events",
					"value": "Device Management List Audit Events",
					"action": "Get auditEvents from deviceManagement",
					"description": "The Audit Events",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/auditEvents"
						}
					}
				},
				{
					"name": "Device Management Create Audit Events",
					"value": "Device Management Create Audit Events",
					"action": "Create new navigation property to auditEvents for deviceManagement",
					"description": "Create new navigation property to auditEvents for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/auditEvents"
						}
					}
				},
				{
					"name": "Device Management Delete Audit Events",
					"value": "Device Management Delete Audit Events",
					"action": "Delete navigation property auditEvents for deviceManagement",
					"description": "Delete navigation property auditEvents for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/auditEvents/{{$parameter[\"auditEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Audit Events",
					"value": "Device Management Get Audit Events",
					"action": "Get auditEvents from deviceManagement",
					"description": "The Audit Events",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/auditEvents/{{$parameter[\"auditEvent-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Audit Events",
					"value": "Device Management Update Audit Events",
					"action": "Update the navigation property auditEvents in deviceManagement",
					"description": "Update the navigation property auditEvents in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/auditEvents/{{$parameter[\"auditEvent-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/auditEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Audit Event"
					],
					"operation": [
						"Device Management List Audit Events"
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
						"Device Management Audit Event"
					],
					"operation": [
						"Device Management List Audit Events"
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
						"Device Management Audit Event"
					],
					"operation": [
						"Device Management List Audit Events"
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
						"Device Management Audit Event"
					],
					"operation": [
						"Device Management List Audit Events"
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
						"Device Management Audit Event"
					],
					"operation": [
						"Device Management List Audit Events"
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
						"Device Management Audit Event"
					],
					"operation": [
						"Device Management List Audit Events"
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
						"Device Management Audit Event"
					],
					"operation": [
						"Device Management List Audit Events"
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
						"Device Management Audit Event"
					],
					"operation": [
						"Device Management List Audit Events"
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
						"Device Management Audit Event"
					],
					"operation": [
						"Device Management List Audit Events"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/auditEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Audit Event"
					],
					"operation": [
						"Device Management Create Audit Events"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/auditEvents<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Audit Event"
					],
					"operation": [
						"Device Management Create Audit Events"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/auditEvents/{auditEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Audit Event"
					],
					"operation": [
						"Device Management Delete Audit Events"
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
						"Device Management Audit Event"
					],
					"operation": [
						"Device Management Delete Audit Events"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/auditEvents/{auditEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Audit Event"
					],
					"operation": [
						"Device Management Get Audit Events"
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
						"Device Management Audit Event"
					],
					"operation": [
						"Device Management Get Audit Events"
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
						"Device Management Audit Event"
					],
					"operation": [
						"Device Management Get Audit Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/auditEvents/{auditEvent-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Audit Event"
					],
					"operation": [
						"Device Management Update Audit Events"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/auditEvents/{auditEvent-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Audit Event"
					],
					"operation": [
						"Device Management Update Audit Events"
					]
				}
			}
		},
];
