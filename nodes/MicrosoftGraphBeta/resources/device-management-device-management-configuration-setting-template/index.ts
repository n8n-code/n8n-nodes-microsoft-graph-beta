import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceManagementConfigurationSettingTemplateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Template"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Template Settings",
					"value": "Device Management List Template Settings",
					"action": "Get templateSettings from deviceManagement",
					"description": "List of all TemplateSettings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templateSettings"
						}
					}
				},
				{
					"name": "Device Management Create Template Settings",
					"value": "Device Management Create Template Settings",
					"action": "Create new navigation property to templateSettings for deviceManagement",
					"description": "Create new navigation property to templateSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/templateSettings"
						}
					}
				},
				{
					"name": "Device Management Delete Template Settings",
					"value": "Device Management Delete Template Settings",
					"action": "Delete navigation property templateSettings for deviceManagement",
					"description": "Delete navigation property templateSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/templateSettings/{{$parameter[\"deviceManagementConfigurationSettingTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Template Settings",
					"value": "Device Management Get Template Settings",
					"action": "Get templateSettings from deviceManagement",
					"description": "List of all TemplateSettings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templateSettings/{{$parameter[\"deviceManagementConfigurationSettingTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Template Settings",
					"value": "Device Management Update Template Settings",
					"action": "Update the navigation property templateSettings in deviceManagement",
					"description": "Update the navigation property templateSettings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/templateSettings/{{$parameter[\"deviceManagementConfigurationSettingTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Template Settings List Setting Definitions",
					"value": "Device Management Template Settings List Setting Definitions",
					"action": "Get settingDefinitions from deviceManagement",
					"description": "List of related Setting Definitions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templateSettings/{{$parameter[\"deviceManagementConfigurationSettingTemplate-id\"]}}/settingDefinitions"
						}
					}
				},
				{
					"name": "Device Management Template Settings Create Setting Definitions",
					"value": "Device Management Template Settings Create Setting Definitions",
					"action": "Create new navigation property to settingDefinitions for deviceManagement",
					"description": "Create new navigation property to settingDefinitions for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/templateSettings/{{$parameter[\"deviceManagementConfigurationSettingTemplate-id\"]}}/settingDefinitions"
						}
					}
				},
				{
					"name": "Device Management Template Settings Delete Setting Definitions",
					"value": "Device Management Template Settings Delete Setting Definitions",
					"action": "Delete navigation property settingDefinitions for deviceManagement",
					"description": "Delete navigation property settingDefinitions for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/templateSettings/{{$parameter[\"deviceManagementConfigurationSettingTemplate-id\"]}}/settingDefinitions/{{$parameter[\"deviceManagementConfigurationSettingDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Template Settings Get Setting Definitions",
					"value": "Device Management Template Settings Get Setting Definitions",
					"action": "Get settingDefinitions from deviceManagement",
					"description": "List of related Setting Definitions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templateSettings/{{$parameter[\"deviceManagementConfigurationSettingTemplate-id\"]}}/settingDefinitions/{{$parameter[\"deviceManagementConfigurationSettingDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Template Settings Update Setting Definitions",
					"value": "Device Management Template Settings Update Setting Definitions",
					"action": "Update the navigation property settingDefinitions in deviceManagement",
					"description": "Update the navigation property settingDefinitions in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/templateSettings/{{$parameter[\"deviceManagementConfigurationSettingTemplate-id\"]}}/settingDefinitions/{{$parameter[\"deviceManagementConfigurationSettingDefinition-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/templateSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management List Template Settings"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management List Template Settings"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management List Template Settings"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management List Template Settings"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management List Template Settings"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management List Template Settings"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management List Template Settings"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management List Template Settings"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management List Template Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templateSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Create Template Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templateSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Create Template Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Delete Template Settings"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Delete Template Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Get Template Settings"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Get Template Settings"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Get Template Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Update Template Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Update Template Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Template Settings List Setting Definitions"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Template Settings List Setting Definitions"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Template Settings List Setting Definitions"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Template Settings List Setting Definitions"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Template Settings List Setting Definitions"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Template Settings List Setting Definitions"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Template Settings List Setting Definitions"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Template Settings List Setting Definitions"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Template Settings List Setting Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Template Settings Create Setting Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Template Settings Create Setting Definitions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Template Settings Delete Setting Definitions"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Template Settings Delete Setting Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Template Settings Get Setting Definitions"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Template Settings Get Setting Definitions"
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
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Template Settings Get Setting Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Template Settings Update Setting Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Template"
					],
					"operation": [
						"Device Management Template Settings Update Setting Definitions"
					]
				}
			}
		},
];
