import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementWindowsUpdateCatalogItemDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Update Catalog Item"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Windows Update Catalog Items",
					"value": "Device Management List Windows Update Catalog Items",
					"action": "Get windowsUpdateCatalogItems from deviceManagement",
					"description": "A collection of windows update catalog items (fetaure updates item , quality updates item)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsUpdateCatalogItems"
						}
					}
				},
				{
					"name": "Device Management Create Windows Update Catalog Items",
					"value": "Device Management Create Windows Update Catalog Items",
					"action": "Create new navigation property to windowsUpdateCatalogItems for deviceManagement",
					"description": "Create new navigation property to windowsUpdateCatalogItems for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/windowsUpdateCatalogItems"
						}
					}
				},
				{
					"name": "Device Management Delete Windows Update Catalog Items",
					"value": "Device Management Delete Windows Update Catalog Items",
					"action": "Delete navigation property windowsUpdateCatalogItems for deviceManagement",
					"description": "Delete navigation property windowsUpdateCatalogItems for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/windowsUpdateCatalogItems/{{$parameter[\"windowsUpdateCatalogItem-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Windows Update Catalog Items",
					"value": "Device Management Get Windows Update Catalog Items",
					"action": "Get windowsUpdateCatalogItems from deviceManagement",
					"description": "A collection of windows update catalog items (fetaure updates item , quality updates item)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/windowsUpdateCatalogItems/{{$parameter[\"windowsUpdateCatalogItem-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Windows Update Catalog Items",
					"value": "Device Management Update Windows Update Catalog Items",
					"action": "Update the navigation property windowsUpdateCatalogItems in deviceManagement",
					"description": "Update the navigation property windowsUpdateCatalogItems in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/windowsUpdateCatalogItems/{{$parameter[\"windowsUpdateCatalogItem-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/windowsUpdateCatalogItems",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Update Catalog Item"
					],
					"operation": [
						"Device Management List Windows Update Catalog Items"
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
						"Device Management Windows Update Catalog Item"
					],
					"operation": [
						"Device Management List Windows Update Catalog Items"
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
						"Device Management Windows Update Catalog Item"
					],
					"operation": [
						"Device Management List Windows Update Catalog Items"
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
						"Device Management Windows Update Catalog Item"
					],
					"operation": [
						"Device Management List Windows Update Catalog Items"
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
						"Device Management Windows Update Catalog Item"
					],
					"operation": [
						"Device Management List Windows Update Catalog Items"
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
						"Device Management Windows Update Catalog Item"
					],
					"operation": [
						"Device Management List Windows Update Catalog Items"
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
						"Device Management Windows Update Catalog Item"
					],
					"operation": [
						"Device Management List Windows Update Catalog Items"
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
						"Device Management Windows Update Catalog Item"
					],
					"operation": [
						"Device Management List Windows Update Catalog Items"
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
						"Device Management Windows Update Catalog Item"
					],
					"operation": [
						"Device Management List Windows Update Catalog Items"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsUpdateCatalogItems",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Update Catalog Item"
					],
					"operation": [
						"Device Management Create Windows Update Catalog Items"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/windowsUpdateCatalogItems<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Update Catalog Item"
					],
					"operation": [
						"Device Management Create Windows Update Catalog Items"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Update Catalog Item"
					],
					"operation": [
						"Device Management Delete Windows Update Catalog Items"
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
						"Device Management Windows Update Catalog Item"
					],
					"operation": [
						"Device Management Delete Windows Update Catalog Items"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Update Catalog Item"
					],
					"operation": [
						"Device Management Get Windows Update Catalog Items"
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
						"Device Management Windows Update Catalog Item"
					],
					"operation": [
						"Device Management Get Windows Update Catalog Items"
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
						"Device Management Windows Update Catalog Item"
					],
					"operation": [
						"Device Management Get Windows Update Catalog Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Update Catalog Item"
					],
					"operation": [
						"Device Management Update Windows Update Catalog Items"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/windowsUpdateCatalogItems/{windowsUpdateCatalogItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Windows Update Catalog Item"
					],
					"operation": [
						"Device Management Update Windows Update Catalog Items"
					]
				}
			}
		},
];
