import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceManagementConfigurationCategoryDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Category"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Compliance Categories",
					"value": "Device Management List Compliance Categories",
					"action": "Get complianceCategories from deviceManagement",
					"description": "List of all compliance categories",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/complianceCategories"
						}
					}
				},
				{
					"name": "Device Management Create Compliance Categories",
					"value": "Device Management Create Compliance Categories",
					"action": "Create new navigation property to complianceCategories for deviceManagement",
					"description": "Create new navigation property to complianceCategories for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/complianceCategories"
						}
					}
				},
				{
					"name": "Device Management Delete Compliance Categories",
					"value": "Device Management Delete Compliance Categories",
					"action": "Delete navigation property complianceCategories for deviceManagement",
					"description": "Delete navigation property complianceCategories for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/complianceCategories/{{$parameter[\"deviceManagementConfigurationCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Compliance Categories",
					"value": "Device Management Get Compliance Categories",
					"action": "Get complianceCategories from deviceManagement",
					"description": "List of all compliance categories",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/complianceCategories/{{$parameter[\"deviceManagementConfigurationCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Compliance Categories",
					"value": "Device Management Update Compliance Categories",
					"action": "Update the navigation property complianceCategories in deviceManagement",
					"description": "Update the navigation property complianceCategories in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/complianceCategories/{{$parameter[\"deviceManagementConfigurationCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management List Configuration Categories",
					"value": "Device Management List Configuration Categories",
					"action": "Get configurationCategories from deviceManagement",
					"description": "List of all Configuration Categories",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/configurationCategories"
						}
					}
				},
				{
					"name": "Device Management Create Configuration Categories",
					"value": "Device Management Create Configuration Categories",
					"action": "Create new navigation property to configurationCategories for deviceManagement",
					"description": "Create new navigation property to configurationCategories for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/configurationCategories"
						}
					}
				},
				{
					"name": "Device Management Delete Configuration Categories",
					"value": "Device Management Delete Configuration Categories",
					"action": "Delete navigation property configurationCategories for deviceManagement",
					"description": "Delete navigation property configurationCategories for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/configurationCategories/{{$parameter[\"deviceManagementConfigurationCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Configuration Categories",
					"value": "Device Management Get Configuration Categories",
					"action": "Get configurationCategories from deviceManagement",
					"description": "List of all Configuration Categories",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/configurationCategories/{{$parameter[\"deviceManagementConfigurationCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Configuration Categories",
					"value": "Device Management Update Configuration Categories",
					"action": "Update the navigation property configurationCategories in deviceManagement",
					"description": "Update the navigation property configurationCategories in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/configurationCategories/{{$parameter[\"deviceManagementConfigurationCategory-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/complianceCategories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management List Compliance Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management List Compliance Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management List Compliance Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management List Compliance Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management List Compliance Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management List Compliance Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management List Compliance Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management List Compliance Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management List Compliance Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/complianceCategories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management Create Compliance Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/complianceCategories<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management Create Compliance Categories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management Delete Compliance Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management Delete Compliance Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management Get Compliance Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management Get Compliance Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management Get Compliance Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management Update Compliance Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/complianceCategories/{deviceManagementConfigurationCategory-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management Update Compliance Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/configurationCategories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management List Configuration Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management List Configuration Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management List Configuration Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management List Configuration Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management List Configuration Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management List Configuration Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management List Configuration Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management List Configuration Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management List Configuration Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/configurationCategories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management Create Configuration Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/configurationCategories<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management Create Configuration Categories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management Delete Configuration Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management Delete Configuration Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management Get Configuration Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management Get Configuration Categories"
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
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management Get Configuration Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management Update Configuration Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/configurationCategories/{deviceManagementConfigurationCategory-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Category"
					],
					"operation": [
						"Device Management Update Configuration Categories"
					]
				}
			}
		},
];
