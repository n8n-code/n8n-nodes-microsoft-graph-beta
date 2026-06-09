import type { INodeProperties } from 'n8n-workflow';

export const deviceManagementDeviceManagementCompliancePolicyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					]
				}
			},
			"options": [
				{
					"name": "Device Management List Compliance Policies",
					"value": "Device Management List Compliance Policies",
					"action": "Get compliancePolicies from deviceManagement",
					"description": "List of all compliance policies",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/compliancePolicies"
						}
					}
				},
				{
					"name": "Device Management Create Compliance Policies",
					"value": "Device Management Create Compliance Policies",
					"action": "Create new navigation property to compliancePolicies for deviceManagement",
					"description": "Create new navigation property to compliancePolicies for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/compliancePolicies"
						}
					}
				},
				{
					"name": "Device Management Delete Compliance Policies",
					"value": "Device Management Delete Compliance Policies",
					"action": "Delete navigation property compliancePolicies for deviceManagement",
					"description": "Delete navigation property compliancePolicies for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Get Compliance Policies",
					"value": "Device Management Get Compliance Policies",
					"action": "Get compliancePolicies from deviceManagement",
					"description": "List of all compliance policies",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Update Compliance Policies",
					"value": "Device Management Update Compliance Policies",
					"action": "Update the navigation property compliancePolicies in deviceManagement",
					"description": "Update the navigation property compliancePolicies in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies List Assignments",
					"value": "Device Management Compliance Policies List Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "Policy assignments",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies Create Assignments",
					"value": "Device Management Compliance Policies Create Assignments",
					"action": "Create new navigation property to assignments for deviceManagement",
					"description": "Create new navigation property to assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/assignments"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies Delete Assignments",
					"value": "Device Management Compliance Policies Delete Assignments",
					"action": "Delete navigation property assignments for deviceManagement",
					"description": "Delete navigation property assignments for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/assignments/{{$parameter[\"deviceManagementConfigurationPolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies Get Assignments",
					"value": "Device Management Compliance Policies Get Assignments",
					"action": "Get assignments from deviceManagement",
					"description": "Policy assignments",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/assignments/{{$parameter[\"deviceManagementConfigurationPolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies Update Assignments",
					"value": "Device Management Compliance Policies Update Assignments",
					"action": "Update the navigation property assignments in deviceManagement",
					"description": "Update the navigation property assignments in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/assignments/{{$parameter[\"deviceManagementConfigurationPolicyAssignment-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies List Scheduled Actions For Rule",
					"value": "Device Management Compliance Policies List Scheduled Actions For Rule",
					"action": "Get scheduledActionsForRule from deviceManagement",
					"description": "The list of scheduled action for this rule",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/scheduledActionsForRule"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies Create Scheduled Actions For Rule",
					"value": "Device Management Compliance Policies Create Scheduled Actions For Rule",
					"action": "Create new navigation property to scheduledActionsForRule for deviceManagement",
					"description": "Create new navigation property to scheduledActionsForRule for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/scheduledActionsForRule"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies Delete Scheduled Actions For Rule",
					"value": "Device Management Compliance Policies Delete Scheduled Actions For Rule",
					"action": "Delete navigation property scheduledActionsForRule for deviceManagement",
					"description": "Delete navigation property scheduledActionsForRule for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/scheduledActionsForRule/{{$parameter[\"deviceManagementComplianceScheduledActionForRule-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies Get Scheduled Actions For Rule",
					"value": "Device Management Compliance Policies Get Scheduled Actions For Rule",
					"action": "Get scheduledActionsForRule from deviceManagement",
					"description": "The list of scheduled action for this rule",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/scheduledActionsForRule/{{$parameter[\"deviceManagementComplianceScheduledActionForRule-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies Update Scheduled Actions For Rule",
					"value": "Device Management Compliance Policies Update Scheduled Actions For Rule",
					"action": "Update the navigation property scheduledActionsForRule in deviceManagement",
					"description": "Update the navigation property scheduledActionsForRule in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/scheduledActionsForRule/{{$parameter[\"deviceManagementComplianceScheduledActionForRule-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations",
					"value": "Device Management Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations",
					"action": "Get scheduledActionConfigurations from deviceManagement",
					"description": "The list of scheduled action configurations for this compliance policy. This collection can contain a maximum of 100 elements.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/scheduledActionsForRule/{{$parameter[\"deviceManagementComplianceScheduledActionForRule-id\"]}}/scheduledActionConfigurations"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies Scheduled Actions For Rule Create Scheduled Action Configurations",
					"value": "Device Management Compliance Policies Scheduled Actions For Rule Create Scheduled Action Configurations",
					"action": "Create new navigation property to scheduledActionConfigurations for deviceManagement",
					"description": "Create new navigation property to scheduledActionConfigurations for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/scheduledActionsForRule/{{$parameter[\"deviceManagementComplianceScheduledActionForRule-id\"]}}/scheduledActionConfigurations"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies Scheduled Actions For Rule Delete Scheduled Action Configurations",
					"value": "Device Management Compliance Policies Scheduled Actions For Rule Delete Scheduled Action Configurations",
					"action": "Delete navigation property scheduledActionConfigurations for deviceManagement",
					"description": "Delete navigation property scheduledActionConfigurations for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/scheduledActionsForRule/{{$parameter[\"deviceManagementComplianceScheduledActionForRule-id\"]}}/scheduledActionConfigurations/{{$parameter[\"deviceManagementComplianceActionItem-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies Scheduled Actions For Rule Get Scheduled Action Configurations",
					"value": "Device Management Compliance Policies Scheduled Actions For Rule Get Scheduled Action Configurations",
					"action": "Get scheduledActionConfigurations from deviceManagement",
					"description": "The list of scheduled action configurations for this compliance policy. This collection can contain a maximum of 100 elements.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/scheduledActionsForRule/{{$parameter[\"deviceManagementComplianceScheduledActionForRule-id\"]}}/scheduledActionConfigurations/{{$parameter[\"deviceManagementComplianceActionItem-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies Scheduled Actions For Rule Update Scheduled Action Configurations",
					"value": "Device Management Compliance Policies Scheduled Actions For Rule Update Scheduled Action Configurations",
					"action": "Update the navigation property scheduledActionConfigurations in deviceManagement",
					"description": "Update the navigation property scheduledActionConfigurations in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/scheduledActionsForRule/{{$parameter[\"deviceManagementComplianceScheduledActionForRule-id\"]}}/scheduledActionConfigurations/{{$parameter[\"deviceManagementComplianceActionItem-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies List Settings",
					"value": "Device Management Compliance Policies List Settings",
					"action": "Get settings from deviceManagement",
					"description": "Policy settings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies Create Settings",
					"value": "Device Management Compliance Policies Create Settings",
					"action": "Create new navigation property to settings for deviceManagement",
					"description": "Create new navigation property to settings for deviceManagement",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/settings"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies Delete Settings",
					"value": "Device Management Compliance Policies Delete Settings",
					"action": "Delete navigation property settings for deviceManagement",
					"description": "Delete navigation property settings for deviceManagement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/settings/{{$parameter[\"deviceManagementConfigurationSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies Get Settings",
					"value": "Device Management Compliance Policies Get Settings",
					"action": "Get settings from deviceManagement",
					"description": "Policy settings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/settings/{{$parameter[\"deviceManagementConfigurationSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies Update Settings",
					"value": "Device Management Compliance Policies Update Settings",
					"action": "Update the navigation property settings in deviceManagement",
					"description": "Update the navigation property settings in deviceManagement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/settings/{{$parameter[\"deviceManagementConfigurationSetting-id\"]}}"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies Settings List Setting Definitions",
					"value": "Device Management Compliance Policies Settings List Setting Definitions",
					"action": "Get settingDefinitions from deviceManagement",
					"description": "List of related Setting Definitions. This property is read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/settings/{{$parameter[\"deviceManagementConfigurationSetting-id\"]}}/settingDefinitions"
						}
					}
				},
				{
					"name": "Device Management Compliance Policies Settings Get Setting Definitions",
					"value": "Device Management Compliance Policies Settings Get Setting Definitions",
					"action": "Get settingDefinitions from deviceManagement",
					"description": "List of related Setting Definitions. This property is read-only.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/deviceManagement/compliancePolicies/{{$parameter[\"deviceManagementCompliancePolicy-id\"]}}/settings/{{$parameter[\"deviceManagementConfigurationSetting-id\"]}}/settingDefinitions/{{$parameter[\"deviceManagementConfigurationSettingDefinition-id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /deviceManagement/compliancePolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management List Compliance Policies"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management List Compliance Policies"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management List Compliance Policies"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management List Compliance Policies"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management List Compliance Policies"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management List Compliance Policies"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management List Compliance Policies"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management List Compliance Policies"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management List Compliance Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/compliancePolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Create Compliance Policies"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/compliancePolicies<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Create Compliance Policies"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Delete Compliance Policies"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Delete Compliance Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Get Compliance Policies"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Get Compliance Policies"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Get Compliance Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Update Compliance Policies"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Update Compliance Policies"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Assignments"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Assignments"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Assignments"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Assignments"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Assignments"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Assignments"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Assignments"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Assignments"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Create Assignments"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Delete Assignments"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Delete Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Get Assignments"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Get Assignments"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Get Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/assignments/{deviceManagementConfigurationPolicyAssignment-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Update Assignments"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Scheduled Actions For Rule"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Scheduled Actions For Rule"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Scheduled Actions For Rule"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Scheduled Actions For Rule"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Scheduled Actions For Rule"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Scheduled Actions For Rule"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Scheduled Actions For Rule"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Scheduled Actions For Rule"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Scheduled Actions For Rule"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Create Scheduled Actions For Rule"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Create Scheduled Actions For Rule"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Delete Scheduled Actions For Rule"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Delete Scheduled Actions For Rule"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Get Scheduled Actions For Rule"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Get Scheduled Actions For Rule"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Get Scheduled Actions For Rule"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Update Scheduled Actions For Rule"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Update Scheduled Actions For Rule"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}/scheduledActionConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Scheduled Actions For Rule List Scheduled Action Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}/scheduledActionConfigurations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Scheduled Actions For Rule Create Scheduled Action Configurations"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}/scheduledActionConfigurations<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Scheduled Actions For Rule Create Scheduled Action Configurations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceManagementComplianceActionItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Scheduled Actions For Rule Delete Scheduled Action Configurations"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Scheduled Actions For Rule Delete Scheduled Action Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceManagementComplianceActionItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Scheduled Actions For Rule Get Scheduled Action Configurations"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Scheduled Actions For Rule Get Scheduled Action Configurations"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Scheduled Actions For Rule Get Scheduled Action Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceManagementComplianceActionItem-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Scheduled Actions For Rule Update Scheduled Action Configurations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/scheduledActionsForRule/{deviceManagementComplianceScheduledActionForRule-id}/scheduledActionConfigurations/{deviceManagementComplianceActionItem-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Scheduled Actions For Rule Update Scheduled Action Configurations"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Settings"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Settings"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Settings"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Settings"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Settings"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Settings"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Settings"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Settings"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies List Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Create Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Create Settings"
					]
				}
			}
		},
		{
			"displayName": "DELETE /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Delete Settings"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Delete Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Get Settings"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Get Settings"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Get Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Update Settings"
					]
				}
			}
		},
		{
			"displayName": "PATCH /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Update Settings"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Settings List Setting Definitions"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Settings List Setting Definitions"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Settings List Setting Definitions"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Settings List Setting Definitions"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Settings List Setting Definitions"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Settings List Setting Definitions"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Settings List Setting Definitions"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Settings List Setting Definitions"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Settings List Setting Definitions"
					]
				}
			}
		},
		{
			"displayName": "GET /deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy-id}/settings/{deviceManagementConfigurationSetting-id}/settingDefinitions/{deviceManagementConfigurationSettingDefinition-id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Settings Get Setting Definitions"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Settings Get Setting Definitions"
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
						"Device Management Device Management Compliance Policy"
					],
					"operation": [
						"Device Management Compliance Policies Settings Get Setting Definitions"
					]
				}
			}
		},
];
