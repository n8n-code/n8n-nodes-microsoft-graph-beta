import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementTelecomExpenseManagementPartnerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Telecom Expense Management Partner"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Telecom Expense Management Partners",
					"value": "Device Management List Telecom Expense Management Partners",
					"action": "Get telecomExpenseManagementPartners from deviceManagement",
					"description": "The telecom expense management partners.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/telecomExpenseManagementPartners"
						}
					}
				},
				{
					"name": "Device Management Create Telecom Expense Management Partners",
					"value": "Device Management Create Telecom Expense Management Partners",
					"action": "Create new navigation property to telecomExpenseManagementPartners for deviceManagement",
					"description": "Create new navigation property to telecomExpenseManagementPartners for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/telecomExpenseManagementPartners"
						}
					}
				},
				{
					"name": "Device Management Delete Telecom Expense Management Partners",
					"value": "Device Management Delete Telecom Expense Management Partners",
					"action": "Delete navigation property telecomExpenseManagementPartners for deviceManagement",
					"description": "Delete navigation property telecomExpenseManagementPartners for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/telecomExpenseManagementPartners/{{$parameter[\"telecomExpenseManagementPartner-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Telecom Expense Management Partners",
					"value": "Device Management Get Telecom Expense Management Partners",
					"action": "Get telecomExpenseManagementPartners from deviceManagement",
					"description": "The telecom expense management partners.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/telecomExpenseManagementPartners/{{$parameter[\"telecomExpenseManagementPartner-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Telecom Expense Management Partners",
					"value": "Device Management Update Telecom Expense Management Partners",
					"action": "Update the navigation property telecomExpenseManagementPartners in deviceManagement",
					"description": "Update the navigation property telecomExpenseManagementPartners in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/telecomExpenseManagementPartners/{{$parameter[\"telecomExpenseManagementPartner-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/telecomExpenseManagementPartners",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Telecom Expense Management Partner"
					],
					"operation": [
						"Device Management List Telecom Expense Management Partners"
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
						"Device Management Telecom Expense Management Partner"
					],
					"operation": [
						"Device Management List Telecom Expense Management Partners"
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
						"Device Management Telecom Expense Management Partner"
					],
					"operation": [
						"Device Management List Telecom Expense Management Partners"
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
						"Device Management Telecom Expense Management Partner"
					],
					"operation": [
						"Device Management List Telecom Expense Management Partners"
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
						"Device Management Telecom Expense Management Partner"
					],
					"operation": [
						"Device Management List Telecom Expense Management Partners"
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
						"Device Management Telecom Expense Management Partner"
					],
					"operation": [
						"Device Management List Telecom Expense Management Partners"
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
						"Device Management Telecom Expense Management Partner"
					],
					"operation": [
						"Device Management List Telecom Expense Management Partners"
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
						"Device Management Telecom Expense Management Partner"
					],
					"operation": [
						"Device Management List Telecom Expense Management Partners"
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
						"Device Management Telecom Expense Management Partner"
					],
					"operation": [
						"Device Management List Telecom Expense Management Partners"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/telecomExpenseManagementPartners",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Telecom Expense Management Partner"
					],
					"operation": [
						"Device Management Create Telecom Expense Management Partners"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/telecomExpenseManagementPartners<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Telecom Expense Management Partner"
					],
					"operation": [
						"Device Management Create Telecom Expense Management Partners"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Telecom Expense Management Partner"
					],
					"operation": [
						"Device Management Delete Telecom Expense Management Partners"
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
						"Device Management Telecom Expense Management Partner"
					],
					"operation": [
						"Device Management Delete Telecom Expense Management Partners"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Telecom Expense Management Partner"
					],
					"operation": [
						"Device Management Get Telecom Expense Management Partners"
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
						"Device Management Telecom Expense Management Partner"
					],
					"operation": [
						"Device Management Get Telecom Expense Management Partners"
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
						"Device Management Telecom Expense Management Partner"
					],
					"operation": [
						"Device Management Get Telecom Expense Management Partners"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Telecom Expense Management Partner"
					],
					"operation": [
						"Device Management Update Telecom Expense Management Partners"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Telecom Expense Management Partner"
					],
					"operation": [
						"Device Management Update Telecom Expense Management Partners"
					]
				}
			}
		},
];
