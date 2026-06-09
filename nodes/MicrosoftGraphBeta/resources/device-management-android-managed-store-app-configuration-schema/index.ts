import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementAndroidManagedStoreAppConfigurationSchemaDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android Managed Store App Configuration Schema"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Android Managed Store App Configuration Schemas",
					"value": "Device Management List Android Managed Store App Configuration Schemas",
					"action": "Get androidManagedStoreAppConfigurationSchemas from deviceManagement",
					"description": "Android Enterprise app configuration schema entities.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/androidManagedStoreAppConfigurationSchemas"
						}
					}
				},
				{
					"name": "Device Management Create Android Managed Store App Configuration Schemas",
					"value": "Device Management Create Android Managed Store App Configuration Schemas",
					"action": "Create new navigation property to androidManagedStoreAppConfigurationSchemas for deviceManagement",
					"description": "Create new navigation property to androidManagedStoreAppConfigurationSchemas for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/androidManagedStoreAppConfigurationSchemas"
						}
					}
				},
				{
					"name": "Device Management Delete Android Managed Store App Configuration Schemas",
					"value": "Device Management Delete Android Managed Store App Configuration Schemas",
					"action": "Delete navigation property androidManagedStoreAppConfigurationSchemas for deviceManagement",
					"description": "Delete navigation property androidManagedStoreAppConfigurationSchemas for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/androidManagedStoreAppConfigurationSchemas/{{$parameter[\"androidManagedStoreAppConfigurationSchema-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Android Managed Store App Configuration Schemas",
					"value": "Device Management Get Android Managed Store App Configuration Schemas",
					"action": "Get androidManagedStoreAppConfigurationSchemas from deviceManagement",
					"description": "Android Enterprise app configuration schema entities.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/androidManagedStoreAppConfigurationSchemas/{{$parameter[\"androidManagedStoreAppConfigurationSchema-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Android Managed Store App Configuration Schemas",
					"value": "Device Management Update Android Managed Store App Configuration Schemas",
					"action": "Update the navigation property androidManagedStoreAppConfigurationSchemas in deviceManagement",
					"description": "Update the navigation property androidManagedStoreAppConfigurationSchemas in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/androidManagedStoreAppConfigurationSchemas/{{$parameter[\"androidManagedStoreAppConfigurationSchema-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/androidManagedStoreAppConfigurationSchemas",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android Managed Store App Configuration Schema"
					],
					"operation": [
						"Device Management List Android Managed Store App Configuration Schemas"
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
						"Device Management Android Managed Store App Configuration Schema"
					],
					"operation": [
						"Device Management List Android Managed Store App Configuration Schemas"
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
						"Device Management Android Managed Store App Configuration Schema"
					],
					"operation": [
						"Device Management List Android Managed Store App Configuration Schemas"
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
						"Device Management Android Managed Store App Configuration Schema"
					],
					"operation": [
						"Device Management List Android Managed Store App Configuration Schemas"
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
						"Device Management Android Managed Store App Configuration Schema"
					],
					"operation": [
						"Device Management List Android Managed Store App Configuration Schemas"
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
						"Device Management Android Managed Store App Configuration Schema"
					],
					"operation": [
						"Device Management List Android Managed Store App Configuration Schemas"
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
						"Device Management Android Managed Store App Configuration Schema"
					],
					"operation": [
						"Device Management List Android Managed Store App Configuration Schemas"
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
						"Device Management Android Managed Store App Configuration Schema"
					],
					"operation": [
						"Device Management List Android Managed Store App Configuration Schemas"
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
						"Device Management Android Managed Store App Configuration Schema"
					],
					"operation": [
						"Device Management List Android Managed Store App Configuration Schemas"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidManagedStoreAppConfigurationSchemas",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android Managed Store App Configuration Schema"
					],
					"operation": [
						"Device Management Create Android Managed Store App Configuration Schemas"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidManagedStoreAppConfigurationSchemas<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android Managed Store App Configuration Schema"
					],
					"operation": [
						"Device Management Create Android Managed Store App Configuration Schemas"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android Managed Store App Configuration Schema"
					],
					"operation": [
						"Device Management Delete Android Managed Store App Configuration Schemas"
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
						"Device Management Android Managed Store App Configuration Schema"
					],
					"operation": [
						"Device Management Delete Android Managed Store App Configuration Schemas"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android Managed Store App Configuration Schema"
					],
					"operation": [
						"Device Management Get Android Managed Store App Configuration Schemas"
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
						"Device Management Android Managed Store App Configuration Schema"
					],
					"operation": [
						"Device Management Get Android Managed Store App Configuration Schemas"
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
						"Device Management Android Managed Store App Configuration Schema"
					],
					"operation": [
						"Device Management Get Android Managed Store App Configuration Schemas"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android Managed Store App Configuration Schema"
					],
					"operation": [
						"Device Management Update Android Managed Store App Configuration Schemas"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/androidManagedStoreAppConfigurationSchemas/{androidManagedStoreAppConfigurationSchema-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android Managed Store App Configuration Schema"
					],
					"operation": [
						"Device Management Update Android Managed Store App Configuration Schemas"
					]
				}
			}
		},
];
