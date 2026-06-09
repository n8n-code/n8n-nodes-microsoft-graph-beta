import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementAndroidForWorkAppConfigurationSchemaDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work App Configuration Schema"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Android For Work App Configuration Schemas",
					"value": "Device Management List Android For Work App Configuration Schemas",
					"action": "Get androidForWorkAppConfigurationSchemas from deviceManagement",
					"description": "Android for Work app configuration schema entities.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/androidForWorkAppConfigurationSchemas"
						}
					}
				},
				{
					"name": "Device Management Create Android For Work App Configuration Schemas",
					"value": "Device Management Create Android For Work App Configuration Schemas",
					"action": "Create new navigation property to androidForWorkAppConfigurationSchemas for deviceManagement",
					"description": "Create new navigation property to androidForWorkAppConfigurationSchemas for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/androidForWorkAppConfigurationSchemas"
						}
					}
				},
				{
					"name": "Device Management Delete Android For Work App Configuration Schemas",
					"value": "Device Management Delete Android For Work App Configuration Schemas",
					"action": "Delete navigation property androidForWorkAppConfigurationSchemas for deviceManagement",
					"description": "Delete navigation property androidForWorkAppConfigurationSchemas for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/androidForWorkAppConfigurationSchemas/{{$parameter[\"androidForWorkAppConfigurationSchema-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Android For Work App Configuration Schemas",
					"value": "Device Management Get Android For Work App Configuration Schemas",
					"action": "Get androidForWorkAppConfigurationSchemas from deviceManagement",
					"description": "Android for Work app configuration schema entities.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/androidForWorkAppConfigurationSchemas/{{$parameter[\"androidForWorkAppConfigurationSchema-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Android For Work App Configuration Schemas",
					"value": "Device Management Update Android For Work App Configuration Schemas",
					"action": "Update the navigation property androidForWorkAppConfigurationSchemas in deviceManagement",
					"description": "Update the navigation property androidForWorkAppConfigurationSchemas in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/androidForWorkAppConfigurationSchemas/{{$parameter[\"androidForWorkAppConfigurationSchema-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/androidForWorkAppConfigurationSchemas",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work App Configuration Schema"
					],
					"operation": [
						"Device Management List Android For Work App Configuration Schemas"
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
						"Device Management Android For Work App Configuration Schema"
					],
					"operation": [
						"Device Management List Android For Work App Configuration Schemas"
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
						"Device Management Android For Work App Configuration Schema"
					],
					"operation": [
						"Device Management List Android For Work App Configuration Schemas"
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
						"Device Management Android For Work App Configuration Schema"
					],
					"operation": [
						"Device Management List Android For Work App Configuration Schemas"
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
						"Device Management Android For Work App Configuration Schema"
					],
					"operation": [
						"Device Management List Android For Work App Configuration Schemas"
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
						"Device Management Android For Work App Configuration Schema"
					],
					"operation": [
						"Device Management List Android For Work App Configuration Schemas"
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
						"Device Management Android For Work App Configuration Schema"
					],
					"operation": [
						"Device Management List Android For Work App Configuration Schemas"
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
						"Device Management Android For Work App Configuration Schema"
					],
					"operation": [
						"Device Management List Android For Work App Configuration Schemas"
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
						"Device Management Android For Work App Configuration Schema"
					],
					"operation": [
						"Device Management List Android For Work App Configuration Schemas"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidForWorkAppConfigurationSchemas",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work App Configuration Schema"
					],
					"operation": [
						"Device Management Create Android For Work App Configuration Schemas"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/androidForWorkAppConfigurationSchemas<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work App Configuration Schema"
					],
					"operation": [
						"Device Management Create Android For Work App Configuration Schemas"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work App Configuration Schema"
					],
					"operation": [
						"Device Management Delete Android For Work App Configuration Schemas"
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
						"Device Management Android For Work App Configuration Schema"
					],
					"operation": [
						"Device Management Delete Android For Work App Configuration Schemas"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work App Configuration Schema"
					],
					"operation": [
						"Device Management Get Android For Work App Configuration Schemas"
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
						"Device Management Android For Work App Configuration Schema"
					],
					"operation": [
						"Device Management Get Android For Work App Configuration Schemas"
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
						"Device Management Android For Work App Configuration Schema"
					],
					"operation": [
						"Device Management Get Android For Work App Configuration Schemas"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work App Configuration Schema"
					],
					"operation": [
						"Device Management Update Android For Work App Configuration Schemas"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/androidForWorkAppConfigurationSchemas/{androidForWorkAppConfigurationSchema-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Android For Work App Configuration Schema"
					],
					"operation": [
						"Device Management Update Android For Work App Configuration Schemas"
					]
				}
			}
		},
];
