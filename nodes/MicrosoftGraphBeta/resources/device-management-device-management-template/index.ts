import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceManagementTemplateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Templates",
					"value": "Device Management List Templates",
					"action": "Get templates from deviceManagement",
					"description": "The available templates",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templates"
						}
					}
				},
				{
					"name": "Device Management Create Templates",
					"value": "Device Management Create Templates",
					"action": "Create new navigation property to templates for deviceManagement",
					"description": "Create new navigation property to templates for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/templates"
						}
					}
				},
				{
					"name": "Device Management Delete Templates",
					"value": "Device Management Delete Templates",
					"action": "Delete navigation property templates for deviceManagement",
					"description": "Delete navigation property templates for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Templates",
					"value": "Device Management Get Templates",
					"action": "Get templates from deviceManagement",
					"description": "The available templates",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Templates",
					"value": "Device Management Update Templates",
					"action": "Update the navigation property templates in deviceManagement",
					"description": "Update the navigation property templates in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Templates List Categories",
					"value": "Device Management Templates List Categories",
					"action": "Get categories from deviceManagement",
					"description": "Collection of setting categories within the template",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/categories"
						}
					}
				},
				{
					"name": "Device Management Templates Create Categories",
					"value": "Device Management Templates Create Categories",
					"action": "Create new navigation property to categories for deviceManagement",
					"description": "Create new navigation property to categories for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/categories"
						}
					}
				},
				{
					"name": "Device Management Templates Delete Categories",
					"value": "Device Management Templates Delete Categories",
					"action": "Delete navigation property categories for deviceManagement",
					"description": "Delete navigation property categories for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/categories/{{$parameter[\"deviceManagementTemplateSettingCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Templates Get Categories",
					"value": "Device Management Templates Get Categories",
					"action": "Get categories from deviceManagement",
					"description": "Collection of setting categories within the template",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/categories/{{$parameter[\"deviceManagementTemplateSettingCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Templates Update Categories",
					"value": "Device Management Templates Update Categories",
					"action": "Update the navigation property categories in deviceManagement",
					"description": "Update the navigation property categories in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/categories/{{$parameter[\"deviceManagementTemplateSettingCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Templates Categories List Recommended Settings",
					"value": "Device Management Templates Categories List Recommended Settings",
					"action": "Get recommendedSettings from deviceManagement",
					"description": "The settings this category contains",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/categories/{{$parameter[\"deviceManagementTemplateSettingCategory-id\"]}}/recommendedSettings"
						}
					}
				},
				{
					"name": "Device Management Templates Categories Create Recommended Settings",
					"value": "Device Management Templates Categories Create Recommended Settings",
					"action": "Create new navigation property to recommendedSettings for deviceManagement",
					"description": "Create new navigation property to recommendedSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/categories/{{$parameter[\"deviceManagementTemplateSettingCategory-id\"]}}/recommendedSettings"
						}
					}
				},
				{
					"name": "Device Management Templates Categories Delete Recommended Settings",
					"value": "Device Management Templates Categories Delete Recommended Settings",
					"action": "Delete navigation property recommendedSettings for deviceManagement",
					"description": "Delete navigation property recommendedSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/categories/{{$parameter[\"deviceManagementTemplateSettingCategory-id\"]}}/recommendedSettings/{{$parameter[\"deviceManagementSettingInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Templates Categories Get Recommended Settings",
					"value": "Device Management Templates Categories Get Recommended Settings",
					"action": "Get recommendedSettings from deviceManagement",
					"description": "The settings this category contains",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/categories/{{$parameter[\"deviceManagementTemplateSettingCategory-id\"]}}/recommendedSettings/{{$parameter[\"deviceManagementSettingInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Templates Categories Update Recommended Settings",
					"value": "Device Management Templates Categories Update Recommended Settings",
					"action": "Update the navigation property recommendedSettings in deviceManagement",
					"description": "Update the navigation property recommendedSettings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/categories/{{$parameter[\"deviceManagementTemplateSettingCategory-id\"]}}/recommendedSettings/{{$parameter[\"deviceManagementSettingInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Templates List Migratable To",
					"value": "Device Management Templates List Migratable To",
					"action": "Get migratableTo from deviceManagement",
					"description": "Collection of templates this template can migrate to",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo"
						}
					}
				},
				{
					"name": "Device Management Templates Create Migratable To",
					"value": "Device Management Templates Create Migratable To",
					"action": "Create new navigation property to migratableTo for deviceManagement",
					"description": "Create new navigation property to migratableTo for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo"
						}
					}
				},
				{
					"name": "Device Management Templates Delete Migratable To",
					"value": "Device Management Templates Delete Migratable To",
					"action": "Delete navigation property migratableTo for deviceManagement",
					"description": "Delete navigation property migratableTo for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo/{{$parameter[\"deviceManagementTemplate-id1\"]}}"
						}
					}
				},
				{
					"name": "Device Management Templates Get Migratable To",
					"value": "Device Management Templates Get Migratable To",
					"action": "Get migratableTo from deviceManagement",
					"description": "Collection of templates this template can migrate to",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo/{{$parameter[\"deviceManagementTemplate-id1\"]}}"
						}
					}
				},
				{
					"name": "Device Management Templates Update Migratable To",
					"value": "Device Management Templates Update Migratable To",
					"action": "Update the navigation property migratableTo in deviceManagement",
					"description": "Update the navigation property migratableTo in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo/{{$parameter[\"deviceManagementTemplate-id1\"]}}"
						}
					}
				},
				{
					"name": "Device Management Templates Migratable To List Categories",
					"value": "Device Management Templates Migratable To List Categories",
					"action": "Get categories from deviceManagement",
					"description": "Collection of setting categories within the template",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo/{{$parameter[\"deviceManagementTemplate-id1\"]}}/categories"
						}
					}
				},
				{
					"name": "Device Management Templates Migratable To Create Categories",
					"value": "Device Management Templates Migratable To Create Categories",
					"action": "Create new navigation property to categories for deviceManagement",
					"description": "Create new navigation property to categories for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo/{{$parameter[\"deviceManagementTemplate-id1\"]}}/categories"
						}
					}
				},
				{
					"name": "Device Management Templates Migratable To Delete Categories",
					"value": "Device Management Templates Migratable To Delete Categories",
					"action": "Delete navigation property categories for deviceManagement",
					"description": "Delete navigation property categories for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo/{{$parameter[\"deviceManagementTemplate-id1\"]}}/categories/{{$parameter[\"deviceManagementTemplateSettingCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Templates Migratable To Get Categories",
					"value": "Device Management Templates Migratable To Get Categories",
					"action": "Get categories from deviceManagement",
					"description": "Collection of setting categories within the template",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo/{{$parameter[\"deviceManagementTemplate-id1\"]}}/categories/{{$parameter[\"deviceManagementTemplateSettingCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Templates Migratable To Update Categories",
					"value": "Device Management Templates Migratable To Update Categories",
					"action": "Update the navigation property categories in deviceManagement",
					"description": "Update the navigation property categories in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo/{{$parameter[\"deviceManagementTemplate-id1\"]}}/categories/{{$parameter[\"deviceManagementTemplateSettingCategory-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Templates Migratable To Categories List Recommended Settings",
					"value": "Device Management Templates Migratable To Categories List Recommended Settings",
					"action": "Get recommendedSettings from deviceManagement",
					"description": "The settings this category contains",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo/{{$parameter[\"deviceManagementTemplate-id1\"]}}/categories/{{$parameter[\"deviceManagementTemplateSettingCategory-id\"]}}/recommendedSettings"
						}
					}
				},
				{
					"name": "Device Management Templates Migratable To Categories Create Recommended Settings",
					"value": "Device Management Templates Migratable To Categories Create Recommended Settings",
					"action": "Create new navigation property to recommendedSettings for deviceManagement",
					"description": "Create new navigation property to recommendedSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo/{{$parameter[\"deviceManagementTemplate-id1\"]}}/categories/{{$parameter[\"deviceManagementTemplateSettingCategory-id\"]}}/recommendedSettings"
						}
					}
				},
				{
					"name": "Device Management Templates Migratable To Categories Delete Recommended Settings",
					"value": "Device Management Templates Migratable To Categories Delete Recommended Settings",
					"action": "Delete navigation property recommendedSettings for deviceManagement",
					"description": "Delete navigation property recommendedSettings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo/{{$parameter[\"deviceManagementTemplate-id1\"]}}/categories/{{$parameter[\"deviceManagementTemplateSettingCategory-id\"]}}/recommendedSettings/{{$parameter[\"deviceManagementSettingInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Templates Migratable To Categories Get Recommended Settings",
					"value": "Device Management Templates Migratable To Categories Get Recommended Settings",
					"action": "Get recommendedSettings from deviceManagement",
					"description": "The settings this category contains",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo/{{$parameter[\"deviceManagementTemplate-id1\"]}}/categories/{{$parameter[\"deviceManagementTemplateSettingCategory-id\"]}}/recommendedSettings/{{$parameter[\"deviceManagementSettingInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Templates Migratable To Categories Update Recommended Settings",
					"value": "Device Management Templates Migratable To Categories Update Recommended Settings",
					"action": "Update the navigation property recommendedSettings in deviceManagement",
					"description": "Update the navigation property recommendedSettings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo/{{$parameter[\"deviceManagementTemplate-id1\"]}}/categories/{{$parameter[\"deviceManagementTemplateSettingCategory-id\"]}}/recommendedSettings/{{$parameter[\"deviceManagementSettingInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Templates Migratable To List Settings",
					"value": "Device Management Templates Migratable To List Settings",
					"action": "Get settings from deviceManagement",
					"description": "Collection of all settings this template has",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo/{{$parameter[\"deviceManagementTemplate-id1\"]}}/settings"
						}
					}
				},
				{
					"name": "Device Management Templates Migratable To Create Settings",
					"value": "Device Management Templates Migratable To Create Settings",
					"action": "Create new navigation property to settings for deviceManagement",
					"description": "Create new navigation property to settings for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo/{{$parameter[\"deviceManagementTemplate-id1\"]}}/settings"
						}
					}
				},
				{
					"name": "Device Management Templates Migratable To Delete Settings",
					"value": "Device Management Templates Migratable To Delete Settings",
					"action": "Delete navigation property settings for deviceManagement",
					"description": "Delete navigation property settings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo/{{$parameter[\"deviceManagementTemplate-id1\"]}}/settings/{{$parameter[\"deviceManagementSettingInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Templates Migratable To Get Settings",
					"value": "Device Management Templates Migratable To Get Settings",
					"action": "Get settings from deviceManagement",
					"description": "Collection of all settings this template has",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo/{{$parameter[\"deviceManagementTemplate-id1\"]}}/settings/{{$parameter[\"deviceManagementSettingInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Templates Migratable To Update Settings",
					"value": "Device Management Templates Migratable To Update Settings",
					"action": "Update the navigation property settings in deviceManagement",
					"description": "Update the navigation property settings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/migratableTo/{{$parameter[\"deviceManagementTemplate-id1\"]}}/settings/{{$parameter[\"deviceManagementSettingInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Templates List Settings",
					"value": "Device Management Templates List Settings",
					"action": "Get settings from deviceManagement",
					"description": "Collection of all settings this template has",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Device Management Templates Create Settings",
					"value": "Device Management Templates Create Settings",
					"action": "Create new navigation property to settings for deviceManagement",
					"description": "Create new navigation property to settings for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Device Management Templates Delete Settings",
					"value": "Device Management Templates Delete Settings",
					"action": "Delete navigation property settings for deviceManagement",
					"description": "Delete navigation property settings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/settings/{{$parameter[\"deviceManagementSettingInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Templates Get Settings",
					"value": "Device Management Templates Get Settings",
					"action": "Get settings from deviceManagement",
					"description": "Collection of all settings this template has",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/settings/{{$parameter[\"deviceManagementSettingInstance-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Templates Update Settings",
					"value": "Device Management Templates Update Settings",
					"action": "Update the navigation property settings in deviceManagement",
					"description": "Update the navigation property settings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/templates/{{$parameter[\"deviceManagementTemplate-id\"]}}/settings/{{$parameter[\"deviceManagementSettingInstance-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/templates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management List Templates"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management List Templates"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management List Templates"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management List Templates"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management List Templates"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management List Templates"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management List Templates"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management List Templates"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management List Templates"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Create Templates"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templates<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Create Templates"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/templates/{deviceManagementTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Delete Templates"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Delete Templates"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/templates/{deviceManagementTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Get Templates"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Get Templates"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Get Templates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/templates/{deviceManagementTemplate-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Update Templates"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/templates/{deviceManagementTemplate-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Update Templates"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Create Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Create Categories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Delete Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Delete Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Get Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Get Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Get Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Update Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Update Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Categories List Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Categories List Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Categories List Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Categories List Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Categories List Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Categories List Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Categories List Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Categories List Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Categories List Recommended Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Categories Create Recommended Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Categories Create Recommended Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Categories Delete Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Categories Delete Recommended Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Categories Get Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Categories Get Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Categories Get Recommended Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Categories Update Recommended Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Categories Update Recommended Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Migratable To"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Migratable To"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Migratable To"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Migratable To"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Migratable To"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Migratable To"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Migratable To"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Migratable To"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Migratable To"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Create Migratable To"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Create Migratable To"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Delete Migratable To"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Delete Migratable To"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Get Migratable To"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Get Migratable To"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Get Migratable To"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Update Migratable To"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Update Migratable To"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To List Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To List Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To List Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To List Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To List Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To List Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To List Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To List Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To List Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/categories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Create Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/categories<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Create Categories"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/categories/{deviceManagementTemplateSettingCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Delete Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Delete Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/categories/{deviceManagementTemplateSettingCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Get Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Get Categories"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Get Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/categories/{deviceManagementTemplateSettingCategory-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Update Categories"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/categories/{deviceManagementTemplateSettingCategory-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Update Categories"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Categories List Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Categories List Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Categories List Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Categories List Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Categories List Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Categories List Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Categories List Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Categories List Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Categories List Recommended Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Categories Create Recommended Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Categories Create Recommended Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Categories Delete Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Categories Delete Recommended Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Categories Get Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Categories Get Recommended Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Categories Get Recommended Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Categories Update Recommended Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/categories/{deviceManagementTemplateSettingCategory-id}/recommendedSettings/{deviceManagementSettingInstance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Categories Update Recommended Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To List Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To List Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To List Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To List Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To List Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To List Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To List Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To List Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To List Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Create Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Create Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Delete Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Delete Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Get Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Get Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Get Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Update Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/migratableTo/{deviceManagementTemplate-id1}/settings/{deviceManagementSettingInstance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Migratable To Update Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/templates/{deviceManagementTemplate-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates List Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templates/{deviceManagementTemplate-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Create Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/templates/{deviceManagementTemplate-id}/settings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Create Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Delete Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Delete Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Get Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Get Settings"
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
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Get Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Update Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/templates/{deviceManagementTemplate-id}/settings/{deviceManagementSettingInstance-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Template"
					],
					"operation": [
						"Device Management Templates Update Settings"
					]
				}
			}
		},
];
