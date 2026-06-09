import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceManagementConfigurationSettingDefinitionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Compliance Settings",
					"value": "Device Management List Compliance Settings",
					"action": "Get complianceSettings from deviceManagement",
					"description": "List of all ComplianceSettings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/complianceSettings"
						}
					}
				},
				{
					"name": "Device Management Create Compliance Settings",
					"value": "Device Management Create Compliance Settings",
					"action": "Create new navigation property to complianceSettings for deviceManagement",
					"description": "Create new navigation property to complianceSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/complianceSettings"
						}
					}
				},
				{
					"name": "Device Management Delete Compliance Settings",
					"value": "Device Management Delete Compliance Settings",
					"action": "Delete navigation property complianceSettings for deviceManagement",
					"description": "Delete navigation property complianceSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/complianceSettings/{{$parameter[\"deviceManagementConfigurationSettingDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Compliance Settings",
					"value": "Device Management Get Compliance Settings",
					"action": "Get complianceSettings from deviceManagement",
					"description": "List of all ComplianceSettings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/complianceSettings/{{$parameter[\"deviceManagementConfigurationSettingDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Compliance Settings",
					"value": "Device Management Update Compliance Settings",
					"action": "Update the navigation property complianceSettings in deviceManagement",
					"description": "Update the navigation property complianceSettings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/complianceSettings/{{$parameter[\"deviceManagementConfigurationSettingDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management List Configuration Settings",
					"value": "Device Management List Configuration Settings",
					"action": "Get configurationSettings from deviceManagement",
					"description": "List of all ConfigurationSettings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/configurationSettings"
						}
					}
				},
				{
					"name": "Device Management Create Configuration Settings",
					"value": "Device Management Create Configuration Settings",
					"action": "Create new navigation property to configurationSettings for deviceManagement",
					"description": "Create new navigation property to configurationSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/configurationSettings"
						}
					}
				},
				{
					"name": "Device Management Delete Configuration Settings",
					"value": "Device Management Delete Configuration Settings",
					"action": "Delete navigation property configurationSettings for deviceManagement",
					"description": "Delete navigation property configurationSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/configurationSettings/{{$parameter[\"deviceManagementConfigurationSettingDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Configuration Settings",
					"value": "Device Management Get Configuration Settings",
					"action": "Get configurationSettings from deviceManagement",
					"description": "List of all ConfigurationSettings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/configurationSettings/{{$parameter[\"deviceManagementConfigurationSettingDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Configuration Settings",
					"value": "Device Management Update Configuration Settings",
					"action": "Update the navigation property configurationSettings in deviceManagement",
					"description": "Update the navigation property configurationSettings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/configurationSettings/{{$parameter[\"deviceManagementConfigurationSettingDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management List Reusable Settings",
					"value": "Device Management List Reusable Settings",
					"action": "Get reusableSettings from deviceManagement",
					"description": "List of all reusable settings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/reusableSettings"
						}
					}
				},
				{
					"name": "Device Management Create Reusable Settings",
					"value": "Device Management Create Reusable Settings",
					"action": "Create new navigation property to reusableSettings for deviceManagement",
					"description": "Create new navigation property to reusableSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reusableSettings"
						}
					}
				},
				{
					"name": "Device Management Delete Reusable Settings",
					"value": "Device Management Delete Reusable Settings",
					"action": "Delete navigation property reusableSettings for deviceManagement",
					"description": "Delete navigation property reusableSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/reusableSettings/{{$parameter[\"deviceManagementConfigurationSettingDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Reusable Settings",
					"value": "Device Management Get Reusable Settings",
					"action": "Get reusableSettings from deviceManagement",
					"description": "List of all reusable settings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/reusableSettings/{{$parameter[\"deviceManagementConfigurationSettingDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Reusable Settings",
					"value": "Device Management Update Reusable Settings",
					"action": "Update the navigation property reusableSettings in deviceManagement",
					"description": "Update the navigation property reusableSettings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/reusableSettings/{{$parameter[\"deviceManagementConfigurationSettingDefinition-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/complianceSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Compliance Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Compliance Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Compliance Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Compliance Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Compliance Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Compliance Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Compliance Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Compliance Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Compliance Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/complianceSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Create Compliance Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/complianceSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Create Compliance Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Delete Compliance Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Delete Compliance Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Get Compliance Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Get Compliance Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Get Compliance Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Update Compliance Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/complianceSettings/{deviceManagementConfigurationSettingDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Update Compliance Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/configurationSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Configuration Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Configuration Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Configuration Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Configuration Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Configuration Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Configuration Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Configuration Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Configuration Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Configuration Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/configurationSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Create Configuration Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/configurationSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Create Configuration Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Delete Configuration Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Delete Configuration Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Get Configuration Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Get Configuration Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Get Configuration Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Update Configuration Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/configurationSettings/{deviceManagementConfigurationSettingDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Update Configuration Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/reusableSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Reusable Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Reusable Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Reusable Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Reusable Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Reusable Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Reusable Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Reusable Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Reusable Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management List Reusable Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reusableSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Create Reusable Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reusableSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Create Reusable Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Delete Reusable Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Delete Reusable Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Get Reusable Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Get Reusable Settings"
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
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Get Reusable Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Update Reusable Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/reusableSettings/{deviceManagementConfigurationSettingDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Setting Definition"
					],
					"operation": [
						"Device Management Update Reusable Settings"
					]
				}
			}
		},
];
