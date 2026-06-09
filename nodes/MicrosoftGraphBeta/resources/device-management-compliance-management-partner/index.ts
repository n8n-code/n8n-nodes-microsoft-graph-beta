import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementComplianceManagementPartnerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Compliance Management Partner"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Compliance Management Partners",
					"value": "Device Management List Compliance Management Partners",
					"action": "Get complianceManagementPartners from deviceManagement",
					"description": "The list of Compliance Management Partners configured by the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/complianceManagementPartners"
						}
					}
				},
				{
					"name": "Device Management Create Compliance Management Partners",
					"value": "Device Management Create Compliance Management Partners",
					"action": "Create new navigation property to complianceManagementPartners for deviceManagement",
					"description": "Create new navigation property to complianceManagementPartners for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/complianceManagementPartners"
						}
					}
				},
				{
					"name": "Device Management Delete Compliance Management Partners",
					"value": "Device Management Delete Compliance Management Partners",
					"action": "Delete navigation property complianceManagementPartners for deviceManagement",
					"description": "Delete navigation property complianceManagementPartners for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/complianceManagementPartners/{{$parameter[\"complianceManagementPartner-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Compliance Management Partners",
					"value": "Device Management Get Compliance Management Partners",
					"action": "Get complianceManagementPartners from deviceManagement",
					"description": "The list of Compliance Management Partners configured by the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/complianceManagementPartners/{{$parameter[\"complianceManagementPartner-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Compliance Management Partners",
					"value": "Device Management Update Compliance Management Partners",
					"action": "Update the navigation property complianceManagementPartners in deviceManagement",
					"description": "Update the navigation property complianceManagementPartners in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/complianceManagementPartners/{{$parameter[\"complianceManagementPartner-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/complianceManagementPartners",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Compliance Management Partner"
					],
					"operation": [
						"Device Management List Compliance Management Partners"
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
						"Device Management Compliance Management Partner"
					],
					"operation": [
						"Device Management List Compliance Management Partners"
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
						"Device Management Compliance Management Partner"
					],
					"operation": [
						"Device Management List Compliance Management Partners"
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
						"Device Management Compliance Management Partner"
					],
					"operation": [
						"Device Management List Compliance Management Partners"
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
						"Device Management Compliance Management Partner"
					],
					"operation": [
						"Device Management List Compliance Management Partners"
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
						"Device Management Compliance Management Partner"
					],
					"operation": [
						"Device Management List Compliance Management Partners"
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
						"Device Management Compliance Management Partner"
					],
					"operation": [
						"Device Management List Compliance Management Partners"
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
						"Device Management Compliance Management Partner"
					],
					"operation": [
						"Device Management List Compliance Management Partners"
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
						"Device Management Compliance Management Partner"
					],
					"operation": [
						"Device Management List Compliance Management Partners"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/complianceManagementPartners",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Compliance Management Partner"
					],
					"operation": [
						"Device Management Create Compliance Management Partners"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/complianceManagementPartners<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Compliance Management Partner"
					],
					"operation": [
						"Device Management Create Compliance Management Partners"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Compliance Management Partner"
					],
					"operation": [
						"Device Management Delete Compliance Management Partners"
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
						"Device Management Compliance Management Partner"
					],
					"operation": [
						"Device Management Delete Compliance Management Partners"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Compliance Management Partner"
					],
					"operation": [
						"Device Management Get Compliance Management Partners"
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
						"Device Management Compliance Management Partner"
					],
					"operation": [
						"Device Management Get Compliance Management Partners"
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
						"Device Management Compliance Management Partner"
					],
					"operation": [
						"Device Management Get Compliance Management Partners"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Compliance Management Partner"
					],
					"operation": [
						"Device Management Update Compliance Management Partners"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/complianceManagementPartners/{complianceManagementPartner-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Compliance Management Partner"
					],
					"operation": [
						"Device Management Update Compliance Management Partners"
					]
				}
			}
		},
];
