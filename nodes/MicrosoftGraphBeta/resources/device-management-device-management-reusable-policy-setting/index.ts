import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceManagementReusablePolicySettingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Reusable Policy Settings",
					"value": "Device Management List Reusable Policy Settings",
					"action": "Get reusablePolicySettings from deviceManagement",
					"description": "List of all reusable settings that can be referred in a policy",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/reusablePolicySettings"
						}
					}
				},
				{
					"name": "Device Management Create Reusable Policy Settings",
					"value": "Device Management Create Reusable Policy Settings",
					"action": "Create new navigation property to reusablePolicySettings for deviceManagement",
					"description": "Create new navigation property to reusablePolicySettings for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reusablePolicySettings"
						}
					}
				},
				{
					"name": "Device Management Delete Reusable Policy Settings",
					"value": "Device Management Delete Reusable Policy Settings",
					"action": "Delete navigation property reusablePolicySettings for deviceManagement",
					"description": "Delete navigation property reusablePolicySettings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Reusable Policy Settings",
					"value": "Device Management Get Reusable Policy Settings",
					"action": "Get reusablePolicySettings from deviceManagement",
					"description": "List of all reusable settings that can be referred in a policy",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Reusable Policy Settings",
					"value": "Device Management Update Reusable Policy Settings",
					"action": "Update the navigation property reusablePolicySettings in deviceManagement",
					"description": "Update the navigation property reusablePolicySettings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Reusable Policy Settings List Referencing Configuration Policies",
					"value": "Device Management Reusable Policy Settings List Referencing Configuration Policies",
					"action": "Get referencingConfigurationPolicies from deviceManagement",
					"description": "configuration policies referencing the current reusable setting. This property is read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}/referencingConfigurationPolicies"
						}
					}
				},
				{
					"name": "Device Management Reusable Policy Settings Create Referencing Configuration Policies",
					"value": "Device Management Reusable Policy Settings Create Referencing Configuration Policies",
					"action": "Create new navigation property to referencingConfigurationPolicies for deviceManagement",
					"description": "Create new navigation property to referencingConfigurationPolicies for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}/referencingConfigurationPolicies"
						}
					}
				},
				{
					"name": "Device Management Reusable Policy Settings Delete Referencing Configuration Policies",
					"value": "Device Management Reusable Policy Settings Delete Referencing Configuration Policies",
					"action": "Delete navigation property referencingConfigurationPolicies for deviceManagement",
					"description": "Delete navigation property referencingConfigurationPolicies for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}/referencingConfigurationPolicies/{{$parameter[\"deviceManagementConfigurationPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Reusable Policy Settings Get Referencing Configuration Policies",
					"value": "Device Management Reusable Policy Settings Get Referencing Configuration Policies",
					"action": "Get referencingConfigurationPolicies from deviceManagement",
					"description": "configuration policies referencing the current reusable setting. This property is read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}/referencingConfigurationPolicies/{{$parameter[\"deviceManagementConfigurationPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Reusable Policy Settings Update Referencing Configuration Policies",
					"value": "Device Management Reusable Policy Settings Update Referencing Configuration Policies",
					"action": "Update the navigation property referencingConfigurationPolicies in deviceManagement",
					"description": "Update the navigation property referencingConfigurationPolicies in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}/referencingConfigurationPolicies/{{$parameter[\"deviceManagementConfigurationPolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Reusable Policy Settings Referencing Configuration Policies List Assignments",
					"value": "Device Management Reusable Policy Settings Referencing Configuration Policies List Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "Policy assignments",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}/referencingConfigurationPolicies/{{$parameter[\"deviceManagementConfigurationPolicy-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Reusable Policy Settings Referencing Configuration Policies Create Assignments",
					"value": "Device Management Reusable Policy Settings Referencing Configuration Policies Create Assignments",
					"action": "Create new navigation property to assignments for deviceManagement",
					"description": "Create new navigation property to assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}/referencingConfigurationPolicies/{{$parameter[\"deviceManagementConfigurationPolicy-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Reusable Policy Settings Referencing Configuration Policies Delete Assignments",
					"value": "Device Management Reusable Policy Settings Referencing Configuration Policies Delete Assignments",
					"action": "Delete navigation property assignments for deviceManagement",
					"description": "Delete navigation property assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}/referencingConfigurationPolicies/{{$parameter[\"deviceManagementConfigurationPolicy-id\"]}}/assignments/{{$parameter[\"deviceManagementConfigurationPolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Reusable Policy Settings Referencing Configuration Policies Get Assignments",
					"value": "Device Management Reusable Policy Settings Referencing Configuration Policies Get Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "Policy assignments",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}/referencingConfigurationPolicies/{{$parameter[\"deviceManagementConfigurationPolicy-id\"]}}/assignments/{{$parameter[\"deviceManagementConfigurationPolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Reusable Policy Settings Referencing Configuration Policies Update Assignments",
					"value": "Device Management Reusable Policy Settings Referencing Configuration Policies Update Assignments",
					"action": "Update the navigation property assignments in deviceManagement",
					"description": "Update the navigation property assignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}/referencingConfigurationPolicies/{{$parameter[\"deviceManagementConfigurationPolicy-id\"]}}/assignments/{{$parameter[\"deviceManagementConfigurationPolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Reusable Policy Settings Referencing Configuration Policies List Settings",
					"value": "Device Management Reusable Policy Settings Referencing Configuration Policies List Settings",
					"action": "Get settings from deviceManagement",
					"description": "Policy settings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}/referencingConfigurationPolicies/{{$parameter[\"deviceManagementConfigurationPolicy-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Device Management Reusable Policy Settings Referencing Configuration Policies Create Settings",
					"value": "Device Management Reusable Policy Settings Referencing Configuration Policies Create Settings",
					"action": "Create new navigation property to settings for deviceManagement",
					"description": "Create new navigation property to settings for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}/referencingConfigurationPolicies/{{$parameter[\"deviceManagementConfigurationPolicy-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Device Management Reusable Policy Settings Referencing Configuration Policies Delete Settings",
					"value": "Device Management Reusable Policy Settings Referencing Configuration Policies Delete Settings",
					"action": "Delete navigation property settings for deviceManagement",
					"description": "Delete navigation property settings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}/referencingConfigurationPolicies/{{$parameter[\"deviceManagementConfigurationPolicy-id\"]}}/settings/{{$parameter[\"deviceManagementConfigurationSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Reusable Policy Settings Referencing Configuration Policies Get Settings",
					"value": "Device Management Reusable Policy Settings Referencing Configuration Policies Get Settings",
					"action": "Get settings from deviceManagement",
					"description": "Policy settings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}/referencingConfigurationPolicies/{{$parameter[\"deviceManagementConfigurationPolicy-id\"]}}/settings/{{$parameter[\"deviceManagementConfigurationSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Reusable Policy Settings Referencing Configuration Policies Update Settings",
					"value": "Device Management Reusable Policy Settings Referencing Configuration Policies Update Settings",
					"action": "Update the navigation property settings in deviceManagement",
					"description": "Update the navigation property settings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}/referencingConfigurationPolicies/{{$parameter[\"deviceManagementConfigurationPolicy-id\"]}}/settings/{{$parameter[\"deviceManagementConfigurationSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Reusable Policy Settings Referencing Configuration Policies Settings List Setting Definitions",
					"value": "Device Management Reusable Policy Settings Referencing Configuration Policies Settings List Setting Definitions",
					"action": "Get settingDefinitions from deviceManagement",
					"description": "List of related Setting Definitions. This property is read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}/referencingConfigurationPolicies/{{$parameter[\"deviceManagementConfigurationPolicy-id\"]}}/settings/{{$parameter[\"deviceManagementConfigurationSetting-id\"]}}/settingDefinitions"
						}
					}
				},
				{
					"name": "Device Management Reusable Policy Settings Referencing Configuration Policies Settings Get Setting Definitions",
					"value": "Device Management Reusable Policy Settings Referencing Configuration Policies Settings Get Setting Definitions",
					"action": "Get settingDefinitions from deviceManagement",
					"description": "List of related Setting Definitions. This property is read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/reusablePolicySettings/{{$parameter[\"deviceManagementReusablePolicySetting-id\"]}}/referencingConfigurationPolicies/{{$parameter[\"deviceManagementConfigurationPolicy-id\"]}}/settings/{{$parameter[\"deviceManagementConfigurationSetting-id\"]}}/settingDefinitions/{{$parameter[\"deviceManagementConfigurationSettingDefinition-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/reusablePolicySettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management List Reusable Policy Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management List Reusable Policy Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management List Reusable Policy Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management List Reusable Policy Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management List Reusable Policy Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management List Reusable Policy Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management List Reusable Policy Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management List Reusable Policy Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management List Reusable Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reusablePolicySettings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Create Reusable Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reusablePolicySettings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Create Reusable Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Delete Reusable Policy Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Delete Reusable Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Get Reusable Policy Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Get Reusable Policy Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Get Reusable Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Update Reusable Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Update Reusable Policy Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings List Referencing Configuration Policies"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings List Referencing Configuration Policies"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings List Referencing Configuration Policies"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings List Referencing Configuration Policies"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings List Referencing Configuration Policies"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings List Referencing Configuration Policies"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings List Referencing Configuration Policies"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings List Referencing Configuration Policies"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings List Referencing Configuration Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Create Referencing Configuration Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Create Referencing Configuration Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Delete Referencing Configuration Policies"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Delete Referencing Configuration Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Get Referencing Configuration Policies"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Get Referencing Configuration Policies"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Get Referencing Configuration Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Update Referencing Configuration Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Update Referencing Configuration Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies List Assignments"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies List Assignments"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies List Assignments"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies List Assignments"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies List Assignments"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies List Assignments"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies List Assignments"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies List Assignments"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Delete Assignments"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Get Assignments"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Get Assignments"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies List Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies List Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies List Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies List Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies List Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies List Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies List Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies List Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies List Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Create Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Create Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Delete Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Delete Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Get Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Get Settings"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Get Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Update Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Update Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Settings List Setting Definitions"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Settings List Setting Definitions"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Settings List Setting Definitions"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Settings List Setting Definitions"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Settings List Setting Definitions"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Settings List Setting Definitions"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Settings List Setting Definitions"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Settings List Setting Definitions"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Settings List Setting Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/reusablePolicySettings/{deviceManagementReusablePolicySetting-id}/referencingConfigurationPolicies/{deviceManagementConfigurationPolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Settings Get Setting Definitions"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Settings Get Setting Definitions"
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
						"Device Management Device Management Reusable Policy Setting"
					],
					"operation": [
						"Device Management Reusable Policy Settings Referencing Configuration Policies Settings Get Setting Definitions"
					]
				}
			}
		},
];
