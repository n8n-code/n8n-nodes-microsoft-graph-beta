import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceCategoryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Category"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Device Categories",
					"value": "Device Management List Device Categories",
					"action": "Get deviceCategories from deviceManagement",
					"description": "The list of device categories with the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCategories"
						}
					}
				},
				{
					"name": "Device Management Create Device Categories",
					"value": "Device Management Create Device Categories",
					"action": "Create new navigation property to deviceCategories for deviceManagement",
					"description": "Create new navigation property to deviceCategories for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/deviceCategories"
						}
					}
				},
				{
					"name": "Device Management Delete Device Categories",
					"value": "Device Management Delete Device Categories",
					"action": "Delete navigation property deviceCategories for deviceManagement",
					"description": "Delete navigation property deviceCategories for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/deviceCategories/{{$parameter[\"deviceCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Device Categories",
					"value": "Device Management Get Device Categories",
					"action": "Get deviceCategories from deviceManagement",
					"description": "The list of device categories with the tenant.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/deviceCategories/{{$parameter[\"deviceCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Device Categories",
					"value": "Device Management Update Device Categories",
					"action": "Update the navigation property deviceCategories in deviceManagement",
					"description": "Update the navigation property deviceCategories in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/deviceCategories/{{$parameter[\"deviceCategory-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/deviceCategories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Category"
					],
					"operation": [
						"Device Management List Device Categories"
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
						"Device Management Device Category"
					],
					"operation": [
						"Device Management List Device Categories"
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
						"Device Management Device Category"
					],
					"operation": [
						"Device Management List Device Categories"
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
						"Device Management Device Category"
					],
					"operation": [
						"Device Management List Device Categories"
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
						"Device Management Device Category"
					],
					"operation": [
						"Device Management List Device Categories"
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
						"Device Management Device Category"
					],
					"operation": [
						"Device Management List Device Categories"
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
						"Device Management Device Category"
					],
					"operation": [
						"Device Management List Device Categories"
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
						"Device Management Device Category"
					],
					"operation": [
						"Device Management List Device Categories"
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
						"Device Management Device Category"
					],
					"operation": [
						"Device Management List Device Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCategories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Category"
					],
					"operation": [
						"Device Management Create Device Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/deviceCategories<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Category"
					],
					"operation": [
						"Device Management Create Device Categories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/deviceCategories/{deviceCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Category"
					],
					"operation": [
						"Device Management Delete Device Categories"
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
						"Device Management Device Category"
					],
					"operation": [
						"Device Management Delete Device Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/deviceCategories/{deviceCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Category"
					],
					"operation": [
						"Device Management Get Device Categories"
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
						"Device Management Device Category"
					],
					"operation": [
						"Device Management Get Device Categories"
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
						"Device Management Device Category"
					],
					"operation": [
						"Device Management Get Device Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCategories/{deviceCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Category"
					],
					"operation": [
						"Device Management Update Device Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/deviceCategories/{deviceCategory-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Category"
					],
					"operation": [
						"Device Management Update Device Categories"
					]
				}
			}
		},
];
