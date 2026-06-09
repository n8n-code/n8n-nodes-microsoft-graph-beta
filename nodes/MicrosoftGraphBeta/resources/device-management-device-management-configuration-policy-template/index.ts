import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceManagementConfigurationPolicyTemplateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Configuration Policy Templates",
					"value": "Device Management List Configuration Policy Templates",
					"action": "Get configurationPolicyTemplates from deviceManagement",
					"description": "List of all templates",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/configurationPolicyTemplates"
						}
					}
				},
				{
					"name": "Device Management Create Configuration Policy Templates",
					"value": "Device Management Create Configuration Policy Templates",
					"action": "Create new navigation property to configurationPolicyTemplates for deviceManagement",
					"description": "Create new navigation property to configurationPolicyTemplates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/configurationPolicyTemplates"
						}
					}
				},
				{
					"name": "Device Management Delete Configuration Policy Templates",
					"value": "Device Management Delete Configuration Policy Templates",
					"action": "Delete navigation property configurationPolicyTemplates for deviceManagement",
					"description": "Delete navigation property configurationPolicyTemplates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/configurationPolicyTemplates/{{$parameter[\"deviceManagementConfigurationPolicyTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Configuration Policy Templates",
					"value": "Device Management Get Configuration Policy Templates",
					"action": "Get configurationPolicyTemplates from deviceManagement",
					"description": "List of all templates",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/configurationPolicyTemplates/{{$parameter[\"deviceManagementConfigurationPolicyTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Configuration Policy Templates",
					"value": "Device Management Update Configuration Policy Templates",
					"action": "Update the navigation property configurationPolicyTemplates in deviceManagement",
					"description": "Update the navigation property configurationPolicyTemplates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/configurationPolicyTemplates/{{$parameter[\"deviceManagementConfigurationPolicyTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Configuration Policy Templates List Setting Templates",
					"value": "Device Management Configuration Policy Templates List Setting Templates",
					"action": "Get settingTemplates from deviceManagement",
					"description": "Setting templates",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/configurationPolicyTemplates/{{$parameter[\"deviceManagementConfigurationPolicyTemplate-id\"]}}/settingTemplates"
						}
					}
				},
				{
					"name": "Device Management Configuration Policy Templates Create Setting Templates",
					"value": "Device Management Configuration Policy Templates Create Setting Templates",
					"action": "Create new navigation property to settingTemplates for deviceManagement",
					"description": "Create new navigation property to settingTemplates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/configurationPolicyTemplates/{{$parameter[\"deviceManagementConfigurationPolicyTemplate-id\"]}}/settingTemplates"
						}
					}
				},
				{
					"name": "Device Management Configuration Policy Templates Delete Setting Templates",
					"value": "Device Management Configuration Policy Templates Delete Setting Templates",
					"action": "Delete navigation property settingTemplates for deviceManagement",
					"description": "Delete navigation property settingTemplates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/configurationPolicyTemplates/{{$parameter[\"deviceManagementConfigurationPolicyTemplate-id\"]}}/settingTemplates/{{$parameter[\"deviceManagementConfigurationSettingTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Configuration Policy Templates Get Setting Templates",
					"value": "Device Management Configuration Policy Templates Get Setting Templates",
					"action": "Get settingTemplates from deviceManagement",
					"description": "Setting templates",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/configurationPolicyTemplates/{{$parameter[\"deviceManagementConfigurationPolicyTemplate-id\"]}}/settingTemplates/{{$parameter[\"deviceManagementConfigurationSettingTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Configuration Policy Templates Update Setting Templates",
					"value": "Device Management Configuration Policy Templates Update Setting Templates",
					"action": "Update the navigation property settingTemplates in deviceManagement",
					"description": "Update the navigation property settingTemplates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/configurationPolicyTemplates/{{$parameter[\"deviceManagementConfigurationPolicyTemplate-id\"]}}/settingTemplates/{{$parameter[\"deviceManagementConfigurationSettingTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Configuration Policy Templates Setting Templates List Setting Definitions",
					"value": "Device Management Configuration Policy Templates Setting Templates List Setting Definitions",
					"action": "Get settingDefinitions from deviceManagement",
					"description": "List of related Setting Definitions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/configurationPolicyTemplates/{{$parameter[\"deviceManagementConfigurationPolicyTemplate-id\"]}}/settingTemplates/{{$parameter[\"deviceManagementConfigurationSettingTemplate-id\"]}}/settingDefinitions"
						}
					}
				},
				{
					"name": "Device Management Configuration Policy Templates Setting Templates Create Setting Definitions",
					"value": "Device Management Configuration Policy Templates Setting Templates Create Setting Definitions",
					"action": "Create new navigation property to settingDefinitions for deviceManagement",
					"description": "Create new navigation property to settingDefinitions for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/configurationPolicyTemplates/{{$parameter[\"deviceManagementConfigurationPolicyTemplate-id\"]}}/settingTemplates/{{$parameter[\"deviceManagementConfigurationSettingTemplate-id\"]}}/settingDefinitions"
						}
					}
				},
				{
					"name": "Device Management Configuration Policy Templates Setting Templates Delete Setting Definitions",
					"value": "Device Management Configuration Policy Templates Setting Templates Delete Setting Definitions",
					"action": "Delete navigation property settingDefinitions for deviceManagement",
					"description": "Delete navigation property settingDefinitions for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/configurationPolicyTemplates/{{$parameter[\"deviceManagementConfigurationPolicyTemplate-id\"]}}/settingTemplates/{{$parameter[\"deviceManagementConfigurationSettingTemplate-id\"]}}/settingDefinitions/{{$parameter[\"deviceManagementConfigurationSettingDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Configuration Policy Templates Setting Templates Get Setting Definitions",
					"value": "Device Management Configuration Policy Templates Setting Templates Get Setting Definitions",
					"action": "Get settingDefinitions from deviceManagement",
					"description": "List of related Setting Definitions",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/configurationPolicyTemplates/{{$parameter[\"deviceManagementConfigurationPolicyTemplate-id\"]}}/settingTemplates/{{$parameter[\"deviceManagementConfigurationSettingTemplate-id\"]}}/settingDefinitions/{{$parameter[\"deviceManagementConfigurationSettingDefinition-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Configuration Policy Templates Setting Templates Update Setting Definitions",
					"value": "Device Management Configuration Policy Templates Setting Templates Update Setting Definitions",
					"action": "Update the navigation property settingDefinitions in deviceManagement",
					"description": "Update the navigation property settingDefinitions in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/configurationPolicyTemplates/{{$parameter[\"deviceManagementConfigurationPolicyTemplate-id\"]}}/settingTemplates/{{$parameter[\"deviceManagementConfigurationSettingTemplate-id\"]}}/settingDefinitions/{{$parameter[\"deviceManagementConfigurationSettingDefinition-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/configurationPolicyTemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management List Configuration Policy Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management List Configuration Policy Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management List Configuration Policy Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management List Configuration Policy Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management List Configuration Policy Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management List Configuration Policy Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management List Configuration Policy Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management List Configuration Policy Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management List Configuration Policy Templates"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/configurationPolicyTemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Create Configuration Policy Templates"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/configurationPolicyTemplates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Create Configuration Policy Templates"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Delete Configuration Policy Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Delete Configuration Policy Templates"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Get Configuration Policy Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Get Configuration Policy Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Get Configuration Policy Templates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Update Configuration Policy Templates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Update Configuration Policy Templates"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates List Setting Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates List Setting Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates List Setting Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates List Setting Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates List Setting Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates List Setting Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates List Setting Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates List Setting Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates List Setting Templates"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Create Setting Templates"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Create Setting Templates"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Delete Setting Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Delete Setting Templates"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Get Setting Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Get Setting Templates"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Get Setting Templates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Update Setting Templates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Update Setting Templates"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Setting Templates List Setting Definitions"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Setting Templates List Setting Definitions"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Setting Templates List Setting Definitions"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Setting Templates List Setting Definitions"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Setting Templates List Setting Definitions"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Setting Templates List Setting Definitions"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Setting Templates List Setting Definitions"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Setting Templates List Setting Definitions"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Setting Templates List Setting Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Setting Templates Create Setting Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Setting Templates Create Setting Definitions"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Setting Templates Delete Setting Definitions"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Setting Templates Delete Setting Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Setting Templates Get Setting Definitions"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Setting Templates Get Setting Definitions"
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
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Setting Templates Get Setting Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Setting Templates Update Setting Definitions"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/configurationPolicyTemplates/{deviceManagementConfigurationPolicyTemplate-id}/settingTemplates/{deviceManagementConfigurationSettingTemplate-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Configuration Policy Template"
					],
					"operation": [
						"Device Management Configuration Policy Templates Setting Templates Update Setting Definitions"
					]
				}
			}
		},
];
