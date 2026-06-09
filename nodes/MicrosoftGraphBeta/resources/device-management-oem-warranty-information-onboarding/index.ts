import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementOemWarrantyInformationOnboardingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Oem Warranty Information Onboarding"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Oem Warranty Information Onboarding",
					"value": "Device Management List Oem Warranty Information Onboarding",
					"action": "Get oemWarrantyInformationOnboarding from deviceManagement",
					"description": "List of OEM Warranty Statuses",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/oemWarrantyInformationOnboarding"
						}
					}
				},
				{
					"name": "Device Management Create Oem Warranty Information Onboarding",
					"value": "Device Management Create Oem Warranty Information Onboarding",
					"action": "Create new navigation property to oemWarrantyInformationOnboarding for deviceManagement",
					"description": "Create new navigation property to oemWarrantyInformationOnboarding for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/oemWarrantyInformationOnboarding"
						}
					}
				},
				{
					"name": "Device Management Delete Oem Warranty Information Onboarding",
					"value": "Device Management Delete Oem Warranty Information Onboarding",
					"action": "Delete navigation property oemWarrantyInformationOnboarding for deviceManagement",
					"description": "Delete navigation property oemWarrantyInformationOnboarding for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/oemWarrantyInformationOnboarding/{{$parameter[\"oemWarrantyInformationOnboarding-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Oem Warranty Information Onboarding",
					"value": "Device Management Get Oem Warranty Information Onboarding",
					"action": "Get oemWarrantyInformationOnboarding from deviceManagement",
					"description": "List of OEM Warranty Statuses",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/oemWarrantyInformationOnboarding/{{$parameter[\"oemWarrantyInformationOnboarding-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Oem Warranty Information Onboarding",
					"value": "Device Management Update Oem Warranty Information Onboarding",
					"action": "Update the navigation property oemWarrantyInformationOnboarding in deviceManagement",
					"description": "Update the navigation property oemWarrantyInformationOnboarding in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/oemWarrantyInformationOnboarding/{{$parameter[\"oemWarrantyInformationOnboarding-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/oemWarrantyInformationOnboarding",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Oem Warranty Information Onboarding"
					],
					"operation": [
						"Device Management List Oem Warranty Information Onboarding"
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
						"Device Management Oem Warranty Information Onboarding"
					],
					"operation": [
						"Device Management List Oem Warranty Information Onboarding"
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
						"Device Management Oem Warranty Information Onboarding"
					],
					"operation": [
						"Device Management List Oem Warranty Information Onboarding"
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
						"Device Management Oem Warranty Information Onboarding"
					],
					"operation": [
						"Device Management List Oem Warranty Information Onboarding"
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
						"Device Management Oem Warranty Information Onboarding"
					],
					"operation": [
						"Device Management List Oem Warranty Information Onboarding"
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
						"Device Management Oem Warranty Information Onboarding"
					],
					"operation": [
						"Device Management List Oem Warranty Information Onboarding"
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
						"Device Management Oem Warranty Information Onboarding"
					],
					"operation": [
						"Device Management List Oem Warranty Information Onboarding"
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
						"Device Management Oem Warranty Information Onboarding"
					],
					"operation": [
						"Device Management List Oem Warranty Information Onboarding"
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
						"Device Management Oem Warranty Information Onboarding"
					],
					"operation": [
						"Device Management List Oem Warranty Information Onboarding"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/oemWarrantyInformationOnboarding",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Oem Warranty Information Onboarding"
					],
					"operation": [
						"Device Management Create Oem Warranty Information Onboarding"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/oemWarrantyInformationOnboarding<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Oem Warranty Information Onboarding"
					],
					"operation": [
						"Device Management Create Oem Warranty Information Onboarding"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/oemWarrantyInformationOnboarding/{oemWarrantyInformationOnboarding-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Oem Warranty Information Onboarding"
					],
					"operation": [
						"Device Management Delete Oem Warranty Information Onboarding"
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
						"Device Management Oem Warranty Information Onboarding"
					],
					"operation": [
						"Device Management Delete Oem Warranty Information Onboarding"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/oemWarrantyInformationOnboarding/{oemWarrantyInformationOnboarding-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Oem Warranty Information Onboarding"
					],
					"operation": [
						"Device Management Get Oem Warranty Information Onboarding"
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
						"Device Management Oem Warranty Information Onboarding"
					],
					"operation": [
						"Device Management Get Oem Warranty Information Onboarding"
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
						"Device Management Oem Warranty Information Onboarding"
					],
					"operation": [
						"Device Management Get Oem Warranty Information Onboarding"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/oemWarrantyInformationOnboarding/{oemWarrantyInformationOnboarding-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Oem Warranty Information Onboarding"
					],
					"operation": [
						"Device Management Update Oem Warranty Information Onboarding"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/oemWarrantyInformationOnboarding/{oemWarrantyInformationOnboarding-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Oem Warranty Information Onboarding"
					],
					"operation": [
						"Device Management Update Oem Warranty Information Onboarding"
					]
				}
			}
		},
];
